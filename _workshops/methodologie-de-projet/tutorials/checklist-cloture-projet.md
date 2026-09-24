---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Checklist de clôture de projet
subtitle: Le dernier passage, pas la première rédaction
description: Une liste de vérification à parcourir avant le rendu final, pour s'assurer que tout ce qui a été fait au fil de l'atelier est bien en place.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 55

prerequisites:
  - label: Être proche de la fin du projet
    link: ""
softwares:
  - label: Aucun logiciel requis
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Ce que cette checklist n'est pas

Ce n'est pas le moment de commencer à documenter : si vous avez suivi
[Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/)
tout au long du projet, il s'agit ici de **relire et vérifier**, pas de
rédiger depuis rien. Prévoyez ce passage dans votre planning avec de la
marge. Voir [Gérer le temps et les jalons](/workshops/methodologie-de-projet/concepts/gerer-temps-jalons/).

## La checklist

### Cadrage et méthode

- [ ] Le cahier des charges (`docs/objectifs.md`) reflète le projet final,
      pas seulement l'intention de départ. Voir
      [Définir son besoin](/workshops/methodologie-de-projet/concepts/definir-son-besoin/).
- [ ] Les choix techniques importants sont tracés avec leur raison
      (`docs/etudes.md`) :
      [Tracer ses choix techniques](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/).
- [ ] La page Équipe (`docs/equipe.md`) est à jour : membres, rôles,
      fonctionnement.
- [ ] Le journal de bord (`docs/journal/`) couvre l'ensemble du projet, pour
      **chaque** membre, pas juste les premières semaines.

### Documentation de chaque brique

- [ ] Carte(s) électronique(s) : schéma et PCB affichés (fichiers à jour dans
      `docs/assets/kicad/`), nomenclature, photos du montage réel, sources
      dans `project/ecad/`.
- [ ] Système(s) mécanique(s) : modèle 3D affiché, nomenclature, matériaux ;
      export `projet.step` et fichiers de fabrication à jour dans
      `project/mcad/`.
- [ ] Code/firmware : commentaires utiles, page d'architecture
      (`docs/conception/firmware.md`) et README de `project/firmware/`.
- [ ] Guide de montage (`docs/fabrication/`) testé par quelqu'un d'extérieur
      au projet.
- [ ] Résultats de tests (`docs/tests.md`) présentés avec des mesures
      réelles, échecs inclus.

### Transmissibilité

- [ ] Le README répond à : c'est quoi, où trouver plus de détails, quelles
      limites, qui a fait le projet. Voir
      [Rendre son projet transmissible](/workshops/methodologie-de-projet/concepts/rendre-projet-transmissible/).
- [ ] Une licence est choisie et présente (`LICENSE` à la racine). Voir
      [Comprendre la propriété intellectuelle de son projet](/docs/how-to-guides/propriete-intellectuelle-projet/).
- [ ] Le "test de l'étranger total" a été fait : quelqu'un d'extérieur
      comprend le projet en quelques minutes, rien qu'avec la doc.
- [ ] Les limites connues sont dites honnêtement, pas cachées.

### Présentation

- [ ] Poster prêt (`docs/assets/images/poster.jpg`), lisible en quelques
      secondes.
- [ ] Vidéo de présentation prête, dans le format attendu (1 min 30, vertical,
      moins de 25 Mo).

### Nettoyage du template

- [ ] Le résumé du workflow **CI** (onglet **Actions**) indique
      **0 bloc du template restant** : plus aucun « À modifier » ni
      « À supprimer ». Voir
      [Personnaliser le template de son projet](/workshops/methodologie-de-projet/tutorials/personnaliser-template/).
- [ ] `docs/_config.yml` est renseigné : `title`, `description` et
      `gh_edit_repository` (adresse de **votre** repo).
- [ ] Les fichiers d'exemple du template sont supprimés : modèle `Otto.glb`,
      fichiers `Otto-ESP32-XIAO-REFEREE`, séance d'exemple du journal,
      pages d'exemple non utilisées.
- [ ] Les `README.md` du dossier `project/` sont complétés, et les dossiers
      qui ne concernent pas votre projet sont supprimés.
- [ ] Le workflow **CI** est vert (aucun fichier de plus de 25 Mo, aucune
      image de plus de 2 Mo) et le site publié s'affiche sans erreur.

{% include message.html title="Cochez avec l'équipe, pas seul" message="Faites cette relecture à plusieurs. Une personne seule ne remarque pas ce qui lui semble évident : c'est justement ce qui manque le plus souvent à un lecteur extérieur." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Le gabarit à copier

{% capture snippet_checklist %}## Checklist de clôture

### Cadrage et méthode

- [ ] Cahier des charges à jour
- [ ] Choix techniques tracés
- [ ] Page Équipe à jour
- [ ] Journal de bord complet, pour chaque membre

### Documentation des briques

- [ ] Électronique
- [ ] Mécanique
- [ ] Code/firmware
- [ ] Guide de montage testé
- [ ] Résultats de tests

### Transmissibilité

- [ ] README complet
- [ ] Licence choisie
- [ ] Test de l'étranger total fait
- [ ] Limites connues documentées

### Présentation

- [ ] Poster prêt
- [ ] Vidéo prête

### Nettoyage du template

- [ ] 0 bloc « À modifier » / « À supprimer » restant (résumé de la CI)
- [ ] `docs/_config.yml` renseigné
- [ ] Fichiers d'exemple supprimés
- [ ] README du dossier `project/` complétés
- [ ] CI verte, site publié sans erreur
{% endcapture %}
{% include code-snippet.html label="Copier la checklist (Markdown)" content=snippet_checklist %}

## Exercice

Copiez cette checklist dans un fichier de votre documentation, parcourez-la
en équipe, et pour chaque case non cochée, décidez qui s'en charge et
avant quelle date.
