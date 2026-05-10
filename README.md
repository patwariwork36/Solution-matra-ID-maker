# 🪪 ID Card Maker Pro

A free, offline-capable, browser-based ID card generator with **multiple templates** (Government, Hospital), bulk Excel import, themes, and full customization. Built with vanilla HTML + CSS + JavaScript — **no build step, no backend, no dependencies to install.**

> Originally designed for the **Office of SDM (Revenue), Palari, District Balodabazar–Bhatapara, Chhattisgarh** but fully customizable for any office, hospital, or organization.

---

## ✨ Features

### 🎴 Multiple Templates
- **🏛️ Government** — Patwari/Revenue style (CR80 portrait/landscape, two-sided)
- **🏥 Hospital** — Medical/clinic style (RadhaKrishna design, single-side)

### 📦 Bulk Operations
- **Excel + Photos ZIP import** — generate 100+ cards in seconds
- **Profiles system** — save unlimited office configurations
- **Auto-save** to browser localStorage + JSON export/import

### 🎨 Full Customization
- **8 preset themes** + custom color picker
- **Live font controls** for every text element
- **💧 Watermark** with size + opacity controls
- **✍️ Smart signature** — auto background removal with 6 cleaning presets + ink color picker

### 🖨️ Print Ready
- **Exact CR80 size** (54×85.6mm portrait, 85.6×54mm landscape)
- **3 print modes**: Pair, Duplex, Grid
- **Color-forcing** for Chrome's print engine

### 📱 Mobile + Desktop
- Touch device auto-detection
- Slide-in drawer panel on mobile
- Same tool, every device

---

## 🚀 Quick Start

### Open in Antigravity / VS Code
1. Open the folder in Antigravity or VS Code
2. Install **Live Server** extension (auto-suggested in `.vscode/extensions.json`)
3. Right-click `index.html` → "Open with Live Server"
4. Edit live with hot reload

### Or just run locally
- Double-click `index.html` — opens in browser, ready to use

### Deploy on GitHub Pages (free)
1. Push to GitHub
2. Settings → Pages → Branch: main, Folder: / (root)
3. Visit `https://<your-username>.github.io/id-card-maker/`

The included `.github/workflows/deploy.yml` auto-deploys on every push.

---

## 📂 Project Structure

```
id-card-maker/
├── index.html              # Main entry point with full UI
├── styles.css              # All styles (Govt + Hospital, mobile, print)
├── app.js                  # All logic
├── samples/                # Test data (CSV + photos guide)
├── docs/PRINT_GUIDE.md     # Detailed printing instructions
├── .vscode/                # IDE config (settings + extensions)
├── .github/workflows/      # Auto-deploy to GitHub Pages
├── README.md
├── LICENSE
└── .gitignore
```

---

## 🎴 Templates

### 🏛️ Government Template
**Best for:** Patwari, Tehsildar, Forest, Police, any govt department  
**Size:** CR80 portrait or landscape, dual-sided  
**Excel columns:** `NAME, FATHER'S NAME, DOB, EMPLOYEE CODE, POST, BLOOD GROUP, CONTACT NUMBER, OFFICE ADRESS`

### 🏥 Hospital Template
**Best for:** Hospital staff, clinic employees, nursing homes  
**Size:** Portrait, single-side, 340×540px  
**Theme colors:** Navy + Teal + Maroon (customizable)  
**Excel columns:** `NAME, POST, BLOOD GROUP, CONTACT NUMBER`

---

## 🛠️ Development Notes

### Key Functions in `app.js`:
- `setTemplate(tmpl)` — switch between Government/Hospital
- `renderPortrait(p)`, `renderLandscape(p)` — Govt render
- `renderHospital(p)` — Hospital render
- `doBulkImport()` — Excel + ZIP processing
- `cleanSignatureBackground()` — Canvas-based sign cleaner
- `saveProfile()`, `loadProfile()` — Profile system
- `printCards()` — Print with mode-specific tips

### CSS Sections in `styles.css`:
- Body / panel / preview styles
- Government template (`.portrait`, `.landscape`, `.bcard`)
- Hospital template (`.htmpl-*`)
- Mobile responsive (`@media (max-width: 900px)`)
- Print styles (`@media print`)

### Adding a New Template
1. Add CSS with unique class prefix (e.g. `.school-tmpl`)
2. Add `renderSchool(p)` function in `app.js`
3. Add template option in `setTemplate()` + HTML grid
4. Add fields section with `data-tmpl-only="school"`

---

## 🖨️ Print Tips

⚠️ Most important: **Background graphics: ON** in Chrome's print dialog (otherwise colors won't print).

- Scale: **100%** (not "Fit to page")
- Margins: **None** or Default
- Paper: A4 or CR80 cardstock (250+ GSM)

See `docs/PRINT_GUIDE.md` for full guide.

---

## 🛡️ Data Safety

- All data stored locally in browser (`localStorage`)
- Photos/logos **never uploaded anywhere**
- Use **💾 Save** regularly to download JSON backups

---

## 📜 License

MIT License — free for personal, government, and commercial use.

---

**Made for offices that want professional ID cards without paying ₹50/card to a vendor.** 🪪
