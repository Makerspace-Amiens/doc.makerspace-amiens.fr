---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Publier son site avec GitHub Pages
subtitle: Mettre votre site en ligne et vérifier que tout fonctionne
description: Activer GitHub Pages sur votre repo, suivre la construction du site dans l'onglet Actions, puis ouvrir votre site en ligne pour vérifier que tout fonctionne.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: Avoir créé son repo depuis le template
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: Un navigateur web
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

{% include message.html title="Captures d'écran à venir" message="Les libellés de boutons ci-dessous correspondent à l'interface actuelle de GitHub." status="is-info" icon="fas fa-camera" %}

## Ce que vous allez faire

Votre repo contient déjà tout ce qu'il faut pour devenir un site web : des
fichiers Markdown et une configuration Jekyll. Mais tant que GitHub n'est
pas autorisé à le publier, ce n'est qu'un dossier de fichiers. Dans ce
tutoriel, vous activez **GitHub Pages**, le service gratuit de GitHub qui
transforme votre repo en site, puis vous ouvrez votre site en ligne.

C'est aussi la vérification que votre repo est en bon état : un site qui
s'affiche avec le contenu d'exemple du template prouve que tout fonctionne,
**avant** que vous ne commenciez à le modifier. Si quelque chose casse plus
tard, vous saurez que l'erreur vient de vos modifications.

{% include message.html title="À faire une seule fois" message="L'activation se fait une fois pour toutes, juste après la création du repo. Ensuite, GitHub reconstruit et republie votre site tout seul à chaque modification envoyée sur le repo." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Activer GitHub Pages

{% capture step1_projet %}Sous **Build and deployment**, champ **Source**, choisissez **GitHub Actions** (pas « Deploy from a branch »).

Le template contient déjà les instructions de construction (dans `.github/workflows/`) : GitHub les utilise dès que cette option est choisie.{% endcapture %}
{% capture step1_portfolio %}Sous **Build and deployment** :

- champ **Source** : **Deploy from a branch** ;
- champ **Branch** : **main**, et le dossier **/ (root)** ;
- cliquez sur **Save**.

GitHub a peut-être déjà fait ce réglage tout seul, parce que votre repo s'appelle `pseudo.github.io` : vérifiez simplement que ce sont bien ces valeurs.{% endcapture %}
{% capture step1 %}Sur la page de votre repo, onglet **Settings** (en haut à droite), puis **Pages** dans le menu de gauche.

{% include content-tabs.html
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
  title="Étape 1 : Activer GitHub Pages"
  content=step1
  image="activer-pages-settings.png" %}

{% capture step2_projet %}Deux workflows se lancent :

- **Deploy Jekyll site to Pages** construit et publie votre site ;
- **CI** reconstruit le site pour vérifier qu'il n'y a pas d'erreur, liste les blocs « À modifier » et « À supprimer » qui restent dans vos fichiers, et contrôle le poids des fichiers.

Si rien ne se lance, ouvrez **Deploy Jekyll site to Pages** dans la liste de gauche et cliquez sur **Run workflow**.{% endcapture %}
{% capture step2_portfolio %}Un workflow nommé **pages build and deployment** se lance : c'est GitHub qui construit votre site avec le thème du MakerSpace, puis le publie.

Si rien ne se lance, revenez à l'étape 1 et vérifiez que vous avez bien cliqué sur **Save**.{% endcapture %}
{% capture step2 %}Ouvrez l'onglet **Actions** de votre repo.

{% include content-tabs.html
  id="etape-2"
  tab_title1="Repo de projet"
  tab_project1="methodologie-de-projet"
  tab1=step2_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=step2_portfolio
%}

Un rond orange 🟠 signifie « en cours ». Attendez la coche verte ✅ : comptez 1 à 2 minutes. Une croix rouge ❌ signifie une erreur : ouvrez le run pour la lire (voir [Résolution de problèmes](#résolution-de-problèmes)).{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 2 : Suivre la construction"
  content=step2 %}

{% capture step3_projet %}L'adresse est de la forme `https://compte.github.io/nom-du-repo/`. Vous devez voir le site d'exemple du template : page d'accueil, menu de navigation, pages Objectifs, Équipe, etc.{% endcapture %}
{% capture step3_portfolio %}L'adresse est `https://pseudo.github.io`, avec votre pseudo. Vous devez voir le site d'exemple : avatar, nom « Prénom Nom », menu (Accueil, Projets, Compétences, Blog, Docs, Qui suis-je), un projet et un article d'exemple. Cliquez sur **Compétences** : le radar doit s'afficher.

C'est ce contenu d'exemple que vous remplacerez par le vôtre dans la suite de l'atelier.{% endcapture %}
{% capture step3 %}Revenez dans **Settings > Pages** : en haut, une ligne **Your site is live at** affiche l'adresse de votre site, avec un bouton **Visit site**. Ouvrez-la.

{% include content-tabs.html
  id="etape-3"
  tab_title1="Repo de projet"
  tab_project1="methodologie-de-projet"
  tab1=step3_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=step3_portfolio
%}

Parcourez quelques pages : si tout s'affiche avec sa mise en page, votre repo est prêt.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 3 : Ouvrir votre site"
  content=step3 %}

## Rendre le site visible depuis le repo

{% include step-tuto.html
  greyBackground=true
  title="Étape 4 : Mettre à jour le « About »"
  content="Sur la page d'accueil de votre repo, la carte **About** (à droite) est vide par défaut. Cliquez sur l'icône d'engrenage ⚙️ à côté de son titre : cochez **Use your GitHub Pages website** (le lien de votre site apparaît alors dans cette carte, visible par n'importe qui arrivant sur le repo), et profitez-en pour remplir le champ **Description** avec une phrase qui résume votre repo."
  image="about-vide.png"
  image_2="edit-repository-details.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 5 : Image de prévisualisation (optionnel)"
  content="Dans **Settings > General**, tout en bas : **Social preview**. Uploadez une image (1280×640px recommandé) : c'est ce qui s'affiche en aperçu quand le lien de votre repo est partagé (Discord, réseaux sociaux...). Pour un repo de projet, la même image que celle utilisée en tête de votre [README](/workshops/methodologie-de-projet/tutorials/readme-efficace/) fonctionne très bien ici."
  image="social-preview.png" %}

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Croix rouge ❌ dans l'onglet **Actions** | Erreur dans un fichier (souvent le front matter YAML : indentation, guillemets) | Ouvrez le run en échec : le nom du fichier et la ligne en cause sont indiqués |
| Pas de ligne **Your site is live at** dans **Settings > Pages** | GitHub Pages n'est pas activé, ou la première construction n'est pas terminée | Refaites l'étape 1, puis attendez la coche verte dans **Actions** |
| Erreur 404 à l'adresse du site | La construction n'est pas terminée, ou l'adresse est mal recopiée | Attendez la coche verte, puis utilisez le bouton **Visit site** plutôt que de taper l'adresse |
| Le site s'affiche sans mise en page (texte brut, liens cassés) | Portfolio : le champ `baseurl` de `_config.yml` a été modifié | Pour un repo `pseudo.github.io`, il doit valoir `""` |
| Le site ne se met pas à jour après une modification | La construction a échoué, ou n'est pas terminée ; pour un repo de projet, seul le dossier `docs/` déclenche la publication | Onglet **Actions** : attendez la coche verte ou lisez l'erreur, puis rechargez la page avec <kbd>Ctrl</kbd> + <kbd>F5</kbd> |

## Exercice

{% capture exo_projet %}En équipe : une seule personne active GitHub Pages (il faut être
administrateur du repo). Ensuite, chacun ouvre le site sur son propre
ordinateur et vérifie qu'il s'affiche.{% endcapture %}
{% capture exo_portfolio %}Activez GitHub Pages, ouvrez votre site, puis déposez **l'adresse de
votre site** et **l'adresse de votre repo** à l'endroit indiqué par votre
encadrant.{% endcapture %}
{% include content-tabs.html
  id="exercice"
  tab_title1="Repo de projet"
  tab_project1="methodologie-de-projet"
  tab1=exo_projet
  tab_title2="Portfolio"
  tab_project2="portfolio-ingenieur"
  tab2=exo_portfolio
%}

Étape suivante : récupérer le repo sur votre ordinateur pour le modifier
avec VSCode, dans [Git, GitHub Desktop et VSCode](/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/).
