---
layout: documentation
hide_hero: false
hero_image: "hero.jpg"
hero_darken: true
image: "logo.png"
component_toc: true
doc_header: true
type: tutorial
order: 21

title: Écran OLED SSD1306 avec ESP32
subtitle: Intégration I2C et affichage graphique sur PCB
description: Ce tutoriel explique comment intégrer un écran OLED SSD1306 sur un PCB avec un ESP32, utiliser le bus I2C et afficher du texte et des graphiques.
author: Alban Petit

time: 2
difficulty: 2
compatibilities-os: win, mac, lin

prerequisites:
  - label: Notions de base en C++ (framework Arduino pour ESP32)
    link: ""
  - label: VSCode et PlatformIO installés
    link: "/docs/tutorials/software/vscode-platformio/installation-platformio/"
  - label: Notions de base en conception PCB (KiCad)
    link: "/docs/tutorials/software/kicad/kicad-eeschema-bases/"

softwares:
  - label: Visual Studio Code (dernière version)
    link: "https://code.visualstudio.com/"
  - label: PlatformIO IDE (extension VSCode)
    link: "https://platformio.org/"
  - label: KiCad (version 8.0 ou supérieure)
    link: "https://www.kicad.org/"

hardwares:
  - label: ESP32 S3 UNO
    link: ""
  - label: Écran OLED SSD1306 (0.96" ou 1.3", 128x64)
    link: ""
  - label: Résistances pull-up 4.7kΩ (si non présentes sur le module)
    link: ""

todo: 100
---

## Introduction

L'**écran OLED SSD1306** est un afficheur graphique monochrome compact et économe en énergie, idéal pour les projets embarqués. Associé à l'ESP32, il permet d'afficher des textes, graphiques, icônes et interfaces utilisateur sans rétroéclairage.

Dans ce tutoriel, vous apprendrez à :

- Comprendre le protocole I2C utilisé par le SSD1306
- Intégrer un écran OLED directement sur un PCB avec l'ESP32
- Afficher du texte, des graphiques et des images bitmap
- Optimiser la consommation mémoire et les performances

{% include message.html
title="Compatibilité des niveaux logiques"
message="L'ESP32 fonctionne en logique 3.3V. Le SSD1306 accepte une alimentation de 3.0V à 5.5V et ses entrées I2C sont compatibles 3.3V. La connexion directe est possible sans adaptateur de niveau."
status="is-info"
icon="fas fa-info-circle" %}

---

## Le protocole I2C et le SSD1306

### Le bus I2C

Le SSD1306 communique via le protocole **I2C** (Inter-Integrated Circuit), un bus série à 2 fils :

| Signal | Rôle |
| -------- | ------ |
| **SDA** (Data) | Ligne bidirectionnelle de données |
| **SCL** (Clock) | Horloge générée par le maître (ESP32) |

L'I2C permet de connecter plusieurs périphériques sur le même bus grâce à un système d'adresses uniques.

### Broches I2C par défaut (ESP32-S3)

| Fonction | GPIO ESP32-S3 |
| ---------- | ----------- |
| SDA | GPIO 8 |
| SCL | GPIO 9 |

{% include message.html
title="Broches I2C personnalisables"
message="Sur ESP32-S3, le bus I2C peut être assigné à n'importe quelles broches via `Wire.begin(SDA, SCL)`. Les broches GPIO 8 et 9 sont celles utilisées dans ce tutoriel et correspondent au câblage de la carte ESP32 S3 UNO."
status="is-info"
icon="fas fa-microchip" %}

{% include message.html
title="Avec une XIAO ESP32S3"
message="Sur la [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/) de l'atelier Microcontrôleurs, le PCB du projet sort le bus I2C sur un connecteur 4 broches (3V3, SDA, SCL, GND), avec SDA sur **D3 (GPIO4)** et SCL sur **D4 (GPIO5)** et des pull-ups de 4,7 kΩ déjà soudées : écrire `Wire.begin(D3, D4);` et choisir `board = seeed_xiao_esp32s3` dans `platformio.ini`. Ce ne sont pas les broches I2C par défaut de la XIAO (D4/D5), d'où l'appel explicite à `Wire.begin()`."
status="is-info"
icon="fas fa-info-circle" %}

### Caractéristiques du SSD1306

- **Résolution** : 128×64 pixels (version 0.96") ou 128×32 (version 0.91")
- **Adresse I2C** : 0x3C (par défaut) ou 0x3D (configurable par hardware)
- **Alimentation** : 3.0V à 5.5V
- **Courant** : ~20mA en affichage normal, < 10µA en veille
- **Technologie** : OLED (auto-émissif, pas de rétroéclairage)
- **Contraste** : Réglable par logiciel (0-255)

---

## Intégration sur PCB

### Choix du module

Il existe deux formats principaux :

- **Module breakout I2C** : 4 broches (VCC, GND, SCL, SDA), pull-up intégrées
- **Module raw** : 7-8 broches, nécessite des pull-up externes

Pour un PCB, préférez un **module breakout avec pull-up intégrées** (simplifie le routage).

{% include message.html
title="Adresse I2C"
message="La plupart des modules utilisent l'adresse 0x3C par défaut. Certains modules exposent un jumper ou un pad de soudure pour basculer à 0x3D si plusieurs écrans doivent coexister sur le même bus I2C."
status="is-info"
icon="fas fa-info-circle" %}

### Schéma de connexion

```text
               ESP32
               GPIO8  ─────────── SDA  ─┐
               GPIO9  ─────────── SCL  ─┤  Écran SSD1306
               3.3V   ─────────── VCC  ─┤  (module I2C)
               GND    ─────────── GND  ─┘
```

### Résistances de pull-up

Les lignes I2C nécessitent des résistances de pull-up vers 3.3V :

{% include step-tuto.html
greyBackground = true
title = "Pull-up sur SDA et SCL"
content="Ajoutez une résistance de **4.7kΩ** vers 3.3V sur les lignes suivantes :

- **SDA** : maintient la ligne haute quand aucun périphérique ne transmet
- **SCL** : maintient la ligne haute entre les impulsions d'horloge

**Attention :** La plupart des modules breakout OLED intègrent déjà ces pull-up (typiquement 10kΩ). Vérifiez votre schéma avant d'en ajouter. Des pull-up trop faibles (< 2.2kΩ au total) peuvent causer des problèmes de communication." %}

### Condensateurs de découplage

{% include step-tuto.html
greyBackground = true
title = "Découplage de l'alimentation"
content="Placez les condensateurs suivants entre VCC et GND du module, au plus près de la broche VCC :

- **100nF** en céramique : filtre les parasites haute fréquence
- **10µF** en céramique ou tantale : absorbe les pics de courant lors du rafraîchissement de l'écran

Ces condensateurs stabilisent l'alimentation et évitent les scintillements ou corruptions d'affichage." %}

### Checklist avant la mise sous tension

{% include step-tuto.html
greyBackground = true
title = "Vérifications avant le premier test"
content="Avant d'alimenter votre PCB pour la première fois :

- Vérifiez visuellement les soudures du module (pas de court-circuit entre les pads)
- Vérifiez la continuité entre GND du module et GND de l'ESP32
- Vérifiez la continuité entre VCC du module et 3.3V
- Vérifiez la présence des condensateurs de découplage (100nF + 10µF)
- Vérifiez que SDA et SCL ne sont pas inversés
- Mesurez 3.3V sur VCC avant d'alimenter l'ESP32" %}

---

## Code

### Configuration du projet PlatformIO

La bibliothèque **Adafruit_SSD1306** est la plus répandue. Ajoutez-la dans `platformio.ini` :

```ini
[env:esp32-s3-devkitc-1]
platform = espressif32
board = esp32-s3-devkitc-1
framework = arduino
monitor_speed = 115200
lib_deps =
    adafruit/Adafruit SSD1306@^2.5.7
    adafruit/Adafruit GFX Library@^1.11.3
```

{% include message.html
title="Dépendance GFX Library"
message="La bibliothèque Adafruit_SSD1306 dépend de Adafruit_GFX_Library pour les fonctions de dessin (lignes, cercles, texte). Les deux doivent être installées."
status="is-info"
icon="fas fa-info-circle" %}

### Code 1 : Initialisation et affichage de texte

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1  // Pas de pin RESET (partagé avec ESP32)
#define SCREEN_ADDRESS 0x3C

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

void setup() {
  Serial.begin(115200);
  delay(500);

  // Initialiser l'I2C
  Wire.begin(8, 9);  // SDA=8, SCL=9

  // Initialiser l'écran
  if (!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println("Erreur : écran SSD1306 non détecté");
    while (true) delay(1000);
  }

  Serial.println("Écran SSD1306 initialisé avec succès !");

  // Effacer l'écran
  display.clearDisplay();

  // Configurer le texte
  display.setTextSize(1);             // Taille normale
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 0);

  // Afficher du texte
  display.println("ESP32 + SSD1306");
  display.println("");
  display.setTextSize(2);
  display.println("Hello!");

  // Envoyer vers l'écran
  display.display();
}

void loop() {}
```

{% include message.html
title="Fonction display.display()"
message="L'affichage est bufferisé : toutes les fonctions de dessin modifient un tampon RAM. Il faut appeler **display.display()** pour envoyer le tampon vers l'écran physique. Cela permet d'optimiser les performances en regroupant les mises à jour."
status="is-info"
icon="fas fa-info-circle" %}

### Code 2 : Affichage graphique (formes et pixels)

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1
#define SCREEN_ADDRESS 0x3C

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

void setup() {
  Serial.begin(115200);
  Wire.begin(8, 9);

  if (!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println("Erreur SSD1306");
    while (true);
  }

  display.clearDisplay();

  // Dessiner un rectangle
  display.drawRect(10, 10, 50, 30, SSD1306_WHITE);

  // Dessiner un cercle plein
  display.fillCircle(100, 25, 15, SSD1306_WHITE);

  // Dessiner une ligne
  display.drawLine(0, 50, 127, 50, SSD1306_WHITE);

  // Dessiner des pixels individuels
  for (int i = 0; i < 20; i++) {
    display.drawPixel(i * 6, 55 + random(-5, 5), SSD1306_WHITE);
  }

  display.display();
}

void loop() {}
```

### Code 3 : Animation et mise à jour dynamique

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1
#define SCREEN_ADDRESS 0x3C

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

int ballX = 64;
int ballY = 32;
int ballVX = 2;
int ballVY = 1;
const int ballRadius = 3;

void setup() {
  Serial.begin(115200);
  Wire.begin(8, 9);

  if (!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println("Erreur SSD1306");
    while (true);
  }

  display.clearDisplay();
  display.display();
}

void loop() {
  // Effacer l'écran
  display.clearDisplay();

  // Mettre à jour la position de la balle
  ballX += ballVX;
  ballY += ballVY;

  // Rebondir sur les bords
  if (ballX <= ballRadius || ballX >= SCREEN_WIDTH - ballRadius) {
    ballVX = -ballVX;
  }
  if (ballY <= ballRadius || ballY >= SCREEN_HEIGHT - ballRadius) {
    ballVY = -ballVY;
  }

  // Dessiner la balle
  display.fillCircle(ballX, ballY, ballRadius, SSD1306_WHITE);

  // Afficher le compteur de frames
  display.setCursor(0, 0);
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.print("FPS: ");
  display.print(1000 / 50);  // Approximation

  // Envoyer vers l'écran
  display.display();

  delay(50);  // ~20 FPS
}
```

{% include message.html
title="Performances et RAM"
message="Le buffer d'affichage consomme **1024 octets** de RAM pour un écran 128×64. Sur ESP32, ce n'est pas un problème. Évitez cependant les `display.display()` trop fréquents : chaque appel transfère 1 Ko via I2C (~8ms à 400 kHz). Visez 10-30 FPS maximum pour les animations."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Dépannage

### L'écran ne s'allume pas

{% include step-tuto.html
greyBackground = true
title = "Vérifier l'alimentation"
content="Vérifiez que l'écran est alimenté :

- Mesurez 3.3V sur la broche VCC du module
- Vérifiez la continuité entre GND du module et GND de l'ESP32
- Testez avec une alimentation externe 3.3V pour isoler le problème" %}

{% include step-tuto.html
greyBackground = true
title = "Scanner l'adresse I2C"
content="Utilisez le code suivant pour scanner le bus I2C et détecter l'adresse du SSD1306 :

```cpp
#include <Wire.h>

void setup() {
  Serial.begin(115200);
  Wire.begin(8, 9);
  Serial.println(\"Scan I2C...\");

  for (byte address = 1; address < 127; address++) {
    Wire.beginTransmission(address);
    if (Wire.endTransmission() == 0) {
      Serial.print(\"Périphérique trouvé à 0x\");
      Serial.println(address, HEX);
    }
  }
  Serial.println(\"Scan terminé.\");
}

void loop() {}
```

L'adresse devrait être **0x3C** ou **0x3D**. Si rien n'apparaît, vérifiez le câblage." %}

### L'affichage est corrompu ou scintille

{% include step-tuto.html
greyBackground = true
title = "Problème de découplage ou de pull-up"
content="Vérifiez :

- La présence des condensateurs de découplage (100nF + 10µF)
- Que les résistances de pull-up ne sont pas trop faibles (< 2.2kΩ total)
- Que les pistes I2C ne sont pas trop longues (< 10 cm recommandé)
- Que la fréquence I2C n'est pas trop élevée : réduisez à 100 kHz avec `Wire.setClock(100000);`" %}

### L'écran affiche du texte tronqué

{% include step-tuto.html
greyBackground = true
title = "Débordement de buffer"
content="Le texte qui dépasse les limites de l'écran est simplement ignoré. Vérifiez :

- Que `setCursor(x, y)` pointe bien dans la zone d'affichage (x < 128, y < 64)
- Que la taille du texte (`setTextSize()`) ne fait pas déborder les caractères
- Utilisez `display.getTextBounds()` pour calculer la largeur d'un texte avant de l'afficher" %}

### L'ESP32 redémarre lors de l'initialisation

{% include step-tuto.html
greyBackground = true
title = "Problème de RAM ou d'alimentation"
content="Sur ESP32, le buffer SSD1306 consomme 1 Ko de RAM. Si vous avez beaucoup de variables globales, cela peut saturer la pile.

Si le problème persiste :

- Vérifiez que l'alimentation 3.3V de l'ESP32 peut fournir > 500mA
- Ajoutez un condensateur 100µF sur la ligne 3.3V de l'ESP32
- Réduisez la fréquence I2C : `Wire.setClock(100000);`" %}

---

## Optimisations

### Réduire la consommation mémoire

{% include step-tuto.html
greyBackground = true
title = "Affichage partiel"
content="Pour économiser de la RAM, affichez seulement une partie de l'écran :

```cpp
// Créer un buffer pour seulement 128×32 pixels (512 octets)
Adafruit_SSD1306 display(128, 32, &Wire, OLED_RESET);
```

Ou utilisez la bibliothèque **U8g2** qui propose des modes de tampon réduits (1/8, 1/4 de page)." %}

### Améliorer les performances

{% include step-tuto.html
greyBackground = true
title = "Augmenter la vitesse I2C"
content="Par défaut, l'I2C fonctionne à 100 kHz. Augmentez à 400 kHz pour des transferts plus rapides :

```cpp
Wire.setClock(400000);  // 400 kHz (Fast Mode)
```

Attention : des pistes longues ou des pull-up trop faibles peuvent causer des erreurs à 400 kHz." %}

---

## Ressources

- [Datasheet SSD1306](https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf)
- [Adafruit SSD1306 Library](https://github.com/adafruit/Adafruit_SSD1306)
- [Adafruit GFX Graphics Library](https://learn.adafruit.com/adafruit-gfx-graphics-library)
- [U8g2 Library (alternative)](https://github.com/olikraus/u8g2)

---

## Conclusion

Vous savez maintenant comment intégrer un écran OLED SSD1306 sur un PCB avec l'ESP32 et afficher du texte, des graphiques et des animations.

### Points clés à retenir

- **Bus I2C** : SDA=8, SCL=9 (broches utilisées sur la carte ESP32 S3 UNO)
- **Pull-up 4.7kΩ** sur SDA et SCL (souvent intégrées au module)
- **Découplage** : 100nF + 10µF au plus près de VCC
- **Buffer RAM** : 1024 octets pour 128×64 pixels
- **Appeler `display.display()`** après chaque mise à jour pour rafraîchir l'écran

### Pour approfondir

- Utilisez **U8g2** pour une gestion mémoire optimisée et plus de polices
- Affichez des **bitmaps** (logos, icônes) avec `display.drawBitmap()`
- Créez des **interfaces utilisateur** avec menus et boutons
- Associez l'écran avec des **capteurs** pour afficher température, humidité, etc.

{% include message.html
title="Bien joué !"
message="Votre ESP32 peut maintenant afficher du contenu graphique sur un écran OLED. C'est une brique essentielle pour créer des interfaces utilisateur et des projets IoT interactifs."
status="is-success"
icon="fas fa-check-circle" %}

---

## Pour aller plus loin

{%
  include card_collections.html
  title="Autres tutoriels ESP32"
  description="Explorez d'autres tutoriels pour maîtriser l'ESP32 et ses périphériques"
  type="tutorial"
%}
