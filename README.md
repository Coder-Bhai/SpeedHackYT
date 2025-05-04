# 🎬 Video Speed Unlocker

A lightweight Chrome extension that lets you bypass YouTube's default speed limits and control video playback using keyboard shortcuts.

## 🚀 Features

- ⏫ Increase video speed by `0.25x` using `Alt + Up`
- ⏬ Decrease video speed by `0.25x` using `Alt + Down`
- 🔁 Set playback speed to `1x` using `Alt + Z`
- ⚡ Instantly jump to `10x` speed using `Alt + X`
- 🎨 Floating popup shows current speed (with gradient background and white border)

## ⌨️ Keyboard Shortcuts

| Command          | Shortcut     |
|------------------|--------------|
| Increase Speed   | Alt + Up     |
| Decrease Speed   | Alt + Down   |
| Set to 1x        | Alt + Z      |
| Set to 10x       | Alt + X      |

> ✅ You can customize these shortcuts at:  
> `chrome://extensions/shortcuts`

## 🛠️ How to Install

1. Download or clone this repo.
2. Go to `chrome://extensions/`
3. Enable **Developer Mode** (top-right)
4. Click **Load Unpacked**
5. Select the folder containing this extension

## 📁 Files

- `manifest.json`: Extension configuration
- `background.js`: Handles command events and video playback control
- `HowToInstall.txt`: A Complete Guide to Install this Extension

## 🔒 Permissions

This extension only runs on YouTube (`https://www.youtube.com/*`) and uses:
- `scripting`
- `activeTab`
- `commands`

No data is stored or transmitted.

## 📄 License

MIT License

---

**Made with ❤️ to make YouTube bingeing smarter and faster.**
