---
layout: documentation
hide_hero: false
hero_image: hero.webp
hero_height: is-small
hero_darken: true
image: hero.webp
component_toc: true
doc_header: true

title: Les modules de la mallette
subtitle: Tester bouton, joystick, buzzer et écran sur breadboard, un par un
description: Brancher les quatre modules de la mallette sur une breadboard, et vérifier chacun avec un petit programme et le moniteur série, avant de concevoir la carte.
author: Alban Petit

time: 3
difficulty: 2

prerequisites:
  - label: "Vérification de la toolchain"
    link: /workshops/microcontroleur/tutorials/toolchain-blink/
  - label: "Concept : GPIO & monde numérique"
    link: /workshops/microcontroleur/concepts/gpio-monde-numerique/
  - label: "Concept : ADC & PWM"
    link: /workshops/microcontroleur/concepts/adc-pwm/
  - label: "Concept : Les bus de communication"
    link: /workshops/microcontroleur/concepts/bus-communication/

softwares:
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/

hardwares:
  - label: Carte Seeed Studio XIAO ESP32S3
    link: /docs/references/hardware/xiao-esp32s3/
  - label: "La mallette : module bouton, module joystick, module buzzer, module écran, câbles"
    link: ""
  - label: Une breadboard
    link: ""

todo: 80
---

## Tester avant de concevoir

La mallette contient les quatre modules de la future console : un **bouton**, un **joystick**, un **buzzer** et un **écran**. Avant de dessiner la carte qui les réunira (TD3), on vérifie chacun **séparément**, sur breadboard : comment il se branche, ce qu'il renvoie, comment le programmer. Ce que vous apprenez ici décidera de votre schéma.

La démarche est la même pour chaque module, et pour tout composant que vous découvrirez plus tard :

1. **Identifier** ses broches (sérigraphie, fiche du module) et sa tension d'alimentation ;
2. **Câbler** une seule chose à la fois ;
3. **Lire ou commander** avec le programme le plus simple possible ;
4. **Valider** au moniteur série (ou à l'oreille, à l'œil) avant de passer au suivant.

{% include message.html title="Toujours 3,3 V" message="Alimentez **tous** les modules sur la broche **3V3** de la XIAO, jamais sur 5V : les entrées de l'ESP32-S3 ne supportent pas plus de 3,3 V. Un module conçu pour 5 V fonctionne presque toujours en 3,3 V ; l'inverse peut détruire la carte." status="is-danger" icon="fas fa-exclamation-triangle" %}

### Le câblage de la mallette

On utilise dès maintenant les broches de la carte de la console : un programme écrit aujourd'hui fonctionnera sans modification sur la carte soudée au TD4.

| Module | Broche du module | Broche XIAO |
|---|---|---|
| Bouton | Signal (`S`, `OUT`) | D5 |
| Joystick | `VRx` | D0 (ADC1) |
| Joystick | `VRy` | D1 (ADC1) |
| Joystick | `SW` (appui sur le stick) | D2 |
| Buzzer | Signal (`S`, `I/O`) | D3 |
| Écran | `SCK` (souvent sérigraphiée `SCL`) | D9 |
| Écran | `SDI` / `MOSI` (souvent `SDA`) | D10 |
| Écran | `DC` | D8 |
| Écran | `RESET` | D7 |
| Écran | `CS` | GND |
| Écran | `LED` (rétroéclairage) | 3V3 |
| Tous | `VCC` / `GND` | 3V3 / GND |

Le buzzer n'est pas sur la carte de la console : il est sur D3 le temps de ce TD (sur la carte, D3 sert au connecteur I2C).

Regroupez les broches dans un fichier `include/config.h` de votre projet PlatformIO, que tous les programmes de la suite incluront :

```cpp
// include/config.h : brochage de la console
#pragma once

#include <Arduino.h>

constexpr int PIN_BUTTON          = D5;
constexpr int PIN_JOYSTICK_X      = D0;
constexpr int PIN_JOYSTICK_Y      = D1;
constexpr int PIN_JOYSTICK_SELECT = D2;
constexpr int PIN_BUZZER          = D3;   // seulement sur breadboard

constexpr int PIN_TFT_RESET = D7;
constexpr int PIN_TFT_DC    = D8;
constexpr int PIN_TFT_SCK   = D9;
constexpr int PIN_TFT_MOSI  = D10;
constexpr int PIN_TFT_CS    = -1;   // CS relié à GND : pas de broche
```

`constexpr int` déclare une constante typée : le compilateur la remplace par sa valeur, comme un `#define`, mais vérifie son type.

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Le bouton, lire son niveau"
content="Un module bouton a en général trois broches : `VCC`, `GND` et un signal. Selon le module, le signal vaut **LOW** quand on appuie (bouton relié à GND, avec résistance de tirage vers VCC) ou **HIGH** (l'inverse). Plutôt que de deviner, on **mesure** : le programme affiche le niveau lu, bouton relâché puis enfoncé.

`INPUT_PULLUP` active la résistance de tirage interne de l'ESP32-S3 : elle ne gêne pas un module qui a déjà la sienne, et elle évite une entrée flottante si le module n'en a pas (voir le concept [GPIO & monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/))."
%}

```cpp
#include "config.h"

void setup() {
    Serial.begin(115200);
    pinMode(PIN_BUTTON, INPUT_PULLUP);
}

void loop() {
    Serial.println(digitalRead(PIN_BUTTON) == HIGH ? "HIGH" : "LOW");
    delay(200);  // programme de test : on ralentit l'affichage
}
```

{% include message.html title="Checkpoint" message="Le moniteur série (115200 bauds) affiche un niveau bouton relâché, et l'autre bouton enfoncé. **Notez lequel correspond à l'appui** : c'est la logique de votre module, et elle compte pour la suite." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 2 : Le bouton, détecter un appui une seule fois"
content="Pour un jeu, on ne veut pas savoir si le bouton **est** enfoncé, mais s'il **vient** de l'être : c'est la détection de **front**. Elle a deux pièges :

- tant que le doigt reste appuyé, `loop()` voit le bouton enfoncé des milliers de fois ;
- le contact mécanique **rebondit** quelques millisecondes : un seul appui ressemble à plusieurs.

La fonction ci-dessous ne valide un changement que si le signal est resté stable 30 ms (l'**anti-rebond**), et ne renvoie `true` qu'au moment de l'appui. Elle ne bloque jamais : pas de `delay()`, seulement `millis()`. Adaptez `PRESSED_LEVEL` à ce que vous avez noté à l'étape 1."
%}

```cpp
constexpr int PRESSED_LEVEL = LOW;           // niveau lu quand on appuie (étape 1)
constexpr unsigned long DEBOUNCE_MS = 30;

struct Button {
    int pin;
    int stableLevel;              // dernier niveau confirmé
    int lastRead;                 // dernière lecture brute
    unsigned long lastChangeMs;   // date du dernier mouvement du signal
};

Button button = {PIN_BUTTON, !PRESSED_LEVEL, !PRESSED_LEVEL, 0};

// Renvoie true une seule fois par appui, au moment où il est confirmé
bool justPressed(Button& b) {
    int level = digitalRead(b.pin);
    if (level != b.lastRead) {         // le signal bouge : rebond ou vrai changement
        b.lastRead = level;
        b.lastChangeMs = millis();
    }
    if (millis() - b.lastChangeMs > DEBOUNCE_MS && level != b.stableLevel) {
        b.stableLevel = level;         // stable depuis 30 ms : changement confirmé
        return level == PRESSED_LEVEL; // vrai sur l'appui, faux sur le relâchement
    }
    return false;
}

void loop() {
    static int count = 0;
    if (justPressed(button)) {
        count++;
        Serial.printf("Appui n°%d\n", count);
    }
}
```

{% include message.html title="Checkpoint" message="Chaque appui affiche **une seule** ligne, même si vous maintenez le bouton, et le compteur n'avance jamais de deux pour un seul appui." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 3 : Le joystick, lire les valeurs brutes"
content="Le module joystick a 5 broches : `GND`, `VCC` (souvent sérigraphiée `+5V` : branchez-la quand même sur **3V3**), `VRx`, `VRy` et `SW`. Ses deux axes sont des potentiomètres : l'ADC 12 bits de l'ESP32-S3 les lit entre 0 et 4095. `SW` est un bouton (appui sur le stick) relié à GND : `INPUT_PULLUP`, et LOW quand on appuie."
%}

```cpp
void setup() {
    Serial.begin(115200);
    pinMode(PIN_JOYSTICK_SELECT, INPUT_PULLUP);
    analogReadResolution(12);  // lectures entre 0 et 4095
}

void loop() {
    int x = analogRead(PIN_JOYSTICK_X);
    int y = analogRead(PIN_JOYSTICK_Y);
    bool pressed = digitalRead(PIN_JOYSTICK_SELECT) == LOW;

    Serial.printf("x=%d y=%d select=%d\n", x, y, pressed);
    delay(100);
}
```

{% include message.html title="Checkpoint" message="**Notez la valeur de x au repos** : proche de 2048, mais presque jamais exactement (souvent entre 1800 et 2100). x et y atteignent 0 et 4095 aux butées, et select passe à 1 quand vous enfoncez le stick." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 4 : Le joystick, calibrer et normaliser"
content="Un jeu veut savoir **dans quel sens et de combien** le joueur pousse : une valeur entre **-1** et **+1**, qui vaut **0** au repos. Trois précautions :

- **calibrer** : au démarrage, mesurer le vrai centre (moyenne de 16 lectures, stick relâché) au lieu de supposer 2048 ;
- **zone morte** : un écart de moins de 300 autour du centre est du bruit, on renvoie 0 ;
- **course asymétrique** : on divise par la course disponible **du côté où se trouve le stick**, pour que chaque butée donne bien -1 ou +1.

Le détail est dans le concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/)."
%}

```cpp
constexpr int JOYSTICK_DEADZONE = 300;
int joystickCenterX = 2048;

void calibrateJoystick() {
    long sum = 0;
    for (int i = 0; i < 16; i++) {
        sum += analogRead(PIN_JOYSTICK_X);
        delay(2);
    }
    joystickCenterX = sum / 16;
}

// Convertit une lecture brute (0..4095) en valeur entre -1.0 et +1.0
float normalizeJoystick(int raw, int center) {
    int offset = raw - center;
    if (abs(offset) < JOYSTICK_DEADZONE) {
        return 0.0f;
    }
    int range = (offset > 0) ? (4095 - center) : center;
    return constrain((float)offset / range, -1.0f, 1.0f);
}
```

Appelez `calibrateJoystick()` à la fin de `setup()`, puis affichez `normalizeJoystick(analogRead(PIN_JOYSTICK_X), joystickCenterX)` dans `loop()`.

{% include message.html title="Checkpoint" message="Au repos, la valeur affichée est exactement 0.00. Elle atteint -1.00 d'un côté et +1.00 de l'autre, en passant par toutes les valeurs intermédiaires. Si le sens est inversé par rapport à ce que vous attendez, notez-le : il suffira de changer le signe." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 5 : Le buzzer, jouer une note"
content="Il existe deux sortes de buzzers, et la mallette peut contenir l'une ou l'autre :

- un buzzer **actif** contient son propre oscillateur : il sonne dès qu'on met sa broche à HIGH, toujours sur la même note ;
- un buzzer **passif** est un simple haut-parleur : il faut lui envoyer un signal carré à la fréquence de la note voulue. C'est du **PWM** (voir le concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/)).

`tone(broche, fréquence, durée)` génère ce signal sans bloquer le programme. Testez le programme ci-dessous : un buzzer passif joue une petite gamme ; un buzzer actif fait seulement des clics, et le second test le fait sonner."
%}

```cpp
void setup() {
    pinMode(PIN_BUZZER, OUTPUT);

    // Test 1 : buzzer passif, une gamme do-ré-mi-fa-sol
    const int notes[] = {262, 294, 330, 349, 392};  // fréquences en Hz
    for (int note : notes) {
        tone(PIN_BUZZER, note, 200);
        delay(250);  // test de démarrage : attendre la fin de la note
    }
    delay(1000);

    // Test 2 : buzzer actif, un bip d'une demi-seconde
    digitalWrite(PIN_BUZZER, HIGH);
    delay(500);
    digitalWrite(PIN_BUZZER, LOW);
}

void loop() {}
```

{% include message.html title="Checkpoint" message="Vous savez si votre buzzer est **actif** ou **passif**, et vous l'avez fait sonner. Les `delay()` sont acceptables ici, dans un programme de test qui ne fait rien d'autre ; dans un jeu, une note se lance avec `tone()` et on ne l'attend pas." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 6 : L'écran, premier affichage"
content="L'écran se pilote en **SPI** avec la bibliothèque **Adafruit ST7735 and ST7789**, à déclarer dans `platformio.ini`. On démarre d'abord le bus SPI sur les broches du montage, puis on initialise l'écran en **mode SPI 3** : son CS est relié à GND, et c'est le mode qu'il lui faut dans ce cas (voir le concept [Les bus de communication](/workshops/microcontroleur/concepts/bus-communication/)).

Le repère a son origine `(0, 0)` en **haut à gauche** : x vers la droite, y vers le bas. L'écran est utilisé en portrait, 240 pixels de large et 320 de haut."
%}

```ini
lib_deps =
    adafruit/Adafruit ST7735 and ST7789 Library@^1.11.0
```

```cpp
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ST7789.h>
#include "config.h"

Adafruit_ST7789 tft(&SPI, PIN_TFT_CS, PIN_TFT_DC, PIN_TFT_RESET);

void setup() {
    SPI.begin(PIN_TFT_SCK, -1, PIN_TFT_MOSI, PIN_TFT_CS);  // pas de MISO
    tft.init(240, 320, SPI_MODE3);
    tft.setRotation(2);                                     // portrait
    tft.fillScreen(ST77XX_BLACK);

    tft.setTextSize(4);
    tft.setTextColor(ST77XX_WHITE);
    tft.setCursor(72, 40);
    tft.print("PONG");

    tft.drawRect(20, 120, 200, 60, ST77XX_WHITE);   // rectangle
    tft.fillCircle(120, 250, 20, ST77XX_YELLOW);    // disque
}

void loop() {}
```

{% include message.html title="Checkpoint" message="Le texte « PONG », un rectangle et un disque jaune s'affichent. Écran noir ou blanc ? Suivez le guide [Dépanner un écran TFT SPI qui n'affiche rien](/docs/how-to-guides/ecran-tft-noir/)." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 7 : Les quatre modules ensemble"
content="Dernier test, qui servira de **programme de test de la carte** au TD4 : un point blanc se déplace à l'écran avec le joystick, et le buzzer bipe à chaque appui sur le bouton. Il réutilise tout ce qui précède : `justPressed()`, la calibration et la normalisation du joystick, l'initialisation de l'écran.

La boucle ne contient aucun `delay()` : une image toutes les 16 ms, cadencée par `millis()`. C'est la **game loop** du CM3, que le Pong reprendra."
%}

```cpp
constexpr uint32_t FRAME_TIME_MS = 16;

float dotX = 120, dotY = 160;   // position calculée
int drawnX = 120, drawnY = 160; // position affichée

void loop() {
    static uint32_t lastFrameMs = 0;
    uint32_t nowMs = millis();
    if (nowMs - lastFrameMs < FRAME_TIME_MS) {
        return;
    }
    lastFrameMs = nowMs;

    // 1. Lire
    float x = normalizeJoystick(analogRead(PIN_JOYSTICK_X), joystickCenterX);
    bool beep = justPressed(button);

    // 2. Calculer
    dotX = constrain(dotX + x * 4.0f, 0.0f, 235.0f);
    if (beep) {
        tone(PIN_BUZZER, 880, 50);
    }

    // 3. Afficher : effacer l'ancien point, dessiner le nouveau
    if ((int)dotX != drawnX) {
        tft.fillRect(drawnX, drawnY, 5, 5, ST77XX_BLACK);
        drawnX = (int)dotX;
        tft.fillRect(drawnX, drawnY, 5, 5, ST77XX_WHITE);
    }
}
```

Le `setup()` regroupe les initialisations des étapes précédentes : moniteur série, bouton, joystick (avec sa calibration), buzzer, écran.

{% include message.html title="Checkpoint" message="Le point suit le joystick sans laisser de traînée, et chaque appui sur le bouton fait un bip court, sans ralentir le point. Gardez ce programme : il testera la carte soudée." status="is-success" icon="fas fa-check-circle" %}

## Résultat attendu

Les quatre modules sont testés, et vous savez pour chacun :

- comment il se branche, et sous quelle tension ;
- ce qu'il renvoie (niveau du bouton, plage et centre du joystick) ou ce qu'il attend (type de buzzer, mode SPI de l'écran) ;
- quel programme minimal le fait fonctionner.

Notez ces résultats dans votre journal de bord : ce sont les données d'entrée du schéma de la carte.

{% include message.html title="Étape suivante" message="Le TD3 réunit ces modules sur une carte : voir [Concevoir la carte de la console](/workshops/microcontroleur/tutorials/conception-carte-kicad/)." status="is-success" icon="fas fa-check-circle" %}
