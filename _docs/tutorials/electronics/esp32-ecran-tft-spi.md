---
layout: documentation
hide_hero: false
hero_image: hero.jpg
hero_height: is-small
hero_darken: true
image: hero.jpg
component_toc: true
doc_header: true
type: tutorial

title: Écran TFT en SPI avec un ESP32
subtitle: Câbler un écran TFT et dessiner texte, formes et couleurs
description: Découvrir le bus SPI en pratique en câblant un écran TFT ST7789 sur un ESP32, en configurant la bibliothèque Adafruit, puis en dessinant du texte et des formes.
author: Alban Petit

time: 2
difficulty: 2
compatibilities-os: win, mac, lin

prerequisites:
  - label: VSCode et PlatformIO installés
    link: /docs/tutorials/software/vscode-platformio/installation-platformio/
  - label: "Concept : Les bus de communication"
    link: /workshops/microcontroleur/concepts/bus-communication/
  - label: Notions de base en C++ (framework Arduino)
    link: ""

softwares:
  - label: Arduino IDE
    link: /docs/references/software/arduino-ide/
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/

hardwares:
  - label: Carte ESP32-S3 (ex. ESP32-S3-DevKitC-1)
    link: /docs/references/hardware/esp32-s3-devkitc-1/
  - label: Écran TFT SPI ST7789
    link: /docs/references/hardware/ecran-tft-spi-st7789/

todo: 80
---

## Objectif

Le **SPI** (*Serial Peripheral Interface*) est le bus de communication le plus rapide et le plus utilisé pour piloter un écran. Ce tutoriel couvre :

1. Le câblage d'un écran TFT SPI à contrôleur ST7789 sur un ESP32.
2. L'installation de la bibliothèque **Adafruit ST7735 and ST7789**, avec Arduino IDE ou PlatformIO.
3. Le dessin de texte, de formes et de couleurs à l'écran.

{% include message.html title="Tu suis l'atelier Microcontrôleurs ?" message="Le montage de l'atelier (XIAO ESP32S3, écran sur le PCB du projet) a son propre tutoriel, avec le câblage figé du PCB : [Écran SPI et game loop](/docs/tutorials/electronics/ecran-spi-game-loop/). Celui-ci convient à toute carte ESP32 câblée sur breadboard." status="is-info" icon="fas fa-info-circle" %}

### Le bus SPI en un coup d'œil

Contrairement à l'I2C (2 fils, plusieurs esclaves par adressage), le SPI utilise **4 fils** et sélectionne son esclave par une broche dédiée :

| Fil | Rôle |
|---|---|
| **MOSI** | *Master Out Slave In*, données envoyées par l'ESP32 vers l'écran |
| **MISO** | *Master In Slave Out*, données renvoyées par le périphérique (inutilisé pour un écran en écriture seule) |
| **SCK** (ou SCLK) | Horloge, générée par l'ESP32 |
| **CS** (*Chip Select*) | Sélectionne l'esclave actif, un fil dédié par périphérique sur le bus |

Un écran ajoute généralement deux broches supplémentaires, hors du bus SPI standard :

| Fil | Rôle |
|---|---|
| **DC** (*Data/Command*) | Indique si l'octet envoyé est une commande ou une donnée de pixel |
| **RST** | Reset matériel de l'écran |

{% include message.html title="Pour la théorie complète" message="Ce tutoriel reste pratique. Pour comparer SPI, I2C et UART en détail (vitesse, nombre de fils, cas d'usage), consulte le concept [Les bus de communication](/workshops/microcontroleur/concepts/bus-communication/)." status="is-info" icon="fas fa-book" %}

## Matériel nécessaire

- Une carte ESP32-S3 (framework Arduino), par exemple l'[ESP32-S3-DevKitC-1](/docs/references/hardware/esp32-s3-devkitc-1/)
- Un écran TFT SPI à contrôleur **ST7789** (le contrôleur figure généralement au dos de l'écran ou dans sa référence produit), et sa **résolution** (240 × 320, 240 × 240 ou 135 × 240 selon le modèle)
- Une breadboard et des fils de câblage

## Étape 1 : Câbler l'écran

{% include step-tuto.html
greyBackground=true
title="Câblage"
content="Relie les broches de l'écran à l'ESP32. Sur l'ESP32-S3, la **GPIO matrix** route le bus SPI vers presque n'importe quelle broche : les numéros ci-dessous sont un exemple, qu'on retrouvera dans le code.

```text
Écran TFT          ESP32-S3
VCC   ────────────  3,3 V
GND   ────────────  GND
CS    ────────────  GPIO10
DC    ────────────  GPIO11
RST   ────────────  GPIO12
SCK   ────────────  GPIO13
MOSI  ────────────  GPIO14
BLK   ────────────  3,3 V (ou un GPIO pour piloter le rétroéclairage)
```

Sur l'écran, SCK et MOSI sont souvent sérigraphiés `SCL` et `SDA`, comme pour un bus I2C : ce sont bien l'horloge et les données SPI.
" %}

{% include message.html title="3,3 V, pas 5 V" message="Vérifie la tension d'alimentation acceptée par ton module : la plupart des écrans TFT SPI fonctionnent en 3,3 V, tension native des GPIO de l'ESP32. N'applique jamais 5 V sur une broche de données de l'ESP32." status="is-danger" icon="fas fa-exclamation-triangle" %}

{% include message.html title="ESP32 classique : attention aux broches" message="Sur un ESP32 classique (carte `esp32dev`), les GPIO6 à 11 sont reliés à la mémoire Flash et ne doivent jamais être câblés. Utilise par exemple les broches du bus VSPI : SCK sur GPIO18, MOSI sur GPIO23, CS sur GPIO5, DC sur GPIO16 et RST sur GPIO17, et reporte ces numéros dans le code." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Étape 2 : Installer la bibliothèque

La bibliothèque **Adafruit ST7735 and ST7789** gère le protocole du contrôleur. Elle s'appuie sur **Adafruit GFX**, qui fournit les fonctions de dessin (texte, rectangles, cercles, lignes) communes à tous les écrans Adafruit. Aucun fichier de configuration : les broches sont passées directement dans le code.

### Avec l'Arduino IDE

{% include step-tuto.html
greyBackground=true
title="Installer la bibliothèque"
content="Dans le **Library Manager**, recherche `Adafruit ST7735 and ST7789` et installe-la. Accepte l'installation des dépendances proposées (dont **Adafruit GFX Library**)." %}

### Avec VSCode et PlatformIO

Ajoute la bibliothèque dans `platformio.ini` ; PlatformIO télécharge ses dépendances tout seul :

```ini
[env:esp32-s3-devkitc-1]
platform = espressif32
board = esp32-s3-devkitc-1
framework = arduino
monitor_speed = 115200
lib_deps =
    adafruit/Adafruit ST7735 and ST7789 Library@^1.11.0
```

{% include message.html title="Checkpoint" message="Avant de continuer, vérifie que le projet compile avec un `main.cpp` vide (seulement `#include <Arduino.h>`, `setup()` et `loop()`)." status="is-success" icon="fas fa-check-circle" %}

## Étape 3 : Premières primitives

L'objet `tft` représente l'écran. On démarre d'abord le bus SPI sur les broches câblées, puis on initialise l'écran avec **sa résolution**. Le repère a son origine `(0, 0)` en haut à gauche : x augmente vers la droite, y vers le bas.

```cpp
#include <Arduino.h>
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ST7789.h>

constexpr int PIN_TFT_CS   = 10;
constexpr int PIN_TFT_DC   = 11;
constexpr int PIN_TFT_RST  = 12;
constexpr int PIN_TFT_SCK  = 13;
constexpr int PIN_TFT_MOSI = 14;

Adafruit_ST7789 tft(&SPI, PIN_TFT_CS, PIN_TFT_DC, PIN_TFT_RST);

void setup() {
    SPI.begin(PIN_TFT_SCK, -1, PIN_TFT_MOSI, PIN_TFT_CS);  // pas de MISO

    tft.init(240, 320);              // résolution de TON écran (largeur, hauteur)
    tft.setSPISpeed(40000000);       // 40 MHz
    tft.setRotation(1);              // paysage (0 à 3 selon l'orientation voulue)
    tft.fillScreen(ST77XX_BLACK);

    tft.setTextColor(ST77XX_WHITE);
    tft.setTextSize(2);              // police de 6 x 8 pixels, multipliée par 2
    tft.setCursor(10, 10);
    tft.print("Hello ESP32 !");

    tft.drawRect(20, 50, 60, 30, ST77XX_WHITE);           // rectangle contour
    tft.fillCircle(160, 65, 15, ST77XX_RED);              // cercle plein
    tft.drawLine(0, 100, tft.width(), 100, ST77XX_GREEN);
}

void loop() {}
```

{% include message.html title="Écran noir après flashage ?" message="Un écran mal configuré reste noir, sans erreur de compilation. Vérifie dans l'ordre : le rétroéclairage (BLK) est-il alimenté ? Les broches passées à `SPI.begin()` et au constructeur correspondent-elles au câblage réel ? La résolution passée à `tft.init()` est-elle celle de ton écran ? Si ton module n'a **pas de broche CS** (ou si CS est relié à GND), passe `-1` comme CS et initialise avec `tft.init(240, 240, SPI_MODE3)` : sans CS, le ST7789 a besoin d'une horloge à l'état haut au repos." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include message.html title="Et un écran ILI9341 ?" message="Le contrôleur ILI9341 a sa propre bibliothèque, `Adafruit ILI9341`, avec les mêmes fonctions de dessin (Adafruit GFX). Seules la déclaration et l'initialisation changent : `Adafruit_ILI9341 tft(&SPI, PIN_TFT_DC, PIN_TFT_CS, PIN_TFT_RST);` (attention, DC avant CS) puis `tft.begin();` à la place de `tft.init(...)`. Les couleurs s'écrivent alors `ILI9341_BLACK`, `ILI9341_WHITE`..." status="is-info" icon="fas fa-info-circle" %}

{% include message.html title="Checkpoint" message="Tu dois voir le texte « Hello ESP32 ! », un rectangle, un cercle rouge et une ligne verte à l'écran. Si l'image est décalée ou partiellement brouillée, la résolution passée à `tft.init()` ne correspond pas à ton écran." status="is-success" icon="fas fa-check-circle" %}

### Les couleurs : format RGB565

L'écran code chaque couleur sur 16 bits (5 bits rouge, 6 bits vert, 5 bits bleu) plutôt que les 24 bits habituels (RGB888). Des constantes couvrent les couleurs courantes (`ST77XX_BLACK`, `ST77XX_WHITE`, `ST77XX_RED`, `ST77XX_GREEN`, `ST77XX_BLUE`, `ST77XX_YELLOW`, `ST77XX_ORANGE`...), et une couleur personnalisée se construit avec :

```cpp
uint16_t violet = tft.color565(140, 60, 200);  // rouge, vert, bleu (0-255 chacun)
tft.fillCircle(80, 65, 15, violet);
```

### Effacer avant de redessiner

Contrairement à un écran OLED bufferisé (comme le SSD1306), cette bibliothèque dessine directement à l'écran à chaque appel : il n'y a pas de `display()` à invoquer pour valider un rendu. En contrepartie, il faut **effacer explicitement** une forme avant de la redessiner ailleurs, sous peine de laisser une traînée :

```cpp
int x = 20;

void loop() {
    tft.fillCircle(x, 65, 10, ST77XX_BLACK);  // efface l'ancienne position
    x = (x + 5) % tft.width();
    tft.fillCircle(x, 65, 10, ST77XX_WHITE);  // dessine la nouvelle
    delay(30);
}
```

Efface et redessine **seulement ce qui bouge** : `fillScreen()` à chaque image enverrait tous les pixels de l'écran par le bus SPI et provoquerait un fort scintillement.

## Résultat attendu

L'écran affiche un texte, des formes fixes, et un cercle blanc qui se déplace horizontalement en boucle sans laisser de traînée. Ce motif « effacer l'ancienne position puis dessiner la nouvelle » est la base de toute animation sur un écran TFT.

## Pour aller plus loin

- Concept [Les bus de communication](/workshops/microcontroleur/concepts/bus-communication/) : comparer SPI, I2C et UART en détail.
- Tutoriel [Écran SPI et game loop](/docs/tutorials/electronics/ecran-spi-game-loop/) : remplacer `delay()` par une game loop cadencée avec `millis()`, et animer une raquette et une balle.
- Tutoriel [Écran OLED SSD1306 avec ESP32](/docs/tutorials/electronics/esp32-ssd1306-oled/) pour découvrir l'alternative I2C, plus lente mais avec seulement 2 fils.
- Tutoriel [GPIO sur ESP32](/docs/tutorials/electronics/esp32-gpio/) pour combiner cet écran avec un bouton ou un joystick en entrée.
