---
layout: documentation
hide_hero: false
hero_image: "/docs/tutorial/kicad-import-librairies/hero.png"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 5

title: "KiCAD : importer des librairies"
subtitle: Intégrez des librairies de composants dans KiCAD
description: Apprenez à importer des librairies de symboles et d'empreintes dans KiCAD, notamment la librairie du Makerspace Amiens référençant les composants disponibles en stock.
author: Alban Petit

time: 1
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: KiCAD installé sur votre ordinateur
    link: "/docs/tutorials/software/kicad/installation-kicad/"

softwares:
  - label: KiCAD (version 8.0 ou supérieure)
    link: "https://www.kicad.org/"

hardwares:
  - label: Ordinateur avec souris
    link: ""

todo: 100
---

## Introduction

KiCAD organise ses composants en deux types de librairies complémentaires :

- **Librairies de symboles** (`.kicad_sym`) : les représentations schématiques des composants utilisées dans Eeschema
- **Librairies d'empreintes** (dossiers `.pretty` contenant des fichiers `.kicad_mod`) : les empreintes PCB utilisées dans Pcbnew

Le Makerspace Amiens maintient une librairie KiCAD référençant l'ensemble des composants disponibles en stock. En l'intégrant à votre projet KiCAD, vous avez accès directement aux composants lors de la conception de vos schémas et PCB.

{% include message.html
title="Librairie Makerspace Amiens"
message="La librairie est disponible sur GitHub : [https://github.com/Makerspace-Amiens/kicad-library](https://github.com/Makerspace-Amiens/kicad-library). Elle est mise à jour régulièrement à mesure que de nouveaux composants sont ajoutés au stock."
status="is-info"
icon="fas fa-info-circle" %}

---

## Télécharger la librairie

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Télécharger l'archive ZIP"
content="Rendez-vous sur le dépôt GitHub de la librairie :

**[https://github.com/Makerspace-Amiens/kicad-library](https://github.com/Makerspace-Amiens/kicad-library)**

1. Cliquez sur le bouton **Code** (bouton vert en haut à droite)
2. Sélectionnez **Download ZIP**
3. Décompressez l'archive dans un dossier de votre projet ou à un emplacement facilement accessible"
image="download-zip.png" %}

{% include step-tuto.html
greyBackground = true
title = "Structure de la librairie"
content="Une fois décompressée, la librairie contient :

- Un fichier `.kicad_sym` : la librairie de **symboles** (composants schématiques)
- Un dossier `.pretty` : la librairie d'**empreintes** PCB
- Un dossier `3dmodels` (optionnel) : les modèles 3D des composants

Notez le chemin complet du dossier, vous en aurez besoin pour les étapes suivantes." %}

---

## Importer la librairie de symboles

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Ouvrir le gestionnaire de librairies de symboles"
content="Dans KiCAD, ouvrez votre projet puis lancez **Eeschema**. Allez dans :

**Préférences > Gérer les librairies de symboles...**

La fenêtre de gestion des librairies s'ouvre avec deux onglets :

- **Librairies globales** : disponibles pour tous vos projets
- **Librairies spécifiques au projet** : uniquement pour le projet en cours

Sélectionnez l'onglet **Librairies spécifiques au projet**."
image="gestionnaire-librairies-symboles.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Ajouter la librairie de symboles"
content="Dans l'onglet **Librairies spécifiques au projet** :

1. Cliquez sur l'icône **Ajouter une librairie existante** (symbole de dossier)
2. Naviguez jusqu'au dossier décompressé
3. Sélectionnez le fichier `.kicad_sym` de la librairie Makerspace
4. La librairie apparaît dans la liste avec un **Alias** (nom court) et son chemin
5. Vous pouvez renommer l'alias en `Makerspace-Amiens` pour le retrouver facilement
6. Cliquez sur **OK** pour valider"
image="ajouter-librairie-symboles.png" %}

---

## Importer la librairie d'empreintes

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Ouvrir le gestionnaire de librairies d'empreintes"
content="Dans KiCAD, ouvrez **Pcbnew** ou l'éditeur d'empreintes. Allez dans :

**Préférences > Gérer les librairies d'empreintes...**

La fenêtre fonctionne de la même façon que pour les symboles. Sélectionnez l'onglet **Librairies spécifiques au projet**."
image="gestionnaire-librairies-empreintes.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Ajouter la librairie d'empreintes"
content="Dans l'onglet **Librairies spécifiques au projet** :

1. Cliquez sur l'icône **Ajouter une librairie existante** (dossier avec un +)
2. Naviguez jusqu'au dossier décompressé de la librairie
3. Sélectionnez le **dossier `.pretty`** (et non un fichier individuel)
4. La librairie est ajoutée avec son alias
5. Renommez l'alias en `Makerspace-Amiens` pour la cohérence avec la librairie de symboles
6. Cliquez sur **OK** pour valider"
image="ajouter-librairie-empreintes.png" %}

---

## Vérifier l'import

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Vérifier la librairie de symboles"
content="Dans Eeschema, appuyez sur **A** pour ouvrir la fenêtre d'ajout de composants. Dans la barre de recherche, tapez `Makerspace` ou le nom d'un composant du stock.

Les composants de la librairie Makerspace Amiens doivent apparaître dans la liste, préfixés par le nom de la librairie (`Makerspace-Amiens:NomDuComposant`)."
image="verifier-librairie-symboles.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Vérifier la librairie d'empreintes"
content="Dans Pcbnew, ouvrez l'éditeur d'empreintes ou ajoutez une empreinte depuis le menu. Recherchez `Makerspace` dans la barre de recherche.

Les empreintes de la librairie Makerspace Amiens doivent être listées et prévisualisées correctement."
image="verifier-librairie-empreintes.png" %}

{% include message.html
title="Librairie mise à jour ?"
message="Si la librairie est mise à jour sur GitHub (nouveaux composants en stock), re-téléchargez le ZIP et remplacez le dossier décompressé. KiCAD prend en compte les modifications au prochain démarrage."
status="is-warning"
icon="fas fa-sync-alt" %}
