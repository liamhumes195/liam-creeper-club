'use strict';

const videoPlayer = document.getElementById('video-player');
const playerTitle = document.getElementById('player-title');
const youtubeLink = document.getElementById('youtube-link');
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach((card) => {
    card.addEventListener('click', (event) => {
        // Keep normal link behavior for opening a video in another tab.
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

        const videoId = card.dataset.videoId;
        if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) return;
        event.preventDefault();
        if (card.getAttribute('aria-current') === 'true') return;

        const title = card.querySelector('h3').textContent;
        videoPlayer.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
        videoPlayer.title = `Cotevr: ${title}`;
        playerTitle.textContent = title;
        youtubeLink.href = card.href;

        videoCards.forEach((item) => {
            const selected = item === card;
            if (selected) item.setAttribute('aria-current', 'true');
            else item.removeAttribute('aria-current');
            item.querySelector('.card-action').textContent = selected ? 'Selected video' : 'Watch video →';
        });
    });
});
