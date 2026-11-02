---
layout: documentation
hide_hero: false
hero_image: "/docs/tutorial/installation-kicad/hero.png"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 2

title: Installation de KiCAD
subtitle: Installez KiCAD sur votre système d'exploitation
description: Ce tutoriel explique comment installer KiCAD sur Windows, macOS et Linux.
author: Alban Petit

time: 1
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Droits administrateur sur votre ordinateur
    link: ""

softwares:
  - label: KiCAD (version 8.0 ou supérieure recommandée)
    link: "https://www.kicad.org/"

hardwares:
  - label: Ordinateur avec au moins 4GB de RAM
    link: ""

todo: 100
---

## Introduction

KiCAD est un logiciel libre et open-source de conception de circuits électroniques et de circuits imprimés (PCB). Il permet de créer des schémas électroniques, de dessiner des PCB et de générer les fichiers nécessaires à la fabrication de vos cartes électroniques.

Ce tutoriel vous guidera à travers l'installation de KiCAD sur les trois systèmes d'exploitation principaux : Windows, macOS et Linux.

{% include message.html
title="Version recommandée"
message="Nous recommandons d'installer la dernière version stable de KiCAD (version 8.0 ou supérieure) pour bénéficier des dernières fonctionnalités et corrections de bugs."
status="is-info"
icon="fas fa-info-circle" %}

---

## Installation sur Windows

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Téléchargement"
content="Rendez-vous sur le site officiel de KiCAD à l'adresse [https://www.kicad.org/download/windows/](https://www.kicad.org/download/windows/). Téléchargez la dernière version stable pour Windows (fichier .exe)." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Exécution de l'installateur"
content="Double-cliquez sur le fichier téléchargé pour lancer l'installation. Si Windows vous demande l'autorisation d'exécuter le fichier, cliquez sur 'Oui'." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Configuration de l'installation"
content="Suivez les instructions de l'assistant d'installation. Il est recommandé de conserver les paramètres par défaut :

- Installation complète (incluant les bibliothèques de composants)
- Chemin d'installation par défaut : C:\\Program Files\\KiCAD
- Création des raccourcis sur le bureau" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4 : Finalisation"
content="Cliquez sur 'Installer' et patientez pendant l'installation. Une fois terminée, cliquez sur 'Terminer'. Vous pouvez maintenant lancer KiCAD depuis le menu Démarrer ou le raccourci sur le bureau." %}

{% include message.html
title="Conseil"
message="Lors du premier lancement, KiCAD peut mettre quelques instants à initialiser les bibliothèques de composants. C'est normal."
status="is-success"
icon="fas fa-check-circle" %}

---

## Installation sur macOS

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Téléchargement"
content="Rendez-vous sur le site officiel de KiCAD à l'adresse [https://www.kicad.org/download/macos/](https://www.kicad.org/download/macos/). Téléchargez la version correspondant à votre processeur :

- KiCAD pour Apple Silicon (M1, M2, M3, M4) - fichier .dmg
- KiCAD pour Intel - fichier .dmg" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Ouverture du fichier DMG"
content="Double-cliquez sur le fichier .dmg téléchargé pour le monter. Une fenêtre s'ouvrira avec l'icône de KiCAD et le dossier Applications." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Installation"
content="Glissez-déposez l'icône KiCAD dans le dossier Applications. Attendez que la copie se termine." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4 : Premier lancement"
content="Ouvrez le dossier Applications et double-cliquez sur KiCAD. Si macOS vous affiche un message de sécurité, allez dans Préférences Système > Confidentialité et sécurité, puis autorisez l'exécution de KiCAD." %}

{% include message.html
title="Important - Sécurité macOS"
message="Lors du premier lancement, macOS peut bloquer KiCAD car il n'est pas téléchargé depuis l'App Store. C'est normal, suivez simplement les instructions ci-dessus pour autoriser l'application."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Installation sur Linux

KiCAD peut être installé sur la plupart des distributions Linux. Voici les méthodes pour les distributions les plus populaires.

### Ubuntu / Debian

{% include step-tuto.html
greyBackground = true
title = "Méthode 1 : Installation via PPA (recommandée)"
content="Ouvrez un terminal et exécutez les commandes suivantes pour ajouter le PPA officiel de KiCAD et installer la dernière version :

```bash
sudo add-apt-repository ppa:kicad/kicad-8.0-releases
sudo apt update
sudo apt install kicad
```" %}

{% include step-tuto.html
greyBackground = true
title = "Méthode 2 : Installation via Snap"
content="Si vous préférez utiliser Snap, exécutez simplement :

`sudo snap install kicad`" %}

### Fedora

{% include step-tuto.html
greyBackground = true
title = "Installation sur Fedora"
content="Ouvrez un terminal et exécutez :

`sudo dnf install kicad`" %}

### Arch Linux

{% include step-tuto.html
greyBackground = true
title = "Installation sur Arch Linux"
content="Ouvrez un terminal et exécutez :

`sudo pacman -S kicad`" %}

### Flatpak (toutes distributions)

{% include step-tuto.html
greyBackground = true
title = "Installation via Flatpak"
content="Si votre distribution supporte Flatpak, vous pouvez installer KiCAD avec :

`flatpak install flathub org.kicad.KiCad`

Et le lancer avec :
`flatpak run org.kicad.KiCad`" %}

{% include message.html
title="Bibliothèques de composants"
message="Sur Linux, les bibliothèques de composants sont généralement installées automatiquement avec le package principal. Si ce n'est pas le cas, installez également le package kicad-libraries ou kicad-symbols."
status="is-info"
icon="fas fa-info-circle" %}

---

## Vérification de l'installation

{% include step-tuto.html
greyBackground = true
title = "Vérifier que KiCAD fonctionne"
content="Une fois l'installation terminée, lancez KiCAD. Vous devriez voir la fenêtre principale du gestionnaire de projets avec plusieurs icônes :

- Eeschema (éditeur de schémas)
- Pcbnew (éditeur de PCB)
- GerbView (visualiseur Gerber)
- Et d'autres outils

Si vous voyez cette interface, félicitations ! KiCAD est correctement installé." %}

---

## Configuration initiale (optionnelle)

{% include step-tuto.html
greyBackground = true
title = "Configurer les préférences"
content="Avant de commencer votre premier projet, vous pouvez personnaliser KiCAD :

1. Allez dans Préférences > Préférences
2. Configurez vos unités préférées (mm ou inches)
3. Ajustez la grille de travail selon vos besoins
4. Configurez les chemins vers les bibliothèques si nécessaire" %}

{% include step-tuto.html
greyBackground = true
title = "Installer des bibliothèques additionnelles"
content="KiCAD est livré avec de nombreux composants, mais vous pouvez en ajouter d'autres :

- Depuis le gestionnaire de bibliothèques (Préférences > Gérer les bibliothèques de symboles/empreintes)
- En téléchargeant des bibliothèques tierces depuis GitHub
- En créant vos propres bibliothèques personnalisées

Pour apprendre à importer des bibliothèques supplémentaires dans KiCAD, consultez notre tutoriel [KiCAD - Importer des librairies](/docs/tutorials/software/kicad/kicad-import-librairies/)." %}

---

## Ressources utiles

Une fois KiCAD installé, voici quelques ressources pour bien démarrer :

- [Documentation officielle de KiCAD](https://docs.kicad.org/)
- [Forums KiCAD](https://forum.kicad.info/)
- [Tutoriels vidéo sur YouTube](https://www.youtube.com/results?search_query=kicad+tutorial)
- [Bibliothèques de composants communautaires](https://kicad.github.io/)

{% include message.html
title="Prochaines étapes"
message="Maintenant que KiCAD est installé, vous êtes prêt à créer votre premier projet ! Consultez nos autres tutoriels pour apprendre à concevoir votre première carte électronique."
status="is-success"
icon="fas fa-rocket" %}

---

## Pour aller plus loin

{%
  include card_collections.html
  title="Tutoriels KiCAD"
  description="Explorez d'autres tutoriels pour maîtriser KiCAD"
  type="tutorial"
%}
