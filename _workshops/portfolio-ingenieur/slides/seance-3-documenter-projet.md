---
layout: slides
title: Portfolio de l'ingénieur
subtitle: "Séance 3 : présenter un projet"
description: Support de la troisième séance de l'atelier Portfolio de l'ingénieur (2 h, dont 30 minutes de présentation) sur la page projet, le rôle personnel et les médias qui montrent le travail.
author: Adrien Bracq
kicker: MakerSpace Amiens
back_link: /workshops/portfolio-ingenieur/
---

## Au programme

1. Ce que raconte une page projet
2. Votre rôle, la partie qui compte
3. Montrer plutôt que dire
4. À vous d'écrire votre page projet

<aside class="notes" markdown="1">
Déroulé : 30 min de présentation (parties 1 à 3, activité comprise), puis 1 h 30 sur PC. Objectif de sortie : une page projet complète, avec au moins une image ou un média, publiée.
</aside>

---

## Où en êtes-vous ?

- Votre site affiche votre **nom**, votre **photo** et vos **liens**
- Votre page **Qui suis-je** et votre **CV** sont commencés
- Vous avez choisi **un projet** et rassemblé quelques photos

Avant tout : ouvrez VSCode et **synchronisez**.
{: .highlight-red}

---

<!-- .slide: class="slide-section" -->

## Une page projet

Ce que vous avez fait, comment, et ce que vous en avez appris

---

## Quel projet présenter ?

<p class="activity-meta"><span><i class="fas fa-user-friends"></i>En binôme</span><span><i class="far fa-clock"></i>5 min</span><span><i class="fas fa-pen"></i>Sans PC</span></p>

Présentez votre projet à votre voisin en une minute, puis inversez.

- Quel était le **besoin** ?
- Qu'avez-vous fait, **vous** ?
- Qu'avez-vous **à montrer** : photo, schéma, mesure ?

Le voisin note la question à laquelle vous avez eu le plus de mal à répondre.
{: .caption}

<aside class="notes" markdown="1">
La deuxième question est presque toujours la plus difficile : les étudiants racontent le projet de l'équipe. C'est l'accroche de la slide sur « Mon rôle ».
</aside>

---

## Les cinq parties d'une page projet

| Partie | Ce qu'elle raconte |
|---|---|
| **Contexte** | Le cadre (cours, club, perso) et le besoin de départ |
| **Mon rôle** | Ce que **vous** avez fait dans l'équipe |
| **Démarche** | Les grandes étapes, vos choix et leurs raisons |
| **Résultats** | Photos, mesures, graphiques : ce qui marche, ce qui ne marche pas |
| **Ce que j'en retiens** | Les difficultés, ce que vous feriez autrement |
{: .table-dense}

Le modèle `_projets/mon-premier-projet.md` contient déjà ces titres : copiez-le.
{: .caption}

---

## Mon rôle : la partie qui compte

<div class="columns" markdown="1">
<div markdown="1">

### Trop vague

« Nous avons conçu un robot suiveur de ligne. J'ai participé à l'électronique. »

</div>
<div markdown="1">

### Précis

« J'ai choisi les capteurs infrarouges, dessiné le schéma sous KiCad et soudé la carte. J'ai aussi écrit le programme de calibration. »

</div>
</div>

Un recruteur cherche ce que **vous** savez faire, pas ce que l'équipe a réalisé.
{: .highlight-red}

---

## L'en-tête de la page

```yaml
---
title: "Robot suiveur de ligne"
description: "Un robot qui suit une ligne noire, conçu en I1."
date: 2026-12-01
image: /assets/images/robot-suiveur.jpg
statut: "Terminé"
cadre: "Projet I1, MakerSpace"
equipe: "4 personnes"
tags: [robotique, électronique]
---
```

La carte du projet apparaît seule sur la page **Projets**, et sur l'accueil s'il fait partie des trois plus récents.
{: .caption}

---

<!-- .slide: class="slide-section" -->

## Montrer plutôt que dire

Une photo et une mesure valent mieux qu'un paragraphe

---

## Ce que vous pouvez montrer

| Pour montrer | Utilisez |
|---|---|
| Le prototype, le montage | Une **photo** (JPG) |
| Le fonctionnement | Un **diagramme** Mermaid |
| Des mesures, des essais | Un **graphique** |
| Une pièce conçue en CAO | Un **modèle 3D** (format GLB) |
| Une carte électronique | Le **schéma KiCad** |
| Le prototype qui marche | Une **vidéo** YouTube |
{: .table-dense}

Le code à copier pour chacun est dans la boîte à outils du thème. **↓** pour la voir.
{: .caption}

<!-- .down -->

## La boîte à outils

<iframe class="page-preview" data-src="https://makerspace-amiens.fr/portfolio-theme/docs/boite-a-outils/" title="Boîte à outils du thème portfolio"></iframe>

`makerspace-amiens.fr/portfolio-theme/docs/boite-a-outils/`
{: .caption}

---

## Exemple : un graphique de mesures

{% raw %}

```text
{% include chart.html type="bar" titre="Vitesse du robot"
   labels="3 V,5 V,7 V" valeurs="40,85,120" legende="mm/s" %}
```

{% endraw %}

{% include graphique.html type="bar" x_valeurs="3 V,5 V,7 V" y_valeurs="40,85,120" serie="Vitesse (mm/s)" %}

<aside class="notes" markdown="1">
Le code du haut est celui du thème portfolio (`chart.html`) ; le graphique affiché sur la slide est rendu par l'include de ce site, pour montrer le résultat.
</aside>

---

## Vos images, et celles des autres

- Des photos en **JPG**, de 1600 pixels de large au plus
- Des noms **sans espace, ni accent, ni majuscule**
- Pas de photo d'une personne **sans son accord**
- Une image trouvée en ligne : seulement si sa licence le permet, avec le **nom de l'auteur**
- Un projet de stage : seulement ce que l'entreprise **autorise**

[Comprendre la propriété intellectuelle de son projet](/docs/how-to-guides/propriete-intellectuelle-projet/){: .doc-link}

---

## Votre projet a déjà son site ?

Le repo d'un projet de **Méthodologie de projet** documente tout, pour l'équipe.

Votre page projet en fait la **synthèse**, pour un lecteur extérieur :

- l'essentiel du projet en une page
- **votre** rôle, que le site du projet ne détaille pas
- un **lien** vers le site du projet pour qui veut les détails

[Méthodologie de projet](/workshops/methodologie-de-projet/){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## À vous

Aujourd'hui, votre premier projet est en ligne

---

## Votre page projet

<p class="activity-meta"><span><i class="fas fa-user"></i>Individuel</span><span><i class="fas fa-laptop"></i>Avec PC</span></p>

1. **Copiez** `_projets/mon-premier-projet.md` sous un nouveau nom, puis supprimez l'exemple
2. **Remplissez** l'en-tête : titre, description, date, cadre, équipe
3. **Rédigez** les cinq parties, en commençant par **Mon rôle**
4. **Ajoutez** au moins une image ou un média

[Syntaxe Markdown](/workshops/methodologie-de-projet/tutorials/syntaxe-markdown/?project=portfolio-ingenieur){: .doc-link}

<aside class="notes" markdown="1">
Les guides « Ajouter un projet » et « Enrichir ses pages » restent à écrire dans l'atelier : ajouter leurs liens ici quand ils existeront. En attendant, renvoyer vers les parties 5 et 6 du guide étudiant du thème.
</aside>

---

## Avant de partir

- Votre projet apparaît sur la page **Projets** de votre site
- La partie **Mon rôle** dit ce que **vous** avez fait
- La page contient au moins une **image** ou un **média**
- Le projet d'exemple a disparu

Une croix rouge dans **Actions** ? Ouvrez le run : il indique le fichier et la ligne en cause.
{: .caption}

---

## La prochaine fois

**Séance 4** : la documentation et le journal de bord.

- Pensez à **un savoir-faire** appris récemment : une machine, un logiciel, une technique
- Pendant vos séances de projet, notez **ce que vous faites** et ce qui bloque

Ces notes deviendront vos premières entrées de journal.
{: .caption}
