---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Tenir un journal de bord
subtitle: L'outil concret pour documenter au fil de l'eau
description: Tenir un journal de bord personnel dans le template du projet, une page par séance de travail, pour noter ce qui a été fait, décidé, et ce qu'il reste à faire.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: Avoir un repo de projet créé
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: Un éditeur de texte (VSCode)
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

## À quoi sert ce tutoriel

C'est la mise en pratique concrète de
[Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/)
et de [Communiquer en équipe](/workshops/methodologie-de-projet/concepts/communiquer-en-equipe/) :
une page par séance de travail, qui devient la mémoire écrite du projet.

## Comment le template organise le journal

Chaque membre de l'équipe tient **son propre** journal : une page par séance,
que la séance ait lieu pendant les créneaux prévus ou en dehors. Le dossier
`docs/journal/` du template est organisé ainsi :

```text
docs/journal/
├── index.md              page « Journal de bord » (consignes)
├── _modele-seance.md     modèle à copier (invisible sur le site)
├── etudiant-1/
│   ├── index.md          page de l'étudiant 1
│   └── 2026-09-23.md     une séance
└── etudiant-2/
    └── index.md          page de l'étudiant 2
```

Le menu du site affiche « Journal de bord », puis un sous-menu par étudiant,
puis une page par séance dans l'ordre chronologique.

## Préparer son journal (une seule fois)

{% include step-tuto.html
  greyBackground=true
  title="Étape 1 : Renommer votre dossier (facultatif)"
  content="Dans `docs/journal/`, vous pouvez renommer le dossier `etudiant-1` avec votre prénom (par exemple `alice`), sans accent ni espace : c'est plus clair pour retrouver vos fichiers. Si votre équipe compte plus de deux personnes, dupliquez un dossier étudiant pour chaque membre supplémentaire." %}

{% capture step_journal_2 %}Ouvrez `docs/journal/alice/index.md` et remplacez « Étudiant 1 » par votre prénom et votre nom **dans le titre** :

```yaml
---
layout: default
title: Alice Martin
parent: Journal de bord
has_children: true
---
```

Supprimez ensuite le bloc **À modifier** qui suit l'en-tête.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 2 : Mettre votre nom sur votre page"
  content=step_journal_2 %}

{% include message.html title="Le titre est le lien entre votre page et vos séances" message="Le champ `parent` de chacune de vos séances doit être **exactement** le `title` de cette page (ici `Alice Martin`). S'il diffère d'une lettre, vos séances n'apparaissent pas sous votre nom dans le menu." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Ajouter une séance (à chaque séance)

{% capture step_journal_3 %}Copiez `docs/journal/_modele-seance.md` dans **votre** dossier et renommez la copie avec la date du jour au format `AAAA-MM-JJ` (par exemple `2026-09-23.md`). Le nom du fichier commence par la date : les séances s'affichent ainsi dans l'ordre chronologique.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 1 : Copier le modèle"
  content=step_journal_3 %}

{% capture step_journal_4 %}Modifiez l'en-tête de la copie :

```yaml
---
layout: default
title: "2026-09-23 : découpe laser du boîtier"
parent: Alice Martin
grand_parent: Journal de bord
---
```

- `title` : la date, puis le sujet de la séance.
- `parent` : le titre de votre page étudiant, exactement.

Supprimez aussi le commentaire HTML (`<!-- ... -->`) en haut du fichier : c'est une consigne du modèle.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 2 : Remplir l'en-tête"
  content=step_journal_4 %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 3 : Remplir les trois rubriques"
  content="Renseignez le type de séance (planifiée ou hors créneau), sa durée, puis les trois rubriques : **Fait**, **Pourquoi**, **Reste à faire**. Voir le format ci-dessous." %}

## Le format d'une séance

Chaque page répond à trois questions, en quelques lignes : ce qui a été
fait, pourquoi (les décisions prises), ce qu'il reste à faire. Voici la page
d'exemple du template :

{% capture snippet_journal %}# 2026-09-23 : découpe laser du boîtier

**Séance :** planifiée · **Durée :** 2 h

## Fait

Découpe du boîtier en contreplaqué 3 mm. Premier assemblage à blanc.

## Pourquoi

Les encoches étaient trop serrées : ajout d'une compensation de 0,1 mm dans le
fichier de découpe (réglage mesuré sur une chute).

## Reste à faire

- Redécouper la face avant avec la compensation.
- Demander à l'équipe électronique l'emplacement définitif du connecteur USB.
{% endcapture %}
{% include code-snippet.html label="Copier l'exemple de séance (Markdown)" content=snippet_journal %}

{% include message.html title="Court, mais régulier" message="5 à 10 minutes en fin de séance suffisent. Une page courte et systématique vaut mieux qu'une page détaillée écrite une fois par mois. « Pourquoi » est la rubrique la plus précieuse : c'est elle qu'une prochaine équipe cherchera." status="is-success" icon="fas fa-check-circle" %}

## Quand écrire une séance

- À la fin de chaque séance de travail, même courte, y compris **en dehors
  des créneaux prévus**.
- À la fin de chaque point de synchro d'équipe, avec les décisions prises
  (voir [Communiquer en équipe](/workshops/methodologie-de-projet/concepts/communiquer-en-equipe/)).
- Dès qu'un choix technique important est fait (en plus, si le choix est
  significatif, du format détaillé vu dans
  [Tracer ses choix techniques](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/)).

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Mes séances n'apparaissent pas sous mon nom dans le menu | Le `parent` d'une séance ne correspond pas exactement au `title` de votre page | Recopiez le titre de votre page étudiant dans le `parent` de chaque séance |
| Les séances ne sont pas dans l'ordre | Le titre ne commence pas par la date `AAAA-MM-JJ` | Renommez le titre et le fichier avec la date en tête |
| Le modèle `_modele-seance.md` n'apparaît pas dans le menu | C'est normal : son nom commence par « _ », il est invisible sur le site | Copiez-le, ne le modifiez pas |
| Le journal s'arrête après 2 semaines | Personne ne s'en occupe explicitement | Décidez d'un rappel systématique en fin de réunion |
| Trop long à relire en fin de projet | Séances jamais synthétisées | Voir la passe de synthèse finale dans [Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/) |

## Exercice

Préparez votre page étudiant (dossier et titre), supprimez la séance
d'exemple `2026-09-23.md`, puis créez votre première séance avec ce que
vous avez fait aujourd'hui, même bref.
