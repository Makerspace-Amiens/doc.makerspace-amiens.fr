---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true

title: Évaluation de l'atelier
subtitle: Les TD et la carte, puis le projet Snake
description: La grille d'évaluation de l'atelier Microcontrôleurs, entre les checkpoints validés en TD et le projet Snake mené en binôme.
author: Alban Petit

todo: 70
---

## Ce qui est évalué

L'atelier est évalué en deux parts : ce que vous montrez pendant les **TD**, dont la conception et la soudure de la carte, et le **projet** mené en binôme.

| Part | Poids | Ce qu'on regarde |
|---|---|---|
| **TD** | **30 %** | Les checkpoints de chaque TD, validés en séance par l'encadrant, dont les deux validations de la carte |
| **Projet** | **70 %** | Le jeu, le joueur du navigateur, le code, le repo et la démonstration |

La note du projet est une **note de binôme** : les deux membres reçoivent la même. C'est pourquoi chacun doit être capable d'expliquer l'ensemble du projet, y compris la partie qu'il n'a pas codée lui-même.

## Les TD (30 %)

Chaque TD se termine par des checkpoints, que l'encadrant valide **en séance**, sur votre montage ou votre carte :

| TD | Poids | Ce qui doit fonctionner |
|---|---|---|
| TD1 | 5 % | La LED de la XIAO clignote ; le moniteur série affiche les messages de la carte |
| TD2 | 5 % | Les quatre modules de la malette fonctionnent sur breadboard : un seul message par appui de bouton, joystick calibré (0 au repos, -1 / +1 aux butées), buzzer qui sonne, écran qui affiche ; le programme de test réunit les quatre |
| TD3 | 10 % | Le schéma de la carte passe la **validation 1** et le routage la **validation 2** ; les choix de conception (protection de D6, tirage I2C, LED, découplage) sont justifiés par écrit |
| TD4 | 10 % | La carte finale est soudée proprement et passe tous les tests ; le Pong s'y joue de l'accueil à la fin de partie, sans reflasher |

Un checkpoint non validé en séance peut l'être au début de la séance suivante. Les validations de la carte doivent être obtenues avant le TD4.

## Le projet (70 %)

| Critère | Poids | Ce qui doit apparaître |
|---|---|---|
| **Le jeu sur la console** | 25 % | Les exigences C1 à C8 de l'[énoncé](/workshops/microcontroleur/projet-snake/) tenues pendant la démonstration |
| **Le joueur du navigateur** | 25 % | Les exigences N1 à N7 ; l'originalité du rôle, l'équilibre entre les deux joueurs, l'intérêt réel de l'interaction |
| **Le code et sa robustesse** | 10 % | Modules, machine à états, aucun `delay()` dans la boucle ; déconnexions et messages invalides gérés, parties enchaînées sans redémarrer la carte |
| **Le repo et la démonstration** | 10 % | Documentation complète (firmware, protocole, tests, journal de bord), démonstration fluide, réponses claires aux questions |

{% include message.html title="Une démonstration se prépare" message="La démonstration se fait avec ce qui fonctionne, pas avec ce qui fonctionnera. Gardez une version stable (un tag) et répétez la démonstration avant le jour J, déconnexion du navigateur comprise." status="is-info" icon="fas fa-info-circle" %}

## Le repo à la date de rendu

Le projet est évalué sur **l'état de votre repo** à la date de rendu communiquée en début de projet, et sur la démonstration. Tout ce qui est dans le repo à cette date compte, historique compris : des commits réguliers montrent un travail suivi.

Le contenu attendu de chaque partie est détaillé dans l'atelier Méthodologie de projet :

- [Documenter son code et son firmware](/workshops/methodologie-de-projet/tutorials/documenter-code-firmware/)
- [Documenter les tests et résultats](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/)
- [Tenir un journal de bord](/workshops/methodologie-de-projet/tutorials/journal-de-bord/)

Avant la date de rendu, parcourez la [checklist de clôture de projet](/workshops/methodologie-de-projet/tutorials/checklist-cloture-projet/) avec votre binôme.
