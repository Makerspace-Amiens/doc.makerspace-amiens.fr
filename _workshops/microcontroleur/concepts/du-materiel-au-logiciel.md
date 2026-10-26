---
layout: documentation
hide_hero: true
hero_image: image.jpg
hero_darken: true
image: image.jpg
component_toc: true
doc_header: true

title: Du matériel au logiciel
subtitle: Toolchain, compilation, flash - et le premier programme
description: Comprendre le cycle code → compilation → flash → exécution, et comment setup()/loop() s'exécutent sans système d'exploitation de PC.
author: Alban Petit

difficulty: 1
todo: 90

prerequisites:
  - label: Qu'est-ce qu'un microcontrôleur ?
    link: /workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/
---

## Du clavier à la LED

Tu sais ce qu'est un microcontrôleur et à quoi il sert. Mais entre le code que tu écris et la LED qui se met à clignoter, il se passe beaucoup de choses : quand tu cliques sur « Téléverser », que se passe-t-il *réellement* ?

Ce concept suit ce voyage de bout en bout - du texte que tu tapes jusqu'aux électrons qui parcourent la puce. Les concepts suivants ouvriront ensuite le capot pour voir comment elle est faite à l'intérieur.

**À la fin de ce concept, tu sauras :**

- suivre le trajet code → compilation → flash → exécution ;
- comprendre `setup()`/`loop()` et ce qui tourne (ou non) autour de ton programme ;
- éviter un `delay()` bloquant grâce à `millis()`.

## Du texte au courant électrique

Un fichier source (`main.cpp` sous PlatformIO, `.ino` sous l'Arduino IDE) n'est que du texte. Pour qu'il fasse clignoter une LED, il doit traverser plusieurs transformations avant d'atteindre la puce :

```mermaid
flowchart LR
  A["Code source\n(.cpp)"] --> B["Compilateur\n(gcc-xtensa)"]
  B --> C["Binaire\n(.bin)"]
  C --> D["Flashage\n(USB/UART)"]
  D --> E["Exécution\nsur l'ESP32-S3"]
```

Chaque étape est prise en charge par la **toolchain** - l'ensemble des outils qui transforme le code en programme exécutable.

## La toolchain Arduino-ESP32

Le framework **Arduino-ESP32** fournit trois éléments :

| Élément | Rôle |
|---|---|
| **Compilateur** (gcc pour Xtensa) | Traduit le C++ en instructions machine pour le CPU de l'ESP32-S3 |
| **Core Arduino** | Bibliothèque qui définit `pinMode()`, `digitalWrite()`, `analogRead()`… |
| **Uploader** (esptool) | Transfère le binaire compilé vers la Flash via USB |

L'IDE (Arduino IDE ou PlatformIO) orchestre ces outils en arrière-plan quand tu cliques sur *Téléverser* - mais la chaîne reste la même : **compiler → flasher → exécuter**.

### Ce que fait vraiment le compilateur

« Compiler » recouvre en réalité plusieurs étapes enchaînées :

1. **Préprocesseur** : il traite les `#include` et `#define` : il colle le contenu des bibliothèques et remplace les macros. C'est lui qui lit le `#include <Arduino.h>` en tête de `main.cpp` : cette ligne déclare `pinMode()`, `digitalWrite()`, `Serial`… Sous l'Arduino IDE, elle est ajoutée en cachette aux fichiers `.ino` ; sous PlatformIO, un `.cpp` doit l'écrire lui-même, sinon le compilateur ne connaît aucune fonction Arduino.
2. **Compilation** : chaque fichier C++ est traduit en **code objet** (instructions machine), séparément.
3. **Édition de liens (*linker*)** : tous les fichiers objets et les bibliothèques sont assemblés en un seul **binaire**, en résolvant les références entre eux.

Distinguer ces étapes aide à lire les erreurs : une **erreur de compilation** (étape 2) est une faute de syntaxe ou de type dans ton code ; une **erreur de link** (« *undefined reference* ») signale une fonction ou une bibliothèque manquante à l'étape 3.

## Flasher : écrire dans la mémoire persistante

Flasher, c'est écrire le **binaire** compilé (le programme traduit en instructions machine - des 0 et des 1 exécutables par la puce) dans la **Flash** du microcontrôleur (voir [Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/)). Contrairement à la RAM, la Flash retient son contenu hors tension : le programme redémarre automatiquement à chaque mise sous tension, sans intervention.

{% include message.html title="Bouton BOOT" message="Sur la XIAO ESP32S3, le flashage passe par l'USB natif de la puce. Si le programme en cours plante ou monopolise l'USB, l'upload échoue : on force alors le mode téléversement en **maintenant BOOT** pendant qu'on branche le câble USB, puis on appuie sur **RESET** une fois l'upload terminé. Si le flashage échoue systématiquement, c'est la première chose à essayer." status="is-info" icon="fas fa-info-circle" %}

## Au reset : la séquence de démarrage

Entre la mise sous tension et l'exécution de ton `setup()`, l'ESP32-S3 traverse plusieurs étapes automatiques :

1. **ROM bootloader** - un petit programme gravé en usine dans la puce démarre. Il lit les broches de *strapping* (dont GPIO0) pour décider : démarrage normal, ou **mode téléversement** (attente d'un flash par USB/UART).
2. **Bootloader de second niveau** - chargé depuis la Flash, il initialise l'horloge et la mémoire, puis choisit la partition applicative à lancer.
3. **Ton application** - enfin, le code compilé s'exécute : `setup()` une fois, puis `loop()` en boucle.

C'est ce mécanisme qui explique le bouton **BOOT** : le maintenir enfoncé au reset force l'étape 1 en mode téléversement.

## `setup()` et `loop()` - toute la structure

Un programme Arduino tient dans deux fonctions :

```cpp
#include <Arduino.h>   // indispensable dans un .cpp : déclare pinMode, Serial...

void setup() {
  // Exécuté une seule fois, au démarrage
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  // Exécuté en boucle infinie, indéfiniment
  digitalWrite(LED_PIN, HIGH);
  delay(500);
  digitalWrite(LED_PIN, LOW);
  delay(500);
}
```

- `setup()` initialise le matériel (broches, ports série, périphériques) - une seule fois.
- `loop()` s'exécute en boucle infinie, du démarrage jusqu'à la coupure d'alimentation.

## Pas de système d'exploitation… au sens d'un PC

Sur un ordinateur, un programme est un **processus** parmi des centaines d'autres, géré par un OS complet (Windows, Linux : fichiers, fenêtres, mémoire virtuelle, arrêt propre). Sur un microcontrôleur, rien de tout ça : ton programme est **le seul** programme de la puce.

Sur l'ESP32-S3, Arduino-ESP32 s'appuie tout de même sur un tout petit **noyau temps réel**, **FreeRTOS**, qui reste invisible : il fait tourner `loop()` comme une **tâche**, et à côté les tâches du Wi-Fi, du Bluetooth et de l'USB. Ce qui compte pour ton code :

- `loop()` est **une seule tâche** : ce que tu y écris s'exécute ligne après ligne, une chose à la fois.
- `delay()` met cette tâche en pause : le Wi-Fi continue de tourner en coulisse, mais **rien de ton programme n'avance**, y compris la lecture des boutons.
- Pas d'arrêt propre : couper l'alimentation coupe le programme instantanément, sans sauvegarde automatique.

{% include message.html title="Et sur un Arduino Uno ?" message="Sur un ATmega328 (Arduino Uno), il n'y a vraiment aucun noyau : `loop()` est appelée en boucle par un simple `main()` écrit par le core Arduino, et `delay()` fait tourner le CPU à vide. Pour ton code, le résultat est le même : pendant un `delay()`, ton programme ne fait rien d'autre." status="is-info" icon="fas fa-info-circle" %}

C'est pour cette raison que la structuration du code (game loop non bloquante, [machine à états finis](/workshops/microcontroleur/concepts/machine-etats-finis/)) devient essentielle dès que le programme gère plusieurs tâches à la fois.

## Faire plusieurs choses à la fois - `millis()`

Le défaut de `delay()` : pendant qu'il attend, **rien d'autre de ton programme ne s'exécute**. Impossible de lire un bouton, rafraîchir un écran et faire clignoter une LED « en même temps » avec des `delay()`.

La solution est de ne jamais bloquer : au lieu d'attendre, on **regarde l'heure**. `millis()` renvoie le nombre de millisecondes écoulées depuis le démarrage. En mémorisant la date de la dernière action, on décide s'il est temps d'agir - sans jamais figer le programme.

```cpp
unsigned long dernierClignotement = 0;
const unsigned long INTERVALLE = 500;  // ms
int etatLed = LOW;

void loop() {
  // ... ici, le reste du programme tourne librement (boutons, écran…)

  if (millis() - dernierClignotement >= INTERVALLE) {
    dernierClignotement = millis();
    etatLed = !etatLed;
    digitalWrite(LED_PIN, etatLed);
  }
}
```

Ce motif - comparer `millis()` à une date mémorisée - est le fondement de la **game loop non bloquante** et se combine naturellement avec la [machine à états finis](/workshops/microcontroleur/concepts/machine-etats-finis/).

{% include message.html title="delay() reste utile" message="Pour une pause courte et unique (initialiser un composant, un petit délai au démarrage), `delay()` est parfaitement acceptable. C'est dans la `loop()`, quand plusieurs choses doivent avancer en parallèle, qu'il faut l'éviter." status="is-info" icon="fas fa-info-circle" %}

## Blink, commenté ligne par ligne

Le programme le plus simple relie tous les concepts vus jusqu'ici :

```cpp
#include <Arduino.h>

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);  // configure la broche en sortie (GPIO, registre)
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // écrit 3,3 V sur la broche (registre)
  delay(500);                       // met loop() en pause 500 ms : rien d'autre n'avance
  digitalWrite(LED_BUILTIN, LOW);   // écrit 0 V sur la broche
  delay(500);
}
```

- `pinMode` et `digitalWrite` écrivent dans des **registres** ([Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/)).
- La broche bascule entre deux **niveaux logiques** ([GPIO & monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/)).
- `delay()` suspend `loop()` : ton programme ne fait **rien d'autre** pendant ce temps.
- Sur la XIAO, la LED orange est en logique inversée : `HIGH` l'éteint et `LOW` l'allume, mais elle clignote de la même façon.
- Ce même code, une fois compilé et flashé, tourne en **boucle infinie** tant que la carte est alimentée.

## Ajouter une bibliothèque

Rares sont les projets qui n'utilisent que le core Arduino : un écran, un capteur ou un servo s'appuient sur une **bibliothèque** tierce. On ne copie pas son code - on la déclare, et l'outil la télécharge :

- **Arduino IDE** : menu *Croquis → Inclure une bibliothèque → Gérer les bibliothèques*, puis rechercher par nom.
- **PlatformIO** : ajouter la dépendance dans `platformio.ini` :

```ini
lib_deps =
    bodmer/TFT_eSPI
    madhephaestus/ESP32Servo
```

Ensuite, un `#include <...>` dans le code suffit à utiliser la bibliothèque.

## Déboguer avec le moniteur série

Le moniteur série est l'outil de débogage n°1 : `Serial.println()` affiche l'état du programme en direct. Encore faut-il que les deux extrémités parlent à la **même vitesse**.

{% include message.html title="Charabia à l'écran ?" message="Si le moniteur affiche des caractères illisibles, c'est presque toujours un baud rate qui ne correspond pas. Vérifie que la vitesse du moniteur série est identique à celle passée à `Serial.begin()` (souvent 115200)." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Quiz express

**1. Quelles étapes transforment un fichier source en programme qui s'exécute sur la puce ?**

<details><summary>Voir la réponse</summary>Compilation (toolchain) → binaire → flashage dans la Flash → exécution.</details>

**2. Pourquoi éviter `delay()` dans une `loop()` qui gère plusieurs tâches ?**

<details><summary>Voir la réponse</summary>`delay()` bloque tout le programme pendant l'attente ; on utilise `millis()` pour agir sans bloquer.</details>

**3. Que fait le ROM bootloader au reset ?**

<details><summary>Voir la réponse</summary>Il lit les broches de strapping (dont GPIO0) pour choisir entre démarrage normal et mode téléversement.</details>

## Pour aller plus loin

- [Chaîne d'outils & premier Blink](/workshops/microcontroleur/tutorials/toolchain-blink/)
- [Le port série sous VS Code](/docs/tutorials/electronics/vscode-port-serie/)

## Résumé

- Chaîne complète : code source → compilation (toolchain) → flashage (Flash) → exécution.
- Arduino-ESP32 fournit le compilateur, le core (`pinMode`, `digitalWrite`…, déclarés par `#include <Arduino.h>`) et l'uploader.
- Compiler = préprocesseur → compilation (code objet) → édition de liens (binaire) ; une erreur de link = fonction ou bibliothèque manquante.
- `setup()` s'exécute une fois ; `loop()` tourne en boucle infinie jusqu'à la coupure d'alimentation.
- Au reset : ROM bootloader (lit le strapping) → bootloader de second niveau → application (`setup`/`loop`).
- Pas d'OS au sens d'un PC : `loop()` est une seule tâche (sous FreeRTOS sur l'ESP32-S3), et `delay()` la met en pause.
- Pour faire avancer plusieurs tâches en parallèle : comparer `millis()` à une date mémorisée plutôt qu'utiliser `delay()`.
- Le Blink relie architecture, GPIO et fonctionnement de `loop()` en quatre lignes de code.
- On ajoute une **bibliothèque** via le gestionnaire (Arduino IDE) ou `lib_deps` (PlatformIO), puis un `#include`.
- Débogage : `Serial.println()` + un moniteur série au **même baud** que `Serial.begin()`.
