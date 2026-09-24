---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Personnaliser le template de son projet
subtitle: Ce qu'il faut modifier, ce qu'il faut supprimer, et dans quel ordre
description: Repérer les éléments d'exemple du template, les remplacer par le contenu de votre projet et supprimer les consignes avant le rendu.
author: Adrien Bracq

time: 2
difficulty: 1
todo: 60

prerequisites:
  - label: Avoir créé et cloné son repo depuis le template
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: VSCode (ou l'éditeur web de GitHub)
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Un template est un exemple complet, pas un squelette vide

Le repo que vous venez de créer contient un projet **d'exemple** (le robot
Otto, un robot de tri de déchets) documenté page par page : chaque page
montre à quoi ressemble une bonne documentation. Votre travail consiste à
remplacer cet exemple par votre projet, sans casser la structure.

Le template vous aide à ne rien oublier avec deux marqueurs :

| Marqueur | Couleur sur le site | Ce que ça veut dire | Ce qu'il faut faire |
|---|---|---|---|
| **À modifier** | Jaune | Contenu d'exemple | Le remplacer par le vôtre, puis supprimer le bloc |
| **À supprimer** | Rouge | Consigne du template | La lire, l'appliquer, puis supprimer le bloc avant le rendu final |

Dans les fichiers, un marqueur est un bloc de citation précédé d'une ligne
`{: .a_modifier }` ou `{: .a_supprimer }` :

```markdown
{: .a_modifier }
> Remplacez ce texte par la présentation de votre projet.
```

Dans les fichiers `README.md` (racine et dossier `project/`), la même idée
s'écrit avec une alerte GitHub : `> [!IMPORTANT]` suivie de **À modifier**.

{% include message.html title="Le repo vous dit ce qui reste à faire" message="À chaque push, GitHub Actions compte les blocs « À modifier » et « À supprimer » qui restent : onglet **Actions** de votre repo, dernier run du workflow **CI**, résumé « Blocs du template restants ». Chaque bloc est aussi signalé par un avertissement sur son fichier. Ça ne bloque pas la publication du site : votre objectif avant le rendu final est simplement d'arriver à 0." status="is-info" icon="fas fa-info-circle" %}

## 1. Configurer le site (`docs/_config.yml`)

C'est la **toute première chose à modifier**, avant n'importe quelle page.
Trois lignes sont marquées `À MODIFIER` :

```yaml
title: Robot de tri de déchets
description: Robot qui trie les déchets pour le Forum des Sciences d'Amiens
gh_edit_repository: "https://github.com/votre-compte/robot-tri-dechets"
```

- `title` : le nom de votre projet, affiché en haut du menu du site.
- `description` : une phrase qui résume le projet.
- `gh_edit_repository` : l'adresse **de votre repo** (sans `/` à la fin).

{% include message.html title="Ne pas oublier gh_edit_repository" message="Cette adresse alimente le bouton « Notre repo GitHub » de la page d'accueil, les liens vers vos dossiers de fichiers, et le lien « Modifier cette page sur GitHub » en bas de chaque page. Si vous l'oubliez, ils pointent tous vers le repo du template, sur lequel vous n'avez aucun droit d'écriture." status="is-warning" icon="fas fa-exclamation-triangle" %}

Tout ce qui se trouve sous la ligne « NE RIEN MODIFIER CI-DESSOUS » (thème,
recherche, diagrammes, encadrés) fait fonctionner le site : laissez-le tel
quel.

## 2. Remplacer le README

Le `README.md` à la racine est la vitrine de votre repo sur GitHub. Le
template en fournit un très court : remplacez le nom, la phrase de
présentation et la liste de l'équipe, mettez le bon lien vers votre site
publié, puis supprimez le bloc **À modifier** en haut. La méthode complète
est dans [Rédiger un README de projet efficace](/workshops/methodologie-de-projet/tutorials/readme-efficace/).

L'adresse de votre site publié est de la forme
`https://votre-compte.github.io/nom-du-repo/` (voir
[Modifier son site Jekyll depuis l'interface GitHub](/workshops/methodologie-de-projet/tutorials/modifier-site-github/)
pour l'activer).

## 3. Personnaliser la page d'accueil (`docs/index.md`)

La page d'accueil contient cinq éléments à remplacer :

| Élément | Où | Ce qu'il faut faire |
|---|---|---|
| Titre et présentation | Début du fichier | Réécrire : but du projet, public, problème résolu |
| Bouton « Notre projet sur Onshape » | Sous la présentation | Mettre le lien de partage de votre document Onshape |
| Modèle 3D | Section « Le projet en 3D » | Exporter votre assemblage en `.glb`, le placer dans `docs/assets/models/`, changer le nom dans la page, supprimer `Otto.glb` |
| Poster | Section « Poster » | Remplacer `docs/assets/images/poster.jpg` par votre poster |
| Vidéo | Section « Vidéo » | Remplacer `docs/assets/images/intro_amiens.mp4` par votre vidéo |

Les limites de poids à respecter (25 Mo pour le modèle 3D et la vidéo, 2 Mo
pour une image) et la marche à suivre pour le poster et la vidéo sont dans
[Créer le poster et la vidéo de présentation](/workshops/methodologie-de-projet/tutorials/poster-video-presentation/).
Vous pouvez laisser ces trois éléments d'exemple en place jusqu'à la fin du
projet : ils ne coûtent rien, mais ne les oubliez pas.

## 4. Remplir les pages de documentation

Chaque page du dossier `docs/` correspond à une étape du projet, dans
l'ordre du menu. Chacune contient des consignes (« À supprimer »), un exemple
(« À modifier ») et un lien vers le tutoriel qui explique comment la remplir.

| Page | Ce qu'elle contient | Tutoriel ou concept associé |
|---|---|---|
| `objectifs.md` | Contexte, problème et public, cahier des charges (tableau des fonctions) | [Définir son besoin et son cahier des charges](/workshops/methodologie-de-projet/concepts/definir-son-besoin/) |
| `equipe.md` | Membres, rôles (un responsable et un backup), fonctionnement, suivi des tâches | [Constituer et organiser son équipe](/workshops/methodologie-de-projet/concepts/constituer-organiser-equipe/) |
| `etudes.md` | Recherche de l'existant, pré-étude de faisabilité, choix techniques | [Rechercher l'existant](/workshops/methodologie-de-projet/concepts/rechercher-existant-faisabilite/), [Tracer ses choix techniques](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/) |
| `conception/` | Architecture globale, puis une page par sous-système (mécanique, électronique, firmware, software) | [Mécanique](/workshops/methodologie-de-projet/tutorials/documenter-systeme-mecanique/), [Électronique](/workshops/methodologie-de-projet/tutorials/documenter-carte-electronique/), [Code](/workshops/methodologie-de-projet/tutorials/documenter-code-firmware/) |
| `fabrication/` | Guide pour refaire le projet, une étape par page | [Documenter l'assemblage et le montage](/workshops/methodologie-de-projet/tutorials/documenter-assemblage-montage/) |
| `tests.md` | Protocoles de test et résultats mesurés | [Documenter les tests et résultats](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/) |
| `journal/` | Un journal par étudiant, une page par séance | [Tenir un journal de bord](/workshops/methodologie-de-projet/tutorials/journal-de-bord/) |

Le découpage est un **point de départ** : vous pouvez ajouter, renommer,
diviser ou supprimer des pages selon votre projet (pas de partie logicielle ?
supprimez `software.md`).

## 5. Ajouter, renommer ou supprimer une page

Le menu du site est construit à partir de l'en-tête (le *front matter*, entre
les deux lignes `---`) de chaque page :

| Champ | Rôle |
|---|---|
| `title` | Nom de la page dans le menu et titre affiché |
| `nav_order` | Position dans le menu (1, 2, 3...) |
| `parent` | **Exactement** le `title` de la page parente |
| `grand_parent` | Le `title` de la page parente de la page parente (pages à trois niveaux) |
| `has_children: true` | À mettre sur une page qui a des sous-pages |

Pour ajouter un sous-système (une pince, par exemple) : copiez la page
d'exemple `docs/conception/mecanique/boitier.md` dans le même dossier, nommez
la copie `pince.md`, puis changez son `title` et son `nav_order`. Son
`parent` et son `grand_parent` restent identiques.

{% include message.html title="Une page qui n'apparaît pas dans le menu" message="Presque toujours, le `parent` ne correspond pas exactement au `title` de la page parente (une majuscule, un accent ou un espace de différence), ou le `nav_order` est identique à celui d'une autre page. Comparez avec une page d'exemple qui fonctionne." status="is-warning" icon="fas fa-exclamation-triangle" %}

## 6. Compléter le dossier `project/`

Le dossier `project/` contient les **sources** de votre projet, ce que
quelqu'un doit pouvoir récupérer pour refaire ou modifier votre travail.
Chaque sous-dossier a un `README.md` avec un bloc **À modifier**.

| Dossier | Ce qu'il faut renseigner |
|---|---|
| `project/README.md` | La liste des dossiers que vous gardez (supprimez les autres) |
| `project/mcad/` | Lien Onshape, date du dernier export, export `projet.step` de l'assemblage |
| `project/mcad/3d-print/` | Un fichier `.3mf` par pièce et le tableau des réglages d'impression |
| `project/mcad/laser-cutting/` | Un fichier `.svg` ou `.dxf` par pièce et le tableau matériau et épaisseur |
| `project/ecad/` | Un dossier par projet KiCad (`.kicad_pro`, `.kicad_sch`, `.kicad_pcb`) |
| `project/firmware/` | Un dossier par projet PlatformIO, avec la carte cible et les bibliothèques |
| `project/software/` | Langage, dépendances, procédure d'installation |

Ce qui s'affiche **sur le site** (images, modèle `.glb`, copie des fichiers
KiCad) va dans `docs/assets/`, pas dans `project/`. Voir
[Documenter un système mécanique](/workshops/methodologie-de-projet/tutorials/documenter-systeme-mecanique/)
et [Documenter une carte électronique](/workshops/methodologie-de-projet/tutorials/documenter-carte-electronique/).

## 7. Supprimer les fichiers d'exemple

Quand vos propres fichiers sont en place, supprimez ceux du template :

- `docs/assets/models/Otto.glb`
- `docs/assets/kicad/Otto-ESP32-XIAO-REFEREE.kicad_sch` et `.kicad_pcb`
- `docs/assets/images/poster.jpg` et `intro_amiens.mp4` (si remplacés par des fichiers de noms différents)
- `docs/assets/data/decharge-batterie.csv`
- `docs/journal/etudiant-1/2026-09-23.md` (séance d'exemple)

Ne les supprimez **qu'après** avoir changé les pages qui les utilisent : une
page qui cherche un fichier absent affiche une zone vide ou une erreur.

## Les composants prêts à l'emploi

Le template fournit quatre composants que vous pouvez utiliser dans
n'importe quelle page. Le chemin d'un fichier se donne **depuis le dossier
`docs/`**, quelle que soit la page.

{% raw %}

| Pour afficher | Ce que vous écrivez |
|---|---|
| Un modèle 3D | `{% include model3d.html src="assets/models/mon-modele.glb" alt="Description" %}` |
| Un schéma ou un PCB KiCad | `{% include kicad.html src="assets/kicad/ma-carte.kicad_sch" %}` |
| Un graphique tracé depuis un CSV | `{% include graphique.html csv="assets/data/mesures.csv" titre="Titre" y="Unité" %}` |
| Un diagramme | Un bloc de code `mermaid` (voir la page Conception du template) |
| Une formule | `$$ ... $$` (voir [Documenter les tests et résultats](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/)) |

{% endraw %}

## Les règles des fichiers du repo

- **Noms de fichiers** : pas d'espaces ni d'accents (`support-moteur.step`, pas
  `Support Moteur.step`). Ils cassent les liens du site.
- **Poids** : au-delà de **25 Mo**, le workflow CI échoue (compressez le
  fichier ou hébergez-le ailleurs). Une image de plus de **2 Mo** déclenche un
  avertissement : réduisez sa résolution.
- **Fichiers ignorés par Git** : le template ne suit pas certains fichiers
  (`.stl`, exports `.csv` ou `.xml` de nomenclature hors de `docs/`, archives
  `.zip`, `.hex`...). Si un fichier n'apparaît pas dans GitHub Desktop, c'est
  probablement le `.gitignore`. Pour l'impression 3D, utilisez le format `.3mf`
  plutôt que `.stl`.

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Le lien « Modifier cette page sur GitHub » ouvre le repo du template | `gh_edit_repository` pas modifié | Corrigez la ligne dans `docs/_config.yml` (étape 1) |
| Le workflow CI signale des blocs restants | Des blocs « À modifier » ou « À supprimer » sont encore dans vos fichiers | Ouvrez le résumé du run : la liste donne chaque fichier et chaque ligne |
| Le workflow CI échoue sur « Poids des fichiers » | Un fichier dépasse 25 Mo | Compressez-le (vidéo en 720p par exemple) ou hébergez-le ailleurs |
| Le modèle 3D ou le schéma KiCad s'affiche vide | Mauvais chemin, ou fichier resté dans `project/` | Le fichier doit être dans `docs/assets/`, le chemin se donne depuis `docs/` |
| Une formule s'affiche en texte brut | Un seul `$` au lieu de `$$` | Utilisez toujours deux `$$` |

## Exercice

En équipe, dans cet ordre : configurez `docs/_config.yml`, remplacez le
README, puis parcourez le résumé de la CI sur GitHub (onglet **Actions**) pour
noter combien de blocs restent. Répartissez ensuite les pages entre les
membres de l'équipe, selon vos rôles.
