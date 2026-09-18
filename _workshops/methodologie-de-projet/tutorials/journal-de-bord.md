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
description: Mettre en place un journal de bord simple pour noter, à chaque séance, ce qui a été fait, décidé, et ce qu'il reste à faire.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

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

## À quoi sert ce tutoriel

C'est la mise en pratique concrète de
[Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/)
et de [Communiquer en équipe](/workshops/methodologie-de-projet/concepts/communiquer-en-equipe/) :
un seul fichier, mis à jour à chaque séance de travail ou point de synchro,
qui devient la mémoire écrite du projet.

## Créer le fichier

{% include step-tuto.html
  greyBackground=true
  title="Emplacement"
  content="Créez `docs/journal.md` (à côté de `docs/objectifs.md` et `docs/etudes.md` déjà présents dans le template). Ajoutez-le au menu du site en lui donnant un front matter comme les autres pages du template (`layout: default`, `nav_order`, `title`)." %}

## Le format d'une entrée

Chaque entrée répond à trois questions, en quelques lignes : ce qui a été
fait, pourquoi (les décisions prises), ce qu'il reste à faire.

{% capture snippet_journal %}## 12/03

**Fait** : Remplacé le servomoteur par un moteur pas à pas + driver
A4988.

**Pourquoi** : le servo décroche au-delà de 200 g, mesuré au
dynamomètre.

**Reste à faire** : réécrire le code de contrôle moteur, commander un
driver de rechange (livraison 3 jours).
{% endcapture %}
{% include code-snippet.html label="Copier le gabarit d'entrée (Markdown)" content=snippet_journal %}

{% include message.html title="Court, mais régulier" message="5 à 10 minutes en fin de séance suffisent. Une entrée courte et systématique vaut mieux qu'une entrée détaillée écrite une fois par mois." status="is-success" icon="fas fa-check-circle" %}

## Quand écrire une entrée

- À la fin de chaque séance de travail, même courte.
- À la fin de chaque point de synchro d'équipe, avec les décisions prises,
  voir [Communiquer en équipe](/workshops/methodologie-de-projet/concepts/communiquer-en-equipe/).
- Dès qu'un choix technique important est fait (en plus, si le choix est
  significatif, du format détaillé vu dans
  [Tracer ses choix techniques](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/)).

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Le journal s'arrête après 2 semaines | Personne n'est explicitement chargé de le tenir à jour | Décidez d'un tour de rôle, ou d'un rappel systématique en fin de réunion |
| Les entrées sont toutes vagues ("on a avancé") | Pas de gabarit suivi | Reprenez le format à 3 questions ci-dessus, systématiquement |
| Trop long à relire en fin de projet | Entrées jamais synthétisées | Voir la passe de synthèse finale dans [Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/) |

## Exercice

Créez `docs/journal.md` maintenant et ajoutez une première entrée pour ce
que vous avez fait aujourd'hui, même bref.
