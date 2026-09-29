---
name: new-workshop
description: Crée un nouvel atelier complet dans `_workshops/` de ce site Jekyll MakerSpace : dossier, `index.md` en `layout: project-home`, champs `kind`/`type`, listes de ressources croisées. À utiliser quand l'utilisateur demande un nouvel atelier, un nouveau projet guidé ou un nouveau parcours thématique. Pour ajouter une page à un atelier qui existe déjà, utiliser `new-workshop-page`.
---

# Nouvel atelier

Crée un atelier dans `_workshops/`. Un atelier a une page d'accueil
(`layout: project-home`) et des sous-pages. Il apparaît automatiquement dans la page
`/workshops/` et dans le dropdown de la navbar, sans rien ajouter à
`_data/navigation.yml`.

**Arguments attendus** : `$ARGUMENTS`
Format : `<slug>` (ex. `robot-sumo`, `gravure-laser-debutant`).

## 1. Trancher `kind` avant d'écrire

| `kind` | Nature | Exemples |
|---|---|---|
| `project` | Projet guidé à concevoir et fabriquer de A à Z | `otto-mks`, `machines-that-draws`, `puzzle-bot` |
| `course` | Parcours thématique pour se former à un domaine ou une technique | `fab-additive`, `decoupe-laser`, `microcontroleur` |

`kind` est **obligatoire** : il choisit la section de `/workshops/` (Projets /
Thématiques) et le groupe du dropdown. Sans lui, l'atelier n'apparaît dans aucune des
deux. Si la demande est ambiguë, demander à l'utilisateur plutôt que de deviner.

## 2. Structure de dossiers

```text
_workshops/<slug>/
├── index.md          <- page d'accueil (layout: project-home)
├── hero.jpg          <- image de couverture (placeholder si pas d'image)
└── tutorials/        <- sous-pages propres à cet atelier
```

Créer un `.gitkeep` dans `tutorials/`.

## 3. `_workshops/<slug>/index.md`

```yaml
---
title: <Nom de l'atelier>
layout: project-home
permalink: /workshops/<slug>/
type: workshop
kind: project          # project = projet à fabriquer | course = parcours thématique
image: /workshops/<slug>/hero.jpg
project_slug: <slug>
project_image: /workshops/<slug>/hero.jpg
project_tags:
  - <Tag 1>
  - <Tag 2>
description: "<1 phrase de présentation pour le hero et les cartes.>"
subtitle: <Accroche courte>

prerequisites:        # autres ateliers à suivre avant celui-ci (optionnel)
  -

concepts:
  -

tutorials:
  -

how_to_guides:
  -

hardware:
  -

software:
  -

ressources:
  -
---
```

Champs optionnels à connaître :

- `prerequisites:` : URLs `/workshops/<autre-slug>/` des ateliers à suivre avant. Utile
  pour enchaîner un `course` en amont d'un `project`.
- `special_sections:` : sections de cartes en haut de page (programme, évaluation, decks
  de slides). Voir `CLAUDE.md` et `_workshops/methodologie-de-projet/index.md`.
- `lang: en` : bascule l'interface de la page en anglais. À poser sur l'`index.md`
  **et sur chaque sous-page** ; tout nouveau libellé passe par `_data/i18n.yml`.

## 4. Corps de présentation

```markdown
Bienvenue dans l'atelier **<Nom>** !

<Deux ou trois phrases : objectif du projet, ce que les participants vont réaliser et
apprendre.>

## Ce que vous allez apprendre

- Compétence 1
- Compétence 2
- Compétence 3

## Pourquoi ce projet ?

<Contexte pédagogique, lien avec d'autres modules si applicable.>
```

## 5. Rappels

- Toutes les listes acceptent des URLs internes d'autres collections (cross-referencing
  autorisé), mais l'URL doit correspondre **exactement** au `url` généré par Jekyll,
  trailing slash compris : le layout cherche les pages dans
  `site.docs | concat: site.workshops`. Une URL fausse ne produit aucune erreur, juste
  une carte manquante : vérifier le rendu.
- Laisser une liste vide (`-`) est sans effet visible ; la supprimer est plus propre.
- Jamais de tiret cadratin `—` dans le contenu rédigé, front matter inclus
  (cf. `CLAUDE.md`).
- Une valeur de front matter contenant ` : ` doit être entre guillemets.

## 6. Rendre compte

Afficher la structure créée et le front matter généré, puis rappeler les suites :

- l'atelier apparaît automatiquement dans la section et le groupe de navbar correspondant
  à son `kind` (tri alphabétique) ;
- pour lier du contenu existant, renseigner les listes `tutorials:`, `concepts:`, etc. ;
- pour créer des pages propres à l'atelier, utiliser le skill `new-workshop-page` ;
- fournir une vraie image `hero.jpg` (photo réelle et libre, avec crédit).
