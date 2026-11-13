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

title: Installation de VSCode
subtitle: Configurez votre environnement de développement pour microcontrôleurs
description: Ce tutoriel explique comment installer Visual Studio Code et PlatformIO pour programmer des microcontrôleurs Arduino, ESP32, STM32 et bien d'autres.
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

**Visual Studio Code** (VSCode) est un éditeur de code léger et puissant développé par Microsoft.

Ce tutoriel vous guidera à travers l'installation complète sur Windows, macOS et Linux.

## Installation de Visual Studio Code

### Installation sur Windows

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Téléchargement"
content="Rendez-vous sur le site officiel de VSCode à l'adresse [https://code.visualstudio.com/](https://code.visualstudio.com/). Cliquez sur le bouton de téléchargement pour Windows. Le fichier d'installation (**VSCodeUserSetup-x64.exe**) sera téléchargé." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Exécution de l'installateur"
content="Double-cliquez sur le fichier téléchargé pour lancer l'installation. Acceptez les conditions d'utilisation." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Options d'installation"
content="Cochez les options suivantes (recommandées) :

- Ajouter l'action 'Ouvrir avec Code' au menu contextuel des fichiers
- Ajouter l'action 'Ouvrir avec Code' au menu contextuel des répertoires
- Ajouter à PATH (important pour PlatformIO)
- Créer une icône sur le bureau

Cliquez sur **Suivant** puis **Installer**." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4 : Finalisation"
content="Une fois l'installation terminée, cochez **Lancer Visual Studio Code** et cliquez sur **Terminer**. VSCode se lance pour la première fois." %}

### Installation sur macOS

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Téléchargement"
content="Rendez-vous sur [https://code.visualstudio.com/](https://code.visualstudio.com/). Téléchargez la version correspondant à votre processeur :

- **Apple Silicon** (M1, M2, M3, M4) : Télécharger .zip
- **Intel** : Télécharger .zip" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Installation"
content="1. Double-cliquez sur le fichier .zip téléchargé pour le décompresser
2. Glissez-déposez **Visual Studio Code.app** dans le dossier **Applications**
3. Ouvrez le dossier Applications et double-cliquez sur Visual Studio Code" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Premier lancement"
content="Si macOS affiche un message de sécurité, allez dans **Préférences Système > Confidentialité et sécurité**, puis autorisez l'exécution de Visual Studio Code." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4 : Installer 'code' dans le PATH"
content="Pour utiliser VSCode depuis le terminal (utile pour PlatformIO) :

1. Ouvrez VSCode
2. Appuyez sur **Cmd+Shift+P** pour ouvrir la palette de commandes
3. Tapez **shell command**
4. Sélectionnez **Shell Command: Install 'code' command in PATH**
5. Validez avec Entrée" %}

### Installation sur Linux

{% include step-tuto.html
greyBackground = true
title = "Ubuntu / Debian (méthode recommandée)"
content="Téléchargez et installez le paquet .deb depuis le site officiel :

1. Allez sur [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Téléchargez le fichier **.deb**
3. Installez avec :
`sudo apt install ./code_*.deb`

Ou via le dépôt officiel :

```bash
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo \"deb [arch=amd64] https://packages.microsoft.com/repos/code stable main\" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code
```" %}

{% include step-tuto.html
greyBackground = true
title = "Fedora / Red Hat / CentOS"
content="Installez le paquet RPM :

```bash

sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e \"[code]\\nname=Visual Studio Code\\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\\nenabled=1\\ngpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc\" > /etc/yum.repos.d/vscode.repo'

```

Puis :

```bash

sudo dnf check-update
sudo dnf install code

```" %}

{% include step-tuto.html
greyBackground = true
title = "Arch Linux"
content="VSCode est disponible dans AUR :

`yay -S visual-studio-code-bin`

Ou utilisez Snap :
`sudo snap install code --classic`" %}

{% include message.html
title="Permissions USB sur Linux"
message="Sur Linux, vous devrez configurer les permissions USB pour programmer les microcontrôleurs. Cela sera expliqué plus loin dans la section dédiée."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

## Vérification de l'installation de VSCode

{% include step-tuto.html
greyBackground = true
title = "Vérifier que VSCode fonctionne"
content="Lancez Visual Studio Code. Vous devriez voir :

- La fenêtre principale avec la page d'accueil
- La barre d'activité sur la gauche (Explorateur, Recherche, Extensions...)
- Un éditeur vide au centre

Si vous voyez cette interface, VSCode est correctement installé !" %}

## Configuration recommandée de VSCode

Voici quelques réglages utiles pour améliorer votre expérience de développement.

{% include step-tuto.html
greyBackground = true
title = "Extensions VSCode utiles"
content="Installez ces extensions pour améliorer votre productivité :

- **C/C++** (Microsoft) : IntelliSense pour C/C++
- **Better C++ Syntax** : Meilleure coloration syntaxique
- **Bracket Pair Colorizer 2** : Colore les paires de parenthèses" %}

## Ressources et aller plus loin

[VSCode Documentation](https://code.visualstudio.com/docs)

{% include message.html
title="Prochaines étapes"
message="Maintenant que VSCode est installé, vous êtes prêt à installer platformio pour par la suite réaliser vos projets embarqués ! Explorez les exemples inclus, testez différentes cartes, et n'hésitez pas à consulter la documentation."
status="is-success"
icon="fas fa-rocket" %}
