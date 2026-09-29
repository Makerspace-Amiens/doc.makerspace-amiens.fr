# Gabarit : référence `hardware`

Pour un composant électronique (`_docs/references/hardware/<slug>.md`).

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

title: <Nom du composant>
subtitle: <Description courte>
description: <Description pour les cartes>
author: Alban Petit

manufacturer:
  - name: <Fabricant>
    link: "https://..."

todo: 10
---
```

Pas de champ `type` : le filtre de `/docs/` déduit la catégorie du sous-dossier.

## Squelette de contenu

```markdown
## Description

Fonctionnement du composant, principe physique si pertinent.

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Tension | 5V |
| ... | ... |

## Brochage (Pinout)

Image du pinout et tableau des broches.

## Exemple de câblage

Image ou schéma. Un schéma KiCad s'affiche avec `<kicanvas-schematic>`.
```
