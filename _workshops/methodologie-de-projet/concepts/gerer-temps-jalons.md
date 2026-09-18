---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Gérer le temps et les jalons
subtitle: Le temps d'un projet physique ne se compresse pas en travaillant plus fort
description: Anticiper les délais externes qui ne dépendent pas de vous, découper le projet en jalons vérifiables, et garder une marge de sécurité.
author: Adrien Bracq

todo: 70
---

## Le temps d'un projet physique est différent

Sur un projet purement logiciel, travailler plus fort ou plus longtemps
compresse en général le temps nécessaire. Sur un projet avec du matériel,
ce n'est plus vrai : une pièce imprimée en 3D prend le temps qu'elle prend,
une commande de composant met le temps qu'elle met à arriver, une carte
électronique fabriquée à l'extérieur revient sous un délai fixe. Aucune
énergie supplémentaire n'accélère ça.

{% include message.html title="Le vrai risque planning" message="Ce n'est presque jamais le travail de l'équipe qui fait déraper un planning de projet maker. C'est un délai externe identifié trop tard : un composant en rupture de stock découvert en semaine 6, alors qu'il fallait le commander en semaine 1." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Identifier les délais externes dès le départ

Dès le cahier des charges rédigé, listez tout ce qui dépend d'un tiers et
ne dépend pas de votre rythme de travail :

- livraison de composants ou de matériaux,
- créneaux d'impression 3D ou de découpe laser au MakerSpace (souvent
  partagés avec d'autres projets),
- fabrication de circuits imprimés à l'extérieur (souvent 1-2 semaines),
- disponibilité d'une machine ou d'un encadrant pour une formation
  préalable.

Commandez ou réservez ces éléments **le plus tôt possible**, même si le
reste du projet n'est pas encore prêt à les recevoir.

## Découper en jalons vérifiables

Un jalon n'est utile que s'il permet de dire, sans ambiguïté, s'il est
atteint ou non. "Bien avancé sur l'électronique" n'est pas un jalon.
"Le circuit s'alimente et le microcontrôleur répond sur le port série" en
est un.

| Semaine | Jalon | Vérifiable par |
|---|---|---|
| 1 | Cahier des charges validé par l'équipe | Document rempli et relu à voix haute |
| 2 | Recherche de l'existant faite, composants critiques commandés | Tableau comparatif rempli, commandes passées |
| 4 | Premier prototype qui trie au moins 1 catégorie | Test filmé, même imparfait |
| 6 | Robot trie les 3 catégories, taux ≥ 80 % sur 20 essais | Mesure réelle, notée dans le journal |
| 7 | Documentation à jour, poster préparé | Relecture croisée par un autre membre |
| 8 | Démonstration au Forum des Sciences | Le jour J |

{% capture snippet_jalons %}| Semaine | Jalon | Vérifiable par |
|---|---|---|
| ... | ... | ... |
| ... | ... | ... |{% endcapture %}
{% include code-snippet.html label="Copier le tableau (Markdown)" content=snippet_jalons %}

Ces jalons reprennent directement les critères de réussite du cahier des
charges : ce ne sont pas des dates inventées, ce sont les mêmes seuils,
placés dans le temps.

## Un planning simple suffit

Pas besoin d'un diagramme de Gantt détaillé pour un projet de quelques
semaines : un tableau comme celui ci-dessus, ou les jalons (*milestones*)
de GitHub Projects, suffisent largement. L'important n'est pas l'outil,
c'est que les jalons soient écrits, datés, et vérifiables.

## Garder une marge de sécurité

Ne planifiez jamais votre dernier jalon technique le jour même de la
deadline. Une marge d'au moins une semaine avant le rendu final absorbe les
imprévus quasi certains : un composant qui arrive en retard, un bug de
dernière minute, une pièce à réimprimer. Sans cette marge, le moindre
imprévu devient une crise.

## Exercice

En équipe, sur votre projet :

1. Listez tous les délais externes qui vous concernent (commandes,
   impression, fabrication) et leurs délais estimés. Commandez/réservez
   dès aujourd'hui ce qui peut l'être.
2. Construisez un tableau de jalons comme celui ci-dessus, avec vos propres
   dates, en partant de vos critères de réussite du cahier des charges.
3. Vérifiez qu'il reste au moins une semaine de marge entre votre dernier
   jalon technique et la deadline finale.
