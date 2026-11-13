---
# RÉDACTION : un tutoriel fait réaliser quelque chose, pas à pas, du début à la fin.
# Chaque étape utilise l'include step-tuto.html (jamais de titres numérotés à la main).
layout: documentation
hide_hero: true          # passer à false et ajouter hero_image: hero.png quand une photo existe
component_toc: true
doc_header: true

title: Collecter des données depuis un capteur
subtitle: Constituer un jeu de données étiqueté avec la XIAO et le port série
description: "Enregistrer des mesures du joystick à fréquence fixe, les étiqueter et les sauvegarder dans un fichier CSV, première étape de tout projet de TinyML."
author: Alban Petit      # RÉDACTION : mettre son propre nom

time: 1                  # durée en heures (entier)
difficulty: 2            # de 0 (découverte) à 5 (expert)
todo: 60                 # 100 seulement une fois testé sur une vraie carte et relu

prerequisites:
  - label: Le port série sous VSCode
    link: /docs/tutorials/electronics/vscode-port-serie/
  - label: Les modules de la mallette (joystick et bouton)
    link: /workshops/microcontroleur/tutorials/entrees-boutons-joystick/
softwares:
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/
hardwares:
  - label: XIAO ESP32S3
    link: /docs/references/hardware/xiao-esp32s3/
  - label: Module joystick
    link: /docs/references/hardware/module-joystick/
  - label: Module bouton
    link: /docs/references/hardware/module-bouton/
---

<!-- RÉDACTION : on commence par dire ce qu'on va obtenir et pourquoi, en deux ou trois
phrases. -->

## Objectif

Un modèle n'apprend que ce qu'on lui montre : avant d'entraîner quoi que ce soit, il faut des **exemples**. Dans ce tutoriel, vous enregistrez des **gestes** dessinés avec le joystick (un cercle, un va-et-vient, le repos), chacun sur une fenêtre de 2 secondes, et vous les sauvegardez dans un fichier CSV prêt pour l'entraînement.

Le joystick sert d'exemple parce qu'il est dans la mallette ; la méthode est la même avec un accéléromètre ou un micro.

<!-- RÉDACTION : un message d'alerte attire l'œil sur ce qui compte. Statuts possibles :
is-info, is-warning, is-danger, is-success. Pas de guillemets doubles dans message=. -->

{% include message.html title="La règle d'or" message="Un modèle ne sera jamais meilleur que ses données. Enregistrez beaucoup d'exemples, variés (vitesse, amplitude, plusieurs personnes), et autant pour chaque geste." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Étapes

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Câbler le joystick et le bouton"
content="Reprenez le câblage du TD2 de l'atelier Microcontrôleurs : axes du joystick sur **D0** et **D1**, bouton sur **D5**, tous les modules alimentés en **3,3 V**. Le bouton servira à déclencher chaque enregistrement.

Gardez le fichier `include/config.h` du TD2 : il contient déjà `PIN_JOYSTICK_X`, `PIN_JOYSTICK_Y` et `PIN_BUTTON`."
%}

![Câblage du module joystick : GND sur GND, +5V sur 3V3, VRx sur D0, VRy sur D1, SW sur D2](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/cablage-joystick.svg)

<!-- RÉDACTION : le code se met dans un bloc ```cpp sous l'étape, jamais dans le paramètre
content= de l'include. Noms de variables en anglais, commentaires en français. -->

{% include step-tuto.html
greyBackground=true
title="Étape 2 : Mesurer à fréquence fixe"
content="Un modèle compare des séries de mesures : elles doivent toutes être prises au **même rythme**. On échantillonne donc à **50 Hz**, une mesure toutes les 20 ms, en comparant `micros()` à l'instant de la dernière mesure, comme `millis()` dans l'atelier Microcontrôleurs : jamais de `delay()`.

Un appui sur le bouton lance une fenêtre de **100 mesures**, soit 2 secondes. Chaque ligne envoyée au port série contient l'étiquette du geste, le numéro de la fenêtre, le numéro de la mesure et les deux axes."
%}

```cpp
#include <Arduino.h>
#include "config.h"

constexpr uint32_t SAMPLE_PERIOD_US = 20000;     // 50 Hz
constexpr int      WINDOW_SAMPLES   = 100;       // 2 s par fenêtre
const char*        LABEL            = "cercle";  // à changer avant chaque série

bool     recording    = false;
int      windowIndex  = 0;
int      sampleIndex  = 0;
uint32_t lastSampleUs = 0;
int      lastButton   = HIGH;

void setup() {
    Serial.begin(115200);
    delay(1500);                                  // USB natif : laisser le port s'ouvrir
    pinMode(PIN_BUTTON, INPUT_PULLUP);
    Serial.println("label,fenetre,mesure,x,y");   // en-tête du fichier CSV
}

void loop() {
    // Un appui (front descendant) lance une nouvelle fenêtre
    int button = digitalRead(PIN_BUTTON);
    if (!recording && lastButton == HIGH && button == LOW) {
        recording    = true;
        sampleIndex  = 0;
        lastSampleUs = micros();
    }
    lastButton = button;

    // Une mesure toutes les 20 ms, sans jamais bloquer
    if (recording && micros() - lastSampleUs >= SAMPLE_PERIOD_US) {
        lastSampleUs += SAMPLE_PERIOD_US;
        int x = analogRead(PIN_JOYSTICK_X);
        int y = analogRead(PIN_JOYSTICK_Y);
        Serial.printf("%s,%d,%d,%d,%d\n", LABEL, windowIndex, sampleIndex, x, y);

        if (++sampleIndex == WINDOW_SAMPLES) {    // fenêtre terminée
            recording = false;
            windowIndex++;
        }
    }
}
```

`lastSampleUs += SAMPLE_PERIOD_US` plutôt que `lastSampleUs = micros()` : si une mesure arrive avec un peu de retard, la suivante rattrape ce retard, et la fréquence moyenne reste exactement de 50 Hz.

{% include message.html title="Checkpoint" message="Au moniteur série, chaque appui sur le bouton affiche 100 lignes de la forme cercle,0,42,2051,1987, puis plus rien jusqu'à l'appui suivant. Le numéro de fenêtre augmente de 1 à chaque appui." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 3 : Enregistrer dans un fichier"
content="Le moniteur série de PlatformIO sait recopier tout ce qu'il reçoit dans un fichier : c'est le filtre `log2file`. Ajoutez-le au `platformio.ini`, puis relancez le moniteur.

Chaque session crée un fichier `.log` horodaté dans le dossier du projet. Renommez-le en `.csv` à la fin de la série : son contenu est déjà au bon format."
%}

```ini
[env:seeed_xiao_esp32s3]
platform = espressif32
board = seeed_xiao_esp32s3
framework = arduino
monitor_speed = 115200
monitor_filters = log2file
```

{% include step-tuto.html
greyBackground=true
title="Étape 4 : Enregistrer chaque geste"
content="Pour chaque geste, changez `LABEL` dans le code, téléversez, puis enregistrez **au moins 30 fenêtres** : faites le geste pendant les 2 secondes qui suivent chaque appui.

- `repos` : ne touchez pas au joystick ;
- `cercle` : dessinez un cercle complet ;
- `vaetvient` : poussez à gauche puis à droite, plusieurs fois.

Variez la vitesse et l'amplitude, et faites enregistrer quelques fenêtres par une autre personne : un modèle qui n'a vu qu'une seule main reconnaîtra mal les autres."
%}

{% include message.html title="Pourquoi une classe repos ?" message="Sans exemples de repos, le modèle classera aussi le joystick immobile comme un cercle ou un va-et-vient : il ne connaît que les réponses qu'on lui a apprises. La classe repos lui apprend à ne rien reconnaître." status="is-info" icon="fas fa-info-circle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 5 : Vérifier les données"
content="Avant d'entraîner quoi que ce soit, regardez vos données : ouvrez les fichiers CSV dans un tableur et tracez x et y pour quelques fenêtres de chaque geste. Supprimez les fenêtres ratées (geste commencé trop tard, joystick lâché).

Vérifiez aussi l'**équilibre** : à peu près le même nombre de fenêtres par geste. Un jeu de données avec 80 cercles et 10 va-et-vient apprendrait au modèle à répondre « cercle » presque à chaque fois."
%}

<!-- RÉDACTION : la fin de page dit ce qu'on a obtenu et où aller ensuite. -->

## Résultat attendu

Un fichier CSV par geste (ou un seul fichier avec les trois étiquettes), d'au moins 30 fenêtres de 100 mesures chacune, propres et équilibrées. C'est le jeu de données que l'étape d'entraînement utilisera.

## Pour aller plus loin

- Ajouter une LED qui s'allume pendant l'enregistrement, pour savoir quand faire le geste.
- Remplacer le joystick par un accéléromètre en I2C : seule la lecture des mesures change (voir le concept [Les bus de communication](/workshops/microcontroleur/concepts/bus-communication/)).
- Comprendre pourquoi ces données sont nécessaires : le concept [Qu'est-ce que le TinyML ?](/workshops/tinyml/concepts/qu-est-ce-que-le-tinyml/).
