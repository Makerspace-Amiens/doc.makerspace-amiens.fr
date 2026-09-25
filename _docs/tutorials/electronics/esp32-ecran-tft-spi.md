---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true
type: tutorial

title: Écran TFT en SPI avec un ESP32
subtitle: Câbler un écran TFT_eSPI et dessiner texte, formes et couleurs
description: Découvrir le bus SPI en pratique en câblant un écran TFT (ST7789 ou ILI9341), en configurant la bibliothèque TFT_eSPI, puis en dessinant du texte et des formes.
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
  - label: Carte compatible ESP32
    link: ""
  - label: Écran TFT SPI (ST7789 ou ILI9341)
    link: ""

todo: 60
---

## Objectif

Le **SPI** (*Serial Peripheral Interface*) est le bus de communication le plus rapide et le plus utilisé pour piloter un écran. Ce tutoriel couvre :

1. Le câblage d'un écran TFT SPI (ST7789 ou ILI9341) sur un ESP32.
2. L'installation et la configuration de la bibliothèque **TFT_eSPI**, avec Arduino IDE ou PlatformIO.
3. Le dessin de texte, de formes et de couleurs à l'écran.

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

- Une carte compatible ESP32 (framework Arduino)
- Un écran TFT SPI (pilote ST7789 ou ILI9341 ; le pilote exact figure généralement au dos de l'écran ou dans sa référence produit)
- Une breadboard et des fils de câblage

## Étape 1 : Câbler l'écran

{% include step-tuto.html
greyBackground=true
title="Câblage"
content="Relie les 6 broches de l'écran à l'ESP32. Les broches CS, DC et RST peuvent être câblées sur n'importe quel GPIO libre ; SCK et MOSI doivent utiliser un bus SPI matériel de l'ESP32 pour de bonnes performances.

```text
Écran TFT          ESP32
VCC   ────────────  3,3 V
GND   ────────────  GND
CS    ────────────  GPIO10
DC    ────────────  GPIO11
RST   ────────────  GPIO12
SCK   ────────────  GPIO13
MOSI  ────────────  GPIO14
BLK   ────────────  3,3 V (ou un GPIO pour piloter le rétroéclairage)
```

" %}

{% include message.html title="3,3 V, pas 5 V" message="Vérifie la tension d'alimentation acceptée par ton module : la plupart des écrans TFT SPI fonctionnent en 3,3 V, tension native des GPIO de l'ESP32. N'applique jamais 5 V sur une broche de données de l'ESP32." status="is-danger" icon="fas fa-exclamation-triangle" %}

## Étape 2 : Installer et configurer TFT_eSPI

**TFT_eSPI** est la bibliothèque de référence pour piloter ces écrans sur ESP32 : rapide, et compatible avec de nombreux contrôleurs (ST7789, ILI9341, ST7735...). Sa particularité : la configuration matérielle (pins, contrôleur) ne se fait pas dans le code, mais dans un fichier `User_Setup.h` séparé.

### Avec l'Arduino IDE

{% include step-tuto.html
greyBackground=true
title="Installer la bibliothèque"
content="Dans le **Library Manager**, recherche `TFT_eSPI` et installe la bibliothèque de *Bodmer*. Le fichier `User_Setup.h` à modifier se trouve dans le dossier de la bibliothèque installée (`Documents/Arduino/libraries/TFT_eSPI/User_Setup.h`)." %}

### Avec VSCode et PlatformIO

Ajoute la bibliothèque dans `platformio.ini`, puis force le chargement de ta configuration personnalisée avec `build_flags` :

```ini
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
lib_deps =
    bodmer/TFT_eSPI
build_flags =
    -DUSER_SETUP_LOADED=1
    -include User_Setup.h
```

Crée ensuite un fichier `User_Setup.h` à la racine de ton projet (à côté de `platformio.ini`) :

```cpp
// User_Setup.h
#define ST7789_DRIVER      // adapte selon le contrôleur de ton écran (ST7789, ILI9341...)

#define TFT_CS   10
#define TFT_DC   11
#define TFT_RST  12
#define TFT_SCLK 13
#define TFT_MOSI 14

#define SPI_FREQUENCY  40000000
```

{% include message.html title="Écran noir après flashage ?" message="Un `User_Setup` mal configuré donne un écran noir, pas une erreur de compilation : c'est le piège classique de cette bibliothèque. Vérifie dans l'ordre : le rétroéclairage (BLK) est-il alimenté ? Le driver (ST7789_DRIVER / ILI9341_DRIVER) correspond-il à ton écran ? Les pins déclarées correspondent-elles au câblage réel ?" status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include message.html title="Checkpoint" message="Avant de continuer, vérifie que le projet compile et se flashe sans erreur, même si l'écran reste noir à ce stade (aucun dessin n'a encore été envoyé)." status="is-success" icon="fas fa-check-circle" %}

## Étape 3 : Premières primitives

`TFT_eSPI` expose un système de coordonnées `(0,0)` en haut à gauche de l'écran.

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  tft.setRotation(1);              // paysage (0 à 3 selon l'orientation voulue)
  tft.fillScreen(TFT_BLACK);

  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(2);
  tft.setCursor(10, 10);
  tft.print("Hello ESP32 !");

  tft.drawRect(20, 50, 60, 30, TFT_WHITE);   // rectangle contour
  tft.fillCircle(160, 65, 15, TFT_RED);      // cercle plein
  tft.drawLine(0, 100, tft.width(), 100, TFT_GREEN);
}

void loop() {}
```

{% include message.html title="Checkpoint" message="Tu dois voir le texte « Hello ESP32 ! », un rectangle, un cercle rouge et une ligne verte à l'écran. Si l'écran reste noir, reviens à la configuration de l'Étape 2 avant d'aller plus loin." status="is-success" icon="fas fa-check-circle" %}

### Les couleurs : format RGB565

`TFT_eSPI` code chaque couleur sur 16 bits (5 bits rouge, 6 bits vert, 5 bits bleu) plutôt que les 24 bits habituels (RGB888). Des constantes couvrent les couleurs courantes (`TFT_BLACK`, `TFT_WHITE`, `TFT_RED`, `TFT_GREEN`, `TFT_BLUE`, `TFT_YELLOW`...), et une couleur personnalisée se construit avec :

```cpp
uint16_t orange = tft.color565(255, 140, 0); // rouge, vert, bleu (0-255 chacun)
tft.fillCircle(80, 65, 15, orange);
```

### Effacer avant de redessiner

Contrairement à un écran OLED bufferisé (comme le SSD1306), `TFT_eSPI` dessine directement à l'écran à chaque appel : il n'y a pas de `display()` à invoquer pour valider un rendu. En contrepartie, il faut **effacer explicitement** une forme avant de la redessiner ailleurs, sous peine de laisser une traînée :

```cpp
int x = 20;

void loop() {
  tft.fillCircle(x, 65, 10, TFT_BLACK);  // efface l'ancienne position
  x = (x + 5) % tft.width();
  tft.fillCircle(x, 65, 10, TFT_WHITE);  // dessine la nouvelle
  delay(30);
}
```

## Résultat attendu

L'écran affiche un texte, des formes fixes, et un cercle blanc qui se déplace horizontellement en boucle sans laisser de traînée. Ce motif « effacer l'ancienne position puis dessiner la nouvelle » est la base de toute animation avec `TFT_eSPI`.

## Pour aller plus loin

- Concept [Les bus de communication](/workshops/microcontroleur/concepts/bus-communication/) : comparer SPI, I2C et UART en détail.
- Tutoriel [Écran OLED SSD1306 avec ESP32](/docs/tutorials/electronics/esp32-ssd1306-oled/) pour découvrir l'alternative I2C, plus lente mais avec seulement 2 fils.
- Tutoriel [GPIO sur ESP32](/docs/tutorials/electronics/esp32-gpio/) pour combiner cet écran avec un bouton ou un joystick en entrée.
- Remplace `delay()` par un minuteur basé sur `millis()` pour animer l'écran sans jamais bloquer la lecture d'autres entrées (bouton, joystick).
