# Exit? — a Creatively Bad UI

A Bad UI of the everyday **"Do you want to exit the application?"** confirmation dialog,
rebuilt so the app refuses to let you leave easily.

## The UI

It's a plain Yes / No exit prompt. The catch is in how it behaves:

- **Every time you click "Yes"** (the real exit):
  - the **"No" button grows** a little bigger,
  - the **"Yes" button jumps** to a random spot on screen and **shrinks**,
  - its label gets more pathetic (`Yes` -> `yes?` -> `y-yes..` -> ...).
- **"No"** stays easy to click and simply cancels the exit.

## It still works

The component does its job. If you keep chasing and clicking the "Yes" button
**6 times**, the app gives up and shows a short shutdown message. Clicking "No"
cancels the exit, then resets so you can try again.

## Files

| File         | What it does                                              |
|--------------|-----------------------------------------------------------|
| `index.html` | The dialog markup.                                        |
| `style.css`  | Sytling.                                                  |
| `script.js`  | The behaviour: Yes runs, No grows.                        |
| `README.md`  | This file.                                                |

Built with plain HTML, CSS, and JavaScript -- no frameworks, no libraries, no build tools.
