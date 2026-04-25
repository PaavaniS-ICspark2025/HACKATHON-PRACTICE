function getProfileIdFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('profileId') || 'default';
}

function getStorageKeys(profileId) {
    return {
        songKey: `workNotesActiveSong::${profileId}`,
        playbackKey: `workNotesPersistentPlayback::${profileId}`
    };
}

function readJson(key) {
    const stored = localStorage.getItem(key);
    if (!stored) {
        return null;
    }

    try {
        return JSON.parse(stored);
    } catch {
        return null;
    }
}

function buildEmbedUrl(videoId, autoplay) {
    const params = new URLSearchParams({
        rel: '0',
        modestbranding: '1'
    });

    if (autoplay) {
        params.set('autoplay', '1');
    }

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

function buildSearchEmbedUrl(query, autoplay) {
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

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('persistent-player-title');
    const status = document.getElementById('persistent-player-status');
    const frame = document.getElementById('persistent-player-frame');
    const videoWrap = document.getElementById('persistent-video-wrap');
    const audioWrap = document.getElementById('persistent-audio-wrap');
    const audio = document.getElementById('persistent-player-audio');
    const stopButton = document.getElementById('persistent-player-stop');

    if (!title || !status || !frame || !videoWrap || !audioWrap || !audio || !stopButton) {
        return;
    }

    const profileId = getProfileIdFromQuery();
    const { songKey, playbackKey } = getStorageKeys(profileId);

    let currentSong = readJson(songKey);
    let playbackState = readJson(playbackKey) || { isPlaying: true };

    function applyPlayerState(forceAutoplay = false) {
        if (!currentSong || typeof currentSong.name !== 'string') {
            title.textContent = 'Persistent Song Player';
            status.textContent = 'Select a song first in the Songs page.';
            frame.src = '';
            audio.pause();
            audio.removeAttribute('src');
            audio.load();
            return;
        }

        title.textContent = currentSong.name;
        if (playbackState && playbackState.isPlaying) {
            status.textContent = 'Playing across tabs/pages.';
            if (typeof currentSong.youtubeQuery === 'string' && currentSong.youtubeQuery) {
                audio.pause();
                audio.removeAttribute('src');
                audio.load();
                audioWrap.style.display = 'none';
                videoWrap.style.display = 'block';
                frame.src = buildSearchEmbedUrl(currentSong.youtubeQuery, forceAutoplay);
                return;
            }

            if (typeof currentSong.previewUrl === 'string' && currentSong.previewUrl) {
                frame.src = '';
                videoWrap.style.display = 'none';
                audioWrap.style.display = 'block';
                audio.src = currentSong.previewUrl;
                audio.play().catch(() => {});
                return;
            }

            if (typeof currentSong.videoId === 'string' && currentSong.videoId) {
                audio.pause();
                audio.removeAttribute('src');
                audio.load();
                audioWrap.style.display = 'none';
                videoWrap.style.display = 'block';
                frame.src = buildEmbedUrl(currentSong.videoId, forceAutoplay);
                return;
            }

            status.textContent = 'Selected track is not playable here.';
        } else {
            status.textContent = 'Playback paused.';
            frame.src = '';
            audio.pause();
            audio.currentTime = 0;
        }
    }

    stopButton.addEventListener('click', () => {
        playbackState = { isPlaying: false, updatedAt: Date.now() };
        localStorage.setItem(playbackKey, JSON.stringify(playbackState));
        applyPlayerState(false);
    });

    window.addEventListener('storage', (event) => {
        if (event.key === songKey && event.newValue) {
            const nextSong = readJson(songKey);
            if (nextSong) {
                currentSong = nextSong;
            }
            applyPlayerState(true);
            return;
        }

        if (event.key === playbackKey && event.newValue) {
            const nextState = readJson(playbackKey);
            if (nextState) {
                playbackState = nextState;
            }
            applyPlayerState(Boolean(playbackState && playbackState.isPlaying));
        }
    });

    applyPlayerState(true);
});
