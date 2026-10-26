---
layout: slides
title: Découvrir le microcontrôleur
subtitle: "CM1 : de la puce au premier programme"
description: "Support du premier cours de l'atelier Microcontrôleurs (1 h 30) : ce qu'est un microcontrôleur, comment il est fait à l'intérieur, et la chaîne qui mène du code à la puce."
author: Alban Petit
kicker: MakerSpace Amiens · Microcontrôleurs
back_link: /workshops/microcontroleur/
---

## Au programme

1. Un ordinateur sur une puce
2. Sous le capot
3. Du code à la puce
4. Votre premier programme

<aside class="notes" markdown="1">
1 h 30 de cours, sans manipulation. Fil rouge de tout l'atelier : un Pong 2 joueurs sur ESP32-S3, puis un Snake multijoueur en projet.
Parties 1 et 2 : le vocabulaire et la puce. Parties 3 et 4 : la chaîne de développement, plus concrètes, à garder pour la seconde moitié quand l'attention baisse.
</aside>

---

## Ce que vous saurez faire

### À la fin de ce cours, vous saurez :

- dire ce qu'est un microcontrôleur, et ce qui le distingue d'un PC
- nommer les blocs d'une puce : CPU, Flash, RAM, périphériques, bus
- expliquer ce qu'est un **registre**, et à quoi sert une **interruption**
- suivre le trajet du code source jusqu'à l'exécution sur la puce
- dire pourquoi `delay()` pose problème dans une `loop()`

Fil rouge de l'atelier : un **Pong 2 joueurs**, puis un **Snake multijoueur**.
{: .caption}

[L'atelier Microcontrôleurs](/workshops/microcontroleur/){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Un ordinateur sur une puce

Percevoir, décider, agir

---

## Activité : comptez-les autour de vous

<p class="activity-meta"><span><i class="fas fa-users"></i>Toute la classe</span><span><i class="far fa-clock"></i>3 min</span><span><i class="fas fa-pen"></i>Sans PC</span></p>

### Combien d'ordinateurs y a-t-il à cet étage ?

- Une réponse par personne, à voix haute
- On note les chiffres au tableau, du plus petit au plus grand

<aside class="notes" markdown="1">
Les réponses tournent en général autour du nombre de PC portables : c'est le but, on compte ce qu'on appelle « ordinateur » dans la vie courante. Si quelqu'un a lu le titre de la partie et annonce un très grand nombre, lui demander de citer trois objets : il ouvre la slide suivante à votre place.
Dévoiler ensuite la slide suivante : on est deux ordres de grandeur en dessous.
</aside>

---

## Il y en a des centaines, à cet étage

- {: .fragment} Chaque **téléphone** en contient plusieurs : tactile, batterie, radio
- {: .fragment} Les **écouteurs sans fil**, les **montres**, les **badges** d'accès
- {: .fragment} Dans chaque salle : **vidéoprojecteur**, **détecteur de fumée**, **thermostat**
- {: .fragment} Dans le couloir : l'**imprimante**, le **distributeur**, les **lecteurs de badge**
- {: .fragment} Chez vous : le **micro-ondes**, la **machine à laver**, la **télécommande**
- {: .fragment} Et **50 à 150** dans une voiture récente : vitres, airbags, injection

Aucun n'a besoin d'un « vrai » ordinateur. Ils ont besoin d'une puce à quelques euros, qui démarre instantanément et fait sa tâche en boucle.
{: .fragment .caption}

[Qu'est-ce qu'un microcontrôleur ?](/workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/){: .doc-link}

---

## Toujours la même boucle

```mermaid!
flowchart LR
  A["Percevoir<br/>(capteurs)"] --> B["Décider<br/>(le programme)"]
  B --> C["Agir<br/>(actionneurs)"]
  C -.-> A
```

Un thermostat *perçoit* la température, *décide* qu'il fait trop froid, *agit* en allumant le chauffage. Puis il recommence, indéfiniment.

Cette boucle, vous la retrouverez telle quelle dans votre Pong : lire le joystick, calculer la position de la balle, redessiner l'écran.
{: .fragment .caption}

[Qu'est-ce qu'un microcontrôleur ?](/workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/){: .doc-link} [Les capteurs](/docs/concepts/capteurs/){: .doc-link}

---

## Le « décider », c'est vous.

<pre><code class="language-cpp" data-trim data-line-numbers="2|3|4">
void loop() {
  int temperature = lireCapteur();   // percevoir
  if (temperature &lt; 19) {           // décider
    allumerChauffage();              // agir
  }
}
</code></pre>

Le microcontrôleur ne sait rien faire tout seul. Sans programme, c'est une puce inerte : le seuil de 19 °C et ce qu'on en fait, personne ne les écrira pour vous.
{: .fragment .caption}

---

## Le vocabulaire de l'atelier

| Terme | Ce que c'est | Exemples du projet |
|---|---|---|
| **Capteur** | Traduit une grandeur physique en signal électrique | bouton, joystick, potentiomètre |
| **Actionneur** | Transforme un signal électrique en action | LED, écran, moteur, buzzer |
| **Broche** (*pin*) | Une patte de la puce, reliée au monde extérieur | D5, D0 (GPIO6, GPIO1) |
| **Programme** | La suite d'instructions que vous écrivez | `main.cpp` |
{: .table-dense}

Un bouton est un capteur, une LED est un actionneur.
{: .caption}

[Les capteurs](/docs/concepts/capteurs/){: .doc-link}

---

## Le monde physique n'attend pas

Un microcontrôleur est jugé sur sa **ponctualité**, pas sur sa puissance.

- {: .fragment} Un **airbag** doit se déclencher 20 ms après le choc, jamais 100
- {: .fragment} L'écran du **Pong** se redessine toutes les 16 ms, sinon ça saccade
- {: .fragment} Un **servomoteur** attend une impulsion toutes les 20 ms, à 10 µs près
- {: .fragment .highlight-red} Tenir le délai **à chaque tour** compte plus qu'aller vite une fois

**Déterministe** : les mêmes entrées produisent les mêmes actions, dans le même temps, à chaque tour. Sur un PC un retard de 200 ms passe inaperçu, ici il casse le système. Le **temps réel**, ce n'est pas « vite », c'est « à l'heure ».
{: .fragment .caption}

<aside class="notes" markdown="1">
La slide qui prépare toute la suite : c'est parce que la puce est branchée sur le monde physique qu'elle doit être prévisible, et c'est ce déterminisme qui explique qu'on n'y fasse pas tourner un système d'exploitation de PC (partie 3) et la chasse aux `delay()`.
Contre-exemple utile : sur un PC, un antivirus qui se réveille vole 300 ms au programme. Personne ne s'en plaint. Un servomoteur, lui, tremble.
</aside>

[Qu'est-ce qu'un microcontrôleur ?](/workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/){: .doc-link}

---

## Pourquoi pas un « vrai » ordinateur ?

| | Ordinateur classique | Microcontrôleur |
|---|---|---|
| **Tâches** | Des milliers, en même temps | Une seule, en boucle |
| **Prix** | Plusieurs centaines d'€ | Quelques euros, parfois centimes |
| **Énergie** | Se branche au secteur | Des mois sur une pile |
| **Démarrage** | Plusieurs secondes | Instantané |
| **Système** | Un OS complet | Aucun, en général |
{: .table-dense}

C'est cette sobriété qui le rend si présent : on peut en mettre partout, pour presque rien, sans y penser.
{: .fragment .caption}

[Qu'est-ce qu'un microcontrôleur ?](/workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/){: .doc-link}

---

## Et le Raspberry Pi, alors ?

<div class="columns" markdown="1">
<div markdown="1">

### Microcontrôleur

Une seule tâche, du temps réel, très peu d'énergie, démarrage immédiat.

**ESP32-S3, Arduino, STM32**

</div>
<div markdown="1">

### Nano-ordinateur

Un vrai système d'exploitation (Linux), un écran, le réseau complet, beaucoup de mémoire.

**Raspberry Pi**

</div>
</div>

La question à se poser n'est pas « lequel est le plus puissant » mais « de quoi ai-je réellement besoin ». Un Raspberry Pi qui met 20 secondes à démarrer ne peut pas déclencher un airbag.
{: .fragment .caption}

[Qu'est-ce qu'un microcontrôleur ?](/workshops/microcontroleur/concepts/qu-est-ce-qu-un-microcontroleur/){: .doc-link}

---

## Notre puce : l'ESP32-S3

| Caractéristique | Valeur |
|---|---|
| CPU | Xtensa LX7 **dual-core** 32 bits, 240 MHz |
| RAM | 512 Ko SRAM + 8 Mo PSRAM |
| Flash | 8 Mo, externe via SPI |
| GPIO | 45 sur la puce, 11 sorties sur la XIAO |
| Tension logique | **3,3 V** |
| Connectivité | Wi-Fi 802.11 b/g/n + Bluetooth 5 |
| Prix | ~8 € la carte XIAO ESP32S3 |
{: .table-dense}

Montée sur une carte XIAO de 21 × 18 mm. Le sans-fil servira au projet Snake. **↓** pour le brochage.
{: .caption}

[XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/){: .doc-link}

<!-- .down -->

## La fiche de la carte

<iframe class="page-preview" data-src="/docs/references/hardware/xiao-esp32s3/#brochage" title="Fiche de référence XIAO ESP32S3"></iframe>

---

{% include message.html title="3,3 V, jamais 5 V" message="Relier une broche GPIO directement à du 5 V (un Arduino Uno, un capteur alimenté en 5 V) peut détruire la puce de façon irréversible. C'est l'erreur la plus fréquente et la plus coûteuse de l'atelier : avant de brancher un module, cherchez sa tension d'alimentation." status="is-danger" icon="fas fa-exclamation-triangle" %}

[GPIO et monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Sous le capot

CPU, mémoires, périphériques, bus

---

## Le schéma-bloc, votre carte mentale

![Schéma-bloc fonctionnel de l'ESP32-S3](/workshops/microcontroleur/concepts/architecture-microcontroleur/functional-block-diagram.png){: .img-md}

Chaque concept de l'atelier détaille l'une de ces briques.
{: .caption}

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link}

---

## Cinq briques, une seule puce

| Bloc | Rôle | Accès logiciel |
|---|---|---|
| **CPU** | Exécute les instructions une par une | direct |
| **Flash** | Stocke le programme (persistant) | lecture à l'exécution |
| **RAM** | Variables, pile d'appels (volatile) | lecture/écriture rapide |
| **Périphériques** | GPIO, ADC, UART, SPI, PWM | via **registres** |
| **Bus** | Relie tout le monde | transparent sous Arduino |
{: .table-dense}

Tout est sur le même silicium : un **système sur puce**. Il suffit de l'alimenter.
{: .fragment .caption}

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link}

---

<!-- .slide: data-auto-animate -->

## Le CPU ne sait faire qu'une chose

<div class="demo-flow">
  <div class="demo-box is-big" data-id="fetch">Fetch</div>
</div>

**Fetch** : aller chercher en Flash l'instruction suivante, à l'adresse indiquée par le compteur de programme.

---

<!-- .slide: data-auto-animate -->

## Le CPU ne sait faire qu'une chose

<div class="demo-flow">
  <div class="demo-box" data-id="fetch">Fetch</div>
  <span class="demo-arrow" data-id="a1">→</span>
  <div class="demo-box is-big" data-id="decode">Decode</div>
</div>

**Decode** : comprendre ce que l'instruction demande, et sur quelles données.

---

<!-- .slide: data-auto-animate -->

## Le CPU ne sait faire qu'une chose

<div class="demo-flow">
  <div class="demo-box" data-id="fetch">Fetch</div>
  <span class="demo-arrow" data-id="a1">→</span>
  <div class="demo-box" data-id="decode">Decode</div>
  <span class="demo-arrow" data-id="a2">→</span>
  <div class="demo-box is-accent is-big" data-id="execute">Execute</div>
</div>

**Execute** : calculer dans l'**ALU**, ou transférer une donnée. Puis recommencer, **240 millions de fois par seconde**.

Au fond, un CPU ne fait que deux choses : calculer, et déplacer des octets d'un endroit à un autre.
{: .fragment .caption}

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link}

---

## 240 MHz, ça veut dire quoi ?

| Opération | Ordre de grandeur |
|---|---|
| Une multiplication entière | un ou deux cycles |
| Un `digitalWrite()` | quelques dizaines de cycles |
| Redessiner un écran 240×240 en SPI | quelques millions de cycles |
| Établir une connexion Wi-Fi | plusieurs centaines de millions |
{: .table-dense}

À 60 images par seconde, chaque image dispose de **4 millions de cycles**.
{: .fragment .highlight-red}

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link}

---

## Deux cœurs, et le droit de dormir

- L'ESP32-S3 a **deux cœurs** Xtensa LX7 : sous Arduino, `setup()`/`loop()` tournent sur le cœur 1, le Wi-Fi occupe le cœur 0 en arrière-plan, sous la conduite d'un petit noyau (FreeRTOS)
- Couper l'horloge d'un périphérique inutilisé économise de l'énergie
- Les **modes veille** (*light sleep*, *deep sleep*) éteignent tout ou partie de la puce
- Le **RTC** continue de tourner en veille profonde pour réveiller la carte à l'heure dite

C'est ce qui permet à un capteur sur pile de tenir des mois : il dort 99,9 % du temps.
{: .fragment .caption}

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link}

---

## Deux mémoires, deux usages

| | Flash | RAM (SRAM) |
|---|---|---|
| **Contenu** | Programme compilé, constantes | Variables, pile, heap |
| **Persistance** | Survit au reset | Perdue à l'extinction |
| **Vitesse** | Plus lente | Très rapide |
| **Taille** | 8 Mo | 512 Ko (+ 8 Mo PSRAM) |
{: .table-dense}

Deux espaces d'adressage séparés : une architecture **Harvard modifiée**.
{: .fragment .caption}

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link}

---

## Le glossaire des périphériques

| Sigle | Nom complet | Rôle |
|---|---|---|
| **GPIO** | General Purpose Input/Output | Entrée ou sortie numérique |
| **ADC** | Analog to Digital Converter | Tension vers nombre |
| **UART / I2C / SPI** | | Bus série |
| **Timer** | Compteur matériel | Événements périodiques, PWM |
| **DMA** | Direct Memory Access | Transfert sans le CPU |
| **RTC** | Real-Time Clock | Horloge, même en veille |
| **Watchdog** | Chien de garde | Redémarre si blocage |
{: .table-dense}

Chaque sigle aura sa slide au CM2 ou au CM3.
{: .caption}

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link}

---

{% include message.html title="Pas de DAC sur l'ESP32-S3" message="Contrairement à l'ESP32 d'origine, l'ESP32-S3 n'a pas de convertisseur numérique-analogique matériel. Pour produire une tension variable, il faudra passer par du PWM, qu'on verra au CM2." status="is-info" icon="fas fa-info-circle" %}

[ADC et PWM](/workshops/microcontroleur/concepts/adc-pwm/){: .doc-link}

---

## Le bus : une autoroute partagée

```mermaid!
flowchart TB
  CPU["CPU (pilote le bus)"]
  BUS["Bus partagé : adresses · données · contrôle"]
  RAM["RAM"]
  PA["Périph. A<br/>(émetteur actif)"]
  PB["Périph. B<br/>(haute impédance)"]
  CPU --- BUS
  BUS --- RAM
  BUS --- PA
  BUS --- PB
```

Trois faisceaux : l'**adresse** dit à qui on parle, les **données** transitent, le **contrôle** précise « je lis » ou « j'écris ».

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link}

---

## Un seul composant parle à la fois

Si deux périphériques poussaient une valeur en même temps sur le bus de données, l'un forçant un 0 et l'autre un 1, ce serait un **court-circuit**.

D'où les sorties **trois états** : en plus de 0 et 1, un état de **haute impédance** qui déconnecte électriquement le composant de la ligne.

À tout instant, un seul émetteur est actif ; tous les autres sont à l'écoute. C'est l'adresse qui désigne celui qui a le droit de répondre.
{: .fragment .highlight-red}

Retenez le mot **haute impédance** : il reviendra au CM2 avec les entrées flottantes, et au CM3 avec l'I2C.
{: .fragment .caption}

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link}

---

## Les registres : l'interface matériel / logiciel

Chaque périphérique se pilote par des **registres** : de simples cases mémoire à une adresse fixe.

- Écrire dans un registre allume une LED
- Lire un registre donne l'état d'un bouton
- {: .fragment .highlight-red} `digitalWrite(LED, HIGH)` écrit dans le bon registre

Ranger une variable et allumer une LED : la même opération, poser une valeur à une adresse.
{: .fragment .caption}

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link}

---

## Réagir sans attendre : l'interruption

Votre programme tourne dans sa boucle. Un joueur appuie sur un bouton pendant 20 ms. Comment être certain de ne pas le manquer ?

- {: .fragment} Le matériel **arrête le CPU** en pleine boucle
- {: .fragment} Il lui fait exécuter une petite fonction dédiée, très courte
- {: .fragment} Puis la boucle reprend exactement là où elle s'était arrêtée

Les registres, c'est le logiciel qui parle au matériel. L'interruption, c'est le matériel qui parle au logiciel. Le code arrive en partie 3.
{: .fragment .caption}

<aside class="notes" markdown="1">
Rester au niveau du mécanisme : aucune ligne de code ici, `setup()` et `loop()` ne sont présentés qu'en partie 3, où l'interruption revient en code juste après la slide sur `millis()`.
Si la question vient tout de suite : tant que cette fonction s'exécute, tout le reste est suspendu, y compris les autres interruptions. Elle lève un drapeau, et la `loop()` fait le travail.
</aside>

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link} [GPIO et monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Du code à la puce

Compiler, flasher, exécuter

---

## Le voyage complet

```mermaid!
flowchart LR
  A["Code source<br/>(.cpp)"] --> B["Compilateur<br/>(gcc-xtensa)"]
  B --> C["Binaire<br/>(.bin)"]
  C --> D["Flashage<br/>(USB / UART)"]
  D --> E["Exécution<br/>ESP32-S3"]
```

Un clic sur **Upload** déclenche les quatre étapes, toujours dans cet ordre. Quand quelque chose échoue, la première question est : **à quelle étape ?**

[Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/){: .doc-link}

---

## La toolchain Arduino-ESP32

| Élément | Rôle |
|---|---|
| **Compilateur** (gcc pour Xtensa) | Traduit le C++ en instructions machine |
| **Core Arduino** | Fournit `pinMode()`, `digitalWrite()`, `analogRead()` |
| **Uploader** (esptool) | Transfère le binaire vers la Flash, par USB |
{: .table-dense}

L'IDE ne fait qu'orchestrer ces trois outils. Arduino IDE ou PlatformIO, la chaîne reste la même : **compiler, flasher, exécuter**.
{: .fragment .caption}

[PlatformIO](/docs/references/software/platformIO/){: .doc-link} [Arduino IDE](/docs/references/software/arduino-ide/){: .doc-link}

---

## « Compiler » recouvre trois étapes

1. **Préprocesseur** : traite les `#include` et les `#define`, colle le contenu des bibliothèques
2. **Compilation** : chaque fichier C++ devient du code objet, séparément
3. **Édition de liens** : tous les objets sont assemblés en un binaire, en résolvant les références

Savoir les distinguer, c'est savoir lire une erreur. C'est la compétence la plus rentable du semestre.
{: .caption}

[Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/){: .doc-link}

---

## Lire une erreur

| Message | Étape | Cause probable |
|---|---|---|
| `expected ';' before ...` | compilation | une faute de syntaxe, souvent une ligne **avant** |
| `'x' was not declared` | compilation | variable mal orthographiée, ou `#include` manquant |
| `undefined reference to ...` | édition de liens | bibliothèque absente de `lib_deps` |
| `A fatal error occurred: Failed to connect` | flashage | mauvais port, câble sans data, bouton **BOOT** |
{: .table-dense}

Corrigez la **première** erreur, pas les 40 suivantes.
{: .fragment .highlight-red}

[Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/){: .doc-link}

---

## Au reset : la séquence de démarrage

1. **ROM bootloader** : gravé en usine, il lit les broches de *strapping* (dont GPIO0) pour choisir démarrage normal ou mode téléversement
2. **Bootloader de second niveau** : chargé depuis la Flash, il initialise horloge et mémoire, choisit la partition à lancer
3. **Votre application** : `setup()` une fois, puis `loop()` sans fin

C'est exactement ce que force le bouton **BOOT** maintenu au reset : il bloque l'étape 1 en mode téléversement.
{: .fragment .caption}

[Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/){: .doc-link}

---

{% include message.html title="Le flashage échoue systématiquement ?" message="Dans l'ordre : vérifiez que le câble USB-C transporte des données (beaucoup de câbles ne font que charger), que le bon port est sélectionné, puis forcez le mode téléversement : débranchez la XIAO, maintenez **BOOT** en rebranchant le câble, relâchez et relancez l'upload. Appuyez ensuite sur **RESET** pour lancer le programme." status="is-warning" icon="fas fa-exclamation-triangle" %}

[Vérification de la toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/){: .doc-link}

---

## Tout un programme en deux fonctions

```cpp
void setup() {                      // une seule fois, au démarrage
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(115200);
}

void loop() {                       // en boucle, jusqu'à la coupure
  digitalWrite(LED_PIN, HIGH);
  delay(500);
  digitalWrite(LED_PIN, LOW);
  delay(500);
}
```

Pas de `main()` : le core Arduino l'écrit, et appelle `setup()` puis `loop()`. Sous PlatformIO, `main.cpp` commence par `#include <Arduino.h>` : sans elle, aucune de ces fonctions n'existe.
{: .caption}

[Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/){: .doc-link}

---

## Pas de système d'exploitation de PC

Sur un ordinateur, votre programme est un processus parmi des centaines. Ici, c'est **le seul** programme de la puce :

- {: .fragment} un petit noyau (FreeRTOS) fait tourner Wi-Fi et USB à côté, mais tout votre code vit dans **une seule tâche** : `loop()`
- {: .fragment} un `delay()` met cette tâche en pause : **rien** de votre programme n'avance, boutons compris
- {: .fragment} pas d'arrêt propre : couper le courant coupe le programme net

En contrepartie, votre code est seul maître de son temps : son comportement est **prévisible**.
{: .fragment .caption}

[Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/){: .doc-link}

---

## Activité : trouvez le bug

<p class="activity-meta"><span><i class="fas fa-user-friends"></i>En binôme</span><span><i class="far fa-clock"></i>3 min</span><span><i class="fas fa-pen"></i>Sans PC</span></p>

```cpp
void loop() {
  digitalWrite(LED, HIGH);
  delay(500);
  digitalWrite(LED, LOW);
  delay(500);

  if (digitalRead(BOUTON) == LOW) {
    tirer();
  }
}
```

### Le joueur appuie sur le bouton. Que se passe-t-il ?

<aside class="notes" markdown="1">
Réponse attendue : le bouton n'est lu qu'une fois par seconde, et seulement à l'instant précis où le programme atteint la ligne. Un appui de 200 ms a une chance sur cinq d'être vu. Enchaîner sur la slide suivante.
</aside>

---

## Correction : le bouton n'est presque jamais lu

Le programme passe **1 seconde sur 1** dans les `delay()`. Le `digitalRead()` n'est atteint qu'une fois par tour.

- {: .fragment} Un appui court de 200 ms : vu une fois sur cinq
- {: .fragment} Ajoutez un écran à rafraîchir : le jeu devient injouable
- {: .fragment .highlight-red} La solution n'est pas de raccourcir le `delay()`, c'est de ne **jamais** bloquer

[Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/){: .doc-link}

---

## Ne jamais bloquer : regarder l'heure

<pre><code class="language-cpp" data-trim data-line-numbers="1-3|6-10|7">
unsigned long dernierClignotement = 0;
const unsigned long INTERVALLE = 500;   // ms
int etatLed = LOW;

void loop() {
  if (millis() - dernierClignotement >= INTERVALLE) {
    dernierClignotement = millis();
    etatLed = !etatLed;
    digitalWrite(LED_PIN, etatLed);
  }
}
</code></pre>

On compare l'heure à une date mémorisée : rien n'est jamais figé.

[Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/){: .doc-link}

---

{% include message.html title="delay() reste utile" message="Pour une pause courte et unique (initialiser un composant, attendre au démarrage), `delay()` est parfaitement acceptable. C'est dans la `loop()`, quand plusieurs tâches doivent avancer en parallèle, qu'il faut l'éviter." status="is-info" icon="fas fa-info-circle" %}

[Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/){: .doc-link}

---

## Ou se faire prévenir : l'interruption

<pre><code class="language-cpp" data-trim data-line-numbers="1|3-5|9">
volatile bool appuiDetecte = false;

void IRAM_ATTR surAppui() {
  appuiDetecte = true;    // aussi court que possible
}

void setup() {
  pinMode(BTN_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(BTN_PIN), surAppui, FALLING);
}
</code></pre>

Le CPU suspend `loop()`, exécute la fonction, puis reprend son cours.

`IRAM_ATTR` la place en RAM interne : sans ce mot-clé, la puce finit par planter.
{: .caption}

<aside class="notes" markdown="1">
Le mécanisme a été vu en partie 2 : voici sa syntaxe, maintenant que `setup()` et `loop()` sont connus.
Insister : tant que cette fonction s'exécute, tout le reste est suspendu, y compris les autres interruptions. Jamais de `Serial.println()`, jamais de `delay()`, jamais d'appel à une bibliothèque dedans. Elle lève un drapeau, la `loop()` fait le travail. Le CM2 y revient sur les rebonds du bouton, avec le rôle de `volatile`.
</aside>

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link} [GPIO et monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Votre premier programme

Blink, ligne par ligne

---

## Quatre lignes qui résument le cours

<pre><code class="language-cpp" data-trim data-line-numbers="1-3|6|7|8-9">
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);     // configure la broche : écriture registre
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // 3,3 V sur la broche
  delay(500);                       // met loop() en pause
  digitalWrite(LED_BUILTIN, LOW);   // 0 V
  delay(500);
}
</code></pre>

Architecture, registres, GPIO et `loop()`, réunis en quatre lignes. Sur la XIAO, la LED orange est en logique inversée : `LOW` l'allume, `HIGH` l'éteint.
{: .caption}

[Vérification de la toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/){: .doc-link}

---

{% include message.html title="La LED de la XIAO est inversée" message="La LED orange de la XIAO ESP32S3 (`LED_BUILTIN`, GPIO21) est câblée vers le 3,3 V : elle s'allume quand la broche est à `LOW` et s'éteint à `HIGH`. Le Blink clignote quand même, simplement en opposition de phase. La LED rouge voisine indique la charge de la batterie et ne se pilote pas." status="is-info" icon="fas fa-lightbulb" %}

[Vérification de la toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/){: .doc-link} [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/){: .doc-link}

---

## Le montage le plus simple

![LED rouge et résistance série sur breadboard, reliées à une carte ESP32-S3](/workshops/microcontroleur/tutorials/toolchain-blink/esp32-s3-blink.png){: .img-md}

La base du montage du Pong (photo prise avec une autre carte ESP32-S3 : sur la XIAO, la LED se branche sur D3). Boutons, joystick et écran viendront s'y ajouter.
{: .caption}

[Vérification de la toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/){: .doc-link}

---

## Le fichier `platformio.ini`

```ini
[env:seeed_xiao_esp32s3]
platform = espressif32        ; la famille de puces
board = seeed_xiao_esp32s3    ; la carte exacte
framework = arduino           ; le core utilisé
monitor_speed = 115200        ; la vitesse du moniteur série
lib_deps =                    ; les bibliothèques, téléchargées seules
    bodmer/TFT_eSPI@^2.5.0
```

Tout le projet est décrit ici. C'est ce fichier, versionné dans votre repo, qui permet à quelqu'un d'autre de recompiler votre code à l'identique.
{: .caption}

[PlatformIO](/docs/references/software/platformIO/){: .doc-link} [Installer PlatformIO](/docs/tutorials/software/vscode-platformio/installation-platformio/){: .doc-link}

---

## Les raccourcis PlatformIO

| Action | Raccourci | Où |
|---|---|---|
| Compiler (*Build*) | <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>B</kbd> | icône ✓, barre bleue |
| Téléverser (*Upload*) | <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>U</kbd> | icône →, barre bleue |
| Moniteur série | <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>S</kbd> | icône prise, barre bleue |
{: .table-dense}

Compiler avant de téléverser fait gagner du temps : les erreurs de syntaxe sortent sans attendre le flashage.
{: .caption}

[Installer VSCode](/docs/tutorials/software/vscode-platformio/installation-vscode/){: .doc-link} [Installer PlatformIO](/docs/tutorials/software/vscode-platformio/installation-platformio/){: .doc-link}

---

## Déboguer : le moniteur série

```cpp
void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.printf("x=%d y=%d btn=%d\n", x, y, btn);
}
```

Tant qu'il n'y a pas d'écran, c'est votre seul retour visuel. Afficher une variable au bon endroit résout la moitié des bugs.

[Le port série sous VSCode](/docs/tutorials/electronics/vscode-port-serie/){: .doc-link}

---

{% include message.html title="Du charabia à l'écran ?" message="C'est presque toujours une vitesse qui ne correspond pas. Vérifiez que le moniteur série est réglé sur la même valeur que celle passée à `Serial.begin()`, en général 115200." status="is-warning" icon="fas fa-exclamation-triangle" %}

[Le port série sous VSCode](/docs/tutorials/electronics/vscode-port-serie/){: .doc-link}

---

## À retenir

- {: .fragment} Un µC = CPU + Flash + RAM + périphériques, sur **une seule puce**
- {: .fragment} Percevoir, décider, agir : le « décider », c'est votre programme
- {: .fragment} Flash = le programme (persistant), RAM = les données (volatile)
- {: .fragment} Les périphériques se pilotent par des **registres**
- {: .fragment} Code → compilation → édition de liens → flashage → exécution
- {: .fragment} Une seule tâche, `loop()` : `delay()` la fige, `millis()` ne bloque rien
- {: .fragment .highlight-red} Tension logique : **3,3 V**

[Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/){: .doc-link} [Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/){: .doc-link}

---

## À faire de votre côté

<p class="activity-meta"><span><i class="fas fa-laptop"></i>Sur votre machine</span><span><i class="far fa-clock"></i>30 min</span></p>

1. Installer **VSCode**, puis l'extension **PlatformIO**
2. Laisser PlatformIO télécharger la plateforme `espressif32` : c'est long, ne le faites pas au dernier moment
3. Parcourir le tutoriel de vérification de la toolchain pour savoir ce qui vous attend

Une chaîne de développement qui fonctionne avant de manipuler, c'est une séance entière de gagnée.
{: .caption}

[Installer VSCode](/docs/tutorials/software/vscode-platformio/installation-vscode/){: .doc-link} [Installer PlatformIO](/docs/tutorials/software/vscode-platformio/installation-platformio/){: .doc-link} [Vérification de la toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/){: .doc-link}
