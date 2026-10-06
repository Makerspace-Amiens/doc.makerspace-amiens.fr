---
layout: documentation
image: part1_drawing.png
hide_hero: false
hero_image: part1_drawing.png
hero_darken: true
component_toc: true
doc_header: true

title: Le dessin de définition
subtitle: Comment lire, utiliser et créer une mise en plan à partir d'un logiciel de CAO 
description: Cette page vous explique comment fonctionne un dessin de définition, comment l'utiliser pour créer une pièce sur un logiciel de CAO puis comment créer vos propres mises en plan.
author: Camille Chaud
type: tutorial

time: 4
difficulty: 2
compatibilities-os: win,mac,lin

prerequisites:
  - label: Bases de la CAO
    link: ""

softwares: 
  - label: OnShape
    link: ""

todo: 10
---

{% include message.html title="Information"
message="Ce tutoriel présente **les bases de la mise en plan et du dessin de définition** pour vous permettre de réaliser les pièces d'entrainement à partir de plans fournis. Il existe beaucoup plus de nuances qui ne seront pas abordées ici, n'hésitez pas à vous renseigner par vous même."
status="is-info"
icon="fas fa-info-circle" %}

## Le dessin de définition

### Qu'est-ce qu'un dessin de définition ?

Le **dessin de définition** est un outil très important pour l'ingénieur et l'industrie de manière générale. Si vous voulez produire votre pièce ou la faire contrôler, c'est ce document que vous devrez envoyer et non pas votre fichier CAO. Il faut vraiment le considérer comme un **langage de communication universel** entre différents acteurs du monde technique. C'est lui qui donne une représentation graphique d'un produit technique, et il est normalisé. Il peut avoir une **valeur juridique**, servir de **plan de construction** et bien d'autre, vous devez pouvoir le comprendre et **en extraire les informations importantes**.

{% include step-tuto.html
greyBackground = true
title ="Un exemple fil rouge: la pièce d'entrainement n°1"
content ="Pour toute cette section, nous travaillerons avec la première pièce d'entrainement que vous aurez ensuite à réaliser sur Onshape."
image ="03.png"%}

### Comment se présente un dessin de définition, et quelles informations peut-on y retrouver ?

![part1_drawing](part1_drawing.png)

### Quelles informations peut-on retrouver sur ce document ?

Méthode de fabrication, dimensions et tolérances, état de surface, opérations spécifiques, description des perçages/taraudages, cartouche avec diverses informations (entreprise, concepteur, version, contrôle qualité, matériaux, ...)

### Les règles de base

blabla

{% include step-tuto.html
greyBackground = true
content ="On observe un objet depuis ses différentes faces"
image ="directions_observation.png"%}

{% include step-tuto.html
greyBackground = true
content ="On observe un objet depuis ses différentes faces"
image ="projection_orthogonale.png"%}

![projection](cube_projection.png)

Une fois que l'on a projeté toutes les faces, si on dépli le cube comme un patron selon la vue de face,on obtient le placement des vues standard (!! les normes européennes et américaines ne sont pas les mêmes !!). Les différentes projetions regroupées dans un même dessin se correspondent toutes entre elles. On affiche rarement toutes les vues sur un dessin de définition : en général 3 vues suffisent pour définir un objet. On cherche le maximum de définition et de clarté pour décrire les formes et les dimensions de la pièce.
![dépliage](projections_depliage.png)

### Les différents types de traits et leurs fonctions

| | Types de traits et leur signification  |
|---|---|---|
| **Trait continu** | épais, pour les arêtes et contours visibles |-----------|
| **Trait pointillé** | fin, pour les arêtes et contours cachés  |- - - - -|
| **Trait mixte** | pour les axes de révolution et plans de symétrie |-.-.-.-.-|

Lorsque deux traits sont superposés, le trait continu reste le seul visible.

### Vues en coupes et sections

La coupe est un mode de représentation couramment utilisé. Elle
permet de représenter des détails internes au système difficilement
représentables en vue extérieure.

{% include step-tuto.html
greyBackground = true
title ="Principe d'une vue en coupe"
content ="1. On prends la pièce complète.
2. On imagine un plan qui traverse la pièce.
3. On redessine toutes les parties de la pièce qui coupent ce plan. "
image ="section_coupe.png"%}

{% include step-tuto.html
greyBackground = true
title ="Comment bien l'identifier sur un dessin de définition"
content ="L'indication 'section A-A' indique qu'il y a une vue en coupe issue de cette pièce. L'indication 'coupe A-A' correspond à l'affichage de cette vue en coupe.
"
image ="section_coupe_AA.png"%}

Dans la **vue principale** on retrouve :
- Le plan de coupe repéré par un trait mixte renforcé aux extrémités
- Le nom de la coupe repéré par un couple de lettre
- La direction d'observation repérée par des flèches

Dans la **vue coupée** doivent apparaître:
- La référence au plan de coupe
- Les hachures indiquant la matière coupée

## Passer d'un plan à la modélisation

Tous les chemins mènent à Rome, mais il en existe un plus court que les autre, ou plus pratique si vous avez à retoucher vos pièces ultérieurement (ce qui arrive *très souvent*). Il n'y a pas de méthode magique valable pour toutes les pièces, néanmoins certains **réflexes et bonnes pratiques** vous aideront pour la suite.

### Réfléchir avant de passer au logiciel

Reconnaitre les symétries, les répétitions, les axes de rotations. Associer des fonctions logiciels (mirroir, répétition linéaire/circulaire, révolution,..) et réfléchir à un ordre logique avant de passer à la réalisation. Centrer la pièce vis à vis du repère d'origine pour se simplifier la vie.

```mermaid
flowchart LR
  A["Lire le plan"] --> B["Identifier les éléments marquants"]
  B --> C["Associer des fonctions logiciel"]
  C --> D["Concevoir la pièce"]
```

### Et si vous n'avez pas de plan ?

Lors de vos projets, vous aurez besoin de créer vos propres pièces et vous n'aurez en général pas de plan existant. Le workflow reste cependant plus ou moins le même et les réflexes que vous aurez acquis sur les pièces d'entrainement vous serons utiles.

## Cas pratique: exemple de la pièce d'entrainement n°1

### Identification des éléments géométriques

Symétrie, répétition des perçages

{% include plan_card.html
    title="Etape 1 - Première extrusion pour la base"
    image="part1_step1.png"

%}

{% include plan_card.html
    title="Etape 2 - Extrusion de la partie verticale"
    image="part1_step2.png"
    content="On fait une esquisse sur la face gauche avec le profil arrondi et le perçage central que l'on extrude ensuite."
%}

{% include plan_card.html
    title="Etape 3"
    image="part1_step3.png"
%}

{% include plan_card.html
    title="Etape 4"
    image="part1_step4.png"
%}

{% include plan_card.html
    title="Etape 5"
    image="part1_step5.png"
%}

## Faire une mise en plan

{% include plan_card.html
    image="part1_drawing.png"
%}
