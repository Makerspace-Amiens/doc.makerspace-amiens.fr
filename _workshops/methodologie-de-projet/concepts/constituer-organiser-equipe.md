---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Constituer et organiser son équipe
subtitle: Décider qui fait quoi avant que ça devienne un problème
description: Comment répartir les rôles selon les compétences et les envies de l'équipe, et éviter que le projet ne repose que sur une seule personne.
author: Adrien Bracq

todo: 70
---

## Pourquoi ça se décide tôt

La répartition des rôles se fait presque toujours par défaut : "untel s'y
connaît en élec, donc il fait l'élec", sans jamais en discuter ouvertement.
Ça fonctionne parfois, mais ça laisse aussi des trous : personne ne s'occupe
de la documentation, personne ne suit vraiment le planning, ou une seule
personne porte tout le mécanique sans que ce soit un choix assumé par
l'équipe.

En parler explicitement dès la première réunion, en même temps que le
cahier des charges, évite ces trous.

## Répartir selon les compétences, mais aussi les envies

Les deux comptent. Une personne compétente en électronique mais qui n'a
aucune envie de s'en occuper ce semestre fera un travail moins bon qu'une
personne motivée en train d'apprendre.

- **Compétences réelles** : ce que chacun sait déjà faire, pas ce qu'on
  espère apprendre en cours de route (ça rejoint les "contraintes" du
  cahier des charges).
- **Envies** : ce que chacun a envie d'approfondir sur ce projet. Un projet
  étudiant est aussi l'occasion d'apprendre, pas seulement de produire.

## Le risque du silo

{% include message.html title="Une seule personne qui sait" message="Si une seule personne comprend entièrement une brique du projet (le code, le circuit, la CAO...), le projet devient fragile : une absence, une maladie, ou un simple désaccord peut tout bloquer. Ce n'est pas une raison pour tout faire à plusieurs sur tout, mais chaque brique doit avoir un binôme, même informel, capable de prendre le relais." status="is-warning" icon="fas fa-exclamation-triangle" %}

C'est aussi un argument de plus pour [documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/) :
une documentation à jour permet à quelqu'un d'autre de reprendre une brique
même sans avoir travaillé dessus depuis le début.

## Ce qu'il faut décider dès le départ

Un rôle ("responsable") ne veut pas dire "seul autorisé à toucher à ça",
ça veut dire "porte la décision finale et s'assure que ça avance".

| Rôle | Responsable | Backup | Ce qu'il couvre |
|---|---|---|---|
| Mécanique / CAO | ... | ... | Conception, impression, assemblage |
| Électronique | ... | ... | Schéma, câblage, PCB |
| Logiciel / firmware | ... | ... | Code embarqué, tests logiciels |
| Coordination documentation | ... | ... | Cohérence globale du site, structure, relecture finale |
| Coordination / planning | ... | ... | Suivi des délais, animation des réunions |

{% capture snippet_roles %}| Rôle | Responsable | Backup | Ce qu'il couvre |
|---|---|---|---|
| Mécanique / CAO | ... | ... | Conception, impression, assemblage |
| Électronique | ... | ... | Schéma, câblage, PCB |
| Logiciel / firmware | ... | ... | Code embarqué, tests logiciels |
| Coordination documentation | ... | ... | Cohérence globale du site, structure, relecture finale |
| Coordination / planning | ... | ... | Suivi des délais, animation des réunions |{% endcapture %}
{% include code-snippet.html label="Copier le tableau (Markdown)" content=snippet_roles %}

{% include message.html title="La documentation n'est pas un rôle" message="Contrairement aux autres lignes du tableau, « Coordination documentation » ne veut pas dire qu'une seule personne écrit la doc à la place des autres. Chaque membre documente sa propre partie au fil de l'eau, voir [Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/). Le rôle de coordination assure la cohérence d'ensemble et relance ceux qui prennent du retard, il n'écrit pas à leur place." status="is-warning" icon="fas fa-exclamation-triangle" %}

Décidez aussi, en une phrase, **comment trancher en cas de désaccord**
technique (vote, décision du responsable de la brique concernée, arbitrage
par le référent pédagogique...). Un point de blocage non anticipé coûte
souvent plus cher qu'un mauvais choix technique tranché rapidement.

Une fois les rôles décidés, [Gérer son projet avec GitHub](/workshops/methodologie-de-projet/tutorials/gerer-projet-github/)
montre comment transformer cette répartition en tâches suivies (Issues,
Projects), pas juste un tableau statique.

## Exercice

En équipe, maintenant :

1. Remplissez le tableau ci-dessus pour votre projet : un responsable et un
   backup par rôle, pas juste "on verra".
2. Mettez-vous d'accord en une phrase sur la façon de trancher un
   désaccord technique. Écrivez-la dans votre documentation.
