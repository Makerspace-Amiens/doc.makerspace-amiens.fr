---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Tracer ses choix techniques
subtitle: Pourquoi celui-là et pas un autre
description: Documenter les arbitrages techniques au moment où ils sont faits, pour ne pas refaire le même débat deux fois et permettre à quelqu'un d'autre de comprendre vos choix.
author: Adrien Bracq

todo: 70
---

## Pourquoi tracer un choix, pas juste le faire

Une équipe qui choisit un composant, une architecture ou une méthode sans
noter pourquoi s'expose à deux problèmes : le même débat peut ressurgir
plus tard ("pourquoi on n'a pas pris l'autre capteur, déjà ?"), et personne
d'extérieur à la décision (un nouveau membre, un encadrant, une prochaine
promo) ne peut comprendre la logique du projet en le lisant.

## Des fonctions aux solutions : le diagramme FAST

C'est le moment annoncé dans
[Définir son besoin](/workshops/methodologie-de-projet/concepts/definir-son-besoin/) :
le diagramme FAST part d'une fonction du cahier des charges et explore les
solutions techniques possibles pour la remplir.

```mermaid!
graph LR
    A[FP1 : trier les déchets] --> B[Détecter le type<br/>de déchet]
    B --> C1[Capteur de couleur]
    B --> C2[Vision par caméra]
    B --> C3[Tri par poids]
    C1 --> D[Solution retenue]
```

Ce n'est pas un exercice théorique : c'est directement la suite de la
pré-étude de faisabilité vue dans
[Rechercher l'existant](/workshops/methodologie-de-projet/concepts/rechercher-existant-faisabilite/) :
le test rapide du capteur de couleur, dans cet exemple, a nourri ce choix.

## Un format simple pour documenter un arbitrage

Pas besoin d'un document complexe. Pour chaque choix qui compte, quatre
questions suffisent :

```markdown
## Choix : capteur de couleur plutôt que vision par caméra

**Contexte** : le robot doit distinguer 3 catégories de déchets sous
l'éclairage réel du Forum des Sciences.

**Options envisagées** : capteur de couleur (TCS3200), vision par caméra
avec reconnaissance d'image, tri par poids.

**Choix retenu et pourquoi** : capteur de couleur ; la pré-étude a montré
une précision suffisante sous l'éclairage réel, pour un coût et une
complexité bien inférieurs à la vision par caméra.

**Compromis acceptés** : moins précis qu'une caméra sur des déchets très
sales ou décolorés, acceptable pour une démonstration, à revoir si le
projet est repris pour un usage réel.
```

{% include message.html title="Tous les choix ne méritent pas une entrée" message="Réservez ce format aux décisions coûteuses à revenir en arrière (choix d'un composant central, d'une architecture, d'une méthode de fabrication) : pas à chaque micro-décision du quotidien, qui a déjà sa place dans le journal de bord." status="is-info" icon="fas fa-info-circle" %}

## Où ça vit

Ce format tient dans la section **Choix techniques** de la page
`docs/etudes.md` de votre repo, à la suite du tableau comparatif de la
recherche de l'existant. Les deux se complètent : l'un compare des solutions
externes, l'autre documente le choix final et pourquoi. Si vous avez
beaucoup de choix à documenter, faites une sous-page par choix (ajoutez
`has_children: true` dans l'en-tête de `etudes.md` et `parent: Études et
choix techniques` dans chaque sous-page).

## Exercice

Sur votre projet, en équipe :

1. Identifiez un choix technique déjà fait mais jamais écrit noir sur
   blanc (ça arrive presque toujours).
2. Rédigez-le avec le format ci-dessus, en équipe : c'est aussi l'occasion
   de vérifier que tout le monde est d'accord sur la raison du choix.
