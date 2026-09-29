---
name: new-how-to
description: Crée un nouveau guide pratique dans `_docs/how-to-guides/` de ce site Jekyll MakerSpace (front matter, procédure numérotée, table de dépannage). À utiliser quand l'utilisateur demande un guide « comment faire X » destiné à quelqu'un qui a déjà les bases. Pas pour un pas à pas pédagogique (voir `new-tutorial`), une explication théorique (`new-concept`), une fiche machine ou composant (`new-reference`), ni une page interne à un atelier (`new-workshop-page`).
---

# Nouveau guide pratique

Crée un guide dans `_docs/how-to-guides/`. Un guide pratique répond à « comment faire X » :
il suppose les bases acquises et va droit au résultat.

**Arguments attendus** : `$ARGUMENTS`
Format : `<slug>` (ex. `configurer-wifi-esp32`, `exporter-pcb-kicad`).

## Est-ce le bon genre ?

| Ce que demande l'utilisateur | Le bon skill |
|---|---|
| Tâche réutilisable, lecteur déjà autonome | **`new-how-to`** (ici) |
| Apprentissage guidé du début à la fin | `new-tutorial` |
| « Pourquoi / comment ça marche » | `new-concept` |
| Specs, BOM, fiche machine, logiciel, composant | `new-reference` |
| Page vivant dans un atelier `_workshops/<slug>/` | `new-workshop-page` |

## 1. Chemins

- Fichier : `_docs/how-to-guides/<slug>.md`
- Dossier images : `_docs/how-to-guides/<slug>/` (y créer un `.gitkeep`)

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
type: how-to

title: <Verbe à l'infinitif : "Configurer…", "Exporter…", "Intégrer…">
subtitle: <Complément bref>
description: <1 phrase orientée résultat>
author: Alban Petit

time: 1
difficulty: 2
todo: 10

prerequisites:
  - label: <pré-requis concret>
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
## Contexte

En une ou deux phrases : quand utiliser ce guide et ce que l'utilisateur obtiendra.

## Prérequis

Liste explicite de ce qu'il faut avoir avant de commencer.

## Procédure

### 1. <Première action>

Description concise. Commandes ou captures si nécessaire.

### 2. <Deuxième action>

...

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| ... | ... | ... |
```

## 4. Rappels

- Le titre commence par un verbe à l'infinitif.
- Corps en `##` / `###`, jamais `#`.
- Orienté tâche, pas pédagogique : pas de digression explicative, lier un concept
  existant à la place.
- `difficulty` au moins 2 (le guide suppose des bases).
- Jamais de tiret cadratin `—` dans le contenu rédigé, front matter et paramètres
  d'include inclus (cf. `CLAUDE.md`).
- Une valeur de front matter contenant ` : ` doit être entre guillemets.

## 5. Rendre compte

Afficher le chemin créé et le front matter final pour validation.
