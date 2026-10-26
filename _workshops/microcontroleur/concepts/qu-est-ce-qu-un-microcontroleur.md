---
layout: documentation
hide_hero: true
hero_image: image.jpg
hero_darken: true
image: image.jpg
component_toc: true
doc_header: true

title: Qu'est-ce qu'un microcontrôleur ?
subtitle: Un ordinateur miniature complet, caché dans les objets du quotidien
description: Découvrir sans jargon ce qu'est un microcontrôleur un mini-ordinateur sur une puce qui perçoit, décide et agit.
author: Alban Petit

difficulty: 0
todo: 90

prerequisites:
  - label: Aucun pré-requis nécessaire
    link: ""
---

## Tu en côtoies des dizaines sans le savoir

Un **microcontrôleur**, c'est un ordinateur complet réduit à la taille d'un ongle, posé sur une seule petite puce. Pas d'écran, pas de clavier, pas de ventilateur qui ronronne juste l'essentiel pour faire *une* chose, et la faire bien.

Tu en as sûrement une dizaine à portée de main en ce moment :

- le **micro-ondes** qui compte les secondes et fait tourner le plateau,
- la **machine à laver** qui enchaîne lavage, rinçage, essorage,
- la **télécommande**, les **écouteurs sans fil**, la **manette** de jeu,
- la **trottinette électrique**, le **thermostat**, le **jouet** qui clignote,
- et par dizaines dans une voiture (vitres, clignotants, airbags…).

Aucun de ces objets n'a besoin d'un « vrai » ordinateur : ils ont besoin d'une petite puce bon marché, robuste, qui démarre instantanément et fait sa tâche en boucle. C'est exactement le rôle d'un microcontrôleur.

**À la fin de ce concept, tu sauras :**

- ce qu'est un microcontrôleur et où on en trouve au quotidien ;
- décrire son cycle *percevoir → décider → agir* ;
- ce qui le distingue d'un ordinateur classique.

## Percevoir, décider, agir

Peu importe l'objet, un microcontrôleur fait toujours la même boucle en trois temps :

```mermaid
flowchart LR
  A["Percevoir\n(capteurs)"] --> B["Décider\n(le programme)"]
  B --> C["Agir\n(actionneurs)"]
  C -.-> A
```

1. **Percevoir** - il lit des **capteurs** : un bouton pressé, une température, une distance, la lumière ambiante…
2. **Décider** - il exécute son **programme** : une suite d'instructions que tu écris, qui dit quoi faire selon ce qui a été perçu.
3. **Agir** - il commande des **actionneurs** : allumer une LED, faire tourner un moteur, émettre un son, afficher un texte…

Un exemple concret : un **thermostat** *perçoit* la température, *décide* « il fait trop froid », puis *agit* en allumant le chauffage. Puis il recommence, indéfiniment. Tout l'atelier consiste à écrire la partie « décider ».

{% include message.html title="C'est toi qui écris le « cerveau »" message="Le microcontrôleur ne sait rien faire tout seul : il attend le programme que tu vas lui donner. Sans programme, c'est une puce inerte. Apprendre à programmer un microcontrôleur, c'est apprendre à écrire ce comportement." status="is-info" icon="fas fa-info-circle" %}

## En quoi c'est différent d'un ordinateur classique ?

Ton ordinateur portable est une machine polyvalente : il fait *tout* (naviguer, jouer, écrire), mais il est cher, gourmand en énergie et met du temps à démarrer. Un microcontrôleur fait le pari inverse.

| | Ordinateur classique | Microcontrôleur |
|---|---|---|
| **Tâches** | Des milliers, en même temps | Une seule, en boucle |
| **Prix** | Plusieurs centaines d'€ | Quelques euros, parfois centimes |
| **Énergie** | Se branche au secteur | Peut tenir des mois sur une pile |
| **Démarrage** | Plusieurs secondes | Instantané |
| **Écran / système** | Écran + système d'exploitation | Ni l'un ni l'autre, en général |

C'est cette **sobriété** qui le rend si présent : on peut en mettre partout, pour presque rien, sans y penser.

{% include message.html title="Et le Raspberry Pi, alors ?" message="Un Raspberry Pi n'est pas un microcontrôleur mais un **nano-ordinateur** : il a un vrai système d'exploitation (Linux), un processeur puissant et beaucoup de mémoire. Il l'emporte en polyvalence, mais consomme bien plus, démarre lentement et coûte plus cher. Règle simple : une seule tâche, temps réel, économe → microcontrôleur ; besoin d'un OS, d'un écran, du réseau complet → nano-ordinateur." status="is-info" icon="fas fa-info-circle" %}

## Le microcontrôleur de cet atelier : l'ESP32-S3

Dans cet atelier, on utilise un microcontrôleur moderne et populaire : l'**ESP32-S3**, monté sur une carte grande comme un timbre-poste, la [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/). En plus de percevoir et d'agir, il sait aussi communiquer sans fil (Wi-Fi et Bluetooth) : de quoi imaginer des objets connectés. Pas d'inquiétude si le nom ne te dit rien : on part de zéro.

{% include message.html title="Pas besoin de tout retenir maintenant" message="« ESP32-S3 », « capteur », « actionneur »… ces mots vont vite devenir familiers en manipulant. L'objectif de cette page est juste de te donner la vue d'ensemble avant d'entrer dans le détail." status="is-success" icon="fas fa-check" %}

## Et sous le capot ?

Tu sais maintenant *à quoi sert* un microcontrôleur et *ce qu'il fait*. La prochaine étape est d'ouvrir le capot pour voir *comment* il est fait à l'intérieur le processeur, les mémoires, les broches dans le concept [Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/).

## Quiz express

**1. Un microcontrôleur peut-il faire tourner plusieurs applications comme un ordinateur ?**

<details><summary>Voir la réponse</summary>Non : il est conçu pour une seule tâche, répétée en boucle c'est ce qui le rend simple, bon marché et économe.</details>

**2. Quelles sont les trois étapes de sa boucle de fonctionnement ?**

<details><summary>Voir la réponse</summary>Percevoir (capteurs) → décider (le programme) → agir (actionneurs).</details>

**3. Qui écrit la partie « décider » ?**

<details><summary>Voir la réponse</summary>Toi : sans programme, la puce reste inerte.</details>

## Pour aller plus loin

Prêt à passer à la pratique ? Le premier tutoriel installe les outils et flashe ton tout premier programme :

- [Chaîne d'outils & premier Blink](/workshops/microcontroleur/tutorials/toolchain-blink/)

## Résumé

- Un microcontrôleur est un **ordinateur miniature complet sur une seule puce**, présent dans une foule d'objets du quotidien.
- Il fonctionne toujours en trois temps : **percevoir** (capteurs) → **décider** (le programme) → **agir** (actionneurs), en boucle.
- C'est **toi qui écris la partie « décider »** : sans programme, la puce ne fait rien.
- Comparé à un ordinateur classique, il fait **une seule tâche**, coûte peu, consomme peu et démarre instantanément.
- Dans cet atelier, on programme un **ESP32-S3**, qui sait en plus communiquer sans fil.
