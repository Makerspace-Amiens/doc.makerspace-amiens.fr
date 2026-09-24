# Notes de travail : Atelier "Méthodologie de projet"

> Fichier de suivi interne, **pas une page du site** (exclu explicitement du
> build via `_config.yml`, même si techniquement Jekyll copierait quand même
> un fichier sans front matter placé dans une collection). Sert à reprendre
> le travail d'une session à l'autre. À supprimer une fois l'atelier
> terminé, ou à garder comme journal.

Dernière mise à jour : 2026-09-24.

## Objectif de l'atelier

Apprendre aux étudiants la méthodologie complète d'un projet, au sens
large : gestion humaine et technique, documentation, structuration, et
présentation des sous-systèmes techniques (carte électronique, mécanique,
logiciel...). Pas seulement "comment utiliser Git".

S'appuie sur le repo template `https://github.com/Makerspace-Amiens/template-project`
(site Jekyll thème "Just the Docs", séparé du thème `bulma-clean-theme` de ce
site-ci).

## Décisions actées

- **Titre** : Méthodologie de projet ; **slug** : `methodologie-de-projet`
- **project_tags** : Gestion de projet, Documentation, Git & GitHub
- **description** : "Apprendre à cadrer, documenter et gérer un projet
  de A à Z : du repo GitHub à la présentation finale, en passant par le
  travail en équipe."
- **subtitle** : De l'idée au projet transmissible
- **hero.jpg** : placeholder générique du repo (`assets/img/placeholder.png`)
  copié tel quel (**à remplacer par un vrai visuel plus tard**).

### Décision architecturale importante

Le workshop sur `makerspace-doc` devient la **source canonique** pour tout
le contenu méthodo/outils (Git, GitHub, Markdown, édition Jekyll...). Le
contenu actuel de `template-project/docs/premiers-pas/` (intro Git/GitHub/
VSCode, cheatsheet Markdown, éditer le site basique/avancé) doit être migré
et enrichi ici. Le repo `template-project` sera ensuite réduit à des résumés
et des liens vers cette doc.

**Modifier `template-project` est une tâche séparée, pas commencée** : autre
repo GitHub, à faire quand le workshop sera assez avancé pour savoir vers
quelles URLs pointer.

### Convention d'écriture pour toutes les pages de cet atelier

- Toujours des **exemples concrets ancrés MakerSpace** (vrai extrait de
  commit, vrai README, vraie issue...), jamais abstraits.
- Systématiser les blocs **"à faire ✅ / à éviter ❌"** :
  - `message.html` (`is-success` / `is-danger`) pour des blocs juxtaposés
  - `content-tabs.html` pour comparer côte à côte plusieurs exemples (bon
    README vs mauvais, ou 3-4 onglets thématiques) : **ne jamais nommer un
    include `tabs.html`**, ça entre en collision avec le `tabs.html` interne
    du thème `bulma-clean-theme` (navigation par `page.tabs`, inclus sur
    toutes les pages via `default.html`/`collection.html`) et l'écrase
    silencieusement. Style de la carte à onglets : voir section "Onglets"
    dans `assets/css/_documentation.scss`.
  - `image-row.html` pour des captures avant/après (arborescence propre vs
    en vrac)
  - `step-tuto.html` pour tout ce qui est procédural (pas de texte continu)
- **Vérifier toute norme citée avant publication** (recherche web) : les
  normes AFNOR sont révisées/remplacées régulièrement. Ex déjà corrigé :
  NF X50-151 (analyse fonctionnelle) est annulée depuis 2013, remplacée par
  NF EN 16271 : ne pas réutiliser l'ancienne référence.
- **Chaque page concept se termine par une section "## Exercice"** :
  2-4 actions concrètes à appliquer immédiatement sur le projet réel de
  l'équipe (pas un QCM théorique). Déjà fait sur `definir-son-besoin.md`.
- **Lien vers le tutoriel correspondant en fin de page concept**, quand ce
  tutoriel existe déjà : pour que l'étudiant applique tout de suite, puis
  revienne. Comme aucun tutoriel n'est encore écrit, **ne pas créer de lien
  cassé** : poser le lien seulement une fois le tutoriel cible écrit
  (revenir sur les pages concepts déjà publiées à ce moment-là).
  Correspondances prévues (à confirmer/ajuster au fil de l'eau) :
  - Cycle de vie d'un projet → pas de tuto dédié (page de cadrage)
  - Documenter au fil de l'eau → **les deux** : "Créer son repo depuis le
    template et le cloner" (#1, donne le dossier `docs/`) et "Tenir un
    journal de bord / compte-rendu" (#8, la pratique concrète du
    jour-le-jour), confirmé avec l'utilisateur
  - Définir son besoin → "Créer son repo depuis le template" (#1, c'est
    là que vit `docs/objectifs.md`)
  - Rechercher l'existant → pas de tuto dédié pour l'instant
  - Constituer et organiser son équipe → "Gérer son projet avec GitHub"
    (#5, répartition des tâches via Issues/Projects)
  - Communiquer en équipe → "Tenir un journal de bord / compte-rendu" (#8)
  - Tracer ses choix techniques → aucun tuto dédié pour l'instant

## Plan de contenu (11 concepts + 17 tutoriels)

### Concepts (`concepts/`, dans l'ordre)

Ordre revu le 2026-08-19 : le cycle de vie passe en #1 (vue d'ensemble
avant de zoomer sur la première étape) ; "documenter au fil de l'eau" passe
en #2 (juste après la vue d'ensemble, pour infuser toutes les étapes
suivantes plutôt qu'arriver après coup) ; nouveau concept "Rechercher
l'existant" ajouté en #4 (étape réelle entre le cahier des charges et la
conception, absente du plan initial).

1. ✅ **Cycle de vie d'un projet** : écrit (`concepts/cycle-de-vie-projet.md`).
   Sert de carte d'ensemble : mentionne le cycle en V (contexte école
   d'ingénieur) puis une version simplifiée en boucle propre à l'atelier.
   Lien vers "Définir son besoin" posé (page existante).
2. ✅ **Documenter au fil de l'eau** : écrit
   (`concepts/documenter-au-fil-de-leau.md`). Mise en avant avec
   `message.html is-danger` en tête de page. Contient l'exemple
   "deux équipes" (doc à la fin vs au fil de l'eau) et un exemple concret
   d'entrée de journal de bord.
3. ✅ **Définir son besoin et son cahier des charges** : écrit
   (`concepts/definir-son-besoin.md`). Attention : cite la norme
   NF EN 16271 (l'ancienne NF X50-151 est annulée depuis 2013).
4. ✅ **Rechercher l'existant et étudier la faisabilité** : écrit
   (`concepts/rechercher-existant-faisabilite.md`). Contient : recherche
   de l'existant, recherche documentaire (source fiable vs non fiable en
   tabs, lien vers "documenter au fil de l'eau"), pré-étude de faisabilité
   (exemple robot de tri : test capteur couleur), tableau comparatif type
   pour `docs/etudes.md` du template.
5. ✅ **Constituer et organiser son équipe** : écrit
   (`concepts/constituer-organiser-equipe.md`). Compétences + envies,
   risque du silo (lien vers "documenter au fil de l'eau"), tableau
   rôles/responsable/backup, comment trancher un désaccord.
6. ✅ **Communiquer en équipe** : écrit
   (`concepts/communiquer-en-equipe.md`). Points de synchro courts,
   comparatif vague/précis pour communiquer un blocage, decisions orales →
   écrites (lien vers "documenter au fil de l'eau"), communication externe
   (référent/jury).
7. ✅ **Gérer le temps et les jalons** : écrit
   (`concepts/gerer-temps-jalons.md`). Délais externes à identifier tôt,
   tableau de jalons vérifiables (reprend les critères de réussite du CdC),
   marge de sécurité avant deadline.
8. ✅ **Prototyper et itérer** : écrit (`concepts/prototyper-iterer.md`).
   Boucle concevoir/fabriquer/tester en mermaid, comparatif V1 moche vs V1
   parfaite (suite exemple capteur couleur du concept "Rechercher
   l'existant"), échec = information, quand s'arrêter (critères CdC +
   jalons).
9. ✅ **Tracer ses choix techniques** : écrit
   (`concepts/tracer-choix-techniques.md`). Diagramme FAST en mermaid
   (livre la promesse faite dans "Définir son besoin", lien croisé posé
   dans les deux sens), format d'arbitrage à 4 questions, vit dans
   `etudes.md` du template.
10. **Structurer un projet (arborescence)** : **EN ATTENTE**, pas encore
    décidée. L'utilisateur ne sait pas encore comment trancher ; à revisiter
    dans une session dédiée, possiblement en croisant avec de vrais projets
    étudiants. Piste évoquée puis mise de côté : `project/{hardware,
    mechanical, software, assets}`. Volontairement pas écrit : les autres
    concepts évitent d'en dépendre.
11. ✅ **Rendre son projet transmissible** : écrit
    (`concepts/rendre-projet-transmissible.md`). Test de l'étranger total,
    critères concrets (README, doc à jour, choix tracés, limites connues,
    licence), comparatif README minimal vs transmissible.

### Tutoriels (`tutorials/`, dans l'ordre, **à jour au 2026-08-20**, voir `index.md` pour la source de vérité)

1. Créer son repo depuis le template et le cloner
2. Git, GitHub Desktop et VSCode
3. Syntaxe Markdown
4. Rédiger un README de projet efficace
5. Gérer son projet avec GitHub : Issues, Projects, répartition des tâches
6. Modifier son site Jekyll depuis l'interface GitHub *(inclut désormais
   "Activer la publication" : Settings > Pages > Source GitHub Actions,
   carte About, Social preview, ajouté le 2026-08-20)*
7. Construire son site Jekyll en local
8. Tenir un journal de bord / compte-rendu *(placé après le setup complet
   du repo, décision utilisateur du 2026-08-20, deux réordonnancements :
   d'abord après "Modifier son site", puis après "Construire en local"
   aussi)*
9. Documenter une carte électronique
10. Documenter un système mécanique
11. Documenter son code / firmware
12. Documenter l'assemblage / le montage
13. Documenter les tests et résultats
14. Créer le poster et la vidéo de présentation
15. Checklist de clôture de projet

*(Les anciens #6/#7 "Utiliser les Pull Requests" / "Résoudre un conflit
Git" ont été fusionnés en un guide pratique séparé, voir plus haut,
d'où la renumérotation.)*

## État d'avancement

- [x] Scaffold créé : `_workshops/methodologie-de-projet/index.md` (front
      matter + intro rédigée), `hero.jpg` (placeholder), `tutorials/.gitkeep`
- [x] Build Jekyll vérifié en local (voir section environnement ci-dessous)
      : RÉSOLU
- [x] **9 des 10 concepts non bloqués écrits** (tous sauf "Structurer un
      projet", volontairement en attente) : cycle de vie, documenter au fil
      de l'eau, définir son besoin, rechercher l'existant, constituer
      l'équipe, communiquer en équipe, gérer le temps, prototyper/itérer,
      tracer ses choix techniques, rendre transmissible. Chacun a été
      rebuild-vérifié individuellement (titre, tabs, tables, mermaid,
      liens croisés). Liste `concepts:` de `index.md` à jour, dans l'ordre.
- [x] **Les 17 tutoriels sont écrits** (2026-08-19, en autonomie pendant
      une absence longue de l'utilisateur : "fait tout ce que tu peux",
      "vérifie la cohérence à chaque fois") :
      1. `creer-repo-template.md`
      2. `git-github-desktop-vscode.md`
      3. `syntaxe-markdown.md`
      4. `readme-efficace.md`
      5. `gerer-projet-github.md`
      6. `pull-requests-relecture.md`
      7. `resoudre-conflit-git.md`
      8. `journal-de-bord.md`
      9. `modifier-site-github.md`
      10. `construire-site-local.md` : enrichi avec les vraies galères
          rencontrées **dans cette session même** (Flatpak VSCode,
          bundler sans droits root, PATH du gem bin dir) : contenu plus
          solide qu'un simple portage du template.
      11. `documenter-carte-electronique.md` : utilise `kicanvas-embed`
      12. `documenter-systeme-mecanique.md` : utilise `3d-model.html`
      13. `documenter-code-firmware.md`
      14. `documenter-assemblage-montage.md`
      15. `documenter-tests-resultats.md`
      16. `poster-video-presentation.md`
      17. `checklist-cloture-projet.md` : page de synthèse, relie presque
          tous les concepts et tutoriels précédents

      Chacun rebuild-vérifié individuellement. **Vérification finale
      globale faite** : les 29 liens internes croisés de tout l'atelier
      (concepts + tutoriels + guide PI) résolvent tous correctement, zéro
      lien cassé (script de contrôle systématique, voir historique de
      session). Liens croisés posés rétroactivement là où les cibles
      existent maintenant : `constituer-organiser-equipe.md` →
      `gerer-projet-github`, `documenter-au-fil-de-leau.md` →
      `journal-de-bord` + `creer-repo-template`, `communiquer-en-equipe.md`
      → `journal-de-bord`.

      **Limite importante, non résolue** : aucun outil de capture d'écran
      ni navigateur fonctionnel dans cet environnement (vérifié : pas de
      scrot/gnome-screenshot/import, Firefox cassé en sandbox snap, pas de
      Chromium, pas de `gh` CLI). Impossible de produire de vraies
      captures. Choix pris : ne pas créer de vrais repos/issues/PR sur
      GitHub (action difficile à annuler, pas fait en l'absence de
      l'utilisateur) ; chaque tutoriel qui touche à une interface décrit
      précisément les libellés de boutons attendus, avec un
      `message.html is-info` en tête signalant l'absence de capture.
      **À faire au retour de l'utilisateur** : ajouter les vraies captures
      d'écran, en particulier sur #1, #5, #6, #7, #9 (interface GitHub) et
      #10 (terminal).
- [ ] Migration du contenu `template-project/docs/premiers-pas/` : pas
      commencée
- [ ] Décision sur l'arborescence `project/` : en attente
- [ ] **Relecture humaine des 17 tutoriels** : pas encore faite (même
      remarque que pour les concepts ci-dessous : écrit en l'absence de
      l'utilisateur, vérifié techniquement mais pas sur le fond).
- [ ] **Relecture humaine des 9 pages concepts** : pas encore faite. Écrit
      en l'absence de l'utilisateur (parti "un moment", cf. consigne du
      2026-08-19 : "avance pendant que je ne suis pas là, on regarde tout
      ça après"). Tout est vérifié techniquement (build, liens, rendu) mais
      pas relu sur le fond par un humain.
- [ ] **Toutes les captures d'écran manquantes** (voir le point
      "Limite importante" juste au-dessus).

### Contenu ajouté après relecture partielle (2026-08-19, suite)

- **Nouveau guide** `_docs/how-to-guides/propriete-intellectuelle-projet.md`
  ("Comprendre la propriété intellectuelle de son projet") : droit d'auteur vs propriété
  industrielle, droits moraux/patrimoniaux (spécificité française sourcée),
  licences code (MIT/Apache/GPL), hardware (CERN-OHL/TAPR OHL), contenu
  (Creative Commons), regard critique sourcé sur les brevets (patent
  trolls, patent thickets, absence de brevet mondial, nuance pharma vs
  logiciel), apport de l'open source (Linux, KiCad, Jekyll...). Disclaimer
  "pas un avis juridique" + avertissement sur la PI des projets d'école
  (politique propre à chaque établissement, à vérifier avec le référent).
  Ajouté à `how_to_guides:` de `index.md` de l'atelier.
- Lien croisé posé entre `rechercher-existant-faisabilite.md` et ce guide
  (dans les deux sens).
- **rechercher-existant-faisabilite.md** enrichi : nouvelle sous-section
  "Chercher aussi ce qui ne marche pas" (rechercher aussi les échecs et
  approches écartées, pas que les réussites : sert à justifier un choix
  plus tard, lien vers "Tracer ses choix techniques").
- **constituer-organiser-equipe.md** corrigé : la ligne "Documentation" du
  tableau de rôles est ambiguë (laisse croire que c'est délégable comme
  l'élec/méca). Renommée "Coordination documentation" + message explicite
  que documenter n'est pas un rôle, chacun documente sa propre partie.
- **documenter-au-fil-de-leau.md** enrichi en conséquence : nouvelle
  section "Ce n'est pas le travail d'une seule personne", placée tôt dans
  la page (juste après le message d'intro), avec lien croisé vers
  "Constituer et organiser son équipe".
- Toutes ces pages rebuild-vérifiées (liens, titres, messages) après coup.

### Contenu ajouté après relecture partielle (2026-08-19, suite 2)

- **Nouveau composant `_includes/code-snippet.html`** : `<details>`
  rétracté par défaut + bouton "Copier" (clipboard JS), pour donner le
  code Markdown brut d'un tableau/gabarit affiché plus haut sur la page,
  copiable tel quel dans la doc de l'étudiant. Pas de collision de nom
  vérifiée avant création (leçon de `tabs.html`). Style dans
  `_documentation.scss`, section "Snippet Markdown copiable". Réutilisable
  sur tout le site, pas propre à cet atelier.
- Appliqué aux 4 tableaux à remplir : `definir-son-besoin.md` (tableau des
  fonctions), `gerer-temps-jalons.md` (tableau de jalons),
  `constituer-organiser-equipe.md` (tableau de rôles),
  `rechercher-existant-faisabilite.md` (tableau comparatif). Chaque
  snippet est une version générique (`...`), pas une recopie de l'exemple
  déjà affiché.
- **Guide `propriete-intellectuelle-projet.md`** : **renommé** depuis
  `choisir-licence-projet.md` (l'utilisateur a précisé : c'est un tour
  d'horizon de la PI, pas juste "choisir une licence" : le choix de
  licence est une section parmi d'autres, plus le point d'entrée). Toutes
  les références mises à jour.
- Ce même guide enrichi sur les brevets : définition claire de ce qu'est
  un brevet (manquait), mécanisme de diffusion (publication ~18 mois après
  dépôt, bases publiques INPI/Espacenet/Google Patents réutilisables comme
  source de recherche documentaire), les 3 conditions de validité
  (nouveauté, activité inventive, application industrielle), et un
  encart `message.html is-warning` sur la **tension entre nouveauté d'un
  brevet et "documenter au fil de l'eau"** (publier détruit la nouveauté),
  point critique important, avec la précision que ça ne concerne
  qu'une minorité de projets étudiants.

### Corrections suite à la relecture partielle de l'utilisateur (2026-08-19, suite 3)

**Erreur factuelle sérieuse corrigée** : le template-project des étudiants
tourne sur **Just the Docs**, vanilla, sans `_includes` custom : aucune
intégration KiCanvas ni model-viewer par défaut, contrairement à ce que
j'avais écrit dans `documenter-carte-electronique.md` et
`documenter-systeme-mecanique.md` (confondu avec les capacités de
**ce site-ci**). Les deux tutoriels ont été **entièrement réécrits** :

- Méthode par défaut = **export d'image statique** (SVG depuis KiCad
  "Fichier > Tracer", image PNG depuis FreeCAD "Outils > Enregistrer une
  image...", vérifié via recherche web, KiCad n'exporte pas en PNG
  directement, seulement SVG/PDF/DXF/PS).
- Méthode avancée optionnelle = activer KiCanvas/model-viewer via le vrai
  point d'extension documenté de Just the Docs : `docs/_includes/head_custom.html`
  (vérifié via recherche web : <https://just-the-docs.com/docs/customization/>).
  KiCanvas nécessite de télécharger `kicanvas.js` et l'auto-héberger (pas
  de CDN en alpha) ; model-viewer est disponible via CDN unpkg directement.
- `poster-video-presentation.md` avait la même erreur (`youtube.html`
  n'existe pas non plus sur leur site) : remplacé par une iframe HTML
  standard, universelle.

**Piège technique découvert et corrigé partout** : échapper un guillemet
double avec `\"` à l'intérieur d'un attribut Liquid `content="..."` ou
`title="..."` ne fonctionne pas de façon fiable. Solution systématique :
soit utiliser des guillemets français « » à la place, soit passer par un
`{% capture %}...{% endcapture %}` (déjà le pattern utilisé pour
`content-tabs.html`) quand le contenu contient du HTML avec des
attributs entre guillemets doubles. **Vérifié qu'il n'en reste aucune
occurrence dans tout l'atelier** (grep systématique).

**Explicite / pas-à-pas pour débutants complets** (demande explicite de
l'utilisateur, étudiants jeunes, n'ont souvent jamais fait ça) :

- `creer-repo-template.md` **entièrement réécrit** : glossaire en tête
  (repo, template, cloner, GitHub Desktop), étape 0 d'installation de
  GitHub Desktop ajoutée, chaque étape beaucoup plus détaillée (ce qu'on
  voit à l'écran, pas juste le bouton à cliquer), GitHub Desktop mis en
  avant comme méthode recommandée (pas juste une alternative à la ligne
  de commande).
- `git-github-desktop-vscode.md` : glossaire enrichi (Fetch vs Pull
  clarifié, encart "pourquoi pas juste Google Drive"), liens vers
  "Résoudre un conflit Git" posés (étaient en texte brut).
- `gerer-projet-github.md` : glossaire ajouté (Issue/Assignee/Label/
  Project), lien vers "Communiquer en équipe" posé.
- Autres liens en texte brut trouvés et corrigés en vrais liens
  cliquables sur `poster-video-presentation.md`.

**Bonus trouvé en cours de route** : `CLAUDE.md` était publié tel quel sur
le site en ligne (absent de la liste `exclude:` de `_config.yml`,
contrairement à `Gemfile`/`CONTRIBUTING.md`/etc.) : corrigé.

**Reste à faire pour l'explicitation** : seuls #1, #2, #5 ont eu la passe
complète. Les tutoriels #6, #7 (PR, conflits) ont déjà pas mal de détail
mais pas de glossaire dédié ; #9, #10 (site Jekyll), #13-15 (documenter
code/montage/tests), #17 (checklist) n'ont pas eu de passe dédiée
d'explicitation, à faire si l'utilisateur le demande, mais pas
d'erreur factuelle connue dedans à ce stade.

### Ajout suite à question utilisateur (2026-08-19, suite 4)

`documenter-carte-electronique.md` enrichi : confirmé (doc officielle
KiCanvas) que KiCanvas ne fait ni BOM ni export, visualiseur strict
lecture seule. Ajouté :

- Génération BOM native KiCad (**Outils > Générer une nomenclature**,
  export CSV) comme méthode de base.
- Section "Pour aller plus loin" : plugin **InteractiveHtmlBom**
  (openscopeproject, install via Plugin and Content Manager de KiCad) :
  génère un HTML autonome avec PCB + BOM liés visuellement, utile aussi
  pour l'assemblage. Pas besoin de `head_custom.html` (contrairement à
  KiCanvas/model-viewer) : fichier HTML autonome, simple lien suffit.
  Lien croisé posé vers `documenter-assemblage-montage.md`.

### Fusion PR + conflits en guide "Utilisation avancée" (2026-08-19, suite 5)

À la demande de l'utilisateur : les tutoriels #6 ("Utiliser les Pull
Requests") et #7 ("Résoudre un conflit Git") ont été **fusionnés en un
seul guide** `_docs/how-to-guides/pull-requests-et-conflits-git.md`
(`type: how-to`), au motif que ce sont des compétences avancées, pas
attendues de la plupart des équipes étudiantes.

**Point important découvert en cours de route** : la section "Guides
pratiques" générée automatiquement sur la page d'atelier (depuis la
liste `how_to_guides:` du front matter) a un sous-titre fixe codé dans
`_layouts/project-home.html` : *"Résolvez un problème précis, étape par
étape."*. Ça ne correspond PAS au sens voulu ici ("aller plus loin une
fois les bases acquises"). Modifier ce layout affecterait tous les
ateliers du site, hors de portée pour ce changement. **Solution
retenue** : ce guide n'est **pas** ajouté à `how_to_guides:` ; il est
seulement présenté dans une vraie section `## Utilisation avancée` écrite
à la main dans le corps de `index.md` de l'atelier, où le cadrage est
entièrement sous contrôle. **Pattern à réutiliser** si d'autres contenus
"avancés/optionnels" sont ajoutés plus tard : ne pas les mettre dans
`how_to_guides:`, les lister dans une section prose dédiée à la place.

Anciens fichiers `tutorials/pull-requests-relecture.md` et
`tutorials/resoudre-conflit-git.md` supprimés. Toutes les références
croisées mises à jour (`git-github-desktop-vscode.md`,
`modifier-site-github.md`) vers la nouvelle URL du guide. Le plan compte
désormais **16 tutoriels + 2 guides pratiques** (au lieu de 17 tutoriels
et 1 guide). Vérifié : build propre, 28 liens internes uniques, tous
résolvent, aucune trace des anciennes URLs.

### Retour utilisateur : la section "Utilisation avancée" annulée (2026-08-19, suite 6)

L'utilisateur ne voyait pas la section custom (souci de cache
navigateur/scroll, le serveur `make serve` servait pourtant bien la
bonne version, vérifié via `curl`) et a tranché : **pas de section
"Utilisation avancée" séparée**, le guide `pull-requests-et-conflits-git`
va directement dans `how_to_guides:` comme le guide PI. Fait :

- Ajouté `/docs/how-to-guides/pull-requests-et-conflits-git/` à
  `how_to_guides:` dans `index.md`.
- Section `## Utilisation avancée` retirée du corps de `index.md`.
- Le sous-titre du guide lui-même ("Utilisation avancée de Git, pas
  indispensable pour tous les projets") reste affiché sur sa carte dans
  "Guides pratiques" : ça garde le cadrage "pas obligatoire" même sans
  section dédiée.

Vérifié en local et sur le serveur `make serve` en cours d'exécution.

### Prochaine étape de contenu

**Le contenu textuel des 9 concepts + 17 tutoriels + 1 guide PI est
complet** (2026-08-19). Il ne reste, côté contenu nouveau, que le concept
n°10 "Structurer un projet" (arborescence), volontairement en attente.

**Priorité 1 : relecture par l'utilisateur** de tout ce qui a été écrit en
son absence (concepts + tutoriels) : rien n'a encore été relu sur le fond
par un humain, seulement vérifié techniquement (build, liens).

**Priorité 2** : ajouter les vraies captures d'écran : impossible à faire
depuis cet environnement (voir "Limite importante" plus haut), nécessite
un humain avec un vrai navigateur/GitHub sous les yeux.

**Priorité 3** : la migration du contenu `template-project/docs/premiers-pas/`
vers ce workshop (décision architecturale actée plus haut, jamais
commencée) : pertinent maintenant que les tutoriels #2/#3/#9/#10 existent
réellement ici et peuvent servir de base à cette migration.

Commande pour une nouvelle page : `/new-workshop-page methodologie-de-projet concepts/<slug>` ou `tutorials/<slug>`.

Ne pas oublier d'ajouter l'URL de chaque nouvelle page dans les listes
`concepts:` / `tutorials:` du front matter de `index.md`, **dans l'ordre du
plan**.

## Environnement : build local (RÉSOLU le 2026-08-18)

Le `make serve` ne fonctionnait pas sur le poste de travail
(`adrien-bracq-makerspace`). Diagnostic complet :

1. **Terminal `sh` non interactif** : le premier terminal utilisé tournait
   en mode `sh` (bash invoqué sous le nom `sh`), qui ne charge pas
   `~/.bashrc` → aucune variable d'environnement/PATH custom. Résolu avec
   `exec bash -l`.
2. **Pas de Ruby/Bundler installé** sur la machine à l'origine.
   `sudo apt install ruby-full build-essential zlib1g-dev` lancé, mais
   depuis le **vrai terminal système**, pas depuis VSCode.
3. **VSCode était installé en Flatpak** : son terminal intégré (et donc
   aussi l'outil Bash de Claude Code, qui passe par le même canal) tournait
   **dans le bac à sable Flatpak**, isolé du système hôte. C'est pour ça que
   `ruby`, `sudo`, `apt`, `dpkg` étaient invisibles depuis VSCode/Claude Code
   même une fois installés sur le vrai système (paths visibles en `/app/bin`
   et `/home/.../.var/app/com.visualstudio.code/...`, signature Flatpak).
4. **Solution appliquée** : VSCode réinstallé via le paquet `.deb` officiel
   Microsoft (repo apt `packages.microsoft.com`) à la place du Flatpak → le
   terminal intégré tourne nativement sur le système hôte.
5. **Bundler installé en espace utilisateur** (`gem install bundler`,
   `PATH` mis à jour dans `~/.bashrc` avec
   `$HOME/.local/share/gem/ruby/3.3.0/bin`).
6. **Bundler configuré en local au projet** (`bundle config set --local
   path 'vendor/bundle'`) car `/var/lib/gems` n'est pas writable sans root.
7. `make install` puis `make serve` fonctionnent. `_site/` et
   `vendor/bundle/` sont bien gitignorés.
8. **Bug détecté et corrigé au passage** : un fichier `.md` sans front
   matter placé dans un dossier de collection (`_workshops/<slug>/`) est
   quand même **copié tel quel dans `_site/`** par Jekyll (il n'est juste
   pas transformé en page). `notes.md` s'y serait retrouvé publié sur le
   site public si on ne l'avait pas ajouté à `exclude:` dans `_config.yml`
   (même pattern déjà en place pour `_workshops/microcontroleur/note.md`).
   **Toujours exclure explicitement ce genre de fichier.**

### Commandes de référence

    source ~/.bashrc    # si un terminal ne voit pas `bundle`
    make serve

Puis vérifier dans le navigateur : `http://localhost:4000/workshops/methodologie-de-projet/`.

### Alignement sur le template-project restructuré (2026-09-24)

Le repo `template-project` (local : `~/Documents/GitHub/template-project`) a été
restructuré par l'utilisateur : les pages `premiers-pas/` sont supprimées (les
guides vivent ici), le journal est devenu une section (un dossier par
étudiant, une page par séance, `_modele-seance.md`), `project/` est découpé en
`mcad/` (`3d-print/`, `laser-cutting/`), `ecad/`, `firmware/`, `software/`,
les pages `docs/` portent des marqueurs `{: .a_modifier }` / `{: .a_supprimer }`
(callouts définis dans `docs/_config.yml`), et le template fournit désormais
les includes `model3d.html`, `kicad.html`, `graphique.html`, MathJax (via
`docs/_includes/head_custom.html`) et Mermaid. Le workflow CI liste les blocs
restants et refuse les fichiers de plus de 25 Mo (avertit au-delà de 2 Mo pour
une image). **Le `Gemfile` est dans `docs/`.**

Modifié en conséquence :

- **Nouveau** `tutorials/personnaliser-template.md` (après le tutoriel Git dans
  `index.md`) : marqueurs, `_config.yml` (`gh_edit_repository` à ne pas
  oublier), README, `index.md`, pages `docs/`, front matter (`parent`,
  `nav_order`), `project/`, fichiers d'exemple à supprimer, includes, règles de
  fichiers.
- **Réécrits** : `journal-de-bord` (structure par étudiant),
  `documenter-carte-electronique` (include `kicad.html`, plus d'installation
  de KiCanvas), `documenter-systeme-mecanique` (include `model3d.html`,
  `project/mcad/`), `documenter-assemblage-montage` (une étape par page,
  `step-tuto.html` n'existe pas chez les étudiants).
- **Mis à jour** : `creer-repo-template`, `poster-video-presentation`
  (`assets/images/`, 2 Mo / 25 Mo), `documenter-code-firmware` (PlatformIO),
  `documenter-tests-resultats` (structure de `tests.md`, graphique CSV, formules
  MathJax), `syntaxe-markdown`, `modifier-site-github`, `construire-site-local`
  (commandes depuis `docs/`), `checklist-cloture-projet` (section « Nettoyage
  du template »), `readme-efficace`, `gerer-projet-github`, et les concepts
  `definir-son-besoin`, `tracer-choix-techniques`,
  `rechercher-existant-faisabilite`, `constituer-organiser-equipe`.
- **Corrigé** : l'ancienne conclusion « le template n'a ni KiCanvas ni
  model-viewer » (voir plus haut) n'est plus vraie : il les fournit.

À faire plus tard : captures d'écran du nouveau tutoriel, et relecture
humaine de ces réécritures (vérifiées seulement par build et par
comparaison avec le template).

Voir aussi la mémoire projet Claude (`workshop-methodologie-de-projet.md`
dans le dossier mémoire) qui résume ce même plan pour les sessions futures.
