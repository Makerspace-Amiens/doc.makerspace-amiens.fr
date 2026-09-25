---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true
type: concept

title: Précision, justesse et bonnes pratiques de mesure
subtitle: Pourquoi deux personnes ne mesurent jamais exactement la même chose
description: Comprendre la différence entre précision et justesse, identifier les erreurs de mesure les plus courantes, et adopter les bons gestes avant d'utiliser un instrument.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: Aucun pré-requis nécessaire
    link: ""
---

## Introduction

Mesurer semble une évidence : on pose un pied à coulisse sur une pièce, on lit un chiffre. Pourtant, deux personnes qui mesurent la même pièce avec le même instrument obtiennent rarement exactement le même résultat. Comprendre pourquoi (et savoir limiter ces écarts) est le premier réflexe à avoir avant d'utiliser n'importe quel instrument de mesure.

Ce concept pose les bases utilisées dans tout l'atelier [Métrologie](/workshops/metrologie/) : elles s'appliquent aussi bien au pied à coulisse qu'au rapporteur d'angle ou au réglet.

## Précision vs justesse

Ce sont deux notions différentes, souvent confondues :

- **Justesse** : la mesure est-elle proche de la valeur réelle de la pièce ?
- **Précision** : si on répète la mesure plusieurs fois, obtient-on des résultats proches les uns des autres ?

| Situation | Juste | Précis |
|---|---|---|
| Mesures groupées, proches de la valeur réelle | Oui | Oui |
| Mesures groupées, mais décalées de la valeur réelle (instrument mal réglé) | Non | Oui |
| Mesures dispersées, centrées en moyenne sur la valeur réelle | Oui | Non |
| Mesures dispersées et décalées | Non | Non |

Un instrument peut donc être très précis (résultats répétables) sans être juste, par exemple si son zéro n'est pas correctement réglé. C'est pour ça qu'on vérifie toujours le zéro avant de mesurer, plutôt que de faire confiance à l'affichage.

## Sources d'erreur courantes

- **Erreur de parallaxe** : lire une graduation en biais plutôt que perpendiculairement à l'œil fausse la lecture ; vaut surtout pour le réglet et les instruments à vernier.
- **Zéro mal réglé** : sur un pied à coulisse digital ou un comparateur, un zéro décalé décale toutes les mesures suivantes de la même valeur.
- **Effort de serrage variable** : serrer trop fort un pied à coulisse déforme légèrement une pièce souple (plastique imprimé) ou fausse la lecture ; ne pas serrer assez laisse un jeu.
- **Mauvaise surface de contact** : bavures d'impression, poussière ou copeaux entre le bec de l'instrument et la pièce.
- **Mesure oblique** : mesurer un diamètre ou une épaisseur en biais donne toujours une valeur supérieure à la vraie cote.
- **Température** : les matériaux se dilatent légèrement avec la chaleur, négligeable sur du plastique à l'échelle du MakerSpace, mais bon réflexe à connaître.

## Bonnes pratiques

{% include message.html title="Avant de mesurer" message="Vérifier le zéro de l'instrument, nettoyer becs et pièce, et s'assurer que rien ne gêne le contact." status="is-info" icon="fas fa-circle-info" %}

- Toujours vérifier le zéro de l'instrument avant de commencer une série de mesures.
- Nettoyer les becs de l'instrument et la surface de la pièce (poussière, bavures d'impression, copeaux).
- Mesurer perpendiculairement à la cote recherchée, jamais en biais.
- Laisser l'instrument « sentir » la pièce plutôt que de forcer le serrage.
- Répéter la mesure 2 à 3 fois, à des endroits différents de la pièce si sa géométrie le permet : une pièce imprimée ou découpée n'est pas toujours parfaitement homogène.
- Ranger l'instrument correctement après usage : becs fermés délicatement, pas laissé en vrac dans un tiroir avec d'autres outils qui pourraient l'abîmer.

## Incertitude de mesure

Aucune mesure n'est exacte à 100 % : elle est toujours entourée d'une incertitude, qu'on note généralement avec un $\pm$. Un pied à coulisse digital annonce en général une résolution de $\pm 0{,}02$ mm, un modèle à vernier plutôt $\pm 0{,}05$ mm, mais dans la pratique, l'incertitude réelle dépend surtout de l'opérateur (parallaxe, effort de serrage, propreté) bien plus que de la résolution affichée par l'instrument.

Pour ce niveau, retenez surtout ceci : **une seule mesure ne prouve rien**. Si une cote est importante, mesurez-la plusieurs fois et gardez la valeur la plus cohérente plutôt que la première lue.

## Exemples concrets

Sur le [gabarit de contrôle](/workshops/metrologie/) utilisé dans cet atelier, mesurer le même trou Ø10 mm à trois endroits différents de son pourtour donne rarement exactement la même valeur : c'est normal, et c'est justement ce que ces bonnes pratiques permettent de repérer plutôt que de prendre la première lecture pour argent comptant.

Ces notions sont reprises directement dans les guides [Vérifier la précision dimensionnelle d'une pièce imprimée en 3D](/docs/how-to-guides/controle-dimensionnel-impression-3d/) et [Compenser le jeu de coupe d'une découpe laser](/docs/how-to-guides/compenser-jeu-coupe-laser/).

## Pour aller plus loin

- [Utiliser un pied à coulisse](/workshops/metrologie/tutorials/pied-a-coulisse/)
- [Utiliser un rapporteur d'angle](/workshops/metrologie/tutorials/rapporteur-angle/)
- [Utiliser un réglet](/workshops/metrologie/tutorials/reglet/)
