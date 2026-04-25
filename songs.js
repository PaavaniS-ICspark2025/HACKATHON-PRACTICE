const epicSongs = [
    { name: 'The Horse and the Infant', videoId: 'bWIgy-Ls-SU' },
    { name: 'Just a Man', videoId: 'hNdvp9Qo8PA' },
    { name: 'Full Speed Ahead', videoId: 'x3KOt-3T73c' },
    { name: 'Open Arms', videoId: '-oMZw8DQbaI' },
    { name: 'Warrior of the Mind', videoId: 'oB8lqgO9e24' },
    { name: 'Polyphemus', videoId: 'iMjbPF-MaGU' },
    { name: 'Survive', videoId: 'rND9-qeA7Lo' },
    { name: 'Remember Them', videoId: 'NGxrhdgAg18' },
    { name: 'My Goodbye', videoId: 'xrFaGilus6o' },
    { name: 'Storm', videoId: 'sRntPU_s-gI' },
    { name: 'Luck Runs Out', videoId: 'ZxQHl2fVJ-s' },
    { name: 'Keep Your Friends Close', videoId: 'Z-Y0iMmFzFE' },
    { name: 'Ruthlessness', videoId: '3dzBlSeCJNg' },
    { name: 'Puppeteer', videoId: 'Mz2ASoe6OG0' },
    { name: "Wouldn't You Like", videoId: 'xkIBM71E0_w' },
    { name: 'Done For', videoId: 'aHkX9C4YqB4' },
    { name: 'There Are Other Ways', videoId: 'uXdLAOBANGE' },
    { name: 'The Underworld', videoId: 'cyqul8pKHko' },
    { name: 'No Longer You', videoId: 'BZ8qL5P270Q' },
    { name: 'Monster', videoId: '4Q0Un9PQ0wk' },
    { name: 'Suffering', videoId: 'h84fYAsvsco' },
    { name: 'Different Beast', videoId: 'jSUUftouuxg' },
    { name: 'Scylla', videoId: 'PTGWC85tLfg' },
    { name: 'Mutiny', videoId: 'Jf_csGm0sgc' },
    { name: 'Thunder Bringer', videoId: 'mrM13diWGIU' },
    { name: 'Legendary', videoId: 'FSxxkK_Z-YE' },
    { name: 'Little Wolf', videoId: 'BPiJF7rceiA' },
    { name: "We'll Be Fine", videoId: 'DR26QjyF__g' },
    { name: 'Love in Paradise', videoId: 'lpVWEq_wIrs' },
    { name: 'God Games', videoId: '5m3Xe7iDivk' },
    { name: 'Not Sorry for Loving You', videoId: 'bssyK5eTyw0' },
    { name: 'Dangerous', videoId: 'jZW2GnEcjpM' },
    { name: 'Charybdis', videoId: '4n0U1Erga90' },
    { name: 'Get in the Water', videoId: '8njnTRKGdYw' },
    { name: 'Six Hundred Strike', videoId: 'zov6NXIAuow' },
    { name: 'The Challenge', videoId: 'w9W_jjDDMgk' },
    { name: 'Hold Them Down', videoId: 'oeDDZNKHOVo' },
    { name: 'Odysseus', videoId: 'UjcV3CYfCsM' },
    { name: "I Can't Help but Wonder", videoId: 'a2zUJMQTcsQ' },
    { name: 'Would You Fall in Love with Me Again', videoId: 'k4MMkrXLX2g' }
];

function buildEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
}

function buildWatchUrl(videoId) {
    return `https://www.youtube.com/watch?v=${videoId}`;
}

function buildSearchEmbedUrl(query) {
    const params = new URLSearchParams({
        listType: 'search',
        list: query
    });

    return `https://www.youtube.com/embed?${params.toString()}&autoplay=1`;
}

function buildSearchResultsUrl(query) {
    const params = new URLSearchParams({
        search_query: query
    });

    return `https://www.youtube.com/results?${params.toString()}`;
}

function getSongStorageKey() {
    if (typeof window.getScopedStorageKey === 'function') {
        return window.getScopedStorageKey('workNotesActiveSong');
    }

    return 'workNotesActiveSong::default';
}

function saveActiveSong(song) {
    localStorage.setItem(getSongStorageKey(), JSON.stringify(song));
}

function buildEpicYouTubeQuery(songName) {
    return `Epic The Musical ${songName} Jorge Rivera-Herrans official audio`;
}

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('song-select');
    const title = document.getElementById('song-title');
    const frame = document.getElementById('song-frame');
    const songLink = document.getElementById('song-link');
    const keepPlayingButton = document.getElementById('play-across-tabs');
    const songSearchForm = document.getElementById('song-search-form');
    const songSearchTitle = document.getElementById('song-search-title');
    const songSearchArtist = document.getElementById('song-search-artist');
    const songSearchStatus = document.getElementById('song-search-status');
    const songsVideoEmbed = document.getElementById('songs-video-embed');
    const songsAudioWrap = document.getElementById('songs-audio-wrap');
    const songAudio = document.getElementById('song-audio');

    if (!select || !title || !frame || !songLink || !songsVideoEmbed) {
        return;
    }

    let currentSelectedSong = epicSongs[0];

        epicSongs.forEach((song) => {
        const option = document.createElement('option');
            option.value = song.videoId;
        option.textContent = song.name;
        select.appendChild(option);
    });

        const updatePlayer = (videoId) => {
            const selectedSong = epicSongs.find((song) => song.videoId === videoId);
        if (!selectedSong) {
            return;
        }

        const youtubeQuery = buildEpicYouTubeQuery(selectedSong.name);
        currentSelectedSong = {
            ...selectedSong,
            youtubeQuery,
            source: 'youtube-search'
        };

        title.textContent = `Now playing: ${selectedSong.name}`;
        songsVideoEmbed.style.display = 'block';
        if (songsAudioWrap) {
            songsAudioWrap.style.display = 'none';
        }
        if (songAudio) {
            songAudio.pause();
            songAudio.removeAttribute('src');
            songAudio.load();
        }

            // Search embeds are less likely to fail for videos with embed restrictions.
            frame.src = buildSearchEmbedUrl(youtubeQuery);
        songLink.href = buildSearchResultsUrl(youtubeQuery);
            songLink.textContent = 'If unavailable, open YouTube search results';
        saveActiveSong(currentSelectedSong);
    };

    async function searchAndPlayCustomSong() {
        if (!songSearchTitle || !songSearchArtist || !songSearchStatus) {
            return;
        }

        const trackName = songSearchTitle.value.trim();
        const artistName = songSearchArtist.value.trim();
        if (!trackName || !artistName) {
            songSearchStatus.textContent = 'Enter both title and artist.';
            return;
        }

        const youtubeQuery = `${trackName} ${artistName} official audio`;
        const foundSong = {
            name: `${trackName} - ${artistName}`,
            youtubeQuery,
            source: 'youtube-search'
        };

        currentSelectedSong = foundSong;
        saveActiveSong(foundSong);

        title.textContent = `Now playing: ${foundSong.name}`;
        songsVideoEmbed.style.display = 'block';
        if (songsAudioWrap) {
            songsAudioWrap.style.display = 'none';
        }
        if (songAudio) {
            songAudio.pause();
            songAudio.removeAttribute('src');
            songAudio.load();
        }

        frame.src = buildSearchEmbedUrl(youtubeQuery);
        songLink.href = buildSearchResultsUrl(youtubeQuery);
        songLink.textContent = 'Open YouTube search results';
        songSearchStatus.textContent = 'Playing top YouTube result for your search.';
    }

    select.value = epicSongs[0].videoId;
    select.addEventListener('change', () => {
        updatePlayer(select.value);
    });

    if (songSearchForm) {
        songSearchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            searchAndPlayCustomSong();
        });
    }

    if (keepPlayingButton) {
        keepPlayingButton.addEventListener('click', () => {
            if (typeof window.openPersistentSongPlayer === 'function') {
                window.openPersistentSongPlayer(currentSelectedSong, true);
            }
        });
    }

    updatePlayer(select.value);
});
