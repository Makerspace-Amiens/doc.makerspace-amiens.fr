---
layout: documentation
hide_hero: false
hero_image: hero.jpg
hero_height: is-small
hero_darken: true
image: hero.jpg
component_toc: true
doc_header: true

title: Créer son repo depuis le template
subtitle: Le point de départ technique, avant tout le reste
description: Créer votre propre repo sur GitHub à partir d'un template MakerSpace (projet ou portfolio), directement depuis votre navigateur.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: Un compte GitHub
    link: "https://github.com/signup"
softwares:
  - label: Un navigateur web
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

<div data-project-hide="portfolio-ingenieur" markdown="1">

{% include message.html title="Le repo existe peut-être déjà" message="Pour un repo de projet, votre encadrant a souvent déjà créé le repo de votre équipe depuis le template. Dans ce cas, ce tutoriel ne vous concerne pas : passez directement à [Publier son site avec GitHub Pages](/workshops/methodologie-de-projet/tutorials/publier-son-site/)." status="is-warning" icon="fas fa-exclamation-triangle" %}

</div>

## Le vocabulaire, avant de commencer

Si c'est la première fois que vous touchez à GitHub, deux mots reviennent
sans arrêt dans ce tutoriel :

- **Repo** (repository, "dépôt" en français) : un dossier suivi par Git,
  hébergé sur GitHub. C'est l'équivalent d'un dossier partagé, mais qui
  garde l'historique de chaque modification.
- **Template** : un repo qui sert de point de départ. Le bouton
  "Use this template" crée une copie indépendante pour vous, pas un lien
  vers l'original.

Tout ce tutoriel se fait dans votre navigateur, sur github.com : rien à
installer. Récupérer le repo sur votre ordinateur et le modifier avec
VSCode viendra juste après, une fois le site publié.

## Ce que vous allez faire

{% capture tab_projet %}Le repo [template-project](https://github.com/Makerspace-Amiens/template-project)
du MakerSpace contient déjà la structure de base d'un projet : un dossier
`docs/` pour le site de documentation et un dossier `project/` pour vos
fichiers de projet. Vous n'allez pas modifier ce template : vous allez créer
**le repo de votre équipe**, une copie indépendante que vous pourrez
modifier librement, sans jamais affecter l'original.

Ce template n'est pas un squelette vide : c'est un projet **d'exemple**
complet, à remplacer par le vôtre. Ce remplacement fait l'objet du tutoriel
[Personnaliser le template de son projet](/workshops/methodologie-de-projet/tutorials/personnaliser-template/).{% endcapture %}
{% capture tab_portfolio %}Le repo [portfolio-template](https://github.com/Makerspace-Amiens/portfolio-template)
du MakerSpace contient un site personnel déjà prêt : accueil, page « Qui
suis-je » et CV, projets, journal de bord, documentation et radar de
compétences. Vous n'allez pas modifier ce template : vous allez créer
**votre propre repo**, une copie indépendante qui deviendra votre site.

Ce site est rempli d'un contenu **d'exemple** (un projet, un article et une
page de documentation), que vous remplacerez par le vôtre au fil de l'atelier.{% endcapture %}
{% include content-tabs.html
  id="ce-que-vous-allez-faire"
  tab_title1="Repo de projet"
  tab_project1="methodologie-de-projet"
  tab1=tab_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=tab_portfolio
%}

## Créer le repo

{% capture step1_projet %}Rendez-vous sur [github.com/Makerspace-Amiens/template-project](https://github.com/Makerspace-Amiens/template-project) dans votre navigateur. Vous arrivez sur une page qui liste les fichiers du repo (dossiers `docs/`, `project/`, fichier `README.md`...) : c'est le contenu que vous allez copier.{% endcapture %}
{% capture step1_portfolio %}Rendez-vous sur [github.com/Makerspace-Amiens/portfolio-template](https://github.com/Makerspace-Amiens/portfolio-template) dans votre navigateur. Vous arrivez sur une page qui liste les fichiers du repo (`_config.yml`, `about.md`, dossiers `_projets/`, `_posts/`...) : c'est le contenu que vous allez copier.{% endcapture %}
{% capture step1 %}{% include content-tabs.html
  id="etape-1"
  tab_title1="Repo de projet"
  tab_project1="methodologie-de-projet"
  tab1=step1_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=step1_portfolio
%}{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 1 : Ouvrir le template"
  content=step1
  image="step1-use-this-template.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 2 : Cliquer sur « Use this template »"
  content="En haut de la page, à droite, un bouton vert **Use this template**. Cliquez dessus, puis choisissez **Create a new repository** dans le petit menu qui apparaît (pas les autres options)."
  image="step1b-menu-use-this-template.png" %}

{% capture step3_projet %}

- **Owner** : votre compte personnel (déjà sélectionné par défaut), ou l'organisation du MakerSpace si votre référent vous l'a demandé.
- **Repository name** : le nom de votre projet, en minuscules, mots séparés par des tirets, sans espace ni accent : par exemple `robot-tri-dechets`, pas `Robot de Tri des Déchets`.
- **Description** (optionnel) : une phrase résumant le projet.
- **Public / Private** : laissez **Public**, sélectionné par défaut, sauf si votre référent vous demande explicitement le contraire.{% endcapture %}
{% capture step3_portfolio %}

- **Owner** : votre compte personnel, déjà sélectionné par défaut. Jamais une organisation : ce site est le vôtre.
- **Repository name** : **obligatoirement** `pseudo.github.io`, où `pseudo` est exactement votre nom de compte GitHub, celui affiché dans **Owner**. Si votre compte s'appelle `prenom-nom`, le repo s'appelle `prenom-nom.github.io`, et votre site sera en ligne à l'adresse `https://prenom-nom.github.io`.
- **Description** (optionnel) : par exemple « Portfolio de Prénom Nom, élève ingénieur à UniLaSalle Amiens ».
- **Public / Private** : **Public**, obligatoirement. Un portfolio est fait pour être vu, et GitHub Pages ne publie gratuitement que les repos publics.

{% include message.html title="Votre adresse, c'est votre carte de visite" message="Elle figurera sur votre CV, votre profil LinkedIn et vos candidatures de stage. Si votre pseudo GitHub n'est pas présentable (`xXdarkgamerXx`), changez-le **avant** de créer le repo : sur GitHub, votre photo de profil en haut à droite, **Settings**, **Account**, **Change username**. Un nom simple comme `prenom-nom` est idéal." status="is-info" icon="fas fa-id-card" %}{% endcapture %}
{% capture step3 %}Un formulaire s'affiche, avec plusieurs champs à remplir :

{% include content-tabs.html
  id="etape-3"
  tab_title1="Repo de projet"
  tab_project1="methodologie-de-projet"
  tab1=step3_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=step3_portfolio
%}

Une fois rempli, cliquez sur le bouton vert **Create repository** en bas de la page.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 3 : Remplir le formulaire"
  content=step3
  image="step2-formulaire-creation.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 4 : Vérifier"
  content="Vous êtes redirigé vers votre nouveau repo : l'URL dans la barre d'adresse contient maintenant votre compte et le nom que vous avez choisi, et non plus `Makerspace-Amiens/...`. Les mêmes fichiers que le template y apparaissent."
  image="step3-repo-cree.png" %}

## Vérifier que tout est en ordre

{% capture verif_projet %}

- Le dossier `docs/` contient bien `index.md`, `_config.yml`, les pages `objectifs.md`, `equipe.md`, `etudes.md` et `tests.md`, ainsi que les dossiers `conception/`, `fabrication/` et `journal/`.
- Le dossier `project/` contient les sous-dossiers `mcad/`, `ecad/`, `firmware/` et `software/`.
- En haut de la page, le nom de votre repo s'affiche, pas "template-project".{% endcapture %}
{% capture verif_portfolio %}

- À la racine : `_config.yml`, `index.md`, `about.md`, `projets.md`, `blog.md`, `docs.md` et `competences.md`.
- Les dossiers `_projets/`, `_posts/`, `_docs/`, `_data/` et `assets/`.
- En haut de la page, le nom du repo est exactement `pseudo.github.io`, avec **votre** pseudo, le même que celui affiché juste avant la barre oblique.{% endcapture %}
{% include content-tabs.html
  id="verifier"
  tab_title1="Repo de projet"
  tab_project1="methodologie-de-projet"
  tab1=verif_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=verif_portfolio
%}

{% include message.html title="Votre repo est indépendant du template" message="Le repo que vous venez de créer est une copie totalement indépendante. Toute modification que vous ferez dans votre repo n'affecte jamais le template original, et inversement." status="is-success" icon="fas fa-check-circle" %}

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Pas de bouton "Use this template" visible | Vous n'êtes pas sur le repo du template, mais sur une copie | Vérifiez l'adresse : `github.com/Makerspace-Amiens/template-project` ou `github.com/Makerspace-Amiens/portfolio-template` |
| Portfolio : « The repository already exists » | Vous avez déjà un repo `pseudo.github.io` sur votre compte | Supprimez-le s'il est vide ou inutile (**Settings**, tout en bas, **Delete this repository**), ou demandez conseil à votre encadrant |
| Portfolio : le nom du repo ne correspond pas à votre pseudo | Faute de frappe, ou pseudo modifié après la création | **Settings**, **General**, champ **Repository name** : renommez le repo en `pseudo.github.io`, avec votre pseudo exact |

## Exercice

{% capture exo_projet %}En équipe : créez le repo de votre projet dès maintenant si ce n'est pas
déjà fait, et vérifiez que chaque membre de l'équipe peut l'ouvrir sur
GitHub.{% endcapture %}
{% capture exo_portfolio %}Créez votre repo `pseudo.github.io` dès maintenant, et notez son
adresse : vous la déposerez avec celle de votre site à la fin du tutoriel
suivant.{% endcapture %}
{% include content-tabs.html
  id="exercice"
  tab_title1="Repo de projet"
  tab_project1="methodologie-de-projet"
  tab1=exo_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=exo_portfolio
%}

Étape suivante : mettre votre site en ligne avec
[Publier son site avec GitHub Pages](/workshops/methodologie-de-projet/tutorials/publier-son-site/).

---

*Crédit photo : « a computer screen with a bunch of code on it » par Chris Ried, via [Unsplash](https://unsplash.com/photos/ieic5Tq8YMk), sous [licence Unsplash](https://unsplash.com/license).*
{: .is-size-7 .has-text-grey }
