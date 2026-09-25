---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true
type: concept

title: Pourquoi une pièce fabriquée n'est jamais exactement à la cote
subtitle: Retrait, jeu de coupe et autres écarts entre le fichier et la pièce réelle
description: Comprendre pourquoi une pièce imprimée en 3D ou découpée au laser ne sort jamais exactement aux cotes du fichier de conception, et comment mesurer cet écart.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: "Précision, justesse et bonnes pratiques de mesure"
    link: /docs/concepts/precision-justesse-mesure/
---

## Introduction

Un fichier de conception (CAO) décrit une géométrie parfaite : un trou de Ø10 mm y fait exactement Ø10,000... mm. La pièce physique, elle, ne sera jamais exactement à cette cote : chaque procédé de fabrication introduit un écart, souvent faible mais systématique. Ce concept explique d'où viennent ces écarts pour l'impression 3D et la découpe laser, les deux procédés utilisés dans l'atelier [Métrologie](/workshops/metrologie/), et pose la question à laquelle répondent les guides pratiques de cet atelier : comment les mesurer et en tenir compte.

## Retrait et sur-largeur en impression 3D (FDM)

En impression FDM, le plastique fondu se contracte légèrement en refroidissant (retrait, ou *shrinkage*), de l'ordre de quelques dixièmes de pourcent pour le PLA, un peu plus pour l'ABS. À cela s'ajoute un effet lié à la façon dont l'imprimante trace les contours : le filament extrudé a une largeur non nulle, tracée le long du contour de la pièce.

Résultat, un phénomène connu et assez systématique :

| Élément de la pièce | Tendance |
|---|---|
| Trou (contour intérieur) | Légèrement **plus petit** que la cote du fichier |
| Plot / téton (contour extérieur) | Légèrement **plus grand** que la cote du fichier |

C'est pour cette raison qu'un axe de Ø10 mm imprimé peut ne pas rentrer dans un trou de Ø10 mm imprimé sur la même imprimante, alors que les deux sont censés faire la même cote dans le fichier.

## Jeu de coupe (kerf) en découpe laser

Le faisceau laser n'est pas infiniment fin : il retire une bande de matière d'une largeur non nulle, appelée **jeu de coupe** ou *kerf* (typiquement 0,1 à 0,3 mm selon la puissance, la vitesse et le matériau). La découpeuse suit le tracé vectoriel du fichier avec le **centre** du faisceau : la matière est donc retirée de part et d'autre de la ligne tracée.

Conséquence, exactement à l'inverse de l'impression 3D :

| Élément de la pièce | Tendance |
|---|---|
| Trou (contour intérieur) | Légèrement **plus grand** que la cote du fichier |
| Languette / bord extérieur (contour extérieur) | Légèrement **plus petit** que la cote du fichier |

{% include message.html title="À retenir" message="L'écart va dans le sens opposé selon le procédé : l'impression 3D a tendance à réduire les trous et agrandir les pleins, la découpe laser fait l'inverse. Un même gabarit imprimé puis découpé au laser ne s'écarte donc pas de la même façon." status="is-warning" icon="fas fa-triangle-exclamation" %}

## Comment en tenir compte

Deux leviers, complémentaires :

1. **Mesurer** la pièce réelle pour quantifier l'écart (voir [Précision, justesse et bonnes pratiques de mesure](/docs/concepts/precision-justesse-mesure/)) : sans mesure, on ne sait pas si l'écart existe ni dans quel sens il joue.
2. **Compenser**, une fois l'écart connu : ajuster la cote dans le fichier de conception (agrandir légèrement un trou destiné à recevoir un axe, par exemple), ou utiliser un réglage de compensation de jeu de coupe directement dans le logiciel de découpe laser.

## Exemples concrets

Sur le [gabarit de contrôle](/workshops/metrologie/) de cet atelier, le même trou Ø10 mm mesure généralement un peu moins de 10 mm une fois imprimé en PLA, et un peu plus de 10 mm une fois découpé dans une plaque de 3 mm au laser. C'est exactement ce que prédit ce concept, et exactement ce que les guides pratiques suivants vous apprennent à vérifier puis à corriger.

## Pour aller plus loin

- [Vérifier la précision dimensionnelle d'une pièce imprimée en 3D](/docs/how-to-guides/controle-dimensionnel-impression-3d/)
- [Compenser le jeu de coupe d'une découpe laser](/docs/how-to-guides/compenser-jeu-coupe-laser/)
