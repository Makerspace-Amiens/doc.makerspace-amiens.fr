# Gabarit : référence `software`

Pour un logiciel ou un outil (`_docs/references/software/<slug>.md`).
Sert aussi de base pour `plans/` et `others/` : retirer alors `manufacturer`.

## Front matter

```yaml
---
layout: documentation
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true

title: <Nom du logiciel>
subtitle: <Rôle en une phrase>
description: <Description courte>
author: Alban Petit

manufacturer:
  - name: <Éditeur>
    link: "https://..."

external_link: https://...   # si la fiche doit rediriger vers le site officiel

todo: 10
---
```

Pas de champ `type` : le filtre de `/docs/` déduit la catégorie du sous-dossier.

## Squelette de contenu

```markdown
## Présentation

Rôle du logiciel, cas d'usage au MakerSpace.

## Installation

Lien de téléchargement, prérequis système.

## Fonctionnalités clés

- Fonctionnalité 1
- Fonctionnalité 2

## Ressources

- [Documentation officielle](https://...)
```
