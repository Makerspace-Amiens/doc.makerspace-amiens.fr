---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Documenter au fil de l'eau
subtitle: Le principe le plus important de cet atelier
description: Pourquoi la documentation d'un projet se construit en continu, dès le premier jour, et pas dans les derniers jours avant le rendu.
author: Adrien Bracq

todo: 70
---

{% include message.html title="Le point le plus important de cet atelier" message="Si vous ne retenez qu'une seule chose de tout l'atelier, que ce soit celle-ci : documenter à la fin ne fonctionne presque jamais. Ce qui fonctionne, c'est documenter un peu à chaque séance, dès le premier jour." status="is-danger" icon="fas fa-star" %}

## Ce n'est pas le travail d'une seule personne

Documenter n'est pas un rôle qu'on attribue à quelqu'un dans l'équipe,
comme on attribue le mécanique ou l'électronique, voir
[Constituer et organiser son équipe](/workshops/methodologie-de-projet/concepts/constituer-organiser-equipe/).
**Chaque membre documente sa propre partie**, au fur et à mesure de ce
qu'il fait. Une équipe où une seule personne "s'occupe de la doc" produit
presque toujours une documentation incomplète, écrite de seconde main,
et en retard, puisque cette personne découvre le travail des autres au
moment de l'écrire, pas au moment où il a été fait.

## Le piège du "on documentera à la fin"

C'est la promesse que toutes les équipes se font, et que presque aucune ne
tient. Voici pourquoi :

- À la fin du projet, tout le monde est fatigué et sous pression de la
  deadline : ce n'est jamais le bon moment pour rédiger correctement.
- La mémoire s'efface vite : la raison exacte d'un choix technique fait en
  semaine 2 est souvent oubliée en semaine 8.
- Les preuves visuelles disparaissent : une photo du prototype cassé, un
  état intermédiaire du code, une version antérieure de la pièce imprimée :
  si vous ne les captez pas sur le moment, elles n'existent plus après.
- Si une personne de l'équipe est absente ou change en cours de route, tout
  ce qui n'a pas été écrit part avec elle.

## Deux équipes, deux résultats

{% capture tab1 %}

**Semaine 8, veille du rendu** : l'équipe se retrouve pour "faire la doc".
Personne ne se souvient exactement pourquoi le servomoteur initial a été
remplacé par un moteur pas à pas. Les photos du premier prototype ont été
supprimées du téléphone de quelqu'un qui a changé de portable entretemps.
La documentation produite en une soirée est vague, généraliste, et ne dit
presque rien que le code ou le CAO ne montrent pas déjà.

{% endcapture %}

{% capture tab2 %}

**Chaque semaine, 10 minutes en fin de séance** : l'équipe note ce qui a
été fait, pourquoi, et ce qui reste à faire. En semaine 8, il ne reste
qu'à relire, corriger, et mettre en forme ce qui existe déjà. La
documentation finale explique clairement pourquoi le moteur pas à pas a
remplacé le servo (couple insuffisant, mesuré), avec les photos prises au
moment du changement.

{% endcapture %}

{% include content-tabs.html
  id="deux-equipes"
  tab_title1="❌ Doc à la fin"
  tab_title2="✅ Doc au fil de l'eau"
  tab1=tab1
  tab2=tab2
%}

## Ce qu'on documente, et quand

- **Après chaque séance de travail**, 5 à 10 minutes : ce qu'on a fait,
  pourquoi, ce qu'il reste à faire. C'est le rôle du journal de bord, voir
  [Tenir un journal de bord](/workshops/methodologie-de-projet/tutorials/journal-de-bord/)
  pour le mettre en place concrètement (dans le repo créé avec
  [Créer son repo depuis le template](/workshops/methodologie-de-projet/tutorials/creer-repo-template/)).
- **À chaque décision technique**, tout de suite : quoi, pourquoi, ce qui a
  été écarté et pour quelle raison. Une décision non écrite est une
  décision qui devra être reprise à zéro dans un débat à la semaine 6.
- **À chaque étape franchie** (cadrage terminé, premier prototype qui
  fonctionne, choix d'un composant) : mise à jour de la page correspondante du
  site de documentation, pas juste une note volante.
- **Avec des photos et captures prises sur le moment**, pas reconstituées
  après coup : un état intermédiaire cassé ou raté est aussi utile à
  montrer qu'un résultat qui fonctionne.

{% include message.html title="Un exemple d'entrée de journal" message="12/03 : Remplacé le servomoteur par un moteur pas à pas + driver A4988 : le servo décroche au-delà de 200 g, mesuré au dynamomètre. Driver commandé, livraison sous 3 jours. Reste à faire : réécrire le code de contrôle moteur." status="is-success" icon="fas fa-check-circle" %}

## La passe de synthèse finale n'est pas un premier jet

Ça ne veut pas dire qu'il n'y a rien à faire à la fin du projet. Une passe
de relecture et de mise en forme reste nécessaire :

- relire l'ensemble et corriger ce qui n'est plus à jour,
- combler les trous qui restent malgré tout,
- réorganiser pour qu'un lecteur extérieur s'y retrouve,
- rendre la documentation présentable (mise en forme, images, structure).

La différence essentielle : c'est un travail de **relecture et d'édition**
sur une matière qui existe déjà, pas une rédaction complète en urgence à
partir de rien.

## Exercice

En équipe, maintenant, pas en fin de semaine :

1. Ouvrez le fichier de documentation de votre projet et ajoutez une entrée
   pour ce que vous avez fait aujourd'hui ou cette semaine, même bref.
2. Décidez, en équipe, d'un moment fixe et récurrent (ex : "10 minutes à la
   fin de chaque séance") pour prendre cette habitude. Notez-le quelque
   part où toute l'équipe le voit.
