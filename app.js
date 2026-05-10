const DEFAULT_COLORS = {
  '--c-primary': '#1a3a6e',
  '--c-primary-dark': '#0d2248',
  '--c-accent': '#c0392b',
  '--c-strip': '#e8b800',
  '--c-strip-text': '#1a3a6e',
  '--c-header-text': '#ffe082',
  '--c-photo-border': '#1a3a6e',
  '--c-stripe-1': '#ff9800',
  '--c-stripe-2': '#ffffff',
  '--c-stripe-3': '#00897b'
};

const THEMES = {
  navy:     {'--c-primary':'#1a3a6e','--c-primary-dark':'#0d2248','--c-accent':'#c0392b','--c-strip':'#e8b800','--c-strip-text':'#1a3a6e','--c-header-text':'#ffe082','--c-photo-border':'#1a3a6e','--c-stripe-1':'#ff9800','--c-stripe-2':'#ffffff','--c-stripe-3':'#00897b'},
  maroon:   {'--c-primary':'#7a1f1f','--c-primary-dark':'#4a0e0e','--c-accent':'#1a3a6e','--c-strip':'#ffd54f','--c-strip-text':'#7a1f1f','--c-header-text':'#ffd54f','--c-photo-border':'#7a1f1f','--c-stripe-1':'#ff9800','--c-stripe-2':'#ffffff','--c-stripe-3':'#7a1f1f'},
  forest:   {'--c-primary':'#1b5e20','--c-primary-dark':'#0d3b13','--c-accent':'#c0392b','--c-strip':'#fff8c4','--c-strip-text':'#1b5e20','--c-header-text':'#fff8c4','--c-photo-border':'#1b5e20','--c-stripe-1':'#ff9800','--c-stripe-2':'#ffffff','--c-stripe-3':'#1b5e20'},
  royal:    {'--c-primary':'#4a148c','--c-primary-dark':'#2c0a52','--c-accent':'#c0392b','--c-strip':'#ffe082','--c-strip-text':'#4a148c','--c-header-text':'#ffe082','--c-photo-border':'#4a148c','--c-stripe-1':'#ff9800','--c-stripe-2':'#ffffff','--c-stripe-3':'#4a148c'},
  teal:     {'--c-primary':'#00695c','--c-primary-dark':'#003d34','--c-accent':'#c0392b','--c-strip':'#ffd180','--c-strip-text':'#00695c','--c-header-text':'#ffd180','--c-photo-border':'#00695c','--c-stripe-1':'#ff9800','--c-stripe-2':'#ffffff','--c-stripe-3':'#00695c'},
  saffron:  {'--c-primary':'#bf5700','--c-primary-dark':'#7a3700','--c-accent':'#1b5e20','--c-strip':'#fff8c4','--c-strip-text':'#bf5700','--c-header-text':'#fff8c4','--c-photo-border':'#bf5700','--c-stripe-1':'#bf5700','--c-stripe-2':'#ffffff','--c-stripe-3':'#1b5e20'},
  charcoal: {'--c-primary':'#37474f','--c-primary-dark':'#1c252a','--c-accent':'#c0392b','--c-strip':'#ffd54f','--c-strip-text':'#37474f','--c-header-text':'#ffd54f','--c-photo-border':'#37474f','--c-stripe-1':'#ff9800','--c-stripe-2':'#ffffff','--c-stripe-3':'#37474f'},
  crimson:  {'--c-primary':'#b71c1c','--c-primary-dark':'#7a0e0e','--c-accent':'#0d2248','--c-strip':'#ffe082','--c-strip-text':'#b71c1c','--c-header-text':'#ffe082','--c-photo-border':'#b71c1c','--c-stripe-1':'#ff9800','--c-stripe-2':'#ffffff','--c-stripe-3':'#b71c1c'}
};

const DEFAULT_FONTS = {
  f_oh1: 14, f_oh2: 9,
  f_nm: 14, f_po: 11, f_dt: 7.5,
  f_al: 6.5, f_sp: 10,
  f_bl: 7.5, f_bv: 16, f_bmd: 13, f_bsm: 11, f_bblood: 18
};

const DEFAULT_STATE = {
  template: 'govt',
  orient: 'portrait',
  oh1: 'कार्यालय अनुविभागीय अधिकारी (रा.)',
  oh2: 'पलारी, जिला बलौदाबाजार-भाटापारा छ०ग०',
  dept: 'Revenue & Disaster Mgmt Dept, C.G.',
  authLabel: 'Authorised Signatory',
  signPost: 'अनु. अधि. (रा.), पलारी',
  signPosition: 'center',
  signWidth: 96,
  signThreshold: 200,
  signInkMode: 'auto',
  signInkCustom: '#0d2248',
  wmSize: 160,
  wmBackSize: 170,
  wmOpacity: 8,
  printMode: 'pair',
  // Hospital template fields
  hospName: 'RadhaKrishna',
  hospName2: 'MULTISPECIALITY HOSPITAL',
  hospTagline: 'Care with Compassion, Healing with Trust',
  hospHindiLine: 'आयुष्मान कार्ड से निःशुल्क इलाज की सेवा उपलब्ध है',
  hospUnitName: 'SAHU NURSING HOME',
  hospUnitNum: 'UNIT 2',
  hospUnitPhone: 'PH.NO. 7727299330',
  hospColor1: '#163d5c',  // kept for logo SVG fallback
  hospColor2: '#1a8a92',
  hospColor3: '#7a1a1a',
  // Granular element colors
  hospColorName1:    '#1a8a92',  // Word 1 (Radha) — teal
  hospColorName2:    '#163d5c',  // Word 2 (Krishna) — navy
  hospColorSubtitle: '#444444',  // subtitle text
  hospColorDivider:  '#7a1a1a',  // divider line — maroon
  hospColorTagline:  '#222222',  // tagline text
  hospColorBorder:   '#163d5c',  // photo border
  hospColorLabels:   '#163d5c',  // field labels
  hospColorValues:   '#7a1a1a',  // field values — maroon
  hospColorSignLabel:'#222222',  // authorized signature label
  hospColorBannerBg: '#163d5c',  // hindi banner background
  hospColorUnitName: '#1a8a92',  // unit name — teal
  hospColorUnitNum:  '#163d5c',  // unit code
  hospColorUnitPhone:'#163d5c',  // phone
  hospLogoSize: 40,
  hospPhotoSize: 200,     // single photo size (width); height = width*9/7 = passport ratio
  hospSignCaption: '',    // right-side caption near signature
  hospSignCaptionSize: 9, // caption font size in px
  hospSignW: 120,         // signature image width in px
  hospSignRotate: 0,      // signature rotation in degrees (0/90/180/270)
  hospBrandSize: 18,      // main heading font size
  hospSubSize: 8.2,       // sub heading font size
  hospTaglineSize: 12,    // tagline font size
  hospRowSize: 14,        // field rows font size
  colors: Object.assign({}, DEFAULT_COLORS),
  fonts: Object.assign({}, DEFAULT_FONTS),
  logo: '', sign: '',
  people: [{
    name: 'Mr. Rajat Kumar Verma', post: 'Patwari',
    father: 'Mr. Bhagirathi Verma', empId: '19070060046',
    dob: '03/06/1993', blood: 'B+', contact: '9977895556',
    address: 'Tahsil Office Palari,\nDist. Balodabazar-Bhatapara, C.G.',
    photo: ''
  }],
  current: 0
};

let state = JSON.parse(JSON.stringify(DEFAULT_STATE));
try {
  const saved = localStorage.getItem('idCardStateV3');
  if (saved) {
    const parsed = JSON.parse(saved);
    state = Object.assign({}, DEFAULT_STATE, parsed);
    state.fonts = Object.assign({}, DEFAULT_FONTS, parsed.fonts || {});
    state.colors = Object.assign({}, DEFAULT_COLORS, parsed.colors || {});
    if (!state.people || !state.people.length) state.people = DEFAULT_STATE.people;
  }
} catch(e){}

function persist(){ try{ localStorage.setItem('idCardStateV3', JSON.stringify(state)); }catch(e){} }

function toggleSection(h){
  h.classList.toggle('collapsed');
  const next = h.nextElementSibling;
  if (next && next.classList.contains('section-content')) next.classList.toggle('collapsed');
}

function setOrient(o){
  state.orient = o;
  document.getElementById('b-portrait').classList.toggle('active', o==='portrait');
  document.getElementById('b-landscape').classList.toggle('active', o==='landscape');
  applyPageSize();
  render();
}

// Dynamically set @page size based on print mode + orientation
function applyPageSize(){
  let styleEl = document.getElementById('dynamic-page-style');
  if (!styleEl){
    styleEl = document.createElement('style');
    styleEl.id = 'dynamic-page-style';
    document.head.appendChild(styleEl);
  }
  const tmpl = state.template || 'govt';
  const mode = state.printMode || 'pair';
  const isLandscape = state.orient === 'landscape';

  // Hospital template: cards print at CR80 size (zoom:0.6 applied in CSS).
  // Use A4 page so multiple cards can sit per page.
  if (tmpl === 'hospital'){
    styleEl.textContent = '@page{size:A4 portrait;margin:0;}';
    return;
  }

  let pageRule = '';
  if (mode === 'duplex'){
    // CR80 single card per page
    pageRule = isLandscape ? '85.6mm 54mm' : '54mm 85.6mm';
  } else {
    // pair mode (front+back side by side) or grid mode → A4
    pageRule = isLandscape ? 'A4 landscape' : 'A4 portrait';
  }
  styleEl.textContent = '@page{size:' + pageRule + ';margin:0;}';
}

// Show one-time print tips before triggering print dialog
function printCards(){
  const mode = state.printMode || 'pair';
  const tmpl = state.template || 'govt';

  // Hospital template: print directly without confirm (no duplex/pair complexity)
  if (tmpl === 'hospital'){
    applyPageSize();
    setTimeout(() => window.print(), 100);
    return;
  }

  let modeMsg = '';
  let paperMsg = '';
  if (mode === 'pair'){
    modeMsg = '📄 Mode: Front + Back side-by-side (1 page per person)\n';
    paperMsg = '✅ Paper size: A4\n';
  } else if (mode === 'duplex'){
    modeMsg = '🔄 Mode: Duplex (all Fronts first, then all Backs)\n';
    paperMsg = '✅ Paper size: Custom 54×85.6mm (or A4 if printer doesn\'t support)\n' +
               '✅ Two-sided printing: ON (Long edge / Short edge per your preference)\n';
  } else {
    modeMsg = '⬜⬜ Mode: A4 grid (multiple cards per page)\n';
    paperMsg = '✅ Paper size: A4\n';
  }
  const seen = localStorage.getItem('printTipsShownV3_' + mode);
  if (!seen){
    const proceed = confirm(
      '🖨️ Print Settings\n\n' +
      modeMsg +
      '\nIn Chrome\'s print dialog set:\n\n' +
      '✅ Destination: Printer (or Save as PDF)\n' +
      paperMsg +
      '✅ Margins: None / Default → minimum\n' +
      '✅ Scale: 100% — NOT "Fit to page"\n' +
      '✅ More settings → Background graphics: ON ⭐\n\n' +
      'Click OK to open print dialog.'
    );
    if (!proceed) return;
    localStorage.setItem('printTipsShownV3_' + mode, '1');
  }
  applyPageSize();
  setTimeout(() => window.print(), 100);
}

// Pro signature cleaner — auto background detection, strong ink preservation, smooth edges
function cleanSignatureBackground(dataUrl, threshold, options){
  threshold = threshold || 200;
  options = options || {};
  const inkBoost = options.inkBoost !== false;  // make ink darker (default ON)
  const inkColor = options.inkColor || null;     // force ink to specific color (e.g. '#0d2248')

  return new Promise(function(resolve){
    const img = new Image();
    img.onload = function(){
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d', {willReadFrequently: true});
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imgData.data;
      const W = canvas.width, H = canvas.height;

      // ── Step 1: Auto-detect background color by sampling corners + edges ──
      // Background is most common color in border region
      let bgR = 0, bgG = 0, bgB = 0, bgCount = 0;
      const sampleStep = Math.max(1, Math.floor(Math.min(W, H) / 50));
      // Top + bottom rows
      for (let x = 0; x < W; x += sampleStep){
        for (const y of [0, 1, 2, H-3, H-2, H-1]){
          const i = (y * W + x) * 4;
          bgR += d[i]; bgG += d[i+1]; bgB += d[i+2]; bgCount++;
        }
      }
      // Left + right columns
      for (let y = 0; y < H; y += sampleStep){
        for (const x of [0, 1, 2, W-3, W-2, W-1]){
          const i = (y * W + x) * 4;
          bgR += d[i]; bgG += d[i+1]; bgB += d[i+2]; bgCount++;
        }
      }
      bgR = bgR / bgCount;
      bgG = bgG / bgCount;
      bgB = bgB / bgCount;
      const bgBrightness = (bgR + bgG + bgB) / 3;

      // Parse ink color override
      let inkR = 20, inkG = 20, inkB = 30;  // default near-black with slight blue
      if (inkColor){
        const m = inkColor.match(/^#?([0-9a-f]{6})$/i);
        if (m){
          inkR = parseInt(m[1].substring(0,2), 16);
          inkG = parseInt(m[1].substring(2,4), 16);
          inkB = parseInt(m[1].substring(4,6), 16);
        }
      }

      // ── Step 2: For each pixel, calculate "distance from background" ──
      // Pixels close to background → transparent
      // Pixels far from background → preserve as ink with alpha based on contrast
      for (let i = 0; i < d.length; i += 4){
        const r = d[i], g = d[i+1], b = d[i+2];
        const brightness = (r + g + b) / 3;

        // Distance from background color (Euclidean in RGB)
        const dr = r - bgR, dg = g - bgG, db = b - bgB;
        const bgDist = Math.sqrt(dr*dr + dg*dg + db*db);

        // Threshold logic: works in TWO ways combined for robustness
        // (a) Brightness threshold (classic)
        // (b) Distance from detected background

        // If pixel brightness > threshold AND close to background → fully transparent
        if (brightness >= threshold && bgDist < 40){
          d[i+3] = 0;
          continue;
        }

        // If pixel is much darker than background → it's ink
        const darknessFromBg = bgBrightness - brightness;

        if (darknessFromBg <= 0){
          // pixel is brighter than bg (rare, e.g. white paper sheen) → transparent
          d[i+3] = 0;
          continue;
        }

        // Calculate alpha based on darkness ratio
        // Adjust for threshold preference (slider value)
        const sensitivity = (255 - threshold) / 100;  // higher threshold = more aggressive cleanup
        const cutoff = Math.max(15, 50 - sensitivity * 25);

        if (darknessFromBg < cutoff){
          // very faint pixel, treat as bg
          d[i+3] = 0;
          continue;
        }

        // Smooth alpha ramp for ink
        // Use a curve so anti-aliasing edges look smooth
        let alpha;
        const ratio = (darknessFromBg - cutoff) / (bgBrightness - cutoff);
        // Sigmoid-ish curve for smooth fall-off at edges
        alpha = Math.min(1, Math.max(0, ratio));
        // Boost mid-tones so signature is clearly visible (not faded)
        alpha = Math.pow(alpha, 0.55);  // < 1 power lifts mid-tones
        const finalAlpha = Math.round(alpha * 255);

        if (finalAlpha < 10){
          d[i+3] = 0;
          continue;
        }

        // Replace pixel color: blend toward ink color based on darkness
        if (inkBoost){
          // Use ink color (or auto-detect: just darken existing color)
          if (inkColor){
            d[i] = inkR;
            d[i+1] = inkG;
            d[i+2] = inkB;
          } else {
            // Darken proportionally — multiply against ink-bias
            const darkenFactor = 0.65;
            d[i] = Math.round(r * darkenFactor);
            d[i+1] = Math.round(g * darkenFactor);
            d[i+2] = Math.round(b * darkenFactor);
          }
        }
        d[i+3] = finalAlpha;
      }

      ctx.putImageData(imgData, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = function(){ resolve(dataUrl); };
    img.src = dataUrl;
  });
}

// ═══ CLEAR HANDLERS ═══
function clearFileInput(id){
  const el = document.getElementById(id);
  if (el) el.value = '';
  // also clear status if bulk
  if (id === 'bulkExcel' || id === 'bulkZip'){
    const status = document.getElementById('bulkStatus');
    if (status) { status.textContent = ''; status.className = 'status'; }
  }
}

function clearImage(key){
  const labels = {logo:'logo', sign:'signature', photo:'photo'};
  if (!confirm('Remove uploaded ' + labels[key] + '?')) return;

  if (key === 'logo'){
    state.logo = '';
    clearFileInput('logoFile');
  } else if (key === 'sign'){
    state.sign = '';
    state._signRaw = '';
    clearFileInput('signFile');
  } else if (key === 'photo'){
    state.people[state.current].photo = '';
    clearFileInput('photoFile');
  }
  render();
}

function loadImg(ev, key){
  const file = ev.target.files[0]; if(!file) return;
  const r = new FileReader();
  r.onload = async e => {
    let result = e.target.result;
    if (key === 'sign'){
      state._signRaw = result;
      const th = state.signThreshold || parseInt(document.getElementById('signThreshold').value || '200');
      const inkMode = state.signInkMode || 'auto';
      const inkColors = {
        black: '#0a0a0a', navy: '#0d2248', blue: '#1e40af',
        custom: state.signInkCustom || '#0d2248'
      };
      const opts = {};
      if (inkMode !== 'auto') opts.inkColor = inkColors[inkMode] || null;
      try { result = await cleanSignatureBackground(result, th, opts); } catch(err){ console.error(err); }
    }
    if (key === 'photo') state.people[state.current].photo = result;
    else state[key] = result;
    render();
  };
  r.readAsDataURL(file);
}

async function onThresholdChange(val){
  document.getElementById('signThresholdVal').textContent = val;
  if (!state._signRaw) return;
  state.signThreshold = parseInt(val);
  await reapplySignClean();
}

// Re-clean signature from raw with current settings
async function reapplySignClean(){
  if (!state._signRaw) return;
  const th = state.signThreshold || 200;
  const inkMode = state.signInkMode || 'auto';
  const inkColors = {
    black: '#0a0a0a',
    navy:  '#0d2248',
    blue:  '#1e40af',
    custom: state.signInkCustom || '#0d2248'
  };
  const opts = {};
  if (inkMode !== 'auto') opts.inkColor = inkColors[inkMode] || null;
  try {
    state.sign = await cleanSignatureBackground(state._signRaw, th, opts);
    render();
  } catch(err){ console.error(err); }
}

// Sign Preset: one-click smart settings for different sign source types
async function applySignPreset(preset){
  if (!state._signRaw && preset !== 'original'){
    alert('Pehle signature upload karo, phir preset apply karo.');
    return;
  }
  if (preset === 'original'){
    // restore original (no cleaning)
    state.sign = state._signRaw || state.sign;
    render();
    return;
  }
  let th, inkMode;
  switch(preset){
    case 'auto':   th = 200; inkMode = 'auto'; break;
    case 'light':  th = 215; inkMode = 'auto'; break;   // clean white paper, keep original ink
    case 'grey':   th = 175; inkMode = 'navy'; break;   // grey/yellow paper → force navy ink
    case 'photo':  th = 160; inkMode = 'navy'; break;   // mobile camera photo → strong threshold + force ink
    case 'faded':  th = 230; inkMode = 'black'; break;  // faded sign → high threshold + force black
    default: th = 200; inkMode = 'auto';
  }
  state.signThreshold = th;
  state.signInkMode = inkMode;
  // sync UI
  const slider = document.getElementById('signThreshold');
  const sliderVal = document.getElementById('signThresholdVal');
  const modeSelect = document.getElementById('signInkMode');
  const customColor = document.getElementById('signInkCustom');
  if (slider){ slider.value = th; sliderVal.textContent = th; }
  if (modeSelect){ modeSelect.value = inkMode; }
  if (customColor){ customColor.style.display = (inkMode === 'custom') ? '' : 'none'; }
  await reapplySignClean();
}

async function onInkModeChange(mode){
  state.signInkMode = mode;
  document.getElementById('signInkCustom').style.display = (mode === 'custom') ? '' : 'none';
  await reapplySignClean();
}

async function onInkColorChange(color){
  state.signInkCustom = color;
  if (state.signInkMode === 'custom'){
    await reapplySignClean();
  }
}

function updateField(field, val){
  state.people[state.current][field] = val;
  if (field === 'name') renderTabs();
  render();
}
function updateGlobal(key, val){ state[key] = val; render(); }

function updateSize(stateKey, val, displayId, unit){
  const v = parseFloat(val);
  if (stateKey === 'signWidth' || stateKey === 'wmSize' || stateKey === 'wmBackSize' || stateKey === 'wmOpacity'){
    state[stateKey] = v;
  } else {
    state.fonts[stateKey] = v;
  }
  document.getElementById(displayId).textContent = v + unit;
  render();
}

function resetFonts(){
  state.fonts = Object.assign({}, DEFAULT_FONTS);
  syncFontInputs();
  render();
}

// ─── COLORS ───
function applyColorsToCSS(){
  const root = document.documentElement;
  const colors = state.colors || DEFAULT_COLORS;
  Object.keys(colors).forEach(k => root.style.setProperty(k, colors[k]));
}

function updateColor(varName, value){
  if (!state.colors) state.colors = Object.assign({}, DEFAULT_COLORS);
  state.colors[varName] = value;
  document.documentElement.style.setProperty(varName, value);
  render();  // also persist
}

function applyTheme(themeName){
  const theme = THEMES[themeName];
  if (!theme) return;
  state.colors = Object.assign({}, theme);
  applyColorsToCSS();
  syncColorInputs();
  render();
}

function resetColors(){
  state.colors = Object.assign({}, DEFAULT_COLORS);
  applyColorsToCSS();
  syncColorInputs();
  render();
}

function syncColorInputs(){
  const colors = state.colors || DEFAULT_COLORS;
  Object.keys(colors).forEach(k => {
    const el = document.getElementById('cVar_' + k.replace('--',''));
    if (el) el.value = colors[k];
  });
}

function syncFontInputs(){
  const f = state.fonts;
  Object.keys(DEFAULT_FONTS).forEach(k => {
    const el = document.getElementById(k);
    const dis = document.getElementById('v_' + k.substring(2));
    if (el) el.value = f[k];
    if (dis) dis.textContent = f[k] + 'px';
  });
}

function syncInputsToCurrent(){
  const p = state.people[state.current] || {};
  ['name','post','father','empId','dob','blood','contact','address'].forEach(k=>{
    const el = document.getElementById(k);
    if (el) el.value = p[k] || '';
  });
  ['oh1','oh2','dept','authLabel','signPost','hospName','hospName2','hospTagline','hospHindiLine','hospUnitName','hospUnitNum','hospUnitPhone','hospSignCaption'].forEach(k=>{
    const el = document.getElementById(k);
    if (el) el.value = state[k] || '';
  });
  // Hospital individual colors sync
  const hColors = [
    'hospColorName1','hospColorName2','hospColorSubtitle','hospColorDivider',
    'hospColorTagline','hospColorBorder','hospColorLabels','hospColorValues',
    'hospColorSignLabel','hospColorBannerBg','hospColorUnitName','hospColorUnitNum','hospColorUnitPhone'
  ];
  hColors.forEach(k => {
    const el = document.getElementById(k);
    if (el) el.value = state[k] || '';
  });
  // Hospital size sliders
  const hSliders = [
    {id:'hospLogoSize',       valId:'hospLogoSizeVal',       key:'hospLogoSize',       def:40,   unit:'px'},
    {id:'hospPhotoW',         valId:'hospPhotoWVal',         key:'hospPhotoW',         def:230,  unit:'px'},
    {id:'hospPhotoH',         valId:'hospPhotoHVal',         key:'hospPhotoH',         def:225,  unit:'px'},
    {id:'hospSignCaptionSize',valId:'hospSignCaptionSizeVal',key:'hospSignCaptionSize',def:9,    unit:'px'},
    {id:'hospSignW',          valId:'hospSignWVal',          key:'hospSignW',          def:120,  unit:'px'},
    {id:'hospBrandSize',      valId:'hospBrandSizeVal',      key:'hospBrandSize',      def:18,   unit:'px'},
    {id:'hospSubSize',        valId:'hospSubSizeVal',        key:'hospSubSize',        def:8.2,  unit:'px'},
    {id:'hospTaglineSize',    valId:'hospTaglineSizeVal',    key:'hospTaglineSize',    def:12,   unit:'px'},
    {id:'hospRowSize',        valId:'hospRowSizeVal',        key:'hospRowSize',        def:14,   unit:'px'}
  ];
  hSliders.forEach(s=>{
    const el = document.getElementById(s.id);
    const vl = document.getElementById(s.valId);
    const v = state[s.key] != null ? state[s.key] : s.def;
    if(el) el.value = v;
    if(vl) vl.textContent = v + s.unit;
  });
  // Hospital sign rotate button highlight
  const curRotate = state.hospSignRotate || 0;
  [0, 90, 180, 270].forEach(function(d){
    const el = document.getElementById('hospRot' + d);
    if (el) el.classList.toggle('active', d === curRotate);
  });
  // Hospital colors
  ['hospColor1','hospColor2','hospColor3'].forEach(k=>{
    const el = document.getElementById(k);
    if (el) el.value = state[k] || '';
  });
  document.getElementById('signSize').value = state.signWidth || 96;
  document.getElementById('signSizeVal').textContent = (state.signWidth||96) + 'px';
  // sign cleaning settings
  const signTh = state.signThreshold || 200;
  const sthEl = document.getElementById('signThreshold');
  if (sthEl){
    sthEl.value = signTh;
    document.getElementById('signThresholdVal').textContent = signTh;
  }
  const inkModeEl = document.getElementById('signInkMode');
  if (inkModeEl){
    inkModeEl.value = state.signInkMode || 'auto';
  }
  const inkCustomEl = document.getElementById('signInkCustom');
  if (inkCustomEl){
    inkCustomEl.value = state.signInkCustom || '#0d2248';
    inkCustomEl.style.display = (state.signInkMode === 'custom') ? '' : 'none';
  }
  // watermark
  const wms = state.wmSize || 160, wmbs = state.wmBackSize || 170, wmo = state.wmOpacity || 8;
  if (document.getElementById('wmSize')){
    document.getElementById('wmSize').value = wms;
    document.getElementById('wmSizeVal').textContent = wms + 'px';
    document.getElementById('wmBackSize').value = wmbs;
    document.getElementById('wmBackSizeVal').textContent = wmbs + 'px';
    document.getElementById('wmOpacity').value = wmo;
    document.getElementById('wmOpacityVal').textContent = wmo + '%';
  }
  document.querySelectorAll('.pos-cell').forEach(c => c.classList.remove('active'));
  const cell = document.querySelector('.pos-cell[data-pos="' + (state.signPosition||'center') + '"]');
  if (cell) cell.classList.add('active');
  syncFontInputs();
  syncColorInputs();
  applyColorsToCSS();
}

function addPerson(){
  const tmpl = state.people[state.current] || {};
  state.people.push({
    name: 'New Person', post: tmpl.post || 'Patwari',
    father: '', empId: '', dob: '', blood: '', contact: '',
    address: tmpl.address || '', photo: ''
  });
  state.current = state.people.length - 1;
  syncInputsToCurrent(); renderTabs(); render();
}
function removePerson(){
  if (state.people.length <= 1) return alert('At least 1 person required');
  state.people.splice(state.current, 1);
  state.current = Math.max(0, state.current - 1);
  syncInputsToCurrent(); renderTabs(); render();
}
function clearAll(){
  if (!confirm('Clear all people?')) return;
  state.people = [JSON.parse(JSON.stringify(DEFAULT_STATE.people[0]))];
  state.current = 0;
  syncInputsToCurrent(); renderTabs(); render();
}
function selectPerson(idx){
  state.current = idx;
  syncInputsToCurrent(); renderTabs(); render();
}
function renderTabs(){
  document.getElementById('peopleCount').textContent = state.people.length;
  document.getElementById('personTabs').innerHTML = state.people.map((p,i)=>
    '<button class="' + (i===state.current?'active':'') + '" onclick="selectPerson(' + i + ')">' + (i+1) + '. ' + escapeHtml((p.name||'?').substring(0,14)) + '</button>'
  ).join('');
}

document.querySelectorAll('.pos-cell').forEach(cell => {
  cell.addEventListener('click', () => {
    state.signPosition = cell.dataset.pos;
    document.querySelectorAll('.pos-cell').forEach(c => c.classList.remove('active'));
    cell.classList.add('active');
    render();
  });
});

function exportData(){
  const blob = new Blob([JSON.stringify(state,null,2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'id_card_data.json'; a.click();
  URL.revokeObjectURL(url);
}
function importData(ev){
  const file = ev.target.files[0]; if(!file) return;
  const r = new FileReader();
  r.onload = e => {
    try {
      const loaded = JSON.parse(e.target.result);
      state = Object.assign({}, DEFAULT_STATE, loaded);
      state.fonts = Object.assign({}, DEFAULT_FONTS, loaded.fonts || {});
  state.colors = Object.assign({}, DEFAULT_COLORS, loaded.colors || {});
  applyColorsToCSS();
      state.colors = Object.assign({}, DEFAULT_COLORS, loaded.colors || {});
      applyColorsToCSS();
      state.current = state.current || 0;
      syncInputsToCurrent(); renderTabs(); render();
    } catch(err){ alert('Invalid file'); }
  };
  r.readAsText(file);
}

// BULK IMPORT
async function readExcelRows(file){
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, {type:'array'});
  const ws = wb.Sheets[wb.SheetNames[0]];
  return XLSX.utils.sheet_to_json(ws, {defval:''});
}
async function readPhotosZip(file){
  if (!file) return {};
  const zip = await JSZip.loadAsync(file);
  const photos = {};
  for (const fname of Object.keys(zip.files)){
    const entry = zip.files[fname];
    if (entry.dir) continue;
    if (!/\.(jpe?g|png|webp)$/i.test(fname)) continue;
    const blob = await entry.async('blob');
    const dataUrl = await new Promise(res => {
      const r = new FileReader();
      r.onload = e => res(e.target.result);
      r.readAsDataURL(blob);
    });
    const base = fname.split('/').pop().replace(/\.(jpe?g|png|webp)$/i, '').trim();
    photos[base] = dataUrl;
  }
  return photos;
}
function findKey(obj, ...candidates){
  const keys = Object.keys(obj);
  for (const c of candidates){
    const found = keys.find(k => String(k).trim().toUpperCase() === c.trim().toUpperCase());
    if (found) return obj[found];
  }
  return '';
}
async function doBulkImport(){
  const status = document.getElementById('bulkStatus');
  const xlFile = document.getElementById('bulkExcel').files[0];
  const zipFile = document.getElementById('bulkZip').files[0];
  if (!xlFile){ status.textContent='⚠️ Excel file required'; status.className='status err'; return; }

  // Check libraries are loaded
  if (typeof XLSX === 'undefined'){
    status.textContent = '❌ Excel library not loaded. Connect to internet and refresh.';
    status.className = 'status err';
    return;
  }
  if (zipFile && typeof JSZip === 'undefined'){
    status.textContent = '❌ ZIP library not loaded. Connect to internet and refresh.';
    status.className = 'status err';
    return;
  }

  status.textContent='⏳ Processing…'; status.className='status';
  try {
    const [rows, photos] = await Promise.all([readExcelRows(xlFile), readPhotosZip(zipFile)]);
    const newPeople = []; let withPhoto = 0;
    for (const r of rows){
      const name = String(findKey(r,'NAME')||'').trim();
      if (!name) continue;
      const empIdRaw = findKey(r,'EMPLOYEE CODE','EMP ID','EMPLOYEE ID','ID');
      const empId = empIdRaw === '' ? '' : String(empIdRaw).replace(/\..*$/,'');
      const father = String(findKey(r,"FATHER'S NAME",'FATHER NAME','FATHERS NAME')||'').trim();
      const dob = String(findKey(r,'DOB','DOB (DD/MM/YYY)','DOB (DD/MM/YYYY)','DATE OF BIRTH')||'').trim();
      const post = String(findKey(r,'POST','POSITION','DESIGNATION','DESIG')||'').trim();
      const blood = String(findKey(r,'BLOOD GROUP','BLOOD')||'').trim();
      const contactRaw = findKey(r,'CONTACT NUMBER','CONTACT','MOBILE','PHONE');
      const contact = contactRaw === '' ? '' : String(contactRaw).replace(/\..*$/,'');
      const address = String(findKey(r,'OFFICE ADRESS','OFFICE ADDRESS','ADDRESS')||'').trim() || (state.people[0]?.address || '');
      const photo = photos[empId] || '';
      if (photo) withPhoto++;
      newPeople.push({name, post, father, empId, dob, blood, contact, address, photo});
    }
    if (!newPeople.length){
      const foundCols = rows.length > 0 ? Object.keys(rows[0]).join(', ') : 'koi column nahi mila';
      const tmpl = state.template || 'govt';
      const needed = tmpl === 'hospital'
        ? 'NAME, DESIGNATION, CONTACT, EMPLOYEE CODE'
        : 'NAME, POST, CONTACT NUMBER, EMPLOYEE CODE';
      status.textContent = '❌ Koi valid row nahi mila. '
        + 'Excel me mili columns: [' + foundCols + ']. '
        + 'Required: ' + needed;
      status.className='status err'; return;
    }
    state.people = newPeople;
    state.current = 0;
    syncInputsToCurrent(); renderTabs(); render();
    status.textContent = '✅ Import hua: ' + newPeople.length + ' log · ' + withPhoto + ' photos ke saath';
    status.className='status';
  } catch(err){
    status.textContent='❌ Error: ' + err.message;
    status.className='status err';
  }
}

// ─── Sample Excel download ───
function downloadSampleExcel(){
  const tmpl = state.template || 'govt';
  let rows, filename;
  if (tmpl === 'hospital'){
    rows = [
      ['NAME','DESIGNATION','CONTACT','EMPLOYEE CODE'],
      ['Dr. Rajesh Kumar','Chief Medical Officer','9977895556','H001'],
      ['Dr. Priya Sharma','Gynecologist','8800112233','H002'],
      ['Ramesh Gupta','Pharmacist','7712345678','H003'],
      ['Sunita Verma','Staff Nurse','9988776655','H004'],
    ];
    filename = 'hospital_bulk_sample.csv';
  } else {
    rows = [
      ['NAME',"FATHER'S NAME",'DOB','EMPLOYEE CODE','BLOOD GROUP','CONTACT NUMBER','OFFICE ADRESS','POST'],
      ['Rajat Kumar Verma','Ram Kumar Verma','01/01/1990','PAT001','A+','9977895556','Patwari Halka 01','Patwari'],
      ['Priya Sharma','Mohan Sharma','15/03/1988','PAT002','B+','8800112233','Patwari Halka 02','Patwari'],
    ];
    filename = 'govt_bulk_sample.csv';
  }
  // Build CSV string (handle commas in values with quotes)
  const csv = rows.map(r => r.map(cell => '"' + String(cell).replace(/"/g,'""') + '"').join(',')).join('\r\n');
  const blob = new Blob(['\ufeff' + csv], {type:'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  document.getElementById('bulkStatus').textContent = '✅ Sample file download ho rahi hai — isko Excel mein open karo aur apna data bharо';
  document.getElementById('bulkStatus').className = 'status';
}

function escapeHtml(s){
  return (s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ═══ KEY: Calculate name block height based on actual NAME font size + name length ═══
function getNameBlockSize(name, nameFontPx, postFontPx){
  // chars per line at this font size: roughly 184px / (font * 0.55)
  const cardInnerWidth = 188; // 204 - 16 padding
  const charWidth = nameFontPx * 0.55;
  const charsPerLine = Math.floor(cardInnerWidth / charWidth);
  const nameLines = Math.max(1, Math.ceil((name||'').length / charsPerLine));
  // Block height = name lines * (nameFontPx * 1.25) + post (postFontPx * 1.4) + gap 4
  const nameH = nameLines * Math.round(nameFontPx * 1.25);
  const postH = Math.round(postFontPx * 1.6);
  const totalH = nameH + postH + 6;  // gap+padding
  return Math.max(38, Math.min(totalH, 70));  // clamp 38-70
}

function renderPortrait(p){
  const f = state.fonts;
  const wmS = state.wmSize || 160;
  const wmBS = state.wmBackSize || 170;
  const wmO = (state.wmOpacity || 8) / 100;
  const wmStyle = 'width:' + wmS + 'px;height:' + wmS + 'px;opacity:' + wmO + ';';
  const wmBackStyle = 'width:' + wmBS + 'px;height:' + wmBS + 'px;opacity:' + wmO + ';';
  const nbH = getNameBlockSize(p.name, f.f_nm, f.f_po);
  const pwH = Math.max(60, 224 - nbH - 18 - 68 - 4);
  const photoInnerH = pwH - 8;
  const photoW = Math.floor(photoInnerH * 0.83);
  const sw = state.signWidth || 96;
  const sh = Math.round(sw * 0.31);
  const slW = Math.min(sw + 20, 180);
  const posClass = state.signPosition === 'left' ? 'left' : state.signPosition === 'right' ? 'right' : 'center';

  // Inline color values - resolved from state.colors directly so Chrome prints them reliably
  const c = state.colors || DEFAULT_COLORS;
  const cPrimary = c['--c-primary'];
  const cPrimaryDark = c['--c-primary-dark'];
  const cAccent = c['--c-accent'];
  const cStrip = c['--c-strip'];
  const cStripText = c['--c-strip-text'];
  const cHeaderText = c['--c-header-text'];
  const cPhotoBorder = c['--c-photo-border'];
  const cStripe1 = c['--c-stripe-1'];
  const cStripe2 = c['--c-stripe-2'];
  const cStripe3 = c['--c-stripe-3'];

  const fhBg = 'background:linear-gradient(135deg,' + cPrimary + ' 0%,' + cPrimaryDark + ' 100%);background-color:' + cPrimary + ';';
  const stripBg = 'background:' + cStrip + ';background-color:' + cStrip + ';color:' + cStripText + ';';
  const stripeBg = 'background:linear-gradient(90deg,' + cStripe1 + ' 33%,' + cStripe2 + ' 33% 66%,' + cStripe3 + ' 66%);background-color:' + cStripe1 + ';';
  const sbBg = 'background:linear-gradient(180deg,#eef2fa,#e4eaf6);background-color:#eef2fa;border-top-color:' + cPrimary + ';';
  const oh1Style = 'font-size:' + f.f_oh1 + 'px;color:' + cHeaderText + ';';
  const oh2Style = 'font-size:' + f.f_oh2 + 'px;';
  const poStyle = 'font-size:' + f.f_po + 'px;color:' + cPrimary + ';';
  const slStyle = 'width:' + slW + 'px;background:' + cPrimary + ';';
  const spStyle = 'font-size:' + f.f_sp + 'px;color:' + cPrimary + ';';
  const pbStyle = 'height:' + photoInnerH + 'px;width:' + photoW + 'px;border-color:' + cPhotoBorder + ';';
  const bloodStyle = 'font-size:' + f.f_bblood + 'px;background:' + cAccent + ';background-color:' + cAccent + ';color:#fff;';
  const btopStyle = 'background:' + cPrimary + ';background-color:' + cPrimary + ';';

  const front =
    '<div class="card-pair"><div class="card-label">Front — ' + escapeHtml(p.name||'') + '</div>' +
    '<div class="card portrait">' +
    (state.logo ? '<img class="wm" src="' + state.logo + '" style="' + wmStyle + '"/>' : '') +
    '<div class="fh" style="' + fhBg + '">' +
    (state.logo ? '<img class="logo" src="' + state.logo + '"/>' : '') +
    '<div class="oh1" style="' + oh1Style + '">' + escapeHtml(state.oh1) + '</div>' +
    '<div class="oh2" style="' + oh2Style + '">' + escapeHtml(state.oh2) + '</div>' +
    '</div>' +
    '<div class="strip" style="' + stripBg + '">पहचान पत्र · Identity Card</div>' +
    '<div class="pw" style="height:' + pwH + 'px;"><div class="pb" style="' + pbStyle + '">' +
    (p.photo ? '<img src="' + p.photo + '"/>' : '<span style="font-size:8px;color:#aaa">Photo</span>') +
    '</div></div>' +
    '<div class="nb" style="height:' + nbH + 'px;">' +
    '<div class="nm" style="font-size:' + f.f_nm + 'px;">' + escapeHtml(p.name||'') + '</div>' +
    '<div class="po" style="' + poStyle + '">' + escapeHtml(p.post||'') + '</div>' +
    '</div>' +
    '<div class="dr"><span class="dt" style="font-size:' + f.f_dt + 'px;">' + escapeHtml(state.dept) + '</span></div>' +
    '<div class="sb" style="' + sbBg + '"><div class="sb-inner ' + posClass + '">' +
    '<div class="al" style="font-size:' + f.f_al + 'px;">' + escapeHtml(state.authLabel) + '</div>' +
    (state.sign ? '<img class="si" src="' + state.sign + '" style="width:' + sw + 'px;height:' + sh + 'px;"/>' : '<div style="height:' + sh + 'px"></div>') +
    '<div class="sl" style="' + slStyle + '"></div>' +
    '<div class="sp" style="' + spStyle + '">' + escapeHtml(state.signPost) + '</div>' +
    '</div></div><div class="cs" style="' + stripeBg + '"></div></div></div>';

  const back =
    '<div class="card-pair"><div class="card-label">Back — ' + escapeHtml(p.name||'') + '</div>' +
    '<div class="bcard portrait">' +
    (state.logo ? '<img class="bwm" src="' + state.logo + '" style="' + wmBackStyle + '"/>' : '') +
    '<div class="btop" style="' + btopStyle + '"></div><div class="bb">' +
    '<div class="br"><span class="bl" style="font-size:' + f.f_bl + 'px;">Employee ID</span><span class="bv" style="font-size:' + f.f_bv + 'px;">' + escapeHtml(p.empId||'') + '</span></div>' +
    '<div class="br"><span class="bl" style="font-size:' + f.f_bl + 'px;">Father\'s Name</span><span class="bv bmd" style="font-size:' + f.f_bmd + 'px;">' + escapeHtml(p.father||'') + '</span></div>' +
    '<div class="br"><span class="bl" style="font-size:' + f.f_bl + 'px;">Date of Birth</span><span class="bv" style="font-size:' + f.f_bv + 'px;">' + escapeHtml(p.dob||'') + '</span></div>' +
    '<div class="br"><span class="bl" style="font-size:' + f.f_bl + 'px;">Blood Group</span><span class="bv bblood" style="' + bloodStyle + '">' + escapeHtml(p.blood||'') + '</span></div>' +
    '<div class="br"><span class="bl" style="font-size:' + f.f_bl + 'px;">Contact</span><span class="bv" style="font-size:' + f.f_bv + 'px;">' + escapeHtml(p.contact||'') + '</span></div>' +
    '<div class="br"><span class="bl" style="font-size:' + f.f_bl + 'px;">Office Address</span><span class="bv bsm" style="font-size:' + f.f_bsm + 'px;">' + escapeHtml(p.address||'').replace(/\n/g,'<br>') + '</span></div>' +
    '</div><div class="bbot" style="' + stripeBg + '"></div></div></div>';

  return front + back;
}

function renderLandscape(p){
  const f = state.fonts;
  const wmS = state.wmSize || 160;
  const wmBS = state.wmBackSize || 170;
  const wmO = (state.wmOpacity || 8) / 100;
  const wmStyle = 'width:' + wmS + 'px;height:' + wmS + 'px;opacity:' + wmO + ';';
  const wmBackStyle = 'width:' + wmBS + 'px;height:' + wmBS + 'px;opacity:' + wmO + ';';
  const sw = Math.min(state.signWidth || 78, 90);
  const sh = Math.round(sw * 0.31);
  const slW = Math.min(sw, 80);

  const c = state.colors || DEFAULT_COLORS;
  const cPrimary = c['--c-primary'];
  const cPrimaryDark = c['--c-primary-dark'];
  const cAccent = c['--c-accent'];
  const cStrip = c['--c-strip'];
  const cStripText = c['--c-strip-text'];
  const cHeaderText = c['--c-header-text'];
  const cPhotoBorder = c['--c-photo-border'];
  const cStripe1 = c['--c-stripe-1'];
  const cStripe2 = c['--c-stripe-2'];
  const cStripe3 = c['--c-stripe-3'];

  const fhBg = 'background:linear-gradient(135deg,' + cPrimary + ' 0%,' + cPrimaryDark + ' 100%);background-color:' + cPrimary + ';';
  const stripBg = 'background:' + cStrip + ';background-color:' + cStrip + ';color:' + cStripText + ';';
  const stripeBg = 'background:linear-gradient(90deg,' + cStripe1 + ' 33%,' + cStripe2 + ' 33% 66%,' + cStripe3 + ' 66%);background-color:' + cStripe1 + ';';
  const oh1Style = 'font-size:' + (f.f_oh1-3) + 'px;color:' + cHeaderText + ';';
  const poStyle = 'font-size:' + (f.f_po-1) + 'px;color:' + cPrimary + ';';
  const slStyle = 'width:' + slW + 'px;background:' + cPrimary + ';';
  const spStyle = 'font-size:' + (f.f_sp-2) + 'px;color:' + cPrimary + ';';
  const pbStyle = 'border-color:' + cPhotoBorder + ';';
  const bloodStyle = 'font-size:' + (f.f_bblood-5) + 'px;background:' + cAccent + ';background-color:' + cAccent + ';color:#fff;';
  const btopStyle = 'background:' + cPrimary + ';background-color:' + cPrimary + ';';

  const signColLeft =
    '<div class="sign-col left-pos">' +
    '<div class="al" style="font-size:' + (f.f_al-1) + 'px;">' + escapeHtml(state.authLabel) + '</div>' +
    (state.sign ? '<img class="si" src="' + state.sign + '" style="width:' + sw + 'px;height:' + sh + 'px;"/>' : '<div style="height:' + sh + 'px"></div>') +
    '<div class="sl" style="' + slStyle + '"></div>' +
    '<div class="sp" style="' + spStyle + '">' + escapeHtml(state.signPost) + '</div>' +
    '</div>';
  const signColRight =
    '<div class="sign-col">' +
    '<div class="al" style="font-size:' + (f.f_al-1) + 'px;">' + escapeHtml(state.authLabel) + '</div>' +
    (state.sign ? '<img class="si" src="' + state.sign + '" style="width:' + sw + 'px;height:' + sh + 'px;"/>' : '<div style="height:' + sh + 'px"></div>') +
    '<div class="sl" style="' + slStyle + '"></div>' +
    '<div class="sp" style="' + spStyle + '">' + escapeHtml(state.signPost) + '</div>' +
    '</div>';
  const photoCol = '<div class="photo-col"><div class="pb" style="' + pbStyle + '">' +
    (p.photo ? '<img src="' + p.photo + '"/>' : '<span style="font-size:7px;color:#aaa">Photo</span>') +
    '</div></div>';
  const infoCol = '<div class="info-col">' +
    '<div class="nm" style="font-size:' + (f.f_nm-1) + 'px;">' + escapeHtml(p.name||'') + '</div>' +
    '<div class="po" style="' + poStyle + '">' + escapeHtml(p.post||'') + '</div>' +
    '<div class="dt" style="font-size:' + f.f_dt + 'px;">' + escapeHtml(state.dept) + '</div>' +
    '</div>';

  const bodyContent = state.signPosition === 'left' ? signColLeft + photoCol + infoCol : photoCol + infoCol + signColRight;

  const front =
    '<div class="card-pair"><div class="card-label">Front — ' + escapeHtml(p.name||'') + '</div>' +
    '<div class="card landscape">' +
    (state.logo ? '<img class="wm" src="' + state.logo + '" style="' + wmStyle + '"/>' : '') +
    '<div class="fh" style="' + fhBg + '">' +
    (state.logo ? '<img class="logo" src="' + state.logo + '"/>' : '') +
    '<div class="header-text-l"><div class="oh1" style="' + oh1Style + '">' + escapeHtml(state.oh1) + '</div><div class="oh2" style="font-size:' + (f.f_oh2-1) + 'px;">' + escapeHtml(state.oh2) + '</div></div>' +
    '</div>' +
    '<div class="strip" style="' + stripBg + '">पहचान पत्र · Identity Card</div>' +
    '<div class="body-l">' + bodyContent + '</div>' +
    '<div class="cs" style="' + stripeBg + '"></div></div></div>';

  const back =
    '<div class="card-pair"><div class="card-label">Back — ' + escapeHtml(p.name||'') + '</div>' +
    '<div class="bcard landscape">' +
    (state.logo ? '<img class="bwm" src="' + state.logo + '" style="' + wmBackStyle + '"/>' : '') +
    '<div class="btop" style="' + btopStyle + '"></div><div class="bb">' +
    '<div class="br"><span class="bl" style="font-size:' + (f.f_bl-1) + 'px;">Employee ID</span><span class="bv" style="font-size:' + (f.f_bv-5) + 'px;">' + escapeHtml(p.empId||'') + '</span></div>' +
    '<div class="br"><span class="bl" style="font-size:' + (f.f_bl-1) + 'px;">Date of Birth</span><span class="bv" style="font-size:' + (f.f_bv-5) + 'px;">' + escapeHtml(p.dob||'') + '</span></div>' +
    '<div class="br"><span class="bl" style="font-size:' + (f.f_bl-1) + 'px;">Father\'s Name</span><span class="bv bmd" style="font-size:' + (f.f_bmd-3.5) + 'px;">' + escapeHtml(p.father||'') + '</span></div>' +
    '<div class="br"><span class="bl" style="font-size:' + (f.f_bl-1) + 'px;">Blood Group</span><span class="bv bblood" style="' + bloodStyle + '">' + escapeHtml(p.blood||'') + '</span></div>' +
    '<div class="br"><span class="bl" style="font-size:' + (f.f_bl-1) + 'px;">Contact</span><span class="bv" style="font-size:' + (f.f_bv-5) + 'px;">' + escapeHtml(p.contact||'') + '</span></div>' +
    '<div class="br"><span class="bl" style="font-size:' + (f.f_bl-1) + 'px;">Office Address</span><span class="bv bsm" style="font-size:' + (f.f_bsm-3) + 'px;">' + escapeHtml(p.address||'').replace(/\n/g,'<br>') + '</span></div>' +
    '</div><div class="bbot" style="' + stripeBg + '"></div></div></div>';

  return front + back;
}

function setPrintMode(mode){
  state.printMode = mode;
  document.querySelectorAll('.pmode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  document.body.classList.remove('pmode-pair', 'pmode-duplex', 'pmode-grid');
  document.body.classList.add('pmode-' + mode);
  applyPageSize();
  render();
  persist();
}

// ── Mobile panel toggle ──
function togglePanel(){
  document.body.classList.toggle('panel-open');
  const icon = document.getElementById('mobileToggleIcon');
  if (icon){
    icon.textContent = document.body.classList.contains('panel-open') ? '✕' : '☰';
  }
}

// Close panel when user taps backdrop (outside panel)
document.addEventListener('click', (e) => {
  if (!document.body.classList.contains('panel-open')) return;
  // only on mobile (panel is fixed)
  if (window.innerWidth > 900) return;
  const panel = document.getElementById('panel');
  const toggleBtn = document.querySelector('.mobile-toggle');
  if (!panel || !toggleBtn) return;
  if (panel.contains(e.target) || toggleBtn.contains(e.target)) return;
  togglePanel();
});

function setTemplate(tmpl){
  state.template = tmpl;
  document.querySelectorAll('.tmpl-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tmpl === tmpl);
  });
  // Show/hide template-specific sections
  const govtSections = document.querySelectorAll('[data-tmpl-only="govt"]');
  const hospSections = document.querySelectorAll('[data-tmpl-only="hospital"]');
  govtSections.forEach(s => s.style.display = (tmpl === 'govt') ? '' : 'none');
  hospSections.forEach(s => s.style.display = (tmpl === 'hospital') ? '' : 'none');

  // Switch body pmode class so hospital print grid overrides pmode-pair page breaks
  document.body.classList.remove('pmode-pair', 'pmode-duplex', 'pmode-grid', 'pmode-hospital');
  if (tmpl === 'hospital') {
    document.body.classList.add('pmode-hospital');
  } else {
    // Restore saved print mode for govt template
    document.body.classList.add('pmode-' + (state.printMode || 'pair'));
  }

  render();
  persist();
}

function updateHospSize(sliderId, value, valSpanId, unit){
  const numVal = parseFloat(value);
  const keyMap = {
    hospLogoSize:        'hospLogoSize',
    hospPhotoW:          'hospPhotoW',
    hospPhotoH:          'hospPhotoH',
    hospPhotoSize:       'hospPhotoSize',
    hospSignCaptionSize: 'hospSignCaptionSize',
    hospSignW:           'hospSignW',
    hospBrandSize:       'hospBrandSize',
    hospSubSize:         'hospSubSize',
    hospTaglineSize:     'hospTaglineSize',
    hospRowSize:         'hospRowSize'
  };
  const stateKey = keyMap[sliderId];
  if(stateKey) state[stateKey] = numVal;
  const valEl = document.getElementById(valSpanId);
  if(valEl) valEl.textContent = numVal + unit;
  render();
  persist();
}

// Hospital signature rotation (0 / 90 / 180 / 270 degrees)
function setHospSignRotate(deg){
  state.hospSignRotate = deg;
  [0, 90, 180, 270].forEach(function(d){
    const el = document.getElementById('hospRot' + d);
    if (el) el.classList.toggle('active', d === deg);
  });
  render();
  persist();
}


function renderHospital(p){
  // --- Individual element colors (granular control) ---
  const cName1      = state.hospColorName1    || '#1a8a92';  // Word 1
  const cName2      = state.hospColorName2    || '#163d5c';  // Word 2
  const cSubtitle   = state.hospColorSubtitle || '#444444';
  const cDivider    = state.hospColorDivider  || '#7a1a1a';
  const cTagline    = state.hospColorTagline  || '#222222';
  const cBorder     = state.hospColorBorder   || '#163d5c';
  const cLabels     = state.hospColorLabels   || '#163d5c';
  const cValues     = state.hospColorValues   || '#7a1a1a';
  const cSignLabel  = state.hospColorSignLabel|| '#222222';
  const cBannerBg   = state.hospColorBannerBg || '#163d5c';
  const cUnitName   = state.hospColorUnitName || '#1a8a92';
  const cUnitNum    = state.hospColorUnitNum  || '#163d5c';
  const cUnitPhone  = state.hospColorUnitPhone|| '#163d5c';

  // Photo dimensions from individual sliders
  const photoW = state.hospPhotoW || 230;
  const photoH = state.hospPhotoH || 225;
  const logoSize        = state.hospLogoSize        || 40;
  const signCaption     = state.hospSignCaption     || '';
  const signCaptionSize = state.hospSignCaptionSize || 9;
  const brandSize       = state.hospBrandSize       || 18;
  const subSize         = state.hospSubSize         || 8.2;
  const taglineSize     = state.hospTaglineSize     || 12;
  const rowSize         = state.hospRowSize         || 14;

  // Build inline-color style strings (works for print too)
  const brand1Style  = 'color:' + cName1    + ';font-size:' + brandSize + 'px;';
  const brand2Style  = 'color:' + cSubtitle + ';font-size:' + subSize + 'px;';
  const krishnaStyle = 'color:' + cName2    + ';';
  const dividerStyle = 'background:' + cDivider + ';';
  const taglineStyle = 'color:' + cTagline  + ';font-size:' + taglineSize + 'px;';
  const photoStyle   = 'border-color:' + cBorder + ';';
  const labelStyle   = 'color:' + cLabels   + ';';
  const colonStyle   = 'color:' + cLabels   + ';';
  const valueStyle   = 'color:' + cValues   + ';';
  const signLabelStyle = 'color:' + cSignLabel + ';';
  const banByteStyle   = 'background:' + cBannerBg + ';background-color:' + cBannerBg + ';';
  const unitNameStyle  = 'color:' + cUnitName  + ';';
  const unitNumStyle   = 'color:' + cUnitNum   + ';';
  const unitPhoneStyle = 'color:' + cUnitPhone + ';';
  const stripesStyle   = 'background:linear-gradient(180deg,' + cBannerBg + ' 0%,' + cUnitName + ' 100%);background-color:' + cBannerBg + ';';
  // Logo SVG uses cName2 (Word2 color) as primary and cName1 (Word1) as accent
  const c1 = cName2; const c2 = cName1;

  // Default brand split — "Radha" + "Krishna" but allow user-provided name
  const fullName = (state.hospName || 'RadhaKrishna').trim();
  // Try to split intelligently: if user wrote "RadhaKrishna" (camelCase) split there
  let brandPart1 = fullName, brandPart2 = '';
  const cap = fullName.match(/^([A-Z][a-z]+)([A-Z].*)$/);
  if (cap){
    brandPart1 = cap[1];
    brandPart2 = cap[2];
  }

  // Photo
  const photoHtml = p.photo
    ? '<img src="' + p.photo + '"/>'
    : '<span class="htmpl-ph">Upload photo</span>';

  // Logo (use uploaded logo if any, else default peacock SVG)
  const logoSizeStyle = 'width:' + logoSize + 'px;height:' + logoSize + 'px;';
  let logoHtml;
  if (state.logo){
    logoHtml = '<img class="htmpl-logo" src="' + state.logo + '" style="' + logoSizeStyle + '"/>';
  } else {
    logoHtml = '<svg class="htmpl-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="' + logoSizeStyle + '">' +
      '<rect x="14" y="38" width="72" height="22" rx="2" fill="' + c1 + '"/>' +
      '<rect x="38" y="14" width="22" height="72" rx="2" fill="' + c1 + '"/>' +
      '<path d="M50 55 C 45 50, 40 50, 40 45 C 40 41, 44 39, 47 41 C 49 42, 50 44, 50 44 C 50 44, 51 42, 53 41 C 56 39, 60 41, 60 45 C 60 50, 55 50, 50 55 Z" fill="#fff"/>' +
      '<path d="M48 16 Q 52 6, 60 4 Q 68 4, 70 8 Q 70 14, 64 18 Q 58 22, 52 18 Q 50 16, 48 16 Z" fill="' + c2 + '"/>' +
      '<ellipse cx="63" cy="11" rx="3.5" ry="2.5" fill="' + c1 + '"/>' +
      '<ellipse cx="63" cy="11" rx="1.5" ry="1" fill="#fff"/>' +
      '<path d="M48 16 Q 50 10, 55 6" stroke="' + c2 + '" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
      '</svg>';
  }

  // Signature — width + rotation controlled by sliders/buttons
  const signW = state.hospSignW || 120;
  const signRotate = state.hospSignRotate || 0;
  const signImgStyle = 'width:' + signW + 'px;height:auto;display:block;' +
    (signRotate ? 'transform:rotate(' + signRotate + 'deg);transform-origin:center center;' : '');
  const signHtml = state.sign
    ? '<img class="htmpl-sign-img" src="' + state.sign + '" style="' + signImgStyle + '"/>'
    : '<div class="htmpl-sign-line"></div>';

  // Field rows — auto-shrink font for long values so they stay on ONE line
  const rows = [
    {label:'NAME',        value:p.name    || ''},
    {label:'DESIGNATION', value:p.post    || ''},
    {label:'CONTACT',     value:p.contact || ''}
  ];
  // Label column width ("DESIGNATION" = 11 chars)
  const labelColW = Math.ceil(rowSize * 0.62 * 11) + 6;
  // Value column available width (card 340 - padding 44 - label - colon 14)
  const valueColW = 340 - 44 - labelColW - 14;
  const charW = 0.55;  // approx char width as fraction of font-size

  const rowsHtml = rows.map(r => {
    const vLen = (r.value || '').length;
    // Auto-reduce font size for long values to try keeping on 1 line.
    // But no ellipsis — full value ALWAYS shown (wrapping handled by fitHospitalCards scaling).
    let valFS = rowSize;
    if (vLen > 0) {
      const maxFS = Math.floor(valueColW / (vLen * charW));
      if (maxFS < rowSize) valFS = Math.max(8, maxFS);
    }
    const perValStyle = 'color:' + cValues + ';font-size:' + valFS + 'px;word-break:break-word;';
    return '<div class="htmpl-row" style="font-size:' + rowSize + 'px;grid-template-columns:' + labelColW + 'px 14px 1fr;">' +
      '<span class="htmpl-label" style="' + labelStyle + '">' + escapeHtml(r.label) + '</span>' +
      '<span class="htmpl-colon" style="' + colonStyle + '">:</span>' +
      '<span class="htmpl-value" style="' + perValStyle + '">' + escapeHtml(r.value) + '</span>' +
    '</div>';
  }).join('');

  return '<div class="card-pair"><div class="card-label">' + escapeHtml(p.name||'') + '</div>' +
    '<div class="htmpl">' +
      '<div class="htmpl-inner">' +
        '<div class="htmpl-padding">' +
          '<div class="htmpl-header">' + logoHtml +
            '<div class="htmpl-brand">' +
              '<div class="htmpl-brand-line1" style="' + brand1Style + '">' +
                escapeHtml(brandPart1) +
                (brandPart2 ? '<span style="' + krishnaStyle + '">' + escapeHtml(brandPart2) + '</span>' : '') +
              '</div>' +
              '<div class="htmpl-brand-line2" style="' + brand2Style + '">' + escapeHtml(state.hospName2 || '') + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="htmpl-divider" style="' + dividerStyle + '"></div>' +
          '<div class="htmpl-tagline" style="' + taglineStyle + '">' + escapeHtml(state.hospTagline || '') + '</div>' +
          '<div class="htmpl-photo-wrap">' +
            '<div class="htmpl-photo" style="' + photoStyle + 'width:' + photoW + 'px;height:' + photoH + 'px;">' + photoHtml + '</div>' +
          '</div>' +
          '<div class="htmpl-details">' + rowsHtml + '</div>' +
          '<div class="htmpl-sign-wrap">' +
            (signCaption ? '<div class="htmpl-sign-caption" style="font-size:' + signCaptionSize + 'px;color:' + c1 + ';font-weight:700;">' + escapeHtml(signCaption) + '</div>' : '') +
            signHtml +
            '<div class="htmpl-sign-label" style="' + signLabelStyle + '">Authorized Signature</div>' +
          '</div>' +
        '</div>' +
        '<div class="htmpl-footer">' +
          '<div class="htmpl-hindi-banner" style="' + banByteStyle + '">' + escapeHtml(state.hospHindiLine || '') + '</div>' +
          '<div class="htmpl-unit-block">' +
            '<div class="htmpl-unit-name" style="' + unitNameStyle + '">' + escapeHtml(state.hospUnitName || '') + '</div>' +
            '<div class="htmpl-unit-num" style="' + unitNumStyle + '">' + escapeHtml(state.hospUnitNum || '') + '</div>' +
            '<div class="htmpl-unit-phone" style="' + unitPhoneStyle + '">' + escapeHtml(state.hospUnitPhone || '') + '</div>' +
          '</div>' +
          '<div class="htmpl-stripes" style="' + stripesStyle + '"></div>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '</div>';
}

// ─── Scale-to-fit hospital cards ───
// Measures each .htmpl-inner natural height and applies CSS scale() so ALL
// content always fits within the fixed 340×540px card boundary.
// In print, zoom:0.6 then maps the 340×540 card to exact CR80 size (54×85.6mm).
function fitHospitalCards(){
  requestAnimationFrame(function(){
    document.querySelectorAll('.htmpl-inner').forEach(function(inner){
      // Step 1: Reset all transforms and temporarily collapse flex to measure natural height
      inner.style.transform = '';
      inner.style.transformOrigin = '';
      inner.style.marginBottom = '';
      inner.style.flex = 'none';
      inner.style.height = 'auto';

      var CARD_H = 540;
      var naturalH = inner.scrollHeight;

      if (naturalH > CARD_H) {
        // Content overflows — scale down proportionally so everything fits within 540px
        var scale = CARD_H / naturalH;
        inner.style.transform = 'scale(' + scale + ')';
        inner.style.transformOrigin = 'top center';
        // Transform doesn't affect layout flow — collapse extra space manually
        inner.style.marginBottom = ((naturalH - CARD_H) * -1) + 'px';
        // Keep flex:none + height:auto so scale works correctly
      } else {
        // Content fits — restore flex:1 so inner fills full 540px (footer at bottom)
        inner.style.flex = '1';
        inner.style.height = '';
      }
    });
  });
}

function render(){
  persist();
  const tmpl = state.template || 'govt';
  let fn;
  if (tmpl === 'hospital'){
    fn = renderHospital;
  } else {
    fn = state.orient === 'portrait' ? renderPortrait : renderLandscape;
  }
  const mode = state.printMode || 'pair';
  let html = '';

  // Hospital template = CR80 cards in a 3×3 grid per A4 page
  // Group people into pages of 9, rows of 3
  if (tmpl === 'hospital'){
    const COLS = 3;
    const PER_PAGE = 9; // 3 cols × 3 rows per A4
    const allCards = state.people.map(p => fn(p));
    let pages = [];
    for (let i = 0; i < allCards.length; i += PER_PAGE) {
      const pageCards = allCards.slice(i, i + PER_PAGE);
      let rows = [];
      for (let j = 0; j < pageCards.length; j += COLS) {
        rows.push('<div class="hosp-row">' + pageCards.slice(j, j + COLS).join('') + '</div>');
      }
      pages.push('<div class="hosp-page">' + rows.join('') + '</div>');
    }
    html = pages.join('');
    const sizeNote = '<div class="hosp-size-note" style="font-size:10px;color:#888;text-align:center;margin-top:6px;letter-spacing:0.5px;">🖨️ Print size: <b>CR80 — 54 × 85.6 mm</b> (standard ID card) &nbsp;|&nbsp; 9 cards per A4 page</div>';
    document.getElementById('preview').innerHTML = html + sizeNote;
    fitHospitalCards();   // scale content to always fit 340×540
    return;
  }

  if (mode === 'duplex'){
    // All FRONTs first, then all BACKs (so duplex printer flips correctly)
    const fronts = state.people.map(p => {
      const both = fn(p);
      // extract just the FRONT card-pair
      const m = both.match(/<div class="card-pair">[\s\S]*?<\/div><\/div>/);
      return m ? m[0].replace('<div class="card-pair">', '<div class="card-pair front-pair">') : '';
    });
    const backs = state.people.map(p => {
      const both = fn(p);
      // extract just the BACK card-pair (second occurrence)
      const matches = both.match(/<div class="card-pair">[\s\S]*?<\/div><\/div>/g);
      return matches && matches[1] ? matches[1].replace('<div class="card-pair">', '<div class="card-pair back-pair">') : '';
    });
    html = fronts.join('') + backs.join('');
  } else {
    // pair or grid mode — wrap each person's front+back in print-row
    html = state.people.map(p =>
      '<div class="print-row">' + fn(p) + '</div>'
    ).join('');
  }

  document.getElementById('preview').innerHTML = html;
}

syncInputsToCurrent();
renderTabs();
// Apply current print mode body class + button highlight
const initMode = state.printMode || 'pair';
const initTmpl = state.template || 'govt';
// For hospital template, use pmode-hospital body class (prevents pmode-pair page-break conflict)
if (initTmpl === 'hospital') {
  document.body.classList.add('pmode-hospital');
} else {
  document.body.classList.add('pmode-' + initMode);
}
document.querySelectorAll('.pmode-btn').forEach(btn => {
  btn.classList.toggle('active', btn.dataset.mode === initMode);
});
// Apply current template button state (and toggle template-only sections)
document.querySelectorAll('.tmpl-btn').forEach(btn => {
  btn.classList.toggle('active', btn.dataset.tmpl === initTmpl);
});
document.querySelectorAll('[data-tmpl-only="govt"]').forEach(s => s.style.display = (initTmpl === 'govt') ? '' : 'none');
document.querySelectorAll('[data-tmpl-only="hospital"]').forEach(s => s.style.display = (initTmpl === 'hospital') ? '' : 'none');
applyPageSize();
render();

// ════════════════════════════════════════════════════
// ENHANCED FEATURES: Profiles, Offline detection, Auto-backup
// ════════════════════════════════════════════════════

// ── 1. ONLINE/OFFLINE STATUS ──
function updateNetStatus(){
  const online = navigator.onLine;
  const dot = document.getElementById('netDot');
  const text = document.getElementById('netStatus');
  if (!dot || !text) return;
  if (online){
    dot.className = 'status-dot online';
    text.textContent = '🌐 Online';
  } else {
    dot.className = 'status-dot offline';
    text.textContent = '✈️ Offline (manual mode only)';
  }
}
window.addEventListener('online', updateNetStatus);
window.addEventListener('offline', updateNetStatus);
updateNetStatus();

// Check if libraries loaded
setTimeout(() => {
  const xlsxOk = typeof XLSX !== 'undefined';
  const zipOk = typeof JSZip !== 'undefined';
  if (!xlsxOk || !zipOk){
    const text = document.getElementById('netStatus');
    if (text && !navigator.onLine){
      text.textContent = '✈️ Offline · Bulk import disabled';
    } else if (text){
      text.textContent = '⚠️ Libraries loading…';
    }
  }
}, 1500);

// ── 2. STORAGE SIZE INDICATOR ──
function updateStorageStatus(){
  try {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++){
      const k = localStorage.key(i);
      total += (k.length + (localStorage.getItem(k) || '').length) * 2;
    }
    const kb = Math.round(total / 1024);
    const el = document.getElementById('storageStatus');
    if (el) el.textContent = '💾 ' + kb + ' KB saved';
  } catch(e){}
}
setInterval(updateStorageStatus, 5000);
updateStorageStatus();

// ── 3. AUTO-BACKUP — every 5 min download offered ──
let lastBackupTime = parseInt(localStorage.getItem('lastBackupTime') || '0');
function maybeOfferAutoBackup(){
  const now = Date.now();
  // Offer backup if 24 hours passed since last download
  if (now - lastBackupTime > 24 * 60 * 60 * 1000 && state.people.length > 1){
    const wantBackup = confirm('💾 Daily backup reminder\n\nIt has been a while since you last saved your data. Download a backup JSON now? (Recommended)');
    if (wantBackup){
      exportData();
      lastBackupTime = now;
      localStorage.setItem('lastBackupTime', String(now));
    } else {
      // postpone for 4 hours
      lastBackupTime = now - (20 * 60 * 60 * 1000);
      localStorage.setItem('lastBackupTime', String(lastBackupTime));
    }
  }
}
// Check on load if many people
setTimeout(maybeOfferAutoBackup, 3000);

// ── 4. PROFILES SYSTEM ──
const PROFILES_KEY = 'idCardProfiles';

function loadProfilesFromStorage(){
  try {
    return JSON.parse(localStorage.getItem(PROFILES_KEY) || '{}');
  } catch(e){ return {}; }
}

function saveProfilesToStorage(profiles){
  try {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
    return true;
  } catch(e){
    alert('⚠️ Storage limit reached. Try exporting profiles to JSON file.');
    return false;
  }
}

function refreshProfileSelect(){
  const sel = document.getElementById('profileSelect');
  if (!sel) return;
  const profiles = loadProfilesFromStorage();
  const names = Object.keys(profiles);
  sel.innerHTML = '<option value="">— Load a saved profile —</option>' +
    names.map(n => '<option value="' + escapeHtml(n) + '">' + escapeHtml(n) + ' (' + (profiles[n].people?.length || 0) + ' people)</option>').join('');
}

function saveProfile(){
  const nameEl = document.getElementById('profileName');
  const name = (nameEl?.value || '').trim();
  if (!name){ alert('Please enter a profile name'); return; }
  const profiles = loadProfilesFromStorage();
  if (profiles[name] && !confirm('Profile "' + name + '" exists. Overwrite?')) return;
  profiles[name] = JSON.parse(JSON.stringify(state));
  if (saveProfilesToStorage(profiles)){
    refreshProfileSelect();
    nameEl.value = '';
    alert('✅ Profile "' + name + '" saved successfully!');
  }
}

function loadProfile(name){
  if (!name) return;
  const profiles = loadProfilesFromStorage();
  if (!profiles[name]){ alert('Profile not found'); return; }
  if (!confirm('Load profile "' + name + '"? Current unsaved changes will be lost.')) return;
  const loaded = profiles[name];
  state = Object.assign({}, DEFAULT_STATE, loaded);
  state.fonts = Object.assign({}, DEFAULT_FONTS, loaded.fonts || {});
  state.colors = Object.assign({}, DEFAULT_COLORS, loaded.colors || {});
  applyColorsToCSS();
  state.current = 0;
  syncInputsToCurrent(); renderTabs(); render();
}

function deleteProfile(){
  const sel = document.getElementById('profileSelect');
  const name = sel?.value;
  if (!name){ alert('Select a profile first'); return; }
  if (!confirm('Delete profile "' + name + '"? This cannot be undone.')) return;
  const profiles = loadProfilesFromStorage();
  delete profiles[name];
  saveProfilesToStorage(profiles);
  refreshProfileSelect();
  sel.value = '';
}

function exportAllProfiles(){
  const profiles = loadProfilesFromStorage();
  if (!Object.keys(profiles).length){ alert('No profiles to export'); return; }
  const blob = new Blob([JSON.stringify(profiles, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const date = new Date().toISOString().split('T')[0];
  a.href = url; a.download = 'idcard_profiles_' + date + '.json'; a.click();
  URL.revokeObjectURL(url);
}

function importProfiles(ev){
  const file = ev.target.files[0]; if (!file) return;
  const r = new FileReader();
  r.onload = e => {
    try {
      const incoming = JSON.parse(e.target.result);
      if (typeof incoming !== 'object' || Array.isArray(incoming)){
        alert('Invalid profiles file format');
        return;
      }
      const existing = loadProfilesFromStorage();
      let added = 0, skipped = 0;
      for (const name in incoming){
        if (existing[name]){
          if (!confirm('Profile "' + name + '" exists. Overwrite?')){
            skipped++;
            continue;
          }
        }
        existing[name] = incoming[name];
        added++;
      }
      saveProfilesToStorage(existing);
      refreshProfileSelect();
      alert('✅ Imported ' + added + ' profiles. Skipped ' + skipped + '.');
    } catch(err){ alert('Invalid file: ' + err.message); }
  };
  r.readAsText(file);
}

refreshProfileSelect();