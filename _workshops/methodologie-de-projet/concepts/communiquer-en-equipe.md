---
layout: documentation
hide_hero: false
hero_image: hero.jpg
hero_darken: true
image: hero.jpg
component_toc: true
doc_header: true

title: Communiquer en équipe
subtitle: Un outil de projet, pas juste "bien s'entendre"
description: Mettre en place des points de synchro réguliers et s'assurer que ce qui se décide à l'oral finit par écrit, pour éviter les blocages silencieux.
author: Adrien Bracq

todo: 70
---

## Un outil, pas une qualité humaine

Bien communiquer en équipe n'est pas une question de bonne entente : une
équipe qui s'entend très bien peut quand même avancer en silos parce que
personne ne prend le temps de dire où il en est. C'est un ensemble de
pratiques concrètes à mettre en place, comme n'importe quel autre outil de
projet.

## Des points de synchro réguliers, courts

Un point d'équipe de 15 minutes chaque semaine, avec un format simple,
vaut mieux qu'une réunion de deux heures une fois par mois :

- Qu'est-ce que j'ai fait depuis la dernière fois ?
- Qu'est-ce qui me bloque, si quelque chose me bloque ?
- Qu'est-ce que je fais ensuite ?

{% capture tab1 %}

**Communication du blocage** : "ça avance pas trop bien sur la partie
moteur."

**Ce qui manque** : personne ne sait s'il faut s'inquiéter, aider, ou
attendre. Le blocage traîne encore une semaine avant que quelqu'un
comprenne vraiment le problème.

{% endcapture %}

{% capture tab2 %}

**Communication du blocage** : "Le moteur pas à pas ne tourne pas, le
driver A4988 chauffe anormalement au bout de 10 secondes. J'ai vérifié le
câblage deux fois, ça vient peut-être du réglage de courant. J'ai besoin
d'un avis demain matin avant de continuer."

**Ce que ça permet** : n'importe qui dans l'équipe (ou l'encadrant) peut
aider immédiatement, ou au moins savoir que c'est du sérieux.

{% endcapture %}

{% include content-tabs.html
  id="communiquer-blocage"
  tab_title1="❌ Vague"
  tab_title2="✅ Précis"
  tab1=tab1
  tab2=tab2
%}

## Ce qui se décide à l'oral doit finir par écrit

Une décision prise en réunion et jamais notée n'existe plus dès que
quelqu'un l'oublie ou s'en souvient différemment. Le réflexe : à la fin de
chaque point de synchro, une personne note en 2-3 lignes ce qui a été
décidé, dans le [journal de bord](/workshops/methodologie-de-projet/tutorials/journal-de-bord/) :
c'est une application directe de
[documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/).

{% include message.html title="Pas besoin d'un compte-rendu formel" message="2-3 lignes suffisent : qui a décidé quoi, et pourquoi. L'objectif est que quelqu'un d'absent à la réunion puisse comprendre la décision en 30 secondes, pas de produire un procès-verbal." status="is-info" icon="fas fa-info-circle" %}

## Communiquer avec l'extérieur

Le référent pédagogique, le jury, ou toute personne extérieure au projet
doit pouvoir comprendre où vous en êtes sans relire tout l'historique.
Deux réflexes utiles :

- Faire un point régulier avec le référent, pas seulement au rendu final :
  ça permet de corriger le tir tôt si quelque chose s'écarte du besoin.
- Savoir résumer l'état du projet en 30 secondes à n'importe quel moment :
  où on en est, ce qui fonctionne, ce qui bloque.

## Exercice

En équipe, maintenant :

1. Fixez un jour et une heure récurrents pour votre point de synchro
   hebdomadaire. Notez-le quelque part où toute l'équipe le voit.
2. À la fin de votre prochain point, désignez qui note les décisions dans
   le journal de bord, et faites-le vraiment, pas "on s'en souviendra".

---

*Crédit photo : « Group of diverse young students collaborating on a project with a laptop in a modern office » par Giuseppe Lombardo, via [Noun Project](https://thenounproject.com/photo/group-of-diverse-young-students-collaborating-on-a-project-with-a-laptop-in-a-modern-office-5ljgjo/), sous licence [CC BY-NC-ND 2.0](https://creativecommons.org/licenses/by-nc-nd/2.0/).*
{: .is-size-7 .has-text-grey }
