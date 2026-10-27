---
layout: documentation
hide_hero: false
hero_image: teleplot-interface.png
hero_height: is-small
hero_darken: true
image: teleplot-interface.png
component_toc: true
doc_header: true
type: tutorial

title: "VSCode et PlatformIO : port série"
subtitle: Lire et tracer les données du port série avec PlatformIO et TelePlot
description: Utiliser le moniteur série de PlatformIO puis l'extension TelePlot pour visualiser en temps réel des courbes de données envoyées via le port série.
author: Alban Petit

time: 1
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Installation de VSCode et PlatformIO
    link: /docs/tutorials/software/vscode-platformio/installation-vscode/
  - label: Notions de base en C++ (framework Arduino)
    link: ""

softwares:
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/
  - label: TelePlot (extension VSCode)
    link: "https://github.com/nesnes/teleplot-vscode"

hardwares:
  - label: Carte XIAO ESP32S3 (ou toute carte compatible Arduino)
    link: /docs/references/hardware/xiao-esp32s3/

todo: 90
---


## Introduction

### Présentation

La majorité des cartes de développement pour microcontrôleur actuelles sont capables de communiquer en série via l'USB (c'est le cas de l'Arduino Uno et de la XIAO ESP32S3). Il est donc possible de recevoir et d'envoyer des instructions via ce port et de les afficher sur un terminal de l'ordinateur hôte.

Pour ce faire, nous allons établir une communication série entre le µC et le PC.

La liaison série permet une communication point-à-point grâce à deux voies :

- **TX (transmission)** : la voie qui transmet le message à son interlocuteur ;
- **RX (réception)** : la voie qui reçoit les messages de l'interlocuteur.

Les voies sont associées à des broches précises du µC (sur une Uno : RX = pin 0 et TX = pin 1) : il ne faut pas oublier de croiser les fils de communication, comme dans cet exemple :

![schema](schema-connexion-tx-rx.png)

{% include message.html title="Sur la XIAO ESP32S3" message="La XIAO n'a pas de puce USB-série : `Serial` passe directement par l'**USB natif** de l'ESP32-S3, et il n'y a aucun fil TX/RX à croiser. Conséquence : le port disparaît un instant à chaque reset ou upload, et les messages envoyés dans les toutes premières millisecondes de `setup()` peuvent être perdus. Voir la fiche [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/)." status="is-info" icon="fas fa-info-circle" %}

Afin de communiquer, les deux périphériques doivent être synchronisés sur la même vitesse de transmission appelée [**bauds**](https://fr.wikipedia.org/wiki/Baud_(mesure)).

Si vous souhaitez en savoir plus sur la liaison série :
[La liaison série (Zeste de Savoir)](https://zestedesavoir.com/tutoriels/686/arduino-premiers-pas-en-informatique-embarquee/744_la-communication-avec-arduino/3426_generalites-sur-la-voie-serie/)

### Premier exemple

Dans notre exemple, nous allons envoyer une trame (un sinus) et nous allons l'afficher sur le moniteur série.

Le code utilisé sera le suivant :

``` c++
#include <Arduino.h>
float i=0;

void setup() 
{
  Serial.begin(115200);
}

void loop() 
{
  i+=0.1;
  Serial.print("sin:");
  Serial.println(sin(i));
  delay(10);
}

```

- `Serial.begin(115200)`   : initialise une communication série à 115200 bauds
- `Serial.print("sin:")`   : envoie sur le port série la chaîne de caractères `"sin:"`
- `Serial.println(sin(i))`  : envoie sur le port série le résultat de l'opération `sin(i)` avec un retour à la ligne à la fin

En savoir plus sur l'utilisation du port série dans le framework Arduino : [référence Arduino : Serial](https://www.arduino.cc/reference/en/language/functions/communication/serial/)

Pour que le moniteur série puisse lire le port série, il faut donner à PlatformIO la vitesse de la communication en ajoutant la ligne `monitor_speed = 115200` dans le fichier de configuration **platformio.ini**.

![speed](platformio-ini-monitor-speed.png)

Vous pouvez ensuite ouvrir le **Serial Monitor** dans la barre de menu en bas à gauche :

![](platformio-bouton-moniteur-serie.png)

Le moniteur série s'ouvre et vous affiche l'ensemble des données transmises entre votre carte et votre ordinateur.

![](platformio-moniteur-serie-ouvert.png)

{% include message.html
message="**Problème :** les données sont transmises toutes les 10 ms. Elles sont donc difficiles à suivre et à interpréter dans le terminal série."
status="is-warning" %}

Nous allons donc voir par la suite comment améliorer la lecture du port série dans le cas d'un grand nombre de données et d'une fréquence d'envoi importante.

## TelePlot

[![](teleplot-logo.png)](https://github.com/nesnes/teleplot-vscode)

TelePlot est un outil d'affichage de courbes télémétriques développé par [Alexandre Bremer](https://github.com/nesnes). À l'origine, l'application affichait des données reçues en paquets UDP ; elle a été adaptée en extension VSCode pour afficher des données provenant d'un port série.

{% include message.html
message="L'extension est encore en développement. Merci de reporter les bugs directement [sur le repo GitHub](https://github.com/nesnes/teleplot-vscode) lié au projet."
status="is-info" %}

### Installation

L'extension s'installe simplement via le gestionnaire d'extensions de VSCode.

![](teleplot-installation-vscode.png)

Une fois l'installation réalisée, l'extension est accessible via le bouton du menu inférieur gauche ![](teleplot-icone-menu.png).

### Possibilités

L'extension s'intègre directement à l'interface de VSCode lors de son ouverture et s'utilise en tant qu'onglet. L'interface permet :

- D'afficher plusieurs courbes séparément
- D'afficher un moniteur série textuel contenant les données qui ne sont pas liées à des graphiques
- D'afficher des statistiques sur les graphes
- De choisir l'échelle d'affichage en X
- De zoomer sur une courbe
- D'exporter les données (au format JSON pour le moment)

![](teleplot-interface.png)

Enfin, toutes les données sont horodatées, et un curseur affiche précisément les valeurs reçues à l'instant pointé.

![](teleplot-curseur-valeurs.gif)

### Utilisation

Afin d'afficher des courbes dans TelePlot, il est nécessaire, comme pour l'Arduino IDE, de respecter un certain nombre de spécificités.

#### a. Moniteur textuel seul

Pour afficher une donnée dans le moniteur textuel, il suffit juste d'envoyer la donnée sur le port série comme sous Arduino.

``` c++
void loop() 
{
  i+=0.1;
  Serial.print("loop - i=");
  Serial.println(i);
  delay(10);
}
```

{% include step-tuto.html
content="Dans ce cas, seul l'affichage textuel sera actif et les trames s'afficheront dans ce terminal."
image="teleplot-moniteur-textuel.png" %}

#### b. Courbes seules

Pour afficher une courbe dans TelePlot, nous allons utiliser le caractère `>` juste avant le label de la courbe afin d'indiquer à l'outil que la prochaine valeur envoyée sera liée à un graphe du label correspondant. On terminera l'envoi de données par un retour chariot à l'aide de la fonction `println()` par exemple.

``` c++
void loop() 
{
  i+=0.1;
 
  Serial.print("loop - i=");
  Serial.println(i);  

  Serial.print(">sin:");
  Serial.println(sin(i));

  Serial.print(">cos:");
  Serial.println(cos(i));
    
  delay(10);
}
```

{% include step-tuto.html
content="Ici, les deux courbes `sin` et `cos` sont affichées et le terminal textuel est masqué."
image="teleplot-courbes-sin-cos.png" %}

#### c. Courbes et données

Il est également possible d'afficher les courbes et les données en même temps en combinant les deux codes précédents.

``` c++
void loop() 
{
  i+=0.1;
 
  Serial.print("loop - i=");
  Serial.println(i);  

  Serial.print(">sin:");
  Serial.println(sin(i));

  Serial.print(">cos:");
  Serial.println(cos(i));
    
  delay(10);
}
```

![](teleplot-demo-demarrage.gif)

#### d. Fonction d'aide

Si vous souhaitez simplifier votre écriture de code dans le but d'afficher des graphiques, vous pouvez utiliser la fonction suivante (ou similaire) dans votre code :

``` c++
void teleplot(String label, float value)
{
  Serial.print(">");
  Serial.print(label);
  Serial.print(":");
  Serial.println(value);
}
```

- `String label`    : Le nom de votre label
- `float value`     : La valeur à afficher

## Sources

- [ElektorTV (YouTube) : How To Use Arduino's Serial Plotter](https://www.youtube.com/watch?v=WnxBNxX_WDc)  
- [ElektorMAG : How-to Use Arduino's Serial Plotter](https://www.elektormagazine.com/labs/how-to-use-arduinos-serial-plotter)
- [TelePlot](https://github.com/nesnes/teleplot)
