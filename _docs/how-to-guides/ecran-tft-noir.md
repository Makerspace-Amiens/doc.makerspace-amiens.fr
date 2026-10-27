---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true
type: how-to

title: Dépanner un écran TFT SPI qui n'affiche rien
subtitle: Écran noir, blanc, couleurs fausses ou image décalée
description: Trouver pourquoi un écran TFT SPI (ST7789, ILI9341) piloté par un ESP32 reste noir ou affiche une image incorrecte, et le corriger.
author: Alban Petit

time: 1
difficulty: 2
todo: 90

prerequisites:
  - label: Un écran câblé et un programme qui compile
    link: /docs/tutorials/electronics/esp32-ecran-tft-spi/
softwares:
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/
hardwares:
  - label: Écran TFT SPI ST7789
    link: /docs/references/hardware/ecran-tft-spi-st7789/
  - label: Multimètre
    link: ""
---

## Contexte

Ce guide s'applique quand le programme compile et se téléverse, mais que l'écran n'affiche pas ce qui est attendu. Un écran mal configuré ne produit **aucune erreur** : il reste noir ou blanc, sans autre indice. La méthode consiste à partir du symptôme visible, puis à vérifier l'alimentation, le câblage et enfin le code, dans cet ordre.

Les exemples utilisent la bibliothèque Adafruit ST7789 et le câblage de l'atelier Microcontrôleurs (SCK sur D9, MOSI sur D10, DC sur D8, RESET sur D7, CS relié à GND).

## Procédure

### 1. Identifier le symptôme

| Ce que tu vois | Ce que ça indique | Commence par |
|---|---|---|
| Noir complet, aucune lueur | Le rétroéclairage n'est pas alimenté | Étape 2 |
| Blanc ou gris uniforme, écran éclairé | Le rétroéclairage marche, mais l'écran n'a pas été initialisé | Étapes 3 puis 4 |
| Image présente mais couleurs fausses, décalée, en miroir ou partielle | L'écran reçoit des données, mais la configuration ne lui correspond pas | Étape 5 |
| Image correcte puis figée | L'écran fonctionne, c'est le programme qui s'est arrêté | Étape 6 |

Pour distinguer « noir » et « blanc éteint », regarde l'écran de biais, dans une pièce sombre : un rétroéclairage allumé laisse toujours voir une lueur.

### 2. Vérifier l'alimentation et le rétroéclairage

Carte branchée, au multimètre en tension continue, entre chaque broche et GND :

- **VCC** de l'écran : 3,3 V ;
- **LED** (ou **BLK**, **BL**) : 3,3 V. Sans tension sur cette broche, l'écran fonctionne peut-être, mais reste invisible.

Si une tension manque, suis le fil (ou la piste) jusqu'à la carte : fil débranché, mauvaise rangée de la breadboard, soudure sèche.

### 3. Vérifier le câblage des signaux

Carte **débranchée**, multimètre en mode continuité, entre chaque broche de l'écran et la broche de la carte qui doit la piloter :

| Broche écran | Broche XIAO (atelier) |
|---|---|
| SCK (souvent sérigraphiée `SCL`) | D9 |
| MOSI (souvent `SDA` ou `SDI`) | D10 |
| DC (ou `RS`, `A0`) | D8 |
| RESET (ou `RST`) | D7 |
| CS | GND |

Les sérigraphies `SCL` et `SDA` sur un écran SPI désignent bien l'horloge et les données SPI, pas un bus I2C. Une inversion SCK / MOSI ou DC / RESET est l'erreur de câblage la plus fréquente.

### 4. Vérifier l'initialisation dans le code

Compare ton code à ces points, un par un :

```cpp
Adafruit_ST7789 tft(&SPI, PIN_TFT_CS, PIN_TFT_DC, PIN_TFT_RESET);  // ordre : CS, DC, RESET

void setup() {
    SPI.begin(PIN_TFT_SCK, -1, PIN_TFT_MOSI, PIN_TFT_CS);  // les broches réellement câblées
    tft.init(240, 320, SPI_MODE3);                         // résolution de TON écran
    tft.fillScreen(ST77XX_RED);                            // test visible
}
```

- `SPI.begin()` reçoit les broches **câblées** : sans arguments, il utilise les broches par défaut de la carte, qui ne sont pas celles du montage.
- Le constructeur attend **CS, DC, RESET**, dans cet ordre. `PIN_TFT_CS` vaut `-1` si CS est relié à GND.
- Avec CS relié à GND, `tft.init()` doit recevoir **`SPI_MODE3`** : voir le concept [Les bus de communication](/workshops/microcontroleur/concepts/bus-communication/).
- La résolution passée à `tft.init()` est celle de ton module (240 × 320, 240 × 240, 135 × 240...).
- `tft.init()` est appelé **avant** toute fonction de dessin.

Un `fillScreen(ST77XX_RED)` juste après l'initialisation est le test le plus simple : si l'écran devient rouge, l'initialisation est bonne et le problème est plus loin dans le programme.

### 5. Ajuster la configuration à ton module

| Ce que tu vois | Correction |
|---|---|
| Couleurs inversées (noir à la place de blanc, couleurs en négatif) | `tft.invertDisplay(false);` après `tft.init()` (ou `true`, selon le module) |
| Image tournée ou en miroir | Une autre valeur de `tft.setRotation()` (0 à 3) |
| Image décalée, bande de pixels parasites sur un bord | La résolution passée à `tft.init()` ne correspond pas au module |
| Rien ne change malgré tout | Le contrôleur n'est pas un ST7789 : regarde la référence du module (ILI9341, ST7735...) et utilise la bibliothèque Adafruit correspondante |
| Image qui se brouille par moments | Fils trop longs sur la breadboard : baisse la fréquence avec `tft.setSPISpeed(10000000);` |

Pour un écran **ILI9341**, la bibliothèque est `Adafruit ILI9341`, et l'ordre du constructeur change : `Adafruit_ILI9341 tft(&SPI, DC, CS, RESET);`, puis `tft.begin();`.

### 6. Vérifier que le programme avance

Si l'écran affiche une image puis se fige, ou n'affiche que le début :

- ajoute un `Serial.println()` dans `loop()` et regarde le moniteur série : s'il se tait, le programme est bloqué (boucle infinie, `while` qui n'en finit pas, plantage qui redémarre la carte) ;
- un écran qui **clignote** sans arrêt vient presque toujours d'un `fillScreen()` appelé à chaque image : on ne redessine que ce qui change (voir [Écran SPI et game loop](/docs/tutorials/electronics/ecran-spi-game-loop/)).

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Noir complet | Broche LED/BLK non alimentée | Étape 2 |
| Blanc uniforme | Pas d'initialisation : broches de `SPI.begin()`, câblage, mode SPI | Étapes 3 et 4 |
| Blanc uniforme, CS relié à GND | `tft.init()` sans `SPI_MODE3` | Étape 4 |
| Fonctionne après RESET, pas au branchement | Écran pas encore prêt quand le programme démarre | Ajouter `delay(100);` avant `tft.init()` |
| Couleurs en négatif | Inversion des couleurs propre au module | Étape 5, `invertDisplay()` |
| Image partielle ou décalée | Mauvaise résolution | Étape 5 |
| Écran qui clignote en permanence | `fillScreen()` à chaque image | Étape 6 |

## Voir aussi

- La fiche [Écran TFT SPI (ST7789)](/docs/references/hardware/ecran-tft-spi-st7789/) : brochage et bibliothèque.
- Le tutoriel [Écran TFT en SPI avec un ESP32](/docs/tutorials/electronics/esp32-ecran-tft-spi/) : câblage et premier affichage.
