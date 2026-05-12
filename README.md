# 🪪 ID Card Maker Pro

A free, offline-capable, browser-based ID card generator with **3 professional templates** (Government, Hospital v1, Hospital v2), bulk Excel import, full customization, and print-ready output. Built with vanilla HTML + CSS + JavaScript — **no build step, no backend.**

> Originally designed for the **Office of SDM (Revenue), Palari, District Balodabazar–Bhatapara, Chhattisgarh** but fully customizable.

## ✨ Features

### 🎴 Three Templates
- **🏛️ Government** — Patwari/Revenue (CR80 portrait/landscape, dual-sided)
- **🏥 Hospital v1** — Compact single-side medical card, granular controls, watermark
- **🏨 Hospital v2** — Front + Back design with partner logos panel and Hindi banner (NEW!)

### 📦 Bulk Operations
- Excel + Photos ZIP import — generate 100+ cards in seconds
- Profiles system — save unlimited configurations
- Auto-save + JSON export/import

### 🎨 Full Customization (works on all 3 templates)
- 8 preset themes + 13+ granular color pickers per template
- Live font controls for every text element
- Watermark with size + opacity
- Smart signature cleaner — 6 presets + ink color picker + 0-360° rotation
- Per-field text controls (bold, italic, position offset)

### 🖨️ Print Ready
- Exact CR80 size (54×85.6mm)
- 3 print modes: Pair, Duplex, Grid (Hospital v1: 9-up per A4)
- Color-forcing for Chrome's print engine

### 📱 Mobile + Desktop
- Touch device auto-detection
- Slide-in drawer panel on mobile
- Tablet-optimized layout

---

## 🚀 Quick Start

### Antigravity / VS Code
1. Open the folder (`File → Open Folder`)
2. Install **Live Server** extension (auto-suggested)
3. Right-click `index.html` → "Open with Live Server"
4. Hot-reload at `http://localhost:5500`

### Standalone
- Double-click `index.html` — works offline in any modern browser

### GitHub Pages (free hosting)
1. Push to GitHub
2. Settings → Pages → Branch: main → Save
3. Live at `https://<your-username>.github.io/id-card-maker/`

The included `.github/workflows/deploy.yml` auto-deploys on every push.

---

## 📂 Project Structure

```
id-card-maker/
├── index.html              # Main UI
├── styles.css              # All styles (Govt + Hospital v1 + v2, mobile, print)
├── app.js                  # All logic
├── serve.py                # Optional local server (python3 serve.py)
├── README.md
├── LICENSE
├── .gitignore
├── .vscode/                # IDE config
└── .github/workflows/      # Auto-deploy
```

---

## 🎴 Template Guide

### 🏛️ Government
- **Excel columns:** `NAME, FATHER'S NAME, DOB, EMPLOYEE CODE, BLOOD GROUP, CONTACT NUMBER, OFFICE ADRESS, POST`
- **Size:** CR80, dual-sided

### 🏥 Hospital v1
- **Excel columns:** `NAME, DESIGNATION, CONTACT, EMPLOYEE CODE`
- **Size:** CR80 portrait single-side, 9 per A4
- **Features:** 13 element colors, watermark, per-field controls, sign rotate 0-360°

### 🏨 Hospital v2
- **Excel columns:** `NAME, DESIGNATION, CONTACT, EMPLOYEE CODE`
- **Size:** CR80, dual-sided (front + back)
- **Features:**
  - Front: Logo + brand + photo + name + designation + contact + address with phones
  - Back: Bigger logo + partner schemes line + Hindi banner with yellow highlights + 5 partner logos panel + unit address
  - Up to 5 uploadable partner logos (CSPDCL, NUVOCO, ADITYA BIRLA, SBI, AYUSHMAN CARD by default)
  - 8 customizable element colors + 9 size sliders + signature rotation

---

## 🛠️ Development

### Key Functions (`app.js`)
- `setTemplate(tmpl)` — switch templates
- `renderHospital2Front(p)`, `renderHospital2Back(p)` — Hospital v2 render
- `loadPartnerLogo()`, `clearPartnerLogo()` — Hospital v2 partner logos
- `cleanSignatureBackground()` — sign cleaner
- `doBulkImport()` — Excel + ZIP processing
- `printCards()`, `saveProfile()` — print + profiles

### CSS Sections (`styles.css`)
- Govt template: `.portrait`, `.landscape`, `.bcard`
- Hospital v1: `.htmpl-*`
- Hospital v2: `.htmpl2-*` + `.partner-logos-grid`
- Mobile / Tablet / Print: `@media` queries

### Adding a Template
1. CSS with unique class prefix (e.g. `.school-*`)
2. `renderSchool(p)` function
3. Template option in `setTemplate()` + template-grid HTML
4. Fields section with `data-tmpl-only="school"`
5. Update `render()` dispatch

---

## 🖨️ Print Tips

⚠️ **Background graphics: ON** in Chrome's print dialog (most important — colors won't print without this).

- Scale: **100%** (NOT "Fit to page")
- Margins: **None** or Default
- Paper: A4 or CR80 cardstock (250+ GSM)

---

## 🛡️ Data Safety

- localStorage only — no server uploads
- Photos/logos never leave your device
- Use **💾 Save** for JSON backups

---

## 📜 License

MIT — free for personal, government, and commercial use.

**Made for offices that want professional ID cards without paying ₹50/card to a vendor.** 🪪
