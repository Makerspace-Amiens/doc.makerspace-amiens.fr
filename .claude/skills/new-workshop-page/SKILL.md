---
name: new-workshop-page
description: Crée une sous-page dans un atelier existant de `_workshops/` de ce site Jekyll MakerSpace (tutoriel, concept, guide ou référence propre à l'atelier), avec le front matter adapté et l'URL à recopier dans l'`index.md` de l'atelier. À utiliser quand l'utilisateur demande une page pour un atelier nommé. Pour une page de documentation générale, utiliser `new-tutorial`, `new-how-to`, `new-concept` ou `new-reference` ; pour créer l'atelier lui-même, `new-workshop`.
---

# Nouvelle sous-page d'atelier

Crée une page dans `_workshops/<slug>/`. Les sous-pages utilisent le même
`layout: documentation` que les docs, mais vivent dans le dossier de l'atelier.

**Arguments attendus** : `$ARGUMENTS`
Format : `<workshop-slug> <type>/<page-slug>` (ex. `puzzle-bot tutorials/detection-aruco`,
`otto-mks concepts/cinematique`).

## Dans l'atelier ou dans `_docs/` ?

Une page ne va dans `_workshops/<slug>/` que si elle n'a de sens que pour cet atelier.
Un contenu réutilisable (une technique, un principe général, une fiche composant) va dans
`_docs/` et se relie depuis l'`index.md` de l'atelier : c'est le cas par défaut. En cas
de doute, préférer `_docs/` et cross-référencer.

## 1. Parser les arguments

- `workshop-slug` : slug de l'atelier existant
- `type` : `tutorials`, `concepts`, `how-to-guides` ou `references`
- `page-slug` : nom du fichier, sans `.md`

## 2. Vérifier l'atelier

`_workshops/<workshop-slug>/index.md` doit exister. Sinon, proposer le skill
`new-workshop` d'abord, sans rien créer.

## 3. Créer

- Fichier : `_workshops/<workshop-slug>/<type>/<page-slug>.md`
- Dossier images : `_workshops/<workshop-slug>/<type>/<page-slug>/` (avec `.gitkeep`)

## 4. Front matter selon le type

**Pas de champ `type:`** sur une sous-page d'atelier : il n'est lu par aucun filtre et
polluerait les listings de `/docs/`. Si l'atelier est en anglais (`lang: en` sur son
`index.md`), poser aussi `lang: en` ici, sinon la barre de progression et la navigation
restent en français.

### `tutorials/`

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

title: <Titre du tutoriel>
subtitle: <Ce que l'utilisateur saura faire>
description: <1 phrase>
author: Alban Petit

time: 1
difficulty: 1
todo: 10
---
```

Corps : un `{% include step-tuto.html %}` par étape, titres au format
`Étape 1 : <action>`.

### `concepts/`

```yaml
---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: <Titre du concept>
subtitle: <Ce que l'utilisateur va comprendre>
description: <1 phrase>
author: Alban Petit

todo: 10
---
```

### Page pointant vers une vidéo externe

```yaml
---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: <Titre>
subtitle: <Sujet>
description: <Description>
external_link: https://www.youtube.com/watch?v=VIDEO_ID

time: 1
difficulty: 1
todo: 100
---
```

Avec dans le corps :

```markdown
<Description courte du contenu.>

{% include youtube.html video="VIDEO_ID" %}

Voir aussi directement sur [YouTube](https://www.youtube.com/watch?v=VIDEO_ID).
```

## 5. Câbler la page dans l'atelier

Une sous-page n'apparaît **pas** toute seule : son URL doit être ajoutée à la liste
correspondante du front matter de `_workshops/<workshop-slug>/index.md`.

```yaml
tutorials:
  - /workshops/<workshop-slug>/tutorials/<page-slug>/
```

L'URL générée par Jekyll est `/workshops/<workshop-slug>/<type>/<page-slug>/` (format
pretty, trailing slash obligatoire : sans lui, la carte ne s'affiche pas).

Proposer d'appliquer directement la modification à l'`index.md`.

## 6. Rappels

- Corps en `##`, jamais `#`.
- Jamais de tiret cadratin `—` dans le contenu rédigé, front matter et paramètres
  d'include inclus (cf. `CLAUDE.md`).
- Une valeur de front matter contenant ` : ` doit être entre guillemets.
- Un deck de slides n'est pas une sous-page ordinaire : `layout: slides`, hors de
  `tutorials:`, listé dans `special_sections:`. Voir `CLAUDE.md`.

## 7. Rendre compte

Afficher le fichier créé, son URL Jekyll attendue et le bloc à recopier dans `index.md`.
