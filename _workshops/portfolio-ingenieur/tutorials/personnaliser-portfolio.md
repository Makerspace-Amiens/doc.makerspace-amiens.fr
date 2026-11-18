---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Personnaliser son portfolio
subtitle: Votre nom, votre photo, vos liens et votre présentation, à la place de l'exemple
description: Remplacer l'identité d'exemple du portfolio par la vôtre dans _config.yml, ajouter votre photo, écrire votre page « Qui suis-je » et faire le ménage des contenus d'exemple.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 50

prerequisites:
  - label: Avoir publié son portfolio
    link: /workshops/methodologie-de-projet/tutorials/publier-son-site/
  - label: Savoir cloner, committer et synchroniser avec VSCode
    link: /workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/
  - label: Connaître les bases de Markdown
    link: /workshops/methodologie-de-projet/tutorials/syntaxe-markdown/
softwares:
  - label: VSCode
    link: /docs/tutorials/software/vscode-platformio/installation-vscode/
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Ce que vous allez faire

Votre site est en ligne, mais il présente encore « Prénom Nom », un profil fictif. Dans ce tutoriel, vous faites le **premier passage** : le site devient le vôtre, avec votre nom, votre photo, vos liens et quelques lignes de présentation. Les contenus d'exemple laissent ensuite la place aux vôtres.

Tout se passe dans trois endroits du repo :

| Fichier ou dossier | Ce qu'il contient |
|---|---|
| `_config.yml` | L'identité du site : nom, phrase de présentation, adresse, liens, photo |
| `assets/images/` | Vos images, dont votre photo de profil |
| `about.md` | Le texte de la page « Qui suis-je » |

Le CV, les projets, les articles et la couleur du site ont chacun leur propre guide : ce tutoriel ne fait que poser les bases.

{% include message.html title="Avant de commencer" message="Ouvrez votre repo `pseudo.github.io` dans VSCode et **synchronisez** (icône en bas à gauche) : vous partez ainsi de la dernière version." status="is-info" icon="fas fa-sync-alt" %}

## Étape 1 : Remplir votre identité (`_config.yml`)

{% capture step_yaml %}Ouvrez `_config.yml` à la racine du repo. C'est un fichier **YAML** : chaque ligne associe une clé à une valeur (`title: "Prénom Nom"`). Trois règles suffisent pour ne rien casser :

- l'**indentation** compte : 2 espaces, jamais de tabulation. Une ligne décalée change de bloc ;
- mettez les textes **entre guillemets** droits (`"..."`), surtout s'ils contiennent `:` ou `#` ;
- tout ce qui suit un `#` est un **commentaire** : il explique, il n'est pas lu par le site.

Le haut du fichier est à vous. Le bas (`remote_theme`, `plugins`, `collections`, `defaults`...) fait fonctionner le thème : **ne le modifiez pas**.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Comprendre le fichier"
  content=step_yaml %}

{% capture step_identite %}Remplacez les valeurs d'exemple par les vôtres :

```yaml
title: "Camille Martin"
description: "Élève ingénieure à UniLaSalle Amiens : projets, documentation et journal de bord"

author:
  name: "Camille Martin"
  bio: "Élève ingénieure en I1, attirée par l'électronique embarquée et le prototypage."
  formation: "I1, UniLaSalle Amiens"
  localisation: "Amiens"
```

- `title` s'affiche dans la barre du haut et dans l'onglet du navigateur ;
- `description` est la phrase reprise par les moteurs de recherche et les aperçus de lien ;
- `bio` est la phrase sous votre nom sur la page d'accueil : une ou deux lignes, pas plus.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Votre nom et votre présentation courte"
  content=step_identite %}

{% capture step_url %}Remplacez `pseudo` par votre nom de compte GitHub, exactement comme dans le nom de votre repo :

```yaml
url: "https://camille-martin.github.io"
baseurl: ""
```

Laissez `baseurl` vide (`""`) : votre repo s'appelle `pseudo.github.io`, le site est donc à la racine de l'adresse.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="L'adresse du site"
  content=step_url %}

{% capture step_liens %}Le bloc `links` affiche des icônes cliquables sous votre nom. Chaque lien a trois lignes, précédées d'un tiret :

```yaml
  links:
    - label: "GitHub"
      icon: "github"
      url: "https://github.com/camille-martin"
    - label: "LinkedIn"
      icon: "linkedin"
      url: "https://www.linkedin.com/in/camille-martin"
    - label: "E-mail"
      icon: "mail"
      url: "mailto:camille.martin@etu.unilasalle.fr"
```

Supprimez un lien que vous n'avez pas (les trois lignes, tiret compris), ou ajoutez-en un en copiant un bloc. Le nom de l'icône se choisit sur [lucide.dev/icons](https://lucide.dev/icons/) (ex. `globe`, `youtube`, `instagram`).{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Vos liens"
  content=step_liens %}

## Étape 2 : Ajouter votre photo

{% capture step_photo %}Choisissez une photo de vous, cadrée sur le visage, sur un fond simple : c'est la première chose que voit un recruteur. Préparez-la avant de l'ajouter :

- **carrée**, autour de 400 × 400 pixels (elle s'affiche dans un cercle) ;
- au format **JPG** ;
- avec un nom **sans espace, ni accent, ni majuscule** : `photo-profil.jpg`.

Glissez le fichier dans le dossier `assets/images/` de l'explorateur de VSCode, puis indiquez son chemin dans `_config.yml` :

```yaml
author:
  name: "Camille Martin"
  avatar: "/assets/images/photo-profil.jpg"
```

Le chemin commence par `/` et doit correspondre **exactement** au nom du fichier : `Photo-Profil.JPG` et `photo-profil.jpg` sont deux fichiers différents pour GitHub.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Préparer et déposer la photo"
  content=step_photo %}

{% include message.html title="Pas de photo ?" message="Vous pouvez garder l'avatar par défaut (`avatar.svg`) le temps de trouver une bonne photo. Évitez les selfies, les photos de groupe recadrées et les photos de soirée : ce site sera vu par des recruteurs." status="is-warning" icon="fas fa-user-circle" %}

## Étape 3 : Écrire votre page « Qui suis-je »

{% capture step_about %}Ouvrez `about.md`. Les lignes entre les deux `---` du haut (le **front matter**) règlent la page : ne les touchez pas. Remplacez tout le texte en dessous par votre présentation, en Markdown, en quelques paragraphes :

- **votre parcours** : d'où vous venez, ce qui vous a amené en école d'ingénieur ;
- **ce qui vous intéresse** : les domaines, les projets, les techniques qui vous attirent ;
- **ce que vous cherchez** : un stage, une alternance, un type de mission, même si c'est encore flou.

Écrivez à la première personne, simplement, comme vous vous présenteriez à un ingénieur en entretien. Pour voir le rendu pendant que vous écrivez : <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>V</kbd> dans VSCode.

Sous votre texte, la page affiche votre CV : il se remplit dans un autre fichier, `_data/cv.yml`, qui a son propre guide.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Votre présentation"
  content=step_about %}

## Étape 4 : Faire le ménage des exemples

{% capture step_menage %}Le modèle contient un exemple de chaque type de contenu. Ils servent de **modèles à copier**, mais ils ne doivent pas rester sur votre site :

| Fichier | Contenu | Quand le supprimer |
|---|---|---|
| `_posts/2026-10-16-bienvenue.md` | Article de blog d'exemple | Maintenant, ou quand vous écrivez votre premier article |
| `_projets/mon-premier-projet.md` | Projet d'exemple | Quand vous créez votre premier projet (copiez-le d'abord) |
| `_docs/ma-premiere-doc.md` | Page de documentation d'exemple | Quand vous écrivez votre première doc (copiez-la d'abord) |

Pour supprimer un fichier : clic droit dessus dans l'explorateur de VSCode, puis **Supprimer**. La suppression apparaît ensuite dans le panneau Git, comme une modification.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Les contenus d'exemple"
  content=step_menage %}

## Étape 5 : Publier et vérifier

{% capture step_publier %}Dans le panneau **Contrôle de code source**, indexez vos fichiers, écrivez un message (« Personnalise l'identité du portfolio »), cliquez sur **Validation** puis **Synchroniser les modifications**.

Sur GitHub, l'onglet **Actions** montre la reconstruction du site (1 à 2 minutes). Rechargez ensuite votre site et vérifiez :

- votre nom dans la barre du haut et sur la page d'accueil ;
- votre photo, en haut à gauche et sur la page d'accueil ;
- vos liens : cliquez sur chaque icône ;
- votre texte sur la page **Qui suis-je**.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Envoyer et contrôler le site"
  content=step_publier %}

{% include message.html title="Le site n'a pas changé ?" message="Le navigateur garde souvent l'ancienne version en mémoire. Rechargez sans le cache : <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>R</kbd>." status="is-info" icon="fas fa-redo" %}

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Croix rouge ❌ dans l'onglet **Actions**, le site ne se met plus à jour | Erreur de syntaxe dans `_config.yml` : indentation décalée, tabulation, guillemet oublié | Ouvrez le run en échec : le message indique le numéro de ligne. Comparez avec l'exemple de cette page |
| La photo ne s'affiche pas (image cassée) | Le chemin dans `avatar` ne correspond pas au nom du fichier (majuscule, extension `.JPG`, espace) | Renommez le fichier en minuscules sans espace et recopiez le nom exact |
| Les liens du menu mènent vers une page 404 | `url` ou `baseurl` mal réglé | `url: "https://pseudo.github.io"` avec votre pseudo, et `baseurl: ""` |
| Un lien de l'en-tête n'a pas d'icône | Nom d'icône inconnu | Vérifiez le nom exact sur [lucide.dev/icons](https://lucide.dev/icons/), en minuscules |
| Rien n'a changé sur le site | Push pas fait, reconstruction en cours, ou cache du navigateur | Vérifiez que **Synchroniser** a été cliqué, attendez la coche verte dans **Actions**, puis <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>R</kbd> |

## Exercice

Avant la fin de la séance, votre site doit afficher :

1. votre nom et une bio d'une ou deux lignes ;
2. votre photo, ou l'avatar par défaut en attendant ;
3. au moins un lien qui fonctionne (GitHub ou votre e-mail étudiant) ;
4. un premier paragraphe de présentation sur la page **Qui suis-je**.

Envoyez l'adresse de votre site à votre encadrant.
