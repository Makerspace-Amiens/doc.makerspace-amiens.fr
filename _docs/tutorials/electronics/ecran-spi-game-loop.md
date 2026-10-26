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

title: Écran SPI et game loop
subtitle: Câbler l'écran, dessiner les premières formes et faire rebondir une balle
description: Câbler un écran TFT en SPI avec TFT_eSPI, dessiner du texte et des formes, puis construire une game loop non bloquante avec une balle qui rebondit.
author: Alban Petit

time: 3
difficulty: 3

prerequisites:
  - label: "Boutons, joystick et moniteur série"
    link: /workshops/microcontroleur/tutorials/entrees-boutons-joystick/
  - label: "Concept : Les bus de communication"
    link: /workshops/microcontroleur/concepts/bus-communication/

hardwares:
  - label: Écran TFT SPI (ST7789 ou ILI9341)
    link: ""

todo: 10
---

## Écran SPI et game loop

Ce tutoriel ajoute la dernière brique matérielle du montage : l'**écran**. Le câblage des boutons et du joystick posé au tutoriel [Boutons, joystick et moniteur série](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/) ne bouge pas. À la fin, une balle rebondit sur l'écran - la première brique visuelle du Pong.

### Câblage additionnel de l'atelier

| Signal | Broche XIAO | Rôle |
|---|---|---|
| SCK | D9 (GPIO8) | Horloge SPI |
| MOSI | D10 (GPIO9) | Données CPU → écran |
| DC | D8 (GPIO7) | Bascule commande / donnée |
| RESET | D7 (GPIO44) | Reset matériel de l'écran |
| CS | GND | Écran sélectionné en permanence |
| LED (rétroéclairage) | 3V3 | Rétroéclairage toujours allumé |
| VCC / GND | 3V3 / GND | Alimentation de l'écran |

```mermaid
graph LR
  SCK --> D9["D9"]
  MOSI --> D10["D10"]
  DC --> D8["D8"]
  RESET --> D7["D7"]
  CS --> GND["GND"]
  LED --> V33["3V3"]
```

C'est le câblage du PCB du projet. Il économise deux broches : le **CS** est relié à GND, car l'écran est le seul composant du bus SPI et peut donc rester sélectionné en permanence ; le **rétroéclairage** est branché directement sur 3V3. Avec les boutons, le joystick et le connecteur I2C, les 11 broches de la XIAO sont ainsi toutes utilisées.

{% include message.html title="L'horloge SPI n'est pas sur D8" message="Le SCK par défaut de la XIAO est D8, mais le PCB l'a placé sur **D9** (et DC sur D8). L'ESP32-S3 route le SPI vers n'importe quelle broche grâce à sa GPIO matrix : il suffit de déclarer les bons numéros dans `User_Setup.h`. Ne recopie donc pas un `User_Setup.h` trouvé en ligne pour la XIAO : ses broches ne correspondraient pas." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include message.html title="MISO non utilisé" message="L'écran ne renvoie jamais de données utiles à l'ESP32 : seul le sens CPU → écran (MOSI) est câblé. C'est la différence entre un bus SPI complet et cet usage en écriture seule - voir le concept [Les bus de communication](/workshops/microcontroleur/concepts/bus-communication/)." status="is-info" icon="fas fa-info-circle" %}

{% include step-tuto.html
greyBackground=true
title="1 - Installer TFT_eSPI et configurer User_Setup"
content="Ajoute la bibliothèque **TFT_eSPI** à ton `platformio.ini`, puis copie le fichier `User_Setup.h` fourni (identique pour tout le groupe) dans le dossier de la librairie. C'est **le** point de blocage classique de cette étape : un `User_Setup` mal configuré donne un écran noir, pas une erreur de compilation."
%}

```ini
[env:seeed_xiao_esp32s3]
platform = espressif32
board = seeed_xiao_esp32s3
framework = arduino
monitor_speed = 115200
lib_deps =
    bodmer/TFT_eSPI@^2.5.0
build_flags =
    -DUSER_SETUP_LOADED=1
    -include User_Setup.h
```

```cpp
// User_Setup.h (extrait clé en main - pins figées de l'atelier)
#define ST7789_DRIVER      // adapter selon le contrôleur de ton écran

// Numéros de GPIO obligatoires ici (pas D7, D6...) : la bibliothèque les teste avec #if
#define TFT_MISO -1   // non câblé
#define TFT_SCLK  8   // D9
#define TFT_MOSI  9   // D10
#define TFT_CS   -1   // relié à GND sur le PCB
#define TFT_DC    7   // D8
#define TFT_RST  44   // D7

#define SPI_FREQUENCY  40000000
```

{% include message.html title="Écran noir après flashage ?" message="Vérifie dans l'ordre : le rétroéclairage (LED/BLK) est-il alimenté ? Le driver (`ST7789_DRIVER` / `ILI9341_DRIVER`) correspond-il à ton écran ? Les pins du `User_Setup.h` correspondent-elles au câblage réel ? Ces trois points couvrent la quasi-totalité des écrans noirs." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include message.html title="Checkpoint" message="À ce stade, le projet doit compiler et se flasher sans erreur - même si l'écran reste noir : aucun dessin n'a encore été envoyé. Une erreur de compilation ici vient presque toujours d'un chemin ou d'un nom de fichier incorrect pour User_Setup.h." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="2 - Premières primitives"
content="`TFT_eSPI` expose un système de coordonnées `(0,0)` en haut à gauche. Teste les formes et le texte de base avant de construire quoi que ce soit d'animé."
%}

```cpp
#include <Arduino.h>
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  tft.setRotation(1);              // paysage
  tft.fillScreen(TFT_BLACK);

  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setTextSize(2);
  tft.setCursor(10, 10);
  tft.print("PONG");

  tft.drawRect(20, 40, 60, 20, TFT_WHITE);   // rectangle contour
  tft.fillCircle(160, 60, 8, TFT_WHITE);     // cercle plein
}

void loop() {}
```

{% include message.html title="Checkpoint" message="Tu dois voir le texte « PONG », un rectangle et un cercle blancs à l'écran. Si l'écran reste noir, reviens à la configuration de l'étape précédente avant d'aller plus loin." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="3 - Une raquette qui suit le joystick"
content="Réutilise la lecture ADC du tutoriel précédent pour déplacer un rectangle (la raquette) verticalement. On **efface l'ancienne position avant de redessiner** - sans ça, la raquette laisse une traînée à l'écran."
%}

```cpp
#define JOY_Y D1   // GPIO2

int raquetteY = 60;

void dessinerRaquette(int y, uint16_t couleur) {
  tft.fillRect(10, y, 6, 30, couleur);
}

void loop() {
  int y = map(analogRead(JOY_Y), 0, 4095, 0, tft.height() - 30);

  if (y != raquetteY) {
    dessinerRaquette(raquetteY, TFT_BLACK);  // efface l'ancienne position
    dessinerRaquette(y, TFT_WHITE);          // dessine la nouvelle
    raquetteY = y;
  }
}
```

{% include message.html title="Checkpoint" message="La raquette doit suivre le joystick sans à-coups, et sans laisser de traînée blanche derrière elle en se déplaçant." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="4 - La game loop non bloquante"
content="`delay()` bloquerait toute lecture d'entrée pendant l'attente - inacceptable pour un jeu. `millis()` permet de cadencer les mises à jour **sans jamais bloquer** le CPU, en comparant le temps écoulé à chaque passage de `loop()`."
%}

```cpp
unsigned long dernierUpdate = 0;
const unsigned long INTERVALLE = 16;  // ~60 images/seconde

void loop() {
  unsigned long maintenant = millis();

  if (maintenant - dernierUpdate >= INTERVALLE) {
    dernierUpdate = maintenant;

    lireEntrees();
    mettreAJourJeu();
    redessiner();
  }
}
```

Cette structure **lire → mettre à jour → redessiner** est la charpente de toute la suite du projet : le tutoriel [Collisions, score et machine à états](/workshops/microcontroleur/tutorials/collisions-fsm-pong/) et le projet Snake ne feront qu'enrichir `mettreAJourJeu()` et `redessiner()`.

{% include step-tuto.html
greyBackground=true
title="5 - Une balle qui rebondit"
content="Assemble les deux étapes précédentes : une balle en mouvement constant, qui rebondit sur les bords haut/bas et droit de l'écran (le bord gauche sera la raquette, gérée à l'étape suivante)."
%}

```cpp
int balleX = 160, balleY = 60;
int balleVX = 3, balleVY = 2;

void mettreAJourJeu() {
  balleX += balleVX;
  balleY += balleVY;

  if (balleY <= 0 || balleY >= tft.height())  balleVY = -balleVY;
  if (balleX >= tft.width())                  balleVX = -balleVX;
}

void redessiner() {
  static int ancienX = balleX, ancienY = balleY;

  tft.fillCircle(ancienX, ancienY, 4, TFT_BLACK);  // efface l'ancienne position
  tft.fillCircle(balleX, balleY, 4, TFT_WHITE);    // dessine la nouvelle

  ancienX = balleX;
  ancienY = balleY;
}
```

{% include message.html title="Checkpoint" message="Une balle blanche doit se déplacer en continu et rebondir sur les bords haut, bas et droit, sans clignotement ni traînée visible." status="is-success" icon="fas fa-check-circle" %}

## Résultat attendu

Une balle blanche se déplace en continu sur l'écran et rebondit sur les bords, sans clignotement ni traînée visible, pendant que la raquette du joueur 2 suit le joystick.

{% include message.html title="Étape suivante" message="Le tutoriel [Collisions, score et machine à états](/workshops/microcontroleur/tutorials/collisions-fsm-pong/) ajoute la seconde raquette, la détection de collision balle/raquette, le score et la machine à états (menu / partie / game over) - sans rien changer au câblage." status="is-success" icon="fas fa-check-circle" %}
