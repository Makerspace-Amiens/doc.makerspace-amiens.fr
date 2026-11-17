---
layout: documentation
lang: en
hide_hero: true
hero_image: image.jpg
hero_darken: true
image: image.jpg
component_toc: true
doc_header: true

title: ADC & PWM
subtitle: Reading an analog signal, producing a variable voltage
description: Understand the ADC (analog-to-digital conversion) and PWM (pulse width modulation) on the ESP32-S3.
author: Alban Petit

difficulty: 3
todo: 90

prerequisites:
  - label: GPIO & the digital world
    link: /workshops/microcontroleur/concepts/gpio-monde-numerique/
---

## Beyond all-or-nothing

The previous concept, [GPIO](/workshops/microcontroleur/concepts/gpio-monde-numerique/), only knew two values: on or off. But the real world is full of nuances: a joystick is not just "left" or "right", it can be pushed more or less far; an LED can shine at half power; a motor can turn slowly.

To handle these intermediate values, the microcontroller has two tools, both on the menu of this concept: the **ADC** to *read* a quantity that varies continuously, and **PWM** to *simulate* one as an output.

**By the end of this concept, you will know how to:**

- convert an analog voltage into a number with the ADC;
- simulate a variable output voltage with PWM;
- scale a reading with `map()`.

## From continuous to digital: the ADC

The physical world is **analog**: a temperature, a joystick position, a brightness produce voltages that vary continuously between 0 V and 3.3 V. The microcontroller, on the other hand, only understands integers.

The **analog-to-digital converter** (ADC) turns this continuous voltage into an integer.

![Quantisation: a continuous voltage from 0 to 3.3 V is converted into a staircase value; here 8 steps for readability, 4096 on the ESP32-S3](adc-quantification.svg)

### Resolution: 12 bits on the ESP32-S3

The ESP32-S3's ADC has a resolution of **12 bits**, which gives $2^{12} = 4096$ possible values:

$$\text{value} = \frac{V_{in}}{V_{ref}} \times (2^{12} - 1) = \frac{V_{in}}{3.3} \times 4095$$

| Voltage | ADC value |
|---|---|
| 0 V | 0 |
| 1.65 V | ≈ 2048 |
| 3.3 V | 4095 |

```cpp
int value = analogRead(PIN_JOYSTICK_X);  // returns 0 to 4095
```

{% include message.html title="The ADC is not perfectly linear" message="The formula above is a teaching approximation. In reality, the ESP32's ADC is slightly non-linear (especially near 0 V and 3.3 V) and its full scale depends on the configured attenuation. For an accurate measurement the ADC is calibrated; to read a joystick, this approximation is more than enough." status="is-info" icon="fas fa-info-circle" %}

![Curve of the real ADC compared with the ideal ADC: the value stays at 0 below about 0.1 V and saturates at 4095 from about 3.1 V](adc-lineaire-reel.svg)

### The measuring range: attenuation

To cover a range close to 0–3.3 V, Arduino-ESP32 applies the maximum **attenuation** (11 dB) to `analogRead()` by default: this is why it "works" without any setting. On the ESP32-S3, the range that can actually be measured then goes from about 0 to **3.1 V**; beyond that, the reading saturates at 4095. This behaviour can be adjusted and, above all, you can directly get a value in millivolts that is already calibrated:

```cpp
analogSetAttenuation(ADC_11db);           // extended range (~0–3.1 V), the default
int mv = analogReadMilliVolts(POT_PIN);   // voltage in mV, factory-corrected
```

`analogReadMilliVolts()` is more reliable than a manual conversion with the formula above: it takes into account the calibration specific to each chip.

### Sampling

The ADC does not read the signal continuously: it **takes samples** at regular intervals. Between two readings, whatever the signal does is ignored. This is enough for a joystick (slow variation), but not for a high-frequency audio signal.

### Smoothing a noisy reading

A single ADC reading "jitters" by a few units because of electrical noise. For a stable value, **average several readings**:

```cpp
long sum = 0;
for (int i = 0; i < 16; i++) sum += analogRead(POT_PIN);
int value = sum / 16;   // average of 16 readings
```

The more you average, the more stable the value, but the longer the reading takes. 8 to 16 samples are a good compromise for a potentiometer or a joystick.

### The ADC2 + Wi-Fi trap on the ESP32

The ESP32 has two ADC banks:

| Bank | Pins | Note |
|---|---|---|
| **ADC1** | GPIO 1–10 | Always available ✅ |
| **ADC2** | GPIO 11–20 | **Unusable when Wi-Fi is active** ⚠️ |

On the course's [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/), all the exposed analog pins (D0 to D5 and D8 to D10, i.e. GPIO1 to GPIO9) are on **ADC1**: the trap cannot happen with this board, but it lies in wait as soon as you move to another ESP32 board.

{% include message.html title="Always use ADC1 for the joystick" message="In this project, Wi-Fi is used for multiplayer. Connecting the joystick to ADC2 pins (GPIO 11–20) will give erratic readings or lock up the ADC. You must use **ADC1** pins (GPIO 1–10): this is the case for D0 and D1 on the XIAO." status="is-warning" icon="fas fa-exclamation-triangle" %}

### Reading a joystick

An analog joystick contains two **potentiometers** (adjustable resistors that deliver a voltage depending on their position; one per axis, X and Y) and a **button** (pressing the stick).

```cpp
int x = analogRead(JOYSTICK_X);  // 0 at one end stop → 4095 at the other
int y = analogRead(JOYSTICK_Y);  // the direction depends on how the module is mounted
bool btn = !digitalRead(JOYSTICK_BTN);  // internal pull-up → LOW = pressed
```

Detecting directions with thresholds:

```cpp
if (x < 1500)       direction = LEFT;
else if (x > 2500)  direction = RIGHT;
else if (y < 1500)  direction = DOWN;
else if (y > 2500)  direction = UP;
else                direction = CENTER;
```

The `1500`-`2500` range is a **dead zone**: at rest, the value is never exactly 2048 and jitters by a few units, and these small variations must not count as a movement.

![The map of joystick values, from 0 to 4095 on each axis: LEFT below 1500 and RIGHT above 2500 over the full height, UP and DOWN in the central column, CENTER in the dead zone square](joystick-zones.svg)

### Calibrating and normalising

For a game, you often want more than a direction: **how far** the stick is pushed. The reading is then converted into a value between **-1** (low end stop) and **+1** (high end stop), which is **0** at rest:

1. **Calibrate**: at start-up, with the stick released, measure the real centre (average of 16 readings) instead of assuming 2048.
2. **Dead zone**: an offset from the centre smaller than ~300 returns 0.
3. **Normalise**: divide the offset from the centre by the travel available **on the side where the stick is** (`4095 - center` on one side, `center` on the other), so that each end stop really gives -1 or +1.

```cpp
float normalize(int raw, int center) {
  int offset = raw - center;
  if (abs(offset) < 300) return 0.0f;                   // dead zone
  int travel = (offset > 0) ? (4095 - center) : center;
  return constrain((float)offset / travel, -1.0f, 1.0f);
}
```

A paddle can then move at a speed proportional to this value, and directions can be derived with readable thresholds (`x < -0.5` for LEFT), whatever the joystick's real centre.

### Scaling a reading with `map()`

An ADC reading (0–4095) often needs to be converted to another range: a servo angle (0–180°), a PWM value (0–255), a percentage… The `map()` function does this rule of three in one go:

```cpp
int reading = analogRead(POT_PIN);            // 0 – 4095
int angle   = map(reading, 0, 4095, 0, 180);  // 0 – 180°
int pwm     = map(reading, 0, 4095, 0, 255);  // 0 – 255
```

![map() matches the range 0 to 4095 to the range 0 to 255: 0 gives 0, 2048 gives 127, 4095 gives 255](map-echelle.svg)

`map(value, in_min, in_max, out_min, out_max)` assumes a linear relationship and **does not clamp** the result: if the reading can go beyond the expected range, bound it with `constrain(pwm, 0, 255)`.

## From digital to analog: PWM

A digital GPIO can only produce `0 V` or `3.3 V`. To simulate an intermediate voltage (set the brightness of an LED, the speed of a motor, the position of a servo), we use **PWM** (*Pulse Width Modulation*).

### Principle

PWM switches rapidly between `HIGH` and `LOW` at high frequency. The proportion of time spent `HIGH` is called the **duty cycle**:

![Three PWM signals with the same frequency, at 25, 50 and 75 % duty cycle, with their average voltage of 0.8 V, 1.65 V and 2.5 V](pwm-rapports-cycliques.svg)

| Duty cycle | Perceived effect |
|---|---|
| 0 % | Always off |
| 50 % | Half brightness |
| 100 % | Full brightness |

The frequency is high enough (typically 1–50 kHz) for the eye (or a motor) not to perceive the blinking, only the average value.

$$V_{avg} = V_{max} \times \frac{\text{duty cycle}}{100}$$

<div class="box">
  <p class="title is-5">PWM demonstrator</p>
  <div class="field">
    <label class="label" for="pwm-duty">Duty cycle: <span id="pwm-duty-val">50</span> %</label>
    <input type="range" id="pwm-duty" min="0" max="100" value="50" step="1" style="width:100%;" oninput="drawPwm()">
  </div>
  <p class="mb-3">
    Average voltage: <strong><span id="pwm-avg">1.65</span> V</strong> out of 3.3 V
    &nbsp;·&nbsp; <code>analogWrite</code>: <strong><span id="pwm-val">128</span></strong> / 255
  </p>
  <canvas id="pwm-canvas" height="180" style="width:100%; border:1px solid #d4d4d8; border-radius:6px;"></canvas>
</div>

<script>
(function () {
  function drawPwm() {
    var duty = parseInt(document.getElementById('pwm-duty').value, 10);
    document.getElementById('pwm-duty-val').textContent = duty;
    document.getElementById('pwm-avg').textContent = (duty / 100 * 3.3).toFixed(2);
    document.getElementById('pwm-val').textContent = Math.round(duty / 100 * 255);

    var c = document.getElementById('pwm-canvas');
    var w = c.clientWidth || 600;
    var h = c.height;
    c.width = w;
    var ctx = c.getContext('2d');
    ctx.clearRect(0, 0, w, h);

    var left = 34, right = w - 12, top = 22, bottom = h - 22;
    var plotW = right - left;

    // 0 V and 3.3 V reference lines
    ctx.strokeStyle = '#e4e4e7'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(left, top); ctx.lineTo(right, top); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(left, bottom); ctx.lineTo(right, bottom); ctx.stroke();
    ctx.fillStyle = '#71717a'; ctx.font = '12px sans-serif';
    ctx.fillText('3.3 V', 2, top + 4);
    ctx.fillText('0 V', 10, bottom + 4);

    // average voltage (dashed line)
    var avgY = bottom - (duty / 100) * (bottom - top);
    ctx.strokeStyle = '#3b82f6'; ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(left, avgY); ctx.lineTo(right, avgY); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('average', right - 62, avgY - 5);

    // PWM signal (3 periods)
    var periods = 3, pw = plotW / periods, hiW = pw * duty / 100;
    ctx.strokeStyle = '#ef2e31'; ctx.lineWidth = 2;
    ctx.beginPath();
    for (var p = 0; p < periods; p++) {
      var x0 = left + p * pw, xHi = x0 + hiW, x1 = x0 + pw;
      var startY = duty > 0 ? top : bottom;
      if (p === 0) ctx.moveTo(x0, startY); else ctx.lineTo(x0, startY);
      if (duty > 0 && duty < 100) {
        ctx.lineTo(xHi, top); ctx.lineTo(xHi, bottom); ctx.lineTo(x1, bottom);
      } else if (duty >= 100) {
        ctx.lineTo(x1, top);
      } else {
        ctx.lineTo(x1, bottom);
      }
    }
    ctx.stroke();
  }
  window.drawPwm = drawPwm;
  document.addEventListener('DOMContentLoaded', drawPwm);
  window.addEventListener('resize', drawPwm);
  drawPwm();
})();
</script>

### PWM on the ESP32-S3 with Arduino

```cpp
// Value from 0 (0%) to 255 (100%) at 8-bit resolution
analogWrite(LED_PIN, 128);   // ~50% → half brightness
analogWrite(LED_PIN, 0);     // off
analogWrite(LED_PIN, 255);   // full brightness
```

The ESP32-S3 has **8 independent LEDC channels** (*LED Control*, the ESP32's hardware PWM generator), with configurable frequency and resolution (up to 14 bits on the ESP32-S3). `analogWrite()` uses the LEDC layer of Arduino-ESP32 behind the scenes.

### Applications of PWM

| Application | Principle |
|---|---|
| Dimmable LED | Duty cycle ∝ brightness |
| Servo motor | 1–2 ms pulse every 20 ms (angular position) |
| DC motor | Duty cycle ∝ speed |
| Buzzer | Audio frequency → tone |

![Driving a servo motor: one pulse every 20 ms, 1 ms for 0°, 1.5 ms for 90° and 2 ms for 180°](servo-impulsion.svg)

## Quick quiz

**1. What does `analogRead()` return at 12-bit resolution?**

<details><summary>Show the answer</summary>An integer from 0 to 4095 (i.e. 2¹² = 4096 values).</details>

**2. How do you convert a 0–4095 reading into a 0–180° angle?**

<details><summary>Show the answer</summary>With `map(reading, 0, 4095, 0, 180)`, and `constrain()` if the reading can go out of range.</details>

**3. Does PWM produce a real analog voltage?**

<details><summary>Show the answer</summary>No: it switches very quickly between 0 V and 3.3 V. It is the average value (set by the duty cycle) that simulates an intermediate voltage.</details>

## Going further

- [The modules of the kit](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/): reading, calibrating and normalising a joystick
- [Driving a servo motor](/docs/tutorials/electronics/servomotor/): PWM in action

## Summary

- The ADC converts a voltage (0–3.3 V) into an integer (0–4095) on 12 bits.
- **ADC1 only** (GPIO 1–10) when Wi-Fi is active: ADC2 is unusable.
- A joystick = 2 potentiometers (ADC) + 1 button (GPIO).
- `map()` converts a reading from one range to another (0–4095 → 0–180°, 0–255…); `constrain()` clamps it.
- `analogReadMilliVolts()` gives a calibrated voltage, more reliable than the theoretical formula.
- Averaging 8 to 16 readings **smooths** the noise of a "jittery" ADC.
- PWM simulates a variable voltage by varying the `HIGH`/`LOW` ratio.
- `analogWrite(pin, 0–255)` to set brightness, speed or position.
