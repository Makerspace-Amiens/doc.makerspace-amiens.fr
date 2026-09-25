---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Créer son repo depuis le template et le cloner
subtitle: Le point de départ technique de tout le projet
description: Créer votre repo de projet à partir du template MakerSpace, puis le récupérer sur votre ordinateur pour commencer à travailler.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: Un compte GitHub
    link: "https://github.com/signup"
softwares:
  - label: GitHub Desktop (recommandé pour débuter)
    link: "https://desktop.github.com"
hardwares:
  - label: Aucune machine requise
    link: ""
---

{% include message.html title="Le repo existe peut-être déjà" message="Souvent, votre encadrant a déjà créé le repo de votre équipe depuis le template. Dans ce cas, la partie « Créer le repo » ci-dessous ne vous concerne pas : passez directement à [Récupérer le repo sur votre ordinateur](#récupérer-le-repo-sur-votre-ordinateur)." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Le vocabulaire, avant de commencer

Si c'est la première fois que vous touchez à GitHub, quatre mots reviennent
sans arrêt dans ce tutoriel :

- **Repo** (repository, "dépôt" en français) : un dossier de projet suivi
  par Git, hébergé sur GitHub. C'est l'équivalent d'un dossier partagé,
  mais qui garde l'historique de chaque modification.
- **Template** : un repo qui sert de point de départ. Le cliquer sur
  "Use this template" crée une copie indépendante pour vous, pas un lien
  vers l'original.
- **Cloner** : télécharger une copie de travail du repo sur votre
  ordinateur, pour pouvoir modifier les fichiers avec vos outils habituels
  (VSCode, etc.). Ce que vous voyez sur GitHub.com est une copie en ligne ;
  cloner vous en donne une copie locale, synchronisable ensuite.
- **GitHub Desktop** : une application avec des boutons, qui évite de
  taper des commandes dans un terminal. C'est l'option recommandée pour
  débuter ; la ligne de commande (`git`) fait la même chose mais demande
  d'apprendre sa syntaxe en plus.

## Ce que vous allez faire

Le repo [template-project](https://github.com/Makerspace-Amiens/template-project)
du MakerSpace contient déjà la structure de base d'un projet : un dossier
`docs/` pour le site de documentation et un dossier `project/` pour vos
fichiers de projet. Vous n'allez pas cloner ce template directement : vous
allez créer **votre propre repo**, une copie indépendante que vous pourrez
modifier librement, sans jamais affecter l'original.

## Étape 0 : Installer GitHub Desktop (si ce n'est pas déjà fait)

{% include step-tuto.html
  greyBackground=true
  title="Installer GitHub Desktop"
  content="Téléchargez et installez [GitHub Desktop](https://desktop.github.com). À l'ouverture, l'application vous demande de vous connecter avec votre compte GitHub (**Sign in to GitHub.com**), utilisez les identifiants créés dans les prérequis. Si vous préférez la ligne de commande, passez cette étape et voir la note en fin de tutoriel." %}

## Créer le repo

{% include step-tuto.html
  greyBackground=true
  title="Étape 1 : Ouvrir le template"
  content="Rendez-vous sur [github.com/Makerspace-Amiens/template-project](https://github.com/Makerspace-Amiens/template-project) dans votre navigateur. Vous arrivez sur une page qui liste les fichiers du repo (dossiers `docs/`, `project/`, fichier `README.md`...) : c'est le contenu que vous allez copier."
  image="step1-use-this-template.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 2 : Cliquer sur « Use this template »"
  content="En haut de la page, à droite, un bouton vert **Use this template**. Cliquez dessus, puis choisissez **Create a new repository** dans le petit menu qui apparaît (pas les autres options)."
  image="step1b-menu-use-this-template.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 3 : Remplir le formulaire"
  content="Un formulaire s'affiche, avec plusieurs champs à remplir :

- **Owner** : votre compte personnel (déjà sélectionné par défaut), ou l'organisation du MakerSpace si votre référent vous l'a demandé.
- **Repository name** : le nom de votre projet, en minuscules, mots séparés par des tirets, sans espace ni accent, par exemple `robot-tri-dechets`, pas `Robot de Tri des Déchets`.
- **Description** (optionnel) : une phrase résumant le projet.
- **Public / Private** : laissez **Public**, sélectionné par défaut, sauf si votre référent vous demande explicitement le contraire.

Une fois rempli, cliquez sur le bouton vert **Create repository** en bas de la page."
  image="step2-formulaire-creation.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 4 : Vérifier"
  content="Vous êtes redirigé vers votre nouveau repo : l'URL dans la barre d'adresse contient maintenant votre compte et le nom que vous avez choisi, pas « Makerspace-Amiens/template-project ». Les mêmes fichiers que le template y apparaissent (`docs/`, `project/`, `README.md`)."
  image="step3-repo-cree.png" %}

## Récupérer le repo sur votre ordinateur

{% capture step_clone %}Dans GitHub Desktop, menu **File** (en haut à gauche) puis **Clone repository...**. Une fenêtre s'ouvre avec un champ de recherche : tapez le nom de votre repo, il devrait apparaître dans la liste (onglet **GitHub.com**).

Cliquez dessus pour le sélectionner. En bas de la fenêtre, un champ **Local path** indique où le dossier sera enregistré sur votre ordinateur : vous pouvez changer l'emplacement avec le bouton **Choose...**, ou laisser la valeur par défaut.

Cliquez sur le bouton bleu **Clone**. Une barre de progression s'affiche, puis GitHub Desktop ouvre automatiquement votre repo une fois terminé.

Vous ne trouvez pas votre repo dans la liste ? Sur la page de votre repo sur GitHub.com, le bouton vert **Code** ouvre un panneau avec l'URL à copier (onglet **Local**), utile aussi si vous clonez en ligne de commande.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 5 : Cloner avec GitHub Desktop"
  content=step_clone
  image="step4-clone-github-desktop.png"
  image_2="step3b-code-clone-url.png" %}

{% include message.html title="Vous préférez la ligne de commande ?" message="Ouvrez un terminal, placez-vous dans le dossier où vous voulez travailler, puis :

```bash
git clone https://github.com/<votre-compte>/<nom-du-repo>.git
cd <nom-du-repo>
```

L'URL exacte se trouve sur la page de votre repo, bouton vert **Code**, onglet **HTTPS**." status="is-info" icon="fas fa-terminal" %}

## Ouvrir le dossier dans VSCode

{% capture step_open_editor %}Dans GitHub Desktop, menu **Repository** puis **Open in Visual Studio Code** (si VSCode n'apparaît pas, installez-le d'abord depuis [code.visualstudio.com](https://code.visualstudio.com), puis relancez GitHub Desktop). Juste après le clone, GitHub Desktop s'ouvre directement sur votre repo, sans modification locale, c'est normal.

Sans passer par GitHub Desktop : ouvrez VSCode, `File > Open Folder`, et sélectionnez le dossier que vous venez de cloner.

Vous devriez voir, dans l'explorateur de fichiers à gauche : un dossier `docs/` (le site de documentation) et un dossier `project/` (vos futurs fichiers de projet).{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 6 : Ouvrir dans un éditeur"
  content=step_open_editor
  image="step5-github-desktop-post-clone.png"
  image_2="step6-dossier-ouvert-vscode.png" %}

## Vérifier que tout est en ordre

- Le dossier `docs/` contient bien `index.md`, `_config.yml`, et un sous-dossier `premiers-pas/`.
- Dans GitHub Desktop, le nom de votre repo s'affiche en haut à gauche, pas "template-project".

{% include message.html title="Ne modifiez jamais directement le template" message="Le repo que vous venez de créer est totalement indépendant du template. Toute modification que vous ferez dans votre repo n'affecte jamais le template-project original, et inversement." status="is-success" icon="fas fa-check-circle" %}

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Pas de bouton "Use this template" visible | Vous êtes peut-être déjà sur un fork ou un autre repo | Vérifiez que vous êtes bien sur `github.com/Makerspace-Amiens/template-project` |
| Votre repo n'apparaît pas dans GitHub Desktop lors du clone | L'application n'est pas connectée au bon compte | Menu **File > Options** (Windows) ou **GitHub Desktop > Settings** (Mac), vérifiez le compte connecté |
| `git clone` (ligne de commande) demande un mot de passe et échoue | GitHub n'accepte plus l'authentification par mot de passe en ligne de commande depuis 2021 | Utilisez GitHub Desktop à la place, c'est justement pour éviter ce problème |
| Le dossier cloné semble vide dans VSCode | Vous avez peut-être ouvert le dossier parent, pas le repo lui-même | Vérifiez le nom du dossier ouvert en haut de l'explorateur de fichiers VSCode |

## Exercice

En équipe : créez le repo de votre projet dès maintenant si ce n'est pas
déjà fait, clonez-le chacun sur votre machine, et vérifiez ensemble que
vous voyez tous la même structure de dossiers.
