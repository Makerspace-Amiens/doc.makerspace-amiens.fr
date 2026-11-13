---
# RÉDACTION : un guide pratique répond à « comment faire X » pour quelqu'un qui a déjà
# les bases. Il va droit au but : contexte, procédure numérotée, dépannage.
layout: documentation
hide_hero: true
component_toc: true
doc_header: true

title: Mesurer la mémoire et le temps d'inférence
subtitle: Savoir si un modèle tient sur la carte, et s'il répond assez vite
description: "Mesurer la Flash et la RAM occupées par un modèle sur une ESP32-S3, ainsi que la durée d'une inférence, pour comparer deux versions d'un modèle."
author: Alban Petit      # RÉDACTION : mettre son propre nom

time: 1
difficulty: 2
todo: 60

prerequisites:
  - label: Qu'est-ce que le TinyML ?
    link: /workshops/tinyml/concepts/qu-est-ce-que-le-tinyml/
  - label: Le port série sous VSCode
    link: /docs/tutorials/electronics/vscode-port-serie/
---

## Contexte

Un modèle qui marche sur l'ordinateur peut être trop gros pour la carte, ou trop lent pour réagir à temps. Avant de choisir entre deux versions (plus de couches, quantifié ou non), on mesure trois choses : la **Flash** qu'il occupe, la **RAM** dont il a besoin pour calculer, et le **temps** d'une inférence.

<!-- RÉDACTION : un guide pratique numérote sa procédure avec des ### (pas d'include
step-tuto, réservé aux tutoriels). -->

## Procédure

### 1. Lire l'occupation à la compilation

À chaque compilation, PlatformIO affiche l'occupation de la mémoire :

```text
RAM:   [==        ]  15.2% (used 49812 bytes from 327680 bytes)
Flash: [===       ]  28.4% (used 949201 bytes from 3342336 bytes)
```

- **Flash** : le programme et le modèle, stocké comme un tableau constant. C'est la taille du modèle qui la fait grimper.
- **RAM** : ici, seulement les variables globales et `static`, dont la zone de travail du modèle si elle est déclarée en global.

Compilez une fois **sans** le modèle, une fois **avec** : la différence est ce que le modèle coûte.

### 2. Mesurer la RAM pendant l'exécution

La compilation ne voit pas la mémoire réservée pendant l'exécution (le tas). Affichez-la depuis le programme, avant et après le chargement du modèle :

```cpp
Serial.printf("Tas libre : %lu octets\n", (unsigned long)ESP.getFreeHeap());
Serial.printf("Plus bas atteint depuis le démarrage : %lu octets\n", (unsigned long)ESP.getMinFreeHeap());
```

`ESP.getMinFreeHeap()` est le chiffre qui compte : le minimum atteint depuis le démarrage. S'il descend sous quelques dizaines de kilo-octets, le Wi-Fi ou une `String` peuvent suffire à faire planter la carte.

### 3. Chronométrer une inférence

Entourez l'appel du modèle de deux lectures de `micros()`, et faites la moyenne sur plusieurs appels : la première inférence est souvent plus lente que les suivantes.

```cpp
constexpr int RUNS = 50;

uint32_t start = micros();
for (int i = 0; i < RUNS; i++) {
    runInference();          // remplacer par l'appel réel du modèle
}
unsigned long averageUs = (micros() - start) / RUNS;
Serial.printf("Inférence : %lu µs en moyenne\n", averageUs);
```

Comparez ce temps à votre contrainte : pour des gestes échantillonnés toutes les 2 secondes, 50 ms est largement suffisant ; pour un jeu cadencé à 16 ms par image, il faut que l'inférence tienne dans ce budget, ou qu'elle tourne sur l'autre cœur.

### 4. Noter les résultats

Consignez chaque version dans un tableau, dans votre journal de bord :

| Version du modèle | Flash | RAM (minimum libre) | Inférence | Précision |
|---|---|---|---|---|
| float32 | | | | |
| int8 (quantifié) | | | | |

C'est ce tableau qui justifie le choix final, à l'écrit comme à l'oral.

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| `region 'dram0_0_seg' overflowed` à la compilation | Trop de variables globales, ou zone de travail du modèle trop grande | Réduire la zone de travail, ou la placer en PSRAM |
| La carte redémarre au chargement du modèle | Plus assez de tas | Vérifier `ESP.getMinFreeHeap()`, éviter les `String`, quantifier le modèle |
| Temps d'inférence très variable | Le Wi-Fi interrompt le calcul | Mesurer Wi-Fi coupé, puis Wi-Fi allumé, et garder le pire cas |
| Le temps affiché vaut 0 | Une seule inférence, plus courte qu'une microseconde mesurable, ou optimisée par le compilateur | Faire la moyenne sur plusieurs appels, utiliser le résultat de l'inférence |

## Voir aussi

- [Déboguer un programme embarqué](/docs/how-to-guides/deboguer-programme-embarque/) : lire un plantage au moniteur série.
- Le concept [Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/) : Flash, RAM, pile et tas.
