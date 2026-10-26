---
layout: documentation
hide_hero: true
hero_image: image.jpg
hero_darken: true
image: image.jpg
component_toc: true
doc_header: true

title: Architecture d'un microcontrôleur
subtitle: CPU, mémoires, périphériques - comprendre le schéma-bloc
description: Comprendre le CPU, l'horloge, les mémoires Flash/RAM, les registres, les principaux périphériques et les interruptions d'un microcontrôleur, à travers l'ESP32-S3.
author: Alban Petit

difficulty: 2
todo: 90

prerequisites:
  - label: Qu'est-ce qu'un microcontrôleur ?
    link: /workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/
---

## Ouvrons le capot

Si tu as parcouru [Qu'est-ce qu'un microcontrôleur ?](/workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/), tu sais déjà qu'un µC est un ordinateur miniature qui perçoit, décide et agit. Voyons maintenant **comment il est fait à l'intérieur**.

Techniquement, un **microcontrôleur** (µC) est un circuit intégré qui regroupe sur une seule puce :

- un **processeur** (CPU) pour exécuter les instructions,
- de la **mémoire** (Flash + RAM) pour stocker le programme et les données,
- des **périphériques** (GPIO, ADC, UART, SPI…) pour interagir avec le monde physique.

À la différence d'un microprocesseur seul (qui a besoin de mémoire et de périphériques externes pour fonctionner), le µC est un **système sur puce** (*System on Chip*) : tout est intégré au même **silicium** (le matériau semi-conducteur dont est faite la puce). Il suffit d'une alimentation et d'une horloge pour qu'il fonctionne.

**À la fin de ce concept, tu sauras :**

- nommer les grands blocs d'un µC (CPU, mémoires, périphériques, bus) ;
- expliquer le rôle du CPU, de l'ALU et de l'horloge ;
- comprendre les registres, les interruptions et le partage du bus.

## Le schéma-bloc fil rouge

{% include step-tuto.html
greyBackground = true
content="
Garde ce schéma en tête : il sert de carte mentale pour tout l'atelier. Chaque concept qui suit - [GPIO](/workshops/microcontroleur/concepts/gpio-monde-numerique/), [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/), [les bus](/workshops/microcontroleur/concepts/bus-communication/)… - vient détailler l'une de ces briques.

| Bloc | Rôle | Accès logiciel |
|---|---|---|
| **CPU** | Exécute les instructions une par une | - |
| **Flash** | Stocke le programme (persistant) | Lecture seule à l'exécution |
| **RAM** | Variables, pile d'appels (volatile) | Lecture/écriture rapide |
| **Périphériques** | GPIO, ADC, UART, SPI, I2C, PWM… | Via **registres** |
| **Bus** | Relie CPU ↔ mémoires ↔ périphériques | Transparent pour le code Arduino |

"
image="functional-block-diagram.png" %}

## CPU - le chef d'orchestre

Le CPU exécute un **cycle fetch–decode–execute** en continu :

1. **Fetch** - lire l'instruction suivante en Flash
2. **Decode** - la décoder
3. **Execute** - l'exécuter (calcul, accès mémoire, écriture registre)

Ce cycle est cadencé par l'**horloge** : l'ESP32-S3 tourne à **240 MHz**, soit 240 millions de cycles par seconde. Une addition ou une multiplication entière prend un ou deux cycles, un `digitalWrite()` (qui traverse plusieurs couches du core Arduino avant d'atteindre le registre) quelques dizaines, et établir une connexion Wi-Fi en réclame plusieurs centaines de millions.

L'ESP32-S3 possède **deux cœurs** (deux unités de calcul quasi indépendantes, capables de travailler en parallèle) Xtensa LX7. Dans le cadre Arduino-ESP32, le petit noyau temps réel FreeRTOS répartit le travail : le code principal `setup()`/`loop()` tourne sur le cœur 1, et le cœur 0 gère le Wi-Fi en arrière-plan.

### Ce que fait vraiment le CPU : calculer ou transférer

Au fond, un CPU ne sait faire que deux choses : **des calculs** et **des transferts de données**. Tout programme, aussi complexe soit-il, se ramène à cette combinaison : combiner deux nombres, ou déplacer un octet d'une case vers une autre.

Les calculs sont réalisés par l'**ALU** (*Arithmetic Logic Unit*, unité arithmétique et logique), le cœur mathématique du CPU. Elle prend deux nombres en entrée et produit :

- des **opérations arithmétiques** : addition, soustraction, multiplication…
- des **opérations logiques** : ET, OU, OU-exclusif (XOR), décalages de bits…

À chaque opération, l'ALU met aussi à jour quelques **drapeaux d'état** (*flags*) qui résument le résultat sans qu'on ait à le relire : est-il **nul** (*zero*) ? **négatif** ? y a-t-il eu une **retenue** (*carry*) ou un **dépassement** de capacité (*overflow*) ? Ce sont ces drapeaux que le CPU consulte pour décider quoi faire ensuite - c'est exactement ce qui se cache derrière un `if (a > b)` en C : une soustraction, puis la lecture d'un drapeau.

Pour travailler vite, l'ALU ne pioche pas directement dans la RAM : elle passe par une poignée de **registres internes** au CPU - à ne pas confondre avec les registres de périphériques vus plus bas - des cases ultra-rapides où sont posés les opérandes le temps du calcul.

## L'horloge - cadencer et économiser l'énergie

Rien ne bouge dans un microcontrôleur sans horloge : c'est elle qui impose le rythme auquel le CPU et les périphériques avancent d'une étape à la suivante, comme une chaîne de fabrication robotisée où chaque poste doit être synchronisé avec le suivant. Sa source est généralement un **cristal de quartz** externe : soumis à une tension, il oscille à une fréquence extrêmement stable - le même principe que dans une montre à quartz.

Plus la fréquence est élevée, plus le CPU exécute d'instructions par seconde - mais plus il consomme d'énergie et chauffe. C'est pour ça que les microcontrôleurs plafonnent en général à quelques centaines de MHz, loin des ~5 GHz d'un processeur de PC : ils visent l'autonomie sur batterie, pas la performance brute.

{% include message.html title="Éteindre l'horloge pour économiser" message="Chaque périphérique (UART, ADC, Wi-Fi…) peut avoir sa propre horloge activée ou coupée indépendamment par logiciel. Désactiver l'horloge d'un périphérique inutilisé est l'un des leviers principaux pour réduire la consommation d'un projet sur batterie - c'est ce que font les modes veille (deep sleep) de l'ESP32-S3." status="is-info" icon="fas fa-info-circle" %}

### Dormir pour durer - les modes veille

Pour un projet sur batterie, le microcontrôleur passe le plus clair de son temps à ne rien faire d'utile. Plutôt que de tourner à vide, il peut **dormir** :

- **Light sleep** : le CPU est suspendu mais la RAM et l'état sont conservés ; réveil quasi instantané.
- **Deep sleep** : presque tout est éteint sauf un petit domaine (RTC) ; la consommation tombe à quelques microampères, mais le programme **redémarre** au réveil (déclenché par un timer, une broche…).

C'est ce qui permet à un capteur sans fil de tenir des mois, voire des années, sur une simple pile.

## Mémoires - Flash vs RAM

| | Flash | RAM (SRAM) |
|---|---|---|
| **Contenu** | Programme compilé, constantes | Variables, pile (mémoire des appels de fonctions) et heap (allocation dynamique) |
| **Persistance** | Oui (survit à un reset) | Non (perdu à l'extinction) |
| **Vitesse** | Plus lente | Très rapide |
| **Taille (XIAO ESP32S3)** | 8 Mo (externe) | 512 Ko interne + 8 Mo de PSRAM externe |

```cpp
// En Flash (programme + constantes)
const char msg[] PROGMEM = "Hello";

// En RAM (variable)
int compteur = 0;
```

## Périphériques - le glossaire

Un microcontrôleur embarque une collection de circuits spécialisés, chacun désigné par un acronyme. En voici les plus courants :

| Acronyme | Nom complet | Rôle |
|---|---|---|
| **GPIO** | General Purpose Input/Output | Broches numériques configurables en entrée ou sortie - voir [GPIO & monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/) |
| **ADC** | Analog to Digital Converter | Convertit une tension analogique en valeur numérique - voir [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/) |
| **UART / I2C / SPI** | - | Bus de communication série - voir [Les bus de communication](/workshops/microcontroleur/concepts/bus-communication/) |
| **Timer** | Compteur matériel | Cadence des événements périodiques ou génère du PWM, indépendamment du CPU |
| **DMA** | Direct Memory Access | Transfère des données entre mémoire et périphérique sans mobiliser le CPU |
| **RTC** | Real-Time Clock | Horloge qui continue de tourner en veille profonde, pour réveiller la puce à une heure précise |
| **Watchdog** | *Chien de garde* | Compteur qui redémarre le microcontrôleur si le programme se bloque et oublie de le réinitialiser à temps |

{% include message.html title="Pas de DAC sur l'ESP32-S3" message="Contrairement à l'ESP32 d'origine, l'ESP32-S3 n'a pas de DAC (Digital to Analog Converter) matériel. Pour produire un signal analogique variable, il faut passer par du PWM filtré ou une puce externe." status="is-warning" icon="fas fa-exclamation-triangle" %}

### Des périphériques spécifiques à chaque puce

Les périphériques ci-dessus (GPIO, ADC, timers, DMA…) se retrouvent sur presque tous les microcontrôleurs. Mais chaque famille de puces ajoute ses **blocs spécialisés** : ce sont eux qui font sa personnalité et son domaine de prédilection, et qui distinguent un µC « connecté » d'un µC « multimédia » ou « bas coût ».

| Périphérique spécialisé | Rôle | Exemples de puces |
|---|---|---|
| **Wi-Fi / Bluetooth** | Radio 2,4 GHz intégrée pour le sans-fil et l'IoT | ESP32, ESP32-S3 (le Raspberry Pi Pico W passe, lui, par une puce radio séparée) |
| **Interface caméra** (DVP / LCD_CAM) | Capture d'un flux vidéo depuis un capteur d'image | ESP32-S3 (carte XIAO ESP32S3 Sense), ESP32 (carte ESP32-CAM) |
| **Codec vidéo matériel** | Décodage/encodage accéléré (JPEG, H.264) | SoC applicatifs (ESP32-P4, i.MX…) |
| **Audio** (I2S, codec) | Entrée/sortie de son numérique (micro, haut-parleur) | ESP32-S3, STM32 audio |
| **USB natif** (OTG) | Jouer le rôle de périphérique ou d'hôte USB | ESP32-S3, RP2040, STM32 |
| **Accélérateur cryptographique** | Chiffrement câblé en matériel (AES, SHA, RSA) : rapide et économe | ESP32-S3, STM32 « crypto » |
| **Accélérateur IA / DSP** | Traitement du signal ou inférence de réseaux de neurones | ESP32-S3 (instructions vectorielles), ESP32-P4 |
| **Capteur tactile capacitif** | Détecte le toucher sur une piste conductrice, sans bouton mécanique | ESP32, ESP32-S3 |

{% include message.html title="Le S3 est orienté « connecté + IA légère »" message="L'ESP32-S3 embarque Wi-Fi, Bluetooth 5 LE, USB natif, interface caméra/écran (LCD_CAM), audio I2S, accélérateur cryptographique et des instructions vectorielles pour l'IA embarquée. À l'inverse, un microcontrôleur bas coût (ATtiny, STM32 d'entrée de gamme) se limite souvent aux périphériques universels du tableau précédent." status="is-info" icon="fas fa-info-circle" %}

## Le bus - l'autoroute de données partagée

Le CPU, les mémoires et les périphériques ne sont pas reliés deux à deux par des fils dédiés : ils partagent un **bus**, un faisceau de pistes communes sur lequel tout le monde est branché. On y distingue en général trois faisceaux :

- un **bus d'adresses** : le CPU y place l'adresse de la case qu'il veut lire ou écrire ;
- un **bus de données** : la valeur y transite dans un sens ou dans l'autre ;
- un **bus de contrôle** : quelques signaux qui précisent « je lis » ou « j'écris ».

Comme la ligne est partagée, une règle absolue s'impose : **un seul composant a le droit de "parler" (imposer une tension) à la fois**. Si deux périphériques poussaient une valeur en même temps sur le bus de données - l'un forçant un 0, l'autre un 1 - on obtiendrait un court-circuit.

Pour l'éviter, chaque composant se branche au bus via des **sorties trois états** : en plus de 0 et 1, elles disposent d'un état de [**haute impédance**](https://fr.wikipedia.org/wiki/Haute_imp%C3%A9dance) (*high-Z*) qui les déconnecte électriquement de la ligne. À tout instant, un seul émetteur est actif ; tous les autres sont en haute impédance, à l'écoute. C'est le bus d'adresses qui orchestre ce ballet : l'adresse émise par le CPU **sélectionne** le seul composant autorisé à répondre.

```mermaid
flowchart TB
  CPU["CPU\n(pilote le bus)"]
  BUS["Bus partagé - adresses · données · contrôle"]
  RAM["RAM"]
  PA["Périph. A\n(émetteur actif)"]
  PB["Périph. B\n(haute impédance)"]
  CPU --- BUS
  BUS --- RAM
  BUS --- PA
  BUS --- PB
```

### Harvard ou Von Neumann ?

Deux grandes familles d'architectures décrivent *comment* le CPU accède au programme et aux données :

- **Von Neumann** : instructions et données partagent la **même** mémoire et le même bus. Simple, mais le CPU ne peut pas lire une instruction et une donnée au même instant.
- **Harvard** : instructions et données empruntent des **chemins séparés**, donc lisibles en parallèle - plus rapide.

Le cœur Xtensa LX7 de l'ESP32-S3 suit une architecture **Harvard modifiée** : les bus d'instructions et de données sont distincts, mais la Flash est « mappée » en mémoire via un cache, ce qui donne au programmeur l'illusion d'un espace unifié. Retiens surtout l'idée : le **programme** (Flash) et les **données** (RAM) vivent dans des espaces séparés.

## Les registres - interface logiciel/matériel

Chaque périphérique est contrôlé via des **registres** : des cases mémoire à des adresses fixes. Écrire dans un registre allume une LED ; lire un registre retourne l'état d'un bouton.

Comment une adresse retrouve-t-elle la bonne case ? Un circuit appelé **décodeur d'adresse** compare l'adresse présente sur le bus et n'active que la cellule correspondante ; toutes les autres restent en [**haute impédance**](https://fr.wikipedia.org/wiki/Haute_imp%C3%A9dance). Le mécanisme est identique pour une case de RAM et pour un registre de périphérique : dans l'espace d'adressage du CPU, écrire une variable en mémoire et allumer une LED se ressemblent beaucoup - c'est la même opération « poser une valeur à telle adresse ».

Arduino abstrait tout ça : `digitalWrite(LED, HIGH)` écrit dans le bon registre sans que tu aies à connaître son adresse. Mais derrière, c'est toujours un accès registre.

## Le déroulement d'un programme

Avant de voir comment un événement peut « interrompre » le CPU, comprenons comment un programme se déroule **normalement**.

Un programme Arduino tient dans deux fonctions :

- `setup()` : exécutée **une seule fois** au démarrage, pour préparer le matériel (broches, périphériques…) ;
- `loop()` : exécutée **en boucle infinie**, tant que la carte est alimentée.

```cpp
void setup() {
  // une seule fois : initialisation
}

void loop() {
  // répété sans fin : le cœur du programme
}
```

Le CPU exécute ces instructions **les unes après les autres**, dans l'ordre, au rythme de l'horloge (le cycle *fetch–decode–execute* vu plus haut). Ce déroulement séquentiel est simple mais rigide : le programme ne fait qu'une chose à la fois et ne « regarde » un bouton qu'au moment où il atteint la ligne qui le lit.

C'est précisément cette limite que lèvent les interruptions. (Le trajet complet du code jusqu'à la puce est détaillé dans [Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/).)

## Interruptions - réagir sans attendre

Le CPU exécute `loop()` en continu, mais certains événements ne peuvent pas attendre le prochain passage dans la boucle - un bouton pressé pendant une longue routine, par exemple. Une **interruption** suspend momentanément l'exécution normale pour exécuter une petite fonction dédiée, puis reprend exactement où elle s'était arrêtée.

```cpp
volatile int compteurAppuis = 0;  // volatile : modifiée hors du déroulement normal

void IRAM_ATTR surAppui() {
  compteurAppuis++;  // aussi court et rapide que possible
}

void setup() {
  attachInterrupt(digitalPinToInterrupt(BTN_PIN), surAppui, FALLING);
}
```

Le mot-clé **`IRAM_ATTR`** demande au compilateur de placer la fonction d'interruption dans la **RAM interne** (l'IRAM) plutôt qu'en Flash. Pourquoi ? Sur l'ESP32-S3, le code réside normalement en Flash et n'est lu qu'à la demande via un cache. Or une interruption peut survenir à un instant où la Flash est momentanément indisponible (pendant une écriture, par exemple) : si la fonction s'y trouvait, la puce planterait. En la forçant en IRAM, on garantit qu'elle est **toujours accessible et rapide**. Sur ESP32, toute fonction d'interruption (*ISR*) doit donc être marquée `IRAM_ATTR`.

{% include message.html title="Une interruption reste courte" message="Le code d'une interruption doit être minimal (incrémenter une variable, positionner un drapeau) : tant qu'il s'exécute, le reste du programme - y compris d'autres interruptions - est suspendu." status="is-info" icon="fas fa-info-circle" %}

## L'ESP32-S3 en bref

Dans l'atelier, la puce est montée sur une carte [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/) de Seeed Studio.

| Caractéristique | Valeur |
|---|---|
| CPU | Xtensa LX7 dual-core **32 bits**, 240 MHz |
| RAM | 512 Ko SRAM + 8 Mo PSRAM (RAM externe supplémentaire, présente sur la XIAO) |
| Flash | 8 Mo (externe via SPI) sur la XIAO ESP32S3 |
| GPIO | 45 sur la puce (dont 20 ADC), 11 sorties sur la XIAO (D0 à D10) |
| Tension logique | **3,3 V** (≠ 5 V des Arduino classiques) |
| Connectivité | Wi-Fi 802.11 b/g/n + Bluetooth 5 |

{% include message.html title="Attention : 3,3 V uniquement" message="L'ESP32-S3 fonctionne en logique **3,3 V**. Relier une broche GPIO directement à du 5 V (Arduino Uno, capteur alimenté en 5 V) peut endommager la puce de façon irréversible." status="is-danger" icon="fas fa-exclamation-triangle" %}

## Quiz express

**1. Quelle mémoire conserve le programme quand la carte est éteinte ?**

<details><summary>Voir la réponse</summary>La Flash (persistante). La RAM, elle, est volatile : son contenu disparaît à l'extinction.</details>

**2. À quoi sert un registre de périphérique ?**

<details><summary>Voir la réponse</summary>À commander le périphérique : lire ou écrire à une adresse fixe (ex : allumer une LED, lire un bouton).</details>

**3. Pourquoi un seul composant peut-il « parler » sur le bus à la fois ?**

<details><summary>Voir la réponse</summary>Le bus est partagé : deux émetteurs simultanés (0 vs 1) créeraient un court-circuit. Les autres restent en haute impédance.</details>

## Pour aller plus loin

- [Chaîne d'outils & premier Blink](/workshops/microcontroleur/tutorials/toolchain-blink/) - voir cette architecture à l'œuvre sur un premier programme

## Résumé

- Un µC = CPU + Flash + RAM + périphériques sur une seule puce - un **système sur puce** autonome.
- Le CPU ne fait au fond que **calculer** (via l'**ALU**, qui lève des drapeaux nul/négatif/retenue/dépassement) et **transférer** des données ; le tout cadencé par l'**horloge** (240 MHz pour l'ESP32-S3), dont couper la source sur un périphérique inutilisé économise de l'énergie.
- Flash = programme (persistant) ; RAM = données en cours d'exécution (volatile) - deux espaces séparés (architecture **Harvard modifiée**).
- Tout le monde partage un **bus** : un seul composant parle à la fois, les autres passent en **haute impédance**, et l'**adresse** sélectionne le destinataire.
- Les périphériques (GPIO, ADC, Timer, DMA, RTC, Watchdog…) sont contrôlés via des **registres** - de simples cases à une adresse fixe, qu'Arduino manipule pour toi.
- Une **interruption** permet de réagir immédiatement à un événement sans attendre le prochain passage dans `loop()`.
- Les **modes veille** (light/deep sleep) coupent tout ou partie de la puce pour tenir longtemps sur batterie.
- Tension logique ESP32-S3 : **3,3 V** (pas 5 V).
