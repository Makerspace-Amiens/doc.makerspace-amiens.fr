# Gabarit : référence `machines`

Pour un équipement du MakerSpace (`_docs/references/machines/<slug>.md`).
**Seul** gabarit de référence qui porte un champ `type` : `equipment`, lu par la page
`/equipment/`. Sans lui, la machine n'apparaît pas dans le parc.

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
type: equipment

title: <Nom de la machine>
subtitle: <Technologie ou usage principal>
description: <Description pour les cartes>
author: Alban Petit

manufacturer:
  - name: <Fabricant>
    link: "https://..."

working_area: <Zone de travail si applicable>
access_level: 1   # 0 autonomie, 1 encadré, 2 opérateur uniquement

todo: 10
---
```

## Squelette de contenu

```markdown
## Présentation

Type de machine, technologie, cas d'usage au MakerSpace.

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Zone de travail | |
| Matériaux compatibles | |
| ... | ... |

## Utilisation au MakerSpace

Règles d'accès, réservation, consignes de sécurité.

## Ressources

- [Manuel constructeur](https://...)
```

Un modèle 3D s'affiche avec `<model-viewer>` (chargé par `layout: documentation`).
