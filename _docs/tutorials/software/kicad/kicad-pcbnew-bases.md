---
layout: documentation
hide_hero: false
hero_image: "/docs/tutorial/kicad-pcbnew-bases/hero.png"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 4

title: KiCAD Pcbnew - Les Bases
subtitle: Concevez votre premier circuit imprimé
description: Ce tutoriel couvre les fonctionnalités de base de l'éditeur de PCB Pcbnew de KiCAD.
author: Alban Petit

time: 4
difficulty: 2
compatibilities-os: win, mac, lin

prerequisites:
  - label: KiCAD installé sur votre ordinateur
    link: "/docs/tutorials/software/kicad/installation-kicad/"
  - label: Schéma électrique créé avec Eeschema
    link: "/docs/tutorials/software/kicad/kicad-eeschema-bases/"

softwares:
  - label: KiCAD (version 8.0 ou supérieure)
    link: "https://www.kicad.org/"

hardwares:
  - label: Ordinateur avec souris
    link: ""

todo: 100
---

## Introduction

Pcbnew est l'éditeur de circuits imprimés (PCB) intégré à KiCAD. Après avoir créé votre schéma électronique dans Eeschema, Pcbnew vous permet de concevoir le circuit imprimé physique : placer les composants, router les connexions, définir les contours de la carte et générer les fichiers de fabrication.

Ce tutoriel vous guidera à travers les bases de Pcbnew : du passage du schéma au PCB jusqu'à la génération des fichiers Gerber pour la fabrication.

{% include message.html
title="Pré-requis important"
message="Ce tutoriel suppose que vous avez déjà créé un schéma électronique avec Eeschema, avec les composants annotés et les empreintes assignées. Si ce n'est pas le cas, consultez d'abord notre tutoriel sur Eeschema."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Ouvrir Pcbnew et importer le schéma

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Ouvrir Pcbnew depuis le projet"
content="Depuis le gestionnaire de projets KiCAD, double-cliquez sur le fichier .kicad_pcb ou cliquez sur l'icône **Éditeur de circuit imprimé**. Pcbnew s'ouvre avec un PCB vierge ou votre PCB existant."
image="ouvrir-pcbnew.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Mettre à jour le PCB depuis le schéma"
content="Pour importer ou mettre à jour les composants depuis votre schéma, allez dans **Outils > Mettre à jour le circuit imprimé depuis le schéma** ou appuyez sur **F8**. Une fenêtre s'ouvre listant tous les changements." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Importer les composants"
content="Dans la fenêtre de mise à jour :

- Vérifiez la liste des composants à ajouter
- Cochez 'Supprimer les empreintes supplémentaires' si nécessaire
- Cliquez sur **Mettre à jour le PCB**

Tous vos composants apparaissent empilés, prêts à être placés. Les connexions (chevelu/ratsnest) sont visibles."
image="composants-importation.png" %}

{% include message.html
title="Le chevelu (Ratsnest)"
message="Les lignes blanches fines qui relient les composants s'appellent le 'chevelu' ou 'ratsnest'. Elles représentent les connexions logiques de votre schéma et vous guident pour router vos pistes."
status="is-info"
icon="fas fa-project-diagram" %}

---

## Découvrir l'interface de Pcbnew

{% include step-tuto.html
greyBackground = true
title = "Les zones de l'interface"
content="L'interface de Pcbnew est organisée en plusieurs zones :

**1. Barre d'outils supérieure** : Outils principaux (sauvegarder, annuler, zoom, couches)
**2. Barre d'outils verticale droite** : Outils de dessin et routage
**3. Zone de dessin centrale** : Votre PCB
**4. Panneau Apparence à droite** : Visibilité des couches et éléments
**5. Barre de messages en bas** : Coordonnées et informations"
image="interface-pcbnew.png" %}

{% include step-tuto.html
greyBackground = true
title = "Les couches du PCB"
content="Un PCB est constitué de plusieurs couches empilées :

**F.Cu (Front Copper)** : Couche cuivre face avant (rouge)
**B.Cu (Back Copper)** : Couche cuivre face arrière (vert)
**F.SilkS (Front Silkscreen)** : Sérigraphie face avant (marquages)
**B.SilkS (Back Silkscreen)** : Sérigraphie face arrière
**Edge.Cuts** : Contour de découpe de la carte

Pour les PCB 4 couches ou plus, il y a des couches internes (In1.Cu, In2.Cu, etc.)" %}

{% include step-tuto.html
greyBackground = true
title = "Raccourcis clavier essentiels"
content="Mémorisez ces raccourcis pour gagner en efficacité :

**M** : Déplacer un composant
**R** : Pivoter un composant
**F** : Retourner un composant (face avant/arrière)
**X** : Commencer une piste (route)
**V** : Placer un via
**D** : Glisser une piste (drag)
**U** : Sélectionner la piste complète
**Delete** : Supprimer un élément
**Page Up/Down** : Changer de couche active
**Échap** : Annuler l'action en cours" %}

{% include message.html
title="Astuce - Navigation"
message="Utilisez la molette pour zoomer, maintenez le bouton du milieu pour déplacer la vue. Appuyez sur F11 pour passer en mode plein écran et gagner de l'espace de travail."
status="is-success"
icon="fas fa-mouse" %}

---

## Assigner les empreintes

{% include step-tuto.html
greyBackground = true
title = "Qu'est-ce qu'une empreinte ?"
content="Une empreinte (footprint) est la représentation physique d'un composant sur le PCB : les pastilles de soudure, l'encombrement, la sérigraphie. Chaque symbole de votre schéma doit avoir une empreinte assignée pour être placé sur le PCB."
image="empreinte-exemple.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Ouvrir l'éditeur d'empreintes"
content="Depuis Eeschema, allez dans **Outils > Assigner les empreintes**. Une fenêtre s'ouvre avec trois colonnes :

- Gauche : Bibliothèques d'empreintes
- Centre : Empreintes disponibles
- Droite : Votre liste de composants"
image="assigner-empreintes.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Assigner les empreintes aux composants"
content="Pour chaque composant de votre schéma :

1. Sélectionnez-le dans la colonne de droite
2. Cherchez l'empreinte correspondante (ex: pour une résistance CMS 0805, cherchez 'R_0805')
3. Double-cliquez sur l'empreinte ou utilisez le bouton pour l'assigner
4. L'empreinte apparaît à côté du composant

**Empreintes courantes :**

- Résistances/condensateurs CMS : R_0805, C_0603
- Résistances traversantes : R_Axial_DIN0207
- LED CMS : LED_0805
- LED traversante : LED_D3.0mm ou LED_D5.0mm" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Utiliser les filtres"
content="Utilisez les filtres en haut de la fenêtre pour trouver rapidement les empreintes :

- **Par mots-clés** : Tapez '0805', 'SOIC', 'QFN', etc.
- **Par brochage** : Filtrer par nombre de broches
- **Par bibliothèque** : Sélectionnez une bibliothèque spécifique à gauche

Visualisez l'empreinte avant de l'assigner avec le panneau d'aperçu."
image="filtres-empreintes.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4 : Valider et sauvegarder"
content="Une fois toutes les empreintes assignées :

1. Vérifiez qu'aucun composant n'a '**<non assigné>**'
2. Cliquez sur **OK** ou **Appliquer, Sauvegarder le schéma et continuer**
3. Les empreintes sont maintenant liées à vos composants

Retournez dans Pcbnew et mettez à jour le PCB (F8) pour voir les nouvelles empreintes." %}

{% include message.html
title="Bibliothèques d'empreintes"
message="KiCAD inclut des milliers d'empreintes standards. Pour des composants spécifiques, consultez les sites des fabricants ou utilisez SnapEDA/Ultra Librarian pour télécharger des empreintes toutes faites. Pour importer des bibliothèques d'empreintes supplémentaires, consultez notre tutoriel [KiCAD - Importer des librairies](/docs/tutorials/software/kicad/kicad-import-librairies/)."
status="is-info"
icon="fas fa-download" %}

---

## Placer les composants

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Séparer les composants"
content="Après l'import, tous les composants sont empilés au même endroit. Cliquez et glissez pour les séparer grossièrement. Ne vous souciez pas encore de leur position finale, dispersez-les simplement pour y voir clair."
image="separer-composants.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Planifier l'organisation"
content="Avant de placer finement, réfléchissez à l'organisation logique :

- Regroupez les composants par fonction (alimentation, microcontrôleur, connecteurs, etc.)
- Identifiez les composants qui doivent être proches (ex: condensateurs de découplage près du µC)
- Pensez au sens du flux de signal (entrée → traitement → sortie)
- Considérez les contraintes mécaniques (trous de fixation, connecteurs en bordure)" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Placer les composants un par un"
content="Placez chaque composant en suivant ces principes :

1. Sélectionnez un composant et appuyez sur **M** pour le déplacer
2. Appuyez sur **R** pour le pivoter (rotation de 90°)
3. Appuyez sur **F** pour le retourner (passer de la face avant à la face arrière)
4. Observez le chevelu : les lignes doivent être courtes et peu croisées
5. Alignez les composants sur la grille (clic droit > Grille pour changer le pas)

Placez d'abord les composants critiques (connecteurs, µC), puis les passifs autour." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4 : Optimiser le placement"
content="Un bon placement facilite le routage. Vérifiez :

- **Chevelu minimal** : Les connexions se croisent le moins possible
- **Espacement suffisant** : Laissez de l'espace pour router entre les composants
- **Orientation logique** : Alignez les composants dans le sens du signal
- **Accessibilité** : Les points de test et composants à souder sont accessibles

N'hésitez pas à réorganiser plusieurs fois jusqu'à satisfaction."
image="placement-optimise.png" %}

{% include message.html
title="Condensateurs de découplage"
message="Les condensateurs de découplage (bypass capacitors) doivent être placés AU PLUS PRÈS des broches d'alimentation des circuits intégrés, avec des pistes courtes et directes. C'est critique pour le bon fonctionnement."
status="is-warning"
icon="fas fa-bolt" %}

---

## Définir le contour du PCB

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Sélectionner la couche Edge.Cuts"
content="Avant de tracer le contour, sélectionnez la couche **Edge.Cuts** dans le sélecteur de couche en haut. Cette couche définit où la carte sera découpée lors de la fabrication."
image="selectionner-edge-cuts.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Tracer un rectangle simple"
content="Pour un PCB rectangulaire simple :

1. Cliquez sur l'icône **Rectangle** dans la barre d'outils droite
2. Cliquez pour définir le premier coin
3. Étirez le rectangle pour englober tous vos composants avec de la marge
4. Cliquez pour terminer

Laissez au moins 3-5mm de marge autour des composants."
image="contour-rectangle.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Tracer un contour personnalisé"
content="Pour une forme plus complexe, utilisez l'outil **Ligne** :

1. Sélectionnez l'outil ligne dans la couche Edge.Cuts
2. Tracez le contour segment par segment
3. Pour des courbes, utilisez l'outil **Arc**
4. Le contour doit former une boucle fermée complète

Vous pouvez ajouter des congés d'angle avec l'outil approprié." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4 : Ajouter des trous de fixation"
content="Pour ajouter des trous de montage (mounting holes) :

1. Allez dans **Placer > Empreinte** ou appuyez sur **O**
2. Cherchez 'MountingHole' dans la bibliothèque
3. Choisissez le diamètre approprié (ex: MountingHole_3.2mm_M3)
4. Placez les trous aux quatre coins ou selon vos besoins

Respectez les distances minimales des bords (généralement 3mm minimum)."
image="trous-fixation.png" %}

{% include message.html
title="Dimensions standards"
message="Les dimensions courantes de PCB sont : 100x100mm, 100x80mm, 50x50mm. Vérifiez les tarifs de votre fabricant : certaines dimensions sont moins chères que d'autres."
status="is-info"
icon="fas fa-ruler" %}

---

## Configurer les règles de conception

{% include step-tuto.html
greyBackground = true
title = "Qu'est-ce que les règles de conception ?"
content="Les règles de conception (Design Rules) définissent les contraintes de fabrication :

- Largeur minimale des pistes
- Espacement minimum entre pistes
- Diamètre des vias
- Clearance (distance de sécurité)

Ces valeurs dépendent des capacités de votre fabricant de PCB." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Ouvrir la configuration"
content="Allez dans **Fichier > Configuration du circuit imprimé**. Plusieurs onglets apparaissent : Couches, Règles de conception, Classes de nets, etc."
image="ouvrir-config.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Définir les contraintes"
content="Dans l'onglet **Contraintes**, configurez les valeurs minimales :

**Pour un PCB standard 2 couches :**

- Clearance minimum : `0.2mm`
- Largeur de piste minimum : `0.2mm`
- Largeur de piste maximum : `2mm` (ou plus selon besoins)
- Via diamètre minimum : `0.6mm`
- Via diamètre de perçage : `0.3mm`

Ces valeurs fonctionnent avec la plupart des fabricants standards (PCBWay, JLCPCB, etc.)." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Classes de nets (optionnel)"
content="Pour des pistes spécifiques (alimentation, signaux haute vitesse), créez des classes de nets :

1. Allez dans l'onglet **Classes de nets**
2. Créez une classe (ex: 'Power' pour l'alimentation)
3. Définissez une largeur de piste plus importante (ex: 0.5mm ou 1mm)
4. Assignez les nets correspondants (VCC, GND, +5V, etc.)

Les pistes d'alimentation seront automatiquement plus larges."
image="classes-nets.png" %}

{% include message.html
title="Consultez votre fabricant"
message="Avant de finaliser vos règles, consultez les spécifications techniques de votre fabricant de PCB. Chaque fabricant a ses propres capacités et contraintes. Respecter ces spécifications évite les erreurs de fabrication."
status="is-warning"
icon="fas fa-industry" %}

---

## Router les pistes

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Commencer une piste"
content="Pour router une connexion :

1. Appuyez sur **X** ou cliquez sur l'icône 'Router des pistes'
2. Cliquez sur une pastille de départ
3. Suivez le chevelu (ligne blanche) vers la destination
4. Cliquez pour créer des segments
5. Terminez sur la pastille d'arrivée

La piste apparaît en couleur selon la couche active."
image="router-piste.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Changer de couche avec des vias"
content="Pour passer d'une couche à l'autre pendant le routage :

1. Pendant que vous tracez une piste, appuyez sur **V**
2. Un via (trou métallisé) est automatiquement placé
3. La couche active bascule (F.Cu ↔ B.Cu)
4. Continuez à router sur la nouvelle couche

Utilisez les vias intelligemment pour éviter les croisements de pistes."
image="via-changement-couche.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Modes de routage"
content="Pcbnew propose plusieurs modes de routage (changez avec **/** ou **\\**) :

**Mode 1 - 45°** : Les pistes suivent des angles de 45° (recommandé)
**Mode 2 - 90°** : Angles droits (à éviter pour les signaux rapides)
**Mode 3 - Libre** : Angles quelconques (pour cas particuliers)
**Push and shove** : Les pistes existantes sont écartées automatiquement

Pour la plupart des cas, utilisez le mode 45° avec push and shove activé." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4 : Router les signaux"
content="Ordre de routage recommandé :

1. **Signaux critiques** : Horloges, signaux haute vitesse, différentiels
2. **Alimentation principale** : VCC, GND (ou utilisez des plans de masse)
3. **Signaux normaux** : GPIO, I2C, SPI, UART, etc.
4. **Signaux secondaires** : LEDs, boutons, connecteurs auxiliaires

Gardez les pistes courtes et directes. Évitez les angles de 90° aigus." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 5 : Largeur des pistes"
content="Adaptez la largeur selon le courant :

- **0.2-0.3mm** : Signaux faible courant (<100mA)
- **0.5mm** : Signaux moyens (100-500mA)
- **1-2mm** : Alimentation forte (500mA-3A)
- **>2mm** : Très fort courant (>3A)

Changez la largeur pendant le routage : appuyez sur **W** puis tapez la valeur.
Utilisez des calculateurs en ligne pour dimensionner précisément selon le courant."%}

{% include message.html
title="Astuce - Déplacement de pistes"
message="Pour déplacer une piste déjà routée, appuyez sur **D** (Drag) au lieu de **M** (Move). Cela déplace la piste en maintenant les connexions, ce qui est beaucoup plus pratique."
status="is-success"
icon="fas fa-arrows-alt" %}

---

## Plans de masse et zones de cuivre

{% include step-tuto.html
greyBackground = true
title = "Qu'est-ce qu'un plan de masse ?"
content="Un plan de masse (ground plane ou copper pour) est une grande surface de cuivre connectée à la masse (GND). Avantages :

- Réduit les interférences électromagnétiques (EMI)
- Facilite le routage (pas besoin de router tous les GND)
- Améliore la dissipation thermique
- Réduit l'impédance de masse

C'est une bonne pratique pour presque tous les PCB." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Créer une zone de cuivre"
content="Pour créer un plan de masse sur la face arrière :

1. Sélectionnez la couche **F.Cu** (front copper)
2. Cliquez sur l'icône **Ajouter une zone** (ou appuyez sur **Ctrl+Shift+Z**)
3. Une fenêtre s'ouvre : sélectionnez le net **GND**
4. Cliquez pour dessiner le contour de la zone (généralement tout le PCB)
5. Double-cliquez pour terminer"
image="creer-zone-cuivre.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Configurer la zone"
content="Dans la fenêtre de configuration de zone, réglez :

**Net** : GND (ou le net souhaité)
**Clearance** : 0.2mm (distance de sécurité)
**Pad connection** : Thermal reliefs (connexions thermiques)
**Priority** : 0 (pour le plan de masse principal)
**Fill type** : Solid (plein)

Les thermal reliefs facilitent la soudure en limitant l'évacuation de chaleur."
image="configurer-zone.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Remplir la zone"
content="Pour visualiser le remplissage de cuivre :

1. Appuyez sur **B** pour remplir toutes les zones (Fill all zones)
2. Le plan de masse se remplit en évitant automatiquement les autres pistes et pastilles
3. Pour vider (pour modifier), appuyez sur **Ctrl+B** (Unfill all zones)

Le plan s'adapte automatiquement quand vous modifiez le routage."
image="remplir-zone.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4 : Ajouter un plan de masse sur l'autre face"
content="Pour les PCB 2 couches, ajoutez aussi un plan de masse sur F.Cu :

1. Sélectionnez la couche **F.Cu**
2. Répétez les étapes précédentes
3. Remplissez avec **B**

Vous avez maintenant un plan de masse des deux côtés, ce qui améliore grandement les performances électriques."
image="plan-double-face.png" %}

{% include message.html
title="Connexions thermiques"
message="Les thermal reliefs (connexions thermiques) sont essentielles : elles connectent les pastilles au plan de masse via des 'ponts' fins. Sans elles, il serait très difficile de souder car tout le plan agirait comme un dissipateur thermique."
status="is-info"
icon="fas fa-fire" %}

---

## Vérification DRC (Design Rule Check)

{% include step-tuto.html
greyBackground = true
title = "Qu'est-ce que le DRC ?"
content="Le DRC (Design Rule Check) vérifie automatiquement que votre PCB respecte les règles de conception définies :

- Espacements entre pistes
- Largeur minimale des pistes
- Chevauchements non autorisés
- Connexions manquantes (chevelu non routé)
- Vias trop proches des bords

C'est indispensable avant d'envoyer les fichiers en fabrication." %}

{% include step-tuto.html
greyBackground = true
title = "Importer une configuration DRC depuis un autre projet"
content="Vous pouvez importer des règles de conception pré-configurées depuis un autre projet ou un fabricant de PCB :

1. Ouvrez la fenêtre DRC : **Fichier > Configuration de carte**
2. Cliquez sur **Règles de conception > Contraintes**
3. Dans l'onglet **Contraintes de conception**, cliquez sur **Importer les paramètres depuis un autre projet**
4. Sélectionnez le fichier `.kicad_pro` ou `.kicad_dru` du projet source
5. Les règles sont importées : validez avec **OK**

**Configuration DRC recommandée** : Utilisez la configuration DRC de votre fabricant pour garantir la compatibilité. Par exemple, **Aisler** fournit des fichiers de configuration DRC prêts à l'emploi sur leur dépôt GitHub : [https://github.com/AislerHQ/aisler-support/tree/master/kicad](https://github.com/AislerHQ/aisler-support/tree/master/kicad)

Importer ces règles vous assure que votre PCB respectera les capacités de fabrication (espacements minimaux, largeurs de pistes, taille de vias, etc.)." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Lancer le DRC"
content="Allez dans **Inspecter > Vérificateur de règles de conception** ou cliquez sur l'icône coccinelle. La fenêtre DRC s'ouvre avec plusieurs onglets."
image="lancer-drc.png" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Exécuter la vérification"
content="Dans la fenêtre DRC :

1. Cliquez sur **Exécuter DRC**
2. L'outil analyse votre PCB (cela peut prendre quelques secondes)
3. Les erreurs et avertissements s'affichent dans la liste
4. Le compteur indique le nombre de problèmes détectés

Double-cliquez sur une erreur pour naviguer vers l'emplacement concerné." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Corriger les erreurs"
content="Types d'erreurs courantes et solutions :

**Clearance violation** : Deux pistes trop proches → Écartez-les ou changez le routage
**Track width** : Piste trop fine → Élargissez la piste
**Unconnected items** : Chevelu non routé → Terminez le routage ou supprimez si erreur
**Via too close to edge** : Via trop proche du bord → Déplacez le via

Corrigez toutes les erreurs une par une, puis relancez le DRC jusqu'à obtenir 0 erreur." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4 : Vérifier les avertissements"
content="Les avertissements (warnings) ne bloquent pas la fabrication mais méritent attention :

- **Silkscreen over pad** : Sérigraphie sur une pastille (sera effacée)
- **Courtyard overlap** : Composants trop proches (problème d'assemblage potentiel)
- **Missing courtyard** : Empreinte sans courtyard défini

Évaluez chaque avertissement : certains sont acceptables, d'autres doivent être corrigés."
image="avertissements-drc.png" %}

{% include message.html
title="Objectif : 0 erreur"
message="Un PCB prêt pour la fabrication doit avoir 0 erreur DRC. Les avertissements peuvent parfois être acceptés selon le contexte, mais les erreurs doivent TOUTES être corrigées."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Sérigraphie et finitions

{% include step-tuto.html
greyBackground = true
title = "Ajouter du texte sur la sérigraphie"
content="La sérigraphie (silkscreen) affiche des informations sur le PCB fini :

1. Sélectionnez la couche **F.SilkS** (sérigraphie face avant)
2. Cliquez sur l'icône **Ajouter du texte** (ou appuyez sur **Ctrl+Shift+T**)
3. Tapez votre texte (nom du projet, version, votre nom, date, etc.)
4. Placez et ajustez la taille (généralement 1-1.5mm de hauteur)

Ajoutez des informations utiles : nom du projet, version, date, votre logo, etc."
image="ajouter-texte.png" %}

{% include step-tuto.html
greyBackground = true
title = "Améliorer les références des composants"
content="Les références (R1, C1, U1...) sont automatiquement placées mais souvent mal positionnées :

1. Déplacez-les pour qu'elles soient lisibles et ne chevauchent rien
2. Orientez-les dans le même sens si possible
3. Pour masquer une référence : sélectionnez-la, appuyez sur **E** et décochez 'Visible'
4. Vérifiez qu'aucune référence ne chevauche une pastille

Une sérigraphie propre facilite grandement l'assemblage et le débogage."
image="references-composants.png" %}

{% include step-tuto.html
greyBackground = true
title = "Vérifier visuellement le PCB"
content="Avant de générer les fichiers de fabrication, faites une vérification visuelle complète :

- Toutes les pistes sont routées (pas de chevelu blanc restant)
- Les plans de masse sont remplis correctement
- Les références de composants sont lisibles
- La sérigraphie ne chevauche pas les pastilles
- Le contour Edge.Cuts est fermé et propre
- Les trous de fixation sont présents si nécessaires

Prenez le temps de vérifier, c'est plus facile maintenant qu'après fabrication !" %}

{% include message.html
title="Conseil - Vue 3D"
message="Utilisez la vue 3D (Alt+3 ou menu Vue > Vue 3D) pour visualiser votre PCB en trois dimensions. C'est excellent pour détecter les problèmes et avoir un aperçu du résultat final."
status="is-success"
icon="fas fa-cube" %}

---

## Prochaines étapes et ressources

Félicitations ! Vous maîtrisez maintenant les bases de Pcbnew. Vous savez créer un PCB complet depuis le schéma jusqu'aux fichiers de fabrication.

### Pour aller plus loin

Une fois à l'aise avec les bases, explorez ces fonctionnalités avancées :

- **Routage automatique** : Utilisation d'auto-routeurs (Freerouting, etc.)
- **PCB multi-couches** : 4, 6, 8 couches ou plus
- **Paires différentielles** : Routage de signaux haute vitesse (USB, HDMI, etc.)
- **Calculs d'impédance** : Adaptation d'impédance pour RF et haute vitesse
- **Longueur de pistes** : Égalisation pour signaux synchrones (DDR, etc.)
- **PCB flex ou rigide-flex** : Circuits souples
- **Assemblage CMS** : Génération des fichiers Pick-and-Place pour assemblage automatique

{% include message.html
title="Assemblage du PCB"
message="Une fois vos PCB reçus, il faudra les assembler (souder les composants). Commandez vos composants chez Mouser, Digikey, Farnell ou RS Components. Pour le CMS, les fabricants (JLCPCB, PCBWay) proposent aussi des services d'assemblage économiques."
status="is-info"
icon="fas fa-microchip" %}

---

## Bonnes pratiques de conception PCB

### Placement et routage

- **Flux de signal logique** : Organisez entrée → traitement → sortie
- **Signaux sensibles courts** : Horloges et signaux rapides les plus courts possible
- **Découplage proche** : Condensateurs de découplage au plus près des CI
- **Retour de masse** : Assurez un chemin de retour court pour tous les signaux
- **Évitez les boucles** : Les boucles de courant créent des interférences

### Thermique et mécanique

- **Dissipation thermique** : Zones de cuivre larges pour composants chauds
- **Contraintes mécaniques** : Renforcez les zones de contrainte (connecteurs, etc.)
- **Trous de fixation** : Toujours prévoir des points de montage
- **Clearance mécanique** : Vérifiez les hauteurs de composants et boîtiers

### Fabrication et assemblage

- **Marges de bord** : 3-5mm minimum des bords pour composants et pistes
- **Orientation composants** : Même orientation si possible (facilite l'assemblage)
- **Points de test** : Ajoutez des testpoints pour débogage
- **Numérotation logique** : Références organisées (de gauche à droite, haut en bas)
- **Documentation** : Notes de version, schémas, BOM sur/avec le PCB

---

## Ressources complémentaires

Pour approfondir vos connaissances sur Pcbnew et la conception de PCB :

- [Documentation officielle Pcbnew](https://docs.kicad.org/master/fr/pcbnew/pcbnew.html)
- [Forum KiCAD](https://forum.kicad.info/)
- [EEVblog - Tutoriels PCB](https://www.eevblog.com/)

{% include message.html
title="Continuez à pratiquer !"
message="La conception de PCB est un art qui s'améliore avec la pratique. Commencez simple, apprenez de chaque projet, et n'ayez pas peur de faire des erreurs (c'est comme ça qu'on apprend !). Bon routage !"
status="is-success"
icon="fas fa-graduation-cap" %}
