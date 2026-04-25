document.addEventListener('DOMContentLoaded', () => {
    const themeForm = document.getElementById('theme-form');
    const alarmForm = document.getElementById('alarm-form');
    const alarmSoundSelect = document.getElementById('alarm-sound');
    const testAlarmButton = document.getElementById('test-settings-alarm');
    const layoutForm = document.getElementById('layout-form');
    const customThemeForm = document.getElementById('custom-theme-form');
    const customBgStart = document.getElementById('custom-bg-start');
    const customBgEnd = document.getElementById('custom-bg-end');
    const customHeaderStart = document.getElementById('custom-header-start');
    const customHeaderEnd = document.getElementById('custom-header-end');
    const customTextColor = document.getElementById('custom-text-color');
    const customButtonColor = document.getElementById('custom-button-color');
    const profileId = sessionStorage.getItem('workNotesActiveProfileId') || 'default';
    const selectedThemeKey = `selectedTheme::${profileId}`;
    const customThemePaletteKey = `customThemePalette::${profileId}`;
    const alarmSoundKey = `alarmSound::${profileId}`;
    const layoutModeKey = `layoutMode::${profileId}`;

    if (!themeForm) {
        return;
    }

    const defaultCustomTheme = {
        bgStart: '#dff5ff',
        bgEnd: '#f5fbff',
        headerStart: '#3a77ac',
        headerEnd: '#4f9bd1',
        textColor: '#2e4057',
        buttonColor: '#4682b4'
    };

    function getStoredCustomTheme() {
        const stored = localStorage.getItem(customThemePaletteKey);
        if (!stored) {
            return { ...defaultCustomTheme };
        }

        try {
            const parsed = JSON.parse(stored);
            return {
                bgStart: parsed.bgStart || defaultCustomTheme.bgStart,
                bgEnd: parsed.bgEnd || defaultCustomTheme.bgEnd,
                headerStart: parsed.headerStart || defaultCustomTheme.headerStart,
                headerEnd: parsed.headerEnd || defaultCustomTheme.headerEnd,
                textColor: parsed.textColor || defaultCustomTheme.textColor,
                buttonColor: parsed.buttonColor || defaultCustomTheme.buttonColor
            };
        } catch {
            return { ...defaultCustomTheme };
        }
    }

    function setCustomThemeInputs(theme) {
        if (!customBgStart || !customBgEnd || !customHeaderStart || !customHeaderEnd || !customTextColor || !customButtonColor) {
            return;
        }

        customBgStart.value = theme.bgStart;
        customBgEnd.value = theme.bgEnd;
        customHeaderStart.value = theme.headerStart;
        customHeaderEnd.value = theme.headerEnd;
        customTextColor.value = theme.textColor;
        customButtonColor.value = theme.buttonColor;
    }

    function readCustomThemeInputs() {
        if (!customBgStart || !customBgEnd || !customHeaderStart || !customHeaderEnd || !customTextColor || !customButtonColor) {
            return null;
        }

        return {
            bgStart: customBgStart.value,
            bgEnd: customBgEnd.value,
            headerStart: customHeaderStart.value,
            headerEnd: customHeaderEnd.value,
            textColor: customTextColor.value,
            buttonColor: customButtonColor.value
        };
    }

    function selectThemeRadio(themeName) {
        const radio = themeForm.querySelector(`input[name="theme"][value="${themeName}"]`);
        if (radio) {
            radio.checked = true;
        }
    }

    let audioContext;

    function initAudioContext() {
        if (audioContext) {
            return audioContext;
        }

        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) {
            return null;
        }

        audioContext = new AudioContextClass();
        return audioContext;
    }

    function unlockAudioContext() {
        const ctx = initAudioContext();
        if (!ctx) {
            return;
        }

        if (ctx.state === 'suspended') {
            ctx.resume().catch(() => {});
        }
    }

    function getSelectedAlarmSound() {
        return localStorage.getItem(alarmSoundKey) || 'classic';
    }

    function getTonePattern(soundName) {
        switch (soundName) {
            case 'bell':
                return {
                    type: 'sine',
                    tones: [880, 1174.66, 880],
                    step: 0.33,
                    length: 0.3,
                    gain: 0.22
                };
            case 'digital':
                return {
                    type: 'square',
                    tones: [1046.5, 1567.98, 1174.66],
                    step: 0.2,
                    length: 0.12,
                    gain: 0.2
                };
            case 'urgent':
                return {
                    type: 'sawtooth',
                    tones: [740, 932.33, 740, 932.33, 740],
                    step: 0.16,
                    length: 0.13,
                    gain: 0.2
                };
            case 'calm':
                return {
                    type: 'triangle',
                    tones: [392, 440, 523.25],
                    step: 0.34,
                    length: 0.28,
                    gain: 0.18
                };
            case 'chime':
                return {
                    type: 'triangle',
                    tones: [523.25, 659.25, 783.99],
                    step: 0.28,
                    length: 0.26,
                    gain: 0.24
                };
            case 'pulse':
                return {
                    type: 'sawtooth',
                    tones: [740, 740, 587, 740],
                    step: 0.22,
                    length: 0.16,
                    gain: 0.18
                };
            default:
                return {
                    type: 'square',
                    tones: [880, 660, 880],
                    step: 0.35,
                    length: 0.25,
                    gain: 0.34
                };
        }
    }

    function playPreviewSound(soundName) {
        const ctx = initAudioContext();
        if (!ctx) {
            return Promise.resolve(false);
        }

        const pattern = getTonePattern(soundName);
        const startPlayback = () => {
            const startTime = ctx.currentTime + 0.02;

            pattern.tones.forEach((frequency, index) => {
                const oscillator = ctx.createOscillator();
                const gainNode = ctx.createGain();
                const toneStart = startTime + (index * pattern.step);
                const toneEnd = toneStart + pattern.length;

                oscillator.type = pattern.type;
                oscillator.frequency.setValueAtTime(frequency, toneStart);
                gainNode.gain.setValueAtTime(0.0001, toneStart);
                gainNode.gain.exponentialRampToValueAtTime(pattern.gain, toneStart + 0.02);
                gainNode.gain.exponentialRampToValueAtTime(0.0001, toneEnd);

                oscillator.connect(gainNode);
                gainNode.connect(ctx.destination);

                oscillator.start(toneStart);
                oscillator.stop(toneEnd);
            });

            return true;
        };

        if (ctx.state === 'suspended') {
            return ctx.resume()
                .then(() => startPlayback())
                .catch(() => false);
        }

        return Promise.resolve(startPlayback());
    }

    const savedTheme = localStorage.getItem(selectedThemeKey) || 'blue';
    const savedThemeRadio = themeForm.querySelector(`input[name="theme"][value="${savedTheme}"]`);
    if (savedThemeRadio) {
        savedThemeRadio.checked = true;
    }

    setCustomThemeInputs(getStoredCustomTheme());

    if (alarmSoundSelect) {
        alarmSoundSelect.value = getSelectedAlarmSound();
    }

    if (layoutForm) {
        const savedLayoutMode = localStorage.getItem(layoutModeKey) || 'expanded';
        const savedLayoutRadio = layoutForm.querySelector(`input[name="layout-mode"][value="${savedLayoutMode}"]`);
        if (savedLayoutRadio) {
            savedLayoutRadio.checked = true;
        }
    }

    themeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const selectedThemeRadio = themeForm.querySelector('input[name="theme"]:checked');
        if (!selectedThemeRadio) {
            return;
        }

        const selectedTheme = selectedThemeRadio.value;
        localStorage.setItem(selectedThemeKey, selectedTheme);

        if (typeof window.applyTheme === 'function') {
            window.applyTheme(selectedTheme);
        }
    });

    if (customThemeForm) {
        customThemeForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const customTheme = readCustomThemeInputs();
            if (!customTheme) {
                return;
            }

            localStorage.setItem(customThemePaletteKey, JSON.stringify(customTheme));
            localStorage.setItem(selectedThemeKey, 'custom');
            selectThemeRadio('custom');

            if (typeof window.applyTheme === 'function') {
                window.applyTheme('custom');
            }
        });
    }

    if (alarmForm && alarmSoundSelect) {
        alarmForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.setItem(alarmSoundKey, alarmSoundSelect.value);
        });
    }

    if (layoutForm) {
        layoutForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const selectedLayoutRadio = layoutForm.querySelector('input[name="layout-mode"]:checked');
            if (!selectedLayoutRadio) {
                return;
            }

            const selectedLayoutMode = selectedLayoutRadio.value === 'compact' ? 'compact' : 'expanded';
            localStorage.setItem(layoutModeKey, selectedLayoutMode);

            if (typeof window.applyLayoutMode === 'function') {
                window.applyLayoutMode(selectedLayoutMode);
            }
        });
    }

    if (testAlarmButton && alarmSoundSelect) {
        testAlarmButton.addEventListener('click', () => {
            unlockAudioContext();
            playPreviewSound(alarmSoundSelect.value).then((didPlay) => {
                if (!didPlay) {
                    window.alert('Could not play the alarm sound on this browser.');
                }
            });
        });
    }

    document.addEventListener('click', unlockAudioContext, { once: true });
    document.addEventListener('keydown', unlockAudioContext, { once: true });
    document.addEventListener('touchstart', unlockAudioContext, { once: true });
});
