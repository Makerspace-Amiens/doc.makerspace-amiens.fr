---
layout: documentation
hide_hero: false
hero_image: hero.webp
hero_height: is-small
hero_darken: true
image: hero.webp
component_toc: true
doc_header: true

title: Collisions, score et machine à états
subtitle: Terminer le Pong 2 joueurs avec écrans menu, partie et fin
description: Ajouter la seconde raquette, la détection de collision, le score et une machine à états finis pour obtenir un Pong 2 joueurs complet.
author: Alban Petit

time: 3
difficulty: 3

prerequisites:
  - label: "Écran SPI et game loop"
    link: /docs/tutorials/electronics/ecran-spi-game-loop/
  - label: "Concept : Machine à états finis (FSM)"
    link: /workshops/microcontroleur/concepts/machine-etats-finis/

softwares:
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/

todo: 90
---

## Collisions, score et machine à états

Ce tutoriel assemble tout ce qui a été construit depuis le début de l'atelier - boutons, joystick, écran, game loop - et lui donne une **structure complète** avec un début et une fin. Aucun câblage supplémentaire n'est nécessaire.

### Structurer le code en trois blocs

À partir de maintenant, sépare systématiquement le code en trois responsabilités - c'est la structure qui sera reprise telle quelle au projet Snake :

```cpp
void loop() {
  unsigned long maintenant = millis();
  if (maintenant - dernierUpdate < INTERVALLE) return;
  dernierUpdate = maintenant;

  lireEntrees();     // boutons + joystick → variables d'intention
  mettreAJourJeu();  // logique : déplacements, collisions, score
  redessiner();      // uniquement de l'affichage, aucune logique
}
```

{% include step-tuto.html
greyBackground=true
title="1 - Ajouter la seconde raquette"
content="Le joueur 1 (boutons D5/D6) contrôle une raquette à droite ; le joueur 2 (joystick) contrôle celle de gauche, déjà posée au tutoriel précédent. Ici, on veut que la raquette avance **tant que** le bouton est enfoncé : on lit donc directement le niveau de la broche avec `digitalRead()`, sans détection de front."
%}

```cpp
int raquette1Y = 60, raquette2Y = 60;  // joueur 1 (droite), joueur 2 (gauche)
const int RAQUETTE_H = 30, RAQUETTE_W = 6;
const int VITESSE_RAQUETTE = 4;

void lireEntrees() {
  bool haut = digitalRead(BTN_HAUT) == LOW;   // INPUT_PULLUP : LOW = enfoncé
  bool bas  = digitalRead(BTN_BAS)  == LOW;

  if (haut && raquette1Y > 0)                       raquette1Y -= VITESSE_RAQUETTE;
  if (bas  && raquette1Y < tft.height() - RAQUETTE_H) raquette1Y += VITESSE_RAQUETTE;

  raquette2Y = map(analogRead(JOY_Y), 0, 4095, 0, tft.height() - RAQUETTE_H);
}
```

{% include message.html title="Checkpoint" message="Les boutons du joueur 1 déplacent sa raquette à droite, le joystick du joueur 2 déplace la sienne à gauche, sans traînée ni dépassement des bords haut/bas de l'écran." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="2 - Détecter la collision balle/raquette"
content="Une collision rectangle/cercle exacte est inutile ici : on teste si le **centre de la balle** se trouve dans le rectangle de la raquette, élargi du rayon de la balle. C'est le test d'intersection le plus simple qui donne un résultat crédible."
%}

```cpp
const int BALLE_RAYON = 4;

bool collision(int balleX, int balleY, int raquetteX, int raquetteY) {
  bool dansX = balleX + BALLE_RAYON >= raquetteX && balleX - BALLE_RAYON <= raquetteX + RAQUETTE_W;
  bool dansY = balleY + BALLE_RAYON >= raquetteY && balleY - BALLE_RAYON <= raquetteY + RAQUETTE_H;
  return dansX && dansY;
}
```

```mermaid
flowchart LR
  A["Centre de la balle\n(balleX, balleY)"] --> B{"Dans le rectangle\nélargi de la raquette ?"}
  B -->|oui| C["Rebond : inverser balleVX"]
  B -->|non| D["Continuer la trajectoire"]
```

```cpp
void mettreAJourJeu() {
  balleX += balleVX;
  balleY += balleVY;

  if (balleY <= 0 || balleY >= tft.height()) balleVY = -balleVY;

  if (collision(balleX, balleY, 10, raquette2Y))                    balleVX = -balleVX;   // raquette gauche
  if (collision(balleX, balleY, tft.width() - 16, raquette1Y))      balleVX = -balleVX;   // raquette droite

  if (balleX < 0)             { scoreJoueur1++; reinitialiserBalle(); }
  if (balleX > tft.width())   { scoreJoueur2++; reinitialiserBalle(); }
}
```

{% include message.html title="Checkpoint" message="La balle doit rebondir sur les deux raquettes et sur les bords haut/bas, et disparaître/réapparaître au centre quand elle sort par la gauche ou la droite - sans encore afficher de score visible." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="3 - Afficher le score"
content="Redessine le score uniquement quand il change - pas à chaque frame - pour éviter un clignotement inutile du texte."
%}

```cpp
int scoreJoueur1 = 0, scoreJoueur2 = 0;

void afficherScore() {
  static int ancienScore1 = -1, ancienScore2 = -1;

  if (scoreJoueur1 != ancienScore1 || scoreJoueur2 != ancienScore2) {
    tft.fillRect(0, 0, tft.width(), 20, TFT_BLACK);
    tft.setCursor(10, 2);
    tft.printf("%d", scoreJoueur1);
    tft.setCursor(tft.width() - 20, 2);
    tft.printf("%d", scoreJoueur2);

    ancienScore1 = scoreJoueur1;
    ancienScore2 = scoreJoueur2;
  }
}
```

{% include message.html title="Checkpoint" message="Le score s'incrémente et s'affiche correctement à chaque point marqué, sans clignoter à chaque frame entre deux points." status="is-success" icon="fas fa-check-circle" %}

## La machine à états du jeu

Avant d'ajouter la FSM, dessine-la sur papier (voir l'exercice du concept [Machine à états finis (FSM)](/workshops/microcontroleur/concepts/machine-etats-finis/)) : quels sont les états, quels événements déclenchent les transitions ?

```mermaid
stateDiagram-v2
  [*] --> MENU
  MENU --> PARTIE : bouton START (joystick) pressé
  PARTIE --> GAME_OVER : un score atteint 5
  GAME_OVER --> MENU : bouton RETRY (joystick) pressé
```

{% include step-tuto.html
greyBackground=true
title="4 - Implémenter la FSM avec enum + switch"
content="Chaque état gère sa propre logique et son propre affichage dans son `case` - exactement la structure vue dans le concept FSM."
%}

```cpp
enum EtatJeu { MENU, PARTIE, GAME_OVER };
EtatJeu etat = MENU;

void mettreAJourJeu() {
  switch (etat) {

    case MENU:
      if (digitalRead(JOY_BTN) == LOW) {
        scoreJoueur1 = 0;
        scoreJoueur2 = 0;
        reinitialiserBalle();
        etat = PARTIE;
      }
      break;

    case PARTIE:
      deplacerBalleEtRaquettes();
      detecterCollisions();
      if (scoreJoueur1 >= 5 || scoreJoueur2 >= 5) {
        etat = GAME_OVER;
      }
      break;

    case GAME_OVER:
      if (digitalRead(JOY_BTN) == LOW) {
        etat = MENU;
      }
      break;
  }
}

void redessiner() {
  switch (etat) {
    case MENU:       afficherMenu();     break;
    case PARTIE:     afficherJeu();      break;
    case GAME_OVER:  afficherGameOver(); break;
  }
}
```

Les fonctions `deplacerBalleEtRaquettes()`, `detecterCollisions()` et `afficherMenu/Jeu/GameOver()` ne sont pas nouvelles : ce sont les blocs de code des étapes 1 à 3, regroupés dans des fonctions dédiées pour que chaque `case` reste lisible.

{% include message.html title="Deux sens du mot « état »" message="Ne confonds pas les **données du jeu** (`balleX`, `scoreJoueur1`… des variables) et la **phase du jeu** (`MENU` / `PARTIE` / `GAME_OVER`, la FSM). Les deux sont indispensables mais répondent à des questions différentes : « où en est la partie ? » pour les données, « quel écran afficher ? » pour la FSM." status="is-info" icon="fas fa-info-circle" %}

{% include message.html title="Checkpoint" message="Le cycle complet doit fonctionner sans reflasher la carte : MENU → appui sur le bouton du joystick → PARTIE → un score atteint 5 → GAME_OVER → appui sur le bouton du joystick → retour au MENU." status="is-success" icon="fas fa-check-circle" %}

## Résultat attendu

Un **Pong 2 joueurs complet** : écran menu (démarrage au bouton du joystick), partie avec deux raquettes, balle, score et collisions, écran de fin à 5 points avec retour au menu.

{% include message.html title="Direction le projet" message="Ce Pong est la base directe du projet Snake multijoueur : la chaîne entrées → état → rendu → game loop → FSM sera reprise à l'identique, en ajoutant un joueur réseau (navigateur) et de nouveaux états (`ATTENTE_NAVIGATEUR`, `CONNECTÉ`, `DÉCONNEXION`) dans la même structure `switch(etat)`." status="is-success" icon="fas fa-flag-checkered" %}
