# Contribuer à la documentation du MakerSpace

## Prise en main

### Prérequis

- Ruby + Bundler
- Node.js + npm

### Installation

```bash
make install   # installe les dépendances Ruby et Node
```

### Lancer le site en local

```bash
make serve     # Jekyll + live reload sur http://localhost:4000
```

Pour utiliser le CMS Decap en local (éditeur visuel) :

```bash
make dev       # lance Jekyll et decap-server en parallèle
```

Le CMS est alors accessible sur `http://localhost:4000/admin`.

## Structure du contenu

| Dossier | Rôle |
|---|---|
| `_docs/concepts/` | Documents conceptuels (théorie, principes) |
| `_docs/how-to-guides/` | Guides pratiques orientés tâche |
| `_docs/tutorials/` | Tutoriels pas à pas |
| `_docs/references/` | Fiches de référence (machines, hardware, logiciels, plans) |
| `_workshops/` | Ateliers (collections avec sous-pages) |
| `_ressources/` | Ressources diverses |
| `assets/uploads/` | Images et fichiers uploadés |

## Ajouter ou modifier du contenu

### Via le CMS (recommandé)

Ouvrir `http://localhost:4000/admin` après `make dev`. Le CMS génère automatiquement le frontmatter correct.

### Via un éditeur de texte

Chaque fichier Markdown commence par un frontmatter YAML. Exemple minimal :

```yaml
---
title: Titre du document
subtitle: Sous-titre optionnel
layout: documentation
author: Prénom Nom
tags: impression-3d, FDM
doc_header: true
component_toc: true
---

Contenu en Markdown...
```

Champs courants :

| Champ | Type | Description |
| --- | --- | --- |
| `title` | string | Titre affiché |
| `author` | string | Auteur du document |
| `tags` | string | Mots-clés séparés par des virgules |
| `difficulty` | int 0–5 | Niveau de difficulté |
| `time` | int | Durée estimée (minutes) |
| `todo` | int 0–100 | Avancement du document (%) |
| `prerequisites` | list | Prérequis (`label` + `link`) |
| `softwares` | list | Logiciels nécessaires |
| `hardwares` | list | Matériel nécessaire |

Les images propres à un document se placent dans un sous-dossier du même nom que le fichier `.md`.

## Convention de commits

Le dépôt suit [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) :

```text
type(scope): description courte
```

### Types

| Type | Usage |
|------|-------|
| `feat` | Nouveau contenu ou nouvelle fonctionnalité |
| `fix` | Correction (contenu erroné, lien cassé, mise en page) |
| `refactor` | Réorganisation sans changement de fond |
| `chore` | Dépendances, tooling, configuration |
| `style` | Mise en forme, renommage — sans changement de contenu |
| `build` | Système de build ou dépendances |
| `ci` | Pipelines CI/CD |
| `doc` | Méta-documentation (README, CONTRIBUTING…) |

### Scopes

| Scope | Zone |
|-------|-----|
| `docs` | Contenu dans `_docs/` |
| `workshop` | Ateliers dans `_workshops/` |
| `ressource` | Ressources dans `_ressources/` |
| `cms` | Configuration Decap (`admin/config.yml`) |
| `theme` | Layouts, includes, assets CSS/JS |
| `ci` | GitHub Actions, Netlify |
| `config` | `_config.yml` |

### Exemples

```text
feat(docs): ajouter le tutoriel découpe laser Ruida
fix(workshop): corriger les prérequis de l'atelier Otto
refactor(ressource): reorganiser les fiches composants
chore(ci): mettre à jour l'action de déploiement Netlify
style(theme): ajuster le padding des cartes d'atelier
```

## Ouvrir une Pull Request

1. Créer une branche depuis `main` : `git checkout -b feat/mon-contenu`
2. Pousser la branche et ouvrir une PR sur GitHub
3. Décrire brièvement ce qui est ajouté ou corrigé
4. Lier l'issue associée si elle existe

Les contributions peuvent être rédigées en français ou en anglais.
