# Notes de travail : Atelier « Portfolio de l'ingénieur »

> Fichier de suivi interne, **pas une page du site** (exclu du build via
> `_config.yml`). Sert à reprendre le travail d'une session à l'autre.

Dernière mise à jour : 2026-11-16.

## Objectif

Accompagner les I1 dans la création de leur portfolio : un site personnel
(accueil, qui suis-je + CV, projets, journal de bord, docs, radar de
compétences) qui sert de vitrine et de support à la démarche compétence.
Nom du cours côté thème : « Construis ton site ».

## Dépôts de référence (source de vérité)

- `~/Documents/GitHub/portfolio-theme` : thème Jekyll (`remote_theme`),
  et son site de démo/doc (`_docs/guide-etudiant.md`, `boite-a-outils.md`).
  `MAINTENANCE.md` (non publié) décrit l'architecture, le versionnage et le
  contrat de données.
- `~/Documents/GitHub/portfolio-template` : dépôt « Use this template » des
  étudiants (contenu d'exemple, renvoie au guide du thème).
- Publiés le 2026-11-16, publics, dans l'organisation `Makerspace-Amiens` :
  `github.com/Makerspace-Amiens/portfolio-theme` (tags datés `vAA.MM.JJ-NN`, ex. `v26.11.16-01`,
  Pages sur `main`) et `github.com/Makerspace-Amiens/portfolio-template`
  (« Template repository », sans Pages). L'organisation a un domaine
  personnalisé : la doc du thème est sur
  <https://makerspace-amiens.fr/portfolio-theme/> (l'adresse github.io
  redirige). Les sites étudiants restent sur `pseudo.github.io`.
- Ces deux dépôts sont publics : aucune mention de Claude (ni fichier, ni
  `Co-Authored-By`) ; `CLAUDE.md` y est exclu via `.git/info/exclude`.

Relire ces dépôts avant de rédiger une page : ils sont la référence, pas
ce fichier.

## Décisions actées

- Slug `portfolio-ingenieur`, `kind: project` (le site est le livrable).
- Vouvoiement, comme le reste du site (les guides du thème tutoient).
- Les includes du thème portfolio (`encadre.html`, `icone.html`,
  `chart.html`, `modele3d.html`, `kicanvas.html`, `video.html`) ne sont
  **pas** ceux de ce site : dans les tutoriels, les montrer dans des blocs
  de code entourés de `{% raw %}`, jamais les exécuter.
- **Pages communes avec Méthodologie de projet** : les tutoriels de
  gestion de dépôt de Méthodologie (`creer-repo-template`,
  `publier-son-site` (ex-`modifier-site-github`), `git-github-desktop-vscode`, `construire-site-local`, et la fin de
  `syntaxe-markdown`) sont **enrichis pour servir aux deux ateliers**, sans
  changer leur URL (liens en dur dans les dépôts étudiants) ni leurs titres
  de section. Étapes communes écrites pour les deux cas ; étapes qui
  divergent dans `content-tabs.html` (onglets « Repo de projet » /
  « Portfolio », projet par défaut), onglet choisi d'après `?project=`.
  Le portfolio liste ces URL dans `tutorials:` au lieu d'avoir ses propres
  pages. Différences clés : Pages en « Deploy from a branch » (pas
  d'Actions custom), `Gemfile` à la racine du dépôt, dépôt `pseudo.github.io`.
- Pages sans image tant qu'il n'y a pas de photo réelle et libre (hero de
  l'`index.md` compris).

## Méthode de travail

L'atelier se construit **page par page avec l'utilisateur**, pas en
générant un plan complet d'avance : un premier jeu de squelettes (concepts,
tutoriels, syllabus, évaluation) a été proposé puis retiré le 2026-10-19 à
sa demande. Ne créer une page qu'une fois son contenu discuté.

Matière disponible pour la suite : les 12 parties de
`portfolio-theme/_docs/guide-etudiant.md` et le déroulé ci-dessous.

## Déroulé des séances (matière pour les slides)

Cette année : 4 séances, sans démarche compétence.

Repris du guide enseignant du thème, retiré du site du thème le 2026-11-16
(il était public et visible des étudiants). Idée : en faire les decks de
présentation des séances, dans cet atelier (`layout: slides`, listés en
`special_sections:`). À construire deck par deck avec l'utilisateur.

| Séance | Contenu | Livrable |
|---|---|---|
| 1 | Pourquoi un portfolio ? Démo du site exemple (<https://makerspace-amiens.fr/portfolio-theme/>). Création du site, activation Pages, identité | URL du site déposée sur Moodle |
| 2 | Markdown, « Qui suis-je », CV. Premier article | Page about + CV |
| 3 | Documenter un projet : page projet, médias (graphiques, 3D, KiCad, Mermaid) | 1 projet complet |
| 4 | Docs et journal de bord, liens avec les projets en cours | 1 doc + 2 entrées de journal |
| Suivi | Mise à jour au fil des projets de l'année | Projets et journal à jour avant chaque évaluation |

- Évaluation possible : rôle personnel et recul dans les pages projet,
  régularité du journal de bord, qualité rédactionnelle, respect de la
  propriété intellectuelle. L'esthétique n'est pas un critère (thème commun).
- Collecter les URL : formulaire ou feuille partagée (nom, promo, URL du
  site, URL du dépôt). L'historique des commits montre la régularité.
- Parcours : 1 partie du guide étudiant ≈ 1 tutoriel ; les tutoriels de
  Méthodologie (création de repo, Git, Markdown, édition GitHub, build
  local) se réutilisent avec l'onglet Portfolio.

## Démarche compétence : en attente (depuis le 2026-11-16)

**Hors programme cette année** : elle sera appliquée à partir de l'année
scolaire 2027-2028 (séance dédiée à ajouter au déroulé à ce moment-là).

Le radar de compétences (référentiel, niveaux, justifications, preuves
automatiques) est **mis de côté** tant que son usage n'est pas défini :
retiré du template, de la démo et des guides du thème (thème `v26.11.16-02`,
dont l'accueil n'affiche le bouton « Mes compétences » que si
`_data/competences.yml` existe), et de la présentation de l'atelier.
Le code reste dans le thème, en sommeil. L'état complet est conservé dans
la branche `archive/competences` des deux dépôts (page, données, partie 9
du guide étudiant, section 1.3 du guide enseignant, champs `competences:`).
Ne pas en reparler dans les pages de l'atelier avant que ce soit décidé.

## État

- `index.md` : présentation rédigée, aucune liste de pages pour l'instant.

## Questions ouvertes

- Référentiel de compétences officiel (le thème a un exemple C1 à C6).
- Volume horaire et pondération de l'évaluation.
- Une fois l'atelier rédigé : réduire le guide étudiant du thème à des
  résumés + liens vers ici (comme pour Méthodologie) ? À décider.
- Photo de couverture réelle et libre.
