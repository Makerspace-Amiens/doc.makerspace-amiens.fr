---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Rendre son projet transmissible
subtitle: Un projet n'est pas fini quand il fonctionne, mais quand quelqu'un d'autre peut le reprendre
description: Les critères concrets qui distinguent un projet qui fonctionne d'un projet réellement transmissible à une prochaine équipe.
author: Adrien Bracq

todo: 70
---

## Un prototype qui fonctionne ne suffit pas

Un projet peut parfaitement fonctionner le jour de la démonstration et
rester, malgré tout, inutilisable par quiconque n'y a pas participé. C'est
le cas le plus fréquent : le code n'est compréhensible que par son auteur,
les fichiers CAO sont éparpillés sans nom clair, et personne ne sait
pourquoi certains choix ont été faits. Rendre un projet transmissible est
un travail à part entière, pas une conséquence automatique du fait qu'il
fonctionne.

## Le test de l'étranger total

{% include message.html title="Un bon test" message="Donnez l'accès à votre repo à quelqu'un qui n'a jamais touché au projet, sans lui parler. Peut-il comprendre en 10 minutes ce que fait le projet, et le refaire fonctionner à partir de votre documentation ? Si la réponse est non, ce n'est pas encore transmissible." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Ce qui rend un projet transmissible

- **Un README clair à la racine du repo** : ce que fait le projet, comment
  le lancer, où trouver la documentation complète.
- **Une documentation à jour**, produite au fil de l'eau plutôt qu'en
  urgence. Voir
  [Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/).
- **Les choix techniques expliqués**, pas seulement le résultat final.
  Voir [Tracer ses choix techniques](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/).
- **Les limites connues, dites honnêtement** : ce qui ne fonctionne pas encore,
  ce qui a été testé mais écarté, ce qu'il faudrait améliorer. Une
  prochaine équipe perd un temps précieux à redécouvrir seule des limites
  que vous connaissiez déjà.
- **Une licence ou une mention de réutilisation**, même simple (ex : "libre
  de réutilisation, merci de citer ce projet") : sans ça, la question se
  pose à chaque fois qu'un projet réutilise le vôtre.

{% capture tab1 %}

**README** : "Projet de robot de tri pour le Forum des Sciences."

**Ce qui manque** : comment le faire fonctionner, où est le code, quelles
sont les limites connues. Une prochaine équipe repart de zéro.

{% endcapture %}

{% capture tab2 %}

**README** : titre, une phrase de description, section "Démarrage rapide"
(comment flasher le code, alimenter le robot), lien vers le site de
documentation complet, section "Limites connues" (précision du tri ~80%,
pas testé sous forte luminosité), lien vers la licence.

**Ce que ça permet** : une prochaine équipe sait en 2 minutes si ce projet
répond à son besoin, et comment le reprendre si oui.

{% endcapture %}

{% include content-tabs.html
  id="readme-transmissible"
  tab_title1="❌ README minimal"
  tab_title2="✅ README transmissible"
  tab1=tab1
  tab2=tab2
%}

## Ça se prépare avant la fin, pas le dernier jour

Comme pour la documentation continue, la transmissibilité n'est pas un
document qu'on écrit en une soirée avant le rendu. Elle découle directement
des bonnes pratiques déjà vues dans cet atelier, appliquées tout du long :
documenter au fil de l'eau, tracer ses choix, tenir un journal de bord. La
seule chose à faire spécifiquement à la fin, c'est une checklist de
vérification, pas une rédaction de zéro.

## Exercice

Sur votre projet, en équipe :

1. Faites le test de l'étranger total : montrez votre repo (README compris)
   à quelqu'un d'extérieur au projet et demandez-lui ce qu'il comprend en
   5 minutes, sans aide.
2. Ajoutez une section "Limites connues" à votre documentation, même si
   le projet n'est pas terminé : trois lignes honnêtes suffisent.
