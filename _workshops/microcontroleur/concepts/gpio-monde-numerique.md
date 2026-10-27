---
layout: documentation
hide_hero: true
hero_image: image.jpg
hero_darken: true
image: image.jpg
component_toc: true
doc_header: true

title: GPIO & monde numérique
subtitle: "Entrées et sorties tout-ou-rien : piloter une LED, lire un bouton"
description: "Comprendre les GPIO numériques de l'ESP32-S3 : niveaux logiques, pull-up/pull-down et état flottant."
author: Alban Petit

difficulty: 2
todo: 90

prerequisites:
  - label: Architecture d'un microcontrôleur
    link: /workshops/microcontroleur/concepts/architecture-microcontroleur/
---

## Toucher le monde réel

Jusqu'ici, le microcontrôleur réfléchissait dans son coin. Mais une puce qui ne fait que calculer ne sert à rien : pour être utile, elle doit **agir** sur le monde (allumer une LED, faire tourner un moteur) et le **percevoir** (savoir si tu appuies sur un bouton).

Ce contact avec le monde physique passe par les **broches** de la puce, ces petites pattes métalliques alignées sur les bords de la carte. Les plus polyvalentes s'appellent les **GPIO**, et ce concept est consacré aux plus simples d'entre elles : celles qui ne manipulent que du **tout-ou-rien**, comme un interrupteur mural qu'on bascule entre allumé et éteint. Pas de demi-mesure, et c'est justement ce qui rend le numérique si fiable.

**À la fin de ce concept, tu sauras :**

- configurer une broche en entrée ou en sortie ;
- éviter l'état flottant avec un pull-up ou un pull-down ;
- lire un bouton proprement (anti-rebond) et repérer les broches à éviter.

## Le numérique, c'est quoi ?

Le monde numérique ne connaît que **deux états** : `0` ou `1`, `LOW` ou `HIGH`, `0 V` ou `3,3 V`. Tout signal intermédiaire est interprété selon un seuil.

Sur l'ESP32-S3 (logique **3,3 V**) :

| État | Tension | Arduino |
|---|---|---|
| LOW | 0 V | `0` / `false` / `LOW` |
| HIGH | 3,3 V | `1` / `true` / `HIGH` |

### Les seuils logiques de l'ESP32-S3

En entrée, une broche ne bascule pas exactement à 0 V ou 3,3 V : elle compare la tension lue à deux **seuils**, et entre les deux l'état est indéterminé. La datasheet de l'ESP32-S3 (alimenté en 3,3 V) donne :

| Seuil | Valeur | Interprétation |
|---|---|---|
| $V_{IL}$ (entrée LOW max) | ≤ 0,25 × VDD ≈ **0,8 V** | En dessous : lu comme `LOW` |
| Zone indéterminée | ~0,8 V à ~2,5 V | À éviter : lecture imprévisible |
| $V_{IH}$ (entrée HIGH min) | ≥ 0,75 × VDD ≈ **2,5 V** | Au-dessus : lu comme `HIGH` |

Tout ce qui est sous ~0,8 V vaut `0`, tout ce qui dépasse ~2,5 V vaut `1`. Cette zone grise au milieu explique pourquoi une entrée **flottante** (voir plus bas) donne des lectures erratiques : sa tension traîne dans cette plage indéterminée.

En **sortie**, la puce garantit à l'inverse des niveaux francs : proche de 0 V pour `LOW` ($V_{OL}$) et proche de 3,3 V pour `HIGH` ($V_{OH}$).

{% include message.html title="Attention : 3,3 V, pas 5 V" message="Les GPIO de l'ESP32-S3 supportent **3,3 V maximum**. Une broche mise en sortie produit 3,3 V, pas 5 V comme sur Arduino Uno. Un signal 5 V appliqué en entrée peut endommager la puce." status="is-danger" icon="fas fa-exclamation-triangle" %}

## GPIO : General Purpose Input/Output

Chaque broche GPIO (*General Purpose Input/Output*, broche d'entrée/sortie à usage général) peut être configurée en **entrée** ou en **sortie** par le logiciel.

```cpp
pinMode(LED_PIN, OUTPUT);   // broche configurée en sortie
pinMode(BTN_PIN, INPUT);    // broche configurée en entrée
```

### Sortie : piloter une LED

Une broche en sortie peut **sourcer ou drainer** du courant (le fournir ou l'absorber) pour piloter un composant.

```cpp
digitalWrite(LED_PIN, HIGH);  // LED allumée (3,3 V sur la broche)
digitalWrite(LED_PIN, LOW);   // LED éteinte (0 V)
```

**Courant maximal par broche ESP32-S3 : ~40 mA.** En pratique, limiter à 12 mA avec une résistance série.

Calcul de la résistance pour une LED rouge (Vf, la tension de seuil de la LED, ≈ 2 V ; I = 10 mA) :

$$R = \frac{V_{alim} - V_f}{I} = \frac{3{,}3 - 2}{0{,}01} = 130\ \Omega$$

Valeur normalisée : **150 Ω** (série E12).

<div class="box">
  <p class="title is-5">Calculateur de résistance série pour LED</p>
  <div class="field">
    <label class="label">Tension d'alimentation V<sub>alim</sub> (V)</label>
    <input class="input" type="number" id="led-valim" value="3.3" step="0.1">
  </div>
  <div class="field">
    <label class="label">Tension de seuil de la LED V<sub>f</sub> (V)</label>
    <input class="input" type="number" id="led-vf" value="2" step="0.1">
  </div>
  <div class="field">
    <label class="label">Courant souhaité I (mA)</label>
    <input class="input" type="number" id="led-i" value="10" step="1">
  </div>
  <button class="button is-primary" onclick="calcLedResistor()">Calculer</button>
  <p class="mt-3 is-size-5" id="led-result"><strong>R &asymp; 130 &Omega;</strong> &nbsp; valeur E12 conseill&eacute;e : <strong>150 &Omega;</strong></p>
</div>

<script>
function calcLedResistor() {
  var valim = parseFloat(document.getElementById('led-valim').value);
  var vf    = parseFloat(document.getElementById('led-vf').value);
  var i     = parseFloat(document.getElementById('led-i').value) / 1000; // mA -> A
  var out   = document.getElementById('led-result');
  if (isNaN(valim) || isNaN(vf) || !(i > 0) || valim <= vf) {
    out.innerHTML = "Vérifie les valeurs : V<sub>alim</sub> doit être supérieure à V<sub>f</sub>, et I positif.";
    return;
  }
  var r = (valim - vf) / i;
  var e12 = [];
  [10,12,15,18,22,27,33,39,47,56,68,82].forEach(function(b){ e12.push(b, b*10, b*100, b*1000); });
  e12.sort(function(a,b){ return a - b; });
  var norm = e12.find(function(v){ return v >= r; }) || e12[e12.length - 1];
  out.innerHTML = "<strong>R &asymp; " + r.toFixed(0) + " &Omega;</strong> &nbsp; valeur E12 conseillée : <strong>" + norm + " &Omega;</strong>";
}
</script>

{% include message.html title="Calculateur en ligne" message="Pour une version en ligne (et d'autres calculs d'électronique), voir le [calculateur de résistance série pour LED de DigiKey](https://www.digikey.fr/fr/resources/conversion-calculators/conversion-calculator-led-series-resistor)." status="is-info" icon="fas fa-calculator" %}

### Push-pull vs open-drain : deux façons de piloter une sortie

Par défaut, `OUTPUT` configure la broche en **push-pull** : deux transistors internes permettent de tirer activement la broche à `HIGH` ou à `LOW`. C'est le mode utilisé jusqu'ici.

Il existe un second mode, **open-drain** : la broche ne peut **que** tirer vers `LOW` (un seul transistor, côté masse). Pour lire ou produire un `HIGH`, il faut une résistance de tirage (interne ou externe) qui « relâche » la broche vers `HIGH` quand personne ne la tire vers le bas.

```cpp
pinMode(PIN, OUTPUT_OPEN_DRAIN);  // la broche ne peut que tirer vers 0 V
digitalWrite(PIN, LOW);           // tire activement à 0 V
digitalWrite(PIN, HIGH);          // relâche la broche (haute impédance)
```

| | Push-pull (`OUTPUT`) | Open-drain (`OUTPUT_OPEN_DRAIN`) |
|---|---|---|
| Peut tirer vers HIGH | Oui, activement | Non, nécessite un pull-up |
| Peut tirer vers LOW | Oui, activement | Oui, activement |
| Usage typique | LED, moteur, sortie numérique classique | Bus partagé (I2C), interfaçage avec un niveau logique différent |

{% include message.html title="Pourquoi l'I2C utilise l'open-drain" message="Sur un bus I2C, plusieurs périphériques partagent les mêmes fils SDA/SCL. Si un seul poussait activement vers HIGH pendant qu'un autre tire vers LOW, ce serait un court-circuit. En open-drain, chacun ne peut que tirer vers LOW ou relâcher, jamais imposer un HIGH : d'où la résistance de pull-up partagée sur le bus (voir le concept [Les bus de communication](/workshops/microcontroleur/concepts/bus-communication/))." status="is-info" icon="fas fa-info-circle" %}

### Entrée : lire un bouton

Une broche en entrée mesure le niveau de tension présent sur la broche.

```cpp
int etat = digitalRead(BTN_PIN);  // retourne HIGH ou LOW
```

## Pull-up, pull-down & état flottant

### Le problème de l'état flottant

Une broche en entrée non connectée à rien est dans un **état flottant** : sa tension est indéterminée, elle peut lire `HIGH` ou `LOW` de façon aléatoire selon les interférences électromagnétiques.

```mermaid
flowchart TD
  A["pinMode(PIN, INPUT)\nsans pull-up ni pull-down"] --> B["Broche en haute impédance\n(quasiment aucun courant ne peut y circuler)"]
  B --> C{"Un signal externe\nimpose-t-il une tension ?"}
  C -->|"Non - rien de branché"| D["Tension flottante\ncapte le moindre bruit ambiant"]
  D --> E["digitalRead() imprévisible\nLOW, HIGH, ou oscille sans raison"]
  C -->|"Oui - via une résistance de rappel"| F["Tension définie et stable\nLOW ou HIGH garanti au repos"]
```

Une broche en [**haute impédance**](https://fr.wikipedia.org/wiki/Haute_imp%C3%A9dance) présente une résistance d'entrée **très élevée** (plusieurs mégaohms) : elle n'absorbe quasiment aucun courant, donc rien ne la ramène vers 0 V ou 3,3 V. La moindre interférence électromagnétique environnante (un câble voisin, le secteur 50 Hz, ta propre main qui s'approche) suffit alors à déplacer sa tension et à faire basculer sa lecture. D'où le terme « flottant » : rien ne fixe sa tension à une valeur précise.

### La solution : résistance de rappel

Une résistance de rappel (**pull**) force la broche à un niveau défini quand aucun signal n'est appliqué.

#### Pull-up : repos à HIGH

La résistance relie la broche au **+3,3 V**. Au repos, la broche lit `HIGH`. Quand le bouton est pressé (connexion à GND), elle passe à `LOW`.

```mermaid
graph LR
  V33["3,3 V"] -->|"R (10 kΩ)"| NODE(("Broche GPIO"))
  NODE -->|"Bouton"| GND["GND"]
```

#### Pull-down : repos à LOW

La résistance relie la broche au **GND**. Au repos, la broche lit `LOW`. Quand le bouton est pressé (connexion à +3,3 V), elle passe à `HIGH`.

```mermaid
graph LR
  GND["GND"] -->|"R (10 kΩ)"| NODE(("Broche GPIO"))
  NODE -->|"Bouton"| V33["3,3 V"]
```

### Pull-up interne de l'ESP32-S3

L'ESP32-S3 intègre des résistances de pull-up (et pull-down) **en interne**, activables par logiciel : pas besoin de résistance externe dans la plupart des cas.

```cpp
pinMode(BTN_PIN, INPUT_PULLUP);    // pull-up interne activé (~45 kΩ)
// ou
pinMode(BTN_PIN, INPUT_PULLDOWN);  // pull-down interne activé
```

Avec `INPUT_PULLUP` : le bouton doit connecter la broche à **GND** pour être détecté (logique inversée : `LOW` = pressé).

## Lire un bouton de façon fiable : l'anti-rebond

Quand tu presses un bouton mécanique, le contact ne s'établit pas net : les lamelles métalliques **rebondissent** pendant quelques millisecondes, générant une rafale de `HIGH`/`LOW` avant de se stabiliser. Un `digitalRead()` naïf voit alors *plusieurs* appuis là où tu n'en as fait qu'un.

La parade la plus simple est logicielle : après un changement d'état, on **ignore** les lectures pendant un court délai (20 à 50 ms), grâce à `millis()` (le nombre de millisecondes écoulées depuis le démarrage), le temps que le contact se stabilise.

```cpp
const unsigned long ANTIREBOND = 30;   // ms
int dernierEtat = HIGH;
unsigned long dernierChangement = 0;

void loop() {
  int etat = digitalRead(BTN_PIN);      // INPUT_PULLUP : LOW = pressé

  if (etat != dernierEtat) {
    dernierChangement = millis();       // le signal vient de bouger
    dernierEtat = etat;
  }

  if (millis() - dernierChangement > ANTIREBOND && etat == LOW) {
    // bouton enfoncé de façon stable depuis 30 ms
    // (vrai à chaque tour tant que le bouton reste enfoncé)
  }
}
```

{% include message.html title="Anti-rebond matériel" message="On peut aussi filtrer le rebond côté électronique (condensateur ~100 nF en parallèle du bouton, ou trigger de Schmitt). Sur un microcontrôleur, l'anti-rebond logiciel suffit néanmoins dans l'immense majorité des cas." status="is-info" icon="fas fa-info-circle" %}

## Réagir sans scruter : l'interruption

Scruter un bouton à chaque tour de `loop()` fonctionne, mais peut **rater** un appui si la boucle est occupée ailleurs. Une **interruption** exécute une petite fonction dès que la broche change, sans attendre (voir [Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/)).

```cpp
volatile bool appui = false;

void IRAM_ATTR surAppui() { appui = true; }   // ISR : la plus courte possible

void setup() {
  pinMode(BTN_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(BTN_PIN), surAppui, FALLING);
}
```

L'ISR (*Interrupt Service Routine*) se contente de lever un drapeau ; le vrai traitement (et l'anti-rebond) se fait ensuite tranquillement dans `loop()`.

## GPIO matrix : une broche n'est pas toujours un simple GPIO

Au-delà de `digitalRead()`/`digitalWrite()`, une broche peut être prise en charge par un périphérique : UART, SPI, I2C, PWM (LEDC)... Sur beaucoup de microcontrôleurs, chaque fonction est câblée en dur sur des broches précises (« fonction alternative » fixe).

L'ESP32-S3 est plus flexible : une **GPIO matrix** interne permet de router presque n'importe quel signal numérique de périphérique vers presque n'importe quelle broche, par logiciel.

```cpp
Serial1.begin(115200, SERIAL_8N1, D2, D3);  // UART1 routé sur D2 (RX) / D3 (TX) de la XIAO
// une autre paire de broches fonctionnerait tout aussi bien
```

{% include message.html title="L'ADC échappe à la règle" message="Contrairement aux périphériques numériques (UART, SPI, I2C, PWM), l'ADC n'est pas routable via la GPIO matrix : chaque canal ADC1/ADC2 est câblé en dur sur des broches fixes (voir le concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/))." status="is-info" icon="fas fa-info-circle" %}

## Toutes les broches ne se valent pas

Malgré la souplesse de la GPIO matrix, certaines broches ont un **rôle réservé** au démarrage ou au fonctionnement interne de l'ESP32-S3. Les détourner en GPIO ordinaire peut empêcher la carte de démarrer, de se flasher ou de communiquer en USB.

| Broches | Rôle réservé | Précaution |
|---|---|---|
| **GPIO 0, 3, 45, 46** | *Strapping* : lues au reset pour choisir le mode de boot | Éviter, ou ne rien y imposer comme niveau au démarrage |
| **GPIO 19, 20** | USB natif (D− / D+) | Éviter si tu utilises l'USB (flash, port série) |
| **GPIO 43, 44** | UART0 par défaut (TX / RX du moniteur série) | Libres si le port série n'est pas utilisé, sinon à éviter |
| **GPIO 26–32** | Reliées à la Flash SPI interne | **Ne jamais utiliser** |
| **GPIO 33–37** | Utilisées par la PSRAM sur les modules « octal » | Éviter sur les modules équipés de PSRAM |

{% include message.html title="En cas de doute, consulte le brochage de ta carte" message="Le nombre exact de broches libres dépend du module ESP32-S3 précis (avec ou sans PSRAM octal). Le *pinout* officiel de ta carte indique quelles broches sont réellement disponibles." status="is-warning" icon="fas fa-exclamation-triangle" %}

Sur la [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/) de l'atelier, ce tri est déjà fait par la carte : seules 11 broches sont sorties (D0 à D10) et aucune broche critique n'en fait partie. GPIO0 est relié au bouton BOOT, GPIO19/20 au connecteur USB-C, la Flash et la PSRAM restent internes. Deux cas particuliers :

- **D2 (GPIO3)** est une broche de *strapping*, mais elle ne choisit que la source du JTAG, et seulement si les eFuses de la puce ont été programmés pour : elle s'utilise comme une broche ordinaire.
- **D6/D7 (GPIO43/44)** portent l'UART0, mais le moniteur série de la XIAO passe par l'USB natif : ces deux broches restent utilisables. Au démarrage, la puce **émet** toutefois ses messages de boot sur D6 : un bouton qui la relie à GND doit passer par une résistance série (1 kΩ sur le PCB du projet) pour ne pas court-circuiter cette sortie.

## Courant maximum et protection des broches

| Limite | Valeur ESP32-S3 |
|---|---|
| Courant max par broche | 40 mA (recommandé : ≤ 12 mA) |
| Tension max en entrée | **3,3 V** |

{% include message.html title="Ne jamais connecter une charge inductive" message="Ne jamais connecter une charge inductive (moteur, relais : une charge qui stocke de l'énergie magnétique et renvoie des pics de tension à la coupure) directement sur un GPIO : toujours utiliser un transistor ou un **driver** (circuit de puissance intermédiaire)." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Connecter un composant 5 V : l'adaptation de niveau

Les GPIO de l'ESP32-S3 sont en logique 3,3 V : appliquer 5 V sur une entrée peut endommager la puce (voir l'avertissement plus haut). Pour dialoguer avec un composant 5 V, il faut **adapter le niveau** :

- **Entrée 5 V → 3,3 V** (lire un signal 5 V) : un simple **pont diviseur** de deux résistances (ex. 10 kΩ + 20 kΩ) ramène 5 V vers ~3,3 V.
- **Bus ou bidirectionnel (I2C, SPI…)** : utiliser un **convertisseur de niveau** (*level shifter*) dédié, qui traduit proprement dans les deux sens.
- **Sortie 3,3 V → 5 V** : beaucoup de composants 5 V reconnaissent déjà 3,3 V comme un `HIGH` valide ; sinon, un level shifter s'impose.

{% include message.html title="Le sens du signal compte" message="Le danger vient surtout des signaux 5 V qui *entrent* dans l'ESP32-S3. Une sortie 3,3 V vers une entrée 5 V est généralement sans risque pour la puce." status="is-info" icon="fas fa-info-circle" %}

## Quiz express

**1. Une entrée non connectée lit des valeurs aléatoires. Comment y remédier ?**

<details><summary>Voir la réponse</summary>Avec une résistance de rappel (pull-up ou pull-down), interne (`INPUT_PULLUP`) ou externe, qui fixe un niveau défini au repos.</details>

**2. Avec `INPUT_PULLUP`, quel niveau lit-on quand le bouton est pressé ?**

<details><summary>Voir la réponse</summary>`LOW` (logique inversée) : le bouton relie la broche à GND.</details>

**3. Pourquoi un `digitalRead()` compte-t-il parfois plusieurs appuis pour un seul ?**

<details><summary>Voir la réponse</summary>À cause du rebond mécanique du contact ; on le filtre par un anti-rebond logiciel (avec `millis()`).</details>

## Pour aller plus loin

- [Boutons, joystick et moniteur série](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/) : un anti-rebond qui ne signale chaque appui qu'une seule fois

## Résumé

- GPIO = broche configurable en entrée (`INPUT`) ou sortie (`OUTPUT`).
- Sortie : produit `0 V` (LOW) ou `3,3 V` (HIGH) ; ~40 mA au maximum absolu, 12 mA au plus en pratique.
- Sortie **push-pull** (défaut) tire activement vers HIGH et LOW ; **open-drain** ne tire que vers LOW (utile pour un bus partagé comme l'I2C).
- Entrée sans résistance de rappel → **état flottant** (lectures aléatoires).
- `INPUT_PULLUP` / `INPUT_PULLDOWN` activent la résistance interne de l'ESP32-S3.
- Avec pull-up : bouton branché entre GPIO et GND → `LOW` quand pressé.
- La **GPIO matrix** route les périphériques numériques (UART, SPI, I2C, PWM) vers presque n'importe quelle broche, sauf l'ADC, câblé en dur.
- Un bouton mécanique **rebondit** : filtrer avec un anti-rebond logiciel (`millis()`) pour ne pas compter plusieurs appuis.
- Certaines broches sont **réservées** (strapping, Flash SPI, USB) : vérifier le brochage de la carte avant de câbler.
- Une **interruption** (`attachInterrupt`) réagit à un changement de broche sans scruter ; l'ISR reste minimale.
- Pour connecter du 5 V : **pont diviseur** (entrée) ou **level shifter** (bus), jamais 5 V directement sur un GPIO.
