const sudokuBoard = document.getElementById('sudoku-board');
const sudokuStatus = document.getElementById('sudoku-status');
const newButton = document.getElementById('sudoku-new');
const hintButton = document.getElementById('sudoku-hint');
const checkButton = document.getElementById('sudoku-check');
const solveButton = document.getElementById('sudoku-solve');
const difficultySelect = document.getElementById('sudoku-difficulty');
const timerDisplay = document.getElementById('sudoku-timer');
const scoreDisplay = document.getElementById('sudoku-score');
const bestTimeDisplay = document.getElementById('sudoku-best-time');

if (
    sudokuBoard
    && sudokuStatus
    && newButton
    && hintButton
    && checkButton
    && solveButton
    && difficultySelect
    && timerDisplay
    && scoreDisplay
    && bestTimeDisplay
) {
    const size = 9;
    const boxSize = 3;
    const emptyValue = 0;
    const profileId = sessionStorage.getItem('workNotesActiveProfileId') || 'default';
    const difficultyMap = {
        easy: 40,
        medium: 48,
        hard: 56
    };
    const scoreBaseByDifficulty = {
        easy: 1200,
        medium: 1800,
        hard: 2400
    };

    let puzzle = [];
    let solution = [];
    let timerId = null;
    let elapsedSeconds = 0;
    let timerStarted = false;
    let isCompleted = false;
    let hintsUsed = 0;

    renderBestTime();
    startNewPuzzle();

    newButton.addEventListener('click', () => {
        startNewPuzzle();
    });

    hintButton.addEventListener('click', () => {
        useHint();
    });

    checkButton.addEventListener('click', () => {
        checkPuzzle();
    });

    solveButton.addEventListener('click', () => {
        revealSolution();
    });

    difficultySelect.addEventListener('change', () => {
        startNewPuzzle();
    });

    function startNewPuzzle() {
        const selectedDifficulty = getSelectedDifficulty();
        const removeCount = difficultyMap[selectedDifficulty];
        solution = createSolvedBoard();
        puzzle = createPuzzleFromSolution(solution, removeCount);
        resetRunState();
        renderBoard(puzzle);
        setStatus(`New ${selectedDifficulty} puzzle ready. Fill in the empty cells.`);
    }

    function getSelectedDifficulty() {
        const selected = difficultySelect.value;
        return Object.prototype.hasOwnProperty.call(difficultyMap, selected) ? selected : 'medium';
    }

    function createSolvedBoard() {
        const base = [0, 1, 2];
        const rows = shuffle(base).flatMap((group) => shuffle(base).map((offset) => group * boxSize + offset));
        const cols = shuffle(base).flatMap((group) => shuffle(base).map((offset) => group * boxSize + offset));
        const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        const board = Array.from({ length: size }, () => Array(size).fill(emptyValue));
        for (let r = 0; r < size; r += 1) {
            for (let c = 0; c < size; c += 1) {
                const value = nums[pattern(rows[r], cols[c])];
                board[r][c] = value;
            }
        }

        return board;
    }

    function createPuzzleFromSolution(fullBoard, cellsToRemove) {
        const next = fullBoard.map((row) => [...row]);
        const cells = [];

        for (let r = 0; r < size; r += 1) {
            for (let c = 0; c < size; c += 1) {
                cells.push([r, c]);
            }
        }

        const randomCells = shuffle(cells);
        const count = Math.min(cellsToRemove, randomCells.length);

        for (let i = 0; i < count; i += 1) {
            const [r, c] = randomCells[i];
            next[r][c] = emptyValue;
        }

        return next;
    }

    function renderBoard(boardState) {
        sudokuBoard.innerHTML = '';

        for (let r = 0; r < size; r += 1) {
            for (let c = 0; c < size; c += 1) {
                const input = document.createElement('input');
                input.type = 'text';
                input.inputMode = 'numeric';
                input.maxLength = 1;
                input.className = 'sudoku-cell';
                input.dataset.row = String(r);
                input.dataset.col = String(c);
                input.setAttribute('aria-label', `Row ${r + 1}, Column ${c + 1}`);

                const value = boardState[r][c];
                if (value !== emptyValue) {
                    input.value = String(value);
                    input.readOnly = true;
                    input.classList.add('given');
                }

                if (c === 2 || c === 5) {
                    input.classList.add('block-right');
                }
                if (r === 2 || r === 5) {
                    input.classList.add('block-bottom');
                }

                input.addEventListener('input', () => {
                    input.value = input.value.replace(/[^1-9]/g, '').slice(0, 1);
                    input.classList.remove('invalid');
                    input.classList.remove('hint-fill');
                    maybeStartTimer();
                    tryFinishIfSolved();
                });

                sudokuBoard.appendChild(input);
            }
        }
    }

    function getCurrentBoard() {
        const current = Array.from({ length: size }, () => Array(size).fill(emptyValue));
        const cells = sudokuBoard.querySelectorAll('.sudoku-cell');

        cells.forEach((cell) => {
            const r = Number(cell.dataset.row);
            const c = Number(cell.dataset.col);
            const value = Number(cell.value) || emptyValue;
            current[r][c] = value;
        });

        return current;
    }

    function checkPuzzle() {
        clearInvalidMarks();

        const current = getCurrentBoard();
        const emptyCells = findEmptyCells(current);
        if (emptyCells.length) {
            setStatus('Keep going. Fill all cells before checking final correctness.');
            return;
        }

        const invalid = [];

        for (let r = 0; r < size; r += 1) {
            for (let c = 0; c < size; c += 1) {
                if (current[r][c] !== solution[r][c]) {
                    invalid.push([r, c]);
                }
            }
        }

        if (invalid.length === 0) {
            finalizeSolvedGame();
            return;
        }

        markInvalidCells(invalid);
        setStatus('Some cells are incorrect. Highlighted cells need another look.');
    }

    function revealSolution() {
        const cells = sudokuBoard.querySelectorAll('.sudoku-cell');
        cells.forEach((cell) => {
            const r = Number(cell.dataset.row);
            const c = Number(cell.dataset.col);
            cell.value = String(solution[r][c]);
            cell.readOnly = true;
            cell.classList.remove('invalid');
            cell.classList.add('given');
        });

        isCompleted = true;
        stopTimer();

        setStatus('Solution revealed. Start a new puzzle to play again.');
    }

    function useHint() {
        if (isCompleted) {
            setStatus('Puzzle already completed. Start a new puzzle for another round.');
            return;
        }

        const current = getCurrentBoard();
        const candidates = [];

        for (let r = 0; r < size; r += 1) {
            for (let c = 0; c < size; c += 1) {
                if (current[r][c] === emptyValue) {
                    candidates.push([r, c]);
                }
            }
        }

        if (!candidates.length) {
            setStatus('No empty cells left. Check your answer.');
            tryFinishIfSolved();
            return;
        }

        maybeStartTimer();

        const [r, c] = candidates[Math.floor(Math.random() * candidates.length)];
        const selector = `.sudoku-cell[data-row="${r}"][data-col="${c}"]`;
        const cell = sudokuBoard.querySelector(selector);
        if (!cell) {
            return;
        }

        cell.value = String(solution[r][c]);
        cell.classList.remove('invalid');
        cell.classList.add('hint-fill');
        hintsUsed += 1;
        setStatus(`Hint used (${hintsUsed}). Keep going.`);
        tryFinishIfSolved();
    }

    function clearInvalidMarks() {
        const invalidCells = sudokuBoard.querySelectorAll('.sudoku-cell.invalid');
        invalidCells.forEach((cell) => {
            cell.classList.remove('invalid');
        });
    }

    function markInvalidCells(list) {
        list.forEach(([r, c]) => {
            const selector = `.sudoku-cell[data-row="${r}"][data-col="${c}"]`;
            const cell = sudokuBoard.querySelector(selector);
            if (cell && !cell.readOnly) {
                cell.classList.add('invalid');
            }
        });
    }

    function findEmptyCells(boardState) {
        const empty = [];
        for (let r = 0; r < size; r += 1) {
            for (let c = 0; c < size; c += 1) {
                if (boardState[r][c] === emptyValue) {
                    empty.push([r, c]);
                }
            }
        }
        return empty;
    }

    function pattern(row, col) {
        return (boxSize * (row % boxSize) + Math.floor(row / boxSize) + col) % size;
    }

    function shuffle(items) {
        const arr = [...items];
        for (let i = arr.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function setStatus(message) {
        sudokuStatus.textContent = message;
    }

    function maybeStartTimer() {
        if (timerStarted || isCompleted) {
            return;
        }

        const hasUserValue = Array.from(sudokuBoard.querySelectorAll('.sudoku-cell:not(.given)'))
            .some((cell) => cell.value.trim() !== '');

        if (!hasUserValue) {
            return;
        }

        timerStarted = true;
        timerId = window.setInterval(() => {
            elapsedSeconds += 1;
            timerDisplay.textContent = formatSeconds(elapsedSeconds);
        }, 1000);
    }

    function stopTimer() {
        if (timerId) {
            window.clearInterval(timerId);
            timerId = null;
        }
    }

    function tryFinishIfSolved() {
        if (isCompleted) {
            return;
        }

        const current = getCurrentBoard();

        for (let r = 0; r < size; r += 1) {
            for (let c = 0; c < size; c += 1) {
                if (current[r][c] === emptyValue || current[r][c] !== solution[r][c]) {
                    return;
                }
            }
        }

        finalizeSolvedGame();
    }

    function finalizeSolvedGame() {
        if (isCompleted) {
            return;
        }

        isCompleted = true;
        stopTimer();

        const solvedSeconds = elapsedSeconds;
        const score = calculateScore(solvedSeconds, hintsUsed, getSelectedDifficulty());
        scoreDisplay.textContent = String(score);

        let message = `Excellent. You solved the Sudoku! Score: ${score}. Time: ${formatSeconds(solvedSeconds)}.`;
        const selectedDifficulty = getSelectedDifficulty();

        const best = getBestTimeSeconds(selectedDifficulty);
        if (best === null || solvedSeconds < best) {
            localStorage.setItem(getBestTimeStorageKey(selectedDifficulty), String(solvedSeconds));
            renderBestTime();
            message += ' New best time!';
        }

        setStatus(message);
    }

    function calculateScore(seconds, usedHints, difficulty) {
        const base = scoreBaseByDifficulty[difficulty] || scoreBaseByDifficulty.medium;
        const timePenalty = seconds * 3;
        const hintPenalty = usedHints * 120;
        return Math.max(0, base - timePenalty - hintPenalty);
    }

    function resetRunState() {
        stopTimer();
        elapsedSeconds = 0;
        timerStarted = false;
        isCompleted = false;
        hintsUsed = 0;
        timerDisplay.textContent = formatSeconds(0);
        scoreDisplay.textContent = '0';
        renderBestTime();
    }

    function getBestTimeStorageKey(difficulty) {
        return `sudokuBestTimeSeconds_${difficulty}::${profileId}`;
    }

    function getBestTimeSeconds(difficulty = getSelectedDifficulty()) {
        const raw = localStorage.getItem(getBestTimeStorageKey(difficulty));
        if (!raw) {
            return null;
        }

        const value = Number(raw);
        return Number.isFinite(value) && value >= 0 ? value : null;
    }

    function renderBestTime() {
        const best = getBestTimeSeconds(getSelectedDifficulty());
        bestTimeDisplay.textContent = best === null ? '--:--' : formatSeconds(best);
    }

    function formatSeconds(totalSeconds) {
        const safe = Math.max(0, Math.floor(totalSeconds));
        const minutes = Math.floor(safe / 60);
        const seconds = safe % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}
