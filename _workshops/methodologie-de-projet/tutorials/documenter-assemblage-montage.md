---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Documenter l'assemblage et le montage
subtitle: Un guide qu'on peut suivre sans avoir vu le prototype avant
description: Rédiger un guide de montage pas à pas pour que quelqu'un d'autre puisse reproduire votre assemblage, pas seulement l'admirer sur une photo.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

prerequisites:
  - label: Avoir un prototype assemblé au moins une fois
    link: ""
softwares:
  - label: Aucun logiciel requis
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Différent des fiches de brique statiques

Les tutoriels précédents (électronique, mécanique) documentent chaque
brique séparément. Un guide de montage, lui, documente **l'ordre et la
manière** de les assembler ensemble : l'information qui manque le plus
souvent, alors qu'elle est la plus utile à qui veut reproduire le projet.

## Comment le template organise le guide

La section **Fabrication et assemblage** du menu du site correspond au
dossier `docs/fabrication/` de votre repo :

```text
docs/fabrication/
├── index.md      matériel, outils, machines, puis liste des étapes
├── etape-1.md    une étape par page
└── etape-2.md
```

**Une étape par page**, avec des photos prises **pendant** le montage : c'est
le format le plus simple à suivre pour quelqu'un qui n'a jamais vu le
prototype. Les deux étapes du template sont des exemples à remplacer.

## La page d'accueil de la section

La page `docs/fabrication/index.md` liste le matériel, les outils et les
machines nécessaires **avant** les étapes, et renvoie vers les fichiers de
fabrication du repo (impression 3D, découpe laser). Le template y met déjà
ces liens : ils pointent vers les dossiers de `project/mcad/`.

{% capture snippet_materiel %}## Matériel nécessaire

- Tournevis cruciforme
- 4 vis M3x10, 4 écrous M3
- Pince à sertir (pour les connecteurs Dupont)

## Temps estimé

~45 minutes
{% endcapture %}
{% include code-snippet.html label="Copier le gabarit matériel (Markdown)" content=snippet_materiel %}

## Une page par étape

Pour ajouter une étape : copiez `etape-2.md` dans le même dossier, nommez la
copie `etape-3.md`, puis changez le `title` et le `nav_order` dans son
en-tête. Le champ `parent: Fabrication et assemblage` reste identique. Voir
[Personnaliser le template de son projet](/workshops/methodologie-de-projet/tutorials/personnaliser-template/)
pour le fonctionnement du menu.

{% capture snippet_step %}---
layout: default
title: "Étape 3 : câblage de la carte"
parent: Fabrication et assemblage
nav_order: 3
---

# Étape 3 : câblage de la carte

## Matériel

- Carte principale, câbles Dupont, fer à souder

## Procédure

1. **Souder** le connecteur d'alimentation sur la carte, côté cuivre.
2. **Brancher** le capteur sur le connecteur J2, fil rouge vers le haut.
3. **Vérifier** la continuité au multimètre avant de mettre sous tension.

![Carte câblée, vue de dessus](../assets/images/etape3-cablage.jpg)

## Vérifications

- Aucun fil ne touche un autre contact.

## Problèmes fréquents

| Problème | Solution |
|---|---|
| La LED ne s'allume pas | Vérifier le sens du connecteur d'alimentation |
{% endcapture %}
{% include code-snippet.html label="Copier le gabarit de page d'étape (Markdown)" content=snippet_step %}

## Ce qu'une bonne étape contient

- **L'action précise** : pas "montez le moteur", plutôt "vissez le moteur
  sur son support avec les 2 vis fournies, sens du câble vers le bas".
- **L'ordre qui compte** : signalez explicitement si une étape doit
  absolument précéder une autre (ex. "ne serrez pas avant l'étape 3").
- **Une photo prise pendant le vrai montage**, pas un rendu CAO (voir
  [Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/)).
- **Les vérifications** : comment savoir que l'étape est réussie avant de
  passer à la suivante.
- **Les problèmes fréquents** : ce qui a mal tourné pour vous, et comment
  vous l'avez corrigé.

## Ajouter des photos

Placez chaque photo dans `docs/assets/images/`, avec un nom descriptif sans
espace ni accent (`etape3-cablage.jpg`), puis insérez-la dans la page avec
`![Description](../assets/images/etape3-cablage.jpg)`. Les pages de
`docs/fabrication/` sont à un niveau de dossier de `docs/` : c'est pourquoi le
chemin commence par un seul `../`.

Chaque image doit peser **moins de 2 Mo** : au-delà, le workflow CI de votre
repo affiche un avertissement. Réduisez la résolution de la photo (un
smartphone produit souvent des images bien trop grandes pour un écran).

{% include message.html title="Testez votre propre guide" message="Le meilleur test : suivez votre propre guide de montage, étape par étape, sans rien improviser ni vous souvenir de ce que vous savez déjà. Chaque hésitation pendant le test signale une étape à préciser." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Exercice

Remplacez les deux étapes d'exemple par le guide de montage de votre
prototype, une étape par page et par action significative, puis faites-le
suivre par un camarade qui n'a jamais assemblé le projet. Notez tout ce qui
l'a bloqué ou fait hésiter.
