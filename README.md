# Creeper Club

A vibrant community website for coders, gamers, and creators featuring interactive games and resources.

## Features

- **Creeper Pong**: Play Pong against an AI opponent
- **Creeper Crossing**: Frogger-style game with creepers
- **Community Resources**: Links to Google Drive, YouTube channel, and more
- **Cotevr Videos**: A dedicated video page with six channel picks, a player, and links to YouTube
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Installation

```bash
npm install
```

### Running the Server

```bash
npm start
```

The server will run on `http://localhost:3000`

Visit `http://localhost:3000/videos` (or `videos.html`) for the Cotevr video page.
The gallery is curated from [Cotevr's channel](https://www.youtube.com/@OfficialCote_VR23).
To change the selection, edit the video cards in `videos.html`; each card contains
the YouTube video ID, title, thumbnail, and duration. Keep the initial player and
its title/link in sync with the first card. The page does not need a YouTube API key.

## Technologies

- Express.js for server
- HTML5 Canvas for games
- CSS3 for styling
- Vanilla JavaScript for game logic

## License

© 2026 Creeper Club. All rights reserved.

## Deployed on Railway

Visit the live site to play the games!
