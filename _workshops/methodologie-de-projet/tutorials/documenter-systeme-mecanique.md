---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Documenter un système mécanique
subtitle: Des plans qu'on peut vraiment réutiliser, pas juste regarder
description: Documenter votre partie mécanique avec des vues claires du modèle, une nomenclature de pièces, et les choix de matériaux et de tolérances.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

prerequisites:
  - label: Un modèle CAO réalisé (Onshape, FreeCAD, SolidWorks...)
    link: /docs/tutorials/software/freecad/freecad-installation/
softwares:
  - label: Un logiciel de CAO
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

{% include message.html title="Le template affiche déjà votre modèle 3D" message="Le template de votre projet fournit un composant prêt à l'emploi qui affiche un modèle 3D manipulable (rotation, zoom) directement dans une page. Ce tutoriel explique où ranger vos fichiers de CAO, comment exporter le modèle et l'afficher, et une méthode de secours par images." status="is-info" icon="fas fa-info-circle" %}

## Ce qu'il faut documenter

Au-delà du modèle 3D lui-même : le matériau choisi et pourquoi, les
tolérances importantes (un jeu trop serré ne s'imprime pas, un jeu trop
large devient instable), et les pièces qui ont demandé plusieurs
itérations. Voir [Prototyper et itérer](/workshops/methodologie-de-projet/concepts/prototyper-iterer/).

## Où ranger les fichiers

Le template sépare les **sources** du projet (dans `project/`) de ce que le
**site affiche** (dans `docs/assets/`) :

| Emplacement | Contenu | Rôle |
|---|---|---|
| `project/mcad/` | `projet.step` (export STEP de l'assemblage complet), lien Onshape, date du dernier export | La version utilisable par tous, sans compte Onshape |
| `project/mcad/3d-print/` | Un fichier `.3mf` par pièce, et le tableau des réglages d'impression | Refaire l'impression |
| `project/mcad/laser-cutting/` | Un fichier `.svg` ou `.dxf` par pièce, et le tableau matériau et épaisseur | Refaire la découpe |
| `docs/assets/models/` | Le modèle `.glb` (moins de **25 Mo**) | Ce que le site affiche |

Deux règles à connaître :

- Pour l'impression 3D, déposez des fichiers **`.3mf`** (ils conservent les
  réglages du slicer). Les `.stl` sont ignorés par le `.gitignore` du
  template : ils n'apparaîtront pas dans GitHub Desktop.
- Si vous n'utilisez pas Onshape (Fusion, SolidWorks, FreeCAD...), déposez
  aussi vos fichiers natifs dans `project/mcad/` **en plus** de l'export STEP :
  contrairement à Onshape, ils ne sont sauvegardés nulle part ailleurs.

## Exporter depuis Onshape

Onshape garde l'historique de votre travail, mais votre repo doit contenir
une version utilisable sans compte Onshape. Dans les deux cas, clic droit sur
l'onglet de l'assemblage puis **Exporter** :

- **Format STEP** : à enregistrer dans `project/mcad/` sous le nom `projet.step`.
- **Format GLB** : à enregistrer dans `docs/assets/models/`.

Réexportez à chaque version importante, et mettez à jour la date du dernier
export dans `project/mcad/README.md`. Avec un autre logiciel, exportez en
STEP, et en glTF/GLB si votre logiciel le permet (sinon, utilisez la méthode
de secours par images plus bas).

## Afficher le modèle 3D

{% capture step_mv_1 %}Le dossier `docs/conception/mecanique/` contient la page d'exemple `boitier.md`. Copiez-la dans le même dossier, nommez la copie d'après votre sous-ensemble (par exemple `pince.md`), puis changez son `title` et son `nav_order`. Son `parent` (« Mécanique ») et son `grand_parent` (« Conception ») restent identiques. Voir [Personnaliser le template de son projet](/workshops/methodologie-de-projet/tutorials/personnaliser-template/) pour le fonctionnement du menu.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 1 : Dupliquer la page d'exemple"
  content=step_mv_1 %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 2 : Copier le modèle GLB"
  content="Copiez votre fichier `.glb` dans `docs/assets/models/`, avec un nom sans espace ni accent (`pince.glb`). Vérifiez qu'il fait moins de **25 Mo** : au-delà, le workflow CI de votre repo signale une erreur." %}

{% capture step_mv_3 %}Dans votre page, remplacez la ligne d'exemple. Le chemin se donne **depuis le dossier `docs/`** :

```liquid
{% raw %}{% include model3d.html src="assets/models/pince.glb" alt="Modèle 3D de la pince" %}{% endraw %}
```

L'option `hauteur="600px"` agrandit la zone d'affichage (400 px par défaut). Le lecteur peut faire tourner et zoomer le modèle à la souris.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 3 : Afficher le modèle"
  content=step_mv_3 %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 4 : Supprimer l'exemple"
  content="Une fois votre modèle affiché, supprimez `Otto.glb` de `docs/assets/models/` (il est aussi utilisé par la page d'accueil : changez-y le nom du fichier avant de le supprimer) et le bloc **À modifier** de votre page." %}

## Les fichiers de fabrication

Chaque pièce à fabriquer a **une ligne** dans le tableau du `README.md` de
son dossier, pour que quelqu'un d'autre puisse la refaire à l'identique.

{% capture snippet_impression %}| Pièce | Fichier | Matériau | Buse | Couche | Remplissage | Supports | Quantité |
|---|---|---|---|---|---|---|---|
| Support moteur | `support-moteur.3mf` | PLA | 0,4 mm | 0,2 mm | 20 % | Non | 2 |{% endcapture %}
{% include code-snippet.html label="Copier le tableau d'impression 3D (Markdown)" content=snippet_impression %}

{% capture snippet_laser %}| Pièce | Fichier | Matériau | Épaisseur | Quantité |
|---|---|---|---|---|
| Boîtier | `boitier.svg` | Contreplaqué peuplier | 3 mm | 1 |{% endcapture %}
{% include code-snippet.html label="Copier le tableau de découpe laser (Markdown)" content=snippet_laser %}

Sur la page de documentation de votre sous-ensemble, la rubrique
**Fabrication** renvoie vers ces deux dossiers (le template le fait déjà
dans `boitier.md`).

## La nomenclature des pièces

Sur la page du sous-ensemble, une nomenclature de synthèse regroupe **toutes**
les pièces, quel que soit le procédé (imprimées, découpées, achetées) :

{% capture snippet_nomenclature %}| Pièce | Matériau | Quantité | Procédé | Remarque |
|---|---|---|---|---|
| Support capteur | PLA | 1 | Impression 3D | Tolérance +0.2mm sur le logement |
| Axe de rotation | Acier inox | 1 | Achat commerce | Diamètre 6mm |
| Châssis | Contreplaqué 5mm | 1 | Découpe laser | ... |{% endcapture %}
{% include code-snippet.html label="Copier le gabarit de nomenclature (Markdown)" content=snippet_nomenclature %}

## Méthode de secours : exporter une image

Pour une figure figée (vue éclatée pour un poster, par exemple), ou si votre
logiciel n'exporte pas en GLB, exportez une image. C'est la méthode qui
marche toujours, sans rien installer de plus.

{% include step-tuto.html
  greyBackground=true
  title="Étape 1 : Cadrer la vue"
  content="Dans votre logiciel de CAO, positionnez la vue 3D comme vous voulez qu'elle apparaisse dans la documentation (orientation, zoom). Sous FreeCAD, utilisez les vues prédéfinies (isométrique, face, dessus...) accessibles dans le menu **Affichage** pour un cadrage propre et reproductible." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 2 : Exporter en image"
  content="**Sous FreeCAD** : menu **Outils > Enregistrer une image...** (*Tools > Save picture...*). Choisissez un nom de fichier, un format (PNG), et éventuellement une taille standard dans la liste déroulante, puis **Enregistrer**.

**Sous OnShape** : clic droit sur la vue 3D, **Enregistrer sous forme d'image**, ou utilisez la fonction de capture native du logiciel.

**Sous SolidWorks** : **Fichier > Enregistrer sous**, choisissez un format image (PNG, JPEG)." %}

{% capture step_img_3 %}Copiez l'image dans `docs/assets/images/` (moins de **2 Mo**), puis dans votre page (ici une page à deux niveaux de dossier, comme `docs/conception/mecanique/pince.md`) :

```markdown
![Vue du châssis](../../assets/images/chassis.png)
```

Le nombre de `../` dépend de la profondeur de la page. Répétez l'opération pour chaque pièce ou vue importante (vue éclatée, détail d'un assemblage).{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 3 : Intégrer l'image dans votre page"
  content=step_img_3 %}

## Photos de l'assemblage réel

Comme pour l'électronique, le modèle CAO montre l'intention ; une photo
montre ce qui a vraiment été assemblé, avec les ajustements faits en
cours de route. Placez-les dans `docs/assets/images/`.

## Exercice

Exportez votre assemblage en STEP (dans `project/mcad/`) et en GLB (dans
`docs/assets/models/`), affichez le modèle sur la page de votre
sous-ensemble, remplissez les tableaux de fabrication de `project/mcad/` et
la nomenclature de votre page avec vos pièces réelles (matériau, procédé,
tolérances importantes).
