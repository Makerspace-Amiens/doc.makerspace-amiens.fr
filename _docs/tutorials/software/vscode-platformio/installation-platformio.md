---
layout: documentation
hide_hero: false
hero_image: "hero.png"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 10

title: Installation de PlatformIO
subtitle: Configurez votre environnement de développement pour microcontrôleurs
description: Ce tutoriel explique comment installer PlatformIO pour programmer des microcontrôleurs Arduino, ESP32, STM32 et bien d'autres.
author: Alban Petit

time: 1
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Droits administrateur sur votre ordinateur
    link: ""

softwares:
  - label: Visual Studio Code (dernière version)
    link: "https://code.visualstudio.com/"
  - label: PlatformIO IDE (extension VSCode)
    link: "https://platformio.org/"

hardwares:
  - label: Ordinateur avec au moins 4GB de RAM
    link: ""
  - label: Connexion internet pour télécharger les outils
    link: ""

todo: 100
---

## Introduction

**PlatformIO** est une plateforme de développement professionnelle pour microcontrôleurs qui s'intègre à VSCode via une extension.

Ensemble, VSCode + PlatformIO offrent :

- Support de centaines de cartes de développement (Arduino, ESP32, ESP8266, STM32, Raspberry Pi Pico...)
- Gestion automatique des bibliothèques et dépendances
- Compilation, upload et débogage intégrés
- IntelliSense (autocomplétion intelligente)
- Gestion de projets multi-plateformes

Ce tutoriel vous guidera à travers l'installation complète sur Windows, macOS et Linux.

{% include message.html
title="Pourquoi PlatformIO plutôt qu'Arduino IDE ?"
message="PlatformIO offre une gestion avancée des projets, des builds plus rapides, une meilleure gestion des bibliothèques, le support de multiples plateformes dans un même projet, et des outils de débogage professionnels. C'est l'outil de référence pour les projets sérieux."
status="is-info"
icon="fas fa-info-circle" %}

---

## Installation de PlatformIO

Maintenant que VSCode est installé, nous allons ajouter l'extension PlatformIO qui transforme VSCode en IDE complet pour microcontrôleurs.

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Ouvrir le gestionnaire d'extensions"
content="Dans VSCode, cliquez sur l'icône **Extensions** dans la barre d'activité de gauche (icône de carrés empilés) ou utilisez le raccourci :

- Windows/Linux : **Ctrl+Shift+X**
- macOS : **Cmd+Shift+X**" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Rechercher PlatformIO"
content="Dans la barre de recherche des extensions, tapez **platformio**. Vous devriez voir l'extension **PlatformIO IDE** par PlatformIO." image="platformio-install.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Installer l'extension"
content="Cliquez sur le bouton **Install** (Installer). L'installation prend quelques minutes car PlatformIO télécharge automatiquement :

- Python (si nécessaire)
- PlatformIO Core
- Les outils de compilation

**Soyez patient, ne fermez pas VSCode pendant l'installation !**" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4 : Attendre la fin de l'installation"
content="Une fois l'installation terminée, vous verrez :

- Une icône PlatformIO (tête d'alien) dans la barre d'activité de gauche
- Une notification indiquant que PlatformIO est prêt
- Possiblement une demande de redémarrage de VSCode

Si on vous le demande, cliquez sur **Reload Now** (Recharger maintenant)." %}

{% include message.html
title="Première installation longue"
message="La première installation de PlatformIO peut prendre 5-10 minutes selon votre connexion internet. PlatformIO télécharge tous les outils nécessaires (compilateurs, outils de flash, etc.). C'est normal, soyez patient !"
status="is-info"
icon="fas fa-clock" %}

---

## Vérification de l'installation de PlatformIO

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Ouvrir PlatformIO Home"
content="Cliquez sur l'icône **PlatformIO** (tête d'alien) dans la barre d'activité de gauche. Un panneau s'ouvre avec plusieurs options. Cliquez sur **PIO Home** puis **Open**." image="platformio-navbar.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Interface PlatformIO Home"
content="La page d'accueil de PlatformIO s'ouvre avec plusieurs sections :

- **New Project** : Créer un nouveau projet
- **Open Project** : Ouvrir un projet existant
- **Platforms** : Gérer les plateformes supportées
- **Libraries** : Gérer les bibliothèques
- **Boards** : Voir les cartes supportées

Si vous voyez cette page, **félicitations** ! PlatformIO est correctement installé." image="platformio-home.png" %}

---

## Configuration des permissions USB (Linux uniquement)

Sur Linux, vous devez configurer les permissions pour accéder aux ports USB sans sudo.

{% include step-tuto.html
greyBackground = true
title = "Ajouter l'utilisateur au groupe dialout"
content="Ouvrez un terminal et exécutez :

```bash

sudo usermod -a -G dialout $USER
sudo usermod -a -G plugdev $USER

```

**Déconnectez-vous puis reconnectez-vous** (ou redémarrez l'ordinateur) pour que les changements prennent effet." %}

{% include step-tuto.html
greyBackground = true
title = "Installer les règles udev (optionnel)"
content="Pour un meilleur support de certaines cartes (ESP32, STM32...), installez les règles udev de PlatformIO :

```bash

curl -fsSL https://raw.githubusercontent.com/platformio/platformio-core/master/scripts/99-platformio-udev.rules | sudo tee /etc/udev/rules.d/99-platformio-udev.rules

```

Puis rechargez les règles :

```bash

sudo udevadm control --reload-rules
sudo udevadm trigger

```" %}

{% include message.html
title="Redémarrage nécessaire"
message="Après avoir ajouté votre utilisateur aux groupes dialout et plugdev, vous DEVEZ vous déconnecter et reconnecter (ou redémarrer) pour que les permissions soient effectives. Sinon PlatformIO ne pourra pas accéder aux ports USB."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

{% include step-tuto.html
greyBackground = true
title = "Raccourcis clavier PlatformIO"
content="Mémorisez ces raccourcis essentiels :

**Windows/Linux :**
- **Ctrl+Alt+B** : Build (compiler)
- **Ctrl+Alt+U** : Upload (téléverser)
- **Ctrl+Alt+S** : Monitor série
- **Ctrl+Alt+T** : Run task (tâche spécifique)

**macOS :**
- **Cmd+Alt+B** : Build
- **Cmd+Alt+U** : Upload
- **Cmd+Alt+S** : Monitor série" %}

---

## Dépannage

### Problème : PlatformIO ne se lance pas après installation

{% include step-tuto.html
greyBackground = true
title = "Solution 1 : Réinstaller PlatformIO"
content="1. Désinstallez l'extension PlatformIO dans VSCode
2. Fermez complètement VSCode
3. Supprimez le dossier `~/.platformio` (Linux/macOS) ou `C:\\Users\\VotreNom\\.platformio` (Windows)
4. Rouvrez VSCode et réinstallez PlatformIO" %}

{% include step-tuto.html
greyBackground = true
title = "Solution 2 : Problème de Python"
content="PlatformIO nécessite Python. Vérifiez que Python est bien installé :
`python --version` ou `python3 --version`

Si Python n'est pas installé, téléchargez-le depuis [python.org](https://www.python.org/) et réinstallez PlatformIO." %}

### Problème : Port USB non détecté (Linux)

{% include step-tuto.html
greyBackground = true
title = "Vérifier les permissions USB"
content="Assurez-vous d'avoir suivi les étapes de configuration USB (section précédente) :
```bash

sudo usermod -a -G dialout $USER
sudo usermod -a -G plugdev $USER

```

Puis déconnectez-vous et reconnectez-vous." %}

### Problème : Erreur de compilation "tool-chain not found"

{% include step-tuto.html
greyBackground = true
title = "Réinstaller la plateforme"
content="1. Ouvrez PlatformIO Home
2. Allez dans **Platforms > Installed**
3. Trouvez votre plateforme (ex: Espressif 32) et cliquez sur **Uninstall**
4. Réinstallez la plateforme depuis **Platforms > Embedded**
5. Essayez de compiler à nouveau" %}

---

## Créer votre premier projet PlatformIO

Testons l'installation en créant un projet simple de type "Blink".

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Nouveau projet"
content="1. Cliquez sur l'icône PlatformIO dans la barre de gauche
2. Cliquez sur **PIO Home > Open**
3. Cliquez sur **+ New Project**" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Configuration du projet"
content="Remplissez les champs suivants :

- **Name** : `test_blink`
- **Board** : Sélectionnez votre carte (par exemple : `Arduino Uno`, `Seeed Studio XIAO ESP32S3`, `ESP32 Dev Module`...)
- **Framework** : Laissez `Arduino` par défaut
- **Location** : Laissez le chemin par défaut ou choisissez un dossier

Cliquez sur **Finish**. PlatformIO crée le projet et télécharge les outils nécessaires pour votre carte." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Code de test"
content="PlatformIO crée automatiquement la structure du projet. Ouvrez le fichier **src/main.cpp**. Remplacez le contenu par ce code de test Blink :

```cpp
#include <Arduino.h>

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4 : Compiler le projet"
content="Pour compiler le projet :

1. Cliquez sur l'icône **✓** (coche) dans la barre de statut en bas (Build)
2. Ou utilisez le raccourci : **Ctrl+Alt+B** (Windows/Linux) / **Cmd+Alt+B** (macOS)

PlatformIO compile le code. Si tout va bien, vous verrez **SUCCESS** dans le terminal." %}

{% include message.html
title="Première compilation longue"
message="La première compilation d'un projet pour une nouvelle plateforme peut prendre plusieurs minutes car PlatformIO télécharge le compilateur, les bibliothèques et frameworks nécessaires. Les compilations suivantes seront beaucoup plus rapides !"
status="is-info"
icon="fas fa-hourglass-half" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 5 : Upload sur la carte (optionnel)"
content="Si vous avez une carte connectée, vous pouvez uploader le programme :

1. Branchez votre carte via USB
2. Cliquez sur l'icône **→** (flèche) dans la barre de statut (Upload)
3. Ou utilisez le raccourci : **Ctrl+Alt+U** (Windows/Linux) / **Cmd+Alt+U** (macOS)

PlatformIO compile et upload automatiquement. La LED de votre carte devrait clignoter !" %}

{% include message.html
title="Installation réussie !"
message="Si la compilation réussit, votre installation de VSCode + PlatformIO est complète et fonctionnelle. Vous êtes prêt à développer vos projets embarqués !"
status="is-success"
icon="fas fa-check-circle" %}

---

## Installer des bibliothèques

Les bibliothèques se déclarent directement dans le fichier `platformio.ini` via la clé `lib_deps`. C'est la méthode recommandée : les dépendances sont versionnées avec le projet et installées automatiquement à la compilation.

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Trouver l'identifiant de la bibliothèque"
content="Rendez-vous sur le registre officiel [registry.platformio.org](https://registry.platformio.org/) et recherchez la bibliothèque souhaitée. Notez son identifiant au format `auteur/NomLib` (ex : `waspinator/AccelStepper`)." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Ajouter lib_deps dans platformio.ini"
content="Ouvrez le fichier `platformio.ini` à la racine de votre projet et ajoutez la clé `lib_deps` :

```ini
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
lib_deps =
    waspinator/AccelStepper@^1.64
```

Pour ajouter plusieurs bibliothèques, listez-les les unes sous les autres :

```ini
lib_deps =
    waspinator/AccelStepper@^1.64
    bblanchon/ArduinoJson@^7.0.0
```" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Compiler pour installer"
content="Lancez une compilation avec **Ctrl+Alt+B** (Windows/Linux) ou **Cmd+Alt+B** (macOS). PlatformIO télécharge et installe automatiquement toutes les bibliothèques listées dans `lib_deps` avant de compiler." %}

{% include message.html
title="Format des versions"
message="Le symbole **^** signifie « version compatible » (ex : `^1.64` accepte 1.64, 1.65... mais pas 2.0). Utilisez `@*` pour toujours prendre la dernière version, ou un numéro exact comme `@1.64.0` pour figer la version."
status="is-info"
icon="fas fa-tag" %}

---

## Ressources et aller plus loin

### Documentation officielle

- [Documentation PlatformIO](https://docs.platformio.org/)
- [VSCode Documentation](https://code.visualstudio.com/docs)
- [PlatformIO Boards](https://platformio.org/boards) : Liste complète des cartes supportées
- [PlatformIO Libraries](https://platformio.org/lib) : Registre de bibliothèques

### Tutoriels et guides

- [PlatformIO Getting Started](https://docs.platformio.org/en/latest/integration/ide/vscode.html)
- [Forum PlatformIO](https://community.platformio.org/)

### Commandes CLI utiles

Si vous préférez utiliser PlatformIO en ligne de commande :

```bash
# Créer un nouveau projet
pio project init --board <nom_carte>

# Compiler
pio run

# Upload
pio run --target upload

# Ouvrir le moniteur série
pio device monitor

# Lister les cartes disponibles
pio boards

# Rechercher une bibliothèque
pio lib search <nom_lib>

# Installer une bibliothèque
pio lib install <nom_lib>
```

### Structure d'un projet PlatformIO

```text
mon_projet/
├── .pio/               # Fichiers de build (généré automatiquement)
├── include/            # Fichiers d'en-tête (.h)
├── lib/                # Bibliothèques privées
├── src/                # Code source (.cpp, .c)
│   └── main.cpp        # Fichier principal
├── test/               # Tests unitaires
├── platformio.ini      # Configuration du projet
└── .gitignore          # Fichiers à ignorer par Git
```

Le fichier **platformio.ini** configure le projet :

```ini
[env:myboard]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
lib_deps =
    adafruit/Adafruit Sensor@^1.1.4
    bblanchon/ArduinoJson@^6.21.0
```

{% include message.html
title="Prochaines étapes"
message="Maintenant que VSCode et PlatformIO sont installés, vous êtes prêt à développer vos projets embarqués ! Explorez les exemples inclus, testez différentes cartes, et n'hésitez pas à consulter la documentation."
status="is-success"
icon="fas fa-rocket" %}
