---
layout: documentation
hide_hero: false
hero_image: "placeholder.png"
hero_darken: true
image: "placeholder.png"
component_toc: true
doc_header: true

title: Exemple de Tutoriel
subtitle: Suivez ces étapes pour accomplir votre tâche
description: Ce tutoriel explique les étapes de base pour réaliser une tâche.
author: Votre Nom

manufacturer:
  - name: Manufacturer
    link: "https://example.com/manufacturer"

working_area: 200x200x200mm
materials:
  - name: PLA
    link: "https://example.com/pla"
  - name: PETG
    link: "https://example.com/petg"
file_extensions:
  - name: STL
    link: "https://example.com/pla"
  - name: 3MF
    link: "https://example.com/petg"
  - name: OBJ
    link: "https://example.com/petg"
precision: 0.15mm
speed: 4
access_level: 0

time: 2
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Aucun pré-requis nécessaire
    link: ""

softwares: 
  - label: Aucun logiciel requis
    link: ""

hardwares: 
  - label: Aucune machine requise
    link: ""

responsible:
  - name: "Adrien Bracq"
    link: "mailto:makerspace@unilasalle.fr"
  - name: "Rémi Lacombe"
    link: "mailto:makerspace@unilasalle.fr"

capacity: 8
access_conditions: "Accès libre sur créneaux MakerNight ou sur demande."
safety_rules: "Formation de niveau 1 obligatoire pour l’utilisation des machines."
opening_hours: "Lundi au vendredi – 9h à 18h"

typical_activities:
  - Impression 3D
  - Conception de prototypes
  - Formation des étudiants I2
virtual_tour: "https://makerspace-amiens.fr/tour/printerlab"

todo: 100
---

## Introduction

Bienvenue sur la page de démonstration des fonctionnalités. Ce template propose plusieurs éléments modulaires que vous pouvez facilement intégrer dans vos pages de documentation. Voici quelques exemples des fonctionnalités disponibles.

## 1. Section de Contenu Personnalisée

Vous pouvez également ajouter des sections de contenu personnalisées pour des explications détaillées, des exemples de projets ou des résumés d’instructions.

---

## 2. Messages d'alerte

```liquid
{% raw %}
{% include message.html title="Information" message="Ceci est un message d'information. Utilisez-le pour attirer l'attention de l'utilisateur sur un point important." status="is-info" icon="fas fa-info-circle" %}
{% endraw %}
```

{% include message.html title="Information" message="Ceci est un message d'information. Utilisez-le pour attirer l'attention de l'utilisateur sur un point important." status="is-info" icon="fas fa-info-circle" %}

{% include message.html title="Attention" message="Ceci est un message d'avertissement. Utilisez-le pour signaler un risque ou une précaution." status="is-warning"  icon="fas fa-exclamation-triangle" %}

{% include message.html title="Danger" message="Ceci est un message de danger. Utilisez-le pour avertir l'utilisateur d'un risque majeur." status="is-danger" icon="fas fa-exclamation-triangle" %}

---

## 3. Images en ligne

Vous avez la possibilité d'intégrer des images en ligne. Possible jusqu'à 4 images au choix.

{% include image-row.html
image_1 = "placeholder.png"
image_2 = "placeholder.png"
%}

{% include image-row.html
image_1 = "placeholder.png"
image_2 = "placeholder.png"
image_3 = "placeholder.png"
image_4 = "placeholder.png"
%}

```liquid
{% raw %}{% include image-row.html 
image_1 = "placeholder.png" 
image_2 = "placeholder.png"
%}{% endraw %}
```

---

## 4. Paramètres de la Carte d’En-Tête

Vous pouvez configurer plusieurs paramètres pour personnaliser l’affichage de la carte en haut de chaque page de tutoriel ou documentation. Voici une explication de chaque paramètre disponible :

- **layout** : Définit le type de mise en page. Ici, `documentation` indique une page de type documentation.
- **hide_hero** : Booléen pour afficher ou masquer l’image héro (grande image en en-tête). `true` pour masquer, `false` pour afficher.
- **hero_image** : Chemin de l’image affichée en en-tête.
- **hero_darken** : Assombrit l’image héro pour une meilleure lisibilité du texte. `true` pour activer, `false` pour désactiver.
- **image** : Image utilisée pour la carte en aperçu.
- **component_toc** : Affiche la table des matières. `true` pour l'activer, `false` pour la désactiver.
- **doc_header** : Active l’affichage de l’en-tête de la documentation. `true` pour afficher, `false` pour masquer.
- **type** : Type de contenu, comme `tutorial` ou `documentation`.
- **title** : Titre de la page.
- **subtitle** : Sous-titre pour une description rapide.
- **description** : Brève description de la page pour clarifier son contenu.
- **author** : Nom de l’auteur.

### Paramètres spécifiques aux machines

- **manufacturer** : Informations sur le fabricant de l’équipement, avec `name` pour le nom et `link` pour le lien vers le site du fabricant.
- **working_area** : Taille de la zone de travail de la machine (ex : `200x200x200mm`).
- **materials** : Liste des matériaux compatibles avec la machine, chaque matériau ayant un `name` et un `link`.
- **file_extensions** : Formats de fichiers acceptés par la machine (ex : STL, OBJ).
- **precision** : Précision de la machine, indiquée en millimètres (ex : `0.15mm`).
- **speed** : Vitesse d'opération de la machine, exprimée ici en unité arbitraire (`4`).
- **access_level** : Niveau d’accès requis pour utiliser cette machine (ex : `0` pour accès libre).

### Paramètres liés au tutoriel

- **time** : Temps estimé pour compléter le tutoriel.
- **difficulty** : Niveau de difficulté (1 pour facile, 5 pour expert).
- **compatibilities-os** : Systèmes d’exploitation compatibles (win, mac, lin).
- **prerequisites** : Liste des prérequis avec `label` pour le nom et `link` pour le lien.
- **softwares** : Logiciels requis pour le tutoriel, également définis par `label` et `link`.
- **hardwares** : Machines requis pour le tutoriel, également définis par `label` et `link`.
- **todo** : Indique le pourcentage d'avancement (de 0 à 100) pour une vue d'ensemble rapide de la progression.

Ces paramètres sont flexibles et peuvent être adaptés en fonction des besoins spécifiques de chaque page.

---

## 5. Étapes de Tutoriel

### Exemple d'Étape

{% include step-tuto.html
greyBackground = true
content="Cette étape montre comment présenter une étape dans le tutoriel. Vous pouvez inclure une description ici."
image="placeholder.png" %}

{% include step-tuto.html
greyBackground = true
title = "Titre"
content="Vous pouvez compléter votre étape avec un titre et avec plusieurs images (jusqu'à 4) si vous le souhaitez."
image="placeholder.png"
image_2="placeholder.png"
image_3="placeholder.png"
%}

{% include step-tuto.html
greyBackground = true
content="Vous pouvez également utiliser un gif plutôt qu'une image. Mais ne surchargez pas la page avec des gif lourd. Cela peut-être nocif pour la lisibilité de votre page de documentaiton."
image="placeholder.gif" %}

---

## 6. Intégration de modèles 3D

{% include 3d-model.html model="astronaut.glb" poster="astronaut_poster.webp" fullscreen_modal=true%}

Pour intégrer des modèles 3D dans votre documentation, nous utilisons la librairie [**model-viewer**](https://modelviewer.dev). Celle-ci permet de visualiser des fichiers 3D interactifs directement dans le navigateur. Il est possible de les intégrer de deux manières : en utilisant l’API [**model-viewer**](https://modelviewer.dev/editor/) directement ou en passant par un fichier d’inclusion.

### Méthode 1 : Intégration directe avec model-viewer

Vous pouvez intégrer un modèle 3D en utilisant directement le composant HTML `model-viewer`. Pour cela, vous pouvez directement aller sur l'[editeur de model-viewer](https://modelviewer.dev/editor/), importer votre modèle et personnaliser sa visualisation. Vous pourrez ensuite cliquer sur **Download Scene** afin d'avoir accès aux différents fichiers permettant l'inclusion sur votre page.

### Méthode 2 : Utilisation du fichier d’inclusion

Pour simplifier l’intégration, vous pouvez également utiliser le fichier d’inclusion `3d-model.html`, qui permet d'ajouter un modèle avec ou sans image d’aperçu (poster).

#### Exemple avec un poster

Utilisez cette méthode pour afficher une image de prévisualisation avant de charger le modèle.

```liquid
{% raw %}{% include 3d-model.html model="astronaut.glb" poster="astronaut_poster.webp" fullscreen_modal=true %}{% endraw %}
```

- **model** : Chemin vers le fichier 3D (par exemple, `astronaut.glb`).
- **poster** (optionnel) : Chemin vers une image de prévisualisation (format .webp recommandé pour la rapidité de chargement).

#### Exemple sans poster

Si vous ne souhaitez pas afficher d’image d’aperçu, laissez simplement le paramètre `poster` vide.

```liquid
{% raw %}{% include 3d-model.html model="astronaut.glb" fullscreen_modal=true %}{% endraw %}
```

Cette méthode est utile pour garantir une intégration rapide et simplifiée tout en conservant une présentation visuelle cohérente pour tous les modèles 3D intégrés.

---

## 7. Intégration de PCB - Schémas et board avec Kicanvas

Nous utilisons [**Kicanvas**](https://kicanvas.org) pour intégrer des schémas PCB et des plans de circuits imprimés dans votre documentation.
Kicanvas permet d'embedder des fichiers de projet KiCad (.kicad_sch pour les schémas et .kicad_pcb pour les boards) pour une visualisation interactive directement sur la page.

### Méthode d'intégration directe avec Kicanvas

Utilisez la balise `<kicanvas-embed>` pour intégrer vos fichiers PCB et schémas, en spécifiant le chemin du fichier source.
Vous pouvez ajuster les contrôles selon vos préférences en utilisant l'attribut `controls`.

#### Exemple d'intégration d'un schéma

```html
<kicanvas-embed src="chemin/vers/votre-schema.kicad_sch" controls="basic">
</kicanvas-embed>
```

- **src** : Chemin vers le fichier de schéma (.kicad_sch) ou le board (.kicad_pcb).
- **controls** : Définissez le niveau de contrôle de l'interface (par exemple, `basic` pour des contrôles de base).

<kicanvas-embed src="kicanvas-example.kicad_sch" controls="basic"></kicanvas-embed>

#### Exemple d'intégration d'un board

```html
<kicanvas-embed src="chemin/vers/votre-board.kicad_pcb" controls="advanced">
</kicanvas-embed>
```

- **src** : Chemin vers le fichier de schéma (.kicad_sch) ou le board (.kicad_pcb).
- **controls** : Définissez le niveau de contrôle de l'interface (par exemple, `advanced` pour des contrôles avancés).

<kicanvas-embed src="kicanvas-example.kicad_pcb" controls="advanced"></kicanvas-embed>

### Options de contrôle pour Kicanvas

- **basic** : Inclut les commandes de base pour la visualisation.
- **advanced** : Donne accès à des contrôles avancés pour une exploration détaillée du schéma ou du board.

Cette intégration permet aux utilisateurs d’explorer vos PCB et schémas de manière interactive, facilitant ainsi la compréhension des circuits.

{% include message.html title="Documentation" message="Pour plus d'informations n'hésitez pas à consulter la documentation du module [**Kicanvas**](https://kicanvas.org)." status="is-info" dismissable="false" icon="fas fa-info-circle" %}

### Carte PCB en 3D

Pour la visualisation de la carte en 3D, vous pouvez toujours utiliser le module model-viewer vu ci-dessus.

{% include 3d-model.html model="kicanvas-example.glb" poster="kicanvas-example.webp" %}

---

## 8. Cartes de Collections

Vous pouvez intégrer des cartes de collections en indiquant la collection que vous souhaitez faire apparaitre. Idéal pour renvoyer vos lecteurs vers des tutoriels similaires ou en lien.

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Explorez d'autres tutoriels pour approfondir vos connaissances"
  type="tutorial"
%}

---

## 9. Tabs

{% capture tab1 %}

### Introduction

Bienvenue dans l’onglet d’introduction.
Tu peux utiliser tout le Markdown que tu veux ici.
{% endcapture %}

{% capture tab2 %}

### Détails techniques

- Étape 1
- Étape 2
{% endcapture %}

{% capture tab3 %}

### Galerie

![Image](https://picsum.photos/300)
{% endcapture %}

{% capture tab4 %}
{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Explorez d'autres tutoriels pour approfondir vos connaissances"
  type="tutorial"
%}
{% endcapture %}

{% include content-tabs.html
  id="exemple-tabs"
  tab_title1="Intro"
  tab_title2="Détails"
  tab_title3="Galerie"
  tab_title4="Cards"
  tab1=tab1
  tab2=tab2
  tab3=tab3
  tab4=tab4
%}

```liquid
{% raw %}

{% capture tab1 %}
### Introduction
Bienvenue dans l’onglet d’introduction.
Tu peux utiliser tout le Markdown que tu veux ici.
{% endcapture %}

{% capture tab2 %}
### Détails techniques
- Étape 1
- Étape 2
{% endcapture %}

{% capture tab3 %}
### Galerie
![Image](https://picsum.photos/300)
{% endcapture %}

{% capture tab4 %}
{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Explorez d'autres tutoriels pour approfondir vos connaissances"
  type="tutorial"
%}
{% endcapture %}

{% include content-tabs.html
  id="exemple-tabs"
  tab_title1="Intro"
  tab_title2="Détails"
  tab_title3="Galerie"
  tab_title4="Cards"
  tab1=tab1
  tab2=tab2
  tab3=tab3
  tab4=tab4
%}

{% endraw %}
```

---

## 10. 3D Graph

Le graphe est généré grace à un fichier Yaml stocké dans le dossier `_data` :

```yaml

nodes:
  - id: "MakerSpace"
    url: ""
    group: "Lieu"
    color: "#4fa3ff"          # couleur du texte
    point_color: "#4fa3ff"    # couleur du point
    point_size: 10            # taille du point
    text_size: 2              # taille du texte (nouveau)
    desc: "Espace de prototypage de UniLaSalle Amiens"

  - id: "Concepts"
    url: ""
    point_color: "#ffcc00"
    point_size: 12
    text_size: 2
    desc: "Technologie de fabrication additive"

links:
  - source: "MakerSpace"
    target: "Concepts"
  - source: "MakerSpace"
    target: "Tutoriels"

```

{% include graph3d-base.html
   id="graph-makerspace-2"
   data=site.data.graph_test
   transparent=true
%}

```liquid
{% raw %}

{% include graph3d-base.html 
   id="graph-makerspace-2"
   data=site.data.graph_test
   transparent=true
%}

{% endraw %}
```

Même génération mais sous forme de bandeau avec titre et sous-titre.

{% include graph3d-hero.html
   id="graph-makerspace"
   data=site.data.graph_test
   title="MakerSpace Network"
   subtitle="Découvrez les liens entre nos projets et nos machines"
%}

```liquid
{% raw %}

{% include graph3d-hero.html 
   id="graph-makerspace"
   data=site.data.graph_test
   title="MakerSpace Network"
   subtitle="Découvrez les liens entre nos projets et nos machines"
%}

{% endraw %}
```

---

Vous pouvez inclure également le graph 3D sous forme de bandeau Hero dans une page "default". Spécifier les paramètres suivants :

```markdown
---
title: Fabrication Additive
subtitle: Ressources pour la fabrication additive au MakerSpace - UniLaSalle Amiens
layout: default

hide_content: true

graph3d-hero: true
graph3d-id: graph-makerspace
graph3d-data: graph_test
graph3d-title: MakerSpace Network
graph3d-subtitle: Découvrez les liens entre nos projets et nos machines
---
```

---

## 11. Graphique radar

Pour un profil de compétences ou une auto-évaluation : l'include `graphique.html` avec `type="radar"`. Les branches sont données par `x_valeurs`, chaque profil par `y_valeurs` / `serie` (jusqu'à trois). Toutes les options sont détaillées à la section suivante.

{% include graphique.html type="radar" x_valeurs="CAO,Impression 3D,Électronique,Programmation,Documentation" y_valeurs="80,85,70,75,90" serie="Actuel" y_valeurs2="90,95,85,80,100" serie2="Objectif" titre="Profil maker" hauteur="420" %}

```liquid
{% raw %}{% include graphique.html type="radar" x_valeurs="CAO,Impression 3D,Électronique,Programmation,Documentation" y_valeurs="80,85,70,75,90" serie="Actuel" y_valeurs2="90,95,85,80,100" serie2="Objectif" titre="Profil maker" hauteur="420" %}{% endraw %}
```

## 12. Graphique à partir de données

L'include `graphique.html` trace un graphique avec [Chart.js](https://www.chartjs.org/). Il reprend les paramètres de l'include du même nom dans le template des projets étudiants : un exemple se copie de l'un à l'autre.

### Depuis un fichier CSV

Placez le CSV dans le sous-dossier de la page (comme les images) : une ligne d'en-tête, la première colonne pour l'axe X, une colonne par courbe. Séparateur `,` ou `;` (export tableur français, virgule décimale acceptée). Données d'exemple :

{% include graphique.html csv="decharge-batterie.csv" titre="Décharge de la batterie" y="Tension (V)" %}

```liquid
{% raw %}{% include graphique.html csv="decharge-batterie.csv" titre="Décharge de la batterie" y="Tension (V)" %}{% endraw %}
```

### Avec les données écrites dans la page

Pour quelques points, sans fichier : `x_valeurs` pour l'axe X, puis jusqu'à trois courbes (`y_valeurs` / `serie`, `y_valeurs2` / `serie2`, `y_valeurs3` / `serie3`).

{% include graphique.html type="bar" x_valeurs="Lun,Mar,Mer,Jeu,Ven" y_valeurs="4,7,5,9,6" serie="Impressions 3D" y_valeurs2="2,3,6,4,5" serie2="Découpes laser" titre="Utilisation des machines (exemple)" y="Nombre de travaux" %}

```liquid
{% raw %}{% include graphique.html type="bar" x_valeurs="Lun,Mar,Mer,Jeu,Ven" y_valeurs="4,7,5,9,6" serie="Impressions 3D" y_valeurs2="2,3,6,4,5" serie2="Découpes laser" titre="Utilisation des machines (exemple)" y="Nombre de travaux" %}{% endraw %}
```

Options : `type` (`line` par défaut, `bar`, `scatter`, `radar`), `titre`, `x` et `y` (titres des axes), `hauteur` (en pixels). Le graphique fonctionne aussi dans les slides (`layout: slides`), avec une hauteur fixe de 360 px par défaut.
