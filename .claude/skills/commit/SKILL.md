---
name: commit
description: Analyse les changements en cours et crée un commit Git suivant la spécification Conventional Commits 1.0.0 et les conventions de ce dépôt, après avoir vérifié la cohérence des ateliers et la concordance des traductions FR/EN. À utiliser quand l'utilisateur demande de committer, de créer un commit, de rédiger un message de commit, ou de découper des changements en plusieurs commits.
---

# Commit

Crée un ou plusieurs commits Git pour les changements en cours, en respectant
[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) et les
conventions de ce dépôt (voir `CONTRIBUTING.md` et `CLAUDE.md`).

**Arguments optionnels** : `$ARGUMENTS`
S'ils sont fournis, les utiliser comme indication de contexte ou de scope
(ex : `docs`, `workshop puzzle-bot`, `navbar fix`).

## 1. Inspecter l'état Git

Lancer ces commandes en parallèle :

- `git status --short` : fichiers modifiés/ajoutés/supprimés
- `git diff --stat HEAD` : résumé des changements
- `git diff HEAD` : détail des changements (pour comprendre le « pourquoi »)
- `git log --oneline -15` : vérifier le style des commits récents

## 1 bis. Vérifier la cohérence de l'atelier

À faire **avant de committer** dès que les changements touchent un atelier : un fichier de
`_workshops/<slug>/`, ou une page de `_docs/` citée par l'`index.md` d'un atelier (la
retrouver avec `grep -rl "<url de la page>" _workshops/*/index.md`). Un atelier est un
ensemble : index, syllabus, évaluation, concepts, tutoriels, slides et pages de `_docs/`
qu'il référence doivent dire la même chose.

**a. Liens et pages** : lancer le script, pour chaque atelier touché :

```bash
python3 .claude/skills/commit/scripts/check-workshop.py <slug>
```

Il signale les liens internes morts (listes de l'index, `special_sections`, liens des pages
et des slides, `doc-link`), les fichiers statiques absents et les pages de l'atelier citées
nulle part. Un lien mort bloque le commit. Une page orpheline peut être voulue (deck de
démo, page de travail) : la signaler, sans bloquer.

**b. Valeurs qui ont changé** : pour chaque fait modifié par le diff (broche, constante,
durée, nom de fonction ou de variable, bibliothèque, seuil, ordre des séances, titre de
page), chercher **l'ancienne valeur** dans tout l'atelier et dans les pages de `_docs/`
qu'il référence :

```bash
grep -rn "<ancienne valeur>" _workshops/<slug>/ <pages _docs citées>
```

Toute occurrence restante est une divergence.

**c. Notions des cours** : si un deck de slides change, chaque notion ajoutée doit être
expliquée dans un concept ou un tutoriel de l'atelier (le `doc-link` de la slide pointe vers
une page qui en parle vraiment), et inversement une notion retirée d'un cours ne doit pas
rester exigée par l'évaluation ou le syllabus. Le code des tutoriels, des concepts et des
slides utilise les mêmes noms et les mêmes valeurs.

**d. Sources de vérité propres à un atelier** (voir `CLAUDE.md`) : firmware de référence
pour `microcontroleur`, repo `template-project` pour `methodologie-de-projet`. Un
changement qui s'en écarte est une divergence.

**Que faire d'une divergence** : ne pas l'étendre en silence au commit. La présenter à
l'utilisateur (fichier:ligne, ce qui diverge, correction proposée) et attendre son accord
avant de corriger ; une fois validée, la correction peut rejoindre le commit si elle porte
sur le même sujet, sinon un commit à part. Si rien ne diverge, l'indiquer en une ligne dans
le compte rendu du commit.

## 1 ter. Vérifier la concordance des traductions

Le site est bilingue (voir « Site bilingue » dans `CLAUDE.md`) : la traduction anglaise de
`<nom>.md` est le fichier frère `<nom>.en.md`. À faire **avant chaque commit** qui touche
une page (`.md`), `_data/i18n.yml`, un menu (`_data/navigation.yml`,
`_data/footer_navigation.yml` et leurs versions `_data/en/`), un layout ou un include :

```bash
python3 .claude/skills/commit/scripts/check-translations.py
```

Le script compare les changements en cours (indexés ou non) à `HEAD` ; `--base <réf>` pour
toute une branche (ex. `--base main`), `--all` pour auditer tout le dépôt.

**ERREUR** (exit 1, bloque le commit tant qu'elle n'est pas corrigée ou explicitement
acceptée par l'utilisateur) :

- traduction orpheline : page française supprimée ou renommée alors que `<nom>.en.md`
  existe. Renommer ou supprimer la traduction avec elle (`git mv`), sinon elle deviendrait
  une page seulement anglaise ;
- `lang: en` absent, ou `permalink` de la traduction différent de l'URL française ;
- front matter divergent sur un champ non traduisible (layout, type, kind, images, durée,
  difficulté, listes d'URL d'un atelier, `link` des prérequis/logiciels/matériels...) :
  reporter la nouvelle valeur dans l'autre langue ;
- `_data/i18n.yml` : clé présente en `fr` et pas en `en` (ou l'inverse), ou valeur vide ;
- menus français et anglais qui n'ont plus les mêmes liens dans le même ordre.

**À VÉRIFIER** (signalé, ne bloque pas) :

- **à traduire** : la page française a changé, pas sa traduction (ou l'inverse). Lire le
  diff français (`git diff HEAD -- <nom>.md`), puis la traduction, et vérifier que chaque
  changement de fond y est reporté : étapes, valeurs (broches, constantes, durées,
  commandes, URL), blocs de code, images. Une coquille ou une reformulation française
  n'appelle pas de mise à jour ;
- **nouvelle traduction** : vérifier qu'elle couvre toute la page française (aucune étape
  omise) et reprend les mêmes valeurs ;
- **structure** : titres, includes, images ou blocs de code différents entre les deux
  langues. Souvent le symptôme d'un « à traduire » ;
- **libellé en dur** : texte ajouté dans un layout ou un include. Le passer par
  `_data/i18n.yml`, avec les deux clés `fr` et `en`.

Une page française **sans** traduction n'est jamais signalée : elle est servie en français
sous `/en/`, avec un bandeau.

**Que faire d'un écart** : comme pour l'atelier (étape 1 bis), le présenter à l'utilisateur
(fichier, écart, correction proposée : texte anglais à ajouter ou à modifier) et attendre
son accord. Une traduction mise à jour rejoint le commit de la page française (même sujet) ;
si l'utilisateur préfère traduire plus tard, committer quand même et l'indiquer dans le
compte rendu (« traduction de X à mettre à jour »). Si tout concorde, l'indiquer en une
ligne dans le compte rendu.

## 2. Structure du message

La spécification impose cette structure (détail complet dans
[references/conventional-commits.md](references/conventional-commits.md)) :

```text
<type>[scope optionnel][!]: <description>

[corps optionnel]

[footer(s) optionnel(s)]
```

Règles non négociables de la spec :

- le type est un nom, suivi du scope entre parenthèses (optionnel), d'un `!` (optionnel),
  puis un **deux-points suivi d'une espace**, obligatoire ;
- la description suit immédiatement ce deux-points ;
- une **ligne vide** sépare la description du corps, et le corps des footers ;
- un changement cassant se signale par `!` avant les deux-points et/ou un footer
  `BREAKING CHANGE: <description>` (`BREAKING CHANGE` toujours en majuscules).

## 3. Choisir le type

| Type | Quand l'utiliser |
|---|---|
| `feat` | Nouveau contenu, nouvelle page, nouvelle fonctionnalité |
| `fix` | Correction d'une erreur (contenu erroné, lien cassé, bug CSS/JS) |
| `refactor` | Réorganisation sans changement de fond (déplacer des fichiers, renommer) |
| `chore` | Configuration, tooling, dépendances, fichiers `.json`/`.yml` de config |
| `style` | CSS, mise en forme, renommage sans impact fonctionnel |
| `docs` | Méta-documentation (CLAUDE.md, CONTRIBUTING.md, README) |
| `build` | Système de build, Gemfile, Makefile |
| `ci` | GitHub Actions, pipelines, Netlify |

`feat` et `fix` ont un sens imposé par la spec (ajout de fonctionnalité / correction de
bug) : ne pas les détourner. Les autres types sont des conventions propres au dépôt.

## 4. Choisir le scope

| Scope | Zone concernée |
|---|---|
| `docs` | Contenu dans `_docs/` |
| `workshop` ou `workshop/<slug>` | Ateliers dans `_workshops/` |
| `ressource` | Ressources dans `_ressources/` |
| `theme` | Layouts, includes, assets CSS/JS (`_layouts/`, `_includes/`, `assets/`) |
| `nav` | Navigation, header, navbar |
| `config` | `_config.yml`, `_data/` |
| `cms` | Configuration Decap (`admin/`) |
| `ci` | GitHub Actions, déploiement |
| `meta` | CLAUDE.md, CONTRIBUTING.md |

Un seul atelier touché → `workshop/<slug>` (ex : `workshop/puzzle-bot`).
Plusieurs zones touchées → choisir la zone principale.

## 5. Rédiger la description

- En **anglais**, à l'impératif présent (« add », « fix », « move » ; jamais « added », « fixes »).
- Courte (≤ 72 caractères), factuelle, centrée sur le **quoi**.
- Minuscule à l'initiale, pas de point final.
- Jamais de tiret cadratin `—` (règle projet, cf. `CLAUDE.md`).

## 6. Ajouter un corps si nécessaire

Dès que plusieurs changements distincts sont regroupés, ou que le « pourquoi » n'est pas
évident depuis la description :

```text
type(scope): description courte

- Détail changement 1
- Détail changement 2
```

Footers utiles (token en `Kebab-Case`, séparateur deux-points + espace, ou espace + `#`) :

```text
Refs: #42
Closes #17
BREAKING CHANGE: le champ `type` n'accepte plus que cinq valeurs
```

## 7. Exemples de la convention en vigueur

Tirés du log réel de ce dépôt :

```text
feat(docs): add serial port and plotter tutorial
fix(navbar): remove inset shadow on search input to restore white background
feat(workshop/puzzle-bot): adapt project page to project-home format and wire up resources
fix(nav): generate workshops dropdown dynamically instead of a stale list
chore(docs): fix all markdownlint errors across the project
feat(docs): add mermaid.js with a theme matching the site palette
docs(meta): rewrite CLAUDE.md to reflect current site architecture
refactor(docs): migrate capteurs tutorial to general concepts
feat(workshop/microcontroleur): add the three lecture slide decks
```

## 8. Créer le commit

1. `git add` sur les fichiers pertinents, puis `git commit -m "..."`.
2. Ne **jamais** faire `git add .` ou `git add -A` sans avoir vérifié qu'aucun fichier
   sensible ou temporaire n'est inclus (`.env`, clés, `_site/`, `.jekyll-cache/`).
3. Si les changements couvrent plusieurs sujets indépendants, proposer un découpage en
   plusieurs commits (un sujet = un commit) avant de committer.
4. **Ne pas ajouter** de ligne `Co-Authored-By` ni de mention d'outil dans le message.
5. Si le dépôt est sur `main` et que l'utilisateur travaille sur une contribution destinée
   à une PR, proposer une branche `type/sujet` (cf. `CONTRIBUTING.md`).
