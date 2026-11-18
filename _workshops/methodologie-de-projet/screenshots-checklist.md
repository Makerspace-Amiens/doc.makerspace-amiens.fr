# Checklist des captures d'écran

> Fichier de travail interne (exclu du build, comme `notes.md`). Coche au
> fur et à mesure. Ordre = ordre de prise recommandé, pour que le tri par
> horodatage fonctionne sans ambiguïté.

## Méthode

1. Prends les captures **dans l'ordre de cette liste**, une par ligne, sans
   sauter d'étape (même si tu comptes ne pas toutes les garder : plus
   simple pour le tri automatique par horodatage ensuite).
2. Raccourci GNOME par défaut : **Impr écran** (écran entier) ou
   **Maj+Impr écran** (sélection d'une zone, préférable, permet de ne
   capturer que la fenêtre/zone utile). Elles atterrissent dans
   `~/Images/Captures d'écran` ou `~/Pictures/Screenshots` selon la config.
3. Quand un tutoriel (ou toute la liste) est fait, dis-le-moi : je
   récupère le dossier, trie par horodatage, renomme et place chaque
   image au bon endroit, puis reconstruis pour vérifier.
4. Pas obligé de tout faire d'un coup : on peut avancer tutoriel par
   tutoriel. Les captures marquées **(optionnel)** sont un bonus, pas
   bloquantes.

---

## 1. Créer son repo depuis le template et le cloner ✅ FAIT (2026-08-19)

Dossier cible : `_workshops/methodologie-de-projet/tutorials/creer-repo-template/`

1. Page GitHub du template, bouton **Use this template** visible en haut à droite → `step1-use-this-template.png`
2. Formulaire de création (Owner / Repository name / Public-Private) rempli → `step2-formulaire-creation.png`
3. Nouveau repo créé, URL dans la barre d'adresse visible → `step3-repo-cree.png`
4. GitHub Desktop, fenêtre **Clone a repository**, ton repo sélectionné dans la liste → `step4-clone-github-desktop.png`
5. GitHub Desktop après clone, menu **Repository > Open in Visual Studio Code** visible → `step5-open-in-vscode.png`
6. VSCode avec le dossier ouvert, `docs/` et `project/` visibles dans l'explorateur → `step6-dossier-ouvert-vscode.png`

## 2. Git, GitHub Desktop et VSCode ✅ FAIT (2026-08-20, 11 captures, tutoriel restructuré avec des étapes supplémentaires : stage séparé côté VSCode, vérification dans l'historique côté GitHub Desktop, zooms sur les boutons Push/Sync)

Dossier cible : `_workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/`

1. GitHub Desktop, onglet **Changes** avec des fichiers modifiés listés → `step1-changes-github-desktop.png`
2. GitHub Desktop, champ de message de commit rempli, bouton **Commit to main** → `step2-commit-github-desktop.png`
3. GitHub Desktop, bouton **Push origin** → `step3-push-github-desktop.png`
4. VSCode, panneau **Source Control** ouvert avec des fichiers modifiés → `step4-source-control-vscode.png`
5. VSCode, message de commit tapé + bouton **Sync Changes** visible → `step5-sync-vscode.png`

### 2 bis. Refonte « Git et GitHub avec VSCode » (2026-11-17) : à faire

Le tutoriel passe au tout-VSCode (GitHub Desktop en secours) et intègre le
clonage. Captures manquantes, VSCode en français, avec un repo de test :

1. ✅ VSCode sans dossier ouvert, panneau **Contrôle de code source** avec le bouton **Clone Repository** (resté en anglais) → `clone-bouton-vscode.png`
2. ✅ Liste déroulante en haut : **Cloner à partir de GitHub** → `clone-depuis-github-vscode.png`
2 bis. ✅ Fenêtre de choix du dossier, **Sélectionner comme destination de dépôt** (noms de dossiers floutés) → `clone-choisir-dossier.png`
3. Liste des repos GitHub proposés, le repo de test surligné → `clone-liste-repos-vscode.png`
4. Fenêtre « Faites-vous confiance aux auteurs... » → `confiance-dossier-vscode.png`
5. Barre d'état en bas à gauche : branche `main` + icône de synchronisation (zoom) → `sync-barre-etat-vscode.png`
6. Terminal intégré après les deux `git config` (optionnel) → `git-config-terminal-vscode.png`
7. Aperçu Markdown à côté de l'éditeur (`Ctrl+Maj+V`) sur `about.md` d'un portfolio (optionnel) → `apercu-markdown-vscode.png`

Les captures 1 à 4 vont dans les étapes « Lancer le clonage », « Choisir
l'emplacement » et « Ouvrir le repo » ; la 5 dans « Récupérer les derniers
changements ». Les anciennes captures 4 et 6 de la section 1 ont été
déplacées ici (`clone-github-desktop.png`, `repo-ouvert-vscode.png`).

## 3. Gérer son projet avec GitHub

Dossier cible : `_workshops/methodologie-de-projet/tutorials/gerer-projet-github/`

 1. Page GitHub, onglet **Issues**, bouton **New issue** → `step1-new-issue.png`
 2. Formulaire de création d'Issue rempli (titre précis + description + Assignee) → `step2-issue-remplie.png`
 3. Onglet **Projects**, bouton **New project**, choix du modèle **Board** → `step3-new-project.png`
 4. Un Project avec ses 3 colonnes (Todo/In Progress/Done) et au moins une carte Issue liée → `step4-project-kanban.png`

## 4. Tenir un journal de bord

Dossier cible : `_workshops/methodologie-de-projet/tutorials/journal-de-bord/`

 1. **(optionnel)** Fichier `docs/journal.md` ouvert dans VSCode avec une entrée remplie → `step1-journal-vscode.png`

## 5. Publier son site avec GitHub Pages

Dossier cible : `_workshops/methodologie-de-projet/tutorials/publier-son-site/`
(ex-`modifier-site-github`, renommé le 2026-10-20 ; la partie « éditer
depuis l'interface GitHub » a été supprimée, ses captures ne sont plus à faire).

**Captures déjà intégrées (2026-08-20)** : `activer-pages-settings.png`
(Settings > Pages), `about-vide.png` + `edit-repository-details.png` (carte
About), `social-preview.png`.

 1. ✅ (2026-11-18) Onglet **Actions**, étape 2 : `actions-deploy-jekyll.png` + `actions-run-workflow.png` (repo de projet), `actions-pages-build-deployment.png` + `actions-run-en-cours.png` (portfolio, pseudo flouté). Manque encore un run terminé (coche verte), optionnel
 2. ✅ (2026-11-18) **Settings > Pages** avec la ligne « Your site is live at », étape 3 : `site-live-projet.png` et `site-live-portfolio.png` (pseudos floutés)
 3. ✅ (2026-11-18) Menu **Source** ouvert, une capture par onglet de l'étape 1 : `source-github-actions.png` (repo de projet, nom de l'auteur flouté) et `source-deploy-from-branch.png` (portfolio)

## 6. Construire son site Jekyll en local

Dossier cible : `_workshops/methodologie-de-projet/tutorials/construire-site-local/`

 1. **(optionnel)** Terminal après `bundle install` réussi (dernières lignes de sortie) → `step1-bundle-install.png`
 2. Terminal après `bundle exec jekyll serve`, ligne "Server running..." visible → `step2-jekyll-serve.png`
 3. Navigateur sur `http://localhost:4000` montrant le site qui tourne → `step3-site-local.png`

## 7. Documenter une carte électronique

Dossier cible : `_workshops/methodologie-de-projet/tutorials/documenter-carte-electronique/`

 1. KiCad Eeschema, menu **Fichier > Tracer...** ouvert, format **SVG** sélectionné → `step1-plot-svg-kicad.png`
 2. KiCad, menu **Outils > Générer une nomenclature...** ouvert → `step2-generer-bom.png`
 3. **(optionnel, avancé)** Plugin and Content Manager de KiCad, recherche "Interactive Html Bom" → `step3-pcm-ihb.png`
 4. **(optionnel, avancé)** Résultat du plugin InteractiveHtmlBom ouvert dans un navigateur (PCB + BOM liés) → `step4-ihb-resultat.png`

## 8. Documenter un système mécanique

Dossier cible : `_workshops/methodologie-de-projet/tutorials/documenter-systeme-mecanique/`

 1. FreeCAD, une vue 3D bien cadrée d'une pièce/assemblage → `step1-vue-freecad.png`
 2. FreeCAD, menu **Outils > Enregistrer une image...** ouvert → `step2-save-picture-freecad.png`

## 9. Documenter l'assemblage et le montage

Dossier cible : `_workshops/methodologie-de-projet/tutorials/documenter-assemblage-montage/`

 1. **(optionnel)** Une vraie photo d'étape de montage (prise au smartphone, pas depuis l'écran) → `step1-exemple-montage.jpg`

## 10. Checklist de clôture de projet / Poster et vidéo

Pas de capture d'écran nécessaire (contenu texte/gabarits).

---

## Après les captures

Dis-moi simplement : « les captures de [nom du tutoriel] sont prêtes » (ou
« toutes les captures sont prêtes »), avec le chemin du dossier où GNOME
les a sauvegardées si ce n'est pas l'emplacement par défaut.
