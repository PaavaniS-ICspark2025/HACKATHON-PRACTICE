const themePalettes = {
    blue: {
        '--bg-color': '#f3f6fa',
        '--page-glow': 'rgba(255, 255, 255, 0.55)',
        '--bg-gradient-start': '#f8fafd',
        '--bg-gradient-mid': '#eef3f9',
        '--bg-gradient-end': '#fbfdff',
        '--header-bg': '#0f172a',
        '--header-gradient-start': '#111827',
        '--header-gradient-end': '#1e293b',
        '--header-text-color': '#FFFFFF',
        '--text-color': '#0f172a',
        '--nav-link-color': '#FFFFFF',
        '--nav-hover-color': '#bfdbfe',
        '--help-button-bg': '#FFFFFF',
        '--help-button-text': '#0f172a',
        '--help-button-border': '#334155',
        '--help-button-hover-bg': '#1e293b',
        '--help-button-hover-text': '#FFFFFF',
        '--dropdown-link-color': '#0f172a',
        '--dropdown-hover-bg': '#e2e8f0',
        '--surface-color': 'rgba(255, 255, 255, 0.99)',
        '--surface-gradient-start': 'rgba(255, 255, 255, 1)',
        '--surface-gradient-end': 'rgba(250, 252, 255, 0.98)',
        '--surface-border': 'rgba(100, 116, 139, 0.2)',
        '--field-bg': 'rgba(255, 255, 255, 0.98)',
        '--field-border': 'rgba(100, 116, 139, 0.28)',
        '--item-bg': 'rgba(248, 250, 252, 0.95)',
        '--item-border': 'rgba(100, 116, 139, 0.22)',
        '--muted-text-color': 'rgba(51, 65, 85, 0.76)',
        '--focus-ring': 'rgba(21, 95, 160, 0.18)'
    },
    pink: {
        '--bg-color': '#FFF1F6',
        '--page-glow': 'rgba(255, 255, 255, 0.44)',
        '--bg-gradient-start': '#ffe8f2',
        '--bg-gradient-mid': '#ffd7e8',
        '--bg-gradient-end': '#fff7fb',
        '--header-bg': '#D96B9A',
        '--header-gradient-start': '#c95e8a',
        '--header-gradient-end': '#e388b1',
        '--header-text-color': '#FFFFFF',
        '--text-color': '#4D2A3A',
        '--nav-link-color': '#FFFFFF',
        '--nav-hover-color': '#FFE1EE',
        '--help-button-bg': '#FFFFFF',
        '--help-button-text': '#4D2A3A',
        '--help-button-border': '#4D2A3A',
        '--help-button-hover-bg': '#4D2A3A',
        '--help-button-hover-text': '#FFFFFF',
        '--dropdown-link-color': '#FFFFFF',
        '--dropdown-hover-bg': '#C85A89',
        '--surface-color': 'rgba(255, 255, 255, 0.94)',
        '--surface-gradient-start': 'rgba(255, 255, 255, 0.96)',
        '--surface-gradient-end': 'rgba(255, 245, 250, 0.92)',
        '--surface-border': 'rgba(77, 42, 58, 0.16)',
        '--field-bg': 'rgba(255, 255, 255, 0.9)',
        '--field-border': 'rgba(77, 42, 58, 0.25)',
        '--item-bg': 'rgba(255, 255, 255, 0.82)',
        '--item-border': 'rgba(77, 42, 58, 0.16)',
        '--muted-text-color': 'rgba(77, 42, 58, 0.78)',
        '--focus-ring': 'rgba(217, 107, 154, 0.2)'
    },
    green: {
        '--bg-color': '#EAF8EF',
        '--page-glow': 'rgba(255, 255, 255, 0.44)',
        '--bg-gradient-start': '#e5f8ed',
        '--bg-gradient-mid': '#d2f0df',
        '--bg-gradient-end': '#f8fffb',
        '--header-bg': '#2E8B57',
        '--header-gradient-start': '#27794b',
        '--header-gradient-end': '#3aa36f',
        '--header-text-color': '#FFFFFF',
        '--text-color': '#1F3A2A',
        '--nav-link-color': '#FFFFFF',
        '--nav-hover-color': '#CBEFD8',
        '--help-button-bg': '#FFFFFF',
        '--help-button-text': '#1F3A2A',
        '--help-button-border': '#1F3A2A',
        '--help-button-hover-bg': '#1F3A2A',
        '--help-button-hover-text': '#FFFFFF',
        '--dropdown-link-color': '#FFFFFF',
        '--dropdown-hover-bg': '#256F45',
        '--surface-color': 'rgba(255, 255, 255, 0.94)',
        '--surface-gradient-start': 'rgba(255, 255, 255, 0.96)',
        '--surface-gradient-end': 'rgba(244, 255, 248, 0.92)',
        '--surface-border': 'rgba(31, 58, 42, 0.16)',
        '--field-bg': 'rgba(255, 255, 255, 0.9)',
        '--field-border': 'rgba(31, 58, 42, 0.25)',
        '--item-bg': 'rgba(255, 255, 255, 0.82)',
        '--item-border': 'rgba(31, 58, 42, 0.16)',
        '--muted-text-color': 'rgba(31, 58, 42, 0.78)',
        '--focus-ring': 'rgba(46, 139, 87, 0.2)'
    },
    dark: {
        '--bg-color': '#1F2933',
        '--page-glow': 'rgba(255, 255, 255, 0.05)',
        '--bg-gradient-start': '#111827',
        '--bg-gradient-mid': '#1f2937',
        '--bg-gradient-end': '#0b1220',
        '--header-bg': '#111827',
        '--header-gradient-start': '#0b1220',
        '--header-gradient-end': '#1f2937',
        '--header-text-color': '#F9FAFB',
        '--text-color': '#E5E7EB',
        '--nav-link-color': '#F9FAFB',
        '--nav-hover-color': '#93C5FD',
        '--help-button-bg': '#374151',
        '--help-button-text': '#F9FAFB',
        '--help-button-border': '#9CA3AF',
        '--help-button-hover-bg': '#60A5FA',
        '--help-button-hover-text': '#111827',
        '--dropdown-link-color': '#F9FAFB',
        '--dropdown-hover-bg': '#2563EB',
        '--surface-color': 'rgba(26, 36, 48, 0.95)',
        '--surface-gradient-start': 'rgba(27, 37, 51, 0.96)',
        '--surface-gradient-end': 'rgba(17, 27, 39, 0.92)',
        '--surface-border': 'rgba(148, 163, 184, 0.28)',
        '--field-bg': 'rgba(15, 23, 42, 0.75)',
        '--field-border': 'rgba(148, 163, 184, 0.45)',
        '--item-bg': 'rgba(15, 23, 42, 0.66)',
        '--item-border': 'rgba(148, 163, 184, 0.32)',
        '--muted-text-color': 'rgba(226, 232, 240, 0.84)',
        '--focus-ring': 'rgba(96, 165, 250, 0.3)'
    },
    light: {
        '--bg-color': '#F7FAFF',
        '--page-glow': 'rgba(255, 255, 255, 0.55)',
        '--bg-gradient-start': '#f8fbff',
        '--bg-gradient-mid': '#eef4ff',
        '--bg-gradient-end': '#ffffff',
        '--header-bg': '#DCE7F8',
        '--header-gradient-start': '#e8f0fd',
        '--header-gradient-end': '#d5e2f7',
        '--header-text-color': '#233247',
        '--text-color': '#26364A',
        '--nav-link-color': '#233247',
        '--nav-hover-color': '#3A6EA5',
        '--help-button-bg': '#FFFFFF',
        '--help-button-text': '#233247',
        '--help-button-border': '#90A6C4',
        '--help-button-hover-bg': '#233247',
        '--help-button-hover-text': '#FFFFFF',
        '--dropdown-link-color': '#233247',
        '--dropdown-hover-bg': '#C7D8F2',
        '--surface-color': 'rgba(255, 255, 255, 0.96)',
        '--surface-gradient-start': 'rgba(255, 255, 255, 0.98)',
        '--surface-gradient-end': 'rgba(246, 250, 255, 0.94)',
        '--surface-border': 'rgba(58, 86, 121, 0.18)',
        '--field-bg': 'rgba(255, 255, 255, 0.95)',
        '--field-border': 'rgba(58, 86, 121, 0.28)',
        '--item-bg': 'rgba(255, 255, 255, 0.88)',
        '--item-border': 'rgba(58, 86, 121, 0.2)',
        '--muted-text-color': 'rgba(38, 54, 74, 0.78)',
        '--focus-ring': 'rgba(58, 110, 165, 0.25)',
        '--button-bg': '#4B7BB0',
        '--button-hover': '#3F6793'
    },
    sunset: {
        '--bg-color': '#FFF3E9',
        '--page-glow': 'rgba(255, 255, 255, 0.45)',
        '--bg-gradient-start': '#ffe3cc',
        '--bg-gradient-mid': '#ffd1b0',
        '--bg-gradient-end': '#fff5eb',
        '--header-bg': '#D97706',
        '--header-gradient-start': '#c46504',
        '--header-gradient-end': '#ef8f2f',
        '--header-text-color': '#FFFFFF',
        '--text-color': '#4B2E1C',
        '--nav-link-color': '#FFFFFF',
        '--nav-hover-color': '#FFE7CE',
        '--help-button-bg': '#FFFFFF',
        '--help-button-text': '#4B2E1C',
        '--help-button-border': '#4B2E1C',
        '--help-button-hover-bg': '#4B2E1C',
        '--help-button-hover-text': '#FFFFFF',
        '--dropdown-link-color': '#FFFFFF',
        '--dropdown-hover-bg': '#B45309',
        '--surface-color': 'rgba(255, 255, 255, 0.94)',
        '--surface-gradient-start': 'rgba(255, 255, 255, 0.96)',
        '--surface-gradient-end': 'rgba(255, 246, 237, 0.92)',
        '--surface-border': 'rgba(75, 46, 28, 0.16)',
        '--field-bg': 'rgba(255, 255, 255, 0.9)',
        '--field-border': 'rgba(75, 46, 28, 0.25)',
        '--item-bg': 'rgba(255, 255, 255, 0.82)',
        '--item-border': 'rgba(75, 46, 28, 0.16)',
        '--muted-text-color': 'rgba(75, 46, 28, 0.78)',
        '--focus-ring': 'rgba(217, 119, 6, 0.24)'
    },
    mint: {
        '--bg-color': '#E9FBF7',
        '--page-glow': 'rgba(255, 255, 255, 0.45)',
        '--bg-gradient-start': '#d4f7ee',
        '--bg-gradient-mid': '#bcefe3',
        '--bg-gradient-end': '#f4fffc',
        '--header-bg': '#0F766E',
        '--header-gradient-start': '#0c635c',
        '--header-gradient-end': '#159187',
        '--header-text-color': '#FFFFFF',
        '--text-color': '#173D39',
        '--nav-link-color': '#FFFFFF',
        '--nav-hover-color': '#C9F6EE',
        '--help-button-bg': '#FFFFFF',
        '--help-button-text': '#173D39',
        '--help-button-border': '#173D39',
        '--help-button-hover-bg': '#173D39',
        '--help-button-hover-text': '#FFFFFF',
        '--dropdown-link-color': '#FFFFFF',
        '--dropdown-hover-bg': '#0F5E58',
        '--surface-color': 'rgba(255, 255, 255, 0.94)',
        '--surface-gradient-start': 'rgba(255, 255, 255, 0.96)',
        '--surface-gradient-end': 'rgba(240, 255, 251, 0.92)',
        '--surface-border': 'rgba(23, 61, 57, 0.16)',
        '--field-bg': 'rgba(255, 255, 255, 0.9)',
        '--field-border': 'rgba(23, 61, 57, 0.25)',
        '--item-bg': 'rgba(255, 255, 255, 0.82)',
        '--item-border': 'rgba(23, 61, 57, 0.16)',
        '--muted-text-color': 'rgba(23, 61, 57, 0.78)',
        '--focus-ring': 'rgba(15, 118, 110, 0.24)'
    },
    sand: {
        '--bg-color': '#F8F3E8',
        '--page-glow': 'rgba(255, 255, 255, 0.42)',
        '--bg-gradient-start': '#efe3ca',
        '--bg-gradient-mid': '#f5ecd7',
        '--bg-gradient-end': '#fdf9ef',
        '--header-bg': '#8B6B3F',
        '--header-gradient-start': '#745731',
        '--header-gradient-end': '#9c7a4a',
        '--header-text-color': '#FFFFFF',
        '--text-color': '#3F2F1A',
        '--nav-link-color': '#FFFFFF',
        '--nav-hover-color': '#F4E8CF',
        '--help-button-bg': '#FFFFFF',
        '--help-button-text': '#3F2F1A',
        '--help-button-border': '#3F2F1A',
        '--help-button-hover-bg': '#3F2F1A',
        '--help-button-hover-text': '#FFFFFF',
        '--dropdown-link-color': '#FFFFFF',
        '--dropdown-hover-bg': '#6F532D',
        '--surface-color': 'rgba(255, 255, 255, 0.94)',
        '--surface-gradient-start': 'rgba(255, 255, 255, 0.96)',
        '--surface-gradient-end': 'rgba(252, 248, 238, 0.92)',
        '--surface-border': 'rgba(63, 47, 26, 0.16)',
        '--field-bg': 'rgba(255, 255, 255, 0.9)',
        '--field-border': 'rgba(63, 47, 26, 0.25)',
        '--item-bg': 'rgba(255, 255, 255, 0.82)',
        '--item-border': 'rgba(63, 47, 26, 0.16)',
        '--muted-text-color': 'rgba(63, 47, 26, 0.78)',
        '--focus-ring': 'rgba(139, 107, 63, 0.24)'
    }
};

const defaultCustomThemeColors = {
    bgStart: '#dff5ff',
    bgEnd: '#f5fbff',
    headerStart: '#3a77ac',
    headerEnd: '#4f9bd1',
    textColor: '#2e4057',
    buttonColor: '#4682b4'
};

function isHexColor(value) {
    return typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value);
}

function normalizeHex(value, fallback) {
    return isHexColor(value) ? value.toLowerCase() : fallback;
}

function hexToRgb(hex) {
    const normalized = normalizeHex(hex, '#000000').slice(1);
    return {
        r: Number.parseInt(normalized.slice(0, 2), 16),
        g: Number.parseInt(normalized.slice(2, 4), 16),
        b: Number.parseInt(normalized.slice(4, 6), 16)
    };
}

function rgbToHex(r, g, b) {
    const toHex = (channel) => {
        const safeChannel = Math.max(0, Math.min(255, Math.round(channel)));
        return safeChannel.toString(16).padStart(2, '0');
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function mixHex(colorA, colorB, weight) {
    const a = hexToRgb(colorA);
    const b = hexToRgb(colorB);
    const safeWeight = Math.max(0, Math.min(1, weight));

    return rgbToHex(
        a.r + ((b.r - a.r) * safeWeight),
        a.g + ((b.g - a.g) * safeWeight),
        a.b + ((b.b - a.b) * safeWeight)
    );
}

function rgbaFromHex(hex, alpha) {
    const rgb = hexToRgb(hex);
    const safeAlpha = Math.max(0, Math.min(1, alpha));
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${safeAlpha})`;
}

function isDarkColor(hex) {
    const { r, g, b } = hexToRgb(hex);
    const luminance = ((0.299 * r) + (0.587 * g) + (0.114 * b)) / 255;
    return luminance < 0.5;
}

function getReadableTextOn(hex) {
    return isDarkColor(hex) ? '#f8fafc' : '#111827';
}

function getStoredCustomThemeColors() {
    const stored = localStorage.getItem(getScopedStorageKey('customThemePalette'));
    if (!stored) {
        return { ...defaultCustomThemeColors };
    }

    try {
        const parsed = JSON.parse(stored);
        return {
            bgStart: normalizeHex(parsed.bgStart, defaultCustomThemeColors.bgStart),
            bgEnd: normalizeHex(parsed.bgEnd, defaultCustomThemeColors.bgEnd),
            headerStart: normalizeHex(parsed.headerStart, defaultCustomThemeColors.headerStart),
            headerEnd: normalizeHex(parsed.headerEnd, defaultCustomThemeColors.headerEnd),
            textColor: normalizeHex(parsed.textColor, defaultCustomThemeColors.textColor),
            buttonColor: normalizeHex(parsed.buttonColor, defaultCustomThemeColors.buttonColor)
        };
    } catch {
        return { ...defaultCustomThemeColors };
    }
}

function buildCustomThemePalette(colors) {
    const bgStart = normalizeHex(colors.bgStart, defaultCustomThemeColors.bgStart);
    const bgEnd = normalizeHex(colors.bgEnd, defaultCustomThemeColors.bgEnd);
    const headerStart = normalizeHex(colors.headerStart, defaultCustomThemeColors.headerStart);
    const headerEnd = normalizeHex(colors.headerEnd, defaultCustomThemeColors.headerEnd);
    const textColor = normalizeHex(colors.textColor, defaultCustomThemeColors.textColor);
    const buttonColor = normalizeHex(colors.buttonColor, defaultCustomThemeColors.buttonColor);

    const bgMid = mixHex(bgStart, bgEnd, 0.5);
    const headerTextColor = getReadableTextOn(headerStart);
    const navHoverColor = isDarkColor(headerStart)
        ? mixHex(headerEnd, '#ffffff', 0.55)
        : mixHex(headerEnd, '#0f172a', 0.25);
    const buttonHover = isDarkColor(buttonColor)
        ? mixHex(buttonColor, '#ffffff', 0.2)
        : mixHex(buttonColor, '#000000', 0.14);
    const bodyDark = isDarkColor(bgStart);
    const surfaceBase = bodyDark ? mixHex(bgStart, '#000000', 0.35) : '#ffffff';
    const surfaceTint = bodyDark ? mixHex(bgEnd, '#000000', 0.28) : mixHex(bgEnd, '#ffffff', 0.84);
    const fieldBase = bodyDark ? mixHex(bgStart, '#000000', 0.48) : '#ffffff';

    return {
        '--bg-color': bgStart,
        '--page-glow': bodyDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.38)',
        '--bg-gradient-start': bgStart,
        '--bg-gradient-mid': bgMid,
        '--bg-gradient-end': bgEnd,
        '--header-bg': headerStart,
        '--header-gradient-start': headerStart,
        '--header-gradient-end': headerEnd,
        '--header-text-color': headerTextColor,
        '--text-color': textColor,
        '--nav-link-color': headerTextColor,
        '--nav-hover-color': navHoverColor,
        '--help-button-bg': bodyDark ? rgbaFromHex('#0f172a', 0.78) : '#ffffff',
        '--help-button-text': textColor,
        '--help-button-border': rgbaFromHex(textColor, 0.72),
        '--help-button-hover-bg': textColor,
        '--help-button-hover-text': getReadableTextOn(textColor),
        '--dropdown-link-color': headerTextColor,
        '--dropdown-hover-bg': mixHex(headerStart, headerEnd, 0.35),
        '--surface-color': rgbaFromHex(surfaceBase, 0.94),
        '--surface-gradient-start': rgbaFromHex(surfaceBase, 0.96),
        '--surface-gradient-end': rgbaFromHex(surfaceTint, 0.92),
        '--surface-border': rgbaFromHex(textColor, 0.22),
        '--field-bg': rgbaFromHex(fieldBase, bodyDark ? 0.78 : 0.9),
        '--field-border': rgbaFromHex(textColor, 0.28),
        '--item-bg': rgbaFromHex(fieldBase, bodyDark ? 0.68 : 0.82),
        '--item-border': rgbaFromHex(textColor, 0.2),
        '--muted-text-color': rgbaFromHex(textColor, 0.78),
        '--focus-ring': rgbaFromHex(buttonColor, 0.25),
        '--button-bg': buttonColor,
        '--button-hover': buttonHover
    };
}

function applyTheme(themeName) {
    const selectedTheme = themeName === 'custom'
        ? buildCustomThemePalette(getStoredCustomThemeColors())
        : (themePalettes[themeName] || themePalettes.blue);
    const root = document.documentElement;

    Object.entries(selectedTheme).forEach(([variable, value]) => {
        root.style.setProperty(variable, value);
    });
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem(getScopedStorageKey('selectedTheme')) || 'blue';
    applyTheme(savedTheme);
    return savedTheme;
}

function applyLayoutMode(layoutMode) {
    const mode = layoutMode === 'compact' ? 'compact' : 'expanded';
    document.body.classList.remove('layout-compact', 'layout-expanded');
    document.body.classList.add(`layout-${mode}`);
    return mode;
}

function applySavedLayoutMode() {
    const savedLayoutMode = localStorage.getItem(getScopedStorageKey('layoutMode')) || 'expanded';
    return applyLayoutMode(savedLayoutMode);
}

function applyFontSize(scalePercent) {
    const numeric = Number(scalePercent);
    const safePercent = Number.isFinite(numeric)
        ? Math.min(140, Math.max(90, Math.round(numeric / 5) * 5))
        : 100;

    document.documentElement.style.setProperty('--base-font-size', `${safePercent}%`);
    return safePercent;
}

function applySavedFontSize() {
    const savedScale = localStorage.getItem(getScopedStorageKey('fontSizeScale')) || '100';
    return applyFontSize(savedScale);
}

window.applyTheme = applyTheme;
window.applySavedTheme = applySavedTheme;
window.applyLayoutMode = applyLayoutMode;
window.applySavedLayoutMode = applySavedLayoutMode;
window.applyFontSize = applyFontSize;
window.applySavedFontSize = applySavedFontSize;

const profilesStorageKey = 'workNotesProfiles';
const activeProfileSessionKey = 'workNotesActiveProfileId';
const defaultProfileScopeId = 'default';
const activeSongStorageBaseKey = 'workNotesActiveSong';
const miniSongPrefsStorageBaseKey = 'workNotesMiniSongPrefs';
const persistentPlaybackStorageBaseKey = 'workNotesPersistentPlayback';

function getActiveProfileId() {
    return sessionStorage.getItem(activeProfileSessionKey) || defaultProfileScopeId;
}

function getScopedStorageKey(baseKey) {
    return `${baseKey}::${getActiveProfileId()}`;
}

window.getScopedStorageKey = getScopedStorageKey;

function getActiveSongStorageKey() {
    return getScopedStorageKey(activeSongStorageBaseKey);
}

function getPersistentPlaybackStorageKey() {
    return getScopedStorageKey(persistentPlaybackStorageBaseKey);
}

function setPersistentPlaybackState(isPlaying) {
    localStorage.setItem(getPersistentPlaybackStorageKey(), JSON.stringify({
        isPlaying,
        updatedAt: Date.now()
    }));
}

function openPersistentSongPlayer(song, autoplay = true) {
    const hasYouTubeVideo = song && typeof song.videoId === 'string';
    const hasYouTubeQuery = song && typeof song.youtubeQuery === 'string';
    const hasPreviewAudio = song && typeof song.previewUrl === 'string';
    if (!song || typeof song.name !== 'string' || (!hasYouTubeVideo && !hasYouTubeQuery && !hasPreviewAudio)) {
        return false;
    }

    const profileId = getActiveProfileId();
    localStorage.setItem(getActiveSongStorageKey(), JSON.stringify(song));
    setPersistentPlaybackState(autoplay);

    const playerUrl = `persistent-player.html?profileId=${encodeURIComponent(profileId)}`;
    const popup = window.open(playerUrl, 'workNotesPersistentPlayer', 'width=460,height=320,resizable=yes');
    if (popup && typeof popup.focus === 'function') {
        popup.focus();
        return true;
    }

    return false;
}

window.openPersistentSongPlayer = openPersistentSongPlayer;

function readActiveSong() {
    const stored = localStorage.getItem(getActiveSongStorageKey());
    if (!stored) {
        return null;
    }

    try {
        const parsed = JSON.parse(stored);
        const hasVideoId = parsed && typeof parsed.videoId === 'string' && parsed.videoId.trim();
        const hasYouTubeQuery = parsed && typeof parsed.youtubeQuery === 'string' && parsed.youtubeQuery.trim();
        const hasPreviewUrl = parsed && typeof parsed.previewUrl === 'string' && parsed.previewUrl.trim();
        if (!parsed || typeof parsed.name !== 'string' || (!hasVideoId && !hasYouTubeQuery && !hasPreviewUrl)) {
            return null;
        }

        return parsed;
    } catch {
        return null;
    }
}

function buildMiniPlayerEmbedUrl(videoId, autoplay = false) {
    const params = new URLSearchParams({
        rel: '0',
        modestbranding: '1'
    });

    if (autoplay) {
        params.set('autoplay', '1');
    }

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

function buildMiniPlayerSearchEmbedUrl(query, autoplay = false) {
    const params = new URLSearchParams({
        listType: 'search',
        list: query
    });

    let url = `https://www.youtube.com/embed?${params.toString()}`;
    if (autoplay) {
        url += '&autoplay=1';
    }

    return url;
}

function buildSongThumbnailUrl(videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

function getSongArtworkUrl(song) {
    if (song && typeof song.artworkUrl === 'string' && song.artworkUrl.trim()) {
        return song.artworkUrl;
    }

    if (song && typeof song.videoId === 'string' && song.videoId.trim()) {
        return buildSongThumbnailUrl(song.videoId);
    }

    return 'notes-logo.svg';
}

function getMiniSongPrefsStorageKey() {
    return getScopedStorageKey(miniSongPrefsStorageBaseKey);
}

function readMiniSongPrefs() {
    const defaults = {
        embedHeight: 160,
        showImage: true,
        panelWidth: 520,
        panelHeight: 260,
        panelX: null,
        panelY: null
    };
    const stored = localStorage.getItem(getMiniSongPrefsStorageKey());

    if (!stored) {
        return defaults;
    }

    try {
        const parsed = JSON.parse(stored);
        const embedHeight = Number(parsed.embedHeight);
        const panelWidth = Number(parsed.panelWidth);
        const panelHeight = Number(parsed.panelHeight);
        const panelX = Number(parsed.panelX);
        const panelY = Number(parsed.panelY);
        return {
            embedHeight: Number.isFinite(embedHeight) ? Math.min(280, Math.max(120, embedHeight)) : defaults.embedHeight,
            showImage: typeof parsed.showImage === 'boolean' ? parsed.showImage : defaults.showImage,
            panelWidth: Number.isFinite(panelWidth) ? Math.min(980, Math.max(50, panelWidth)) : defaults.panelWidth,
            panelHeight: Number.isFinite(panelHeight) ? Math.min(700, Math.max(50, panelHeight)) : defaults.panelHeight,
            panelX: Number.isFinite(panelX) ? panelX : defaults.panelX,
            panelY: Number.isFinite(panelY) ? panelY : defaults.panelY
        };
    } catch {
        return defaults;
    }
}

function saveMiniSongPrefs(prefs) {
    localStorage.setItem(getMiniSongPrefsStorageKey(), JSON.stringify(prefs));
}

function initializeMiniSongPlayer() {
    const isSongsPage = window.location.pathname.endsWith('/songs.html') || window.location.pathname.endsWith('songs.html');
    if (isSongsPage) {
        return;
    }

    const activeSong = readActiveSong();
    if (!activeSong) {
        return;
    }

    const existing = document.getElementById('mini-song-player');
    if (existing) {
        existing.remove();
    }

    const player = document.createElement('section');
    player.id = 'mini-song-player';
    player.innerHTML = `
        <div class="mini-song-top">
            <span id="mini-song-title"></span>
        </div>
        <div class="mini-song-controls">
            <button type="button" id="mini-song-play">Play</button>
            <button type="button" id="mini-song-stop">Stop</button>
            <a id="mini-song-open" href="songs.html">Change Song</a>
        </div>
        <div class="mini-song-settings">
            <label for="mini-song-size">Size</label>
            <input id="mini-song-size" type="range" min="120" max="280" step="10">
            <span id="mini-song-size-value"></span>
            <label class="mini-song-toggle" for="mini-song-show-image">
                <input id="mini-song-show-image" type="checkbox">
                Show image
            </label>
        </div>
        <div class="mini-song-image" id="mini-song-image-wrap">
            <img id="mini-song-image" alt="Current song artwork preview">
        </div>
        <div class="mini-song-embed hidden" id="mini-song-embed-wrap">
            <iframe
                id="mini-song-frame"
                title="Mini song player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        </div>
    `;

    document.body.appendChild(player);
    document.body.classList.add('has-mini-player');

    const title = player.querySelector('#mini-song-title');
    const playButton = player.querySelector('#mini-song-play');
    const stopButton = player.querySelector('#mini-song-stop');
    const frame = player.querySelector('#mini-song-frame');
    const embedWrap = player.querySelector('#mini-song-embed-wrap');
    const imageWrap = player.querySelector('#mini-song-image-wrap');
    const image = player.querySelector('#mini-song-image');
    const sizeInput = player.querySelector('#mini-song-size');
    const sizeValue = player.querySelector('#mini-song-size-value');
    const showImageInput = player.querySelector('#mini-song-show-image');
    const dragHandle = player.querySelector('.mini-song-top');

    if (!title || !playButton || !stopButton || !frame || !embedWrap || !imageWrap || !image || !sizeInput || !sizeValue || !showImageInput || !dragHandle) {
        return;
    }

    let currentSong = activeSong;
    let prefs = readMiniSongPrefs();
    let previewAudio = null;

    title.textContent = currentSong.name;
    image.src = getSongArtworkUrl(currentSong);

    function clampPanelPosition(x, y) {
        const gutter = 8;
        const maxX = Math.max(gutter, window.innerWidth - player.offsetWidth - gutter);
        const maxY = Math.max(gutter, window.innerHeight - player.offsetHeight - gutter);
        return {
            x: Math.min(Math.max(gutter, x), maxX),
            y: Math.min(Math.max(gutter, y), maxY)
        };
    }

    function applyPanelPosition(x, y, shouldSave = false) {
        const next = clampPanelPosition(x, y);
        player.style.left = `${next.x}px`;
        player.style.top = `${next.y}px`;

        if (shouldSave) {
            prefs.panelX = next.x;
            prefs.panelY = next.y;
            saveMiniSongPrefs(prefs);
        }
    }

    function applyPanelSize(width, height, shouldSave = false) {
        const clampedWidth = Math.min(980, Math.max(50, Math.round(width)));
        const clampedHeight = Math.min(700, Math.max(50, Math.round(height)));
        player.style.width = `${clampedWidth}px`;
        player.style.height = `${clampedHeight}px`;

        if (shouldSave) {
            prefs.panelWidth = clampedWidth;
            prefs.panelHeight = clampedHeight;
            saveMiniSongPrefs(prefs);
        }
    }

    function applyMiniPrefs() {
        frame.style.height = `${prefs.embedHeight}px`;
        sizeInput.value = String(prefs.embedHeight);
        sizeValue.textContent = `${prefs.embedHeight}px`;
        showImageInput.checked = prefs.showImage;
        imageWrap.classList.toggle('hidden', !prefs.showImage);

        applyPanelSize(prefs.panelWidth, prefs.panelHeight);
        if (Number.isFinite(prefs.panelX) && Number.isFinite(prefs.panelY)) {
            applyPanelPosition(prefs.panelX, prefs.panelY);
        }
    }

    function playCurrentSong() {
        const openedPopup = openPersistentSongPlayer(currentSong, true);
        if (openedPopup) {
            frame.src = '';
            embedWrap.classList.add('hidden');
            return;
        }

        if (typeof currentSong.youtubeQuery === 'string' && currentSong.youtubeQuery) {
            if (previewAudio) {
                previewAudio.pause();
                previewAudio = null;
            }

            frame.src = buildMiniPlayerSearchEmbedUrl(currentSong.youtubeQuery, true);
            embedWrap.classList.remove('hidden');
            setPersistentPlaybackState(true);
            return;
        }

        if (typeof currentSong.previewUrl === 'string' && currentSong.previewUrl) {
            frame.src = '';
            embedWrap.classList.add('hidden');
            if (previewAudio) {
                previewAudio.pause();
            }

            previewAudio = new Audio(currentSong.previewUrl);
            previewAudio.play().catch(() => {});
            setPersistentPlaybackState(true);
            return;
        }

        frame.src = buildMiniPlayerEmbedUrl(currentSong.videoId, true);
        embedWrap.classList.remove('hidden');
        setPersistentPlaybackState(true);
    }

    function stopCurrentSong() {
        frame.src = '';
        embedWrap.classList.add('hidden');
        if (previewAudio) {
            previewAudio.pause();
            previewAudio.currentTime = 0;
        }
        setPersistentPlaybackState(false);
    }

    playButton.addEventListener('click', () => {
        playCurrentSong();
    });

    stopButton.addEventListener('click', () => {
        stopCurrentSong();
    });

    sizeInput.addEventListener('input', () => {
        prefs.embedHeight = Number(sizeInput.value);
        saveMiniSongPrefs(prefs);
        applyMiniPrefs();
    });

    showImageInput.addEventListener('change', () => {
        prefs.showImage = showImageInput.checked;
        saveMiniSongPrefs(prefs);
        applyMiniPrefs();
    });

    window.addEventListener('storage', (event) => {
        if (event.key !== getActiveSongStorageKey() || !event.newValue) {
            return;
        }

        try {
            const nextSong = JSON.parse(event.newValue);
            if (!nextSong || typeof nextSong.name !== 'string' || typeof nextSong.videoId !== 'string') {
                return;
            }

            currentSong = nextSong;
            title.textContent = currentSong.name;
            image.src = getSongArtworkUrl(currentSong);
            stopCurrentSong();
        } catch {
            // Ignore invalid storage payloads.
        }
    });

    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

    dragHandle.addEventListener('pointerdown', (event) => {
        if (event.button !== 0) {
            return;
        }

        isDragging = true;
        dragHandle.classList.add('dragging');
        const bounds = player.getBoundingClientRect();
        dragOffsetX = event.clientX - bounds.left;
        dragOffsetY = event.clientY - bounds.top;
        dragHandle.setPointerCapture(event.pointerId);
    });

    dragHandle.addEventListener('pointermove', (event) => {
        if (!isDragging) {
            return;
        }

        const nextX = event.clientX - dragOffsetX;
        const nextY = event.clientY - dragOffsetY;
        applyPanelPosition(nextX, nextY);
    });

    const stopDragging = (event) => {
        if (!isDragging) {
            return;
        }

        isDragging = false;
        dragHandle.classList.remove('dragging');
        dragHandle.releasePointerCapture(event.pointerId);
        const bounds = player.getBoundingClientRect();
        applyPanelPosition(bounds.left, bounds.top, true);
    };

    dragHandle.addEventListener('pointerup', stopDragging);
    dragHandle.addEventListener('pointercancel', stopDragging);

    if (typeof ResizeObserver === 'function') {
        const resizeObserver = new ResizeObserver(() => {
            const bounds = player.getBoundingClientRect();
            applyPanelSize(bounds.width, bounds.height, true);
            applyPanelPosition(bounds.left, bounds.top, true);
        });
        resizeObserver.observe(player);
    }

    window.addEventListener('resize', () => {
        const bounds = player.getBoundingClientRect();
        applyPanelSize(bounds.width, bounds.height, true);
        applyPanelPosition(bounds.left, bounds.top, true);
    });

    applyMiniPrefs();

    if (!Number.isFinite(prefs.panelX) || !Number.isFinite(prefs.panelY)) {
        const defaultX = window.innerWidth - player.offsetWidth - 16;
        const defaultY = window.innerHeight - player.offsetHeight - 16;
        applyPanelPosition(defaultX, defaultY, true);
    }
}

function normalizeProfileName(name) {
    return name.trim().toLowerCase();
}

function loadProfiles() {
    const stored = localStorage.getItem(profilesStorageKey);
    if (!stored) {
        return [];
    }

    try {
        const parsed = JSON.parse(stored);
        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed.filter((profile) => profile && typeof profile.id === 'string' && typeof profile.name === 'string' && typeof profile.pin === 'string');
    } catch {
        return [];
    }
}

function saveProfiles(profiles) {
    localStorage.setItem(profilesStorageKey, JSON.stringify(profiles));
}

function findProfileById(profiles, id) {
    return profiles.find((profile) => profile.id === id) || null;
}

function initializeProfileAuth() {
    const body = document.body;
    const header = document.querySelector('header');
    if (!body || !header) {
        return { isAuthenticated: false, profile: null };
    }

    const overlay = document.createElement('div');
    overlay.id = 'auth-gate';
    overlay.innerHTML = `
        <div class="auth-card" role="dialog" aria-modal="true" aria-labelledby="auth-title">
            <aside class="auth-profiles">
                <h3>Saved Profiles</h3>
                <div id="auth-profile-list"></div>
            </aside>
            <section class="auth-signin">
                <h2 id="auth-title">Sign In To Work Notes</h2>
                <p>Choose a saved profile from the side or create a new one.</p>
                <form id="auth-form" autocomplete="off">
                    <label for="auth-name">Profile Name</label>
                    <input id="auth-name" type="text" maxlength="30" required>
                    <label for="auth-pin">PIN</label>
                    <input id="auth-pin" type="password" inputmode="numeric" maxlength="12" required>
                    <div class="auth-actions">
                        <button type="button" id="auth-create">Create Profile</button>
                        <button type="submit" id="auth-signin">Sign In</button>
                    </div>
                </form>
                <p id="auth-message" aria-live="polite"></p>
            </section>
        </div>
    `;

    body.prepend(overlay);

    const profileList = overlay.querySelector('#auth-profile-list');
    const form = overlay.querySelector('#auth-form');
    const nameInput = overlay.querySelector('#auth-name');
    const pinInput = overlay.querySelector('#auth-pin');
    const createButton = overlay.querySelector('#auth-create');
    const message = overlay.querySelector('#auth-message');

    if (!profileList || !form || !nameInput || !pinInput || !createButton || !message) {
        return { isAuthenticated: false, profile: null };
    }

    let profiles = loadProfiles();

    function setMessage(text) {
        message.textContent = text;
    }

    function setLocked(locked) {
        body.classList.toggle('auth-locked', locked);
        overlay.classList.toggle('visible', locked);
    }

    function renderProfileList() {
        profileList.innerHTML = '';

        if (!profiles.length) {
            const empty = document.createElement('p');
            empty.className = 'auth-empty';
            empty.textContent = 'No profiles yet. Create one to begin.';
            profileList.appendChild(empty);
            return;
        }

        profiles.forEach((profile) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'auth-profile-item';
            button.textContent = profile.name;
            button.addEventListener('click', () => {
                nameInput.value = profile.name;
                pinInput.focus();
                setMessage(`Selected ${profile.name}. Enter PIN to sign in.`);
            });
            profileList.appendChild(button);
        });
    }

    function renderActiveProfile(profile) {
        const existing = header.querySelector('.profile-chip');
        if (existing) {
            existing.remove();
        }

        const chip = document.createElement('div');
        chip.className = 'profile-chip';
        chip.innerHTML = `<span>Profile: ${profile.name}</span><button type="button">Switch</button>`;
        const switchButton = chip.querySelector('button');
        if (switchButton) {
            switchButton.addEventListener('click', () => {
                sessionStorage.removeItem(activeProfileSessionKey);
                pinInput.value = '';
                setLocked(true);
                setMessage('Signed out. Select a profile to continue.');
                nameInput.focus();
            });
        }

        const nav = header.querySelector('nav');
        if (nav) {
            nav.appendChild(chip);
        }
    }

    function getProfileByName(name) {
        const normalized = normalizeProfileName(name);
        return profiles.find((profile) => normalizeProfileName(profile.name) === normalized) || null;
    }

    function signIn(profile, shouldReload = false) {
        sessionStorage.setItem(activeProfileSessionKey, profile.id);
        renderActiveProfile(profile);
        setLocked(false);
        applySavedTheme();
        applySavedLayoutMode();
        if (shouldReload) {
            window.location.reload();
        }
    }

    createButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const pin = pinInput.value.trim();

        if (name.length < 2) {
            setMessage('Profile name must be at least 2 characters.');
            return;
        }

        if (pin.length < 4) {
            setMessage('PIN must be at least 4 characters.');
            return;
        }

        if (getProfileByName(name)) {
            setMessage('That profile already exists. Sign in instead.');
            return;
        }

        const profile = {
            id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
            name,
            pin,
            createdAt: new Date().toISOString()
        };

        profiles.push(profile);
        saveProfiles(profiles);
        renderProfileList();
        signIn(profile, true);
        setMessage('');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const pin = pinInput.value.trim();
        const profile = getProfileByName(name);

        if (!profile) {
            setMessage('Profile not found. Create it first.');
            return;
        }

        if (profile.pin !== pin) {
            setMessage('Incorrect PIN. Try again.');
            return;
        }

        signIn(profile, true);
        setMessage('');
    });

    renderProfileList();

    const existingSessionId = sessionStorage.getItem(activeProfileSessionKey);
    const existingProfile = existingSessionId ? findProfileById(profiles, existingSessionId) : null;
    if (existingProfile) {
        signIn(existingProfile, false);
        return { isAuthenticated: true, profile: existingProfile };
    }

    setLocked(true);
    setMessage('Sign in to continue.');
    nameInput.focus();
    return { isAuthenticated: false, profile: null };
}

function initializeReflections() {
    const form = document.getElementById('reflections-form');
    const moodInput = document.getElementById('reflection-mood');
    const moodButtons = Array.from(document.querySelectorAll('.reflection-mood-option'));
    const summaryInput = document.getElementById('reflection-summary');
    const status = document.getElementById('reflections-status');
    const history = document.getElementById('reflections-history');
    const streak = document.getElementById('reflections-streak');
    const saveButton = document.getElementById('reflection-save');
    const cancelButton = document.getElementById('reflection-cancel');

    if (!form || !moodInput || !moodButtons.length || !summaryInput || !status || !history || !streak || !saveButton || !cancelButton) {
        return;
    }

    const reflectionsKey = getScopedStorageKey('dailyReflections');
    let editingDate = null;

    function getLocalDateKey(date = new Date()) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function toDisplayDate(dateKey) {
        const [year, month, day] = dateKey.split('-').map((value) => Number(value));
        if (!year || !month || !day) {
            return dateKey;
        }

        const date = new Date(year, month - 1, day);
        return date.toLocaleDateString(undefined, {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    function getPreviousDateKey(dateKey) {
        const [year, month, day] = dateKey.split('-').map((value) => Number(value));
        const date = new Date(year, month - 1, day);
        date.setDate(date.getDate() - 1);
        return getLocalDateKey(date);
    }

    function readEntries() {
        const stored = localStorage.getItem(reflectionsKey);
        if (!stored) {
            return [];
        }

        try {
            const parsed = JSON.parse(stored);
            if (!Array.isArray(parsed)) {
                return [];
            }

            return parsed
                .filter((entry) => entry
                    && typeof entry.date === 'string'
                    && /^\d{4}-\d{2}-\d{2}$/.test(entry.date)
                    && typeof entry.mood === 'string'
                    && typeof entry.summary === 'string')
                .map((entry) => ({
                    date: entry.date,
                    mood: entry.mood,
                    summary: entry.summary,
                    updatedAt: typeof entry.updatedAt === 'string' ? entry.updatedAt : null,
                    createdAt: typeof entry.createdAt === 'string' ? entry.createdAt : null
                }));
        } catch {
            return [];
        }
    }

    function saveEntries(entries) {
        const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));
        localStorage.setItem(reflectionsKey, JSON.stringify(sorted));
    }

    function getMoodLabel(mood) {
        const labels = {
            happy: 'Happy',
            neutral: 'Neutral',
            sad: 'Sad',
            mad: 'Mad'
        };
        return labels[mood] || 'Unknown';
    }

    function getMoodFace(mood) {
        const faces = {
            happy: '😀',
            neutral: '😐',
            sad: '😢',
            mad: '😠'
        };
        return faces[mood] || '🙂';
    }

    function getCurrentStreak(entries) {
        const dates = new Set(entries.map((entry) => entry.date));
        let streakCount = 0;
        let cursor = getLocalDateKey();

        while (dates.has(cursor)) {
            streakCount += 1;
            cursor = getPreviousDateKey(cursor);
        }

        return streakCount;
    }

    function setStatus(message, isError = false) {
        status.textContent = message;
        status.classList.toggle('is-error', isError);
    }

    function selectMood(mood) {
        moodInput.value = mood;
        moodButtons.forEach((button) => {
            const isSelected = button.dataset.mood === mood;
            button.classList.toggle('is-selected', isSelected);
            button.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        });
    }

    moodButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const mood = button.dataset.mood || '';
            selectMood(mood);
        });
    });

    function resetForm() {
        editingDate = null;
        form.reset();
        selectMood('');
        saveButton.textContent = 'Save Reflection';
        cancelButton.hidden = true;
    }

    function startEdit(entry) {
        editingDate = entry.date;
        selectMood(entry.mood);
        summaryInput.value = entry.summary;
        saveButton.textContent = `Update ${toDisplayDate(entry.date)}`;
        cancelButton.hidden = false;
        setStatus(`Editing ${toDisplayDate(entry.date)}.`, false);
        summaryInput.focus();
    }

    function renderEntries() {
        const entries = readEntries().sort((a, b) => b.date.localeCompare(a.date));
        const streakCount = getCurrentStreak(entries);
        streak.textContent = `🔥 Flame streak: ${streakCount} ${streakCount === 1 ? 'day' : 'days'}`;

        history.innerHTML = '';

        if (!entries.length) {
            const empty = document.createElement('li');
            empty.className = 'reflections-empty';
            empty.textContent = 'No reflections yet. Add your first one today.';
            history.appendChild(empty);
            return;
        }

        entries.forEach((entry) => {
            const item = document.createElement('li');

            const topRow = document.createElement('div');
            topRow.className = 'reflection-meta';

            const moodText = document.createElement('strong');
            moodText.textContent = `${getMoodFace(entry.mood)} ${getMoodLabel(entry.mood)}`;

            const dateText = document.createElement('span');
            dateText.textContent = toDisplayDate(entry.date);

            topRow.appendChild(moodText);
            topRow.appendChild(dateText);

            const summary = document.createElement('p');
            summary.textContent = entry.summary;

            const editButton = document.createElement('button');
            editButton.type = 'button';
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => {
                startEdit(entry);
            });

            item.appendChild(topRow);
            item.appendChild(summary);
            item.appendChild(editButton);
            history.appendChild(item);
        });
    }

    cancelButton.addEventListener('click', () => {
        resetForm();
        setStatus('Edit canceled.');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const mood = moodInput.value.trim().toLowerCase();
        const summary = summaryInput.value.trim();
        const allowedMoods = new Set(['happy', 'neutral', 'sad', 'mad']);

        if (!allowedMoods.has(mood)) {
            setStatus('Please click one emoji to choose your mood.', true);
            return;
        }

        if (!summary) {
            setStatus('Please write what you did today.', true);
            return;
        }

        const entries = readEntries();
        const today = getLocalDateKey();

        if (!editingDate) {
            const hasTodayEntry = entries.some((entry) => entry.date === today);
            if (hasTodayEntry) {
                const todayEntry = entries.find((entry) => entry.date === today);
                if (todayEntry) {
                    startEdit(todayEntry);
                }
                setStatus('You already have a reflection for today. You can edit it instead.', true);
                return;
            }

            entries.push({
                date: today,
                mood,
                summary,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });
            saveEntries(entries);
            resetForm();
            renderEntries();
            setStatus('Reflection saved for today.');
            return;
        }

        const index = entries.findIndex((entry) => entry.date === editingDate);
        if (index === -1) {
            resetForm();
            renderEntries();
            setStatus('That entry no longer exists. Please try again.', true);
            return;
        }

        entries[index] = {
            ...entries[index],
            mood,
            summary,
            updatedAt: new Date().toISOString()
        };

        saveEntries(entries);
        const updatedDate = editingDate;
        resetForm();
        renderEntries();
        setStatus(`Updated reflection for ${toDisplayDate(updatedDate)}.`);
    });

    renderEntries();
}

function getCurrentPageName() {
    const path = window.location.pathname || '';
    const page = path.split('/').pop() || 'index.html';
    return page;
}

function isSafeResumeTarget(target) {
    return typeof target === 'string' && /^[a-z0-9-]+\.html(?:#[a-z0-9_-]+)?$/i.test(target);
}

function trackLastVisitedPage() {
    const page = getCurrentPageName();
    if (!page || page === 'index.html' || page === 'persistent-player.html') {
        return;
    }

    const hash = window.location.hash || '';
    const target = `${page}${hash}`;
    localStorage.setItem(getScopedStorageKey('lastVisitedPage'), target);
}

function initializeHomeWelcome(profile) {
    const heading = document.getElementById('home-welcome-heading');
    const resumeButton = document.getElementById('home-resume-button');

    if (!heading || !resumeButton) {
        return;
    }

    if (profile && typeof profile.name === 'string' && profile.name.trim()) {
        heading.textContent = `Welcome, ${profile.name.trim()}!`;
    }

    const savedTarget = localStorage.getItem(getScopedStorageKey('lastVisitedPage'));
    const page = getCurrentPageName();

    if (!savedTarget || !isSafeResumeTarget(savedTarget) || savedTarget.startsWith('index.html') || page !== 'index.html') {
        resumeButton.hidden = true;
        return;
    }

    resumeButton.hidden = false;
    resumeButton.addEventListener('click', () => {
        window.location.href = savedTarget;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();
    applySavedFontSize();
    applySavedLayoutMode();
    const authState = initializeProfileAuth();
    initializeHomeWelcome(authState.profile);
    trackLastVisitedPage();
    initializeMiniSongPlayer();
    initializeReflections();

    const dropdowns = Array.from(document.querySelectorAll('.dropdown'));
    if (dropdowns.length) {
        const closeAllDropdowns = () => {
            dropdowns.forEach((dropdown) => {
                dropdown.classList.remove('open');
            });
        };

        dropdowns.forEach((dropdown) => {
            const button = dropdown.querySelector('.dropbtn');
            if (!button) {
                return;
            }

            button.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                const willOpen = !dropdown.classList.contains('open');
                closeAllDropdowns();
                if (willOpen) {
                    dropdown.classList.add('open');
                }
            });

            const menu = dropdown.querySelector('.dropdown-content');
            if (menu) {
                menu.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
            }
        });

        document.addEventListener('click', () => {
            closeAllDropdowns();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeAllDropdowns();
            }
        });
    }

    const quickText = document.getElementById('quick-text');
    if (quickText) {
        // Load the quick note from local storage and keep it synced while typing.
        const quickNoteKey = getScopedStorageKey('quickNote');
        const stored = localStorage.getItem(quickNoteKey) || '';
        quickText.value = stored;
        quickText.addEventListener('input', () => {
            localStorage.setItem(quickNoteKey, quickText.value);
        });
    }

    const personalTimezoneForm = document.getElementById('personal-timezone-form');
    const addTimezoneForm = document.getElementById('add-timezone-form');
    const personalTimezoneInput = document.getElementById('personal-timezone');
    const addTimezoneInput = document.getElementById('add-timezone');
    const timezoneList = document.getElementById('timezone-list');
    const timezoneError = document.getElementById('timezone-error');

    if (!personalTimezoneForm || !addTimezoneForm || !personalTimezoneInput || !addTimezoneInput || !timezoneList || !timezoneError) {
        return;
    }

    const primaryTimezoneKey = getScopedStorageKey('homePrimaryTimeZone');
    const extraTimezonesKey = getScopedStorageKey('homeExtraTimeZones');
    const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    let primaryTimezone = localStorage.getItem(primaryTimezoneKey) || browserTimezone;

    function isValidTimeZone(timeZone) {
        try {
            new Intl.DateTimeFormat(undefined, { timeZone }).format(new Date());
            return true;
        } catch {
            return false;
        }
    }

    function normalizeTimeZone(timeZone) {
        return timeZone.trim();
    }

    function getExtraTimeZones() {
        const stored = localStorage.getItem(extraTimezonesKey);
        if (!stored) {
            return [];
        }

        try {
            const parsed = JSON.parse(stored);
            if (!Array.isArray(parsed)) {
                return [];
            }

            return parsed.filter((zone) => typeof zone === 'string' && isValidTimeZone(zone));
        } catch {
            return [];
        }
    }

    function setExtraTimeZones(timeZones) {
        localStorage.setItem(extraTimezonesKey, JSON.stringify(timeZones));
    }

    function showTimezoneError(message) {
        timezoneError.textContent = message;
    }

    function clearTimezoneError() {
        timezoneError.textContent = '';
    }

    function formatZoneTime(timeZone) {
        return new Intl.DateTimeFormat(undefined, {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
            timeZone
        }).format(new Date());
    }

    function deleteExtraTimeZone(timeZoneToRemove) {
        const updated = getExtraTimeZones().filter((zone) => zone !== timeZoneToRemove);
        setExtraTimeZones(updated);
        renderTimeZones();
    }

    function createZoneItem(label, timeZone, removable) {
        const item = document.createElement('li');
        const title = document.createElement('strong');
        const timeText = document.createElement('p');
        const zoneText = document.createElement('p');

        title.textContent = label;
        timeText.textContent = formatZoneTime(timeZone);
        zoneText.textContent = `Time zone: ${timeZone}`;

        item.appendChild(title);
        item.appendChild(timeText);
        item.appendChild(zoneText);

        if (removable) {
            const removeButton = document.createElement('button');
            removeButton.type = 'button';
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                deleteExtraTimeZone(timeZone);
            });
            item.appendChild(removeButton);
        }

        return item;
    }

    function renderTimeZones() {
        timezoneList.innerHTML = '';

        timezoneList.appendChild(createZoneItem('My Time Zone', primaryTimezone, false));

        const extras = getExtraTimeZones();
        extras.forEach((zone, index) => {
            timezoneList.appendChild(createZoneItem(`Other Time Zone ${index + 1}`, zone, true));
        });
    }

    if (!isValidTimeZone(primaryTimezone)) {
        primaryTimezone = browserTimezone;
        localStorage.setItem(primaryTimezoneKey, primaryTimezone);
    }

    personalTimezoneInput.value = primaryTimezone;
    renderTimeZones();

    personalTimezoneForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const candidate = normalizeTimeZone(personalTimezoneInput.value);

        if (!candidate || !isValidTimeZone(candidate)) {
            showTimezoneError('Please enter a valid timezone like America/New_York or Europe/London.');
            return;
        }

        primaryTimezone = candidate;
        localStorage.setItem(primaryTimezoneKey, candidate);

        const extrasWithoutPrimary = getExtraTimeZones().filter((zone) => zone !== candidate);
        setExtraTimeZones(extrasWithoutPrimary);

        clearTimezoneError();
        renderTimeZones();
    });

    addTimezoneForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const candidate = normalizeTimeZone(addTimezoneInput.value);

        if (!candidate || !isValidTimeZone(candidate)) {
            showTimezoneError('Please enter a valid timezone before adding.');
            return;
        }

        if (candidate === primaryTimezone) {
            showTimezoneError('That timezone is already set as your personal timezone.');
            return;
        }

        const extras = getExtraTimeZones();
        if (extras.includes(candidate)) {
            showTimezoneError('That timezone is already in your list.');
            return;
        }

        extras.push(candidate);
        setExtraTimeZones(extras);
        addTimezoneInput.value = '';
        clearTimezoneError();
        renderTimeZones();
    });

    setInterval(() => {
        renderTimeZones();
    }, 1000);
});