---
layout: documentation
hide_hero: true
hero_image: image.jpg
hero_darken: true
image: image.jpg
component_toc: true
doc_header: true

title: Écran TFT SPI (ST7789)
subtitle: L'afficheur couleur du jeu embarqué
description: "Fiche de référence de l'écran TFT SPI à contrôleur ST7789 utilisé pour afficher le Pong : caractéristiques, brochage et bibliothèque."
author: Alban Petit

todo: 60
---

## Vue d'ensemble

L'**écran TFT** de l'atelier est un petit afficheur couleur piloté par un contrôleur **ST7789** (parfois ILI9341 selon les modèles), relié à la [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/) par le **bus SPI**. C'est la surface d'affichage du Pong puis du Snake.

Le SPI est choisi ici pour sa **vitesse** : dessiner une image à ~60 images/seconde demande un débit qu'un bus lent (I2C) ne fournirait pas. Voir le concept [Les bus de communication](/workshops/microcontroleur/concepts/bus-communication/).

## Caractéristiques

| Élément | Valeur |
|---|---|
| Contrôleur | ST7789 (ou ILI9341) |
| Résolution typique | 240 × 240 ou 240 × 320 px |
| Couleurs | 16 bits (65 536 couleurs, RGB565) |
| Interface | SPI (écriture seule côté ESP32) |
| Tension | **3,3 V** (logique et alimentation) |

## Brochage SPI

| Broche écran | Rôle | Broche XIAO ESP32S3 (atelier) |
|---|---|---|
| VCC | Alimentation 3,3 V | 3V3 |
| GND | Masse | GND |
| SCL / SCK | Horloge SPI | D9 (GPIO8) |
| SDA / MOSI | Données CPU vers écran | D10 (GPIO9) |
| CS | Chip Select (sélection de l'écran) | GND (sélection permanente) |
| DC | Commande / donnée | D8 (GPIO7) |
| RST / RESET | Reset matériel | D7 (GPIO44) |
| BLK / LED | Rétroéclairage | 3V3 direct |

Sur l'écran, les broches SPI sont souvent sérigraphiées `SCL` et `SDA` comme un bus I2C : il s'agit bien de l'horloge et des données SPI.

{% include message.html title="MISO non câblé" message="L'écran ne renvoie pas de données utiles : seul le sens ESP32 vers écran (MOSI) est utilisé. La broche MISO du SPI reste libre." status="is-info" icon="fas fa-info-circle" %}

## Bibliothèque

L'écran se pilote avec la bibliothèque **Adafruit ST7735 and ST7789** (`adafruit/Adafruit ST7735 and ST7789 Library` dans PlatformIO), qui s'appuie sur **Adafruit GFX** pour le dessin. Aucun fichier de configuration : les broches sont passées dans le code.

```cpp
Adafruit_ST7789 tft(&SPI, -1, D8, D7);      // CS (aucun), DC, RESET

SPI.begin(D9, -1, D10, -1);                 // SCK, MISO (aucun), MOSI, CS
tft.init(240, 320, SPI_MODE3);              // mode 3 : CS relié à GND
```

Le CS étant relié en permanence à GND, l'écran doit être initialisé en **SPI mode 3** (horloge à l'état haut au repos). La mise en place complète est détaillée dans le tutoriel [Écran SPI et game loop](/docs/tutorials/electronics/ecran-spi-game-loop/).

{% include message.html title="Écran noir : les trois vérifications" message="Un écran qui reste noir vient presque toujours de l'une de ces trois causes : rétroéclairage (BLK) non alimenté, broches passées à `SPI.begin()` différentes du câblage réel (SCK sur D9, pas sur D8), ou `tft.init()` appelé sans `SPI_MODE3` alors que CS est relié à GND. Un écran ILI9341 se pilote avec la bibliothèque `Adafruit ILI9341`, pas avec celle du ST7789." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Sources

- [Bibliothèque Adafruit ST7735 and ST7789](https://github.com/adafruit/Adafruit-ST7735-Library)
- [Bibliothèque Adafruit GFX](https://github.com/adafruit/Adafruit-GFX-Library)
- [Datasheet ST7789](https://www.rhydolabz.com/documents/33/ST7789.pdf)
