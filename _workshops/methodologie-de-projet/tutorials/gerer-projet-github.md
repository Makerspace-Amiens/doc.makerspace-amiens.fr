---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Gérer son projet avec GitHub - Issues et Projects
subtitle: Répartir et suivre les tâches sans post-it ni fichier Excel
description: Utiliser les Issues et les Projects de GitHub pour découper le travail en tâches, les assigner, et suivre l'avancement en équipe.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

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

{% include message.html title="Captures d'écran à venir" message="L'interface GitHub évolue régulièrement : les libellés de boutons ci-dessous correspondent à l'interface actuelle." status="is-info" icon="fas fa-camera" %}

## Pourquoi pas juste une liste sur papier

Un post-it ou une liste partagée fonctionne les deux premières semaines,
puis se perd. Les Issues et Projects de GitHub vivent au même endroit que
le code et la documentation, restent visibles par toute l'équipe, et
gardent un historique : qui a fait quoi, et quand.

## Le vocabulaire

- **Issue** : une fiche représentant une tâche, un bug ou une question à
  trancher. Elle a un titre, une description, et peut être assignée à
  quelqu'un.
- **Assignee** : la personne responsable de cette Issue. Une Issue sans
  assignee ne sera probablement faite par personne.
- **Label** : une étiquette de couleur pour trier les Issues (`bug`,
  `mécanique`, `urgent`...).
- **Project** : un tableau visuel (kanban) qui affiche vos Issues sous
  forme de cartes, réparties par colonne selon leur avancement.

## Créer une Issue

Une Issue représente une tâche, un bug, ou une question à trancher.

{% include step-tuto.html
  greyBackground=true
  title="Créer une Issue"
  content="Sur votre repo GitHub, onglet **Issues**, bouton **New issue**. Donnez un titre précis (pas « Faire l'élec », plutôt « Choisir et commander le driver moteur »), et une description : quoi, pourquoi, comment on sait que c'est fini. Dans le panneau de droite, ajoutez un **Assignee** (qui s'en occupe) et éventuellement un **Label** (`bug`, `mécanique`, `urgent`...)." %}

{% capture tab1 %}

**Titre** : "Problème moteur"

**Description** : (vide)

{% endcapture %}

{% capture tab2 %}

**Titre** : "Le moteur pas à pas ne tourne pas avec le driver A4988"

**Description** : Le moteur reste bloqué, le driver chauffe après 10
secondes. Câblage vérifié deux fois. Piste : mauvais réglage du courant
sur le potentiomètre du driver. Besoin d'un avis avant demain matin.

{% endcapture %}

{% include content-tabs.html
  id="issue-vague-precise"
  tab_title1="❌ Issue vague"
  tab_title2="✅ Issue exploitable"
  tab1=tab1
  tab2=tab2
%}

## Suivre l'avancement avec un Project

Un Project GitHub est un tableau kanban (colonnes *À faire* / *En cours* /
*Terminé*) qui affiche vos Issues.

{% include step-tuto.html
  greyBackground=true
  title="Créer un Project"
  content="Sur votre repo, onglet **Projects**, bouton **New project**, choisissez le modèle **Board**. Trois colonnes apparaissent par défaut : `Todo`, `In Progress`, `Done` (renommables)." %}

{% include step-tuto.html
  greyBackground=true
  title="Lier vos Issues au Project"
  content="Dans le Project, cliquez sur `+ Add item`, puis recherchez et sélectionnez les Issues déjà créées. Elles apparaissent comme des cartes que vous glissez d'une colonne à l'autre au fil de l'avancement." %}

{% include step-tuto.html
  greyBackground=true
  title="Le relier à la page Équipe de votre site"
  content="La page `docs/equipe.md` de votre template contient une section optionnelle « Suivi des tâches » avec un bouton **Tableau de suivi du projet**. Il ouvre l'onglet **Projects** de votre repo : pour que votre tableau y apparaisse, dans cet onglet, bouton **Link a project**, puis choisissez votre Project. Si votre équipe n'utilise pas de Project, supprimez cette section de la page." %}

{% include message.html title="Un Project reflète la réalité, pas l'intention" message="Une carte reste dans « En cours » depuis 3 semaines ? C'est un signal à en parler au prochain point de synchro (voir [Communiquer en équipe](/workshops/methodologie-de-projet/concepts/communiquer-en-equipe/)), pas juste un chiffre à ignorer." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Répartir les tâches

Reprenez le tableau de rôles de
[Constituer et organiser son équipe](/workshops/methodologie-de-projet/concepts/constituer-organiser-equipe/) :
chaque grande brique a un responsable, qui crée et assigne les Issues de sa
brique. Une Issue sans assignee est une tâche que personne ne fera.

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Le Project est vide malgré des Issues créées | Les Issues ne sont pas encore liées au Project | Utilisez `+ Add item` dans le Project |
| Personne ne sait qui fait quoi | Issues créées sans Assignee | Prenez l'habitude d'assigner à la création, pas après |
| Trop d'Issues ouvertes, illisible | Granularité trop fine ou tâches jamais fermées | Fermez les Issues terminées, regroupez les micro-tâches |

## Aller plus loin, utilisation avancée

Ce qui précède suffit pour la plupart des équipes. Si votre équipe
grandit ou que plusieurs personnes travaillent souvent sur les mêmes
fichiers, le guide
[Utiliser les Pull Requests et résoudre un conflit Git](/docs/how-to-guides/pull-requests-et-conflits-git/)
va plus loin : faire relire son travail avant de le fusionner dans
`main`, et s'en sortir proprement quand deux modifications se
percutent. Pas une étape obligatoire : seulement si le besoin s'en fait
sentir.

## Exercice

En équipe : créez une Issue par tâche restante sur votre projet (précise,
comme dans l'exemple ✅ ci-dessus), assignez-les, et mettez en place un
Project pour les suivre.
