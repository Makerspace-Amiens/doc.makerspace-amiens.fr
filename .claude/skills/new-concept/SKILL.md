---
name: new-concept
description: Crée une nouvelle page de type Concept dans `_docs/concepts/` de ce site Jekyll MakerSpace (front matter, squelette explicatif, Mermaid et KaTeX). À utiliser quand l'utilisateur demande d'expliquer un principe, une théorie ou un fonctionnement (« pourquoi », « comment ça marche »). Pas pour une procédure : voir `new-tutorial` (pas à pas) ou `new-how-to` (tâche), ni pour une fiche machine ou composant (`new-reference`), ni pour une page interne à un atelier (`new-workshop-page`).
---

# Nouveau concept

Crée une page dans `_docs/concepts/`. Un concept explique un principe, une théorie ou un
fonctionnement : il répond à « pourquoi » et « comment ça marche », jamais à
« comment faire ».

**Arguments attendus** : `$ARGUMENTS`
Format : `<slug>` (ex. `communication-i2c`, `machine-etats-finis`).

## Est-ce le bon genre ?

| Ce que demande l'utilisateur | Le bon skill |
|---|---|
| Principe explicatif, théorie, vocabulaire | **`new-concept`** (ici) |
| Apprentissage guidé du début à la fin | `new-tutorial` |
| « Comment faire X » pour un lecteur autonome | `new-how-to` |
| Specs, BOM, fiche machine, logiciel, composant | `new-reference` |
| Page vivant dans un atelier `_workshops/<slug>/` | `new-workshop-page` |

Un concept se relie : vérifier s'il existe déjà des tutoriels ou ateliers qui devraient
le citer dans leurs listes `concepts:`.

## 1. Chemins

- Fichier : `_docs/concepts/<slug>.md`
- Dossier images : `_docs/concepts/<slug>/` (y créer un `.gitkeep`)

## 2. Front matter

```yaml
---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true
type: concept

title: <Titre du concept>
subtitle: <Accroche : ce que l'utilisateur va comprendre>
description: <1 phrase de résumé>
author: Alban Petit

time: 1
difficulty: 1
todo: 10

prerequisites:
  - label: Aucun pré-requis nécessaire
    link: ""
---
```

## 3. Squelette de contenu

````markdown
## Introduction

Présente le contexte et l'intérêt du concept.

## Principe de fonctionnement

Explique le principe théorique. Un schéma Mermaid si utile :

```mermaid!
flowchart LR
  A([Entrée]) --> B([Traitement]) --> C([Sortie])
```

## Caractéristiques clés

Liste à puces ou tableau des points importants à retenir.

## Exemples concrets

Illustre avec des cas du MakerSpace.

## Pour aller plus loin

- [Lien ressource externe](https://...)
````

## 4. Rappels

- Corps en `##`, jamais `#`.
- Formules mathématiques avec `$ ... $` (inline) ou `$$ ... $$` (bloc) : KaTeX est activé
  sur `layout: documentation`.
- Diagrammes en blocs ` ```mermaid! ` : Mermaid est activé sur le même layout.
- `time` et `difficulty` sont facultatifs pour un concept purement théorique : les
  retirer plutôt que de mettre une valeur arbitraire.
- Jamais de tiret cadratin `—` dans le contenu rédigé, front matter et paramètres
  d'include inclus (cf. `CLAUDE.md`).
- Une valeur de front matter contenant ` : ` doit être entre guillemets.

## 5. Rendre compte

Afficher le chemin créé et le front matter final pour validation.
