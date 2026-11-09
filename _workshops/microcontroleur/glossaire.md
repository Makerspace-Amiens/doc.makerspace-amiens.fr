---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true

title: Glossaire de l'atelier
subtitle: Les mots du microcontrôleur, en une phrase chacun
description: Les termes techniques de l'atelier Microcontrôleurs définis en une phrase, avec un lien vers le concept qui les explique.
author: Alban Petit

todo: 80
---

## Comment lire ce glossaire

Chaque terme est défini en une phrase. Pour comprendre plus en profondeur, suivre le lien vers le concept qui l'explique. Les termes sont classés par thème, dans l'ordre où l'atelier les aborde.

## Le microcontrôleur

| Terme | Définition | Voir |
|---|---|---|
| **Microcontrôleur** (µC, MCU) | Un ordinateur complet sur une seule puce : processeur, mémoires et périphériques | [Qu'est-ce qu'un microcontrôleur ?](/workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/) |
| **SoC** | *System on Chip* : une puce qui réunit un système complet, ici le processeur, les périphériques et la radio Wi-Fi de l'ESP32-S3 | idem |
| **Carte de développement** | Une carte qui porte le microcontrôleur avec ce qu'il faut pour s'en servir tout de suite (USB, régulateur, broches au pas de 2,54 mm), comme la XIAO ESP32S3 | idem |
| **Datasheet** | Le document du fabricant qui donne les caractéristiques électriques et le brochage d'un composant | idem |
| **Périphérique** | Un bloc matériel intégré à la puce qui assure une fonction sans le processeur : GPIO, ADC, UART, SPI, timer... | [Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/) |
| **Registre** | Une petite case mémoire qui commande un périphérique : écrire un bit dans un registre allume une broche, par exemple | idem |
| **Mémoire flash** | La mémoire non volatile qui garde le programme quand la carte est éteinte | idem |
| **RAM** (SRAM) | La mémoire de travail, rapide et effacée à chaque coupure : elle contient les variables | idem |
| **Pile** (*stack*) | La zone de RAM où vivent les variables locales des fonctions, libérée à la sortie de chaque fonction | idem |
| **Tas** (*heap*) | La zone de RAM où le programme réserve de la mémoire à la demande ; elle se fragmente avec le temps | idem |
| **Interruption** (ISR) | Une fonction appelée par le matériel dès qu'un événement survient, en suspendant le programme en cours | idem |
| **`volatile`** | Le mot-clé qui interdit au compilateur de garder une variable en cache : obligatoire si une interruption la modifie | idem |
| **Chien de garde** (*watchdog*) | Un minuteur qui redémarre la puce si le programme ne lui a pas donné signe de vie à temps | idem |

## Du code à la puce

| Terme | Définition | Voir |
|---|---|---|
| **Compilateur** | Le programme qui traduit le code C ou C++ en instructions machine pour un processeur donné | [Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/) |
| **Compilé / interprété** | Un langage compilé est traduit une fois pour toutes avant l'exécution ; un langage interprété est lu et exécuté ligne par ligne, à chaque lancement | idem |
| **Édition de liens** | L'étape qui assemble les fichiers compilés et les bibliothèques en un seul programme | idem |
| **Firmware** | Le programme qui tourne sur le microcontrôleur | idem |
| **Bootloader** | Un petit programme, lancé au démarrage, qui sait recevoir un nouveau firmware et l'écrire en flash | idem |
| **Toolchain** | L'ensemble des outils qui transforment le code source en firmware téléversé : compilateur, éditeur de liens, outil de flash | idem |
| **PlatformIO** | L'extension de VSCode qui pilote la toolchain, les bibliothèques et le téléversement | [PlatformIO](/docs/references/software/platformIO/) |
| **Framework Arduino** | La bibliothèque qui fournit `setup()`, `loop()`, `digitalWrite()`... pour de nombreuses cartes, dont l'ESP32 (Arduino-ESP32) | [Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/) |
| **Moniteur série** | La fenêtre qui affiche ce que la carte envoie par `Serial`, et le premier outil de débogage | [Déboguer un programme embarqué](/docs/how-to-guides/deboguer-programme-embarque/) |

## Entrées et sorties

| Terme | Définition | Voir |
|---|---|---|
| **GPIO** | Une broche d'usage général, configurable en entrée ou en sortie numérique | [GPIO & monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/) |
| **Niveau logique** | L'état d'un signal numérique : `HIGH` (3,3 V sur l'ESP32) ou `LOW` (0 V) | idem |
| **Entrée flottante** | Une entrée reliée à rien, qui lit un niveau au hasard | idem |
| **Résistance de tirage** (*pull-up*, *pull-down*) | Une résistance qui impose un niveau par défaut à une entrée, vers 3,3 V ou vers la masse | idem |
| **Rebond** | Les ouvertures et fermetures parasites d'un contact mécanique pendant quelques millisecondes | idem |
| **Front** | Le passage d'un niveau à l'autre : montant (`LOW` vers `HIGH`) ou descendant | idem |
| **Open-drain** | Une sortie qui ne sait que tirer la ligne vers la masse ; une résistance de tirage la ramène au niveau haut | [Les bus de communication](/workshops/microcontroleur/concepts/bus-communication/) |
| **ADC** | Le convertisseur qui transforme une tension en nombre (de 0 à 4095 sur 12 bits) | [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/) |
| **Résolution** | Le nombre de bits d'une conversion, donc le nombre de valeurs possibles | idem |
| **PWM** | Un signal carré dont on fait varier le rapport cyclique pour simuler une tension moyenne ou produire une note | idem |
| **Rapport cyclique** | La part du temps où un signal PWM est à l'état haut, en pourcentage | idem |

## Bus de communication

| Terme | Définition | Voir |
|---|---|---|
| **Liaison série / parallèle** | Les bits passent l'un après l'autre sur un fil (série), ou tous en même temps sur plusieurs fils (parallèle) | [Les bus de communication](/workshops/microcontroleur/concepts/bus-communication/) |
| **Synchrone / asynchrone** | Une liaison synchrone transporte une horloge avec les données ; une liaison asynchrone repose sur une vitesse convenue à l'avance | idem |
| **Maître / esclave** | Le maître dirige les échanges et génère l'horloge ; les esclaves répondent quand il les sollicite | idem |
| **UART** | Une liaison série asynchrone point à point sur deux fils, TX et RX | idem |
| **Baud** | La vitesse d'une liaison série, en symboles par seconde (115 200 bauds pour le moniteur série) | idem |
| **I2C** | Un bus à deux fils (SDA, SCL) où chaque esclave a une adresse | idem |
| **SPI** | Un bus rapide à quatre fils (SCK, MOSI, MISO, CS), utilisé par l'écran de la console | idem |

## Le jeu

| Terme | Définition | Voir |
|---|---|---|
| **Machine à états** (FSM) | Une façon d'organiser un programme en états (accueil, partie, fin) et en transitions déclenchées par des événements | [Machine à états finis](/workshops/microcontroleur/concepts/machine-etats-finis/) |
| **Boucle de jeu** | Le cycle lire les entrées, mettre à jour le jeu, dessiner, répété en continu sans jamais bloquer | idem |
| **`millis()`** | Le nombre de millisecondes écoulées depuis le démarrage, pour mesurer le temps sans `delay()` | idem |
| **Programme bloquant** | Un programme qui attend (`delay()`, boucle d'attente) et ne fait rien d'autre pendant ce temps | idem |

## La carte

| Terme | Définition | Voir |
|---|---|---|
| **Schéma** | Le dessin des composants et de leurs connexions électriques | [KiCad](/docs/references/software/kicad/) |
| **Empreinte** (*footprint*) | La forme des pastilles de cuivre où se soude un composant | idem |
| **Routage** | Le tracé des pistes de cuivre qui réalisent les connexions du schéma | idem |
| **ERC / DRC** | Les vérifications automatiques du schéma (règles électriques) et du circuit imprimé (règles de fabrication) | idem |
| **Condensateur de découplage** | Un condensateur placé au plus près de l'alimentation d'un composant pour filtrer les appels de courant | [Concevoir la carte de la console](/workshops/microcontroleur/tutorials/conception-carte-kicad/) |
| **CMS** | Composant monté en surface, soudé sur des pastilles sans traverser la carte | [Souder et tester la carte](/workshops/microcontroleur/tutorials/souder-tester-carte/) |

## Le réseau

| Terme | Définition | Voir |
|---|---|---|
| **Point d'accès** (AP) | Le mode où l'ESP32 crée son propre réseau Wi-Fi, auquel le téléphone se connecte | [Wi-Fi, HTTP et WebSocket](/docs/concepts/reseau-wifi-websocket/) |
| **Serveur web** | Le programme qui répond aux requêtes HTTP du navigateur en lui envoyant la page | idem |
| **WebSocket** | Une connexion qui reste ouverte entre le navigateur et la console, pour échanger des messages dans les deux sens en temps réel | idem |
| **Protocole** | La liste des messages échangés, leur format et leur sens | idem |
| **JSON** | Un format de texte pour structurer les messages, par exemple `{"type":"score","value":3}` | idem |
