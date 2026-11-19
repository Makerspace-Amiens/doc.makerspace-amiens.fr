---
layout: slides
title: Portfolio de l'ingénieur
subtitle: "Séance 4 : documentation et journal de bord"
description: Support de la quatrième séance de l'atelier Portfolio de l'ingénieur (2 h, dont 30 minutes de présentation) sur le journal de bord, les pages de documentation et la vie du site au fil de l'année.
author: Adrien Bracq
kicker: MakerSpace Amiens
back_link: /workshops/portfolio-ingenieur/
---

## Au programme

1. Tenir un journal de bord
2. Écrire une page de documentation
3. Faire vivre votre site toute l'année
4. À vous : une doc et deux entrées de journal

<aside class="notes" markdown="1">
Déroulé : 30 min de présentation (parties 1 à 3, activité comprise), puis 1 h 30 sur PC. Objectif de sortie : une page de documentation et deux entrées de journal publiées.
</aside>

---

## Où en êtes-vous ?

- Votre page **Projets** présente au moins un projet
- La partie **Mon rôle** dit ce que vous avez fait
- Le projet d'exemple a disparu

Avant tout : ouvrez VSCode et **synchronisez**.
{: .highlight-red}

---

<!-- .slide: class="slide-section" -->

## Le journal de bord

Dix minutes à la fin de chaque séance de projet

---

## Pourquoi un journal ?

- **Pour vous** : retrouver ce qui a été fait, et pourquoi
- **Pour votre page projet** : les photos et les mesures sont déjà là quand vous la rédigez
- **Pour un lecteur** : il voit votre démarche avancer, avec ses essais et ses erreurs

Un journal tenu chaque semaine montre comment vous travaillez. Une page écrite la veille de l'évaluation ne le montre pas.
{: .highlight-red}

[Tenir un journal de bord](/workshops/methodologie-de-projet/tutorials/journal-de-bord/){: .doc-link} [Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/){: .doc-link}

---

## Une entrée de journal

```markdown
---
title: "Journal de bord, semaine 3"
description: "Premiers essais des capteurs sur la piste."
categories: [journal]
---

## Ce qui a été fait
## Problèmes rencontrés
## Prochaine étape
```

Un fichier par entrée dans `_posts/`, nommé `2026-12-08-journal-semaine-3.md`.
{: .caption}

---

## Votre dernière séance de projet

<p class="activity-meta"><span><i class="fas fa-user"></i>Individuel</span><span><i class="far fa-clock"></i>5 min</span><span><i class="fas fa-pen"></i>Sans PC</span></p>

Repensez à votre dernière séance de projet et notez :

- une chose que vous avez **faite** ;
- un **problème** rencontré, même petit ;
- ce que vous ferez **la prochaine fois**.

C'est votre première entrée de journal : il ne reste qu'à la taper.
{: .caption}

<aside class="notes" markdown="1">
Faire lire deux ou trois « problèmes rencontrés » : ce sont souvent les passages les plus intéressants d'un journal, et les étudiants hésitent à les écrire.
</aside>

---

<!-- .slide: class="slide-section" -->

## Une page de documentation

Ce que vous savez faire, expliqué pour quelqu'un d'autre

---

## Projet, journal ou doc ?

| Page | Elle répond à | Exemple |
|---|---|---|
| **Projet** | Qu'avez-vous réalisé ? | Robot suiveur de ligne |
| **Journal** | Que s'est-il passé cette semaine ? | Journal de bord, semaine 3 |
| **Doc** | Comment fait-on ? | Flasher un ESP32 |
{: .table-dense}

Une doc explique un savoir-faire pas à pas : quelqu'un d'autre doit pouvoir la suivre.
{: .caption}

---

## L'en-tête d'une doc

```yaml
---
title: "Flasher un ESP32"
description: "Envoyer un programme sur la carte depuis PlatformIO."
section: "Électronique"
nav_order: 10
---
```

- `section` regroupe vos docs dans le **menu de gauche**
- `nav_order` fixe leur ordre : le plus petit en haut
- Les titres `##` et `###` construisent la **table des matières**

<aside class="notes" markdown="1">
Le guide « Écrire une page de documentation » reste à écrire dans l'atelier : en attendant, renvoyer vers la partie 8 du guide étudiant du thème et vers la doc d'exemple du modèle (`_docs/ma-premiere-doc.md`).
</aside>

---

## Quelle doc écrire ?

Un savoir-faire que vous avez appris, et que vous voudriez retrouver :

- régler une machine : l'imprimante 3D, la découpeuse laser
- utiliser un logiciel : exporter un plan, créer une pièce en CAO
- une technique : souder un composant, mesurer une tension

Rédigez-la comme si un camarade devait la suivre sans vous.
{: .highlight-red}

---

<!-- .slide: class="slide-section" -->

## Faire vivre votre site

Les quatre séances s'arrêtent, votre site continue

---

## Tout au long de l'année

| Quand | Ce que vous faites |
|---|---|
| À chaque séance de projet | Une entrée de journal, 10 minutes |
| À chaque étape d'un projet | Mettre à jour sa page : résultats, photos |
| Quand vous apprenez un savoir-faire | Une page de documentation |
| Avant une évaluation | Relire vos projets et votre journal |
| Avant une candidature | Tout relire, mettre le lien dans votre CV |
{: .table-dense}

[Portfolio de l'ingénieur](/workshops/portfolio-ingenieur/){: .doc-link}

---

## Les bonnes habitudes

- Des **messages de commit** clairs : « Ajoute le projet robot », pas «&nbsp;update&nbsp;»
- **Synchronisez** avant de commencer, et après chaque commit
- **Relisez-vous** : votre site est public
- Citez vos **sources** et l'auteur des images

[Git et GitHub avec VSCode](/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/?project=portfolio-ingenieur){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## À vous

Aujourd'hui, une doc et deux entrées de journal

---

## Les consignes de la séance

<p class="activity-meta"><span><i class="fas fa-user"></i>Individuel</span><span><i class="fas fa-laptop"></i>Avec PC</span></p>

1. **Tapez** l'entrée de journal préparée tout à l'heure
2. **Écrivez** une deuxième entrée : la séance d'aujourd'hui, ou une séance passée
3. **Rédigez** une page de documentation sur un savoir-faire
4. **Supprimez** la doc d'exemple, puis synchronisez

[Tenir un journal de bord](/workshops/methodologie-de-projet/tutorials/journal-de-bord/){: .doc-link}

<aside class="notes" markdown="1">
Erreur fréquente : un article qui n'apparaît pas, parce que le nom du fichier n'a pas de date ou qu'elle est dans le futur.
</aside>

---

## Avant de partir

- Deux entrées de **journal** sur la page **Blog**
- Une page de **documentation** dans le menu **Docs**
- Plus aucun contenu d'exemple sur votre site

Votre site présente maintenant votre profil, un projet, votre journal et une doc.
{: .highlight-red}

---

## Et après ?

- Une entrée de journal à **chaque séance de projet**
- Chaque nouveau projet devient une **page projet**
- Le lien de votre site sur votre **CV** et sur **LinkedIn**

Dans un an, vous aurez de quoi montrer ce que vous savez faire, preuves à l'appui.
{: .caption}
