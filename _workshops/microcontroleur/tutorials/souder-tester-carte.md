---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true

title: Souder et tester la carte
subtitle: Assembler la console au fer à souder, puis la valider étape par étape
description: Souder au fer les composants CMS et traversants de la carte de la console, puis la tester hors tension, sous tension et avec les programmes des TD.
author: Alban Petit

time: 3
difficulty: 3

prerequisites:
  - label: Concevoir la carte de la console
    link: /workshops/microcontroleur/tutorials/conception-carte-kicad/

hardwares:
  - label: Carte nue de la console (fournie)
    link: ""
  - label: XIAO ESP32S3 avec ses barrettes, écran TFT 14 broches, joystick SparkFun, 2 boutons CMS
    link: /docs/references/hardware/xiao-esp32s3/
  - label: Composants CMS 1206 (résistances, condensateurs, LED)
    link: ""
  - label: Fer à souder Weller WT 1010, fil d'étain, flux, tresse à dessouder
    link: /docs/references/machines/weller-wt-1010/
  - label: Multimètre, pince brucelles, loupe
    link: ""

todo: 80
---

## Objectif

Votre routage est validé : l'encadrant vous remet la carte finale de la console, nue, et un sachet de composants. À la fin de ce tutoriel, la console est assemblée, et chaque fonction est vérifiée **avant** de lancer le jeu : alimentation, boutons, joystick, écran, connecteur I2C. Un problème trouvé à l'étape de test coûte cinq minutes ; le même problème découvert pendant le projet peut coûter une séance.

{% include message.html title="Sécurité" message="La panne du fer atteint plus de 300 °C : reposez toujours le fer dans son support, jamais sur la table. Soudez dans un endroit ventilé et ne respirez pas les fumées du flux. Portez des lunettes quand vous coupez les pattes des composants traversants (elles partent loin). Lavez-vous les mains après la séance." status="is-danger" icon="fas fa-exclamation-triangle" %}

## Avant de commencer

- **Comparez la carte à votre conception** : la carte finale suit le même cahier des charges que la vôtre, mais son placement diffère. Repérez sur la sérigraphie l'emplacement de chaque composant (R1, C2, SW1...) à l'aide du plan d'implantation remis avec la carte.
- **Triez les composants** par référence. Les CMS 1206 se ressemblent tous : une résistance porte un marquage chiffré (`102` = 1 kΩ, `472` = 4,7 kΩ), un condensateur n'en porte aucun. Ne mélangez pas les sachets.
- **Réglez le fer** autour de 330 °C pour de l'étain sans plomb, et étamez la panne (une fine couche d'étain brillant).

## Souder, du plus bas au plus haut

L'ordre compte : on soude d'abord les composants les plus plats, pour que la carte repose à plat sur la table jusqu'au bout, et on garde pour la fin ceux qui gênent l'accès au fer.

| Ordre | Composants | Pourquoi à ce moment |
|---|---|---|
| 1 | Résistances et condensateurs CMS 1206 | Les plus plats, et les plus faciles à atteindre sur une carte vide |
| 2 | LED témoin CMS | Plate elle aussi, mais **polarisée** |
| 3 | Boutons poussoirs CMS | Plus hauts que les 1206 |
| 4 | Connecteur I2C | Traversant, encore bas |
| 5 | XIAO ESP32S3 sur ses barrettes | Traversant, plus haut |
| 6 | Joystick | Le plus haut et le plus encombrant |
| 7 | Connecteur de l'écran | En dernier : l'écran se monte par-dessus |

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Souder les CMS 1206"
content="Un composant CMS se soude en trois temps, sans jamais le tenir avec les doigts :

1. **Étamez une seule pastille** : une petite goutte d'étain sur l'une des deux pastilles du composant.
2. **Posez le composant** avec la pince brucelles, réchauffez la goutte avec le fer, et laissez le composant s'y enfoncer, bien à plat et centré. Retirez le fer, puis la pince.
3. **Soudez l'autre côté**, puis revenez sur le premier pour un joint propre (une touche de flux aide).

Une bonne soudure forme un **congé** lisse et brillant, en pente douce entre la pastille et l'extrémité du composant. Une boule terne ou un composant qui se dresse sur une seule pastille (*effet pierre tombale*) se reprend avec la tresse à dessouder."
%}

{% include step-tuto.html
greyBackground=true
title="Étape 2 : Souder la LED dans le bon sens"
content="Une LED ne conduit que dans un sens : soudée à l'envers, elle ne s'allume pas. Repérez la **cathode** sur la sérigraphie de la carte (un trait, un triangle pointé vers elle, ou la lettre K) et sur la LED (un marquage vert, un coin coupé, ou une flèche au dos). En cas de doute, le mode test de diode du multimètre allume faiblement la LED quand elle est dans le bon sens : pointe rouge sur l'anode, noire sur la cathode."
%}

{% include step-tuto.html
greyBackground=true
title="Étape 3 : Souder les boutons et les connecteurs"
content="Les **boutons CMS** se soudent comme les 1206 : une patte d'abord, on vérifie que le bouton est bien à plat et droit, puis les trois autres.

Pour un **composant traversant** (connecteur, barrettes, joystick) : insérez-le par le dessus, retournez la carte, et soudez **une seule patte**. Vérifiez qu'il est bien perpendiculaire à la carte (il est encore temps de le redresser en réchauffant cette patte), puis soudez les autres. Une bonne soudure traversante a la forme d'un petit **cône** brillant qui entoure la patte.

Coupez ensuite les pattes qui dépassent, à ras du cône, lunettes sur le nez."
%}

{% include step-tuto.html
greyBackground=true
title="Étape 4 : Souder la XIAO et le joystick"
content="La **XIAO** se soude par ses barrettes, antenne Wi-Fi débranchée et connecteur USB-C tourné vers le bord de la carte. Ne surchauffez pas une même broche : passez à la suivante et revenez plus tard si la soudure n'a pas pris.

Le **joystick** a de nombreuses pattes, dont certaines servent seulement à le fixer mécaniquement : soudez-les toutes, elles encaissent les efforts du pouce pendant le jeu."
%}

{% include step-tuto.html
greyBackground=true
title="Étape 5 : Inspecter la carte"
content="Avant toute mise sous tension, examinez **chaque soudure** à la loupe, face avant puis face arrière :

- pas de **pont** d'étain entre deux pastilles ou deux pattes voisines (surtout sur les barrettes de la XIAO) ;
- pas de soudure **sèche** (terne, granuleuse, en boule) ;
- pas de patte oubliée ;
- pas de résidu d'étain ou de bout de patte coupée qui traîne sur la carte.

Prenez des **photos** recto et verso : elles servent à la documentation, et à l'encadrant si un défaut doit être diagnostiqué à distance."
%}

## Tester la carte

{% include step-tuto.html
greyBackground=true
title="Étape 6 : Tester hors tension"
content="Multimètre en mode **continuité** (le bip), carte **débranchée** :

- entre **3V3 et GND** (par exemple sur les broches 1 et 4 du connecteur I2C) : **aucun bip continu**. Un bip bref au premier contact est normal (les condensateurs se chargent), un bip continu signale un court-circuit à trouver **avant** de brancher l'USB ;
- entre chaque bouton et la broche de la XIAO qu'il commande : un bip quand le bouton est enfoncé, rien quand il est relâché ;
- entre chaque broche du connecteur de l'écran et sa broche de la XIAO, selon le tableau du cahier des charges."
%}

{% include step-tuto.html
greyBackground=true
title="Étape 7 : Premier branchement"
content="Branchez l'USB-C, sans l'écran pour l'instant :

- la **LED témoin** s'allume ;
- au multimètre en mode **tension continue**, on lit **3,3 V** (à 0,1 V près) entre 3V3 et GND ;
- sur le connecteur I2C, SDA et SCL sont aussi à **3,3 V** au repos : les résistances de tirage font leur travail ;
- rien ne chauffe : passez le doigt près de la XIAO et des composants après une minute.

Au moindre doute (odeur, LED éteinte, tension anormale), **débranchez immédiatement** et reprenez l'inspection."
%}

{% include step-tuto.html
greyBackground=true
title="Étape 8 : Tester chaque fonction avec les programmes des TD"
content="La carte suit le brochage des TD : leurs programmes servent de **programmes de test**, sans modification.

1. **Flashage** : le Blink de [Vérification de la toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/). La LED orange de la XIAO clignote.
2. **Entrées** : le programme de l'étape 5 de [Boutons, joystick et moniteur série](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/). Le moniteur série affiche SW1, SW2, chaque direction du joystick et l'appui sur le stick.
3. **Écran** : carte débranchée, montez l'écran sur son connecteur, puis flashez l'étape 2 de [Écran SPI et game loop](/docs/tutorials/electronics/ecran-spi-game-loop/). Le texte et les formes s'affichent.
4. **Le Pong** : votre programme du TD4. Une partie complète se joue sur la carte.

La carte est prête : c'est sur elle que vous écrivez maintenant le code du Snake."
%}

{% include message.html title="Tout fonctionne ?" message="Notez chaque test et son résultat dans votre repo (voir [Documenter les tests et résultats](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/)) : c'est la preuve que la carte est saine, et le point de départ si un problème apparaît plus tard dans le projet." status="is-success" icon="fas fa-check-circle" %}

## Dépannage

| Symptôme | Causes probables | À vérifier |
|---|---|---|
| Bip continu entre 3V3 et GND | Pont d'étain, condensateur mal placé | Inspecter à la loupe autour des condensateurs et des barrettes de la XIAO |
| LED témoin éteinte, 3,3 V présents | LED soudée à l'envers, résistance absente | Sens de la LED, soudure de sa résistance |
| La carte n'apparaît pas sur l'ordinateur | Câble de charge seul, programme qui plante | Autre câble ; mode BOOT (maintenir BOOT en branchant) |
| Un bouton ne réagit pas | Soudure sèche, bouton de travers | Continuité bouton enfoncé, entre la broche et GND |
| SW2 ne réagit pas, SW1 si | Soudure de la résistance série de D6 | Continuité de part et d'autre de la résistance |
| Joystick bloqué à 0 ou 4095 | Patte non soudée, alimentation absente | Soudures du joystick, 3,3 V sur sa broche VCC |
| Écran blanc | Rétroéclairage alimenté, mais pas de données | Continuité SCK, MOSI, DC, RESET ; `SPI_MODE3` dans le code |
| Écran noir | Rétroéclairage non alimenté | Broche LED du connecteur écran à 3,3 V |

## Documenter

Ajoutez à la page de la carte dans votre repo les photos recto et verso, le résultat de chaque test, et les éventuelles reprises de soudure (ce qui s'est passé, comment vous l'avez trouvé). Une carte dont on a documenté les défauts et leurs corrections vaut mieux qu'une carte présentée comme parfaite.
