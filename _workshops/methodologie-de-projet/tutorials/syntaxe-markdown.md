---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Syntaxe Markdown
subtitle: Écrire de la documentation sans jamais toucher au HTML
description: Les bases de la syntaxe Markdown, suffisantes pour écrire toute la documentation de votre projet.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 70

prerequisites:
  - label: Aucun pré-requis nécessaire
    link: ""
softwares:
  - label: Un éditeur de texte (VSCode par exemple)
    link: "https://code.visualstudio.com"
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Pourquoi Markdown

Toute la documentation de votre projet (`docs/`) s'écrit en Markdown : un
langage de balisage léger, en texte brut, qui se transforme automatiquement
en pages web mises en forme. Pas besoin de connaître le HTML : quelques
symboles suffisent.

### Un texte qui reste lisible même non converti

Markdown a été créé en 2004 par John Gruber, avec l'aide d'Aaron Swartz,
avec un objectif précis :
qu'un texte écrit en Markdown reste **lisible et compréhensible tel quel**,
même sans être transformé en page web, contrairement au HTML.

{% capture tab_html %}

```html
<h2>Objectifs</h2>
<p>Concevoir un robot capable de trier <strong>3 catégories</strong>
de déchets, pour une démonstration au Forum des Sciences.</p>
<ul>
  <li>Plastique</li>
  <li>Verre</li>
  <li>Métal</li>
</ul>
```

{% endcapture %}

{% capture tab_md %}

```markdown
## Objectifs

Concevoir un robot capable de trier **3 catégories** de déchets, pour
une démonstration au Forum des Sciences.

- Plastique
- Verre
- Métal
```

{% endcapture %}

{% include content-tabs.html
  id="html-vs-markdown"
  tab_title1="❌ HTML"
  tab_title2="✅ Markdown"
  tab1=tab_html
  tab2=tab_md
%}

Le même contenu, mais le Markdown se lit directement : pas besoin de
mentalement retirer des balises pour comprendre le texte.

### Pourquoi pas Word ou Google Docs

- **Fichier texte brut** : Git le suit comme n'importe quel fichier de
  code, avec un historique clair ligne par ligne. Essayez de faire un
  diff lisible sur un `.docx` pour voir la différence.
- **Pas de format propriétaire** : un `.md` s'ouvre avec absolument
  n'importe quel éditeur de texte, sur n'importe quel système, encore
  dans 20 ans. Un `.docx` dépend de Word (ou d'un logiciel compatible)
  pour rester lisible.
- **Vit au même endroit que le reste du projet** : la documentation
  versionnée dans le même repo que le code et les fichiers CAO, pas
  perdue dans un Drive à part. Ça rejoint directement
  [Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/).

### Où vous le retrouverez, au-delà de ce projet

Markdown n'est pas propre à ce site. C'est devenu une sorte de langue
commune de la documentation technique :

- **GitHub et GitLab** : README, Issues, Pull Requests, commentaires
  (tout ce que vous avez déjà écrit dans les tutoriels précédents).
- **Discord et Slack** : la mise en forme des messages (`**gras**`,
  `*italique*`, `` `code` ``) reprend en grande partie la syntaxe Markdown.
- **Notion, Obsidian** et la plupart des outils de prise de notes récents.
- **Les générateurs de sites statiques** : ce site tourne sous Jekyll,
  mais Hugo, Docusaurus ou MkDocs (très utilisés pour la documentation
  technique en entreprise) fonctionnent sur le même principe.
- **Jupyter Notebook et R Markdown**, en recherche scientifique, pour
  mélanger texte explicatif et code exécutable.
- **Reddit, Stack Overflow** et une bonne partie des forums techniques.

Apprendre Markdown maintenant, c'est une compétence directement
réutilisable bien au-delà de cet atelier.

## Les bases

### Titres

```markdown
# Titre de niveau 1
## Titre de niveau 2
### Titre de niveau 3
```

{% include message.html title="Un seul niveau 1 par page" message="Sur ce site, le titre de niveau 1 est généré automatiquement à partir du champ title du front matter. Commencez toujours le corps de vos pages à ##, jamais à #." status="is-warning" icon="fas fa-exclamation-triangle" %}

### Mise en forme du texte

{% capture tab1 %}

```markdown
**Texte en gras**
*Texte en italique*
***Gras et italique***
```

{% endcapture %}

{% capture tab2 %}

**Texte en gras**
*Texte en italique*
***Gras et italique***

{% endcapture %}

{% include content-tabs.html
  id="markdown-emphase"
  tab_title1="Source"
  tab_title2="Rendu"
  tab1=tab1
  tab2=tab2
%}

### Listes

{% capture tab3 %}

```markdown
- Élément 1
- Élément 2
  - Sous-élément

1. Premier
2. Deuxième
```

{% endcapture %}

{% capture tab4 %}

- Élément 1
- Élément 2
  - Sous-élément

1. Premier
2. Deuxième

{% endcapture %}

{% include content-tabs.html
  id="markdown-listes"
  tab_title1="Source"
  tab_title2="Rendu"
  tab1=tab3
  tab2=tab4
%}

### Liens et images

```markdown
[Texte du lien](https://exemple.com)
![Texte alternatif](chemin/vers/image.png)
```

### Citations et code

{% capture tab5 %}

````markdown
> Une citation.

Du `code inline`.

```cpp
void setup() {
  pinMode(13, OUTPUT);
}
```
````

{% endcapture %}

{% capture tab6 %}

> Une citation.

Du `code inline`.

```cpp
void setup() {
  pinMode(13, OUTPUT);
}
```

{% endcapture %}

{% include content-tabs.html
  id="markdown-code"
  tab_title1="Source"
  tab_title2="Rendu"
  tab1=tab5
  tab2=tab6
%}

{% include message.html title="Toujours nommer le langage" message="Après les trois backticks d'ouverture, précisez le langage (```cpp,```python, ```bash...) : ça active la coloration syntaxique et c'est une règle de style de ce site." status="is-info" icon="fas fa-info-circle" %}

### Tableaux

```markdown
| En-tête 1 | En-tête 2 |
|---|---|
| Cellule 1 | Cellule 2 |
```

C'est le format utilisé pour la plupart des gabarits de cet atelier. Voir
par exemple le tableau de jalons dans
[Gérer le temps et les jalons](/workshops/methodologie-de-projet/concepts/gerer-temps-jalons/).

## Aller plus loin sur le site Jekyll de votre projet

Le site Jekyll de votre projet (dossier `docs/` de votre repo) est basé
sur le thème [Just the Docs](https://just-the-docs.com), qui ajoute quelques
extras utiles au Markdown standard, directement utilisables dans vos
pages. Ça vaut le coup de parcourir sa documentation pour voir toutes
les possibilités, deux exemples pour donner envie :

**Un encart coloré**, sans écrire de HTML : ajoutez `{: .note }` (bleu) ou
`{: .warning }` (rouge) juste avant une citation.

```markdown
{: .warning }
> N'oubliez jamais de tester votre robot avant la démonstration.
```

Ces deux encarts sont déjà définis dans la configuration du template
(`docs/_config.yml`, rubrique `callouts`). Il en définit deux autres, qui servent à
signaler ce qu'il reste à faire : `{: .a_modifier }` (jaune) pour le contenu
d'exemple à remplacer, `{: .a_supprimer }` (rouge) pour les consignes à
retirer avant le rendu. Voir
[Personnaliser le template de son projet](/workshops/methodologie-de-projet/tutorials/personnaliser-template/).

**Un lien transformé en bouton** : ajoutez `{: .btn }` après un lien.

```markdown
[Voir le projet sur Onshape](https://cad.onshape.com/...){: .btn .btn-blue }
```

Le bouton « Notre projet sur Onshape » de la page d'accueil de votre
template utilise déjà cette syntaxe. Ouvrez `docs/index.md` pour voir
l'exemple réel.

**Un diagramme**, écrit en texte : un bloc de code de langage `mermaid`.
Le template en contient un dans `docs/conception/index.md` (schéma bloc du
projet) et un dans `docs/etudes.md` (diagramme FAST) : modifiez-les
directement dans le fichier.

**Une formule mathématique**, entre deux `$$` : voir
[Documenter les tests et résultats](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/).

## Exercice

Ouvrez `docs/objectifs.md` de votre projet (rempli dans le tutoriel sur le
cahier des charges) et vérifiez qu'il utilise correctement les titres, une
liste, et au moins un lien. Corrigez si besoin.
