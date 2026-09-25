# CLAUDE.md — makerspace-doc

Documentation du projet pour Claude Code. Ce fichier décrit l'architecture, les conventions et les règles à respecter pour générer ou modifier du contenu sur ce site.

> **Règle de maintenance** : toute information utile à la collaboration avec Claude découverte au fil du travail (convention implicite, piège récurrent, décision d'architecture, comportement inattendu d'un outil) doit être ajoutée ici immédiatement, dans la section la plus pertinente. Ce fichier est une source de vérité vivante, pas un document figé.

## Ce qu'est ce dépôt

Site **Jekyll 4.4.1**, thème `bulma-clean-theme 1.3.1`, déployé sur <https://doc.makerspace-amiens.fr>.
Contenu en **français**. Édition possible via le CMS Decap (`/admin`) ou directement en Markdown.

Lancer en local : `make serve` (Jekyll + live reload sur `http://localhost:4000`).

---

## Collections et structure

| Collection | Dossier | Layout |
|---|---|---|
| Docs | `_docs/` | `documentation` |
| Ateliers | `_workshops/` | `project-home` (index) + `documentation` (sous-pages) |
| Ressources | `_ressources/` | `documentation` |

`_docs/` est subdivisé par genre Diátaxis :

| Sous-dossier | Genre | Répond à |
|---|---|---|
| `tutorials/` | Tutoriel | « fais avec moi, pas à pas » |
| `how-to-guides/` | Guide pratique | « comment faire X » |
| `references/` | Référence | machines, hardware, logiciels, plans |
| `concepts/` | Concept | théorie, principes |

Règle de tri : étapes séquentielles → `tutorials/`. Tâche réutilisable → `how-to-guides/`. Specs/BOM/fiche produit → `references/`. Principe explicatif → `concepts/`.

---

## Champ `type` — règles strictes

Le champ `type` du front matter est lu par deux filtres de code. **Ne mettre qu'une seule valeur**, parmi les cinq admises :

| Valeur | Où | Lu par |
|---|---|---|
| `tutorial` | `_docs/tutorials/**` | `/docs/` section Tutoriels |
| `how-to` | `_docs/how-to-guides/**` | `/docs/` section Guides |
| `concept` | `_docs/concepts/**` | `/docs/` section Concepts |
| `equipment` | `_docs/references/machines/**` | `/equipment/` |
| `workshop` | `_workshops/*/index.md` | `/workshops/` listing + navbar dropdown |

Pour tout autre fichier (références software/hardware/plans/others, sous-pages d'ateliers, ressources) : **ne pas mettre de champ `type`** — il n'est lu par aucun filtre et serait du bruit.

---

## Front matter — `_docs/**` (layout: documentation)

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
type: tutorial          # ou how-to | concept | equipment — voir règles ci-dessus

title: Titre affiché
subtitle: Sous-titre court
description: Une phrase de résumé (SEO + cartes)
author: Prénom Nom

time: 2                 # durée en heures (entier)
difficulty: 1           # 0 découverte → 5 expert

todo: 100               # avancement en % (100 = fini, relu)

prerequisites:
  - label: Aucun pré-requis nécessaire
    link: ""
softwares:
  - label: Arduino IDE
    link: /docs/references/software/arduino-ide/
hardwares:
  - label: Arduino Uno
    link: /docs/references/hardware/arduino-uno/
---
```

- Le corps commence toujours à `##` (jamais `#` — le `title` fait le H1 via le layout).
- `hero_image` et `image` pointent vers le même fichier dans le sous-dossier du `.md`.
- `external_link:` (optionnel) redirige le clic sur la carte directement vers une URL externe (ex : vidéo YouTube, doc externe).

---

## Front matter — `_workshops/*/index.md` (layout: project-home)

```yaml
---
title: Nom du projet
layout: project-home
permalink: /workshops/<slug>/
type: workshop
kind: project          # project = projet à fabriquer | course = thématique/parcours
image: /workshops/<slug>/hero.jpg
project_slug: <slug>
project_image: /workshops/<slug>/hero.jpg
project_tags:
  - Robotique
description: "Une phrase de présentation pour le hero et les cartes."
subtitle: Accroche courte

prerequisites:
  - /workshops/<autre-slug>/
concepts:
  - /docs/concepts/capteurs/
tutorials:
  - /docs/tutorials/software/onshape/onshape-installation/
  - /workshops/<slug>/tutorials/etape-1/
how_to_guides:
  - /docs/how-to-guides/3d-printing-design-rules/
hardware:
  - /docs/references/hardware/arduino-uno/
software:
  - /docs/references/software/arduino-ide/
ressources:
  - /docs/references/others/design-for-3d-printing/
---
```

Toutes les listes acceptent des URLs internes d'autres collections (cross-referencing autorisé). Le layout `project-home` cherche les pages dans `site.docs | concat: site.workshops` — l'URL doit correspondre exactement au `url` généré par Jekyll (tester avec trailing slash).

`prerequisites:` (optionnel) liste les **autres ateliers à suivre avant celui-ci** (URLs `/workshops/<slug>/`). Ils s'affichent dans une section **Prérequis** en haut de la page (juste avant Concepts). Utile pour chaîner un atelier thématique (`kind: course`) en amont d'un projet, ex. « Conception assistée par ordinateur » avant « Machine That Draws ».

### Champ `kind` — projet vs thématique

Le champ `kind` distingue les deux natures d'ateliers, sur la page `/workshops/` (deux sections **Projets** / **Thématiques**) et dans le dropdown de la navbar (deux groupes) :

| Valeur | Nature | Exemples |
|---|---|---|
| `project` | Projet guidé à concevoir et fabriquer de A à Z | `otto-mks`, `machines-that-draws`, `puzzle-bot` |
| `course` | Parcours thématique pour se former à un domaine/une technique | `fab-additive`, `decoupe-laser`, `microcontroleur` |

Le filtre est porté par l'include `card_collections.html` (paramètre `kind="project"` / `kind="course"`). Tout `index.md` d'atelier **doit** avoir un `kind` — sans lui, l'atelier n'apparaît dans aucune des deux sections.

### Atelier en anglais — champ `lang`

Le site est en français (`lang: fr` dans `_config.yml`), mais une page peut basculer son interface en anglais avec `lang: en` dans son front matter (ex : atelier `initiation-makerspace`). Les libellés des layouts `project-home`, `documentation` et de l'include `project-tutos.html` (« Tutoriels », « Commencer », « Précédent/Suivant », « Durée », « Pré-requis »…) sont lus dans `_data/i18n.yml` (clés `fr` / `en`).

- Mettre `lang: en` sur **l'`index.md` et sur chaque sous-page** de l'atelier (la barre de progression et la navigation sont rendues par la sous-page).
- Tout nouveau libellé ajouté à ces layouts doit passer par `_data/i18n.yml` (variable `_i18n`), jamais en dur.
- La navbar et le footer restent en français (globaux au site).

---

## Navbar — dropdown Ateliers

Le dropdown est **généré dynamiquement** depuis `site.workshops | where: "layout", "project-home"`, trié alphabétiquement et **scindé en deux groupes** (Projets / Thématiques) selon le champ `kind`. Ne pas modifier la liste dans `_data/navigation.yml` — tout atelier avec `layout: project-home` apparaît automatiquement dans le groupe correspondant à son `kind`.

---

## `/docs/` — système de filtrage par catégorie

- **Tutoriels / Guides / Concepts** : filtrés par `type` via `{% include card_collections.html type="tutorial" %}` etc.
- **Références** : filtrées par `path_prefix="_docs/references/"` + `category_path_offset=2`. La catégorie est déduite du sous-dossier (`software/`, `hardware/`, `machines/`, `plans/`, `others/`). **Aucun `type` n'est nécessaire** pour que les références s'affichent.
- Les boutons de filtre (Logiciels / Électronique / Machines / Plans / Autres) sont générés automatiquement depuis les sous-dossiers existants.

---

## Images

- Dossier : sous-dossier **du même nom** que le `.md` (ex : `_docs/tutorials/electronics/port-serie/` pour `port-serie.md`).
- Nommage : **noms descriptifs** en kebab-case (`schema-connexion-tx-rx.png`, `hero.png`), jamais des timestamps horodatés (`2021-11-08-11-37-38.png`).
- Image de couverture : nommer `hero.png` ou `hero.jpg` et la référencer dans `hero_image` et `image`.

---

## Includes Liquid disponibles

**Message d'alerte** (`is-info`, `is-warning`, `is-danger`, `is-success`) :

```liquid
{% include message.html title="Attention" message="..." status="is-warning" icon="fas fa-exclamation-triangle" %}
```

**Étape de tutoriel** (les tutoriels DOIVENT utiliser cet include, pas des titres numérotés) :

```liquid
{% include step-tuto.html greyBackground=true title="Étape 1" content="..." image="step1.png" %}
```

`content` accepte du Markdown (passé par `| markdownify`). Jusqu'à 4 images (`image`, `image_2`, `image_3`, `image_4`).

**Rangée d'images** :

```liquid
{% include image-row.html image_1="a.png" image_2="b.png" %}
```

**Vidéo YouTube embarquée** :

```liquid
{% include youtube.html video="VIDEO_ID" %}
```

**Visionneuse 3D** (`model-viewer`) et **KiCanvas** (schémas KiCad) : activés automatiquement via `documentation.html` — utiliser les balises HTML natives `<model-viewer>` et `<kicanvas-schematic>`.

---

## Fonctionnalités techniques activées

| Fonctionnalité | Comment l'utiliser |
|---|---|
| **Mermaid.js** | Blocs ` ```mermaid! ``` ` dans le Markdown — rendu automatique en SVG |
| **KaTeX** | Délimiteurs `$ ... $` (inline) et `$$ ... $$` (bloc) — rendu automatique |
| **Model Viewer** | Tag `<model-viewer>` dans le contenu (include `model-viewer-include.html` chargé dans `documentation.html`) |
| **KiCanvas** | Tag `<kicanvas-schematic>` pour afficher des fichiers KiCad |

Mermaid et KaTeX ne sont chargés que sur les pages avec `layout: documentation`.

---

## Markdown et lint

Config dans `.markdownlint.json`. Règles désactivées (intentionnellement) :

| Règle | Raison |
|---|---|
| MD013 | Longueur de ligne non contrainte (contenu prose) |
| MD033 | HTML inline autorisé (boutons, composants Liquid) |
| MD036 | Emphase-comme-titre : style éditorial volontaire dans certains docs |
| MD045 | Texte alt : tâche d'accessibilité séparée |
| MD060 | Alignement de colonnes de tableau : non enforced |
| MD024 `siblings_only` | Titres dupliqués OK si sous parents différents |

Règles importantes à respecter :

- Un seul titre `#` implicite (le `title` du front matter). Le corps commence à `##`.
- Ligne vide avant et après les listes et les blocs de code.
- Nommer les langages des blocs de code (` ```bash `, ` ```cpp `, etc.).
- **Ne pas encadrer de `< >` les URLs à l'intérieur des paramètres Liquid** (`items=`, `content=`, etc.) — markdownlint le fait par erreur lors d'un auto-fix.

## Typographie du contenu

- **Pas de tiret cadratin (—) dans le contenu documentaire** (`_docs/`, `_workshops/`, `_ressources/`, pages racine), ni dans le corps, ni dans le front matter, ni dans les paramètres d'includes Liquid. Reformuler avec `:` (explication), `,` (apposition), `;` (deux propositions liées), des parenthèses (incise) ou une phrase séparée.
- Pour les titres d'étapes, le format est `## Étape 1 : Câbler l'écran` (deux-points, jamais de tiret).
- **Piège YAML** : une valeur de front matter qui contient ` : ` doit être mise entre guillemets (`subtitle: "Niveau 2 : Accompagnée"`), sinon Jekyll lève une `YAML Exception` et la page n'est pas générée.

---

## CSS / Thème

- **Ne jamais modifier** le gem `bulma-clean-theme`.
- Toutes les surcharges dans `assets/css/` (partials `_tokens.scss`, `_navbar.scss`, etc.).
- Les variables Bulma sont redéfinies dans `_tokens.scss` avant `@import "main"`.
- Palette : zinc (shadcn/ui), accent principal `#ef2e31` (rouge UniLaSalle), fond blanc uniquement (`--bg: #ffffff`).

---

## Commits

Format : `type(scope): description courte` — voir `CONTRIBUTING.md` pour la liste complète.

Scopes courants : `docs`, `workshop`, `theme`, `nav`, `config`.
Types courants : `feat` (nouveau contenu), `fix` (correction), `chore` (tooling/config), `style` (CSS).

Exemples :

```text
feat(docs): add serial port and plotter tutorial
fix(nav): generate workshops dropdown dynamically instead of a stale list
chore(docs): fix all markdownlint errors across the project
```
