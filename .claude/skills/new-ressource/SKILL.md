---
name: new-ressource
description: Crée une nouvelle ressource dans `_ressources/` de ce site Jekyll MakerSpace : fiche de lien, d'outil, de composant ou de revendeur, classée par catégorie et affichée sur la page /ressources/. À utiliser quand l'utilisateur demande d'ajouter une ressource, un lien utile, une fiche revendeur, une bibliothèque ou un outil externe. Pas pour une fiche technique de `_docs/references/` (voir `new-reference`), ni pour du contenu rédigé (`new-tutorial`, `new-how-to`, `new-concept`).
---

# Nouvelle ressource

Crée une fiche dans `_ressources/`. Les ressources sont des fiches de liens, d'outils ou
de composants, organisées par catégorie (microcontrôleurs, outils, revendeurs,
bibliothèques). Elles apparaissent sur `/ressources/`, filtrées par catégorie.

**Arguments attendus** : `$ARGUMENTS`
Format : `<categorie>/<slug>` (ex. `microcontrollers/esp32-s3`, `tools/oscilloscope`).

## `_ressources/` ou `_docs/references/` ?

Les deux hébergent des fiches, la frontière est la vocation :

| Contenu | Où |
|---|---|
| Lien, outil externe, revendeur, bibliothèque, bon plan | `_ressources/` (**ici**) |
| Fiche technique interne : machine du parc, composant, logiciel utilisé en atelier | `_docs/references/` (`new-reference`) |

## 1. Choisir la catégorie

Les sous-dossiers de `_ressources/` définissent les boutons de filtre de la page. Lister
l'existant avant de créer :

```bash
ls _ressources/
```

Réutiliser une catégorie existante ; n'en créer une nouvelle que si aucune ne convient
(nom en kebab-case).

## 2. Chemins

- Fichier : `_ressources/<categorie>/<slug>.md`
- Dossier images : `_ressources/<categorie>/<slug>/` (y créer un `.gitkeep`)

## 3. Front matter

```yaml
---
layout: documentation
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true

title: <Nom de la ressource>
subtitle: <Description courte>
description: <1 phrase>
author: Alban Petit

manufacturer:
  - name: <Fabricant ou éditeur si applicable>
    link: "https://..."

external_link: https://...   # si la carte doit pointer vers la ressource externe

todo: 10
---
```

## 4. Corps minimal

```markdown
## Présentation

Description de la ressource et de son utilité au MakerSpace.

## Caractéristiques

- Point clé 1
- Point clé 2

## Liens utiles

- [Site officiel](https://...)
- [Documentation](https://...)
```

## 5. Rappels

- **Pas de champ `type`** dans les ressources : le filtre de `/ressources/` repose sur le
  sous-dossier (`path_prefix`), pas sur le type.
- `external_link` fait pointer le clic sur la carte directement vers l'URL externe : ne
  pas mettre de contenu utile dans une page qui redirige.
- Corps en `##`, jamais `#`.
- Jamais de tiret cadratin `—` dans le contenu rédigé, front matter inclus
  (cf. `CLAUDE.md`).
- Une valeur de front matter contenant ` : ` doit être entre guillemets.

## 6. Rendre compte

Afficher le chemin créé, la catégorie utilisée et le front matter final.
