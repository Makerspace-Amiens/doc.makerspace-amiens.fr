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
  - label: Un modèle CAO réalisé (FreeCAD, OnShape, SolidWorks...)
    link: /docs/tutorials/software/freecad/freecad-installation/
softwares:
  - label: Un logiciel de CAO
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

{% include message.html title="Le site de votre projet n'est pas ce site-ci" message="Votre repo de projet utilise le thème Just the Docs, pas le thème de ce site de documentation MakerSpace. Certaines fonctionnalités visibles ici (visionneuse 3D interactive) ne sont pas disponibles chez vous par défaut. Ce tutoriel explique la méthode qui fonctionne toujours (des images), et une méthode plus avancée en option." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Ce qu'il faut documenter

Au-delà du modèle 3D lui-même : le matériau choisi et pourquoi, les
tolérances importantes (un jeu trop serré ne s'imprime pas, un jeu trop
large devient instable), et les pièces qui ont demandé plusieurs
itérations, voir [Prototyper et itérer](/workshops/methodologie-de-projet/concepts/prototyper-iterer/).

## Méthode simple : exporter une image de votre modèle

C'est la méthode qui marche toujours, sans rien installer de plus.

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

{% include step-tuto.html
  greyBackground=true
  title="Étape 3 : Intégrer l'image dans votre page"
  content="Copiez l'image dans le dossier de votre page `docs/` (par exemple `docs/images/`), puis dans votre fichier Markdown :

```markdown
![Vue du châssis](images/chassis.png)
```

Répétez l'opération pour chaque pièce ou vue importante (vue éclatée, détail d'un assemblage)." %}

## Pour aller plus loin : modèle 3D interactif (optionnel, plus avancé)

{% include message.html title="Réservé à ceux qui veulent creuser" message="Cette section demande de modifier un fichier de configuration de votre site (_includes/head_custom.html), pas obligatoire, une image suffit largement pour la plupart des projets." status="is-info" icon="fas fa-info-circle" %}

Le composant `<model-viewer>` (développé par Google) permet d'afficher un
modèle 3D manipulable (rotation, zoom) directement dans une page web,
sans rien télécharger : un simple lien vers un fichier hébergé en ligne.

{% capture step_mv_1 %}Créez le fichier `docs/_includes/head_custom.html` (créez le dossier `_includes` s'il n'existe pas encore) avec ce contenu :

```html
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
```

Just the Docs charge automatiquement ce fichier sur chaque page : c'est le point d'extension officiel du thème pour ajouter du script.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 1 : Activer le script sur toutes les pages"
  content=step_mv_1 %}

{% capture step_mv_2 %}Exportez votre assemblage au format `.glb` depuis votre logiciel de CAO (FreeCAD : `Fichier > Exporter`, format glTF ; OnShape : export direct en glTF depuis le menu contextuel du document). Copiez le fichier dans le dossier de votre page, puis :

```html
<model-viewer src="assemblage.glb" alt="Mon assemblage" camera-controls auto-rotate style="width: 100%; height: 400px;"></model-viewer>
```{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 2 : Utiliser la balise dans vos pages"
  content=step_mv_2 %}

## La nomenclature des pièces

{% capture snippet_nomenclature %}| Pièce | Matériau | Quantité | Procédé | Remarque |
|---|---|---|---|---|
| Support capteur | PLA | 1 | Impression 3D | Tolérance +0.2mm sur le logement |
| Axe de rotation | Acier inox | 1 | Achat commerce | Diamètre 6mm |
| Châssis | Contreplaqué 5mm | 1 | Découpe laser | ... |{% endcapture %}
{% include code-snippet.html label="Copier le gabarit de nomenclature (Markdown)" content=snippet_nomenclature %}

## Photos de l'assemblage réel

Comme pour l'électronique, le modèle CAO montre l'intention, une photo
montre ce qui a vraiment été assemblé, avec les ajustements faits en
cours de route.

## Exercice

Exportez une image de votre modèle et intégrez-la dans votre page,
remplissez une nomenclature avec vos pièces réelles (matériau, procédé,
tolérances importantes).
