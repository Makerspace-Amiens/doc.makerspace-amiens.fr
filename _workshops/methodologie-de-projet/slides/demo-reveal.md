---
layout: slides
title: Des slides en Markdown
subtitle: Tour d'horizon de ce que reveal.js permet sur le site du MakerSpace
description: Présentation de démonstration des possibilités de reveal.js (fragments, Auto-Animate, fonds, code, navigation).
author: Adrien Bracq
kicker: MakerSpace Amiens · démo reveal.js
back_link: /workshops/methodologie-de-projet/
title_slide_class: has-dark-background
title_slide_attrs: 'data-background-gradient="linear-gradient(135deg, #09090b 0%, #3f0d0e 55%, #ef2e31 100%)"'
---

<!-- .slide: class="slide-section" data-background-color="#ef2e31" -->

## Partie 1

Du texte qui prend vie

---

## Les fragments

Chaque élément apparaît à la touche suivante, avec son propre effet :

- {: .fragment} Apparition simple
- {: .fragment .fade-up} Montée depuis le bas
- {: .fragment .fade-left} Arrivée par la gauche
- {: .fragment .grow} Un élément qui grossit
- {: .fragment .highlight-red} Mise en évidence en rouge
- {: .fragment .fade-in-then-semi-out} Visible, puis estompé

---

## Changer d'avis en direct

On documente son projet <span class="fragment strike">la veille du rendu</span> <span class="fragment highlight-red">au fil de l'eau</span>.

<p class="fragment fade-up">Les classes <code>strike</code> et <code>highlight-red</code> se posent sur un simple <code>&lt;span&gt;</code>.</p>

---

<!-- .slide: class="slide-center" -->

<p class="r-fit-text">Documentez.</p>
<p class="r-fit-text fragment fade-up">Au fil de l'eau.</p>

---

<!-- .slide: class="slide-center" -->

<p class="big-number">1</p>

repo par équipe, du premier commit à la soutenance
{: .fragment .fade-up}

---

<!-- .slide: class="slide-section" data-background-color="#09090b" -->

## Partie 2

Auto-Animate : les éléments se déplacent tout seuls

---

<!-- .slide: data-auto-animate -->

## Un projet, étape par étape

<div class="demo-flow">
  <div class="demo-box is-big" data-id="cadrage">Cadrage</div>
</div>

---

<!-- .slide: data-auto-animate -->

## Un projet, étape par étape

<div class="demo-flow">
  <div class="demo-box" data-id="cadrage">Cadrage</div>
  <span class="demo-arrow" data-id="a1">→</span>
  <div class="demo-box" data-id="recherche">Recherche</div>
  <span class="demo-arrow" data-id="a2">→</span>
  <div class="demo-box" data-id="conception">Conception</div>
</div>

---

<!-- .slide: data-auto-animate -->

## Un projet, étape par étape

<div class="demo-flow">
  <div class="demo-box" data-id="cadrage">Cadrage</div>
  <span class="demo-arrow" data-id="a1">→</span>
  <div class="demo-box" data-id="recherche">Recherche</div>
  <span class="demo-arrow" data-id="a2">→</span>
  <div class="demo-box" data-id="conception">Conception</div>
  <span class="demo-arrow" data-id="a3">→</span>
  <div class="demo-box" data-id="realisation">Réalisation</div>
  <span class="demo-arrow" data-id="a4">→</span>
  <div class="demo-box is-accent" data-id="tests">Tests</div>
  <span class="demo-arrow" data-id="a5">→</span>
  <div class="demo-box" data-id="presentation">Présentation</div>
</div>

Les blocs qui portent le même `data-id` d'une slide à l'autre sont animés : position, taille, couleur.
{: .caption}

---

<!-- .slide: data-auto-animate class="slide-center" -->

<h2 data-id="doc-title" style="font-size: 3.4em; border: none;">Documenter</h2>

---

<!-- .slide: data-auto-animate -->

<h2 data-id="doc-title">Documenter</h2>

- Un journal de bord par personne
- Les choix techniques et leurs raisons
- Les fichiers sources dans le repo

Le titre a glissé à sa place : même `data-id`, tailles différentes.
{: .caption}

---

## Du code, ligne par ligne

<pre><code class="language-cpp" data-trim data-line-numbers="1|3-5|7-12|8-9|10-11">
const int LED = 13;

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, HIGH);
  delay(500);
  digitalWrite(LED, LOW);
  delay(500);
}
</code></pre>

Chaque appui sur → surligne le bloc suivant (`data-line-numbers`).
{: .caption}

---

<!-- .slide: class="slide-section" data-background-gradient="radial-gradient(circle at 30% 30%, #ef2e31 0%, #7f1214 45%, #09090b 100%)" -->

## Partie 3

Des fonds en plein écran

---

<!-- .slide: class="has-dark-background slide-section" data-background-image="/workshops/methodologie-de-projet/tutorials/documenter-carte-electronique/hero.jpg" data-background-color="#09090b" data-background-opacity="0.4" -->

## Une photo en fond

`data-background-image`, avec une opacité réglable pour garder le texte lisible.

Photo : carte électronique du robot Otto, MakerSpace UniLaSalle Amiens.
{: .caption}

---

<!-- .slide: class="has-dark-background" data-background-image="/workshops/methodologie-de-projet/tutorials/creer-repo-template/hero.jpg" data-background-color="#09090b" data-background-opacity="0.25" data-background-transition="zoom" -->

## Du code en toile de fond

- Le fond a sa propre transition (`data-background-transition`)
- Le texte, lui, garde la sienne

Photo : « a computer screen with a bunch of code on it » par Chris Ried, via [Unsplash](https://unsplash.com/photos/ieic5Tq8YMk), sous [licence Unsplash](https://unsplash.com/license).
{: .caption}

---

<!-- .slide: data-background-iframe="/workshops/methodologie-de-projet/" data-background-interactive -->

<span class="demo-box is-accent">Une page web en fond : la page de l'atelier, en direct. Cliquez, faites défiler.</span>

---

<!-- .slide: class="slide-section" data-background-color="#ef2e31" -->

## Partie 4

Naviguer autrement

---

## Des slides en profondeur

Cette slide a des sous-slides : descendez avec **↓**.

Pratique pour ranger des détails qu'on ne montre que si on a le temps.
{: .caption}

<!-- .down -->

## Détail 1 : un diagramme

```mermaid!
graph LR
    A[Besoin] --> B[Cahier des charges]
    B --> C[Conception]
    C --> D[Tests]
    D -.vérifie.-> A
```

<!-- .down -->

## Détail 2 : une formule

La loi d'Ohm, rendue par KaTeX :

$$U = R \times I$$

$$P = U \times I = R \times I^2$$
{: .fragment .fade-up}

---

## Des images empilées

<div class="r-stack">
  <img class="fragment" src="/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/changes-github-desktop.png" alt="Changements dans GitHub Desktop">
  <img class="fragment" src="/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/commit-github-desktop.png" alt="Commit dans GitHub Desktop">
  <img class="fragment" src="/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/push-github-desktop.png" alt="Push dans GitHub Desktop">
</div>

Changes, commit, push : les captures se superposent au même endroit (`r-stack`).
{: .caption}

---

<!-- .slide: data-transition="zoom" class="slide-center" -->

## Une transition zoom

Pour une seule slide, avec `data-transition="zoom"`.

<aside class="notes" markdown="1">
Notes orateur : elles ne s'affichent que dans la vue présentateur (touche **S**), avec la slide suivante et un chronomètre.
</aside>

---

## Au clavier, pendant la séance

| Touche | Effet |
|---|---|
| **→**, **Espace** | Slide ou fragment suivant |
| **↓** | Sous-slide |
| **Échap** ou **O** | Vue d'ensemble de tout le deck |
| **S** | Vue présentateur (notes, chrono) |
| **F** | Plein écran |
| **B** ou **.** | Écran noir (pour reprendre l'attention) |
| **Alt + clic** | Zoom sur une zone de la slide |
| **G** | Aller à une slide par son numéro |

Et dans l'URL : `?view=scroll` pour lire le deck comme une page, `?print-pdf` pour l'exporter.
{: .caption}

---

<!-- .slide: class="has-dark-background slide-center" data-background-gradient="linear-gradient(135deg, #09090b 0%, #3f0d0e 55%, #ef2e31 100%)" -->

<p class="r-fit-text">À vous de jouer.</p>

Un fichier Markdown, `layout: slides`, et c'est parti.
