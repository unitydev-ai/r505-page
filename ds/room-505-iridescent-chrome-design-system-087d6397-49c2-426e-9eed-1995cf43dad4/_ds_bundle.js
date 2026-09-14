/* @ds-bundle: {"format":4,"namespace":"Room505IridescentChromeDesignSystem_087d63","components":[{"name":"ChromeHeading","sourcePath":"components/brand/ChromeHeading.jsx"},{"name":"GrainOverlay","sourcePath":"components/brand/GrainOverlay.jsx"},{"name":"LiquidBlob","sourcePath":"components/brand/LiquidBlob.jsx"},{"name":"NeonGrid","sourcePath":"components/brand/NeonGrid.jsx"},{"name":"SlashLabel","sourcePath":"components/brand/SlashLabel.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/ChromeHeading.jsx":"dc4450c6678c","components/brand/GrainOverlay.jsx":"da3bb185c9c1","components/brand/LiquidBlob.jsx":"e1b940ef611d","components/brand/NeonGrid.jsx":"769c8e1dd6d0","components/brand/SlashLabel.jsx":"c279ac79b31f","components/core/Badge.jsx":"291a09c916d5","components/core/Button.jsx":"ed2264c3a527","components/core/Card.jsx":"19db9b9485aa","components/core/Icon.jsx":"54f13bc34554","components/core/IconButton.jsx":"928037bc5927","components/core/Tag.jsx":"571eb9735b0a","components/feedback/Dialog.jsx":"470d9f8a7a9f","components/feedback/Toast.jsx":"d08e110f2a32","components/feedback/Tooltip.jsx":"446391d8bbba","components/forms/Checkbox.jsx":"202e56e4fe7a","components/forms/Input.jsx":"9cddfebe49ea","components/forms/Radio.jsx":"d80c03fd0828","components/forms/Select.jsx":"57d26b5c0851","components/forms/Switch.jsx":"323ce155fb80","components/navigation/Navbar.jsx":"316c314083d5","components/navigation/Tabs.jsx":"b02ac3f0656d","ui_kits/studio_archive/ArchiveApp.jsx":"72d787fc69ed","ui_kits/studio_archive/Cards.jsx":"67e2fc914fb3","ui_kits/studio_archive/Intro.jsx":"305181ea9e6e","ui_kits/studio_archive/Timeline.jsx":"53809c82b4df","ui_kits/studio_archive/data.js":"5b3018b48f57","ui_kits/studio_archive_v1/ArchiveAppV1.jsx":"6e915631652f","ui_kits/studio_archive_v1/CardsV1.jsx":"67e2fc914fb3","ui_kits/studio_archive_v1/IntroV1.jsx":"305181ea9e6e","ui_kits/studio_archive_v1/TimelineV1.jsx":"53809c82b4df","ui_kits/studio_archive_v1/data.js":"5b3018b48f57","ui_kits/studio_archive_v2/ArchiveAppV2.jsx":"19a6b2274d6f","ui_kits/studio_archive_v2/IntroV2.jsx":"54e5fd517c05","ui_kits/studio_archive_v2/YearBlockV2.jsx":"c2e48943ccad","ui_kits/studio_archive_v2_m2/ArchiveAppV2m2.jsx":"5222f9322cd4","ui_kits/studio_archive_v2_m2/IntroV2m2.jsx":"797997a91002","ui_kits/studio_archive_v2_m2/YearBlockV2m2.jsx":"8095bf3f6f91","ui_kits/studio_site/Contact.jsx":"3203c0a0b0b7","ui_kits/studio_site/Footer.jsx":"20fa3fe1df97","ui_kits/studio_site/Home.jsx":"ee4d7bc17983","ui_kits/studio_site/StudioSiteApp.jsx":"bd9c7b6b3375","ui_kits/studio_site/WorkDetail.jsx":"889ac67ad99e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Room505IridescentChromeDesignSystem_087d63 = window.Room505IridescentChromeDesignSystem_087d63 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ChromeHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChromeHeading({
  as = 'h1',
  size = 'display',
  spectrum = 'cool',
  sheen = true,
  glow = true,
  children,
  style = {},
  ...rest
}) {
  const Tag = as;
  const fs = {
    hero: 'var(--fs-hero)',
    display: 'var(--fs-display)',
    md: 'var(--fs-h1)',
    sm: 'var(--fs-h2)'
  }[size];
  const fill = spectrum === 'warm' ? 'linear-gradient(180deg,#fff 0%,#ffe6c8 12%,var(--spectrum-gold) 28%,#fff 50%,#ffb9de 60%,var(--spectrum-pink) 76%,var(--spectrum-amber) 92%,#7a3320 100%)' : 'var(--grad-chrome)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      position: 'relative',
      display: 'inline-block',
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--font-display-stretch)',
      fontWeight: 900,
      fontSize: fs,
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-hero)',
      textTransform: 'uppercase',
      background: fill,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      WebkitTextStroke: '0.6px rgba(255,255,255,.25)',
      filter: glow ? 'drop-shadow(0 0 34px color-mix(in oklab,var(--spectrum-indigo) 48%,transparent)) drop-shadow(0 0 90px color-mix(in oklab,var(--spectrum-cyan) 18%,transparent))' : 'none',
      ...style
    }
  }, rest), children, sheen && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-sheen)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      mixBlendMode: 'screen',
      pointerEvents: 'none'
    }
  }, children));
}
Object.assign(__ds_scope, { ChromeHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ChromeHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/GrainOverlay.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GrainOverlay({
  intensity = 'ui',
  scanlines = false,
  grainSrc = '../../assets/grain.png',
  style = {},
  ...rest
}) {
  const op = {
    ui: .05,
    poster: .09,
    heavy: .14
  }[intensity];
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 50,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + grainSrc + ')',
      backgroundSize: '180px',
      opacity: op,
      mixBlendMode: 'overlay'
    }
  }), scanlines && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(180deg,rgba(255,255,255,.5) 0 1px,rgba(255,255,255,0) 1px 3px)',
      opacity: 'var(--scanline-opacity)'
    }
  }));
}
Object.assign(__ds_scope, { GrainOverlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GrainOverlay.jsx", error: String((e && e.message) || e) }); }

// components/brand/LiquidBlob.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LiquidBlob({
  size = 320,
  shape = 'drop',
  spectrum = 'cool',
  drift = true,
  style = {},
  ...rest
}) {
  const radius = shape === 'ribbon' ? '62% 38% 70% 30%/38% 62% 38% 62%' : shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-blob)';
  const warm = spectrum === 'warm';
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: '0 0 auto',
      borderRadius: radius,
      background: warm ? 'radial-gradient(120% 90% at 28% 18%,#fff 0%,rgba(255,255,255,0) 34%),conic-gradient(from 210deg at 55% 45%,var(--spectrum-gold) 0deg,var(--spectrum-amber) 70deg,var(--spectrum-pink) 150deg,var(--spectrum-indigo) 250deg,var(--spectrum-gold) 360deg)' : 'radial-gradient(120% 90% at 26% 16%,#fff 0%,rgba(255,255,255,0) 32%),conic-gradient(from 195deg at 52% 48%,var(--spectrum-cyan) 0deg,#7fb2ff 65deg,var(--spectrum-indigo) 145deg,var(--spectrum-magenta) 225deg,var(--spectrum-pink) 290deg,var(--spectrum-cyan) 360deg)',
      boxShadow: 'inset -14px -22px 44px rgba(10,7,20,.55),inset 12px 14px 32px rgba(255,255,255,.35),0 0 90px -10px color-mix(in oklab,var(--spectrum-indigo) 55%,transparent)',
      animation: drift ? 'ic-blob-drift var(--dur-drift) var(--ease-in-out) infinite alternate' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      background: 'linear-gradient(115deg,rgba(255,255,255,0) 34%,rgba(255,255,255,.55) 46%,rgba(255,255,255,0) 56%)',
      mixBlendMode: 'screen'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      background: 'radial-gradient(60% 40% at 72% 82%,rgba(255,255,255,.4) 0%,rgba(255,255,255,0) 70%)',
      mixBlendMode: 'screen'
    }
  }), /*#__PURE__*/React.createElement("style", null, '@keyframes ic-blob-drift{0%{border-radius:' + radius + ';transform:rotate(0deg) translateY(0)}100%{border-radius:52% 48% 56% 44%/44% 56% 44% 56%;transform:rotate(8deg) translateY(-10px)}}'));
}
Object.assign(__ds_scope, { LiquidBlob });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LiquidBlob.jsx", error: String((e && e.message) || e) }); }

// components/brand/NeonGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NeonGrid({
  height = 280,
  hue = 'var(--spectrum-pink)',
  horizonGlow = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height,
      overflow: 'hidden',
      pointerEvents: 'none',
      maskImage: 'linear-gradient(0deg,#000 20%,transparent 100%)',
      WebkitMaskImage: 'linear-gradient(0deg,#000 20%,transparent 100%)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-50%',
      right: '-50%',
      bottom: 0,
      height: height * 1.6,
      transform: 'perspective(340px) rotateX(72deg)',
      transformOrigin: 'bottom center',
      backgroundImage: 'linear-gradient(90deg,' + hue + ' 1px,transparent 1px),linear-gradient(0deg,' + hue + ' 1px,transparent 1px)',
      backgroundSize: '56px 44px',
      opacity: .42
    }
  }), horizonGlow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: height * 0.86,
      height: 2,
      background: hue,
      boxShadow: '0 0 40px 8px ' + hue,
      opacity: .7
    }
  }));
}
Object.assign(__ds_scope, { NeonGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/NeonGrid.jsx", error: String((e && e.message) || e) }); }

// components/brand/SlashLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SlashLabel({
  closed = true,
  tone = 'muted',
  size = 'sm',
  children,
  style = {},
  ...rest
}) {
  const c = {
    muted: 'var(--text-muted)',
    secondary: 'var(--text-secondary)',
    cyan: 'var(--spectrum-cyan)',
    bright: 'var(--lav-050)'
  }[tone];
  const fs = size === 'md' ? 'var(--fs-caption)' : 'var(--fs-label)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: c,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), '/', children, closed ? '/' : '');
}
Object.assign(__ds_scope, { SlashLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SlashLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  spectrum: {
    background: 'var(--grad-spectrum)',
    color: 'var(--ink-900)',
    border: '1px solid rgba(255,255,255,.3)'
  },
  cyan: {
    background: 'color-mix(in oklab,var(--spectrum-cyan) 16%,transparent)',
    color: 'var(--spectrum-cyan)',
    border: '1px solid color-mix(in oklab,var(--spectrum-cyan) 38%,transparent)'
  },
  indigo: {
    background: 'color-mix(in oklab,var(--spectrum-indigo) 18%,transparent)',
    color: '#b9a7ff',
    border: '1px solid color-mix(in oklab,var(--spectrum-indigo) 42%,transparent)'
  },
  magenta: {
    background: 'color-mix(in oklab,var(--spectrum-magenta) 16%,transparent)',
    color: '#ff8cc4',
    border: '1px solid color-mix(in oklab,var(--spectrum-magenta) 40%,transparent)'
  },
  neutral: {
    background: 'var(--surface-glass)',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-soft)'
  },
  success: {
    background: 'color-mix(in oklab,var(--success) 14%,transparent)',
    color: 'var(--success)',
    border: '1px solid color-mix(in oklab,var(--success) 38%,transparent)'
  },
  danger: {
    background: 'color-mix(in oklab,var(--danger) 14%,transparent)',
    color: 'var(--danger)',
    border: '1px solid color-mix(in oklab,var(--danger) 38%,transparent)'
  }
};
function Badge({
  tone = 'neutral',
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...TONE[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  glow = 'none',
  interactive = false,
  padding = 'var(--space-6)',
  children,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const G = {
    none: 'none',
    cyan: 'var(--glow-cyan)',
    indigo: 'var(--glow-indigo)',
    magenta: 'var(--glow-magenta)'
  }[glow];
  const lift = interactive && h;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      padding,
      borderRadius: 'var(--radius-lg)',
      background: 'linear-gradient(160deg,rgba(255,255,255,.07) 0%,rgba(255,255,255,.02) 42%,rgba(255,255,255,0) 100%),var(--ink-800)',
      border: '1px solid ' + (lift ? 'var(--border-soft)' : 'var(--border-hairline)'),
      boxShadow: (lift ? 'var(--shadow-3),' : 'var(--shadow-2),') + (G === 'none' ? 'var(--shadow-inset-top)' : G + ',var(--shadow-inset-top)'),
      transform: lift ? 'translateY(-3px)' : 'none',
      transition: 'var(--t-hover)',
      overflow: 'hidden',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = 'https://unpkg.com/lucide@0.441.0/dist/umd/lucide.min.js';
let loading = null;
function loadLucide() {
  if (window.lucide && window.lucide.icons) return Promise.resolve(window.lucide);
  if (!loading) loading = new Promise(res => {
    const s = document.createElement('script');
    s.src = SRC;
    s.async = true;
    s.onload = () => res(window.lucide);
    s.onerror = () => res(null);
    document.head.appendChild(s);
  });
  return loading;
}
const pascal = n => String(n).split(/[-_\s]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
function Icon({
  name = 'sparkles',
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style = {},
  ...rest
}) {
  const [lib, setLib] = React.useState(window.lucide && window.lucide.icons ? window.lucide : null);
  React.useEffect(() => {
    if (!lib) loadLucide().then(l => {
      if (l) setLib(l);
    });
  }, [lib]);
  const node = lib && lib.icons && (lib.icons[pascal(name)] || lib.icons[name]);
  const box = {
    display: 'inline-block',
    width: size,
    height: size,
    flex: '0 0 auto',
    color,
    ...style
  };
  if (!node) return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: box
  });
  const children = (node[0] === 'svg' ? node[2] : node).filter(c => Array.isArray(c));
  return /*#__PURE__*/React.createElement("svg", _extends({
    "aria-hidden": "true",
    role: "img",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: box
  }, rest), children.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '0 14px',
    height: 34,
    fontSize: 'var(--fs-caption)',
    gap: 6,
    icon: 16
  },
  md: {
    padding: '0 20px',
    height: 44,
    fontSize: 'var(--fs-body-sm)',
    gap: 8,
    icon: 18
  },
  lg: {
    padding: '0 28px',
    height: 54,
    fontSize: 'var(--fs-body-lg)',
    gap: 10,
    icon: 20
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [p, setP] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const V = {
    primary: {
      background: 'var(--grad-accent)',
      color: 'var(--lav-050)',
      border: '1px solid color-mix(in oklab,var(--accent-300) 45%,transparent)',
      boxShadow: h ? 'var(--glow-accent),var(--shadow-inset-bevel)' : 'var(--shadow-2),var(--shadow-inset-bevel)'
    },
    chrome: {
      background: 'var(--grad-spectrum)',
      color: 'var(--ink-900)',
      border: '1px solid rgba(255,255,255,.35)',
      boxShadow: h ? 'var(--glow-magenta),var(--shadow-inset-bevel)' : 'var(--shadow-2),var(--shadow-inset-bevel)',
      fontWeight: 'var(--fw-bold)'
    },
    secondary: {
      background: h ? 'var(--surface-glass-strong)' : 'var(--surface-glass)',
      color: 'var(--text-primary)',
      border: '1px solid ' + (h ? 'var(--border-strong)' : 'var(--border-soft)'),
      boxShadow: 'var(--shadow-inset-top)'
    },
    ghost: {
      background: h ? 'rgba(244,240,255,.06)' : 'transparent',
      color: h ? 'var(--text-primary)' : 'var(--text-secondary)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-body)',
      fontSize: s.fontSize,
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .38 : 1,
      transform: p ? 'translateY(1px) scale(.985)' : 'none',
      transition: 'var(--t-hover)',
      position: 'relative',
      ...V,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const S = {
  sm: {
    box: 32,
    icon: 16
  },
  md: {
    box: 40,
    icon: 20
  },
  lg: {
    box: 48,
    icon: 22
  }
};
function IconButton({
  icon = 'x',
  size = 'md',
  variant = 'secondary',
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const s = S[size] || S.md;
  const V = {
    secondary: {
      background: h ? 'var(--surface-glass-strong)' : 'var(--surface-glass)',
      border: '1px solid ' + (h ? 'var(--border-strong)' : 'var(--border-soft)'),
      color: 'var(--text-primary)'
    },
    ghost: {
      background: h ? 'rgba(244,240,255,.06)' : 'transparent',
      border: '1px solid transparent',
      color: h ? 'var(--text-primary)' : 'var(--text-secondary)'
    },
    primary: {
      background: 'var(--grad-accent)',
      border: '1px solid color-mix(in oklab,var(--accent-300) 45%,transparent)',
      color: 'var(--lav-050)',
      boxShadow: h ? 'var(--glow-accent)' : 'var(--shadow-2)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label || icon,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .38 : 1,
      transition: 'var(--t-hover)',
      ...V,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  active = false,
  onRemove,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 30,
      padding: onRemove ? '0 8px 0 14px' : '0 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      color: active ? 'var(--lav-050)' : 'var(--text-secondary)',
      background: active ? 'color-mix(in oklab,var(--accent-500) 30%,transparent)' : h ? 'var(--surface-glass-strong)' : 'var(--surface-glass)',
      border: '1px solid ' + (active ? 'var(--border-accent)' : 'var(--border-hairline)'),
      transition: 'var(--t-hover)',
      cursor: rest.onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  onClose,
  eyebrow,
  title,
  children,
  footer,
  width = 520,
  style = {},
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-5)',
      background: 'color-mix(in oklab,var(--bg-sunken) 76%,transparent)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      padding: 'var(--space-6)',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(160deg,rgba(255,255,255,.08) 0%,rgba(255,255,255,.02) 45%,rgba(255,255,255,0) 100%),var(--ink-800)',
      border: '1px solid var(--border-soft)',
      boxShadow: 'var(--shadow-3),var(--glow-indigo),var(--shadow-inset-top)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.SlashLabel, {
    tone: "cyan"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--font-display-stretch)',
      fontWeight: 900,
      fontSize: 'var(--fs-h3)',
      letterSpacing: 'var(--ls-heading)',
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      color: 'var(--text-secondary)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    hue: 'var(--spectrum-cyan)',
    icon: 'info'
  },
  success: {
    hue: 'var(--success)',
    icon: 'circle-check'
  },
  warning: {
    hue: 'var(--warning)',
    icon: 'triangle-alert'
  },
  danger: {
    hue: 'var(--danger)',
    icon: 'octagon-alert'
  }
};
function Toast({
  tone = 'info',
  title,
  children,
  onClose,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      width: '100%',
      maxWidth: 420,
      padding: '14px 14px 14px 16px',
      borderRadius: 'var(--radius-md)',
      background: 'linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,0)),var(--ink-800)',
      border: '1px solid var(--border-soft)',
      boxShadow: 'var(--shadow-3),0 0 30px -12px ' + t.hue,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18,
    color: t.hue,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-primary)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-secondary)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  content,
  placement = 'top',
  children,
  style = {},
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : placement === 'left' ? {
    right: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : placement === 'right' ? {
    left: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  const centre = placement === 'top' || placement === 'bottom' ? {
    left: '50%',
    transform: 'translateX(-50%)'
  } : {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 60,
      whiteSpace: 'nowrap',
      padding: '7px 11px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--ink-700)',
      border: '1px solid var(--border-soft)',
      boxShadow: 'var(--shadow-2)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      pointerEvents: 'none',
      ...pos,
      ...centre
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-primary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--grad-accent)' : 'rgba(255,255,255,.03)',
      border: '1px solid ' + (checked ? 'color-mix(in oklab,var(--accent-300) 55%,transparent)' : 'var(--border-soft)'),
      boxShadow: checked ? 'var(--glow-accent)' : 'var(--shadow-inset-top)',
      transition: 'var(--t-hover)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--lav-050)"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  multiline = false,
  rows = 4,
  style = {},
  ...rest
}) {
  const [foc, setFoc] = React.useState(false);
  const border = error ? 'var(--danger)' : foc ? 'var(--border-accent)' : 'var(--border-soft)';
  const shell = {
    width: '100%',
    background: 'rgba(255,255,255,.03)',
    border: '1px solid ' + border,
    borderRadius: multiline ? 'var(--radius-md)' : 'var(--radius-pill)',
    boxShadow: foc ? '0 0 0 3px color-mix(in oklab,var(--accent-500) 22%,transparent)' : 'var(--shadow-inset-top)',
    transition: 'var(--t-hover)',
    display: 'flex',
    alignItems: multiline ? 'flex-start' : 'center',
    gap: 10,
    padding: multiline ? '14px 18px' : '0 18px',
    height: multiline ? 'auto' : 48
  };
  const field = {
    flex: 1,
    minWidth: 0,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-body-sm)',
    lineHeight: multiline ? 'var(--lh-body)' : 'normal',
    resize: 'vertical',
    padding: 0
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      minWidth: 0,
      maxWidth: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SlashLabel, {
    tone: "secondary"
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: shell
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--text-muted)"
  }), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false),
    style: field
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false),
    style: field
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-primary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,.03)',
      border: '1px solid ' + (checked ? 'color-mix(in oklab,var(--accent-300) 60%,transparent)' : 'var(--border-soft)'),
      boxShadow: checked ? 'var(--glow-accent)' : 'var(--shadow-inset-top)',
      transition: 'var(--t-hover)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--grad-spectrum)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  hint,
  style = {},
  ...rest
}) {
  const [foc, setFoc] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      minWidth: 0,
      maxWidth: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SlashLabel, {
    tone: "secondary"
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 48,
      padding: '0 18px',
      background: 'rgba(255,255,255,.03)',
      border: '1px solid ' + (foc ? 'var(--border-accent)' : 'var(--border-soft)'),
      borderRadius: 'var(--radius-pill)',
      boxShadow: foc ? '0 0 0 3px color-mix(in oklab,var(--accent-500) 22%,transparent)' : 'var(--shadow-inset-top)',
      transition: 'var(--t-hover)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      style: {
        background: 'var(--ink-800)',
        color: 'var(--text-primary)'
      }
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--text-muted)"
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 8,
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-primary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 46,
      height: 26,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--grad-spectrum)' : 'rgba(255,255,255,.06)',
      border: '1px solid ' + (checked ? 'rgba(255,255,255,.3)' : 'var(--border-soft)'),
      boxShadow: checked ? 'var(--glow-indigo)' : 'inset 0 1px 3px rgba(0,0,0,.5)',
      transition: 'var(--t-hover)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 22 : 2,
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: 'linear-gradient(180deg,#fff,#cfc8e8)',
      boxShadow: '0 2px 6px rgba(0,0,0,.45)',
      transition: 'left var(--dur-fast) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Navbar({
  logoSrc,
  brand = 'Room 505',
  items = [],
  active,
  onNavigate,
  cta = 'Book the room',
  onCta,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      height: 76,
      padding: '0 var(--gutter)',
      background: 'color-mix(in oklab,var(--ink-900) 72%,transparent)',
      backdropFilter: 'blur(var(--blur-nav))',
      WebkitBackdropFilter: 'blur(var(--blur-nav))',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0] && (items[0].value || items[0]));
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: brand,
    style: {
      height: 30,
      width: 'auto',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--font-display-stretch)',
      fontWeight: 900,
      fontSize: 'var(--fs-h4)',
      letterSpacing: '-.01em',
      textTransform: 'uppercase',
      background: 'var(--grad-spectrum)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, brand)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    }
  }, items.map(it => {
    const v = it.value || it,
      l = it.label || it;
    const on = v === active;
    return /*#__PURE__*/React.createElement("a", {
      key: v,
      href: '#' + v,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(v);
      },
      style: {
        textDecoration: 'none',
        opacity: on ? 1 : .72,
        transition: 'var(--t-hover)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.SlashLabel, {
      tone: on ? 'bright' : 'secondary'
    }, l));
  })), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  const active = value ?? (typeof items[0] === 'string' ? items[0] : items[0] && items[0].value);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'rgba(255,255,255,.03)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), items.map(it => {
    const v = typeof it === 'string' ? it : it.value,
      l = typeof it === 'string' ? it : it.label;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        height: 34,
        padding: '0 18px',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid ' + (on ? 'var(--border-accent)' : 'transparent'),
        background: on ? 'color-mix(in oklab,var(--accent-500) 28%,transparent)' : 'transparent',
        color: on ? 'var(--lav-050)' : 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-label)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'var(--t-hover)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive/ArchiveApp.jsx
try { (() => {
const {
  SlashLabel,
  Tabs,
  Icon
} = window.Room505IridescentChromeDesignSystem_087d63;
function YearNav() {
  const years = window.ARCHIVE.map(y => y.year);
  const [active, setActive] = React.useState(years[0]);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      let cur = years[0];
      years.forEach(y => {
        const el = document.getElementById('y' + y);
        if (el && el.getBoundingClientRect().top < 220) cur = y;
      });
      setActive(cur);
      const arc = document.getElementById('archive');
      setShown(!!arc && arc.getBoundingClientRect().top <= 0 && window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const jump = y => {
    const el = document.getElementById('y' + y);
    if (el) window.scrollTo({
      top: window.scrollY + el.getBoundingClientRect().top - 90,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      height: 72,
      padding: '0 var(--gutter)',
      background: 'color-mix(in oklab,var(--ink-900) 78%,transparent)',
      backdropFilter: 'blur(var(--blur-nav))',
      WebkitBackdropFilter: 'blur(var(--blur-nav))',
      borderBottom: '1px solid var(--border-hairline)',
      overflowX: 'auto',
      opacity: shown ? 1 : 0,
      pointerEvents: shown ? 'auto' : 'none',
      transform: shown ? 'none' : 'translateY(-8px)',
      transition: 'opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginLeft: 'auto',
      flex: '0 0 auto'
    }
  }, window.ARCHIVE.map(y => /*#__PURE__*/React.createElement("button", {
    key: y.year,
    onClick: () => jump(y.year),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      opacity: y.year === active ? 1 : .6
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: y.year === active ? 'bright' : 'secondary'
  }, y.year)))));
}
function Colophon() {
  const nicks = ['Віталій', 'Ілля', 'Стас', 'Роберт', 'Ігор', 'Влад', 'Олександр'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      marginTop: 'var(--section-y)',
      padding: 'var(--space-8) var(--gutter)',
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--bg-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, null, "\u0425\u0442\u043E \u0446\u0435 \u0432\u0441\u0435 \u0437\u0440\u043E\u0431\u0438\u0432"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--font-display-stretch)',
      fontWeight: 800,
      fontSize: 'var(--fs-h3)',
      textTransform: 'uppercase'
    }
  }, nicks.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      color: 'var(--text-primary)'
    }
  }, n))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      maxWidth: 560,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, "\u0420\u043E\u043A\u0438, \u0437\u0430\u043C\u043E\u0432\u043D\u0438\u043A\u0438 \u0439 \u043E\u043F\u0438\u0441\u0438 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u0456 \u043F\u043E \u0444\u043E\u0442\u043E \u0442\u0430 \u043F\u0430\u043C\u2019\u044F\u0442\u0456. \u042F\u043A\u0449\u043E \u0449\u043E\u0441\u044C \u043D\u0435 \u0442\u0430\u043A \u2014 \u0446\u0435 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u0444\u0430\u0439\u043B\u0456, \u0456 \u043D\u0456\u0445\u0442\u043E \u043F\u0440\u043E \u0446\u0435 \u043D\u0435 \u0434\u0456\u0437\u043D\u0430\u0454\u0442\u044C\u0441\u044F."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "/ROOM 505 \xB7 2015\u20132022/"), /*#__PURE__*/React.createElement("span", null, "/\u0422\u0406\u041B\u042C\u041A\u0418 \u0414\u041B\u042F \u0421\u0412\u041E\u0407\u0425/"))));
}
function ArchiveApp() {
  const enter = () => {
    const el = document.getElementById('archive');
    if (el) window.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement(window.Intro, {
    onEnter: enter
  }), /*#__PURE__*/React.createElement("div", {
    id: "archive"
  }, /*#__PURE__*/React.createElement(YearNav, null), /*#__PURE__*/React.createElement(window.Timeline, null), /*#__PURE__*/React.createElement(Colophon, null)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ArchiveApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive/ArchiveApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive/Cards.jsx
try { (() => {
const {
  Card,
  Badge,
  Tag,
  SlashLabel,
  Icon,
  Button
} = window.Room505IridescentChromeDesignSystem_087d63;
const IMG = '../../assets/archive/';
function Meta({
  type,
  client,
  platform
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "cyan"
  }, type), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, platform), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, client));
}
function People({
  people
}) {
  if (!people || !people.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 'var(--space-4)'
    }
  }, people.map(p => /*#__PURE__*/React.createElement(Tag, {
    key: p
  }, p)));
}
function Shot({
  src,
  alt,
  height,
  dim
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      background: 'var(--ink-850)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: 'saturate(.92) contrast(1.04)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(10,7,20,0) 40%,rgba(10,7,20,.72) 100%)'
    }
  }), dim && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/grain.png)',
      backgroundSize: '180px',
      opacity: .07,
      mixBlendMode: 'overlay'
    }
  }));
}
function ProjectCard({
  p,
  featured = false
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "0",
    glow: featured ? 'indigo' : 'none',
    onClick: () => setOpen(o => !o),
    style: {
      cursor: 'pointer',
      gridColumn: featured ? '1 / -1' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: featured ? {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,1fr)'
    } : {}
  }, /*#__PURE__*/React.createElement(Shot, {
    src: p.img,
    alt: p.title,
    height: featured ? 340 : 180,
    dim: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: featured ? 'var(--space-7)' : 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    type: p.type,
    client: p.client,
    platform: p.platform
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: featured ? 'var(--fs-h2)' : 'var(--fs-h4)',
      textTransform: 'uppercase'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, p.text), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, p.note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-primary)'
    }
  }, p.note), /*#__PURE__*/React.createElement(People, {
    people: p.people
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'chevron-up' : 'chevron-down',
    size: 14
  }), open ? 'Згорнути' : 'Деталі'))));
}
function EventCard({
  e,
  year
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "0",
    onClick: () => setOpen(o => !o),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 180,
      display: 'grid',
      placeItems: 'center',
      background: 'repeating-linear-gradient(135deg,rgba(255,255,255,.03) 0 12px,rgba(255,255,255,0) 12px 24px),var(--ink-850)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image-off",
    size: 26,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, null, "\u0424\u043E\u0442\u043E \u043D\u0435 \u0437\u0431\u0435\u0440\u0435\u0433\u043B\u043E\u0441\u044F")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "magenta"
  }, "\u041F\u043E\u0434\u0456\u044F \xB7 ", year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--fs-h4)',
      textTransform: 'uppercase'
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, e.text), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(People, {
    people: e.people
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'chevron-up' : 'chevron-down',
    size: 14
  }), open ? 'Згорнути' : 'Хто був')));
}
function EmptySlot() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 220,
      borderRadius: 'var(--radius-lg)',
      border: '1px dashed var(--border-hairline)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18,
    color: "var(--lav-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, null, "\u0421\u043B\u043E\u0442 \u0432\u0456\u043B\u044C\u043D\u0438\u0439"))));
}
Object.assign(window, {
  ProjectCard,
  EventCard,
  EmptySlot
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive/Cards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive/Intro.jsx
try { (() => {
const {
  ChromeHeading,
  SlashLabel,
  GrainOverlay,
  NeonGrid,
  Icon
} = window.Room505IridescentChromeDesignSystem_087d63;
function Intro({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '100vh',
      minHeight: 620,
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      background: 'var(--ink-900) url(../../assets/starfield.png) center/cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-20%',
      left: '50%',
      width: 1100,
      height: 1100,
      transform: 'translateX(-50%)',
      background: 'radial-gradient(circle,color-mix(in oklab,var(--spectrum-indigo) 16%,transparent) 0%,transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      textAlign: 'center',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    size: "md"
  }, "\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u0430\u0440\u0445\u0456\u0432 \u0441\u0442\u0443\u0434\u0456\u0457"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '26px 0 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-room505-1200.png",
    alt: "Room 505",
    style: {
      width: 'min(660px,74vw)',
      height: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "/2015 \u2014 2022 \xB7 \u0406\u0413\u0420\u0418 \xB7 \u0422\u0420\u0415\u041D\u0410\u0416\u0415\u0420\u0418 \xB7 R&D/"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px auto 0',
      maxWidth: 520,
      fontSize: 'var(--fs-body)',
      color: 'var(--text-secondary)'
    }
  }, "\u0421\u0430\u0439\u0442 \u0437\u0440\u043E\u0431\u043B\u0435\u043D\u043E \u0434\u043B\u044F \u0442\u0438\u0445, \u0445\u0442\u043E \u0432 \u0446\u0456\u0439 \u043A\u0456\u043C\u043D\u0430\u0442\u0456 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0432. \u0421\u0442\u043E\u0440\u043E\u043D\u043D\u0456\u043C \u0442\u0443\u0442 \u043D\u0435\u0446\u0456\u043A\u0430\u0432\u043E, \u0456 \u0446\u0435 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E."), /*#__PURE__*/React.createElement("button", {
    onClick: onEnter,
    style: {
      marginTop: 38,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      height: 48,
      padding: '0 26px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-soft)',
      background: 'var(--surface-glass)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0430\u0440\u0445\u0456\u0432 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down",
    size: 18
  }))), /*#__PURE__*/React.createElement(NeonGrid, {
    height: 300,
    horizonGlow: false
  }), /*#__PURE__*/React.createElement(GrainOverlay, {
    intensity: "poster",
    scanlines: true,
    grainSrc: "../../assets/grain.png"
  }));
}
Object.assign(window, {
  Intro
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive/Intro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive/Timeline.jsx
try { (() => {
const {
  SlashLabel,
  GrainOverlay,
  Badge
} = window.Room505IridescentChromeDesignSystem_087d63;
function YearSection({
  y,
  slots
}) {
  const count = 1 + (y.items ? y.items.length : 0) + 1;
  const word = count % 10 === 1 && count % 100 !== 11 ? 'позиція' : count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20) ? 'позиції' : 'позицій';
  return /*#__PURE__*/React.createElement("section", {
    id: 'y' + y.year,
    style: {
      position: 'relative',
      padding: 'var(--section-y) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h1)',
      letterSpacing: '-.02em'
    }
  }, y.year), /*#__PURE__*/React.createElement(SlashLabel, null, count, " ", word)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(window.ProjectCard, {
    p: y.featured,
    featured: true
  }), (y.items || []).map(it => /*#__PURE__*/React.createElement(window.ProjectCard, {
    key: it.id,
    p: it
  })), /*#__PURE__*/React.createElement(window.EventCard, {
    e: y.event,
    year: y.year
  }), Array.from({
    length: slots || 0
  }).map((_, i) => /*#__PURE__*/React.createElement(window.EmptySlot, {
    key: i
  })))));
}
function Timeline() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, window.ARCHIVE.map(y => /*#__PURE__*/React.createElement(YearSection, {
    key: y.year,
    y: y,
    slots: window.ARCHIVE_SLOTS[y.year]
  })), /*#__PURE__*/React.createElement(GrainOverlay, {
    grainSrc: "../../assets/grain.png"
  }));
}
Object.assign(window, {
  Timeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive/Timeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive/data.js
try { (() => {
// Архів Room 505 — роки, події та проекти.
// УВАГА: роки, клієнти й описи проставлені за здогадом на основі фото — правити тут.
window.ARCHIVE = [{
  year: '2015',
  event: {
    title: 'Студія завелася',
    text: 'Кімната 505, дві машини, один ліцензійний Unity на всіх. Домовилися: робимо ігри, поки не набридне.',
    people: ['Віталій', 'Ілля']
  },
  featured: {
    id: 'dragonheart',
    title: 'Dragon Heart',
    img: 'dragonheart.png',
    type: 'Гра',
    client: 'Власний проект',
    platform: 'PC',
    people: ['Віталій', 'Ілля', 'Стас'],
    text: 'Перший проект, який дожив до головного меню. Піксельний дракон, замок на скелі й музика, яку Стас писав у навушниках сусіда.',
    note: 'Збірка існує рівно в одному екземплярі — на флешці, яку ніхто не наважується форматувати.'
  },
  items: [{
    id: 'zombie',
    title: 'Zombie Graveyard',
    img: 'zombie-graveyard.png',
    type: 'Гра',
    client: 'Власний проект',
    platform: 'PC',
    people: ['Ілля', 'Роберт'],
    text: '2D-хорор про руку з-під землі. Найвідоміша частина гри — екран із дисклеймером, який ми досі цитуємо.'
  }]
}, {
  year: '2016',
  event: {
    title: 'Перший зовнішній замовник',
    text: 'Прийшли по «щось на Unity», пішли з готовою сценою. Тоді ж з’ясувалося, що рахунки теж хтось має виставляти.',
    people: ['Віталій']
  },
  featured: {
    id: 'starinc',
    title: 'Star Inc. City',
    img: 'starinc-city.png',
    type: 'Гра',
    client: 'Star Inc.',
    platform: 'Mobile',
    people: ['Стас', 'Ігор', 'Влад'],
    text: 'Low-poly місто з аеропортом, цепеліном і набережною. Половину будівель зробили за вихідні, другу половину переробляли пів року.',
    note: 'Дирижабль додали «на день», і він залишився в білді назавжди.'
  },
  items: []
}, {
  year: '2017',
  event: {
    title: 'Рік трьох релізів',
    text: 'Три проекти за дванадцять місяців. Саме тоді в кімнаті з’явився другий чайник.',
    people: ['Ілля', 'Стас', 'Роберт']
  },
  featured: {
    id: 'shotter',
    title: 'SHOOTTER',
    img: '2017-shotter.png',
    type: 'Гра',
    client: 'Власний проект',
    platform: 'PC',
    people: ['Ілля', 'Стас'],
    text: 'Піксельний ран-н-ган із магазином, статистикою і черепом-босом. Дві «Т» у назві — не помилка, а рішення, яке ми відстоюємо досі.',
    note: 'Баланс правили за тиждень до релізу, орієнтуючись на «мені норм».'
  },
  items: [{
    id: 'shawshank',
    title: 'Побег НЕ из Шоушенка',
    img: '2017-shawshank.png',
    type: 'Гра',
    client: 'Власний проект',
    platform: 'PC',
    people: ['Роберт', 'Влад'],
    text: 'Квест-втеча з камери. Меню зробили за вечір, і воно вийшло атмосфернішим за половину рівнів.'
  }, {
    id: 'turyachka',
    title: 'Turyachka — інтер’єр',
    img: '2017-turyachka.png',
    type: 'R&D',
    client: 'Внутрішній',
    platform: 'PC',
    people: ['Ігор'],
    text: 'Скульпт і текстурування камери в 3D-Coat. Наш перший серйозний підхід до PBR-матеріалів і облуплених стін.'
  }]
}, {
  year: '2018',
  event: {
    title: 'Переїзд у більшу кімнату',
    text: 'Кімната інша — назва лишилася. Перевезли два монітори, шолом і коробку з дисками.',
    people: ['Віталій', 'Олександр']
  },
  featured: {
    id: 'krakow',
    title: 'Середньовічне місто',
    img: 'krakow.png',
    type: 'Тренажер',
    client: 'Музейний проект',
    platform: 'PC',
    people: ['Ігор', 'Влад', 'Олександр'],
    text: 'Історична реконструкція міської площі: ратуша, бруківка, торговці й бочки. Перший проект, де історична довідка була важливіша за FPS.',
    note: 'Кількість вікон на ратуші звіряли з гравюрою. Двічі.'
  },
  items: [{
    id: 'railway',
    title: 'Залізничний кран',
    img: '2018-railway.png',
    type: 'Тренажер',
    client: 'Промисловий замовник',
    platform: 'PC',
    people: ['Стас', 'Олександр'],
    text: 'Вантажні операції на під’їзних коліях. Єдиний кадр, що зберігся, — з-під фільтра, який хтось увімкнув і забув вимкнути.'
  }]
}, {
  year: '2019',
  event: {
    title: 'Перейшли на морські тренажери',
    text: 'Ігри відсунулися вбік: почалися замовлення, де помилка коштує не рейтингу в сторі.',
    people: ['Віталій', 'Стас', 'Ігор']
  },
  featured: {
    id: 'mooring',
    title: 'Швартові операції',
    img: 'mooring.png',
    type: 'Тренажер',
    client: 'Морський навчальний центр',
    platform: 'VR',
    people: ['Стас', 'Ігор', 'Влад'],
    text: 'VR-тренажер швартової палуби: лебідки, троси, ланцюги і два матроси, які терпляче чекають команди. Кожен елемент звіряли з реальними процедурами.',
    note: 'Іменні шоломи John і Bill лишилися з тестового білда — замовник попросив не чіпати.'
  },
  items: [{
    id: 'crane',
    title: 'Портовий кран',
    img: 'crane.png',
    type: 'Тренажер',
    client: 'Портовий оператор',
    platform: 'VR',
    people: ['Олександр', 'Ігор'],
    text: 'Сигнальник на причалі, суднові крани, вантаж на стропах. Жести рук моделювали з відео реальної зміни.'
  }]
}, {
  year: '2020',
  event: {
    title: 'Розійшлися по домівках',
    text: 'Локдаун. Дейлі в діскорді, білди через хмару, і несподівано найпродуктивніший рік.',
    people: ['Усі']
  },
  featured: {
    id: 'asdtug',
    title: 'ASD-буксир, місток',
    img: 'asdtug.png',
    type: 'Тренажер',
    client: 'Learnmarine',
    platform: 'PC',
    people: ['Стас', 'Влад', 'Ігор'],
    text: 'Місток буксира з азимутальними колонками: індикатори вітру, ROT, керма, туман і судно попереду. Найскладніша фізика, за яку ми бралися.',
    note: 'Туман зробили щільнішим, ніж треба, бо так менше видно недороблені борти.'
  },
  items: [{
    id: 'kyiv2222',
    title: 'KYIV 2222',
    img: 'kyiv-hero.png',
    type: 'R&D',
    client: 'Власний проект',
    platform: 'PC',
    people: ['Роберт'],
    text: 'Кіберпанк-джем на вихідних. Далі ілюстрації та кількох концептів справа не пішла, але постер висить у кімнаті.'
  }]
}, {
  year: '2021',
  event: {
    title: 'Найдовший проект студії',
    text: 'Один контракт розтягнувся на весь рік. Навчилися казати «це в наступному спринті».',
    people: ['Віталій', 'Стас']
  },
  featured: {
    id: 'jackup',
    title: 'Jack-up платформа',
    img: 'jackup.png',
    type: 'Тренажер',
    client: 'Offshore-оператор',
    platform: 'PC',
    people: ['Ігор', 'Влад', 'Олександр'],
    text: 'Самопідіймальна установка, кінематик підходу й підйому на опори. Захід сонця рендерили три ночі — і жодного разу не пошкодували.',
    note: 'Це єдиний наш кадр, який замовник поставив собі на заставку.'
  },
  items: [{
    id: 'bocce',
    title: 'Bocce Arena',
    img: 'bocce.png',
    type: 'Гра',
    client: 'Власний проект',
    platform: 'VR',
    people: ['Ілля', 'Роберт'],
    text: 'VR-майданчик для бочче з таблом і пальмами. Робили як розминку між тренажерами, а грали в нього більше, ніж тестували.'
  }]
}, {
  year: '2022',
  event: {
    title: 'Архів закрито',
    text: 'Останній білд, останній коміт, і кімната 505 лишилася в бекапах. Цей сайт — усе, що з неї виїхало.',
    people: ['Усі']
  },
  featured: {
    id: 'xrdemo',
    title: 'XR-демо: робота з інструментом',
    img: '2022-xrdemo.png',
    type: 'R&D',
    client: 'Внутрішній',
    platform: 'VR',
    people: ['Стас', 'Ігор'],
    text: 'Демо ручних операцій у XR: шурупокрут, свердління, тактильний фідбек. Останнє, що ми встигли довести до показу.',
    note: 'Саморіз на столі — той самий, який усі тестувальники намагалися підняти.'
  },
  items: []
}];
// Порожні слоти: скільки карток-заглушок додати в кожен рік, щоб показати масштаб повного архіву (~30).
window.ARCHIVE_SLOTS = {
  '2015': 2,
  '2016': 3,
  '2017': 1,
  '2018': 2,
  '2019': 2,
  '2020': 2,
  '2021': 2,
  '2022': 3
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive/data.js", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive_v1/ArchiveAppV1.jsx
try { (() => {
const {
  SlashLabel,
  Tabs,
  Icon
} = window.Room505IridescentChromeDesignSystem_087d63;
function YearNav() {
  const years = window.ARCHIVE.map(y => y.year);
  const [active, setActive] = React.useState(years[0]);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      let cur = years[0];
      years.forEach(y => {
        const el = document.getElementById('y' + y);
        if (el && el.getBoundingClientRect().top < 220) cur = y;
      });
      setActive(cur);
      const arc = document.getElementById('archive');
      setShown(!!arc && arc.getBoundingClientRect().top <= 0 && window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const jump = y => {
    const el = document.getElementById('y' + y);
    if (el) window.scrollTo({
      top: window.scrollY + el.getBoundingClientRect().top - 90,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      height: 72,
      padding: '0 var(--gutter)',
      background: 'color-mix(in oklab,var(--ink-900) 78%,transparent)',
      backdropFilter: 'blur(var(--blur-nav))',
      WebkitBackdropFilter: 'blur(var(--blur-nav))',
      borderBottom: '1px solid var(--border-hairline)',
      overflowX: 'auto',
      opacity: shown ? 1 : 0,
      pointerEvents: shown ? 'auto' : 'none',
      transform: shown ? 'none' : 'translateY(-8px)',
      transition: 'opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginLeft: 'auto',
      flex: '0 0 auto'
    }
  }, window.ARCHIVE.map(y => /*#__PURE__*/React.createElement("button", {
    key: y.year,
    onClick: () => jump(y.year),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      opacity: y.year === active ? 1 : .6
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: y.year === active ? 'bright' : 'secondary'
  }, y.year)))));
}
function Colophon() {
  const nicks = ['Віталій', 'Ілля', 'Стас', 'Роберт', 'Ігор', 'Влад', 'Олександр'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      marginTop: 'var(--section-y)',
      padding: 'var(--space-8) var(--gutter)',
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--bg-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, null, "\u0425\u0442\u043E \u0446\u0435 \u0432\u0441\u0435 \u0437\u0440\u043E\u0431\u0438\u0432"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--font-display-stretch)',
      fontWeight: 800,
      fontSize: 'var(--fs-h3)',
      textTransform: 'uppercase'
    }
  }, nicks.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      color: 'var(--text-primary)'
    }
  }, n))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      maxWidth: 560,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, "\u0420\u043E\u043A\u0438, \u0437\u0430\u043C\u043E\u0432\u043D\u0438\u043A\u0438 \u0439 \u043E\u043F\u0438\u0441\u0438 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u0456 \u043F\u043E \u0444\u043E\u0442\u043E \u0442\u0430 \u043F\u0430\u043C\u2019\u044F\u0442\u0456. \u042F\u043A\u0449\u043E \u0449\u043E\u0441\u044C \u043D\u0435 \u0442\u0430\u043A \u2014 \u0446\u0435 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u0444\u0430\u0439\u043B\u0456, \u0456 \u043D\u0456\u0445\u0442\u043E \u043F\u0440\u043E \u0446\u0435 \u043D\u0435 \u0434\u0456\u0437\u043D\u0430\u0454\u0442\u044C\u0441\u044F."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "/ROOM 505 \xB7 2015\u20132022/"), /*#__PURE__*/React.createElement("span", null, "/\u0422\u0406\u041B\u042C\u041A\u0418 \u0414\u041B\u042F \u0421\u0412\u041E\u0407\u0425/"))));
}
function ArchiveAppV1() {
  const enter = () => {
    const el = document.getElementById('archive');
    if (el) window.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement(window.Intro, {
    onEnter: enter
  }), /*#__PURE__*/React.createElement("div", {
    id: "archive"
  }, /*#__PURE__*/React.createElement(YearNav, null), /*#__PURE__*/React.createElement(window.Timeline, null), /*#__PURE__*/React.createElement(Colophon, null)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ArchiveAppV1, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive_v1/ArchiveAppV1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive_v1/CardsV1.jsx
try { (() => {
const {
  Card,
  Badge,
  Tag,
  SlashLabel,
  Icon,
  Button
} = window.Room505IridescentChromeDesignSystem_087d63;
const IMG = '../../assets/archive/';
function Meta({
  type,
  client,
  platform
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "cyan"
  }, type), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, platform), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, client));
}
function People({
  people
}) {
  if (!people || !people.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 'var(--space-4)'
    }
  }, people.map(p => /*#__PURE__*/React.createElement(Tag, {
    key: p
  }, p)));
}
function Shot({
  src,
  alt,
  height,
  dim
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      background: 'var(--ink-850)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: 'saturate(.92) contrast(1.04)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(10,7,20,0) 40%,rgba(10,7,20,.72) 100%)'
    }
  }), dim && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/grain.png)',
      backgroundSize: '180px',
      opacity: .07,
      mixBlendMode: 'overlay'
    }
  }));
}
function ProjectCard({
  p,
  featured = false
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "0",
    glow: featured ? 'indigo' : 'none',
    onClick: () => setOpen(o => !o),
    style: {
      cursor: 'pointer',
      gridColumn: featured ? '1 / -1' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: featured ? {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,1fr)'
    } : {}
  }, /*#__PURE__*/React.createElement(Shot, {
    src: p.img,
    alt: p.title,
    height: featured ? 340 : 180,
    dim: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: featured ? 'var(--space-7)' : 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    type: p.type,
    client: p.client,
    platform: p.platform
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: featured ? 'var(--fs-h2)' : 'var(--fs-h4)',
      textTransform: 'uppercase'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, p.text), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, p.note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-primary)'
    }
  }, p.note), /*#__PURE__*/React.createElement(People, {
    people: p.people
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'chevron-up' : 'chevron-down',
    size: 14
  }), open ? 'Згорнути' : 'Деталі'))));
}
function EventCard({
  e,
  year
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "0",
    onClick: () => setOpen(o => !o),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 180,
      display: 'grid',
      placeItems: 'center',
      background: 'repeating-linear-gradient(135deg,rgba(255,255,255,.03) 0 12px,rgba(255,255,255,0) 12px 24px),var(--ink-850)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image-off",
    size: 26,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, null, "\u0424\u043E\u0442\u043E \u043D\u0435 \u0437\u0431\u0435\u0440\u0435\u0433\u043B\u043E\u0441\u044F")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "magenta"
  }, "\u041F\u043E\u0434\u0456\u044F \xB7 ", year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--fs-h4)',
      textTransform: 'uppercase'
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, e.text), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(People, {
    people: e.people
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'chevron-up' : 'chevron-down',
    size: 14
  }), open ? 'Згорнути' : 'Хто був')));
}
function EmptySlot() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 220,
      borderRadius: 'var(--radius-lg)',
      border: '1px dashed var(--border-hairline)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18,
    color: "var(--lav-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, null, "\u0421\u043B\u043E\u0442 \u0432\u0456\u043B\u044C\u043D\u0438\u0439"))));
}
Object.assign(window, {
  ProjectCard,
  EventCard,
  EmptySlot
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive_v1/CardsV1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive_v1/IntroV1.jsx
try { (() => {
const {
  ChromeHeading,
  SlashLabel,
  GrainOverlay,
  NeonGrid,
  Icon
} = window.Room505IridescentChromeDesignSystem_087d63;
function Intro({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '100vh',
      minHeight: 620,
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      background: 'var(--ink-900) url(../../assets/starfield.png) center/cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-20%',
      left: '50%',
      width: 1100,
      height: 1100,
      transform: 'translateX(-50%)',
      background: 'radial-gradient(circle,color-mix(in oklab,var(--spectrum-indigo) 16%,transparent) 0%,transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      textAlign: 'center',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    size: "md"
  }, "\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u0430\u0440\u0445\u0456\u0432 \u0441\u0442\u0443\u0434\u0456\u0457"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '26px 0 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-room505-1200.png",
    alt: "Room 505",
    style: {
      width: 'min(660px,74vw)',
      height: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: 'var(--ls-label-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "/2015 \u2014 2022 \xB7 \u0406\u0413\u0420\u0418 \xB7 \u0422\u0420\u0415\u041D\u0410\u0416\u0415\u0420\u0418 \xB7 R&D/"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px auto 0',
      maxWidth: 520,
      fontSize: 'var(--fs-body)',
      color: 'var(--text-secondary)'
    }
  }, "\u0421\u0430\u0439\u0442 \u0437\u0440\u043E\u0431\u043B\u0435\u043D\u043E \u0434\u043B\u044F \u0442\u0438\u0445, \u0445\u0442\u043E \u0432 \u0446\u0456\u0439 \u043A\u0456\u043C\u043D\u0430\u0442\u0456 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0432. \u0421\u0442\u043E\u0440\u043E\u043D\u043D\u0456\u043C \u0442\u0443\u0442 \u043D\u0435\u0446\u0456\u043A\u0430\u0432\u043E, \u0456 \u0446\u0435 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E."), /*#__PURE__*/React.createElement("button", {
    onClick: onEnter,
    style: {
      marginTop: 38,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      height: 48,
      padding: '0 26px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-soft)',
      background: 'var(--surface-glass)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0430\u0440\u0445\u0456\u0432 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down",
    size: 18
  }))), /*#__PURE__*/React.createElement(NeonGrid, {
    height: 300,
    horizonGlow: false
  }), /*#__PURE__*/React.createElement(GrainOverlay, {
    intensity: "poster",
    scanlines: true,
    grainSrc: "../../assets/grain.png"
  }));
}
Object.assign(window, {
  Intro
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive_v1/IntroV1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive_v1/TimelineV1.jsx
try { (() => {
const {
  SlashLabel,
  GrainOverlay,
  Badge
} = window.Room505IridescentChromeDesignSystem_087d63;
function YearSection({
  y,
  slots
}) {
  const count = 1 + (y.items ? y.items.length : 0) + 1;
  const word = count % 10 === 1 && count % 100 !== 11 ? 'позиція' : count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20) ? 'позиції' : 'позицій';
  return /*#__PURE__*/React.createElement("section", {
    id: 'y' + y.year,
    style: {
      position: 'relative',
      padding: 'var(--section-y) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h1)',
      letterSpacing: '-.02em'
    }
  }, y.year), /*#__PURE__*/React.createElement(SlashLabel, null, count, " ", word)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(window.ProjectCard, {
    p: y.featured,
    featured: true
  }), (y.items || []).map(it => /*#__PURE__*/React.createElement(window.ProjectCard, {
    key: it.id,
    p: it
  })), /*#__PURE__*/React.createElement(window.EventCard, {
    e: y.event,
    year: y.year
  }), Array.from({
    length: slots || 0
  }).map((_, i) => /*#__PURE__*/React.createElement(window.EmptySlot, {
    key: i
  })))));
}
function Timeline() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, window.ARCHIVE.map(y => /*#__PURE__*/React.createElement(YearSection, {
    key: y.year,
    y: y,
    slots: window.ARCHIVE_SLOTS[y.year]
  })), /*#__PURE__*/React.createElement(GrainOverlay, {
    grainSrc: "../../assets/grain.png"
  }));
}
Object.assign(window, {
  Timeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive_v1/TimelineV1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive_v1/data.js
try { (() => {
// Архів Room 505 — роки, події та проекти.
// УВАГА: роки, клієнти й описи проставлені за здогадом на основі фото — правити тут.
window.ARCHIVE = [{
  year: '2015',
  event: {
    title: 'Студія завелася',
    text: 'Кімната 505, дві машини, один ліцензійний Unity на всіх. Домовилися: робимо ігри, поки не набридне.',
    people: ['Віталій', 'Ілля']
  },
  featured: {
    id: 'dragonheart',
    title: 'Dragon Heart',
    img: 'dragonheart.png',
    type: 'Гра',
    client: 'Власний проект',
    platform: 'PC',
    people: ['Віталій', 'Ілля', 'Стас'],
    text: 'Перший проект, який дожив до головного меню. Піксельний дракон, замок на скелі й музика, яку Стас писав у навушниках сусіда.',
    note: 'Збірка існує рівно в одному екземплярі — на флешці, яку ніхто не наважується форматувати.'
  },
  items: [{
    id: 'zombie',
    title: 'Zombie Graveyard',
    img: 'zombie-graveyard.png',
    type: 'Гра',
    client: 'Власний проект',
    platform: 'PC',
    people: ['Ілля', 'Роберт'],
    text: '2D-хорор про руку з-під землі. Найвідоміша частина гри — екран із дисклеймером, який ми досі цитуємо.'
  }]
}, {
  year: '2016',
  event: {
    title: 'Перший зовнішній замовник',
    text: 'Прийшли по «щось на Unity», пішли з готовою сценою. Тоді ж з’ясувалося, що рахунки теж хтось має виставляти.',
    people: ['Віталій']
  },
  featured: {
    id: 'starinc',
    title: 'Star Inc. City',
    img: 'starinc-city.png',
    type: 'Гра',
    client: 'Star Inc.',
    platform: 'Mobile',
    people: ['Стас', 'Ігор', 'Влад'],
    text: 'Low-poly місто з аеропортом, цепеліном і набережною. Половину будівель зробили за вихідні, другу половину переробляли пів року.',
    note: 'Дирижабль додали «на день», і він залишився в білді назавжди.'
  },
  items: []
}, {
  year: '2017',
  event: {
    title: 'Рік трьох релізів',
    text: 'Три проекти за дванадцять місяців. Саме тоді в кімнаті з’явився другий чайник.',
    people: ['Ілля', 'Стас', 'Роберт']
  },
  featured: {
    id: 'shotter',
    title: 'SHOOTTER',
    img: '2017-shotter.png',
    type: 'Гра',
    client: 'Власний проект',
    platform: 'PC',
    people: ['Ілля', 'Стас'],
    text: 'Піксельний ран-н-ган із магазином, статистикою і черепом-босом. Дві «Т» у назві — не помилка, а рішення, яке ми відстоюємо досі.',
    note: 'Баланс правили за тиждень до релізу, орієнтуючись на «мені норм».'
  },
  items: [{
    id: 'shawshank',
    title: 'Побег НЕ из Шоушенка',
    img: '2017-shawshank.png',
    type: 'Гра',
    client: 'Власний проект',
    platform: 'PC',
    people: ['Роберт', 'Влад'],
    text: 'Квест-втеча з камери. Меню зробили за вечір, і воно вийшло атмосфернішим за половину рівнів.'
  }, {
    id: 'turyachka',
    title: 'Turyachka — інтер’єр',
    img: '2017-turyachka.png',
    type: 'R&D',
    client: 'Внутрішній',
    platform: 'PC',
    people: ['Ігор'],
    text: 'Скульпт і текстурування камери в 3D-Coat. Наш перший серйозний підхід до PBR-матеріалів і облуплених стін.'
  }]
}, {
  year: '2018',
  event: {
    title: 'Переїзд у більшу кімнату',
    text: 'Кімната інша — назва лишилася. Перевезли два монітори, шолом і коробку з дисками.',
    people: ['Віталій', 'Олександр']
  },
  featured: {
    id: 'krakow',
    title: 'Середньовічне місто',
    img: 'krakow.png',
    type: 'Тренажер',
    client: 'Музейний проект',
    platform: 'PC',
    people: ['Ігор', 'Влад', 'Олександр'],
    text: 'Історична реконструкція міської площі: ратуша, бруківка, торговці й бочки. Перший проект, де історична довідка була важливіша за FPS.',
    note: 'Кількість вікон на ратуші звіряли з гравюрою. Двічі.'
  },
  items: [{
    id: 'railway',
    title: 'Залізничний кран',
    img: '2018-railway.png',
    type: 'Тренажер',
    client: 'Промисловий замовник',
    platform: 'PC',
    people: ['Стас', 'Олександр'],
    text: 'Вантажні операції на під’їзних коліях. Єдиний кадр, що зберігся, — з-під фільтра, який хтось увімкнув і забув вимкнути.'
  }]
}, {
  year: '2019',
  event: {
    title: 'Перейшли на морські тренажери',
    text: 'Ігри відсунулися вбік: почалися замовлення, де помилка коштує не рейтингу в сторі.',
    people: ['Віталій', 'Стас', 'Ігор']
  },
  featured: {
    id: 'mooring',
    title: 'Швартові операції',
    img: 'mooring.png',
    type: 'Тренажер',
    client: 'Морський навчальний центр',
    platform: 'VR',
    people: ['Стас', 'Ігор', 'Влад'],
    text: 'VR-тренажер швартової палуби: лебідки, троси, ланцюги і два матроси, які терпляче чекають команди. Кожен елемент звіряли з реальними процедурами.',
    note: 'Іменні шоломи John і Bill лишилися з тестового білда — замовник попросив не чіпати.'
  },
  items: [{
    id: 'crane',
    title: 'Портовий кран',
    img: 'crane.png',
    type: 'Тренажер',
    client: 'Портовий оператор',
    platform: 'VR',
    people: ['Олександр', 'Ігор'],
    text: 'Сигнальник на причалі, суднові крани, вантаж на стропах. Жести рук моделювали з відео реальної зміни.'
  }]
}, {
  year: '2020',
  event: {
    title: 'Розійшлися по домівках',
    text: 'Локдаун. Дейлі в діскорді, білди через хмару, і несподівано найпродуктивніший рік.',
    people: ['Усі']
  },
  featured: {
    id: 'asdtug',
    title: 'ASD-буксир, місток',
    img: 'asdtug.png',
    type: 'Тренажер',
    client: 'Learnmarine',
    platform: 'PC',
    people: ['Стас', 'Влад', 'Ігор'],
    text: 'Місток буксира з азимутальними колонками: індикатори вітру, ROT, керма, туман і судно попереду. Найскладніша фізика, за яку ми бралися.',
    note: 'Туман зробили щільнішим, ніж треба, бо так менше видно недороблені борти.'
  },
  items: [{
    id: 'kyiv2222',
    title: 'KYIV 2222',
    img: 'kyiv-hero.png',
    type: 'R&D',
    client: 'Власний проект',
    platform: 'PC',
    people: ['Роберт'],
    text: 'Кіберпанк-джем на вихідних. Далі ілюстрації та кількох концептів справа не пішла, але постер висить у кімнаті.'
  }]
}, {
  year: '2021',
  event: {
    title: 'Найдовший проект студії',
    text: 'Один контракт розтягнувся на весь рік. Навчилися казати «це в наступному спринті».',
    people: ['Віталій', 'Стас']
  },
  featured: {
    id: 'jackup',
    title: 'Jack-up платформа',
    img: 'jackup.png',
    type: 'Тренажер',
    client: 'Offshore-оператор',
    platform: 'PC',
    people: ['Ігор', 'Влад', 'Олександр'],
    text: 'Самопідіймальна установка, кінематик підходу й підйому на опори. Захід сонця рендерили три ночі — і жодного разу не пошкодували.',
    note: 'Це єдиний наш кадр, який замовник поставив собі на заставку.'
  },
  items: [{
    id: 'bocce',
    title: 'Bocce Arena',
    img: 'bocce.png',
    type: 'Гра',
    client: 'Власний проект',
    platform: 'VR',
    people: ['Ілля', 'Роберт'],
    text: 'VR-майданчик для бочче з таблом і пальмами. Робили як розминку між тренажерами, а грали в нього більше, ніж тестували.'
  }]
}, {
  year: '2022',
  event: {
    title: 'Архів закрито',
    text: 'Останній білд, останній коміт, і кімната 505 лишилася в бекапах. Цей сайт — усе, що з неї виїхало.',
    people: ['Усі']
  },
  featured: {
    id: 'xrdemo',
    title: 'XR-демо: робота з інструментом',
    img: '2022-xrdemo.png',
    type: 'R&D',
    client: 'Внутрішній',
    platform: 'VR',
    people: ['Стас', 'Ігор'],
    text: 'Демо ручних операцій у XR: шурупокрут, свердління, тактильний фідбек. Останнє, що ми встигли довести до показу.',
    note: 'Саморіз на столі — той самий, який усі тестувальники намагалися підняти.'
  },
  items: []
}];
// Порожні слоти: скільки карток-заглушок додати в кожен рік, щоб показати масштаб повного архіву (~30).
window.ARCHIVE_SLOTS = {
  '2015': 2,
  '2016': 3,
  '2017': 1,
  '2018': 2,
  '2019': 2,
  '2020': 2,
  '2021': 2,
  '2022': 3
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive_v1/data.js", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive_v2/ArchiveAppV2.jsx
try { (() => {
const {
  SlashLabel
} = window.Room505IridescentChromeDesignSystem_087d63;
function YearNavV2() {
  const years = (window.ARCHIVE || []).map(y => y.year);
  const [active, setActive] = React.useState(years[0]);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      let cur = years[0];
      years.forEach(y => {
        const el = document.getElementById('v2y' + y);
        if (el && el.getBoundingClientRect().top < 240) cur = y;
      });
      setActive(cur);
      const arc = document.getElementById('v2archive');
      setShown(!!arc && arc.getBoundingClientRect().top <= 0 && window.scrollY > 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', onScroll);
    const raf = requestAnimationFrame(onScroll);
    const t = setTimeout(onScroll, 600);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      height: 64,
      padding: '0 var(--gutter)',
      background: 'color-mix(in oklab,var(--ink-900) 80%,transparent)',
      backdropFilter: 'blur(var(--blur-nav))',
      WebkitBackdropFilter: 'blur(var(--blur-nav))',
      borderBottom: '1px solid var(--border-hairline)',
      overflowX: 'auto',
      opacity: shown ? 1 : 0,
      pointerEvents: shown ? 'auto' : 'none',
      transform: shown ? 'none' : 'translateY(-8px)',
      transition: 'opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginLeft: 'auto'
    }
  }, years.map(y => /*#__PURE__*/React.createElement("a", {
    key: y,
    href: '#v2y' + y,
    onClick: e => {
      e.preventDefault();
      const el = document.getElementById('v2y' + y);
      if (el) window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      });
    },
    style: {
      textDecoration: 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: '.14em',
      color: y === active ? 'var(--lav-050)' : 'var(--text-muted)',
      borderBottom: '1px solid ' + (y === active ? 'var(--spectrum-cyan)' : 'transparent'),
      paddingBottom: 2,
      transition: 'var(--t-hover)'
    }
  }, y))));
}
function ColophonV2() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      borderTop: '1px solid var(--border-hairline)',
      padding: 'var(--space-9) var(--gutter) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.ThinV2,
      fontSize: 'var(--fs-h2)'
    }
  }, "2015 \u2014 2022"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      maxWidth: 420,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--lav-400)',
      lineHeight: 1.7
    }
  }, "\u0410\u0440\u0445\u0456\u0432 \u0437\u0430\u043A\u0440\u0438\u0442\u0438\u0439 \u0456 \u043D\u0435 \u043E\u043D\u043E\u0432\u043B\u044E\u0454\u0442\u044C\u0441\u044F. \u042F\u043A\u0449\u043E \u0432 \u0442\u0435\u0431\u0435 \u043B\u0438\u0448\u0438\u043B\u0438\u0441\u044F \u043A\u0430\u0434\u0440\u0438, \u0431\u0456\u043B\u0434\u0438 \u0447\u0438 \u0441\u043A\u0440\u0456\u043D\u0448\u043E\u0442\u0438 \u0437 \u0442\u0438\u0445 \u0440\u043E\u043A\u0456\u0432 \u2014 \u043D\u0430\u0434\u0456\u0448\u043B\u0438, \u0434\u043E\u0434\u0430\u043C\u043E \u0443 \u0432\u0456\u043B\u044C\u043D\u0456 \u0441\u043B\u043E\u0442\u0438.")), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'end',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "muted"
  }, "\u041A\u0456\u043C\u043D\u0430\u0442\u0430 505"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u0412\u0456\u0442\u0430\u043B\u0456\u0439 \xB7 \u0406\u043B\u043B\u044F \xB7 \u0421\u0442\u0430\u0441 \xB7 \u0420\u043E\u0431\u0435\u0440\u0442"), /*#__PURE__*/React.createElement("div", null, "\u0406\u0433\u043E\u0440 \xB7 \u0412\u043B\u0430\u0434 \xB7 \u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440")))));
}
function ArchiveAppV2() {
  const years = window.ARCHIVE || [];
  const enter = () => {
    const el = document.getElementById('v2archive');
    if (el) window.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement(window.IntroV2, {
    onEnter: enter
  }), /*#__PURE__*/React.createElement(YearNavV2, null), /*#__PURE__*/React.createElement("div", {
    id: "v2archive"
  }, years.map((y, i) => /*#__PURE__*/React.createElement(window.YearBlockV2, {
    key: y.year,
    y: y,
    i: i
  }))), /*#__PURE__*/React.createElement(ColophonV2, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ArchiveAppV2, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive_v2/ArchiveAppV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive_v2/IntroV2.jsx
try { (() => {
const {
  SlashLabel,
  GrainOverlay
} = window.Room505IridescentChromeDesignSystem_087d63;
const GRADE = {
  filter: 'saturate(.28) contrast(1.18) brightness(.5)'
};
function Grade({
  img,
  position = 'center',
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/archive/' + img + ')',
      backgroundSize: 'cover',
      backgroundPosition: position,
      ...GRADE
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--spectrum-indigo)',
      mixBlendMode: 'color',
      opacity: .62
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(10,7,20,.82) 0%,rgba(18,10,36,.34) 38%,rgba(10,7,20,.96) 100%)'
    }
  }), children);
}
const THIN = {
  fontFamily: 'var(--font-display)',
  fontStretch: 'var(--font-display-stretch)',
  fontWeight: 300,
  letterSpacing: '.01em',
  lineHeight: 1.08,
  color: 'var(--lav-050)',
  margin: 0
};
function FlatButton({
  children,
  onClick,
  tone = 'accent'
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 46,
      padding: '0 34px',
      border: 'none',
      borderRadius: 0,
      cursor: 'pointer',
      background: tone === 'accent' ? h ? 'var(--accent-400)' : 'var(--accent-500)' : 'transparent',
      boxShadow: tone === 'accent' ? h ? '0 0 34px -6px var(--accent-400)' : 'none' : 'inset 0 0 0 1px var(--border-soft)',
      color: 'var(--lav-050)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 600,
      letterSpacing: '.02em',
      transition: 'var(--t-hover)'
    }
  }, children);
}
function IntroV2({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(Grade, {
    img: "krakow.png",
    position: "center 62%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      textAlign: 'center',
      padding: '0 var(--gutter)',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "secondary"
  }, "\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u0430\u0440\u0445\u0456\u0432 \u0441\u0442\u0443\u0434\u0456\u0457"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...THIN,
      fontSize: 'clamp(3rem,7vw,6.5rem)',
      marginTop: 'var(--space-5)'
    }
  }, "Room 505"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) auto 0',
      maxWidth: 520,
      fontSize: 'var(--fs-body)',
      color: 'var(--lav-200)',
      lineHeight: 1.7
    }
  }, "\u0412\u0456\u0441\u0456\u043C \u0440\u043E\u043A\u0456\u0432, \u0442\u0440\u0438\u0434\u0446\u044F\u0442\u044C \u0456\u0437 \u0433\u0430\u043A\u043E\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0456\u0432 \u0456 \u043E\u0434\u043D\u0430 \u043A\u0456\u043C\u043D\u0430\u0442\u0430. \u0423\u0441\u0435, \u0449\u043E \u0432\u0441\u0442\u0438\u0433\u043B\u0438 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0437 2015 \u043F\u043E 2022 \u2014 \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456, \u0434\u043B\u044F \u0442\u0438\u0445, \u0445\u0442\u043E \u0446\u0435 \u0440\u043E\u0431\u0438\u0432."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(FlatButton, {
    onClick: onEnter
  }, "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0430\u0440\u0445\u0456\u0432"))), /*#__PURE__*/React.createElement(GrainOverlay, {
    intensity: "poster",
    grainSrc: "../../assets/grain.png"
  }));
}
Object.assign(window, {
  IntroV2,
  GradeV2: Grade,
  ThinV2: THIN,
  FlatButtonV2: FlatButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive_v2/IntroV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive_v2/YearBlockV2.jsx
try { (() => {
const {
  SlashLabel,
  GrainOverlay,
  Icon
} = window.Room505IridescentChromeDesignSystem_087d63;
const CHEVRON = 'polygon(0 0,50% 58px,100% 0,100% 100%,0 100%)';
function Meta({
  p
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-5)'
    }
  }, [['Тип', p.type], ['Замовник', p.client], ['Платформа', p.platform]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "muted"
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--lav-200)'
    }
  }, v))));
}
function Featured({
  y,
  i
}) {
  const Grade = window.GradeV2,
    THIN = window.ThinV2,
    p = y.featured;
  const flip = i % 2 === 1;
  return /*#__PURE__*/React.createElement("section", {
    id: 'v2y' + y.year,
    style: {
      position: 'relative',
      minHeight: 640,
      display: 'grid',
      alignItems: 'center',
      overflow: 'hidden',
      clipPath: CHEVRON,
      marginTop: -1
    }
  }, /*#__PURE__*/React.createElement(Grade, {
    img: p.img
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      width: '100%',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '150px var(--gutter) 110px',
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: flip ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...THIN,
      fontSize: 'clamp(3.5rem,8vw,7rem)',
      opacity: .9
    }
  }, y.year), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "cyan"
  }, "\u041F\u043E\u0434\u0456\u044F \u0440\u043E\u043A\u0443"), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...THIN,
      fontSize: 'var(--fs-h3)',
      marginTop: 'var(--space-3)'
    }
  }, y.event.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      maxWidth: 420,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--lav-200)',
      lineHeight: 1.7
    }
  }, y.event.text), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, y.event.people.join(' · ')))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: flip ? 1 : 2,
      gridRow: 1,
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "secondary"
  }, "\u0413\u043E\u043B\u043E\u0432\u043D\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...THIN,
      fontSize: 'clamp(2rem,3.4vw,3.1rem)',
      marginTop: 'var(--space-4)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-body)',
      color: 'var(--lav-200)',
      lineHeight: 1.75
    }
  }, p.text), p.note && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      paddingLeft: 'var(--space-4)',
      borderLeft: '1px solid color-mix(in oklab,var(--spectrum-cyan) 50%,transparent)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--lav-400)',
      fontStyle: 'italic'
    }
  }, p.note), /*#__PURE__*/React.createElement(Meta, {
    p: p
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, p.people.join(' · ')))), /*#__PURE__*/React.createElement(GrainOverlay, {
    grainSrc: "../../assets/grain.png"
  }));
}
function SmallCard({
  p
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(o => !o),
    style: {
      cursor: 'pointer',
      background: 'var(--ink-850)',
      border: '1px solid ' + (open ? 'var(--border-soft)' : 'var(--border-hairline)'),
      transition: 'var(--t-hover)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 170,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/archive/' + p.img + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'saturate(.28) contrast(1.12) brightness(.58)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--spectrum-indigo)',
      mixBlendMode: 'color',
      opacity: .62
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      ...window.ThinV2,
      fontSize: 'var(--fs-h4)'
    }
  }, p.title), /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'minus' : 'plus',
    size: 16,
    color: "var(--text-muted)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, p.type, " \xB7 ", p.platform), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--lav-200)',
      lineHeight: 1.7
    }
  }, p.text), /*#__PURE__*/React.createElement(Meta, {
    p: p
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, p.people.join(' · ')))));
}
function EmptySlot() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 170,
      display: 'grid',
      placeItems: 'center',
      border: '1px dashed var(--border-hairline)',
      background: 'rgba(255,255,255,.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image-off",
    size: 18,
    color: "var(--lav-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--lav-700)'
    }
  }, "\u0421\u043B\u043E\u0442 \u0432\u0456\u043B\u044C\u043D\u0438\u0439")));
}
function Rest({
  y
}) {
  const slots = (window.ARCHIVE_SLOTS || {})[y.year] || 0;
  if (!y.items.length && !slots) return null;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-sunken)',
      padding: 'var(--space-9) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "muted"
  }, "\u0420\u0435\u0448\u0442\u0430 ", y.year), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-4)'
    }
  }, y.items.map(p => /*#__PURE__*/React.createElement(SmallCard, {
    key: p.id,
    p: p
  })), Array.from({
    length: slots
  }).map((_, i) => /*#__PURE__*/React.createElement(EmptySlot, {
    key: i
  })))));
}
function YearBlockV2({
  y,
  i
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Featured, {
    y: y,
    i: i
  }), /*#__PURE__*/React.createElement(Rest, {
    y: y
  }));
}
Object.assign(window, {
  YearBlockV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive_v2/YearBlockV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive_v2_m2/ArchiveAppV2m2.jsx
try { (() => {
const {
  SlashLabel
} = window.Room505IridescentChromeDesignSystem_087d63;
function YearNavV2M2() {
  const years = (window.ARCHIVE || []).map(y => y.year);
  const [active, setActive] = React.useState(years[0]);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      let cur = years[0];
      years.forEach(y => {
        const el = document.getElementById('v2y' + y);
        if (el && el.getBoundingClientRect().top < 240) cur = y;
      });
      setActive(cur);
      const arc = document.getElementById('v2archive');
      setShown(!!arc && arc.getBoundingClientRect().top <= 0 && window.scrollY > 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', onScroll);
    const raf = requestAnimationFrame(onScroll);
    const t = setTimeout(onScroll, 600);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      height: 64,
      padding: '0 var(--gutter)',
      background: 'color-mix(in oklab,var(--ink-900) 80%,transparent)',
      backdropFilter: 'blur(var(--blur-nav))',
      WebkitBackdropFilter: 'blur(var(--blur-nav))',
      borderBottom: '1px solid var(--border-hairline)',
      overflowX: 'auto',
      opacity: shown ? 1 : 0,
      pointerEvents: shown ? 'auto' : 'none',
      transform: shown ? 'none' : 'translateY(-8px)',
      transition: 'opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginLeft: 'auto'
    }
  }, years.map(y => /*#__PURE__*/React.createElement("a", {
    key: y,
    href: '#v2y' + y,
    onClick: e => {
      e.preventDefault();
      const el = document.getElementById('v2y' + y);
      if (el) window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      });
    },
    style: {
      textDecoration: 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: '.14em',
      color: y === active ? 'var(--lav-050)' : 'var(--text-muted)',
      borderBottom: '1px solid ' + (y === active ? 'var(--spectrum-cyan)' : 'transparent'),
      paddingBottom: 2,
      transition: 'var(--t-hover)'
    }
  }, y))));
}
function ColophonV2M2() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      borderTop: '1px solid var(--border-hairline)',
      padding: 'var(--space-9) var(--gutter) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.ThinV2M2,
      fontSize: 'var(--fs-h2)'
    }
  }, "2015 \u2014 2022"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      maxWidth: 420,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--lav-400)',
      lineHeight: 1.7
    }
  }, "\u0410\u0440\u0445\u0456\u0432 \u0437\u0430\u043A\u0440\u0438\u0442\u0438\u0439 \u0456 \u043D\u0435 \u043E\u043D\u043E\u0432\u043B\u044E\u0454\u0442\u044C\u0441\u044F. \u042F\u043A\u0449\u043E \u0432 \u0442\u0435\u0431\u0435 \u043B\u0438\u0448\u0438\u043B\u0438\u0441\u044F \u043A\u0430\u0434\u0440\u0438, \u0431\u0456\u043B\u0434\u0438 \u0447\u0438 \u0441\u043A\u0440\u0456\u043D\u0448\u043E\u0442\u0438 \u0437 \u0442\u0438\u0445 \u0440\u043E\u043A\u0456\u0432 \u2014 \u043D\u0430\u0434\u0456\u0448\u043B\u0438, \u0434\u043E\u0434\u0430\u043C\u043E \u0443 \u0432\u0456\u043B\u044C\u043D\u0456 \u0441\u043B\u043E\u0442\u0438.")), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'end',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "muted"
  }, "\u041A\u0456\u043C\u043D\u0430\u0442\u0430 505"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u0412\u0456\u0442\u0430\u043B\u0456\u0439 \xB7 \u0406\u043B\u043B\u044F \xB7 \u0421\u0442\u0430\u0441 \xB7 \u0420\u043E\u0431\u0435\u0440\u0442"), /*#__PURE__*/React.createElement("div", null, "\u0406\u0433\u043E\u0440 \xB7 \u0412\u043B\u0430\u0434 \xB7 \u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440")))));
}
function ArchiveAppV2M2() {
  const years = window.ARCHIVE || [];
  const enter = () => {
    const el = document.getElementById('v2archive');
    if (el) window.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement(window.IntroV2M2, {
    onEnter: enter
  }), /*#__PURE__*/React.createElement(YearNavV2M2, null), /*#__PURE__*/React.createElement("div", {
    id: "v2archive"
  }, years.map((y, i) => /*#__PURE__*/React.createElement(window.YearBlockV2M2, {
    key: y.year,
    y: y,
    i: i
  }))), /*#__PURE__*/React.createElement(ColophonV2M2, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ArchiveAppV2M2, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive_v2_m2/ArchiveAppV2m2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive_v2_m2/IntroV2m2.jsx
try { (() => {
const {
  SlashLabel,
  GrainOverlay
} = window.Room505IridescentChromeDesignSystem_087d63;
const GRADE = {
  filter: 'saturate(.28) contrast(1.18) brightness(.5)'
};
function Grade({
  img,
  position = 'center',
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/archive/' + img + ')',
      backgroundSize: 'cover',
      backgroundPosition: position,
      ...GRADE
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--spectrum-indigo)',
      mixBlendMode: 'color',
      opacity: .62
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(10,7,20,.82) 0%,rgba(18,10,36,.34) 38%,rgba(10,7,20,.96) 100%)'
    }
  }), children);
}
const THIN = {
  fontFamily: 'var(--font-display)',
  fontStretch: 'var(--font-display-stretch)',
  fontWeight: 300,
  letterSpacing: '.01em',
  lineHeight: 1.08,
  color: 'var(--lav-050)',
  margin: 0
};
function FlatButton({
  children,
  onClick,
  tone = 'accent'
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 46,
      padding: '0 34px',
      border: 'none',
      borderRadius: 0,
      cursor: 'pointer',
      background: tone === 'accent' ? h ? 'var(--accent-400)' : 'var(--accent-500)' : 'transparent',
      boxShadow: tone === 'accent' ? h ? '0 0 34px -6px var(--accent-400)' : 'none' : 'inset 0 0 0 1px var(--border-soft)',
      color: 'var(--lav-050)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 600,
      letterSpacing: '.02em',
      transition: 'var(--t-hover)'
    }
  }, children);
}
function IntroV2M2({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(Grade, {
    img: "krakow.png",
    position: "center 62%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      textAlign: 'center',
      padding: '0 var(--gutter)',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "secondary"
  }, "\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u0430\u0440\u0445\u0456\u0432 \u0441\u0442\u0443\u0434\u0456\u0457"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...THIN,
      fontSize: 'clamp(3rem,7vw,6.5rem)',
      marginTop: 'var(--space-5)'
    }
  }, "Room 505"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) auto 0',
      maxWidth: 520,
      fontSize: 'var(--fs-body)',
      color: 'var(--lav-200)',
      lineHeight: 1.7
    }
  }, "\u0412\u0456\u0441\u0456\u043C \u0440\u043E\u043A\u0456\u0432, \u0442\u0440\u0438\u0434\u0446\u044F\u0442\u044C \u0456\u0437 \u0433\u0430\u043A\u043E\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0456\u0432 \u0456 \u043E\u0434\u043D\u0430 \u043A\u0456\u043C\u043D\u0430\u0442\u0430. \u0423\u0441\u0435, \u0449\u043E \u0432\u0441\u0442\u0438\u0433\u043B\u0438 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0437 2015 \u043F\u043E 2022 \u2014 \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456, \u0434\u043B\u044F \u0442\u0438\u0445, \u0445\u0442\u043E \u0446\u0435 \u0440\u043E\u0431\u0438\u0432."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(FlatButton, {
    onClick: onEnter
  }, "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0430\u0440\u0445\u0456\u0432"))), /*#__PURE__*/React.createElement(GrainOverlay, {
    intensity: "poster",
    grainSrc: "../../assets/grain.png"
  }));
}
Object.assign(window, {
  IntroV2M2,
  GradeV2M2: Grade,
  ThinV2M2: THIN,
  FlatButtonV2M2: FlatButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive_v2_m2/IntroV2m2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_archive_v2_m2/YearBlockV2m2.jsx
try { (() => {
const {
  SlashLabel,
  GrainOverlay,
  Icon
} = window.Room505IridescentChromeDesignSystem_087d63;
const CHEVRON = 'polygon(0 0,50% 58px,100% 0,100% 100%,0 100%)';
function Meta({
  p
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-5)'
    }
  }, [['Тип', p.type], ['Замовник', p.client], ['Платформа', p.platform]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "muted"
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--lav-200)'
    }
  }, v))));
}
function Featured({
  y,
  i
}) {
  const Grade = window.GradeV2M2,
    THIN = window.ThinV2M2,
    p = y.featured;
  const flip = i % 2 === 1;
  return /*#__PURE__*/React.createElement("section", {
    id: 'v2y' + y.year,
    style: {
      position: 'relative',
      minHeight: 640,
      display: 'grid',
      alignItems: 'center',
      overflow: 'hidden',
      clipPath: CHEVRON,
      marginTop: -1
    }
  }, /*#__PURE__*/React.createElement(Grade, {
    img: p.img
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      width: '100%',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '150px var(--gutter) 110px',
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: flip ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...THIN,
      fontSize: 'clamp(3.5rem,8vw,7rem)',
      opacity: .9
    }
  }, y.year), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "cyan"
  }, "\u041F\u043E\u0434\u0456\u044F \u0440\u043E\u043A\u0443"), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...THIN,
      fontSize: 'var(--fs-h3)',
      marginTop: 'var(--space-3)'
    }
  }, y.event.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      maxWidth: 420,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--lav-200)',
      lineHeight: 1.7
    }
  }, y.event.text), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, y.event.people.join(' · ')))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: flip ? 1 : 2,
      gridRow: 1,
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "secondary"
  }, "\u0413\u043E\u043B\u043E\u0432\u043D\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...THIN,
      fontSize: 'clamp(2rem,3.4vw,3.1rem)',
      marginTop: 'var(--space-4)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-body)',
      color: 'var(--lav-200)',
      lineHeight: 1.75
    }
  }, p.text), p.note && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      paddingLeft: 'var(--space-4)',
      borderLeft: '1px solid color-mix(in oklab,var(--spectrum-cyan) 50%,transparent)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--lav-400)',
      fontStyle: 'italic'
    }
  }, p.note), /*#__PURE__*/React.createElement(Meta, {
    p: p
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, p.people.join(' · ')))), /*#__PURE__*/React.createElement(GrainOverlay, {
    grainSrc: "../../assets/grain.png"
  }));
}
function SmallCard({
  p
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(o => !o),
    style: {
      cursor: 'pointer',
      background: 'var(--ink-850)',
      border: '1px solid ' + (open ? 'var(--border-soft)' : 'var(--border-hairline)'),
      transition: 'var(--t-hover)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 170,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/archive/' + p.img + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'saturate(.28) contrast(1.12) brightness(.58)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--spectrum-indigo)',
      mixBlendMode: 'color',
      opacity: .62
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      ...window.ThinV2M2,
      fontSize: 'var(--fs-h4)'
    }
  }, p.title), /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'minus' : 'plus',
    size: 16,
    color: "var(--text-muted)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, p.type, " \xB7 ", p.platform), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--lav-200)',
      lineHeight: 1.7
    }
  }, p.text), /*#__PURE__*/React.createElement(Meta, {
    p: p
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, p.people.join(' · ')))));
}
function EmptySlot() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 170,
      display: 'grid',
      placeItems: 'center',
      border: '1px dashed var(--border-hairline)',
      background: 'rgba(255,255,255,.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image-off",
    size: 18,
    color: "var(--lav-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--lav-700)'
    }
  }, "\u0421\u043B\u043E\u0442 \u0432\u0456\u043B\u044C\u043D\u0438\u0439")));
}
function Rest({
  y
}) {
  const slots = (window.ARCHIVE_SLOTS || {})[y.year] || 0;
  if (!y.items.length && !slots) return null;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-sunken)',
      padding: 'var(--space-9) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "muted"
  }, "\u0420\u0435\u0448\u0442\u0430 ", y.year), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-4)'
    }
  }, y.items.map(p => /*#__PURE__*/React.createElement(SmallCard, {
    key: p.id,
    p: p
  })), Array.from({
    length: slots
  }).map((_, i) => /*#__PURE__*/React.createElement(EmptySlot, {
    key: i
  })))));
}
function YearBlockV2M2({
  y,
  i
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Featured, {
    y: y,
    i: i
  }), /*#__PURE__*/React.createElement(Rest, {
    y: y
  }));
}
Object.assign(window, {
  YearBlockV2M2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_archive_v2_m2/YearBlockV2m2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_site/Contact.jsx
try { (() => {
const {
  Button,
  Card,
  Input,
  Select,
  Checkbox,
  Switch,
  SlashLabel,
  Toast,
  Dialog,
  GrainOverlay,
  LiquidBlob,
  Icon
} = window.Room505IridescentChromeDesignSystem_087d63;
function Contact() {
  const [sent, setSent] = React.useState(false),
    [open, setOpen] = React.useState(false),
    [nda, setNda] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      position: 'relative',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.9fr) minmax(0,1.1fr)',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SlashLabel, {
    closed: false,
    tone: "cyan"
  }, "Now booking Q3"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--fs-h2)',
      textTransform: 'uppercase'
    }
  }, "Tell us what needs to shine"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      maxWidth: 420,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, "One paragraph is plenty. We answer every brief within a day, and we say no clearly when we are not the right room."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, [['mail', 'hello@room505.studio'], ['map-pin', 'Kyiv · 50.45, 30.52'], ['clock', 'Mon–Thu, 10:00–19:00']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--text-secondary)',
      fontSize: 'var(--fs-body-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 16,
    color: "var(--spectrum-cyan)"
  }), t))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(LiquidBlob, {
    size: 200,
    spectrum: "warm"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    icon: "user",
    placeholder: "Vera Lumen",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    icon: "mail",
    type: "email",
    placeholder: "you@studio.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Scope",
    options: ['Identity', 'Motion', 'Interface', 'All of it']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Budget",
    options: ['10–25k', '25–60k', '60k+']
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Brief",
    multiline: true,
    rows: 4,
    placeholder: "What are we making, and when does it ship?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: nda,
    onChange: e => setNda(e.target.checked),
    label: "Send an NDA first"
  }), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    label: "Add me to the transmission"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    iconRight: "send"
  }, "Send the brief"), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "ghost",
    onClick: () => setOpen(true)
  }, "Or hold a slot"))))), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Brief received",
    onClose: () => setSent(false)
  }, "We reply within a day.")), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    eyebrow: "Booking",
    title: "Hold the room",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setOpen(false);
        setSent(true);
      }
    }, "Confirm hold"))
  }, "We will keep a two-week slot open for 24 hours while you decide."), /*#__PURE__*/React.createElement(GrainOverlay, {
    grainSrc: "../../assets/grain.png"
  }));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_site/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_site/Footer.jsx
try { (() => {
const {
  SlashLabel,
  IconButton,
  Tooltip
} = window.Room505IridescentChromeDesignSystem_087d63;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      padding: 'var(--space-8) var(--gutter) var(--space-7)',
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--bg-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-6)',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-room505-1200.png",
    alt: "Room 505",
    style: {
      height: 44,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, ['work', 'studio', 'contact', 'transmission'].map(l => /*#__PURE__*/React.createElement(SlashLabel, {
    key: l
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Instagram"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "instagram",
    label: "Instagram",
    variant: "ghost"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Vimeo"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "video",
    label: "Vimeo",
    variant: "ghost"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Mail"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "mail",
    label: "Mail",
    variant: "ghost"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: 'var(--space-6) auto 0',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, "/\xA9 1985\u20132026 ROOM 505/"), /*#__PURE__*/React.createElement("span", null, "/BUILT ON IRIDESCENT CHROME/")));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_site/Home.jsx
try { (() => {
const {
  Navbar,
  Button,
  Card,
  Badge,
  Tag,
  SlashLabel,
  ChromeHeading,
  LiquidBlob,
  GrainOverlay,
  Icon
} = window.Room505IridescentChromeDesignSystem_087d63;
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement(SlashLabel, {
    tone: "secondary"
  }, children);
}
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(72px,10vw,140px) var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,.85fr)',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Studio \xB7 Kyiv / Remote"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--font-display-stretch)',
      fontWeight: 900,
      fontSize: 'var(--fs-display)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-display)',
      textTransform: 'uppercase'
    }
  }, "Brands built", /*#__PURE__*/React.createElement("br", null), "like ", /*#__PURE__*/React.createElement("span", {
    className: "ic-spectrum-text"
  }, "polished metal")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      maxWidth: 520,
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--text-secondary)'
    }
  }, "Room 505 is an identity and motion studio. We make surfaces that catch whatever light the room has \u2014 logos, films, product interfaces."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-up-right",
    onClick: onCta
  }, "Book the room"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconLeft: "play"
  }, "Watch the reel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-8)'
    }
  }, [['12', 'Years lit'], ['48', 'Identities'], ['6', 'Awards']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--font-display-stretch)',
      fontWeight: 800,
      fontSize: 'var(--fs-h2)'
    }
  }, n), /*#__PURE__*/React.createElement(SlashLabel, {
    closed: false
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LiquidBlob, {
    size: 340
  }))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-30%',
      left: '50%',
      width: 900,
      height: 900,
      transform: 'translateX(-50%)',
      background: 'radial-gradient(circle,color-mix(in oklab,var(--spectrum-indigo) 14%,transparent) 0%,transparent 58%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(GrainOverlay, {
    grainSrc: "../../assets/grain.png"
  }));
}
const WORK = [{
  t: 'Neon Rooms',
  c: 'Hotel identity',
  tag: 'Identity',
  hue: 'indigo',
  icon: 'building-2'
}, {
  t: 'Chrome Cassette',
  c: 'Album packaging',
  tag: 'Print',
  hue: 'magenta',
  icon: 'disc-3'
}, {
  t: 'Liquid OS',
  c: 'Product interface',
  tag: 'Digital',
  hue: 'cyan',
  icon: 'monitor'
}, {
  t: 'Sunset Freight',
  c: 'Motion identity',
  tag: 'Motion',
  hue: 'none',
  icon: 'truck'
}, {
  t: 'Static Bloom',
  c: 'Campaign film',
  tag: 'Motion',
  hue: 'none',
  icon: 'film'
}, {
  t: 'Room Service',
  c: 'Editorial system',
  tag: 'Print',
  hue: 'none',
  icon: 'newspaper'
}];
function Work({
  onOpen
}) {
  const [filter, setFilter] = React.useState('All');
  const tags = ['All', 'Identity', 'Motion', 'Digital', 'Print'];
  const list = WORK.filter(w => filter === 'All' || w.tag === filter);
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      position: 'relative',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontSize: 'var(--fs-h2)',
      textTransform: 'uppercase'
    }
  }, "Nine rooms, one grade")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: t === filter,
    onClick: () => setFilter(t)
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, list.map(w => /*#__PURE__*/React.createElement(Card, {
    key: w.t,
    interactive: true,
    glow: w.hue,
    padding: "0",
    onClick: () => onOpen(w),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 190,
      display: 'grid',
      placeItems: 'center',
      background: 'radial-gradient(120% 100% at 30% 10%,color-mix(in oklab,var(--spectrum-indigo) 26%,transparent) 0%,transparent 62%),var(--ink-850)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: w.icon,
    size: 40,
    color: "color-mix(in oklab,var(--lav-050) 55%,transparent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, w.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)',
      textTransform: 'uppercase'
    }
  }, w.t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-secondary)'
    }
  }, w.c)))))), /*#__PURE__*/React.createElement(GrainOverlay, {
    grainSrc: "../../assets/grain.png"
  }));
}
function Services() {
  const S = [['Identity', 'Wordmarks, chrome lockups, type systems and the rules that keep them intact.', 'shapes'], ['Motion', 'Title design, product films and transitions with a single easing language.', 'waves'], ['Interface', 'Design systems and product UI that survive contact with engineering.', 'layout-dashboard']];
  return /*#__PURE__*/React.createElement("section", {
    id: "studio",
    style: {
      position: 'relative',
      padding: '0 var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-5)'
    }
  }, S.map(([t, c, i]) => /*#__PURE__*/React.createElement(Card, {
    key: t
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 26,
    color: "var(--spectrum-cyan)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--fs-h4)',
      textTransform: 'uppercase'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, c)))));
}
Object.assign(window, {
  Home: function Home({
    onOpen,
    onCta
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
      onCta: onCta
    }), /*#__PURE__*/React.createElement(Work, {
      onOpen: onOpen
    }), /*#__PURE__*/React.createElement(Services, null));
  },
  HomeWork: Work
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_site/StudioSiteApp.jsx
try { (() => {
const {
  Navbar,
  Button,
  GrainOverlay
} = window.Room505IridescentChromeDesignSystem_087d63;
function StudioSiteApp() {
  const [view, setView] = React.useState('work');
  const [item, setItem] = React.useState(null);
  const go = v => {
    setItem(null);
    setView(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    logoSrc: "../../assets/logo-room505-1200.png",
    items: [{
      value: 'work',
      label: 'Work'
    }, {
      value: 'studio',
      label: 'Studio'
    }, {
      value: 'contact',
      label: 'Contact'
    }],
    active: item ? 'work' : view,
    onNavigate: go,
    cta: "Book the room",
    onCta: () => go('contact')
  }), item ? /*#__PURE__*/React.createElement(window.WorkDetail, {
    item: item,
    onBack: () => setItem(null)
  }) : view === 'contact' ? /*#__PURE__*/React.createElement(window.Contact, null) : /*#__PURE__*/React.createElement(window.Home, {
    onOpen: setItem,
    onCta: () => go('contact')
  }), /*#__PURE__*/React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(StudioSiteApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_site/StudioSiteApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio_site/WorkDetail.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  SlashLabel,
  ChromeHeading,
  GrainOverlay,
  LiquidBlob,
  Icon
} = window.Room505IridescentChromeDesignSystem_087d63;
function WorkDetail({
  item,
  onBack
}) {
  const w = item || {
    t: 'Neon Rooms',
    c: 'Hotel identity',
    tag: 'Identity'
  };
  return /*#__PURE__*/React.createElement("article", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: 'var(--space-8) var(--gutter) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "arrow-left",
    onClick: onBack
  }, "All work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "cyan"
  }, w.tag), /*#__PURE__*/React.createElement(SlashLabel, null, "2025")), /*#__PURE__*/React.createElement(ChromeHeading, {
    as: "h1",
    size: "display",
    style: {
      marginTop: 'var(--space-4)'
    }
  }, w.t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      maxWidth: 620,
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--text-secondary)'
    }
  }, w.c, " \u2014 a full chrome identity: lockup, motion package and a booking interface that reads the same on a 4-metre wall and a 6-inch screen.")), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '-6%',
      top: '8%',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(LiquidBlob, {
    size: 300,
    shape: "ribbon"
  })), /*#__PURE__*/React.createElement(GrainOverlay, {
    grainSrc: "../../assets/grain.png"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 360,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-hairline)',
      background: 'radial-gradient(90% 120% at 20% 0%,color-mix(in oklab,var(--spectrum-indigo) 30%,transparent),transparent 60%),var(--ink-850)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 44,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 14,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(SlashLabel, null, "Key visual \xB7 replace with real artwork"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-5)'
    }
  }, [['Scope', 'Identity, motion, web'], ['Team', '4 people, 11 weeks'], ['Recognition', 'Type Directors Club']].map(([k, v]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement(SlashLabel, null, k), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 'var(--fs-body-sm)'
    }
  }, v)))))));
}
Object.assign(window, {
  WorkDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio_site/WorkDetail.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChromeHeading = __ds_scope.ChromeHeading;

__ds_ns.GrainOverlay = __ds_scope.GrainOverlay;

__ds_ns.LiquidBlob = __ds_scope.LiquidBlob;

__ds_ns.NeonGrid = __ds_scope.NeonGrid;

__ds_ns.SlashLabel = __ds_scope.SlashLabel;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
