---
name: new-tutorial
description: Crée un nouveau tutoriel pas à pas dans `_docs/tutorials/` de ce site Jekyll MakerSpace (front matter, squelette d'étapes `step-tuto`, dossier d'images). À utiliser quand l'utilisateur demande un tutoriel, un pas à pas, un « fais avec moi » sur une technique générale. Pas pour une tâche ponctuelle (voir `new-how-to`), une explication théorique (`new-concept`), une fiche machine ou composant (`new-reference`), ni une page interne à un atelier (`new-workshop-page`).
---

# Nouveau tutoriel

Crée un tutoriel dans `_docs/tutorials/`. Un tutoriel apprend en faisant : l'utilisateur
suit les étapes du début à la fin et obtient un résultat concret.

**Arguments attendus** : `$ARGUMENTS`
Format recommandé : `<sous-dossier>/<slug>` (ex. `electronics/capteur-ultrason`,
`software/onshape/onshape-assemblage`).

## Est-ce le bon genre ?

| Ce que demande l'utilisateur | Le bon skill |
|---|---|
| Étapes séquentielles à suivre pour apprendre | **`new-tutorial`** (ici) |
| « Comment faire X » pour quelqu'un qui a déjà les bases | `new-how-to` |
| « Pourquoi / comment ça marche » | `new-concept` |
| Specs, BOM, fiche machine, logiciel, composant | `new-reference` |
| Page vivant dans un atelier `_workshops/<slug>/` | `new-workshop-page` |

Si l'arborescence n'est pas évidente, lister `_docs/tutorials/` pour réutiliser un
sous-dossier existant plutôt que d'en créer un nouveau.

## 1. Déduire les chemins

- Fichier : `_docs/tutorials/<sous-dossier>/<slug>.md`
- Dossier images : `_docs/tutorials/<sous-dossier>/<slug>/` (y créer un `.gitkeep`)

## 2. Front matter

```yaml
---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true
type: tutorial

title: <Titre humain du tutoriel>
subtitle: <Sous-titre court : ce que l'utilisateur saura faire>
description: <1 phrase de résumé pour le SEO et les cartes>
author: Alban Petit

time: 1
difficulty: 1
todo: 10

prerequisites:
  - label: Aucun pré-requis nécessaire
    link: ""
softwares:
  - label: Aucun logiciel requis
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---
```

## 3. Squelette de contenu

```markdown
## Objectif

Décris en deux ou trois phrases ce que l'utilisateur va réaliser et apprendre.

## Matériel nécessaire

Liste le matériel si applicable.

{% include step-tuto.html
greyBackground=true
title="Étape 1 : <action>"
content="Description de l'étape."
image="step1.png" %}

{% include step-tuto.html
greyBackground=false
title="Étape 2 : <action>"
content="Description de l'étape."
image="step2.png" %}

## Résultat attendu

Décris le résultat final et comment le valider.
```

## 4. Rappels

- Le corps commence à `##`, jamais `#` (le `title` fait le H1 via le layout).
- Chaque étape est un `{% include step-tuto.html %}`, **jamais** un titre numéroté.
- Titre d'étape au format `Étape 1 : Câbler l'écran` (deux-points, jamais de tiret).
- `time` en heures (entier), `difficulty` de 0 à 5, `todo` de 0 à 100.
- Images dans le sous-dossier `<slug>/`, noms descriptifs en kebab-case (`hero.png`,
  `schema-cablage.png`), jamais d'horodatage.
- Jamais de tiret cadratin `—` dans le contenu rédigé, front matter et paramètres
  d'include inclus (cf. `CLAUDE.md`).
- Une valeur de front matter contenant ` : ` doit être entre guillemets, sinon Jekyll
  lève une `YAML Exception`.

## 5. Rendre compte

Afficher le chemin créé et le front matter final pour validation, puis proposer
d'ajouter le tutoriel aux listes `tutorials:` d'un atelier si le sujet s'y rattache.
