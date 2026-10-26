---
layout: documentation
hide_hero: true
hero_image: image.jpg
hero_darken: true
image: image.jpg
component_toc: true
doc_header: true

title: ADC & PWM
subtitle: Lire un signal analogique, produire une tension variable
description: Comprendre l'ADC (conversion analogique-numérique) et le PWM (modulation de largeur d'impulsion) sur l'ESP32-S3.
author: Alban Petit

difficulty: 3
todo: 90

prerequisites:
  - label: GPIO & monde numérique
    link: /workshops/microcontroleur/concepts/gpio-monde-numerique/
---

## Au-delà du tout-ou-rien

Le concept précédent - les [GPIO](/workshops/microcontroleur/concepts/gpio-monde-numerique/) - ne connaissait que deux valeurs : allumé ou éteint. Mais le monde réel est plein de nuances : un joystick n'est pas seulement « à gauche » ou « à droite », il se pousse plus ou moins loin ; une LED peut briller à mi-puissance ; un moteur tourner lentement.

Pour manipuler ces valeurs intermédiaires, le microcontrôleur dispose de deux outils, tous deux au menu de ce concept : l'**ADC** pour *lire* une grandeur qui varie en continu, et le **PWM** pour en *simuler* une en sortie.

**À la fin de ce concept, tu sauras :**

- convertir une tension analogique en nombre avec l'ADC ;
- simuler une tension variable en sortie avec le PWM ;
- mettre une lecture à l'échelle avec `map()`.

## Du continu au numérique - l'ADC

Le monde physique est **analogique** : une température, une position de joystick, une luminosité produisent des tensions qui varient en continu entre 0 V et 3,3 V. Le microcontrôleur, lui, ne comprend que des nombres entiers.

Le **convertisseur analogique-numérique** (ADC - *Analog-to-Digital Converter*) transforme cette tension continue en un entier.

### Résolution - 12 bits sur l'ESP32-S3

L'ADC de l'ESP32-S3 a une résolution de **12 bits**, ce qui donne $2^{12} = 4096$ valeurs possibles :

$$\text{valeur} = \frac{V_{entrée}}{V_{ref}} \times (2^{12} - 1) = \frac{V_{entrée}}{3{,}3} \times 4095$$

| Tension | Valeur ADC |
|---|---|
| 0 V | 0 |
| 1,65 V | ≈ 2048 |
| 3,3 V | 4095 |

```cpp
int valeur = analogRead(PIN_JOYSTICK_X);  // retourne 0 à 4095
```

{% include message.html title="L'ADC n'est pas parfaitement linéaire" message="La formule ci-dessus est une approximation pédagogique. En réalité, l'ADC de l'ESP32 est légèrement non linéaire - surtout près de 0 V et de 3,3 V - et sa pleine échelle dépend de l'atténuation configurée. Pour une mesure précise on calibre l'ADC ; pour lire un joystick, cette approximation suffit largement." status="is-info" icon="fas fa-info-circle" %}

### La plage de mesure - l'atténuation

Pour couvrir une plage proche de 0–3,3 V, Arduino-ESP32 applique par défaut l'**atténuation** maximale (11 dB) à `analogRead()` : c'est pourquoi elle « fonctionne » sans réglage. Sur l'ESP32-S3, la plage réellement mesurable va alors d'environ 0 à **3,1 V** ; au-delà, la lecture sature à 4095. On peut ajuster ce comportement et, surtout, obtenir directement une valeur en millivolts déjà calibrée :

```cpp
analogSetAttenuation(ADC_11db);           // plage étendue (~0–3,1 V), le défaut
int mv = analogReadMilliVolts(POT_PIN);   // tension en mV, corrigée d'usine
```

`analogReadMilliVolts()` est plus fiable qu'une conversion manuelle par la formule ci-dessus : il tient compte de la calibration propre à chaque puce.

### Échantillonnage

L'ADC ne lit pas le signal en continu - il le **prélève** à intervalles réguliers (*échantillons*). Entre deux lectures, ce que fait le signal est ignoré. C'est suffisant pour un joystick (variation lente), mais pas pour un signal audio haute fréquence.

### Lisser une lecture bruitée

Une lecture ADC isolée « tremble » de quelques unités à cause du bruit électrique. Pour une valeur stable, on **moyenne plusieurs lectures** :

```cpp
long somme = 0;
for (int i = 0; i < 16; i++) somme += analogRead(POT_PIN);
int valeur = somme / 16;   // moyenne de 16 lectures
```

Plus on moyenne, plus la valeur est stable - mais plus la lecture prend de temps. 8 à 16 échantillons sont un bon compromis pour un potentiomètre ou un joystick.

### Le piège ADC2 + Wi-Fi sur l'ESP32

L'ESP32 possède deux banques d'ADC :

| Banque | Broches | Remarque |
|---|---|---|
| **ADC1** | GPIO 1–10 | Toujours disponible ✅ |
| **ADC2** | GPIO 11–20 | **Inutilisable quand le Wi-Fi est actif** ⚠️ |

Sur la [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/) de l'atelier, toutes les broches analogiques exposées (D0 à D5 et D8 à D10, soit GPIO1 à GPIO9) sont sur l'**ADC1** : le piège ne peut pas se produire avec cette carte, mais il guette dès qu'on passe sur une autre carte ESP32.

{% include message.html title="Toujours utiliser ADC1 pour le joystick" message="Dans ce projet, le Wi-Fi est utilisé pour le multijoueur. Brancher le joystick sur des broches ADC2 (GPIO 11–20) donnera des lectures erratiques ou bloquera l'ADC. Utilisez impérativement des broches **ADC1** (GPIO 1–10) : c'est le cas de D0 et D1 sur la XIAO." status="is-warning" icon="fas fa-exclamation-triangle" %}

### Lire un joystick

Un joystick analogique contient deux **potentiomètres** (résistances réglables qui délivrent une tension variable selon leur position ; un par axe, X et Y) et un **bouton** (appui sur le stick).

```cpp
int x = analogRead(JOYSTICK_X);  // 0 (gauche) → 4095 (droite)
int y = analogRead(JOYSTICK_Y);  // 0 (bas) → 4095 (haut)
bool btn = !digitalRead(JOYSTICK_BTN);  // pull-up interne → LOW = pressé
```

Détecter les directions avec des seuils :

```cpp
if (x < 1000)       direction = GAUCHE;
else if (x > 3000)  direction = DROITE;
else if (y < 1000)  direction = BAS;
else if (y > 3000)  direction = HAUT;
else                direction = CENTRE;
```

### Mettre une lecture à l'échelle - `map()`

Une lecture ADC (0–4095) doit souvent être convertie vers une autre plage : un angle de servo (0–180°), une valeur PWM (0–255), un pourcentage… La fonction `map()` fait cette règle de trois d'un coup :

```cpp
int lecture = analogRead(POT_PIN);            // 0 – 4095
int angle   = map(lecture, 0, 4095, 0, 180);  // 0 – 180°
int pwm     = map(lecture, 0, 4095, 0, 255);  // 0 – 255
```

`map(valeur, entrée_min, entrée_max, sortie_min, sortie_max)` suppose une relation linéaire et **ne borne pas** le résultat : si la lecture peut déborder de la plage attendue, encadre-la avec `constrain(pwm, 0, 255)`.

## Du numérique vers l'analogique - le PWM

Un GPIO numérique ne peut produire que `0 V` ou `3,3 V`. Pour simuler une tension intermédiaire (régler la luminosité d'une LED, la vitesse d'un moteur, la position d'un servo), on utilise le **PWM** (*Pulse Width Modulation* - modulation de largeur d'impulsion).

### Principe

Le PWM alterne rapidement entre `HIGH` et `LOW` à haute fréquence. La proportion de temps à `HIGH` s'appelle le **rapport cyclique** (*duty cycle*) :

| Duty cycle | Effet perçu |
|---|---|
| 0 % | Toujours éteint |
| 50 % | Mi-luminosité |
| 100 % | Plein éclat |

La fréquence est suffisamment élevée (typiquement 1–50 kHz) pour que l'œil (ou un moteur) ne perçoive pas le clignotement - seulement la valeur moyenne.

$$V_{moyen} = V_{max} \times \frac{\text{duty cycle}}{100}$$

<div class="box">
  <p class="title is-5">Démonstrateur PWM</p>
  <div class="field">
    <label class="label" for="pwm-duty">Rapport cyclique : <span id="pwm-duty-val">50</span> %</label>
    <input type="range" id="pwm-duty" min="0" max="100" value="50" step="1" style="width:100%;" oninput="drawPwm()">
  </div>
  <p class="mb-3">
    Tension moyenne : <strong><span id="pwm-avg">1.65</span> V</strong> sur 3,3 V
    &nbsp;·&nbsp; <code>analogWrite</code> : <strong><span id="pwm-val">128</span></strong> / 255
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

    // repères 0 V et 3,3 V
    ctx.strokeStyle = '#e4e4e7'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(left, top); ctx.lineTo(right, top); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(left, bottom); ctx.lineTo(right, bottom); ctx.stroke();
    ctx.fillStyle = '#71717a'; ctx.font = '12px sans-serif';
    ctx.fillText('3,3 V', 2, top + 4);
    ctx.fillText('0 V', 10, bottom + 4);

    // tension moyenne (ligne pointillée)
    var avgY = bottom - (duty / 100) * (bottom - top);
    ctx.strokeStyle = '#3b82f6'; ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(left, avgY); ctx.lineTo(right, avgY); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('moyenne', right - 62, avgY - 5);

    // signal PWM (3 périodes)
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

### PWM sur ESP32-S3 avec Arduino

```cpp
// Valeur de 0 (0%) à 255 (100%) sur une résolution 8 bits
analogWrite(LED_PIN, 128);   // ~50% → demi-luminosité
analogWrite(LED_PIN, 0);     // éteint
analogWrite(LED_PIN, 255);   // plein éclat
```

L'ESP32-S3 dispose de **8 canaux LEDC** (*LED Control*, le générateur de PWM matériel de l'ESP32) indépendants, avec une fréquence et une résolution configurables (jusqu'à 14 bits sur l'ESP32-S3). `analogWrite()` utilise la couche LEDC d'Arduino-ESP32 en arrière-plan.

### Applications du PWM

| Application | Principe |
|---|---|
| LED dimmable | Duty cycle ∝ luminosité |
| Servomoteur | Impulsion 1–2 ms toutes les 20 ms (position angulaire) |
| Moteur DC | Duty cycle ∝ vitesse |
| Buzzer | Fréquence audio → ton |

## Quiz express

**1. Que renvoie `analogRead()` sur une résolution de 12 bits ?**

<details><summary>Voir la réponse</summary>Un entier de 0 à 4095 (soit 2¹² = 4096 valeurs).</details>

**2. Comment convertir une lecture 0–4095 en angle 0–180° ?**

<details><summary>Voir la réponse</summary>Avec `map(lecture, 0, 4095, 0, 180)` - et `constrain()` si la lecture peut déborder.</details>

**3. Le PWM produit-il une vraie tension analogique ?**

<details><summary>Voir la réponse</summary>Non : il alterne très vite entre 0 V et 3,3 V. C'est la valeur moyenne (fixée par le duty cycle) qui simule une tension intermédiaire.</details>

## Pour aller plus loin

- [Entrées : boutons & joystick](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/) - lire un joystick à l'ADC
- [Piloter un servomoteur](/docs/tutorials/electronics/servomotor/) - le PWM en action

## Résumé

- L'ADC convertit une tension (0–3,3 V) en entier (0–4095) sur 12 bits.
- **ADC1 uniquement** (GPIO 1–10) quand le Wi-Fi est actif - ADC2 est inutilisable.
- Un joystick = 2 potentiomètres (ADC) + 1 bouton (GPIO).
- `map()` convertit une lecture d'une plage à une autre (0–4095 → 0–180°, 0–255…) ; `constrain()` la borne.
- `analogReadMilliVolts()` donne une tension calibrée, plus fiable que la formule théorique.
- Moyenner 8 à 16 lectures **lisse** le bruit d'un ADC qui « tremble ».
- Le PWM simule une tension variable en faisant varier le rapport `HIGH`/`LOW`.
- `analogWrite(pin, 0–255)` pour régler luminosité, vitesse ou position.
