---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Modifier son site Jekyll depuis l'interface GitHub
subtitle: Activer votre site, puis l'éditer sans rien installer
description: Activer la publication GitHub Pages de votre site, puis modifier une page directement depuis le navigateur, sans configurer Git ni Jekyll en local.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: Avoir un repo de projet créé
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: Aucun logiciel requis (interface web GitHub)
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

{% include message.html title="Captures d'écran à venir" message="Les libellés de boutons ci-dessous correspondent à l'interface actuelle de GitHub." status="is-info" icon="fas fa-camera" %}

## Activer la publication (à faire une seule fois)

{% include message.html title="Sans cette étape, rien ne se publie" message="Le template configure déjà le nécessaire, mais GitHub doit être explicitement autorisé à publier votre site : sans ça, docs/ reste un simple dossier de fichiers, jamais un site en ligne. À faire une fois pour toutes, dès la création de votre repo." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 0.1 : Activer GitHub Pages"
  content="Sur votre repo, **Settings** (onglet en haut), puis **Pages** dans le menu de gauche. Sous **Build and deployment > Source**, choisissez **GitHub Actions** (pas « Deploy from a branch »)."
  image="activer-pages-settings.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 0.2 : Vérifier que ça build"
  content="Onglet **Actions** de votre repo : un workflow se lance automatiquement. Attendez la coche verte ✅ (comptez 1 à 2 minutes) : si elle est rouge ❌, ouvrez le run pour voir l'erreur. Une fois vert, votre site est en ligne à l'adresse indiquée dans **Settings > Pages**." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 0.3 : Mettre à jour le « About »"
  content="Sur la page d'accueil de votre repo, la carte **About** (à droite) est vide par défaut. Cliquez sur l'icône d'engrenage ⚙️ à côté de son titre : cochez **Use your GitHub Pages website** (le lien de votre site apparaît alors dans cette carte, visible par n'importe qui arrivant sur le repo), et profitez-en pour remplir le champ **Description** avec la phrase qui résume votre projet."
  image="about-vide.png"
  image_2="edit-repository-details.png" %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 0.4 : Image de prévisualisation (optionnel)"
  content="Toujours dans **Settings > General**, tout en bas : **Social preview**. Uploadez une image (1280×640px recommandé) : c'est ce qui s'affiche en aperçu quand le lien de votre repo est partagé (Discord, réseaux sociaux...). La même image que celle utilisée en tête de votre [README](/workshops/methodologie-de-projet/tutorials/readme-efficace/) fonctionne très bien ici."
  image="social-preview.png" %}

## Le moyen le plus rapide de documenter

Le dossier `docs/` de votre repo est un site Jekyll, hébergé par GitHub
Pages. Pas besoin d'installer quoi que ce soit pour modifier une page : le
navigateur suffit. Pratique pour une correction rapide, ou pour commencer
avant d'installer Ruby en local (voir le tutoriel suivant).

{% include step-tuto.html
  greyBackground=true
  title="Étape 1 : Trouver le fichier"
  content="Sur GitHub.com, naviguez dans le dossier `docs/` de votre repo jusqu'au fichier `.md` à modifier (par exemple `docs/objectifs.md`)." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 2 : Ouvrir l'éditeur"
  content="Cliquez sur l'icône crayon (✏️) en haut à droite du fichier affiché. L'éditeur Markdown de GitHub s'ouvre." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 3 : Modifier et prévisualiser"
  content="Modifiez le texte. Utilisez l'onglet **Preview** en haut de l'éditeur pour vérifier le rendu avant de valider, voir [Syntaxe Markdown](/workshops/methodologie-de-projet/tutorials/syntaxe-markdown/) si besoin." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 4 : Committer"
  content="En bas de la page : un champ pour le titre du commit (résumé court), un champ optionnel pour la description. Choisissez **Commit directly to the `main` branch** pour une modification simple, ou **Create a new branch and start a pull request** si vous voulez une relecture, voir [Utiliser les Pull Requests](/docs/how-to-guides/pull-requests-et-conflits-git/). Cliquez sur **Commit changes**." %}

## Vérifier la publication

Après un commit sur `main`, GitHub Pages reconstruit le site
automatiquement, comptez 1 à 2 minutes. Onglet **Actions** de votre repo
pour suivre la progression du build en direct.

{% include message.html title="Limite de cette méthode" message="Pratique pour une modification ponctuelle, mais vous ne voyez pas le rendu final avant publication (l'onglet Preview de GitHub n'applique pas le thème du site). Pour des changements plus lourds, construire le site en local (tutoriel suivant) permet de vérifier avant de publier." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Pas d'icône crayon visible | Vous n'avez pas les droits d'écriture sur le repo | Vérifiez que vous êtes bien collaborateur du repo |
| Le site ne se met pas à jour après le commit | Le build GitHub Actions a échoué | Onglet **Actions**, ouvrez le run en échec pour voir l'erreur (souvent une erreur de syntaxe dans le front matter) |
| La mise en page semble cassée après modification | Front matter YAML mal formé (indentation, guillemets) | Comparez avec une autre page qui fonctionne |

## Exercice

Modifiez une ligne de votre documentation directement depuis GitHub.com,
prévisualisez, committez, et vérifiez dans l'onglet **Actions** que le
site s'est reconstruit sans erreur.
