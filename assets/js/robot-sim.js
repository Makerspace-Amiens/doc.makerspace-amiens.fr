/*
 * Simulateur de mouvement d'un robot mobile à roues (vue de dessus).
 * Monté par _includes/simulateur-robot.html : <figure class="robot-sim" data-type="...">.
 * Types : differentiel, tricycle, ackermann, omni, mecanum, swerve.
 * Libellés : JSON dans data-labels (clé robot_sim de _data/i18n.yml).
 *
 * Repère : monde en pixels, y vers le haut ; repère robot (f vers l'avant, l vers la gauche),
 * cap theta compté dans le sens trigonométrique depuis l'axe x du monde.
 */
(function () {
  if (window.RobotSim) return;

  var C = {
    red: "#ef2e31", dark: "#3f3f46", mid: "#a1a1aa", light: "#f4f4f5",
    grid: "#f4f4f5", text: "#18181b", sub: "#71717a", trail: "rgba(239, 46, 49, 0.35)"
  };
  var VMAX = 120;   // vitesse maximale d'une roue (px/s) pour 100 %
  var WMAX = 1.6;   // vitesse de rotation maximale (rad/s) pour 100 %
  var DEG = Math.PI / 180;

  var css = "" +
    ".robot-sim{margin:1.5rem 0;border:1px solid #e4e4e7;border-radius:8px;overflow:hidden;background:#fff}" +
    ".robot-sim canvas{display:block;width:100%;height:340px;background:#fff;touch-action:none}" +
    ".robot-sim .rs-panel{padding:.9rem 1rem;border-top:1px solid #e4e4e7;background:#fafafa}" +
    ".robot-sim .rs-sliders{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.6rem 1.2rem}" +
    ".robot-sim label{display:flex;justify-content:space-between;font-size:.85rem;font-weight:600;color:#18181b}" +
    ".robot-sim label output{font-weight:500;color:#71717a;font-variant-numeric:tabular-nums}" +
    ".robot-sim input[type=range]{width:100%;accent-color:#ef2e31}" +
    ".robot-sim .rs-buttons{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.7rem}" +
    ".robot-sim button{font:inherit;font-size:.8rem;padding:.3rem .7rem;border:1px solid #d4d4d8;border-radius:999px;background:#fff;color:#18181b;cursor:pointer}" +
    ".robot-sim button:hover{border-color:#ef2e31;color:#ef2e31}" +
    ".robot-sim button.rs-tool{background:#f4f4f5}" +
    ".robot-sim .rs-readout{margin-top:.6rem;font-size:.8rem;color:#71717a;font-variant-numeric:tabular-nums}" +
    ".robot-sim .rs-readout strong{color:#18181b}" +
    "@media (max-width:600px){.robot-sim canvas{height:260px}}";

  function injectCss() {
    if (document.getElementById("robot-sim-css")) return;
    var s = document.createElement("style");
    s.id = "robot-sim-css";
    s.textContent = css;
    document.head.appendChild(s);
  }

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  /* ---------- Définition des architectures ----------
   * controls : curseurs (min, max, unité) ; presets : valeurs des curseurs.
   * kin(c) renvoie { vf, vl, w, wheels: [{f, l, a, s, name}], icr }
   *   a : direction de roulement de la roue (rad, par rapport à l'avant), s : vitesse (px/s).
   */
  var TYPES = {
    differentiel: {
      body: { shape: "circle", r: 52 },
      balls: [[38, 0], [-38, 0]],
      controls: [["left_wheel", -100, 100, "%"], ["right_wheel", -100, 100, "%"]],
      presets: [["preset_straight", [60, 60]], ["preset_turn_left", [35, 75]], ["preset_turn_right", [75, 35]],
                ["preset_spin", [-50, 50]], ["preset_stop", [0, 0]]],
      kin: function (c) {
        var e = 76, vL = c[0] / 100 * VMAX, vR = c[1] / 100 * VMAX;
        var w = (vR - vL) / e, vf = (vR + vL) / 2;
        return {
          vf: vf, vl: 0, w: w,
          wheels: [{ f: 0, l: e / 2, a: 0, s: vL, name: "left" }, { f: 0, l: -e / 2, a: 0, s: vR, name: "right" }],
          icr: Math.abs(w) > 1e-3 ? [0, vf / w] : null
        };
      }
    },
    tricycle: {
      body: { shape: "tri" },
      controls: [["front_wheel_speed", -100, 100, "%"], ["steering", -80, 80, "°"]],
      presets: [["preset_straight", [60, 0]], ["preset_turn_left", [60, 30]], ["preset_max_steer", [50, 80]],
                ["preset_stop", [0, 0]]],
      kin: function (c) {
        var L = 70, e = 64, v = c[0] / 100 * VMAX, al = c[1] * DEG;
        var vf = v * Math.cos(al), w = v * Math.sin(al) / L;
        return {
          vf: vf, vl: 0, w: w,
          wheels: [
            { f: L - 22, l: 0, a: al, s: v, name: "front", motor: true },
            { f: -22, l: e / 2, a: 0, s: vf - w * e / 2, name: "rear_left", free: true },
            { f: -22, l: -e / 2, a: 0, s: vf + w * e / 2, name: "rear_right", free: true }
          ],
          offset: -22,
          icr: Math.abs(Math.sin(al)) > 1e-3 ? [-22, L / Math.tan(al)] : null
        };
      }
    },
    ackermann: {
      body: { shape: "rect", w: 64, h: 120 },
      controls: [["speed", -100, 100, "%"], ["steering", -35, 35, "°"]],
      presets: [["preset_straight", [60, 0]], ["preset_turn_left", [60, 20]], ["preset_max_steer", [50, 35]],
                ["preset_stop", [0, 0]]],
      kin: function (c) {
        var L = 80, e = 60, r0 = -40, v = c[0] / 100 * VMAX, d = c[1] * DEG;
        var w = v * Math.tan(d) / L;
        var wheels = [
          { f: r0, l: e / 2, a: 0, s: v - w * e / 2, name: "rear_left" },
          { f: r0, l: -e / 2, a: 0, s: v + w * e / 2, name: "rear_right" }
        ];
        var icr = null;
        if (Math.abs(d) > 1e-3) {
          var R = L / Math.tan(d); // CIR sur l'axe arrière, à gauche si R > 0
          icr = [r0, R];
          // Chaque roue avant est perpendiculaire à la droite qui la relie au CIR (géométrie d'Ackermann)
          [[e / 2, "front_left"], [-e / 2, "front_right"]].forEach(function (p) {
            var dl = R - p[0];
            wheels.push({ f: r0 + L, l: p[0], a: Math.atan(L / dl), name: p[1], free: true,
                          s: Math.abs(w) * Math.hypot(L, dl) * Math.sign(v) });
          });
        } else {
          wheels.push({ f: r0 + L, l: e / 2, a: 0, s: v, name: "front_left", free: true });
          wheels.push({ f: r0 + L, l: -e / 2, a: 0, s: v, name: "front_right", free: true });
        }
        return { vf: v, vl: 0, w: w, wheels: wheels, offset: r0, icr: icr };
      }
    },
    omni: holonomic("tri", function (vf, vl, w) {
      var R = 40, names = ["back", "front_left", "front_right"], phis = [180, 60, -60];
      return phis.map(function (p, i) {
        var ph = p * DEG, a = ph + Math.PI / 2;
        return { f: R * Math.cos(ph), l: R * Math.sin(ph), a: a, kind: "omni",
                 s: vf * Math.cos(a) + vl * Math.sin(a) + w * R, name: names[i] };
      });
    }),
    mecanum: holonomic("rect", function (vf, vl, w) {
      var k = 74;
      return [
        { f: 40, l: 37, s: vf - vl - k * w, name: "front_left", kind: "mec1" },
        { f: 40, l: -37, s: vf + vl + k * w, name: "front_right", kind: "mec2" },
        { f: -40, l: 37, s: vf + vl - k * w, name: "rear_left", kind: "mec2" },
        { f: -40, l: -37, s: vf - vl + k * w, name: "rear_right", kind: "mec1" }
      ].map(function (o) { o.a = 0; return o; });
    }),
    swerve: holonomic("square", function (vf, vl, w, prev) {
      var pos = [[34, 34, "front_left"], [34, -34, "front_right"], [-34, 34, "rear_left"], [-34, -34, "rear_right"]];
      return pos.map(function (p, i) {
        var mf = vf - w * p[1], ml = vl + w * p[0], s = Math.hypot(mf, ml);
        var a = s > 0.5 ? Math.atan2(ml, mf) : (prev ? prev[i].a : 0);
        return { f: p[0], l: p[1], a: a, s: s, name: p[2], kind: "swerve" };
      });
    })
  };

  function holonomic(shape, wheelsFn) {
    return {
      body: { shape: shape, w: 70, h: 96 },
      controls: [["forward", -100, 100, "%"], ["sideways", -100, 100, "%"], ["rotation", -100, 100, "%"]],
      presets: [["preset_forward", [60, 0, 0]], ["preset_crab", [0, 60, 0]], ["preset_diagonal", [45, 45, 0]],
                ["preset_spin", [0, 0, 50]], ["preset_turn_moving", [0, 60, 40]], ["preset_stop", [0, 0, 0]]],
      wheelsFn: wheelsFn,
      kin: function (c, prev) {
        var vf = c[0] / 100 * VMAX, vl = -c[1] / 100 * VMAX, w = c[2] / 100 * WMAX;
        var wheels = wheelsFn(vf, vl, w, prev);
        // Saturation : aucune roue ne dépasse VMAX, on réduit tout le mouvement d'autant
        var m = 0;
        wheels.forEach(function (o) { m = Math.max(m, Math.abs(o.s)); });
        var k = m > VMAX ? VMAX / m : 1;
        if (k < 1) { vf *= k; vl *= k; w *= k; wheels = wheelsFn(vf, vl, w, prev); }
        return { vf: vf, vl: vl, w: w, wheels: wheels, saturated: k < 1 };
      }
    };
  }

  /* ---------- Montage ---------- */
  function mount(fig) {
    if (fig.dataset.mounted) return;
    fig.dataset.mounted = "1";
    injectCss();
    var type = TYPES[fig.dataset.type] ? fig.dataset.type : "differentiel";
    var T = TYPES[type];
    var L = {};
    try { L = JSON.parse(fig.dataset.labels || "{}"); } catch (e) { L = {}; }
    function t(k) { return L[k] || k; }

    var canvas = document.createElement("canvas");
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", t("aria") + " (" + t("type_" + type) + ")");
    fig.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    var panel = document.createElement("div");
    panel.className = "rs-panel";
    fig.appendChild(panel);

    var values = T.controls.map(function () { return 0; });
    var sliders = [];
    var grid = document.createElement("div");
    grid.className = "rs-sliders";
    panel.appendChild(grid);
    T.controls.forEach(function (c, i) {
      var wrap = document.createElement("div");
      var lab = document.createElement("label");
      var id = "rs-" + type + "-" + i + "-" + Math.random().toString(36).slice(2, 7);
      lab.setAttribute("for", id);
      lab.textContent = t(c[0]);
      var out = document.createElement("output");
      lab.appendChild(out);
      var input = document.createElement("input");
      input.type = "range"; input.id = id; input.min = c[1]; input.max = c[2]; input.step = 1; input.value = 0;
      input.addEventListener("input", function () { values[i] = +input.value; show(); });
      function show() { out.textContent = (values[i] > 0 ? "+" : "") + values[i] + " " + c[3]; }
      show();
      sliders.push({ input: input, show: show });
      wrap.appendChild(lab); wrap.appendChild(input);
      grid.appendChild(wrap);
    });

    var btns = document.createElement("div");
    btns.className = "rs-buttons";
    panel.appendChild(btns);
    function button(label, fn, cls) {
      var b = document.createElement("button");
      b.type = "button"; b.textContent = label; if (cls) b.className = cls;
      b.addEventListener("click", fn);
      btns.appendChild(b);
      return b;
    }
    T.presets.forEach(function (p) {
      button(t(p[0]), function () {
        p[1].forEach(function (v, i) { values[i] = v; sliders[i].input.value = v; sliders[i].show(); });
      });
    });
    var paused = false;
    var pauseBtn = button(t("pause"), function () { paused = !paused; pauseBtn.textContent = paused ? t("play") : t("pause"); }, "rs-tool");
    button(t("reset"), reset, "rs-tool");

    var readout = document.createElement("div");
    readout.className = "rs-readout";
    panel.appendChild(readout);

    // État
    var W = 0, H = 0, x, y, th, trail, prevWheels = null, kin;
    function reset() { x = W / 2; y = H / 2; th = Math.PI / 2; trail = [[x, y]]; }

    function resize() {
      var r = canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
      var first = W === 0;
      W = Math.max(200, r.width); H = Math.max(200, r.height);
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (first) reset();
      else { x = clamp(x, 0, W); y = clamp(y, 0, H); }
    }

    function step(dt) {
      kin = T.kin(values, prevWheels);
      prevWheels = kin.wheels;
      if (paused) return;
      var off = kin.offset || 0; // point de référence (milieu de l'essieu arrière) décalé du centre
      // vitesse du centre du robot = vitesse du point de référence + w x (centre - référence)
      var vf = kin.vf, vl = kin.vl + kin.w * (-off);
      var c = Math.cos(th), s = Math.sin(th);
      x += (vf * c - vl * s) * dt;
      y += (vf * s + vl * c) * dt;
      th += kin.w * dt;
      var wrapped = false;
      if (x < 0) { x += W; wrapped = true; } else if (x > W) { x -= W; wrapped = true; }
      if (y < 0) { y += H; wrapped = true; } else if (y > H) { y -= H; wrapped = true; }
      if (wrapped) trail.push(null);
      var last = trail[trail.length - 1];
      if (!last || Math.hypot(last[0] - x, last[1] - y) > 2) trail.push([x, y]);
      if (trail.length > 3000) trail.splice(0, trail.length - 3000);
    }

    /* ----- Dessin ----- */
    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
      for (var gx = 0; gx < W; gx += 40) { ctx.beginPath(); ctx.moveTo(gx + .5, 0); ctx.lineTo(gx + .5, H); ctx.stroke(); }
      for (var gy = 0; gy < H; gy += 40) { ctx.beginPath(); ctx.moveTo(0, gy + .5); ctx.lineTo(W, gy + .5); ctx.stroke(); }

      // Trace
      ctx.strokeStyle = C.trail; ctx.lineWidth = 2; ctx.beginPath();
      var pen = false;
      trail.forEach(function (p) {
        if (!p) { pen = false; return; }
        if (pen) ctx.lineTo(p[0], H - p[1]); else { ctx.moveTo(p[0], H - p[1]); pen = true; }
      });
      ctx.stroke();

      ctx.save();
      ctx.translate(x, H - y);
      ctx.rotate(-th);
      drawBody();
      (T.balls || []).forEach(function (b) { ball(b[0], -b[1]); });
      kin.wheels.forEach(drawWheel);
      if (kin.icr && Math.abs(kin.icr[1]) < 600) drawIcr(kin.icr);
      // Flèche « avant »
      ctx.fillStyle = C.dark;
      ctx.beginPath(); ctx.moveTo(18, 0); ctx.lineTo(6, -7); ctx.lineTo(6, 7); ctx.closePath(); ctx.fill();
      ctx.restore();

      var parts = kin.wheels.map(function (o) {
        var pct = Math.round(o.s / VMAX * 100);
        return t("w_" + o.name) + " <strong>" + (pct > 0 ? "+" : "") + pct + " %</strong>";
      });
      var html = t("wheels") + " : " + parts.join(" · ");
      if (kin.saturated) html += "<br>" + t("saturated");
      if (readout.innerHTML !== html) readout.innerHTML = html;
    }

    function drawBody() {
      var b = T.body;
      ctx.fillStyle = C.light; ctx.strokeStyle = C.dark; ctx.lineWidth = 2;
      ctx.beginPath();
      if (b.shape === "circle") ctx.arc(0, 0, b.r, 0, 2 * Math.PI);
      else if (b.shape === "tri") {
        var R = type === "omni" ? 74 : 62, cx = type === "omni" ? 0 : 6;
        for (var k = 0; k < 3; k++) {
          var a = k * 2 * Math.PI / 3;
          var px = cx + R * Math.cos(a), py = R * Math.sin(a);
          if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py);
        }
        ctx.closePath();
      } else {
        var len = b.shape === "square" ? 90 : (type === "ackermann" ? 130 : 104);
        var wid = b.shape === "square" ? 90 : (type === "ackermann" ? 66 : 58);
        var ox = type === "ackermann" ? 0 : 0;
        roundRect(ox - len / 2, -wid / 2, len, wid, 10);
      }
      ctx.fill(); ctx.stroke();
    }

    function roundRect(x0, y0, w, h, r) {
      ctx.moveTo(x0 + r, y0); ctx.arcTo(x0 + w, y0, x0 + w, y0 + h, r); ctx.arcTo(x0 + w, y0 + h, x0, y0 + h, r);
      ctx.arcTo(x0, y0 + h, x0, y0, r); ctx.arcTo(x0, y0, x0 + w, y0, r); ctx.closePath();
    }

    function ball(px, py) {
      ctx.fillStyle = C.mid; ctx.strokeStyle = C.dark; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(px, py, 7, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
    }

    function drawWheel(o) {
      ctx.save();
      ctx.translate(o.f, -o.l);
      ctx.rotate(-o.a);
      if (o.kind === "swerve") {
        ctx.strokeStyle = C.mid; ctx.setLineDash([3, 3]); ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(0, 0, 20, 0, 2 * Math.PI); ctx.stroke(); ctx.setLineDash([]);
      }
      var len = o.kind === "swerve" ? 28 : 34, wid = o.kind === "swerve" ? 11 : 13;
      ctx.fillStyle = o.free ? C.mid : C.red; ctx.strokeStyle = C.dark; ctx.lineWidth = 1.5;
      ctx.beginPath(); roundRect(-len / 2, -wid / 2, len, wid, 3); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = C.dark; ctx.lineWidth = 2;
      if (o.kind === "omni") {
        for (var i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(i * 6, -wid / 2 - 2); ctx.lineTo(i * 6, wid / 2 + 2); ctx.stroke(); }
      } else if (o.kind === "mec1" || o.kind === "mec2") {
        var sg = o.kind === "mec1" ? 1 : -1;
        for (var j = -2; j <= 2; j++) { ctx.beginPath(); ctx.moveTo(j * 6 - sg * 4, -wid / 2 + 1); ctx.lineTo(j * 6 + sg * 4, wid / 2 - 1); ctx.stroke(); }
      }
      // Flèche de vitesse de la roue (sens de roulement)
      var Ls = o.s / VMAX * 34;
      if (Math.abs(Ls) > 2) {
        ctx.strokeStyle = C.text; ctx.fillStyle = C.text; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Ls, 0); ctx.stroke();
        var d = Ls > 0 ? 1 : -1;
        ctx.beginPath(); ctx.moveTo(Ls + d * 6, 0); ctx.lineTo(Ls - d * 2, -5); ctx.lineTo(Ls - d * 2, 5); ctx.closePath(); ctx.fill();
      }
      ctx.restore();
    }

    function drawIcr(p) {
      ctx.strokeStyle = C.mid; ctx.lineWidth = 1; ctx.setLineDash([5, 4]);
      kin.wheels.forEach(function (o) {
        ctx.beginPath(); ctx.moveTo(p[0], -p[1]); ctx.lineTo(o.f, -o.l); ctx.stroke();
      });
      ctx.setLineDash([]);
      ctx.fillStyle = C.red;
      ctx.beginPath(); ctx.arc(p[0], -p[1], 5, 0, 2 * Math.PI); ctx.fill();
      ctx.save(); ctx.translate(p[0], -p[1]); ctx.rotate(th);
      ctx.font = "700 12px Inter, Arial, sans-serif"; ctx.fillText(t("icr"), 8, -8);
      ctx.restore();
    }

    // Boucle d'animation, seulement quand le simulateur est visible
    var visible = true, last = null, raf = null;
    function loop(ts) {
      raf = null;
      if (!visible) { last = null; return; }
      var dt = last === null ? 0 : Math.min(0.05, (ts - last) / 1000);
      last = ts;
      step(dt); draw();
      raf = requestAnimationFrame(loop);
    }
    function start() { if (!raf) raf = requestAnimationFrame(loop); }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        visible = es[0].isIntersecting;
        if (visible) start();
      }).observe(fig);
    }
    window.addEventListener("resize", resize);
    resize();
    start();
  }

  window.RobotSim = { mount: mount };
  document.querySelectorAll(".robot-sim[data-type]").forEach(mount);
})();
