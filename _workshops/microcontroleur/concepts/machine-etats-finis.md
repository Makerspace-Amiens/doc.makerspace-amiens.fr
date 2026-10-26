---
layout: documentation
hide_hero: true
hero_image: image.jpg
hero_darken: true
image: image.jpg
component_toc: true
doc_header: true

title: Machine à états finis (FSM)
subtitle: Structurer un programme embarqué avec des phases claires
description: Comprendre et implémenter une machine à états finis (FSM) pour piloter les phases d'un jeu embarqué sur ESP32-S3.
author: Alban Petit

difficulty: 3
todo: 90

prerequisites:
  - label: Du matériel au logiciel
    link: /workshops/microcontroleur/concepts/du-materiel-au-logiciel/
  - label: GPIO & monde numérique
    link: /workshops/microcontroleur/concepts/gpio-monde-numerique/
---

## Quand le code devient un plat de spaghettis

Ton programme grossit. Une LED qui clignote tient en quatre lignes ; mais un jeu, lui, a plusieurs moments de vie - un menu d'accueil, une partie en cours, un écran de fin. Gérer ces phases « à la main » transforme vite le code en plat de spaghettis : des variables un peu partout, des `if/else` qui s'emmêlent, et des bugs difficiles à traquer.

La **machine à états finis** (FSM) est l'outil classique de l'embarqué pour garder les idées claires. Commençons par voir ce qui se passe sans elle.

**À la fin de ce concept, tu sauras :**

- reconnaître quand une machine à états finis est utile ;
- l'implémenter avec un `enum` et un `switch` ;
- gérer des transitions temporisées et des actions d'entrée.

## Le problème sans FSM

Un programme embarqué simple enchaîne les actions ligne par ligne. Dès qu'il faut gérer plusieurs **phases** (menu d'accueil → partie en cours → game over), le code se remplit de `if/else` imbriqués et de variables booléennes qui s'accumulent :

```cpp
bool enPartie = false;
bool gameOver = false;
bool menuActif = true;
// ...et ça empire à chaque nouvelle phase
```

La **machine à états finis** (FSM - *Finite State Machine*) est la solution classique de l'embarqué pour ce problème.

## Principe d'une FSM

Une FSM est définie par :

- un ensemble fini d'**états** (ex : `MENU`, `PARTIE`, `GAME_OVER`)
- des **transitions** entre états déclenchées par des événements (bouton pressé, score atteint…)
- un seul **état actif** à la fois

```mermaid
stateDiagram-v2
  [*] --> MENU
  MENU --> PARTIE : bouton START pressé
  PARTIE --> GAME_OVER : vie == 0
  GAME_OVER --> MENU : bouton RETRY pressé
```

### La table de transitions

Une FSM peut aussi se lire comme un **tableau** : pour chaque état (lignes) et chaque événement (colonnes), quel est l'état suivant ? C'est une façon rigoureuse de vérifier qu'aucun cas n'est oublié.

| État \ Événement | START | vie == 0 | RETRY |
|---|---|---|---|
| **MENU** | PARTIE | - | - |
| **PARTIE** | - | GAME_OVER | - |
| **GAME_OVER** | - | - | MENU |

Une case « - » signifie « l'événement est ignoré dans cet état ». Ce tableau se traduit ensuite directement en `switch/case`.

## Implémentation avec un `enum` + `switch`

### 1 - Déclarer les états

```cpp
enum EtatJeu {
  MENU,
  PARTIE,
  GAME_OVER
};

EtatJeu etat = MENU;  // état initial
```

### 2 - La game loop avec `switch`

```cpp
void loop() {
  lireEntrees();        // lire boutons / joystick

  switch (etat) {

    case MENU:
      afficherMenu();
      if (boutonStart()) {
        initialiserPartie();
        etat = PARTIE;  // transition
      }
      break;

    case PARTIE:
      mettreAJourJeu();
      afficherJeu();
      if (vieJoueur == 0) {
        etat = GAME_OVER;  // transition
      }
      break;

    case GAME_OVER:
      afficherGameOver();
      if (boutonRetry()) {
        etat = MENU;  // transition
      }
      break;
  }
}
```

Chaque `case` gère **un seul état** : ce qu'il affiche, ce qu'il fait, et vers quel état il peut basculer.

{% include message.html title="Deux sens du mot « état »" message="Dans une même séance, le mot **état** désigne deux choses différentes : les **données du jeu** (position de la balle, score - des variables) et la **phase du jeu** (MENU / PARTIE / GAME_OVER - la FSM). Garde cette distinction en tête pour ne pas mélanger les deux." status="is-info" icon="fas fa-info-circle" %}

## Pourquoi c'est fondamental en embarqué

### Une seule tâche pour tout le jeu

Sur un PC, chaque écran d'une application peut avoir sa fenêtre et ses propres *threads* (tâches exécutées en parallèle), orchestrés par le système d'exploitation. Sur le microcontrôleur, rien de tel pour ton code : sur l'ESP32-S3, le noyau FreeRTOS fait bien tourner le Wi-Fi et l'USB à côté, mais **tout ton jeu vit dans une seule tâche**, `loop()`, qui s'exécute en boucle infinie. Un `delay()` y fige tout le jeu, et toutes les décisions sur ce qu'il faut faire à chaque instant passent par ton code.

La FSM joue ce rôle d'aiguillage : à chaque tour de `loop()`, elle décide quel « mode » est actif et ce qu'il faut exécuter.

### La FSM prépare le projet réseau

Dans le projet Snake multijoueur, la FSM du jeu accueillera des **états réseau** supplémentaires :

```mermaid
stateDiagram-v2
  [*] --> ATTENTE_WIFI
  ATTENTE_WIFI --> ATTENTE_JOUEUR : Wi-Fi connecté
  ATTENTE_JOUEUR --> PARTIE : 2e joueur connecté
  PARTIE --> GAME_OVER : serpent mort
  GAME_OVER --> ATTENTE_JOUEUR : rejouer
```

La structure `switch(etat)` est la même - on ajoute juste des états.

## FSM vs variables booléennes

| Approche | Lisibilité | Extensibilité | Bugs typiques |
|---|---|---|---|
| Booléens `enPartie`, `gameOver`… | Faible (états implicites) | Difficile | États contradictoires (`enPartie && gameOver == true`) |
| **FSM avec `enum`** | Élevée (états explicites) | Facile (ajouter un `case`) | Aucun état contradictoire possible |

## Aller plus loin : actions d'entrée et transitions temporisées

Deux raffinements rendent une FSM plus expressive (on suppose une variable globale `unsigned long entreeEtat;` qui mémorise l'instant d'entrée dans l'état courant).

**Action d'entrée (*onEnter*).** Certaines choses ne doivent se faire qu'*une fois*, au moment où l'on bascule dans un état (réinitialiser le score, afficher un écran). On les exécute donc **au moment de la transition**, pas à chaque tour de boucle :

```cpp
void allerVers(EtatJeu nouvel) {
  etat = nouvel;
  entreeEtat = millis();                        // date d'entrée dans l'état
  if (nouvel == PARTIE)    initialiserPartie(); // action d'entrée
  if (nouvel == GAME_OVER) afficherGameOver();  // exécutée une seule fois
}
```

**Transition temporisée.** Un état peut basculer tout seul après un certain temps - un écran « GAME OVER » qui revient au menu après 3 secondes. On combine la FSM avec `millis()` (voir [Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/)) : on compare l'heure actuelle à la date d'entrée dans l'état.

```cpp
case GAME_OVER:
  if (millis() - entreeEtat > 3000) {  // 3 s écoulées
    allerVers(MENU);
  }
  break;
```

## Un exemple complet : le feu tricolore

Le feu de circulation est la FSM par excellence : trois états, des transitions purement **temporisées**, aucun bouton. Il rassemble tout ce qu'on vient de voir dans un programme complet et non bloquant.

```mermaid
stateDiagram-v2
  [*] --> VERT
  VERT --> ORANGE : après 5 s
  ORANGE --> ROUGE : après 2 s
  ROUGE --> VERT : après 5 s
```

```cpp
enum Feu { VERT, ORANGE, ROUGE };
Feu etat = VERT;
unsigned long entreeEtat = 0;

void allerVers(Feu nouvel) {
  etat = nouvel;
  entreeEtat = millis();
  // action d'entrée : allumer la bonne LED une seule fois
}

void loop() {
  unsigned long ecoule = millis() - entreeEtat;

  switch (etat) {
    case VERT:   if (ecoule > 5000) allerVers(ORANGE); break;
    case ORANGE: if (ecoule > 2000) allerVers(ROUGE);  break;
    case ROUGE:  if (ecoule > 5000) allerVers(VERT);   break;
  }
}
```

La `loop()` ne bloque jamais (aucun `delay()`) : le programme pourrait donc, en même temps, lire un bouton piéton ou animer un afficheur. C'est tout l'intérêt de coupler FSM et `millis()`.

## Exercice - dessiner la FSM du Pong

Avant de coder le TD4, dessine sur papier la FSM du Pong :

- Quels sont les états ? (`MENU`, `PARTIE`, `PAUSE` ?, `GAME_OVER`)
- Quels événements déclenchent les transitions ?
- Quel est l'état initial ?

Compare ensuite ta FSM avec celle du groupe - les différences de conception sont souvent révélatrices.

## Pour aller plus loin

- [Collisions & FSM : le Pong](/workshops/microcontroleur/tutorials/collisions-fsm-pong/) - mettre la FSM en œuvre dans un jeu

## Résumé

- Une FSM = états + transitions + un seul état actif à la fois.
- Implémentation Arduino : `enum` pour les états, `switch(etat)` dans la `loop()`.
- Chaque `case` gère l'affichage, la logique et les transitions de son état.
- La FSM élimine les booléens incompatibles et rend le code extensible.
- Une FSM se représente aussi par une **table de transitions** (état × événement → état suivant), utile pour n'oublier aucun cas.
- Une FSM se combine avec `millis()` pour des **transitions temporisées** (ex. le feu tricolore), et avec des **actions d'entrée** exécutées une seule fois par changement d'état.
- Dans ce projet : FSM du jeu (TD4) → étendue aux états réseau (Projet).
