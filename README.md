# Learn Hub

A single-page static website for a learning-resources landing page. It features an animated solar-system hero, a search header, a grid of lecture tiles that link to YouTube playlists, and a footer with quick links and a newsletter form.

Built with plain HTML, CSS, and JavaScript — no build step or dependencies.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | The page markup and content. |
| `style.css` | All styling for the page. |
| `solar-system.js` | Drives the solar-system animation (orbit speed and planet sizing). |
| `*.jpg`, `*.png`, `*.webp` | Lecture-tile and section images. |

## Running locally

No server or build is required — open `index.html` directly in a browser. For features like relative font/image loading you can optionally serve the folder:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000`.

## Solar-system controls

While the page is open, `solar-system.js` responds to these keys:

| Key | Effect |
| --- | --- |
| `+` | Speed up the orbits |
| `-` | Slow down the orbits |
| `s` | Shrink the planets |
| `l` | Enlarge the planets |
