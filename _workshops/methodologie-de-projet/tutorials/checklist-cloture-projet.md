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
marge, voir [Gérer le temps et les jalons](/workshops/methodologie-de-projet/concepts/gerer-temps-jalons/).

## La checklist

### Cadrage et méthode

- [ ] Le cahier des charges (`docs/objectifs.md`) reflète le projet final,
      pas seulement l'intention de départ, voir
      [Définir son besoin](/workshops/methodologie-de-projet/concepts/definir-son-besoin/).
- [ ] Les choix techniques importants sont tracés avec leur raison,
      [Tracer ses choix techniques](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/).
- [ ] Le journal de bord couvre l'ensemble du projet, pas juste les
      premières semaines.

### Documentation de chaque brique

- [ ] Carte(s) électronique(s) : schéma intégré, nomenclature, photos du
      montage réel.
- [ ] Système(s) mécanique(s) : modèle 3D intégré, nomenclature, matériaux.
- [ ] Code/firmware : commentaires utiles, page d'architecture.
- [ ] Guide de montage testé par quelqu'un d'extérieur au projet.
- [ ] Résultats de tests présentés avec des mesures réelles, échecs inclus.

### Transmissibilité

- [ ] Le README répond à : c'est quoi, comment le lancer, où trouver plus
      de détails, quelles limites, voir
      [Rendre son projet transmissible](/workshops/methodologie-de-projet/concepts/rendre-projet-transmissible/).
- [ ] Une licence est choisie et présente (`LICENSE` à la racine), voir
      [Comprendre la propriété intellectuelle de son projet](/docs/how-to-guides/propriete-intellectuelle-projet/).
- [ ] Le "test de l'étranger total" a été fait : quelqu'un d'extérieur
      comprend le projet en quelques minutes, rien qu'avec la doc.
- [ ] Les limites connues sont dites honnêtement, pas cachées.

### Présentation

- [ ] Poster prêt, lisible en quelques secondes.
- [ ] Vidéo de présentation prête, dans le format attendu.

{% include message.html title="Cochez avec l'équipe, pas seul" message="Faites cette relecture à plusieurs. Une personne seule ne remarque pas ce qui lui semble évident : c'est justement ce qui manque le plus souvent à un lecteur extérieur." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Le gabarit à copier

{% capture snippet_checklist %}## Checklist de clôture

### Cadrage et méthode

- [ ] Cahier des charges à jour
- [ ] Choix techniques tracés
- [ ] Journal de bord complet

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
{% endcapture %}
{% include code-snippet.html label="Copier la checklist (Markdown)" content=snippet_checklist %}

## Exercice

Copiez cette checklist dans un fichier de votre documentation, parcourez-la
en équipe, et pour chaque case non cochée, décidez qui s'en charge et
avant quelle date.
