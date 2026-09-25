---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Rédiger un README de projet efficace
subtitle: La première (et parfois seule) chose que quelqu'un lira
description: Structurer le README à la racine de votre repo pour qu'il donne, en 2 minutes de lecture, tout ce qu'il faut savoir avant de creuser.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 65

prerequisites:
  - label: Avoir un repo de projet créé
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: Un éditeur de texte
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Pourquoi le README compte autant

Le fichier `README.md` à la racine de votre repo s'affiche automatiquement
sur la page GitHub du projet : c'est souvent la toute première chose que
lira un jury, un encadrant, ou une prochaine équipe, **avant** même
d'ouvrir votre site de documentation. Voir aussi
[Rendre son projet transmissible](/workshops/methodologie-de-projet/concepts/rendre-projet-transmissible/)
pour le principe général.

{% include message.html title="Le test des 30 secondes" message="Montrez votre README à quelqu'un qui n'a jamais vu votre projet, chronomètre en main. En 30 secondes, il doit pouvoir dire ce que fait le projet et s'il l'intéresse. Si ce n'est pas le cas, ce n'est pas un problème de rédaction, c'est un problème de structure, voir plus bas." status="is-warning" icon="fas fa-clock" %}

## Ce que chaque section doit faire, précisément

Un bon README répond à quatre questions, dans cet ordre : chacune a un
rôle précis, pas juste "un peu plus d'info" :

- **Titre + une phrase** : le nom du projet (pas une description en guise
  de titre), puis une seule phrase qui dit *ce que ça fait*, pas *comment
  vous l'avez fait*. "Robot de tri de déchets pour le Forum des Sciences",
  pas "Projet réalisé dans le cadre de l'UE Méthodologie".
- **Documentation complète** : un lien, pas un résumé. Le README pointe
  vers le site `docs/`, il ne le duplique pas, voir juste en dessous.
- **Limites connues** : ce qui ne marche pas encore, ou pas parfaitement,
  voir [Rendre son projet transmissible](/workshops/methodologie-de-projet/concepts/rendre-projet-transmissible/)
  pour pourquoi c'est important de le dire.
- **Équipe et licence** : qui a fait le projet (et comment vous
  recontacter), et sous quelle licence il est réutilisable, voir
  [Comprendre la propriété intellectuelle de son projet](/docs/how-to-guides/propriete-intellectuelle-projet/).

{% include message.html title="Pas de « comment le lancer » dans le README" message="Comment faire fonctionner ou reproduire votre projet a sa place dans le site de documentation (docs/), pas dans le README : c'est justement le rôle de la documentation complète. Le README pointe vers elle, il ne refait pas le travail." status="is-info" icon="fas fa-info-circle" %}

## Une image vaut mille lignes de texte

Une photo ou un GIF de votre prototype en action, juste après le titre,
convainc plus vite que n'importe quel paragraphe. Prenez-la au moment où
vous avez déjà un résultat visuel, voir
[Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/),
pas en dernière minute avant le rendu.

```markdown
![Le robot de tri en fonctionnement](docs/images/robot-en-action.gif)
```

## Vague vs structuré : un exemple

{% capture tab1 %}

```markdown
# Projet de robot de tri

Projet réalisé au MakerSpace pour le Forum des Sciences.
```

{% endcapture %}

{% capture tab2 %}

```markdown
# Robot de tri de déchets

![Le robot en action](docs/images/robot-en-action.gif)

Robot capable de trier 3 catégories de déchets (plastique, verre, métal),
conçu pour une démonstration pédagogique au Forum des Sciences d'Amiens.

## Documentation complète

Voir le [site de documentation](https://votre-projet.github.io) pour le
détail de la conception, des choix techniques et des tests.

## Limites connues

- Taux de tri correct : ~80% (voir les résultats de tests détaillés)
- Non testé sous forte luminosité directe

## Équipe

Projet réalisé par [Prénom Nom](mailto:...), [Prénom Nom](mailto:...)
au MakerSpace UniLaSalle Amiens, 2026.

## Licence

MIT (voir [LICENSE](LICENSE))
```

{% endcapture %}

{% include content-tabs.html
  id="readme-avant-apres"
  tab_title1="❌ README minimal"
  tab_title2="✅ README structuré"
  tab1=tab1
  tab2=tab2
%}

## Un gabarit à copier

{% capture snippet_readme %}# Nom du projet

![Le projet en action](docs/images/apercu.gif)

Une phrase de description : ce que fait le projet, pour qui.

## Documentation complète

Voir le [site de documentation](...).

## Limites connues

- ...

## Équipe

Projet réalisé par [Prénom Nom](mailto:...), [Prénom Nom](mailto:...)

## Licence

... (voir [LICENSE](LICENSE))
{% endcapture %}
{% include code-snippet.html label="Copier le gabarit (Markdown)" content=snippet_readme %}

{% include message.html title="Un README n'est pas la documentation complète" message="Il pointe vers elle, il ne la remplace pas. Si votre README dépasse une page d'écran, une bonne partie de son contenu devrait probablement vivre dans docs/ à la place." status="is-info" icon="fas fa-info-circle" %}

## Un petit plus optionnel : les badges

Les petites pastilles colorées en haut de beaucoup de README GitHub
(licence, statut de build...) se génèrent gratuitement sur
[shields.io](https://shields.io), sans rien installer. Un badge de
licence, par exemple :

```markdown
![License: MIT](https://img.shields.io/badge/license-MIT-green)
```

Ce n'est que de la décoration utile, ne passez pas de temps dessus si le
reste du README n'est pas déjà solide.

## Erreurs fréquentes

| Erreur | Pourquoi ça pose problème | À faire à la place |
|---|---|---|
| Le titre est une phrase descriptive longue | Ne se lit pas comme un nom de projet | Un nom court, la description juste en dessous |
| Copier toute la doc technique dans le README | Devient illisible, jamais à jour sur les deux fronts | Un lien vers `docs/`, rien de plus |
| Aucune limite mentionnée | Donne une fausse impression de projet fini | Voir le README structuré ci-dessus |
| Écrit une seule fois, jamais relu | Devient obsolète dès que le projet évolue | Relire à chaque jalon important, voir [Gérer le temps et les jalons](/workshops/methodologie-de-projet/concepts/gerer-temps-jalons/) |

## Exercice

Ouvrez le `README.md` de votre repo (créé automatiquement depuis le
template) et réécrivez-le en suivant la structure ci-dessus, avec le vrai
contenu de votre projet. Faites-le relire par quelqu'un d'extérieur à
l'équipe avec le test des 30 secondes.
