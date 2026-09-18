---
layout: documentation
hide_hero: false
hero_image: "hero.jpg"
hero_darken: true
image: "logo.jpg"
component_toc: true
doc_header: true
type: tutorial
order: 20

title: Utilisation du Driver A4988 pour Moteurs Pas-à-Pas
subtitle: Du prototypage sur breadboard à l'intégration PCB
description: Ce tutoriel explique comment utiliser le driver A4988 d'Allegro pour contrôler des moteurs pas-à-pas bipolaires avec un ESP32, d'abord sur breadboard puis en intégration PCB professionnelle.
author: Alban Petit

time: 2
difficulty: 2
compatibilities-os: win, mac, lin

prerequisites:
  - label: Connaissances de base en électronique
    link: ""
  - label: Notions de programmation C++ (framework Arduino pour ESP32)
    link: ""
  - label: Compréhension des moteurs pas-à-pas
    link: ""

softwares:
  - label: Visual Studio Code avec PlatformIO
    link: "/docs/tutorial/installation-vscode-platformio"
  - label: KiCad (pour la partie PCB)
    link: "/docs/tutorial/installation-kicad"

hardwares:
  - label: ESP32 S3 UNO
    link: ""
  - label: Module driver A4988
    link: ""
  - label: Moteur pas-à-pas bipolaire NEMA 17
    link: ""
  - label: Alimentation 12-24V
    link: ""

todo: 100
---

## Introduction

Le **A4988** est un driver de moteur pas-à-pas bipolaire fabriqué par **Allegro MicroSystems**. Simple, robuste et économique, il est l'un des drivers les plus répandus dans le monde des makers, des imprimantes 3D et des petites machines CNC.

### Caractéristiques principales

- **Tension d'alimentation moteur** : 8V à 35V
- **Courant par phase** : jusqu'à 1A en continu, 2A en peak (avec refroidissement)
- **Microstepping** : Full, 1/2, 1/4, 1/8, 1/16 step
- **Interface STEP/DIR** : simple et compatible avec tous les microcontrôleurs
- **Protection thermique** : arrêt automatique à 150°C
- **Protection sous-tension** : désactivation si VM < 8V
- **Détection de court-circuit** : protection des sorties moteur

### Pourquoi choisir le A4988 ?

Le A4988 est idéal pour les projets nécessitant :

- Une mise en œuvre **rapide et simple** (pas de configuration logicielle)
- Un **coût minimal**
- Une **documentation abondante** et une large communauté
- Des applications à **vitesses modérées** sans exigence de silence

{% include message.html
title="A4988 vs TMC2209"
message="Le A4988 est plus simple et moins cher que le TMC2209, mais il produit plus de bruit et de vibrations, et son microstepping s'arrête à 1/16. Pour des applications silencieuses ou des courants > 1.5A en continu, préférez le TMC2209 ou le DRV8825."
status="is-info"
icon="fas fa-info-circle" %}

---

## Comprendre le A4988

### Architecture interne

Le A4988 intègre deux ponts en H complets pour contrôler les deux bobines d'un moteur bipolaire. Le hachage du courant (chopping) est géré en interne grâce à des résistances de mesure (Rsense) et un oscillateur interne.

Il utilise une **table de vérité de microstepping** interne : en fonction des états de MS1, MS2 et MS3, le driver génère automatiquement les séquences de courant sinusoïdales pour le microstepping.

### Pinout du module

![pinout](pinout.jpeg)

### Configuration du microstepping

Le microstepping permet d'obtenir davantage de résolution lors de la rotation du moteur. Il s'agit d'un usage avancé des drivers de moteurs, permettant des déplacements plus fins et des mouvements plus silencieux.

Trois pins (MS1, MS2, MS3) permettent de sélectionner le mode de microstepping :

| MS1 | MS2 | MS3 | Mode      | Steps/tour (moteur 1.8°) |
|-----|-----|-----|-----------|--------------------------|
| GND | GND | GND | Full step | 200                      |
| VDD | GND | GND | 1/2 step  | 400                      |
| GND | VDD | GND | 1/4 step  | 800                      |
| VDD | VDD | GND | 1/8 step  | 1600                     |
| VDD | VDD | VDD | 1/16 step | 3200                     |

{% include message.html
title="Pull-down internes"
message="Les pins MS1, MS2, MS3 ont des résistances de pull-down internes. Laissées non connectées (flottantes), elles sont lues comme LOW (GND). Le mode par défaut, si rien n'est connecté, est donc le Full Step."
status="is-info"
icon="fas fa-info-circle" %}

---

## Partie 1 : Prototypage sur Breadboard

{% include step-tuto.html
greyBackground = true
title = "Matériel nécessaire"
content="

- 1x Module A4988 (format StepStick / Pololu)
- 1x ESP32 S3 UNO
- 1x Moteur pas-à-pas bipolaire NEMA 17 (≤ 1A/phase recommandé)
- 1x Alimentation externe 12V ou 24V (2A minimum)
- 1x Breadboard
- Câbles Dupont mâle-mâle et mâle-femelle
- 1x Condensateur électrolytique 100µF 35V (indispensable)
- (Optionnel) Dissipateur thermique autocollant
" %}

{% include message.html
title="Condensateur 100µF OBLIGATOIRE"
message="Brancher un condensateur de 100µF entre VMOT et GND est INDISPENSABLE. Sans lui, les pointes de courant lors du freinage moteur (back-EMF) peuvent détruire instantanément le A4988. Ce condensateur protège le driver."
status="is-danger"
icon="fas fa-exclamation-triangle" %}

{% include message.html
title="Alimentation moteur séparée"
message="Ne jamais alimenter le moteur via l'USB de l'ESP32 ! Le A4988 et le moteur nécessitent une alimentation externe 12-24V."
status="is-danger"
icon="fas fa-exclamation-triangle" %}

### Schéma de câblage

{% include step-tuto.html
greyBackground = true
content="
**Alimentation moteur :**

- VMOT : +12V ou +24V (alimentation externe)
- GND (côté VMOT) : Masse alimentation moteur
- Condensateur 100µF entre VMOT et GND (au plus près du module)

**Alimentation logique :**

- VDD : +3.3V depuis l'ESP32
- GND (côté VDD) : Masse commune avec l'ESP32

**Signaux de contrôle :**

- STEP : GPIO 12
- DIR : GPIO 13
- EN : GPIO 14 (ou relié à GND pour toujours activer)
- RESET et SLEEP : reliés ensemble (HIGH = actif)

**Microstepping (exemple 1/16) (optionnel) :**

- MS1 : 3.3V (GPIO 1 ou VDD)
- MS2 : 3.3V (GPIO 2 ou VDD)
- MS3 : 3.3V (GPIO 3 ou VDD)

**Sorties moteur :**

- 1A, 1B : Bobine A du moteur
- 2A, 2B : Bobine B du moteur
"
image="wiring.jpg" %}

{% include message.html
title="RESET et SLEEP"
message="Les pins RESET et SLEEP doivent être reliés ensemble (ou à 3.3V) pour que le driver soit actif. Si SLEEP est mis à LOW, le driver entre en mode veille. Si RESET est mis à LOW, le driver est réinitialisé."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

{% include message.html
title="Vérifier le pinout de votre module"
message="Vérifiez TOUJOURS le pinout de votre module A4988 ! Bien que la majorité des modules suivent le standard Pololu/StepStick, certains clones ont des pins dans un ordre différent. Référez-vous à la sérigraphie sur le module."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

### Réglage du courant (Vref)

{% include step-tuto.html
greyBackground = true
title = "Réglage du potentiomètre Vref"
content="
Le courant maximum délivré au moteur se règle via le potentiomètre sur le module.

**Formule :**
`Imax = Vref / (8 × Rsense)`
→ `Vref = Imax × 8 × Rsense`

**Valeurs selon le module :**

- Module Pololu original (Rsense = 0.2Ω) : `Vref = Imax × 1.6`
- Clones courants (Rsense = 0.1Ω) : `Vref = Imax × 0.8`
- Clones économiques (Rsense = 0.05Ω) : `Vref = Imax × 0.4`

**Pour identifier votre Rsense :**

- Lire la valeur sur les deux petites résistances CMS situées à côté de la puce
- Valeurs communes : R200 = 0.2Ω, R100 = 0.1Ω, R050 = 0.05Ω

**Procédure :**

1. Alimenter VDD (3.3V) **sans alimenter VMOT**
2. Mesurer au multimètre entre la vis du potentiomètre et GND
3. Ajuster avec un tournevis céramique ou plastique
4. Commencer à 50% du courant nominal, tester, puis ajuster

" %}

{% include message.html
title="Réglage avant connexion du moteur"
message="Réglez le Vref AVANT de connecter le moteur, uniquement VDD alimenté. Tourner le potentiomètre dans le sens horaire augmente le courant. Ne dépassez jamais le courant nominal du moteur, sous peine de surchauffe rapide du driver et du moteur."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Code ESP32

### Code 1 : Test simple de rotation

```cpp
#include <Arduino.h>

// Pins GPIO de l'ESP32
#define STEP_PIN    12
#define DIR_PIN     13
#define ENABLE_PIN  14

// Paramètres moteur
// 200 pas/tour (moteur 1.8°) × 16 microsteps = 3200 pas/tour
const int stepsPerRevolution = 200;
const int microstepping = 16;  // MS1=MS2=MS3=3.3V
const int totalSteps = stepsPerRevolution * microstepping;

void rotate(int steps, int delayMicros);

void setup() {
  pinMode(STEP_PIN, OUTPUT);
  pinMode(DIR_PIN, OUTPUT);
  pinMode(ENABLE_PIN, OUTPUT);

  // Activer le driver (EN = LOW = actif)
  digitalWrite(ENABLE_PIN, LOW);

  Serial.begin(115200);
  Serial.println("A4988 + ESP32 - Test de rotation");
}

void loop() {
  Serial.println("Sens horaire - 1 tour");
  digitalWrite(DIR_PIN, HIGH);
  rotate(totalSteps, 500);
  delay(1000);

  Serial.println("Sens antihoraire - 1 tour");
  digitalWrite(DIR_PIN, LOW);
  rotate(totalSteps, 500);
  delay(1000);
}

void rotate(int steps, int delayMicros) {
  for (int i = 0; i < steps; i++) {
    digitalWrite(STEP_PIN, HIGH);
    delayMicroseconds(delayMicros);
    digitalWrite(STEP_PIN, LOW);
    delayMicroseconds(delayMicros);
  }
}
```

{% include step-tuto.html
greyBackground = true
title = "Test et vérification"
content="

1. Uploadez le code sur votre ESP32
2. Ouvrez le moniteur série (115200 bauds)
3. Le moteur devrait effectuer 1 tour dans chaque sens en alternance
4. Si le moteur ne tourne pas → vérifiez que RESET et SLEEP sont reliés ensemble
5. Si le moteur chauffe sans bouger → courant trop élevé, réduire Vref
6. Si le moteur vibre sans avancer → inverser les fils d'une bobine

" %}

### Code 2 : Utilisation avec AccelStepper

Pour cette démonstration, la bibliothèque AccelStepper est obligatoire. Ajoutez la ligne suivante dans votre `platformio.ini` :

```ini
lib_deps = waspinator/AccelStepper@^1.64
```

Voici le code nécessaire à cette démonstration :

```cpp
#include <Arduino.h>
#include <AccelStepper.h>

#define STEP_PIN    12
#define DIR_PIN     13
#define ENABLE_PIN  14

// AccelStepper::DRIVER = mode STEP/DIR (compatible A4988, DRV8825...)
AccelStepper motor(AccelStepper::DRIVER, STEP_PIN, DIR_PIN);

void setup() {
  pinMode(ENABLE_PIN, OUTPUT);
  digitalWrite(ENABLE_PIN, LOW);  // Activer le driver

  motor.setMaxSpeed(3000);      // Pas par seconde (maximum)
  motor.setAcceleration(1000);  // Pas par seconde²
  motor.setCurrentPosition(0);

  Serial.begin(115200);
  Serial.println("A4988 + ESP32 - AccelStepper");
}

void loop() {
  // Aller à 3200 pas (1 tour en 1/16 step)
  Serial.println("Position cible : 3200");
  motor.moveTo(3200);
  while (motor.distanceToGo() != 0) {
    motor.run();
  }
  delay(500);

  // Revenir à 0
  Serial.println("Retour position 0");
  motor.moveTo(0);
  while (motor.distanceToGo() != 0) {
    motor.run();
  }
  delay(500);
}
```

---

## Partie 2 : Intégration sur PCB

Après validation du prototype sur breadboard, intégrons le module A4988 sur un PCB pour une solution robuste et compacte.

{% include step-tuto.html
greyBackground = true
title = "Considérations de routage"
content="
**Pistes de puissance (VMOT, GND moteur) :**

- Largeur minimum : 1.5mm (pour 2A)
- Idéalement : 2-3mm

**Découplage :**

- C1 (100µF) : au plus près de VMOT, entre VMOT et GND
Le reste du découplage est présent directement sur le module.

**Signaux de contrôle :**

- STEP, DIR : pistes courtes, éloignées des pistes de puissance
- MS1/MS2/MS3 : peuvent être câblées fixes (straps) ou sur connecteur avec jumpers
" %}

---

## Tests et mise en service du PCB

### Checklist avant alimentation

{% include step-tuto.html
greyBackground = true
title = "Vérifications pré-power"
content="
**Avant de brancher quoi que ce soit :**

- Inspecter toutes les soudures
- Vérifier l'absence de court-circuit (multimètre en mode continuité) :
  - VMOT → GND : doit se comporter comme un condensateur, pas comme un court-circuit
  - VDD → GND : résistance > 1kΩ
- Vérifier la polarité du condensateur électrolytique C1
- Vérifier les connexions moteur (résistance de 2 à 6Ω par bobine)
" %}

### Premier power-up

{% include step-tuto.html
greyBackground = true
title = "Mise sous tension en 4 étapes"
content="

#### Étape 1 : Test logique seul**

- Alimenter uniquement VDD (3.3V depuis l'ESP32), sans VMOT
- Vérifier VDD = 3.3V sur le connecteur
- Le driver ne doit pas chauffer

#### Étape 2 : Réglage Vref**

- Toujours avec seulement VDD alimenté
- Mesurer entre la vis du potentiomètre et GND
- Ajuster à la valeur cible (voir formule Vref)

#### Étape 3 : Test VMOT sans moteur**

- Alimenter VMOT (12V) avec une alimentation à courant limité (< 500mA)
- Le driver ne doit pas chauffer sans moteur connecté
- Envoyer quelques impulsions STEP depuis l'ESP32 : aucune fumée ni odeur

#### Étape 4 : Test complet avec moteur**

- Connecter le moteur
- Faire tourner le moteur pendant 30 secondes
- Toucher le driver : tiède (< 60°C) = normal
- Trop chaud pour être tenu (> 80°C) = courant trop élevé ou dissipation insuffisante
" %}

{% include message.html
title="Protection thermique"
message="Le A4988 coupe automatiquement à 150°C. Si cela arrive régulièrement, réduisez le courant (Vref) de 20% ou améliorez la dissipation thermique (dissipateur, ventilateur, plan de cuivre plus grand)."
status="is-warning"
icon="fas fa-thermometer-full" %}

---

## Dépannage

### Le moteur ne tourne pas

{% include step-tuto.html
greyBackground = true
title = "Checklist diagnostic"
content="

- RESET et SLEEP sont-ils reliés ensemble ou à 3.3V ?
- EN est-il à LOW (actif) ? (souvent inversé par erreur)
- VMOT est-il bien alimenté (8-35V) ?
- VDD est-il bien à 3.3V ?
- Le condensateur 100µF est-il présent et correctement câblé ?
- Vref est-il > 0V ? (sinon le courant est nul et le moteur reste bloqué)
- Tester avec un code blink sur STEP_PIN pour vérifier que le signal arrive bien
" %}

### Le moteur vibre sans tourner

{% include step-tuto.html
greyBackground = true
title = "Causes et solutions"
content="

1. **Bobines inversées** : Inverser les deux fils d'une bobine (1A↔1B ou 2A↔2B)
2. **Courant trop faible** : Augmenter Vref de 10% et retester
3. **Vitesse trop rapide** : Augmenter le délai entre steps (minimum 500µs en full step)
4. **Alimentation insuffisante** : Vérifier que la PSU peut fournir au moins 1.5A sous 12V
5. **Mauvaise identification des bobines** : Mesurer avec un multimètre ; les fils d'une même bobine ont une résistance de 2 à 6Ω entre eux
" %}

### Le driver chauffe trop

{% include step-tuto.html
greyBackground = true
title = "Réduire la température"
content="

- Réduire Vref de 20% (courant inutilement élevé ?)
- Coller un dissipateur thermique sur la puce
- Ajouter un flux d'air (ventilateur 40mm)
- Utiliser un mode de microstepping plus élevé (moins de pertes par commutation)
- Mettre le driver en SLEEP quand le moteur ne bouge pas
" %}

### Bruit et vibrations excessives

{% include step-tuto.html
greyBackground = true
title = "Réduire le bruit moteur"
content="
Le A4988 est naturellement plus bruyant que les drivers de la gamme TMC.
Ces techniques permettent d'atténuer le bruit :

1. **Passer en 1/16 step** : réduction significative du bruit à basse vitesse
2. **Réduire le courant** : moins de courant = moins de vibrations magnétiques
3. **Accélération douce** : éviter les démarrages brutaux
4. **Fréquence de découpage** : impossible à modifier sur le A4988 (fixée par ROSC)

Si le bruit est critique pour votre application, considérez un driver TMC2209 ou TMC2208 qui offrent un mode silencieux (StealthChop).
" %}

---

## Ressources et documentation

### Datasheets officielles

- [A4988 Datasheet (Allegro)](https://www.allegromicro.com/~/media/Files/Datasheets/A4988-Datasheet.ashx)
- [Guide Pololu A4988](https://www.pololu.com/product/1182) : Guide très complet du module Pololu

### Bibliothèques

- [AccelStepper](https://www.airspayce.com/mikem/arduino/AccelStepper/) : Gestion de l'accélération, support multi-axes
- [ESP32 Arduino Core](https://github.com/espressif/arduino-esp32) : Framework Arduino pour ESP32

---

## Conclusion

Le **A4988** est un driver incontournable pour débuter avec les moteurs pas-à-pas. Associé à l'**ESP32**, il offre une base solide pour des projets connectés, avec la possibilité de contrôler le moteur à distance via WiFi ou Bluetooth.

### Points clés à retenir

- **Condensateur 100µF** sur VMOT : absolument indispensable, protège le driver
- **RESET et SLEEP** doivent être reliés ensemble ou à 3.3V pour activer le driver
- **Vref** se règle avec un multimètre : Vref = Imax × 8 × Rsense
- **Dissipation thermique** : prévoir un dissipateur pour des courants > 0.8A en continu
- **ESP32** : 3.3V logique, compatible avec le VDD du A4988 (3.0V - 5.5V)

### Prochaines étapes

Maintenant que vous maîtrisez le A4988 avec l'ESP32, explorez :

- Le driver **DRV8825** : courant plus élevé (2.2A), microstepping jusqu'à 1/32
- Le driver **TMC2209** : mode silencieux (StealthChop), configuration UART, StallGuard
- La bibliothèque **AccelStepper** pour gérer plusieurs moteurs simultanément

{% include message.html
title="Projet réussi !"
message="Vous avez maintenant toutes les clés pour intégrer le driver A4988 dans vos projets ESP32, du prototype sur breadboard à l'intégration PCB. N'hésitez pas à expérimenter et à partager vos réalisations !"
status="is-success"
icon="fas fa-check-circle" %}
