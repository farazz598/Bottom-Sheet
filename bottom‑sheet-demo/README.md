```

# 🌈 React Bottom Sheet (Vite + Spring Motion)

A lightweight React + Vite demo featuring a fully‑responsive **Bottom Sheet** component with three snap‑points and buttery‑smooth spring animations — **zero external animation libraries**.



## 🚀 Features

| ✓ | Description |
|---|-------------|
| **Three Snap Points** | Fully‑open, Half‑open, Closed‑peek |
| **Custom Spring Animation** | Pure `requestAnimationFrame` loop (stiffness 0.08 / damping 0.8) |
| **Drag, Swipe & Buttons** | Natural gestures + idempotent control buttons |
| **Velocity‑Aware Snapping** | Position *and* speed decide the nearest snap |
| **Responsive & Touch‑Friendly** | Works on desktop, mobile, tablet out‑of‑the‑box |
| **Keyboard + ARIA** | `Esc` closes, arrow ↑ / ↓ cycles snaps, `role="dialog"` |
| **Vibrant Demo Content** | Hero / grid / FAQ / gallery sections for scroll testing |
| **Zero Dependencies** | No `react‑spring`, no `framer‑motion` |
| **Easily Customised** | Edit 2 constants: `HALF_FRACTION`, `PEEK_PX` in `BottomSheet.jsx` |

---

## 🌐 Live Demo

> `https://farazz598.github.io/Bottom-Sheet/`

---

## 🏁 Quick Start

```bash
# clone
git clone https://github.com/farazz598/Bottom-Sheet.git
cd Bottom-Sheet/bottom-sheet-demo

# install & run
npm install
npm run dev        # http://localhost:5173
````

---

## 📦 Scripts

| Command           | Purpose                                                  |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Start Vite dev server (HMR)                              |
| `npm run build`   | Production build → **dist/**                             |
| `npm run preview` | Locally serve the build                                  |
| `npm run deploy`  | Build + push `dist/` to `gh-pages` branch (GitHub Pages) |

> `deploy` requires the `gh-pages` package (already included) and correct repo URL in **`bottom-sheet-demo/package.json`**.

---

## 📁 Project Structure

```
Bottom-Sheet/
├─ README.md
├─ .gitignore
└─ bottom-sheet-demo/
   ├─ src/
   │  ├─ components/
   │  │  ├─ BottomSheet.jsx
   │  │  └─ BottomSheet.css
   │  ├─ App.jsx
   │  └─ index.css
   ├─ vite.config.js
   └─ package.json
```

---

## 🛠️ Customisation

| What                  | Where                                          |
| --------------------- | ---------------------------------------------- |
| Snap‑point heights    | `BottomSheet.jsx` → `HALF_FRACTION`, `PEEK_PX` |
| Spring tuning         | Same file → `stiffness`, `damping` constants   |
| Theme colours         | `BottomSheet.css` `:root { --grad-from … }`    |
| Replace demo sections | Inside `<main class="content"> … </main>`      |
| Disable backdrop      | Conditionally render `<div class="backdrop">`  |

---

## 🚀 Deployment
### GitHub Pages

```bash
# from repo root
npm --prefix bottom-sheet-demo run deploy
```

Then **Settings → Pages → Branch: gh-pages /root**
→ `https://farazz598.github.io/Bottom-Sheet/`

---


---

## 🤝 Contributing

1. Fork & clone
2. `git checkout -b feat/something`
3. `npm run dev` & write tests
4. `npm run lint`
5. PR to **main** branch (please include before/after GIFs)

---

## 📜 License

MIT © 2025 — Mohammad Faraz Mahmud

```