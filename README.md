# AMBIENT — Personal Atmosphere Generator

A static, vanilla JavaScript atmosphere mixer for GitHub Pages.

## Features
- Six curated atmosphere presets and searchable library.
- Web Audio API mixer with individual and master volume/mute controls.
- Timestamp-based focus timer: Pomodoro, short break, and long break.
- Local custom atmospheres, focus history, preferences, and reset controls.
- Responsive cinematic UI with reduced-motion support.

## Run locally
Use an HTTP server because ES modules are blocked by many browsers on `file://`:

```powershell
python -m http.server 8000
```
Open `http://localhost:8000`.

## Audio assets
Place licensed loop recordings in `assets/audio/` using these exact names:

| File | Source | License / attribution |
|---|---|---|
| `rain.mp3` | Add your licensed recording | Record source and license here |
| `wind.mp3` | Add your licensed recording | Record source and license here |
| `thunder.mp3` | Add your licensed recording | Record source and license here |
| `ocean-waves.mp3` | Add your licensed recording | Record source and license here |
| `birds.mp3` | Add your licensed recording | Record source and license here |
| `fireplace.mp3` | Add your licensed recording | Record source and license here |
| `night-crickets.mp3` | Add your licensed recording | Record source and license here |

The application intentionally does not claim audio is available until the browser loads the file. Missing recordings show `Audio unavailable`.

## Structure
`index.html`, `css/style.css`, `js/app.js`, `js/audio-engine.js`, `js/timer.js`, `js/storage.js`, `js/presets.js`, and `assets/audio/`.

## GitHub Pages
1. Push the folder to a GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Select `main` and `/(root)`.
5. Save and wait for the deployment URL.

All asset references are relative, so project-page paths work.

## Testing notes
Without supplied audio files, audio playback verification is BLOCKED by design. UI, timer, storage, and module syntax can be tested locally over HTTP. No audio files are fabricated in this repository.
