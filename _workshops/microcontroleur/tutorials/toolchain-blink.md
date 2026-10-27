---
layout: documentation
hide_hero: false
hero_image: uc.webp
hero_height: is-small
hero_darken: true
image: uc.webp
component_toc: true
doc_header: true

title: Vérification de la toolchain
subtitle: Installer la chaîne ESP32-S3 et valider ton premier flashage
description: Configurer PlatformIO pour la XIAO ESP32S3 et faire clignoter la LED embarquée, avant d'ajouter une LED externe.
author: Alban Petit

time: 1
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Installation de VSCode
    link: /docs/tutorials/software/vscode-platformio/installation-vscode/
  - label: Installation de PlatformIO
    link: /docs/tutorials/software/vscode-platformio/installation-platformio/

softwares:
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/

hardwares:
  - label: Carte Seeed Studio XIAO ESP32S3 (barrettes soudées)
    link: /docs/references/hardware/xiao-esp32s3/
  - label: Câble USB-C data (pas uniquement charge)
    link: ""

todo: 90
---

Ce tutoriel a pour but de vérifier que **chacun** a une chaîne de développement fonctionnelle avant d'attaquer la suite des aventures sur les microcontrôleurs. Chaque TD suivant ajoutera un périphérique au même montage : le câblage posé ici ne bougera plus.

{% include message.html title="À faire avant la séance" message="L'installation de PlatformIO (voir le prérequis ci-dessus) et du support ESP32 doit être terminée." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Créer le projet PlatformIO"
content="Dans VSCode, ouvre l'onglet **PlatformIO** (icône fourmi dans la barre latérale) puis **New Project**.

Configure :

- **Name** : `pong-esp32`
- **Board** : `Seeed Studio XIAO ESP32S3`
- **Framework** : `Arduino`

PlatformIO génère un dossier avec un fichier `platformio.ini` et un dossier `src/` contenant `main.cpp`. Ajoute la ligne `monitor_speed` à la main."
%}

```ini
; platformio.ini
[env:seeed_xiao_esp32s3]
platform = espressif32
board = seeed_xiao_esp32s3
framework = arduino
monitor_speed = 115200
```

{% include message.html title="Garde la ligne #include" message="Le `main.cpp` généré commence par `#include <Arduino.h>`. Contrairement à un `.ino` de l'Arduino IDE, un fichier `.cpp` ne l'ajoute pas tout seul : sans cette ligne, `pinMode`, `digitalWrite` ou `Serial` sont inconnus et la compilation échoue (`'pinMode' was not declared in this scope`). Tous les programmes de l'atelier commencent donc par elle." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 2 : Brancher la carte"
content="Le connecteur USB-C de la XIAO est relié directement à l'**USB natif** de l'ESP32-S3 : il n'y a pas de puce USB-série, donc **aucun driver à installer**. Branche la carte avec un câble USB-C qui transporte des données (beaucoup de câbles ne font que charger).

- **Windows** : un nouveau port `COM` apparaît dans le **Gestionnaire de périphériques** (« Périphérique série USB »).
- **macOS** : le port apparaît sous la forme `/dev/cu.usbmodem…`.
- **Linux** : le port apparaît sous la forme `/dev/ttyACM0` ; ton utilisateur doit appartenir au groupe `dialout` pour y accéder sans `sudo`.

PlatformIO détecte le port tout seul au moment de l'upload."
%}

{% include step-tuto.html
greyBackground=true
title="Étape 3 : Flasher le blink de base"
content="Remplace le contenu de `src/main.cpp` par le code ci-dessous, puis clique sur **Upload** (flèche →) dans la barre bleue PlatformIO en bas de VSCode.

```cpp
#include <Arduino.h>

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, LOW);   // LOW allume la LED de la XIAO
  delay(500);
  digitalWrite(LED_BUILTIN, HIGH);  // HIGH l'éteint
  delay(500);
}
```" %}

{% include message.html title="Ça ne flashe pas ?" message="Si l'upload échoue (`Failed to connect` ou port introuvable), force le mode téléversement : débranche la carte, **maintiens le bouton BOOT** (marqué `B`), rebranche le câble USB, puis relâche BOOT et relance l'upload. Une fois l'upload terminé, appuie sur **RESET** (marqué `R`) pour lancer le programme. Si ça ne suffit pas : [Récupérer une carte ESP32-S3 qui n'apparaît plus](/docs/how-to-guides/esp32-s3-carte-introuvable/)." status="is-info" icon="fas fa-info-circle" %}

{% include message.html title="Une LED en logique inversée" message="La LED utilisateur de la XIAO (orange, à côté du connecteur USB-C, sur GPIO21) est câblée vers le 3,3 V : elle s'allume quand la broche est à `LOW` et s'éteint à `HIGH`. Le clignotement est le même, seul le sens est inversé. La LED rouge voisine indique la charge de la batterie et ne se pilote pas." status="is-info" icon="fas fa-lightbulb" %}

{% include step-tuto.html
greyBackground=true
title="Étape 4 : Validation individuelle"
content="La LED orange intégrée (`LED_BUILTIN`) doit clignoter à 1 Hz. **Montre ta carte qui clignote** avant de passer à la suite : c'est la seule sortie attendue de ce TD1."
%}

## Bonus : LED externe sur breadboard

S'il te reste du temps, câble une LED externe avec sa résistance série entre la broche **D3** (GPIO4) et GND. C'est ta première sortie **physique** : un montage d'essai, à retirer ensuite, car sur le PCB du projet D3 sert au connecteur I2C.

![BreadBoard](esp32-s3-blink.png)

La photo montre une autre carte ESP32-S3 : le principe est le même, seule la broche change (D3 sur la XIAO). Cette LED externe est câblée de façon classique (anode côté broche) : `HIGH` l'allume.

Voici le code nécessaire au fonctionnement de cette démonstration.

```cpp
#include <Arduino.h>

#define LED_PIN D3   // GPIO4

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay(500);
  digitalWrite(LED_PIN, LOW);
  delay(500);
}
```

Le calcul de la résistance série est détaillé dans le concept [GPIO & monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/).

{% include message.html title="Rendez-vous au tutoriel suivant" message="Le prochain tutoriel réutilise cette même carte et ce même projet PlatformIO : retire la LED externe, puis tu câbleras boutons et joystick selon le câblage du PCB du projet." status="is-success" icon="fas fa-check-circle" %}
