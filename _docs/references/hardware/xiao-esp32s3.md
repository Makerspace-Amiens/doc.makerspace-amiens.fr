---
layout: documentation
hide_hero: true
hero_darken: true
component_toc: true
doc_header: true

title: Seeed Studio XIAO ESP32S3
subtitle: La carte de développement au cœur de l'atelier
description: "Fiche de référence de la carte XIAO ESP32S3 utilisée dans l'atelier microcontrôleurs : caractéristiques, brochage et points d'attention."
manufacturer:
  - name: Seeed Studio
    link: "https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"
author: Alban Petit

todo: 60
---

## Vue d'ensemble

La **XIAO ESP32S3** de Seeed Studio est une carte de développement minuscule (21 × 17,8 mm) autour du SoC **ESP32-S3**. C'est la carte utilisée tout au long de l'atelier, du premier Blink jusqu'au projet Snake multijoueur.

Elle réunit le microcontrôleur, 8 Mo de Flash, 8 Mo de PSRAM, une antenne Wi-Fi/Bluetooth, un connecteur USB-C et 11 broches d'entrées/sorties, prête à être programmée en Arduino-ESP32. Pour comprendre ce qu'elle contient, voir le concept [Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/).

## Caractéristiques

| Élément | Valeur |
|---|---|
| SoC | ESP32-S3 |
| CPU | Xtensa LX7 double cœur, 32 bits, jusqu'à 240 MHz |
| RAM | 512 Ko SRAM interne + 8 Mo PSRAM |
| Flash | 8 Mo externe (16 Mo sur la variante Plus) |
| GPIO | 11 broches exposées (D0 à D10) |
| ADC | 9 broches analogiques, toutes sur **ADC1** |
| Connectivité | Wi-Fi 2,4 GHz 802.11 b/g/n + Bluetooth 5 LE |
| Tension logique | **3,3 V** |
| USB | USB-C relié à l'USB natif de l'ESP32-S3 (pas de puce USB-série) |

## Brochage

Sur la carte, les broches sont sérigraphiées `D0` à `D10`. Dans le code, Arduino-ESP32 accepte ces noms (`D3`, `A0`…) ou directement le numéro de GPIO.

| Broche | GPIO | Fonctions | Rôle dans l'atelier (PCB du projet) |
|---|---|---|---|
| D0 | GPIO1 | ADC1, tactile | Joystick : axe X (raquette du joueur 1) |
| D1 | GPIO2 | ADC1, tactile | Joystick : axe Y (inutilisé par le Pong) |
| D2 | GPIO3 | ADC1, tactile, *strapping* | Bouton du joystick (START) |
| D3 | GPIO4 | ADC1, tactile | Connecteur I2C : SDA |
| D4 | GPIO5 | ADC1, I2C SDA par défaut | Connecteur I2C : SCL |
| D5 | GPIO6 | ADC1, I2C SCL par défaut | Bouton joueur 2 : GAUCHE (SW1) |
| D6 | GPIO43 | UART0 TX | Bouton joueur 2 : DROITE (SW2, via 1 kΩ) |
| D7 | GPIO44 | UART0 RX | Écran : RESET |
| D8 | GPIO7 | ADC1, SPI SCK par défaut | Écran : DC |
| D9 | GPIO8 | ADC1, SPI MISO par défaut | Écran : SCK |
| D10 | GPIO9 | ADC1, SPI MOSI par défaut | Écran : MOSI |

Les 11 broches sont toutes utilisées par le PCB du projet. Pour économiser des broches, le *Chip Select* (CS) de l'écran est relié en permanence à GND (l'écran est le seul composant du bus SPI) et son rétroéclairage (LED/BLK) directement au 3V3. Le bus I2C (D3/D4) est sorti sur un connecteur d'extension 4 broches (avec ses résistances de pull-up de 4,7 kΩ), qui n'est pas utilisé par le Pong : il reste disponible pour ajouter un module plus tard.

{% include message.html title="Le SPI n'est pas sur les broches par défaut" message="Sur le PCB, l'horloge SPI est sur **D9** et la sélection commande/donnée (DC) sur **D8**, alors que le SCK par défaut de la XIAO est D8. Ce n'est pas un problème sur l'ESP32-S3 : la GPIO matrix route le SPI vers n'importe quelle broche. Il faut simplement passer les bonnes broches à `SPI.begin()` (voir le tutoriel [Écran SPI et game loop](/docs/tutorials/electronics/ecran-spi-game-loop/))." status="is-info" icon="fas fa-info-circle" %}

{% include message.html title="Pas de piège ADC2 sur la XIAO" message="Toutes les broches analogiques exposées (GPIO1 à GPIO9) appartiennent à l'**ADC1**, qui reste utilisable Wi-Fi activé. Le piège de l'ADC2 (voir le concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/)) ne concerne que les GPIO11 à 20, non sortis sur cette carte." status="is-info" icon="fas fa-info-circle" %}

| Élément | Remarque |
|---|---|
| **GPIO3 (D2)** | Broche de *strapping* (source du JTAG), lue au reset mais sans effet tant que les eFuses de la puce ne sont pas configurés : utilisable comme une broche ordinaire |
| **GPIO43 / GPIO44 (D6 / D7)** | UART0 matériel. Le moniteur série passant par l'USB natif, ils sont libres. Au démarrage, la puce **émet** ses messages de boot sur GPIO43 (TX) : c'est pourquoi le bouton SW2 y est relié à travers une résistance de 1 kΩ, qui limite le courant si on appuie pendant le démarrage |
| **GPIO21** | LED utilisateur orange (`LED_BUILTIN`), non sortie sur une broche. **Logique inversée** : `LOW` l'allume |
| **Bouton BOOT** (GPIO0) et **RESET** | Entrée en mode téléversement et redémarrage |

## USB et moniteur série

Le connecteur USB-C est relié directement à l'USB natif de l'ESP32-S3 : il n'y a pas de puce USB-série (CP2102, CH340), donc **pas de driver à installer** sous Windows 10/11, macOS ou Linux (sous Linux, l'utilisateur doit appartenir au groupe `dialout`).

Le moniteur série (`Serial`) passe par cet USB natif : c'est l'option `ARDUINO_USB_CDC_ON_BOOT=1` de la configuration PlatformIO `seeed_xiao_esp32s3`. Conséquence pratique : le port série disparaît et réapparaît à chaque reset, et les messages envoyés dans les toutes premières millisecondes de `setup()` peuvent être perdus avant que l'ordinateur ait rouvert le port.

{% include message.html title="La carte n'apparaît plus ?" message="Un programme qui plante en boucle peut empêcher l'USB natif de démarrer : le port disparaît. Maintenir **BOOT** enfoncé en branchant le câble USB force le mode téléversement ; on peut alors reflasher, puis appuyer sur **RESET** pour relancer le programme. Toute la procédure : [Récupérer une carte ESP32-S3 qui n'apparaît plus](/docs/how-to-guides/esp32-s3-carte-introuvable/)." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Alimentation

- **USB-C** : la façon normale d'alimenter et de programmer la carte (5 V fournis par le port).
- **Broche 5V** : reliée au 5 V de l'USB. Pour alimenter la carte par cette broche depuis une source externe, placer une diode (anode côté source).
- **Broche 3V3** : sortie 3,3 V régulée (jusqu'à 700 mA) pour alimenter les périphériques (écran, joystick).
- **GND** : masse commune, à relier à tous les périphériques.
- **Pastilles BAT+ / BAT-** (dessous) : batterie LiPo 3,7 V, rechargée par l'USB.

{% include message.html title="Logique 3,3 V uniquement" message="Les broches de l'ESP32-S3 ne tolèrent pas 5 V en entrée. Pour dialoguer avec un composant 5 V, passer par un pont diviseur ou un convertisseur de niveau (voir le concept [GPIO & monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/))." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Utilisation dans l'atelier

- Programmation via **PlatformIO** (voir la [fiche PlatformIO](/docs/references/software/platformIO/)), carte `seeed_xiao_esp32s3`, et premier flashage dans le tutoriel [Vérification de la toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/).
- La carte est livrée **sans connecteurs** : souder les deux barrettes de broches avant de la poser sur la breadboard, sans créer de pont entre deux broches voisines.
- Câblage figé (boutons, joystick, écran SPI) posé au fil des tutoriels et conservé jusqu'au projet.

## Sources

- [Getting Started with Seeed Studio XIAO ESP32S3 - Seeed Studio Wiki](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)
- [Datasheet ESP32-S3](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
