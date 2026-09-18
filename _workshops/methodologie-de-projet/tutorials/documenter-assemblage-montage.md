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
manière** de les assembler ensemble, l'information qui manque le plus
souvent, alors qu'elle est la plus utile à qui veut reproduire le projet.

## Structurer le guide avec `step-tuto.html`

C'est exactement l'usage prévu pour cet include (déjà utilisé partout
dans cet atelier) : une étape numérotée, avec une image, et le texte
minimum pour ne pas se tromper.

{% capture snippet_step %}{% raw %}{% include step-tuto.html
  greyBackground=true
  title="Étape 1 : Fixer le châssis"
  content="Fixez les 4 pieds imprimés sur le châssis avec des vis M3x10. Ne serrez pas complètement avant l'étape 3."
  image="etape1.jpg" %}{% endraw %}{% endcapture %}
{% include code-snippet.html label="Copier le gabarit d'étape (Liquid)" content=snippet_step %}

## Ce qu'une bonne étape contient

- **L'action précise** : pas "montez le moteur", plutôt "vissez le moteur
  sur son support avec les 2 vis fournies, sens du câble vers le bas".
- **L'ordre qui compte** : signalez explicitement si une étape doit
  absolument précéder une autre (ex. "ne serrez pas avant l'étape 3").
- **Une photo prise pendant le vrai montage**, pas un rendu CAO, voir
  [Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/).

## La liste d'outils et de matériel en tête de page

{% capture snippet_materiel %}## Matériel nécessaire

- Tournevis cruciforme
- 4 vis M3x10, 4 écrous M3
- Pince à sertir (pour les connecteurs Dupont)

## Temps estimé

~45 minutes
{% endcapture %}
{% include code-snippet.html label="Copier le gabarit matériel (Markdown)" content=snippet_materiel %}

{% include message.html title="Testez votre propre guide" message="Le meilleur test : suivez votre propre guide de montage, étape par étape, sans rien improviser ni vous souvenir de ce que vous savez déjà. Chaque hésitation pendant le test signale une étape à préciser." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Exercice

Rédigez le guide de montage de votre prototype avec `step-tuto.html`, une
étape par action significative, puis faites-le suivre par un camarade qui
n'a jamais assemblé le projet : notez tout ce qui l'a bloqué ou fait
hésiter.
