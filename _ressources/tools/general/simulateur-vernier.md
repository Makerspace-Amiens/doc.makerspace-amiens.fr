---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Simulateur de lecture au vernier
subtitle: Comprendre et s'entraîner à lire un pied à coulisse à vernier
description: Outil interactif pour visualiser comment fonctionne un vernier de pied à coulisse (1/10 mm) et s'entraîner à lire une mesure.
author: Adrien Bracq

todo: 20
---

## 1. Pourquoi un vernier

Un pied à coulisse à vernier permet de lire une cote au dixième de millimètre sans afficheur digital, grâce à une seconde graduation mobile (le **vernier**) placée à côté de la règle fixe. Comprendre comment ces deux graduations s'articulent est plus facile à voir qu'à expliquer : c'est l'objet de cet outil.

Le principe : le vernier comporte 10 divisions qui couvrent 9 mm de la règle fixe, donc chaque division du vernier vaut 0,9 mm, 0,1 mm de moins qu'une division de la règle. C'est ce léger décalage qui fait qu'une seule ligne du vernier s'aligne exactement avec une ligne de la règle fixe à chaque position, et c'est cette ligne qui donne le chiffre après la virgule.

## 2. Simulateur

Faites glisser le vernier directement sur le dessin (ou utilisez le curseur et les boutons) pour voir la lecture se mettre à jour. Passez en mode **Entraînement** pour vous tester : une mesure aléatoire est réglée, à vous de la lire avant de vérifier.

{% include vernier-caliper-trainer.html %}

## 3. Comment lire

1. Repérez où se trouve le **zéro du vernier** par rapport à la règle fixe : le nombre de millimètres entiers juste avant lui est la première partie de la mesure.
2. Cherchez, parmi les graduations du vernier, celle qui est le mieux alignée avec une graduation de la règle fixe.
3. Le numéro de cette graduation (0 à 9) donne le chiffre des dixièmes.

La [pièce de test de l'atelier Métrologie](/workshops/metrologie/) (trou et plot de Ø10 mm) est un bon premier exercice : réglez le simulateur sur 10,00 mm pour voir à quoi ressemble cette cote sur un vernier.

## Liens utiles

- [Utiliser un pied à coulisse](/workshops/metrologie/tutorials/pied-a-coulisse/)
- [Précision, justesse et bonnes pratiques de mesure](/docs/concepts/precision-justesse-mesure/)
