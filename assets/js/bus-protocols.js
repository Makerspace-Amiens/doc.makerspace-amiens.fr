/*!
 * bus-protocols.js — Animations pédagogiques des bus série : UART, I²C, SPI, CAN
 * MakerSpace UniLaSalle Amiens — Web Component autonome, sans dépendance.
 *
 * Utilisation :
 *   charger ce fichier une fois (balise script avec src="/assets/js/bus-protocols.js" defer), puis :
 *   <bus-protocols></bus-protocols>                       → les 4 bus
 *   <bus-protocols protocols="i2c"></bus-protocols>       → un seul bus
 *   <bus-protocols protocols="uart,spi" summary></bus-protocols>  → + tableau comparatif
 *
 * Attributs :
 *   protocols  liste parmi uart, i2c, spi, can (défaut : les 4)
 *   summary    ajoute un tableau comparatif sous les animations
 *   theme      auto (défaut : suit data-theme / classe "dark" de la page) | light | dark
 *   speed      vitesse initiale (0.5, 1, 2…)  — défaut 1
 *   autoplay   "false" pour démarrer en pause (automatique si l'OS demande moins d'animations)
 */
(() => {
  'use strict';
  const TAG = 'bus-protocols';
  if (typeof window === 'undefined' || customElements.get(TAG)) return;

  const W = 800; // largeur logique du dessin
  const FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace';

  // ───────────────────────── utilitaires ─────────────────────────
  const clamp01 = u => (u < 0 ? 0 : u > 1 ? 1 : u);
  const lerp = (a, b, u) => a + (b - a) * u;
  const seg = (t, t0, t1) => clamp01((t - t0) / (t1 - t0));
  const ease = u => (u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2);
  const fade = u => Math.min(seg(u, 0, 0.06), 1 - seg(u, 0.94, 1));
  const hex = (n, d = 2) => '0x' + n.toString(16).toUpperCase().padStart(d, '0');
  const bitsOf = (n, len) => Array.from({ length: len }, (_, i) => (n >> (len - 1 - i)) & 1); // MSB d'abord
  const lsbFirst = n => Array.from({ length: 8 }, (_, i) => (n >> i) & 1);

  function along(pts, u) {
    const lens = [];
    let L = 0;
    for (let i = 1; i < pts.length; i++) {
      const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
      lens.push(l);
      L += l;
    }
    let d = clamp01(u) * L;
    for (let i = 1; i < pts.length; i++) {
      if (d <= lens[i - 1]) {
        const k = lens[i - 1] ? d / lens[i - 1] : 0;
        return [lerp(pts[i - 1][0], pts[i][0], k), lerp(pts[i - 1][1], pts[i][1], k)];
      }
      d -= lens[i - 1];
    }
    return pts[pts.length - 1];
  }

  // ───────────────────────── palettes ─────────────────────────
  const PAL = {
    light: {
      ink: '#1f2430', muted: '#6b7280', wire: '#2b2f3a', faint: '#c9ced8', paper: '#ffffff',
      hot: '#d63b3b', ok: '#23914a', ko: '#c43d3d',
      uart: { main: '#3f7fd6', fill: '#e3eefc', soft: '#f5f9ff' },
      i2c: { main: '#7d62cc', fill: '#ece6fb', soft: '#f9f7fe' },
      spi: { main: '#c9841a', fill: '#fcecd2', soft: '#fffaf2' },
      can: { main: '#2f9353', fill: '#dcf2e4', soft: '#f4fbf6' },
    },
    dark: {
      ink: '#e8eaf0', muted: '#9aa3b2', wire: '#cfd5e1', faint: '#4a5263', paper: '#1b1f27',
      hot: '#ff6b6b', ok: '#4fd17f', ko: '#ff7a7a',
      uart: { main: '#6ea8ff', fill: '#1f3150', soft: '#151c28' },
      i2c: { main: '#a98cff', fill: '#2d2547', soft: '#1a1726' },
      spi: { main: '#f2b14a', fill: '#3d2e12', soft: '#211b10' },
      can: { main: '#5ccf86', fill: '#173a25', soft: '#121d16' },
    },
  };

  // ───────────────────────── primitives de dessin ─────────────────────────
  class G {
    constructor(c, P, A) { this.c = c; this.P = P; this.A = A; }
    font(size, weight = 600, mono = false) { this.c.font = `${weight} ${size}px ${mono ? MONO : FONT}`; }
    width(s, size, weight = 600, mono = false) { this.font(size, weight, mono); return this.c.measureText(s).width; }
    rr(x, y, w, h, r) {
      const c = this.c;
      r = Math.min(r, w / 2, h / 2);
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    }
    box(x, y, w, h, o = {}) {
      const { fill = this.A.fill, stroke = this.A.main, lw = 2, r = 10, alpha = 1 } = o;
      const c = this.c;
      c.save();
      c.globalAlpha *= alpha;
      this.rr(x, y, w, h, r);
      if (fill) { c.fillStyle = fill; c.fill(); }
      if (stroke && lw) { c.lineWidth = lw; c.strokeStyle = stroke; c.stroke(); }
      c.restore();
    }
    text(s, x, y, o = {}) {
      const { size = 14, weight = 600, color = this.P.ink, align = 'center', base = 'middle', mono = false, alpha = 1 } = o;
      const c = this.c;
      c.save();
      c.globalAlpha *= alpha;
      this.font(size, weight, mono);
      c.fillStyle = color;
      c.textAlign = align;
      c.textBaseline = base;
      c.fillText(s, x, y);
      c.restore();
    }
    line(x1, y1, x2, y2, o) { this.poly([[x1, y1], [x2, y2]], o); }
    poly(pts, o = {}) {
      const { color = this.P.wire, lw = 2, dash = null, offset = 0, alpha = 1 } = o;
      const c = this.c;
      c.save();
      c.globalAlpha *= alpha;
      c.strokeStyle = color;
      c.lineWidth = lw;
      c.lineJoin = 'round';
      c.lineCap = dash ? 'butt' : 'round';
      if (dash) { c.setLineDash(dash); c.lineDashOffset = offset; }
      c.beginPath();
      pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y)));
      c.stroke();
      c.restore();
    }
    arrow(x, y, dir, o = {}) {
      const { color = this.P.wire, size = 8, alpha = 1 } = o;
      const [dx, dy] = { r: [1, 0], l: [-1, 0], u: [0, -1], d: [0, 1] }[dir];
      const px = -dy, py = dx, c = this.c;
      c.save();
      c.globalAlpha *= alpha;
      c.fillStyle = color;
      c.beginPath();
      c.moveTo(x, y);
      c.lineTo(x - dx * size * 1.4 + px * size * 0.75, y - dy * size * 1.4 + py * size * 0.75);
      c.lineTo(x - dx * size * 1.4 - px * size * 0.75, y - dy * size * 1.4 - py * size * 0.75);
      c.closePath();
      c.fill();
      c.restore();
    }
    dot(x, y, o = {}) {
      const { color = this.P.wire, r = 3.5, alpha = 1 } = o;
      const c = this.c;
      c.save();
      c.globalAlpha *= alpha;
      c.fillStyle = color;
      c.beginPath();
      c.arc(x, y, r, 0, Math.PI * 2);
      c.fill();
      c.restore();
    }
    /** Étiquette « paquet » : segs = 'texte' ou [{k:'ADDR', v:'0x48'}, …] */
    chip(cx, cy, segs, o = {}) {
      const { stroke = this.A.main, color = this.P.ink, alpha = 1, lw = 1.8 } = o;
      if (alpha <= 0) return 0;
      if (typeof segs === 'string') segs = [{ v: segs }];
      const hasK = segs.some(s => s.k);
      const h = hasK ? 36 : 26;
      const ws = segs.map(s => Math.max(this.width(s.v, 14, 700, true), s.k ? this.width(s.k, 9.5, 700) : 0) + 16);
      const w = ws.reduce((a, b) => a + b, 0);
      let x = cx - w / 2;
      const y = cy - h / 2;
      this.box(x, y, w, h, { fill: this.P.paper, stroke, lw, r: 7, alpha });
      segs.forEach((s, i) => {
        const mx = x + ws[i] / 2;
        if (s.k) {
          this.text(s.k, mx, y + 10, { size: 9.5, weight: 700, color: this.P.muted, alpha });
          this.text(s.v, mx, y + 24, { size: 14, weight: 700, mono: true, color, alpha });
        } else {
          this.text(s.v, mx, cy + 0.5, { size: 14, weight: 700, mono: true, color, alpha });
        }
        if (i < segs.length - 1) this.line(x + ws[i], y + 5, x + ws[i], y + h - 5, { color: this.P.faint, lw: 1, alpha });
        x += ws[i];
      });
      return w;
    }
    tag(cx, cy, s, o = {}) {
      const { color = this.A.main, alpha = 1, size = 11.5 } = o;
      const w = this.width(s, size, 700) + 18, h = size + 9;
      this.box(cx - w / 2, cy - h / 2, w, h, { fill: this.P.paper, stroke: color, lw: 1.5, r: h / 2, alpha });
      this.text(s, cx, cy + 0.5, { size, weight: 700, color, alpha });
      return w;
    }
  }

  // ════════════════════════════ UART ════════════════════════════
  function uartFrame(g, byte, y, lead, dir) {
    const { P, A, c } = g;
    const bw = 30, X0 = 170, X1 = 624, lo = y + 16;
    const bits = [0, ...lsbFirst(byte), 1]; // START, données LSB d'abord, STOP
    const cells = bits.map((b, i) => ({ b, i, x: dir > 0 ? lead - (i + 1) * bw : lead + i * bw }));
    const fl = Math.min(...cells.map(k => k.x)), fr = fl + bits.length * bw;
    if (fl > X0) g.line(X0, y, Math.min(fl, X1), y, { lw: 2.5 });
    if (fr < X1) g.line(Math.max(fr, X0), y, X1, y, { lw: 2.5 });
    c.save();
    c.beginPath();
    c.rect(X0, 0, X1 - X0, 400);
    c.clip();
    const sorted = [...cells].sort((a, b) => a.x - b.x);
    for (const k of sorted) {
      const kind = k.i === 0 ? 'start' : k.i === bits.length - 1 ? 'stop' : 'data';
      const col = kind === 'start' ? P.hot : kind === 'stop' ? P.ok : A.main;
      g.box(k.x + 3, y - 30, bw - 6, 20, { fill: kind === 'data' ? A.fill : P.paper, stroke: col, lw: 1.3, r: 4 });
      g.text(String(k.b), k.x + bw / 2, y - 19.5, { size: 12, weight: 700, mono: true, color: kind === 'data' ? P.ink : col });
    }
    c.save();
    c.strokeStyle = A.main;
    c.lineWidth = 3;
    c.lineJoin = 'miter';
    c.beginPath();
    c.moveTo(fl, y);
    let py = y;
    for (const k of sorted) {
      const ly = k.b ? y : lo;
      c.lineTo(k.x, py);
      c.lineTo(k.x, ly);
      c.lineTo(k.x + bw, ly);
      py = ly;
    }
    c.lineTo(fr, py);
    c.lineTo(fr, y);
    c.stroke();
    c.restore();
    const cx = i => cells[i].x + bw / 2;
    const ly = y - 40;
    g.text('START', cx(0), ly, { size: 10, weight: 700, color: P.hot });
    g.text('STOP', cx(bits.length - 1), ly, { size: 10, weight: 700, color: P.ok });
    g.text(`DATA ${hex(byte)} '${String.fromCharCode(byte)}' · LSB d'abord`, (cx(1) + cx(8)) / 2, ly, { size: 10, weight: 700, color: P.muted });
    c.restore();
  }

  function uartDevice(g, x, name, status, flash, side) {
    const { P, A } = g;
    g.box(x, 40, 150, 150, { stroke: flash ? P.ok : A.main, lw: flash ? 3.5 : 2 });
    g.text(name, x + 75, 106, { size: 16, weight: 700 });
    if (status) g.text(status, x + 75, 130, { size: 12, weight: 700, mono: true, color: flash ? P.ok : A.main });
    if (side === 'right') {
      g.text('TX', x + 140, 85, { align: 'right', size: 13, weight: 700 });
      g.text('RX', x + 140, 150, { align: 'right', size: 13, weight: 700 });
    } else {
      g.text('RX', x + 10, 85, { align: 'left', size: 13, weight: 700 });
      g.text('TX', x + 10, 150, { align: 'left', size: 13, weight: 700 });
    }
  }

  const UART = {
    key: 'uart',
    title: 'UART',
    sub: 'Universal Asynchronous Receiver-Transmitter · liaison point à point',
    height: 235,
    duration: 10000,
    phases: [
      { at: 0, text: "Au repos, une ligne UART reste à l'état haut (1). Il n'y a pas d'horloge partagée : les deux appareils doivent être réglés sur la même vitesse (ici 9600 bauds, format 8N1)." },
      { at: 800, text: "Device 1 envoie 'A' (0x41) sur sa broche TX : un bit START à 0 pour réveiller le récepteur, les 8 bits de données en commençant par le bit de poids faible (LSB), puis un bit STOP à 1." },
      { at: 4300, text: "Device 2 reçoit l'octet sur sa broche RX. Le câblage est croisé : le TX de l'un va sur le RX de l'autre (plus une masse commune)." },
      { at: 5000, text: "Chaque sens a son propre fil : la liaison est full-duplex. Device 2 répond 'B' (0x42) sur son TX, sans attendre ni gêner l'autre sens." },
      { at: 8500, text: "Point à point, sans adresse : très simple (consoles de debug, GPS, modules Bluetooth…), mais limité à deux appareils par liaison." },
    ],
    draw(g, t) {
      const { P } = g;
      g.text('9600 bauds · format 8N1 (8 bits de données, pas de parité, 1 bit de stop)', 400, 18, { size: 11.5, weight: 500, color: P.muted });
      g.poly([[95, 190], [95, 210], [705, 210], [705, 190]], { color: P.faint, lw: 1.5, dash: [5, 4] });
      g.text('masse commune (GND)', 400, 224, { size: 11, weight: 500, color: P.muted });

      const flash = t0 => t >= t0 && t < t0 + 700;
      const st1 = t >= 8500 ? "reçu : 'B'" : t >= 800 && t < 4300 ? "émet 'A' →" : '';
      const st2 = t >= 5000 && t < 8500 ? "← émet 'B'" : t >= 4300 ? "reçu : 'A'" : '';
      uartDevice(g, 20, 'Device 1', st1, flash(8500), 'right');
      uartDevice(g, 630, 'Device 2', st2, flash(4300), 'left');

      if (t >= 800 && t < 4300) uartFrame(g, 0x41, 85, lerp(170, 624 + 300, seg(t, 800, 4300)), +1);
      else g.line(170, 85, 624, 85, { lw: 2.5 });
      if (t >= 5000 && t < 8500) uartFrame(g, 0x42, 150, lerp(624, 170 - 300, seg(t, 5000, 8500)), -1);
      else g.line(172, 150, 624, 150, { lw: 2.5 });
      g.arrow(630, 85, 'r');
      g.arrow(170, 150, 'l');
    },
  };

  // ════════════════════════════ I²C ════════════════════════════
  const I2C_SL = [{ cx: 290, a: 0x3C }, { cx: 490, a: 0x48 }, { cx: 690, a: 0x68 }];
  const I2C = {
    key: 'i2c',
    title: 'I²C',
    sub: 'Inter-Integrated Circuit · bus adressé, un maître et plusieurs esclaves',
    height: 250,
    duration: 11000,
    phases: [
      { at: 0, text: "Bus partagé à 2 fils : SCL (l'horloge, imposée par le maître) et SDA (les données). Chaque esclave possède une adresse unique sur 7 bits." },
      { at: 800, text: "Condition START : le maître fait passer SDA à 0 pendant que SCL est à 1. Tous les esclaves se mettent à l'écoute." },
      { at: 1600, text: "Le maître envoie l'adresse 0x48 suivie du bit R/W (W = écriture). Tous les esclaves reçoivent cet octet et le comparent à leur propre adresse." },
      { at: 4000, text: "Seul l'esclave 0x48 se reconnaît : il répond ACK en tirant SDA à 0 pendant le 9ᵉ coup d'horloge. Les autres ignorent la suite de l'échange." },
      { at: 5000, text: "Le maître envoie l'octet de données 0x60. Après chaque octet, le récepteur doit acquitter." },
      { at: 7200, text: "L'esclave 0x48 acquitte la donnée (ACK). Sans ACK (NACK), le maître sait que quelque chose s'est mal passé." },
      { at: 8200, text: "Condition STOP : SDA remonte à 1 pendant que SCL est à 1. Le bus est libéré." },
      { at: 9000, text: "Une centaine d'adresses possibles sur seulement 2 fils (capteurs, écrans OLED, IMU…), au prix d'une vitesse modeste : 100 kHz à 1 MHz en général." },
    ],
    draw(g, t) {
      const { P, A } = g;
      const active = t >= 800 && t < 9000;
      const TARGET = 0x48;
      const clkCol = active ? A.main : P.wire;
      const off = active ? -t * 0.05 : 0;

      g.line(170, 45, 782, 45, { dash: [7, 5], offset: off, color: clkCol, lw: 2 });
      g.text('SCL', 782, 30, { align: 'right', size: 13, weight: 700 });
      g.line(170, 90, 782, 90, { lw: 2.5 });
      g.text('SDA', 782, 75, { align: 'right', size: 13, weight: 700 });

      const chipX = lerp(228, 840, seg(t, 1600, 4000));
      for (const s of I2C_SL) {
        const xs = s.cx - 35, xd = s.cx + 35;
        g.line(xs, 45, xs, 152, { dash: [5, 4], offset: off, color: clkCol, lw: 1.6 });
        g.arrow(xs, 160, 'd', { color: clkCol, size: 6 });
        g.dot(xs, 45);
        g.line(xd, 90, xd, 160, { lw: 2 });
        g.dot(xd, 90);
        const seen = t >= 1600 && t < 9000 && (t >= 4000 || chipX >= xd);
        const me = s.a === TARGET;
        let stroke = A.main, lw = 2, alpha = 1;
        if (seen && me) { stroke = P.hot; lw = 3.5; } else if (seen) alpha = 0.45;
        g.box(s.cx - 70, 160, 140, 40, { stroke, lw, alpha });
        g.text(`Slave ${hex(s.a)}`, s.cx, 180.5, { size: 15, weight: 700, mono: true, alpha });
        if (seen) g.tag(s.cx, 215, me ? "✓ c'est mon adresse" : '✗ pas pour moi', { color: me ? P.hot : P.muted });
      }

      g.box(20, 30, 150, 75);
      g.text('Master', 95, 58, { size: 17, weight: 700 });
      const st = t < 800 ? 'au repos' : t < 1600 ? 'START' : t < 4000 ? '→ adresse 0x48 + W' : t < 5000 ? 'attend ACK…'
        : t < 7200 ? '→ donnée 0x60' : t < 8200 ? 'attend ACK…' : t < 9000 ? 'STOP' : 'au repos';
      g.text(st, 95, 84, { size: 11.5, weight: 700, color: A.main });
      if (active) g.poly([[184, 33], [190, 33], [190, 23], [197, 23], [197, 33], [204, 33], [204, 23], [211, 23], [211, 33], [217, 33]], { color: A.main, lw: 2 });

      if (t >= 800 && t < 1600) g.tag(95, 125, 'START : SDA ↓ quand SCL = 1');
      if (t >= 8200 && t < 9000) g.tag(95, 125, 'STOP : SDA ↑ quand SCL = 1');

      if (t >= 1600 && t < 4000) g.chip(chipX, 90, [{ k: 'ADDR', v: '0x48' }, { k: 'R/W', v: 'W' }], { alpha: 1 - seg(chipX, 740, 800) });
      if (t >= 4000 && t < 5000) g.chip(lerp(525, 220, ease(seg(t, 4000, 4900))), 90, 'ACK', { stroke: P.ok, color: P.ok, alpha: 1 - seg(t, 4900, 5000) });
      if (t >= 5000 && t < 7200) g.chip(lerp(228, 525, ease(seg(t, 5000, 6900))), 90, [{ k: 'DATA', v: '0x60' }], { alpha: 1 - seg(t, 6900, 7200) });
      if (t >= 7200 && t < 8200) g.chip(lerp(525, 220, ease(seg(t, 7200, 8100))), 90, 'ACK', { stroke: P.ok, color: P.ok, alpha: 1 - seg(t, 8100, 8200) });

      g.text('SCL : horloge fournie par le maître · SDA : données dans les deux sens · lignes open-drain + résistances de pull-up', 400, 241, { size: 10.5, weight: 500, color: P.muted });
    },
  };

  // ════════════════════════════ SPI ════════════════════════════
  const SPI_SL = [
    { x: 290, name: 'Slave 1', sclk: 320, mosi: 370, miso: 420, tx: 0xA5, rx: 0x7E, t0: 800 },
    { x: 590, name: 'Slave 2', sclk: 620, mosi: 670, miso: 720, tx: 0x3C, rx: 0xC3, t0: 5800 },
  ];
  const SPI = {
    key: 'spi',
    title: 'SPI',
    sub: 'Serial Peripheral Interface · un maître, sélection des esclaves par fil CS',
    height: 305,
    duration: 12000,
    phases: [
      { at: 0, text: "4 types de fils : SCLK (horloge du maître), MOSI (maître → esclave), MISO (esclave → maître) et un fil CS (Chip Select) par esclave. Au repos, tous les CS sont à 1." },
      { at: 800, text: "Le maître choisit Slave 1 en mettant CS1 à 0. Pas d'adresse : c'est le câblage qui sélectionne le composant." },
      { at: 1800, text: "À chaque coup d'horloge, un bit part sur MOSI et un bit revient sur MISO en même temps : l'échange est full-duplex (0xA5 envoyé, 0x7E reçu, MSB d'abord)." },
      { at: 5000, text: "CS1 remonte à 1 : fin de l'échange. Un esclave non sélectionné laisse sa sortie MISO en haute impédance pour ne pas perturber le bus." },
      { at: 5800, text: "Même chose avec Slave 2 via CS2. SCLK, MOSI et MISO sont partagés : seul le fil CS change." },
      { at: 10000, text: "Très rapide (plusieurs MHz, voire des dizaines : écrans, cartes SD, mémoires flash), mais il faut un fil CS de plus par esclave." },
    ],
    draw(g, t) {
      const { P, A } = g;
      const st = SPI_SL.map(s => {
        const r = t - s.t0;
        return { sel: r >= 0 && r < 4200, x: r >= 1000 && r < 3900, u: seg(r, 1000, 3900), done: r >= 3900 };
      });
      const clk = st.some(s => s.x);
      const clkCol = clk ? A.main : P.wire;
      const off = clk ? -t * 0.05 : 0;

      g.box(20, 20, 150, 240);
      g.text('Master', 62, 140, { size: 17, weight: 700 });
      [['SCLK', 40], ['MOSI', 80], ['MISO', 120], ['CS1', 185], ['CS2', 230]].forEach(([n, y]) =>
        g.text(n, 160, y, { align: 'right', size: 13, weight: 700, mono: true }));

      g.line(170, 40, 620, 40, { dash: [7, 5], offset: off, color: clkCol, lw: 2 });
      g.line(170, 80, 670, 80, { lw: 2.5 });
      g.line(720, 120, 178, 120, { lw: 2.5 });
      g.arrow(171, 120, 'l');
      for (const s of SPI_SL) {
        g.line(s.sclk, 40, s.sclk, 152, { dash: [5, 4], offset: off, color: clkCol, lw: 1.6 });
        g.arrow(s.sclk, 160, 'd', { color: clkCol, size: 6 });
        g.dot(s.sclk, 40);
        g.line(s.mosi, 80, s.mosi, 152, { lw: 2 });
        g.arrow(s.mosi, 160, 'd', { size: 6 });
        g.dot(s.mosi, 80);
        g.line(s.miso, 160, s.miso, 120, { lw: 2 });
        g.dot(s.miso, 120);
      }

      const c1 = st[0].sel, c2 = st[1].sel;
      g.line(170, 185, 282, 185, { color: c1 ? P.hot : P.wire, lw: c1 ? 3 : 2 });
      g.arrow(290, 185, 'r', { color: c1 ? P.hot : P.wire });
      g.poly([[170, 230], [560, 230], [560, 185], [582, 185]], { color: c2 ? P.hot : P.wire, lw: c2 ? 3 : 2 });
      g.arrow(590, 185, 'r', { color: c2 ? P.hot : P.wire });

      SPI_SL.forEach((s, i) => {
        const S = st[i];
        const alpha = !S.sel && st[1 - i].sel ? 0.5 : 1;
        g.box(s.x, 160, 160, 50, { stroke: S.sel ? P.hot : A.main, lw: S.sel ? 3.5 : 2, alpha });
        g.text(s.name, s.x + 80, 185.5, { size: 16, weight: 700, alpha });
      });
      if (c1) g.tag(230, 163, 'CS1 = 0 → actif', { color: P.hot });
      if (c2) g.tag(230, 208, 'CS2 = 0 → actif', { color: P.hot });

      SPI_SL.forEach((s, i) => {
        const S = st[i];
        if (!S.x) return;
        const a = fade(S.u);
        const pm = along([[205, 80], [s.mosi, 80], [s.mosi, 138]], S.u);
        g.chip(pm[0], pm[1], hex(s.tx), { alpha: a });
        const pr = along([[s.miso, 140], [s.miso, 120], [210, 120]], S.u);
        g.chip(pr[0], pr[1], hex(s.rx), { alpha: a, stroke: P.ok });
      });

      // registres à décalage : progression bit à bit
      const cur = t < 5800 ? 0 : 1, s = SPI_SL[cur], S = st[cur];
      const n = S.done ? 8 : S.x ? Math.floor(S.u * 8) : 0;
      [['MOSI', 'maître → esclave', s.tx, A.main], ['MISO', 'esclave → maître', s.rx, P.ok]].forEach(([p, d, v, col], ri) => {
        const y = 262 + ri * 26;
        g.text(p, 190, y, { align: 'left', size: 12.5, weight: 700, mono: true });
        g.text(d, 240, y, { align: 'left', size: 11.5, weight: 500, color: P.muted });
        bitsOf(v, 8).forEach((b, j) => {
          const x = 400 + j * 26, shown = j < n, curb = S.x && j === n;
          g.box(x, y - 10, 22, 20, { fill: shown ? A.fill : P.paper, stroke: curb ? col : P.faint, lw: curb ? 2 : 1, r: 4 });
          if (shown) g.text(String(b), x + 11, y + 0.5, { size: 12, weight: 700, mono: true });
        });
        if (n === 8) g.text('= ' + hex(v), 616, y, { align: 'left', size: 12.5, weight: 700, mono: true, color: col });
      });
      g.text(s.name, 780, 262, { align: 'right', size: 12, weight: 700, color: P.muted });
      g.text(S.x ? `bit ${n + 1}/8` : n === 8 ? '8/8 ✓' : '—', 780, 288, { align: 'right', size: 12, weight: 700, mono: true, color: A.main });
    },
  };

  // ════════════════════════════ CAN ════════════════════════════
  const CAN_N = [
    { x: 40, name: 'Node 1', lo: 0x300, hi: 0x3FF },
    { x: 300, name: 'Node 2', lo: 0x100, hi: 0x1FF },
    { x: 560, name: 'Node 3', lo: 0x200, hi: 0x2FF },
  ];
  const CAN_F = [
    { n: 'SOF', w: 40, b: 1, d: 'Start Of Frame, début de trame' },
    { n: 'ID 0x123', w: 120, b: 11, d: 'identifiant : nature et priorité du message' },
    { n: 'RTR', w: 44, b: 1, d: '0 = trame de données' },
    { n: 'IDE r0', w: 62, b: 2, d: 'format standard (ID sur 11 bits)' },
    { n: 'DLC = 2', w: 66, b: 4, d: "nombre d'octets de données" },
    { n: 'DATA 0F A0', w: 130, b: 16, d: '0 à 8 octets de données' },
    { n: 'CRC', w: 110, b: 16, d: "code de détection d'erreurs" },
    { n: 'ACK', w: 62, b: 2, d: 'acquittement par tous les récepteurs' },
    { n: 'EOF', w: 86, b: 7, d: 'End Of Frame, fin de trame' },
  ];
  const CAN_PAT = [0, ...bitsOf(0x123, 11), 0, 0, 0, 0, 0, 1, 0, ...bitsOf(0x0F, 8), ...bitsOf(0xA0, 8),
    1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1];
  const CAN_BITS_A = 51; // SOF → CRC
  const CAN_MSB = 3200 / CAN_BITS_A;
  const CAN_V = 0.6; // px/ms : vitesse de propagation (stylisée)

  function canField(t) {
    if (t < 1800) return -1;
    if (t < 5000) {
      let b = (t - 1800) / CAN_MSB;
      for (let i = 0; i < 7; i++) { if (b < CAN_F[i].b) return i; b -= CAN_F[i].b; }
      return 6;
    }
    if (t < 6200) return 7;
    if (t < 6800) return 8;
    return 9;
  }

  function canBus(g, levelAt) {
    const { A } = g;
    let runStart = null;
    const runs = [];
    for (let x = 30; x <= 770; x += 2) {
      const dom = levelAt(x) === 0;
      if (dom && runStart === null) runStart = x;
      if (!dom && runStart !== null) { runs.push([runStart, x]); runStart = null; }
    }
    if (runStart !== null) runs.push([runStart, 770]);
    for (const [a, b] of runs) {
      g.c.save();
      g.c.globalAlpha = 0.12;
      g.c.fillStyle = A.main;
      g.c.fillRect(a, 42, b - a, 46);
      g.c.restore();
      g.poly([[a, 50], [a, 42], [b, 42], [b, 50]], { color: A.main, lw: 2.5 });
      g.poly([[a, 80], [a, 88], [b, 88], [b, 80]], { color: A.main, lw: 2.5 });
    }
  }

  function canNode(g, n, o = {}) {
    const { P, A } = g;
    const { stroke = A.main, lw = 2, alpha = 1, tag = null, tagc = A.main } = o;
    g.line(n.x + 80, 50, n.x + 80, 140, { lw: 2, alpha });
    g.line(n.x + 120, 80, n.x + 120, 140, { lw: 2, alpha });
    g.dot(n.x + 80, 50);
    g.dot(n.x + 120, 80);
    g.box(n.x, 140, 200, 55, { stroke, lw, alpha });
    g.text(n.name, n.x + 100, 159, { size: 16, weight: 700, alpha });
    g.text(`accepte ${hex(n.lo, 3)}–${hex(n.hi, 3)}`, n.x + 100, 181, { size: 12, weight: 600, mono: true, color: P.muted, alpha });
    if (tag) g.tag(n.x + 168, 140, tag, { color: tagc });
  }

  function canFrameBar(g, t) {
    const { P, A } = g;
    g.text("Trame CAN standard (largeurs non à l'échelle)", 40, 236, { align: 'left', size: 12, weight: 700, color: P.muted });
    const cur = canField(t);
    let x = 40;
    const y = 250, h = 30;
    CAN_F.forEach((f, i) => {
      const s = i < cur ? 'past' : i === cur ? 'cur' : 'fut';
      g.box(x + 1, y, f.w - 2, h, { fill: s === 'fut' ? P.paper : A.fill, stroke: s === 'cur' ? A.main : P.faint, lw: s === 'cur' ? 2.5 : 1, r: 5 });
      g.text(f.n, x + f.w / 2, y + h / 2 + 0.5, { size: 11.5, weight: 700, mono: true, color: s === 'fut' ? P.muted : P.ink });
      x += f.w;
    });
    if (cur >= 0 && cur < CAN_F.length) {
      const f = CAN_F[cur];
      g.text(`${f.n.split(' ')[0]} : ${f.d}`, 40, 300, { align: 'left', size: 12.5, weight: 700, color: A.main });
    }
  }

  function canArbTable(g, t, k) {
    const { P, A } = g;
    const x0 = 215, cw = 32, ys = [262, 287, 312];
    g.text("Arbitrage sur l'ID, bit 10 → bit 0", 40, 236, { align: 'left', size: 12, weight: 700, color: P.muted });
    g.text('0 = dominant · 1 = récessif', 760, 236, { align: 'right', size: 11, weight: 600, color: P.muted });
    const a = bitsOf(0x123, 11), b = bitsOf(0x2A0, 11);
    [['Node 1 · 0x123'], ['Node 3 · 0x2A0'], ['Bus (relu)']].forEach(([lab], r) => {
      const y = ys[r];
      g.text(lab, 40, y, { align: 'left', size: 12.5, weight: 700, alpha: r === 1 && k >= 2 ? 0.55 : 1 });
      for (let j = 0; j < 11; j++) {
        const x = x0 + j * cw;
        let v = null, col = P.ink, stroke = P.faint;
        if (j < k) {
          if (r === 0) v = a[j];
          else if (r === 1) v = j <= 1 ? b[j] : null;
          else v = j <= 1 ? a[j] & b[j] : a[j];
        }
        if (j === 1 && j < k && r >= 1) { stroke = P.ko; if (r === 1) col = P.ko; }
        g.box(x, y - 10, cw - 6, 20, { fill: v !== null ? A.fill : P.paper, stroke, lw: stroke === P.faint ? 1 : 2, r: 4 });
        const s = v !== null ? String(v) : r === 1 && j > 1 && j < k ? '·' : '';
        if (s) g.text(s, x + (cw - 6) / 2, y + 0.5, { size: 12, weight: 700, mono: true, color: col });
      }
    });
    if (k >= 2) g.text('✗ perd au 2ᵉ bit', x0 + 11 * cw + 10, ys[1], { align: 'left', size: 12, weight: 700, color: P.ko });
    if (t >= 13000) g.text('✓ gagne le bus', x0 + 11 * cw + 10, ys[0], { align: 'left', size: 12, weight: 700, color: P.ok });
  }

  const CAN = {
    key: 'can',
    title: 'CAN',
    sub: 'Controller Area Network · bus différentiel multi-maître, messages identifiés',
    height: 330,
    duration: 16000,
    phases: [
      { at: 0, text: "Bus différentiel à 2 fils (CAN H / CAN L), terminé par une résistance de 120 Ω à chaque extrémité. Pas de maître : chaque nœud peut émettre dès que le bus est libre." },
      { at: 800, text: "Node 1 prépare une trame. Pas d'adresse de destinataire : la trame porte un identifiant (ID 0x123) qui décrit son contenu." },
      { at: 1800, text: "La trame est diffusée sur tout le bus. Un bit dominant (0) écarte CAN H et CAN L ; un bit récessif (1) les laisse au même niveau. Comme on lit la différence, les parasites s'annulent." },
      { at: 5000, text: "Chaque nœud qui a reçu une trame correcte l'acquitte dans le champ ACK, même s'il ne s'y intéresse pas." },
      { at: 6200, text: "Le tri se fait ensuite dans chaque nœud, par filtrage d'ID : Node 2 (0x100–0x1FF) garde la trame, Node 3 (0x200–0x2FF) l'ignore." },
      { at: 8500, text: "Et si deux nœuds émettent en même temps ? Node 1 (ID 0x123) et Node 3 (ID 0x2A0) commencent ensemble." },
      { at: 9300, text: "Arbitrage bit à bit sur l'ID : chaque émetteur relit le bus pendant qu'il émet. Un 0 (dominant) écrase toujours un 1 (récessif)." },
      { at: 9900, text: "Au 2ᵉ bit, Node 3 envoie 1 mais relit 0 : il a perdu et se tait, sans rien détruire. Plus l'ID est petit, plus le message est prioritaire." },
      { at: 13000, text: "Node 1 termine sa trame sans perdre de temps. Node 3 réessaiera automatiquement dès que le bus sera libre. Utilisé en automobile, en robotique, en industrie." },
    ],
    draw(g, t) {
      const { P, A } = g;
      // bus + terminaisons
      g.line(30, 50, 770, 50, { lw: 2.5 });
      g.line(30, 80, 770, 80, { lw: 2.5 });
      for (const x of [30, 770]) {
        g.line(x, 50, x, 55, { lw: 2 });
        g.line(x, 75, x, 80, { lw: 2 });
        g.box(x - 6, 55, 12, 20, { fill: P.paper, stroke: P.wire, lw: 1.8, r: 2 });
        g.text('120 Ω', x, 98, { size: 10, weight: 600, color: P.muted });
      }
      g.text('CAN H', 745, 32, { align: 'right', size: 13, weight: 700 });
      g.text('CAN L', 745, 100, { align: 'right', size: 13, weight: 700 });

      if (t < 8500) {
        canBus(g, x => {
          const te = t - Math.abs(x - 140) / CAN_V;
          if (te >= 1800 && te < 5000) return CAN_PAT[Math.floor((te - 1800) / CAN_MSB)] ?? 1;
          if (te >= 5000 && te < 5500) return 0; // fenêtre ACK
          return 1;
        });
        const reached = n => t >= 1800 && (t - 1800) * CAN_V >= Math.abs(n.x + 100 - 140);
        CAN_N.forEach((n, i) => {
          const o = {};
          if (i === 0) {
            if (t >= 800 && t < 6800) o.tag = '↑ émet';
          } else if (t >= 6200) {
            const keep = 0x123 >= n.lo && 0x123 <= n.hi;
            Object.assign(o, keep ? { stroke: P.ok, lw: 3.5, tag: '✓ garde', tagc: P.ok } : { alpha: 0.45, tag: '✗ ignore', tagc: P.ko });
          } else if (t >= 5000) {
            Object.assign(o, { tag: 'ACK ↑', tagc: P.ok });
          } else if (reached(n)) {
            Object.assign(o, { tag: 'reçoit…', tagc: P.muted });
          }
          canNode(g, n, o);
        });
        if (t >= 800 && t < 6800)
          g.chip(140, 110, [{ k: 'ID', v: '0x123' }, { k: 'DATA', v: '0F A0' }], { alpha: Math.min(seg(t, 800, 1000), 1 - seg(t, 6500, 6800)) });
        canFrameBar(g, t);
      } else {
        const k = t >= 9300 ? Math.min(11, Math.floor((t - 9300) / 300) + 1) : 0;
        const lost = k >= 2;
        canBus(g, () => {
          if (t >= 9300 && t < 12600) return bitsOf(0x123, 11)[Math.floor((t - 9300) / 300)];
          if (t >= 12600) { const i = 12 + Math.floor((t - 12600) / 60); return i < CAN_PAT.length ? CAN_PAT[i] : 1; }
          return 1;
        });
        canNode(g, CAN_N[0], t >= 13000 ? { stroke: P.ok, lw: 3.5, tag: '✓ gagne', tagc: P.ok } : { tag: '↑ émet' });
        canNode(g, CAN_N[1], {});
        canNode(g, CAN_N[2], lost ? { alpha: 0.45, tag: '✗ se tait', tagc: P.ko } : { tag: '↑ émet' });
        const a = seg(t, 8500, 8800);
        g.chip(140, 110, [{ k: 'ID', v: '0x123' }], { alpha: a * (1 - seg(t, 15200, 15600)) });
        g.chip(660, 110, [{ k: 'ID', v: '0x2A0' }], { alpha: a * (lost ? 0.35 : 1) * (1 - seg(t, 15200, 15600)) });
        canArbTable(g, t, k);
      }
    },
  };

  const SCENES = { uart: UART, i2c: I2C, spi: SPI, can: CAN };

  // ───────────────────────── tableau comparatif ─────────────────────────
  const SUMMARY = {
    head: { uart: 'UART', i2c: 'I²C', spi: 'SPI', can: 'CAN' },
    rows: [
      ['Fils (hors masse)', { uart: '2 (TX, RX)', i2c: '2 (SCL, SDA)', spi: '3 + 1 CS par esclave', can: '2 (CAN H, CAN L)' }],
      ['Horloge', { uart: 'aucune (asynchrone)', i2c: 'oui, fournie par le maître', spi: 'oui, fournie par le maître', can: 'aucune (resynchronisation sur les fronts)' }],
      ['Topologie', { uart: 'point à point', i2c: 'bus maître / esclaves', spi: 'bus maître / esclaves', can: 'bus multi-maître' }],
      ['Sélection', { uart: '—', i2c: 'adresse 7 bits', spi: 'fil CS dédié', can: 'ID du message + filtres' }],
      ['Duplex', { uart: 'full', i2c: 'half', spi: 'full', can: 'half' }],
      ['Débit typique', { uart: '9,6 k – 1 Mbit/s', i2c: '100 k – 1 Mbit/s', spi: '1 – 50 MHz et plus', can: '125 k – 1 Mbit/s (plus en CAN FD)' }],
      ['Portée', { uart: 'courte en TTL (RS-232/485 pour aller loin)', i2c: "même carte / quelques dizaines de cm", spi: 'même carte', can: '40 m à 1 Mbit/s, plus à débit réduit' }],
      ['Exemples', { uart: 'console de debug, GPS, module Bluetooth', i2c: 'capteurs, écran OLED, IMU', spi: 'écran TFT, carte SD, mémoire flash', can: 'automobile, robotique, moteurs' }],
    ],
  };
  function summaryTable(keys) {
    const el = document.createElement('div');
    el.className = 'sum';
    const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    el.innerHTML = `<table><thead><tr><th></th>${keys.map(k => `<th>${SUMMARY.head[k]}</th>`).join('')}</tr></thead><tbody>${
      SUMMARY.rows.map(([lab, v]) => `<tr><th scope="row">${esc(lab)}</th>${keys.map(k => `<td>${esc(v[k])}</td>`).join('')}</tr>`).join('')
    }</tbody></table>`;
    return el;
  }

  // ───────────────────────── carte animée ─────────────────────────
  const ICON = {
    play: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" fill="currentColor"/></svg>',
    pause: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor"/></svg>',
    next: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 2.5v11l7-5.5zM11 2.5h2v11h-2z" fill="currentColor"/></svg>',
    restart: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5a5.5 5.5 0 1 1-5.2 3.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M1.6 2.6l1.4 4 3.9-1.6z" fill="currentColor"/></svg>',
  };

  class Card {
    constructor(scene, P, opts) {
      this.s = scene;
      this.t = 0;
      this.speed = opts.speed;
      this.playing = opts.autoplay;
      this.visible = false;
      this.stopAt = null;
      this.raf = 0;
      this.last = null;
      this.phase = -1;
      this.cssW = 0;
      const el = (this.el = document.createElement('section'));
      el.className = 'card';
      el.innerHTML = `
        <header><h3>${scene.title}</h3><p class="sub">${scene.sub}</p></header>
        <div class="stage"><canvas role="img" aria-label="Animation du bus ${scene.title}"></canvas></div>
        <p class="cap"><span class="n"></span><span class="txt"></span></p>
        <div class="ctl">
          <button type="button" class="play"></button>
          <button type="button" class="step" title="Jouer jusqu'à l'étape suivante, puis pause">${ICON.next}<span>Étape</span></button>
          <button type="button" class="restart" title="Recommencer" aria-label="Recommencer">${ICON.restart}</button>
          <div class="dots" role="group" aria-label="Étapes"></div>
          <label class="spd">Vitesse
            <select>${[0.5, 1, 2].map(v => `<option value="${v}"${v === this.speed ? ' selected' : ''}>×${String(v).replace('.', ',')}</option>`).join('')}</select>
          </label>
        </div>`;
      this.cv = el.querySelector('canvas');
      this.cv.style.aspectRatio = `${W} / ${scene.height}`;
      this.ctx = this.cv.getContext('2d');
      this.$n = el.querySelector('.n');
      this.$txt = el.querySelector('.txt');
      this.$play = el.querySelector('.play');
      const dots = el.querySelector('.dots');
      this.$dots = scene.phases.map((p, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'dot';
        b.title = `Étape ${i + 1}`;
        b.setAttribute('aria-label', `Aller à l'étape ${i + 1}`);
        b.addEventListener('click', () => { this.t = p.at; this.stopAt = null; this.render(); this.kick(); });
        dots.appendChild(b);
        return b;
      });
      this.$play.addEventListener('click', () => { this.playing = !this.playing; this.stopAt = null; this.syncBtn(); this.kick(); });
      el.querySelector('.step').addEventListener('click', () => {
        const i = this.phaseAt(this.t);
        const nx = this.s.phases[i + 1];
        this.stopAt = nx ? nx.at : this.s.duration;
        this.playing = true;
        this.syncBtn();
        this.kick();
      });
      el.querySelector('.restart').addEventListener('click', () => { this.t = 0; this.stopAt = null; this.playing = true; this.syncBtn(); this.render(); this.kick(); });
      el.querySelector('select').addEventListener('change', e => { this.speed = parseFloat(e.target.value) || 1; });
      this.setPalette(P, false);
      this.syncBtn();
    }
    mount() {
      this.ro = new ResizeObserver(() => this.resize());
      this.ro.observe(this.cv);
      this.io = new IntersectionObserver(es => {
        this.visible = es.some(e => e.isIntersecting);
        this.kick();
      }, { rootMargin: '100px' });
      this.io.observe(this.el);
      this.resize();
    }
    destroy() {
      cancelAnimationFrame(this.raf);
      this.raf = 0;
      this.ro?.disconnect();
      this.io?.disconnect();
    }
    setPalette(P, redraw = true) {
      this.P = P;
      this.A = P[this.s.key];
      this.g = new G(this.ctx, this.P, this.A);
      this.el.style.setProperty('--acc', this.A.main);
      this.el.style.setProperty('--soft', this.A.soft);
      if (redraw) this.render();
    }
    syncBtn() {
      this.$play.innerHTML = this.playing ? ICON.pause : ICON.play;
      this.$play.setAttribute('aria-label', this.playing ? 'Pause' : 'Lecture');
      this.$play.title = this.playing ? 'Pause' : 'Lecture';
    }
    phaseAt(t) {
      const ph = this.s.phases;
      let i = 0;
      while (i + 1 < ph.length && ph[i + 1].at <= t) i++;
      return i;
    }
    resize() {
      const w = this.cv.clientWidth;
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      if (!w || (w === this.cssW && dpr === this.dpr)) return;
      this.cssW = w;
      this.dpr = dpr;
      this.cv.width = Math.round(w * dpr);
      this.cv.height = Math.round((w * this.s.height / W) * dpr);
      this.render();
    }
    kick() {
      if (this.playing && this.visible && !this.raf) {
        this.last = null;
        this.raf = requestAnimationFrame(this.tick);
      }
    }
    tick = now => {
      this.raf = 0;
      const dt = this.last == null ? 0 : Math.min(100, now - this.last);
      this.last = now;
      if (this.playing) {
        let nt = this.t + dt * this.speed;
        if (this.stopAt != null && nt >= this.stopAt) {
          nt = this.stopAt;
          this.stopAt = null;
          this.playing = false;
          this.syncBtn();
        }
        if (nt >= this.s.duration) nt = 0;
        this.t = nt;
      }
      this.render();
      if (this.playing && this.visible) this.raf = requestAnimationFrame(this.tick);
    };
    render() {
      if (!this.cssW) return;
      const c = this.ctx;
      c.setTransform(1, 0, 0, 1, 0, 0);
      c.clearRect(0, 0, this.cv.width, this.cv.height);
      const k = (this.cssW / W) * this.dpr;
      c.setTransform(k, 0, 0, k, 0, 0);
      this.s.draw(this.g, this.t);
      const i = this.phaseAt(this.t);
      if (i !== this.phase) {
        this.phase = i;
        this.$n.textContent = `${i + 1}/${this.s.phases.length}`;
        this.$txt.textContent = this.s.phases[i].text;
        this.$dots.forEach((d, j) => {
          d.classList.toggle('on', j === i);
          d.classList.toggle('past', j < i);
          d.setAttribute('aria-current', j === i ? 'step' : 'false');
        });
      }
    }
  }

  // ───────────────────────── styles ─────────────────────────
  const CSS = `
:host{display:block;margin:1.5rem 0;font-family:${FONT};color:var(--bp-ink);
  --bp-ink:#1f2430;--bp-muted:#6b7280;--bp-border:#dfe3ea;--bp-paper:#fff}
:host([data-dark]){--bp-ink:#e8eaf0;--bp-muted:#9aa3b2;--bp-border:#363d4a;--bp-paper:#1b1f27}
*{box-sizing:border-box}
.card{background:var(--soft);border:1px solid color-mix(in srgb,var(--acc) 35%,transparent);border-radius:14px;padding:14px 16px 12px;margin:0 0 18px}
header{display:flex;flex-wrap:wrap;align-items:baseline;gap:.25rem .75rem;margin-bottom:6px}
h3{margin:0;font-size:1.2rem;line-height:1.2;color:var(--acc);font-weight:800;letter-spacing:.01em}
.sub{margin:0;font-size:.88rem;color:var(--bp-muted)}
.stage{overflow-x:auto;-webkit-overflow-scrolling:touch}
canvas{display:block;width:100%;min-width:540px;height:auto}
.cap{margin:.55rem 0 .65rem;min-height:3em;font-size:.95rem;line-height:1.45}
.n{display:inline-block;font:700 .72rem/1.5 ${MONO};color:var(--acc);border:1.5px solid var(--acc);border-radius:999px;padding:0 .5em;margin-right:.5em;vertical-align:1px}
.ctl{display:flex;flex-wrap:wrap;align-items:center;gap:6px}
button,select{font:inherit;font-size:.85rem;color:var(--bp-ink);background:var(--bp-paper);border:1px solid var(--bp-border);border-radius:8px;padding:.3rem .55rem;cursor:pointer;display:inline-flex;align-items:center;gap:.35rem;line-height:1.2}
button:hover,select:hover{border-color:var(--acc)}
button:focus-visible,select:focus-visible{outline:2px solid var(--acc);outline-offset:1px}
button svg{width:14px;height:14px}
.dots{display:flex;gap:4px;margin:0 6px;flex-wrap:wrap}
.dots .dot{width:20px;height:8px;padding:0;border:0;border-radius:4px;background:var(--bp-border)}
.dots .dot.past{background:color-mix(in srgb,var(--acc) 40%,var(--bp-border))}
.dots .dot.on{background:var(--acc)}
.spd{margin-left:auto;display:inline-flex;align-items:center;gap:.4rem;font-size:.85rem;color:var(--bp-muted)}
.sum{overflow-x:auto;margin-top:4px}
table{border-collapse:collapse;width:100%;font-size:.88rem;min-width:560px}
th,td{border:1px solid var(--bp-border);padding:.4rem .55rem;text-align:left;vertical-align:top}
thead th{background:color-mix(in srgb,var(--bp-ink) 6%,var(--bp-paper));font-weight:800}
tbody th{font-weight:700;color:var(--bp-muted);white-space:nowrap}
td{background:var(--bp-paper)}
@media (max-width:560px){.spd{margin-left:0}}
`;

  // ───────────────────────── élément personnalisé ─────────────────────────
  class BusProtocols extends HTMLElement {
    static get observedAttributes() { return ['protocols', 'theme', 'speed', 'summary', 'autoplay']; }
    connectedCallback() { this._build(); this._watchTheme(); }
    disconnectedCallback() { this._teardown(); this._mo?.disconnect(); this._mo = null; }
    attributeChangedCallback() { if (this._built && this.isConnected) this._build(); }
    _teardown() { (this._cards || []).forEach(c => c.destroy()); this._cards = []; }
    _build() {
      this._teardown();
      const root = this.shadowRoot || this.attachShadow({ mode: 'open' });
      const keys = (this.getAttribute('protocols') || 'uart,i2c,spi,can').toLowerCase().split(/[\s,;]+/).filter(k => SCENES[k]);
      const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      const autoplay = this.getAttribute('autoplay') !== 'false' && !reduced;
      const speed = parseFloat(this.getAttribute('speed')) || 1;
      root.innerHTML = `<style>${CSS}</style>`;
      const wrap = document.createElement('div');
      root.appendChild(wrap);
      const P = this._palette();
      this._cards = keys.map(k => {
        const c = new Card(SCENES[k], P, { autoplay, speed });
        wrap.appendChild(c.el);
        c.mount();
        return c;
      });
      if (this.hasAttribute('summary')) wrap.appendChild(summaryTable(keys.length ? keys : Object.keys(SCENES)));
      this._built = true;
    }
    _isDark() {
      const th = (this.getAttribute('theme') || 'auto').toLowerCase();
      if (th === 'dark') return true;
      if (th === 'light') return false;
      const h = document.documentElement, b = document.body;
      const dt = h.getAttribute('data-theme') || b?.getAttribute('data-theme');
      if (dt) return /dark/i.test(dt);
      return /(^|\s)(dark|theme-dark|dark-mode)(\s|$)/.test(`${h.className} ${b?.className || ''}`);
    }
    _palette() {
      const d = this._isDark();
      this.toggleAttribute('data-dark', d);
      return d ? PAL.dark : PAL.light;
    }
    _watchTheme() {
      if (this._mo) return;
      this._mo = new MutationObserver(() => {
        const P = this._palette();
        (this._cards || []).forEach(c => c.setPalette(P));
      });
      const o = { attributes: true, attributeFilter: ['class', 'data-theme'] };
      this._mo.observe(document.documentElement, o);
      if (document.body) this._mo.observe(document.body, o);
    }
  }

  customElements.define(TAG, BusProtocols);
})();
