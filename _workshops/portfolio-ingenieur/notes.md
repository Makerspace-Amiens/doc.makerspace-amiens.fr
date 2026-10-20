# Notes de travail : Atelier « Portfolio de l'ingénieur »

> Fichier de suivi interne, **pas une page du site** (exclu du build via
> `_config.yml`). Sert à reprendre le travail d'une session à l'autre.

Dernière mise à jour : 2026-10-19.

## Objectif

Accompagner les I1 dans la création de leur portfolio : un site personnel
(accueil, qui suis-je + CV, projets, journal de bord, docs, radar de
compétences) qui sert de vitrine et de support à la démarche compétence.
Nom du cours côté thème : « Construis ton site ».

## Dépôts de référence (source de vérité)

- `~/Documents/GitHub/portfolio-theme` : thème Jekyll (`remote_theme`),
  et son site de démo/doc (`_docs/guide-etudiant.md`, `guide-enseignant.md`,
  `boite-a-outils.md`). Son `CLAUDE.md` décrit le contrat de données.
- `~/Documents/GitHub/portfolio-template` : dépôt « Use this template » des
  étudiants (`GUIDE-ETUDIANT.md`, `GUIDE-ENSEIGNANT.md`).
- État au 2026-10-19 : aucun des deux n'est poussé sur GitHub (pas de
  remote, pas de tag `v1.0.0`), nom d'organisation `Makerspace-Amiens`
  « à confirmer ». Les liens GitHub des tutoriels seront à vérifier.

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
`portfolio-theme/_docs/guide-etudiant.md` et le déroulé en 5 séances de
`portfolio-template/GUIDE-ENSEIGNANT.md` §2.

## État

- `index.md` : présentation rédigée, aucune liste de pages pour l'instant.

## Questions ouvertes

- Référentiel de compétences officiel (le thème a un exemple C1 à C6).
- Volume horaire et pondération de l'évaluation.
- Une fois l'atelier rédigé : réduire le guide étudiant du thème à des
  résumés + liens vers ici (comme pour Méthodologie) ? À décider.
- Photo de couverture réelle et libre.
