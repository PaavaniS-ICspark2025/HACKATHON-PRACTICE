const FALLBACK_WORD_BANK = [
    'about', 'above', 'abuse', 'actor', 'acute', 'admit', 'adopt', 'adult', 'after', 'again',
    'agent', 'agree', 'ahead', 'alarm', 'album', 'alert', 'alike', 'alive', 'allow', 'alone',
    'along', 'alter', 'among', 'anger', 'angle', 'angry', 'apart', 'apple', 'apply', 'arena',
    'argue', 'arise', 'array', 'aside', 'asset', 'audio', 'audit', 'avoid', 'award', 'aware',
    'badly', 'baker', 'bases', 'basic', 'beach', 'began', 'begin', 'begun', 'being', 'below',
    'bench', 'billy', 'birth', 'black', 'blame', 'blind', 'block', 'blood', 'board', 'boost',
    'booth', 'bound', 'brain', 'brand', 'bread', 'break', 'breed', 'brief', 'bring', 'broad',
    'broke', 'brown', 'build', 'built', 'buyer', 'cable', 'carry', 'catch', 'cause', 'chain',
    'chair', 'chart', 'chase', 'cheap', 'check', 'chest', 'chief', 'child', 'china', 'chose',
    'civil', 'claim', 'class', 'clean', 'clear', 'click', 'clock', 'close', 'coach', 'coast',
    'could', 'count', 'court', 'cover', 'craft', 'crash', 'cream', 'crime', 'cross', 'crowd',
    'crown', 'curve', 'cycle', 'daily', 'dance', 'dated', 'dealt', 'death', 'debut', 'delay',
    'depth', 'doing', 'doubt', 'dozen', 'draft', 'drama', 'drawn', 'dream', 'dress', 'drill',
    'drink', 'drive', 'drove', 'dying', 'eager', 'early', 'earth', 'eight', 'elite', 'empty',
    'enemy', 'enjoy', 'enter', 'entry', 'equal', 'error', 'event', 'every', 'exact', 'exist',
    'extra', 'faith', 'false', 'fault', 'fiber', 'field', 'fifth', 'fifty', 'fight', 'final',
    'first', 'fixed', 'flash', 'fleet', 'floor', 'fluid', 'focus', 'force', 'forth', 'forty',
    'forum', 'found', 'frame', 'frank', 'fraud', 'fresh', 'front', 'fruit', 'fully', 'funny',
    'giant', 'given', 'glass', 'globe', 'going', 'grace', 'grade', 'grand', 'grant', 'grass',
    'great', 'green', 'gross', 'group', 'grown', 'guard', 'guess', 'guest', 'guide', 'happy',
    'heart', 'heavy', 'hence', 'honey', 'horse', 'hotel', 'house', 'human', 'ideal', 'image',
    'index', 'inner', 'input', 'issue', 'japan', 'joint', 'judge', 'known', 'label', 'large',
    'laser', 'later', 'laugh', 'layer', 'learn', 'lease', 'least', 'leave', 'legal', 'lemon',
    'level', 'light', 'limit', 'local', 'logic', 'loose', 'lower', 'lucky', 'lunch', 'major',
    'maker', 'march', 'match', 'maybe', 'mayor', 'meant', 'media', 'metal', 'might', 'minor',
    'model', 'money', 'month', 'moral', 'motor', 'mount', 'mouse', 'mouth', 'movie', 'music',
    'needs', 'never', 'newly', 'night', 'noise', 'north', 'novel', 'nurse', 'occur', 'ocean',
    'offer', 'often', 'order', 'other', 'ought', 'paint', 'panel', 'paper', 'party', 'peace',
    'phase', 'phone', 'photo', 'piece', 'pilot', 'pitch', 'place', 'plain', 'plane', 'plant',
    'plate', 'point', 'pound', 'power', 'press', 'price', 'pride', 'prime', 'print', 'prior',
    'prize', 'proof', 'proud', 'prove', 'queen', 'quick', 'quiet', 'radio', 'raise', 'range',
    'rapid', 'ratio', 'reach', 'react', 'ready', 'refer', 'right', 'rival', 'river', 'robot',
    'rough', 'round', 'route', 'royal', 'rural', 'scale', 'scene', 'scope', 'score', 'sense',
    'serve', 'seven', 'shall', 'shape', 'share', 'sharp', 'sheet', 'shelf', 'shell', 'shift',
    'shirt', 'shock', 'shoot', 'short', 'shown', 'sight', 'since', 'skill', 'sleep', 'slide',
    'small', 'smart', 'smile', 'smoke', 'solid', 'solve', 'sorry', 'sound', 'south', 'space',
    'spare', 'speak', 'speed', 'spend', 'spite', 'split', 'spoke', 'sport', 'staff', 'stage',
    'stake', 'stand', 'start', 'state', 'steam', 'steel', 'stick', 'still', 'stock', 'stone',
    'stood', 'store', 'storm', 'story', 'strip', 'stuck', 'study', 'stuff', 'style', 'sugar',
    'suite', 'super', 'sweet', 'table', 'taken', 'taste', 'taxes', 'teach', 'teeth', 'terry',
    'thank', 'their', 'theme', 'there', 'these', 'thick', 'thing', 'think', 'third', 'those',
    'three', 'throw', 'tight', 'times', 'tired', 'title', 'today', 'topic', 'total', 'touch',
    'tough', 'tower', 'track', 'trade', 'train', 'treat', 'trend', 'trial', 'tried', 'tries',
    'truck', 'truly', 'trust', 'truth', 'twice', 'under', 'union', 'unity', 'until', 'upper',
    'upset', 'urban', 'usage', 'usual', 'value', 'video', 'virus', 'visit', 'vital', 'voice',
    'waste', 'watch', 'water', 'wheel', 'where', 'which', 'while', 'white', 'whole', 'whose',
    'woman', 'women', 'world', 'worry', 'worse', 'worst', 'worth', 'would', 'write', 'wrong',
    'yield', 'young', 'youth'
];

let answerWords = [...FALLBACK_WORD_BANK];
let validWordSet = new Set(FALLBACK_WORD_BANK);

const maxAttempts = 6;
let attempts = [];
let targetWord = pickTargetWord();
let isGameOver = false;
let hintedPositions = new Set();

const form = document.getElementById('wordle-form');
const input = document.getElementById('wordle-guess');
const statusMessage = document.getElementById('wordle-status');
const board = document.getElementById('wordle-board');
const hintButton = document.getElementById('wordle-hint');
const resetButton = document.getElementById('wordle-reset');

renderBoard();
setStatus('Loading full word list...');
loadFullWordList();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (isGameOver) {
        setStatus('Game finished. Start a new game to keep playing.');
        return;
    }

    const guess = input.value.trim().toLowerCase();
    const validationError = validateGuess(guess);

    if (validationError) {
        setStatus(validationError);
        return;
    }

    const result = evaluateGuess(guess, targetWord);
    attempts.push({ guess, result });
    renderBoard();

    if (guess === targetWord) {
        isGameOver = true;
        setStatus(`Great job! You solved it in ${attempts.length} ${attempts.length === 1 ? 'try' : 'tries'}.`);
        return;
    }

    if (attempts.length >= maxAttempts) {
        isGameOver = true;
        setStatus(`No more tries. The word was ${targetWord.toUpperCase()}.`);
        return;
    }

    setStatus(`Not quite. You have ${maxAttempts - attempts.length} tries left.`);
    input.value = '';
    input.focus();
});

resetButton.addEventListener('click', () => {
    startNewGame();
});

hintButton.addEventListener('click', () => {
    if (isGameOver) {
        setStatus('Game finished. Start a new game to keep playing.');
        return;
    }

    const revealedPositions = getRevealedPositions();
    const availablePositions = [];

    for (let index = 0; index < 5; index += 1) {
        if (!revealedPositions.has(index) && !hintedPositions.has(index)) {
            availablePositions.push(index);
        }
    }

    if (!availablePositions.length) {
        setStatus('No more hints available. Use what you know to finish the puzzle.');
        return;
    }

    const hintIndex = availablePositions[Math.floor(Math.random() * availablePositions.length)];
    hintedPositions.add(hintIndex);
    setStatus(`Hint: Letter ${hintIndex + 1} is ${targetWord[hintIndex].toUpperCase()}.`);
    input.focus();
});

function pickTargetWord() {
    const index = Math.floor(Math.random() * answerWords.length);
    return answerWords[index];
}

function validateGuess(guess) {
    if (!/^[a-z]{5}$/.test(guess)) {
        return 'Use exactly 5 letters (A to Z).';
    }

    if (!validWordSet.has(guess)) {
        return 'That is not in the valid word list.';
    }

    return null;
}

function evaluateGuess(guess, target) {
    const states = Array(5).fill('absent');
    const remaining = {};

    for (let i = 0; i < 5; i += 1) {
        if (guess[i] === target[i]) {
            states[i] = 'correct';
        } else {
            remaining[target[i]] = (remaining[target[i]] || 0) + 1;
        }
    }

    for (let i = 0; i < 5; i += 1) {
        if (states[i] === 'correct') {
            continue;
        }

        const letter = guess[i];
        if (remaining[letter] > 0) {
            states[i] = 'present';
            remaining[letter] -= 1;
        }
    }

    return states;
}

function renderBoard() {
    board.innerHTML = '';

    for (let row = 0; row < maxAttempts; row += 1) {
        const rowElement = document.createElement('div');
        rowElement.className = 'wordle-row';

        const attempt = attempts[row];

        for (let col = 0; col < 5; col += 1) {
            const tile = document.createElement('div');
            tile.className = 'wordle-tile';

            if (attempt) {
                tile.textContent = attempt.guess[col].toUpperCase();
                tile.classList.add(attempt.result[col]);
            }

            rowElement.appendChild(tile);
        }

        board.appendChild(rowElement);
    }
}

function setStatus(message) {
    statusMessage.textContent = message;
}

function getRevealedPositions() {
    const revealed = new Set();

    for (const attempt of attempts) {
        for (let index = 0; index < 5; index += 1) {
            if (attempt.result[index] === 'correct') {
                revealed.add(index);
            }
        }
    }

    return revealed;
}

function startNewGame() {
    attempts = [];
    isGameOver = false;
    hintedPositions = new Set();
    targetWord = pickTargetWord();
    input.value = '';
    setStatus('New game started. Guess the 5-letter word.');
    renderBoard();
    input.focus();
}

async function loadFullWordList() {
    try {
        const response = await fetch('wordle-words.txt', { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Could not load list: ${response.status}`);
        }

        const text = await response.text();
        const words = text
            .split(/\r?\n/)
            .map((word) => word.trim().toLowerCase())
            .filter((word) => /^[a-z]{5}$/.test(word));

        if (!words.length) {
            throw new Error('Word list is empty.');
        }

        answerWords = words;
        validWordSet = new Set(words);
        startNewGame();
        setStatus(`Loaded ${words.length.toLocaleString()} valid 5-letter words.`);
    } catch (error) {
        startNewGame();
        setStatus('Using built-in word list.');
    }
}
