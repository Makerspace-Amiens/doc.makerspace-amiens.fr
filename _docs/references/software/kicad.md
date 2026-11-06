---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true

title: KiCad
subtitle: Le logiciel libre de conception de circuits imprimés
description: "Fiche de référence de KiCad : à quoi il sert, ses outils, son installation et les ressources pour l'apprendre."
author: Alban Petit

manufacturer:
  - name: KiCad (projet libre)
    link: "https://www.kicad.org/"

todo: 80
---

## Présentation

**KiCad** est un logiciel libre et gratuit de conception électronique : on y dessine le **schéma** d'un circuit, puis le **circuit imprimé** (PCB) qui le réalise, jusqu'aux fichiers envoyés au fabricant. Il est développé par une communauté internationale, avec le soutien du CERN, et fonctionne sous Windows, macOS et Linux.

Au MakerSpace, c'est l'outil utilisé pour toutes les cartes électroniques, notamment dans les ateliers Microcontrôleurs et Stepper Controller Board.

## Les outils

| Outil | Rôle |
|---|---|
| **Éditeur de schémas** (Eeschema) | Dessiner le schéma : symboles, fils, étiquettes, alimentations |
| **Éditeur de PCB** (Pcbnew) | Placer les empreintes et router les pistes du circuit imprimé |
| **Éditeurs de symboles et d'empreintes** | Créer un composant absent des librairies |
| **Visualiseur 3D** | Voir la carte assemblée en relief, avant fabrication |
| **Visualiseur Gerber** | Contrôler les fichiers de fabrication |
| **Gestionnaire de plugins et contenus** | Installer des librairies et des extensions (dont celles de SparkFun) |

Deux vérifications automatiques accompagnent la conception : l'**ERC** (règles électriques) sur le schéma, le **DRC** (règles de conception) sur le PCB.

## Installation

KiCad se télécharge sur [kicad.org/download](https://www.kicad.org/download/). La procédure pas à pas, système par système, est dans le tutoriel [Installation de KiCAD](/docs/tutorials/software/kicad/installation-kicad/).

## Apprendre KiCad au MakerSpace

| Tutoriel | Contenu |
|---|---|
| [Installation de KiCAD](/docs/tutorials/software/kicad/installation-kicad/) | Installer KiCad et ses librairies |
| [KiCAD : importer des librairies](/docs/tutorials/software/kicad/kicad-import-librairies/) | Ajouter la librairie du MakerSpace ou celle d'un fabricant |
| [KiCAD Eeschema : les bases](/docs/tutorials/software/kicad/kicad-eeschema-bases/) | Dessiner un schéma, annoter, vérifier (ERC) |
| [KiCAD Pcbnew : les bases](/docs/tutorials/software/kicad/kicad-pcbnew-bases/) | Placer, router, vérifier (DRC) |
| [Fabrication de PCB](/docs/tutorials/software/kicad/kicad-fabrication-pcb/) | Générer les fichiers et commander la carte |

## Ressources

- [Documentation officielle de KiCad](https://docs.kicad.org/)
- [Librairie KiCad du MakerSpace Amiens](https://github.com/Makerspace-Amiens/kicad-library)
- [Librairies KiCad de SparkFun](https://github.com/sparkfun/SparkFun-KiCad-Libraries)
- [Librairie KiCad de Seeed Studio](https://github.com/Seeed-Studio/OPL_Kicad_Library), dont la série XIAO
