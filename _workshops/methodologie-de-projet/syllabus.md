---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true

title: Syllabus du cours
subtitle: Objectifs, organisation et déroulé des séances
description: Ce que le cours Méthodologie de projet vous apprend, comment il est organisé et ce qui se passe à chaque séance.
author: Adrien Bracq

todo: 70
---

## En bref

| | |
|---|---|
| **Public** | Étudiants en projet, en groupes de TD |
| **Volume** | 7 h : une première séance de 1 h 30, puis environ 5 h 30 surtout en pratique |
| **Format** | Apports courts, puis activités sur **votre** projet et dans le repo de votre équipe |
| **Matériel** | Un PC (personnel ou de la salle), votre compte GitHub, le repo de votre équipe |
| **Évaluation** | Sur l'état final du repo, côté gestion de projet : voir [Évaluation du cours](/workshops/methodologie-de-projet/evaluation/) |

## Objectifs

À la fin du cours, vous saurez :

- **Cadrer un projet** : formuler le besoin et écrire un cahier des charges avec des critères mesurables
- **Organiser une équipe** : répartir les rôles, suivre les tâches avec des issues et des jalons
- **Documenter au fil de l'eau** : tenir un journal de bord, garder photos, vidéos et sources au moment où elles sont produites
- **Tracer ses choix** : écrire les alternatives envisagées et la raison de chaque décision
- **Rendre un projet transmissible** : une documentation qu'une autre équipe peut reprendre sans vous

Le cours porte sur la **gestion** du projet. La technique (mécanique, électronique, code) est évaluée dans le cadre du projet lui-même.

## Organisation

Les séances ont lieu en **groupes de TD**, qui ne correspondent pas forcément aux équipes projet. Les activités sont donc pensées pour ça :

- le travail **individuel** porte sur votre propre projet, en particulier votre journal de bord ;
- les échanges se font en **binômes de projets différents** : un regard extérieur est le meilleur test de clarté pour une documentation ;
- le travail **d'équipe** se fait entre les séances, avec une consigne précise à la fin de chacune.

{% include message.html title="Documentez aussi les séances de méthodologie" message="Une entrée de journal par séance, **y compris** celles de ce cours : ce que vous avez fait, pourquoi, et ce qui reste à faire." status="is-info" icon="fas fa-info-circle" %}

## Déroulé des séances

### Séance 1 : lancer la démarche (1 h 30)

| Partie | Contenu |
|---|---|
| Sans PC (30 min) | Ce qui peut mal tourner dans un projet, les étapes d'un projet, l'évaluation, définir son besoin |
| Avec PC (1 h) | Correction sur un exemple, documenter au fil de l'eau, première entrée de journal, relecture croisée |
| Pour la séance suivante | Besoin et rôles dans le repo, début de la recherche de l'existant |

Support : [slides de la séance 1](/workshops/methodologie-de-projet/slides/introduction-methodologie/).

### Séances suivantes (environ 5 h 30)

Chaque séance suit le même schéma : un apport court, du travail sur votre documentation, puis une relecture croisée.

| Thème | Dans le repo |
|---|---|
| Séance 2 : cahier des charges complet, recherche de l'existant ([slides](/workshops/methodologie-de-projet/slides/seance-2-cahier-des-charges-existant/)) | `objectifs.md`, `etudes.md` |
| Séance 3 : découper la machine en sous-systèmes, organiser le travail avec un GitHub Project ([slides](/workshops/methodologie-de-projet/slides/seance-3-sous-systemes-organisation/)) | `conception/index.md`, `equipe.md`, issues, jalons et Project |
| Séance 4 : choisir les solutions de chaque sous-système, tracer ses choix, documenter la conception ([slides](/workshops/methodologie-de-projet/slides/seance-4-choisir-documenter/)) | `etudes.md`, `conception/` |
| Séance 5 : revue croisée avec la grille d'évaluation | Corrections, plan pour la suite du projet |

{% include message.html title="Déroulé prévisionnel" message="Le découpage des séances suivantes peut évoluer selon l'avancement des projets. Les dates vous seront communiquées en séance." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Entre les séances

- Une entrée de journal **à chaque séance**, projet comme méthodologie
- La consigne d'équipe donnée en fin de séance
- Un repo à jour : commit et push à la fin de chaque session de travail
