---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true
type: tutorial

title: ESP32, Wi-Fi et WebSocket
subtitle: Piloter un ESP32 depuis un navigateur, et lui répondre en temps réel
description: Créer un point d'accès Wi-Fi sur un ESP32, servir une page web, puis échanger des messages dans les deux sens avec le navigateur grâce à un WebSocket.
author: Alban Petit

time: 2
difficulty: 3
compatibilities-os: win, mac, lin

prerequisites:
  - label: "Concept : Wi-Fi, HTTP et WebSocket"
    link: /docs/concepts/reseau-wifi-websocket/
  - label: "Boutons, joystick et moniteur série"
    link: /workshops/microcontroleur/tutorials/entrees-boutons-joystick/

softwares:
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/

hardwares:
  - label: Carte Seeed Studio XIAO ESP32S3 (avec son antenne Wi-Fi branchée)
    link: /docs/references/hardware/xiao-esp32s3/
  - label: Un téléphone ou un PC avec le Wi-Fi
    link: ""

todo: 80
---

## Objectif

À la fin de ce tutoriel, la XIAO crée son propre réseau Wi-Fi. Un téléphone qui s'y connecte ouvre une page web servie par la carte, avec deux boutons qui allument et éteignent la LED de la XIAO. Dans l'autre sens, la carte envoie en continu la position du joystick, que la page affiche en direct.

C'est le squelette réseau du projet Snake : une page servie par la console, et une ligne ouverte dans les deux sens pour les messages du jeu. Les notions (point d'accès, HTTP, WebSocket, protocole) sont expliquées dans le concept [Wi-Fi, HTTP et WebSocket](/docs/concepts/reseau-wifi-websocket/).

Ce tutoriel part d'un projet PlatformIO neuf : le code du Pong n'est pas nécessaire. Le joystick reste câblé comme dans l'atelier (axe X sur D0).

{% include message.html title="L'antenne, d'abord" message="La XIAO ESP32S3 est livrée avec une petite antenne Wi-Fi à clipser sur son connecteur. Sans elle, la portée tombe à quelques centimètres et le réseau peut ne même pas apparaître." status="is-warning" icon="fas fa-broadcast-tower" %}

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Ajouter la bibliothèque WebSocket"
content="Le Wi-Fi (`WiFi.h`) et le serveur web (`WebServer.h`) font partie du core Arduino-ESP32 : rien à installer. Le serveur WebSocket vient de la bibliothèque **WebSockets** de *Links2004*, à déclarer dans `platformio.ini`."
%}

```ini
[env:seeed_xiao_esp32s3]
platform = espressif32
board = seeed_xiao_esp32s3
framework = arduino
monitor_speed = 115200
lib_deps =
    links2004/WebSockets@^2.4.0
```

{% include step-tuto.html
greyBackground=true
title="Étape 2 : Créer le point d'accès"
content="`WiFi.softAP()` transforme la carte en point d'accès : elle crée un réseau avec le nom (*SSID*) et le mot de passe donnés, et prend l'adresse `192.168.4.1`. Choisis un nom unique dans la salle, sinon les réseaux des autres binômes se confondront avec le tien. Le mot de passe doit faire **au moins 8 caractères**, sinon le point d'accès ne démarre pas."
%}

```cpp
#include <Arduino.h>
#include <WiFi.h>

constexpr char WIFI_SSID[]     = "Console-Binome1";  // unique dans la salle
constexpr char WIFI_PASSWORD[] = "snake2026";        // 8 caractères minimum

void setup() {
    Serial.begin(115200);
    delay(1500);  // laisse au moniteur série le temps de se rouvrir après le reset

    WiFi.softAP(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Point d'accès prêt, adresse : ");
    Serial.println(WiFi.softAPIP());
}

void loop() {}
```

{% include message.html title="Checkpoint" message="Le moniteur série affiche `Point d'accès prêt, adresse : 192.168.4.1`. Sur ton téléphone, le réseau `Console-Binome1` apparaît dans la liste Wi-Fi, et tu peux t'y connecter avec le mot de passe." status="is-success" icon="fas fa-check-circle" %}

{% include message.html title="Le téléphone se déconnecte tout seul ?" message="Le réseau de la console n'a pas d'accès à Internet. Beaucoup de téléphones le signalent, puis repassent discrètement sur les données mobiles ou sur un autre Wi-Fi. Quand le téléphone le propose, choisis de **rester connecté** à ce réseau ; au besoin, coupe les données mobiles le temps du test." status="is-info" icon="fas fa-mobile-alt" %}

{% include step-tuto.html
greyBackground=true
title="Étape 3 : Servir une page web"
content="Le serveur web écoute sur le port 80. On lui indique quoi répondre pour chaque adresse demandée : ici, pour la racine `/`, la page du joueur.

La page est écrite directement dans le code, dans une **chaîne brute** (*raw string literal*) : tout ce qui se trouve entre les deux marqueurs `rawliteral` est recopié tel quel, guillemets et retours à la ligne compris. Pour l'instant, la page se contente d'un titre et d'un texte d'état ; le JavaScript arrive à l'étape suivante.

`server.handleClient()` doit être appelé **à chaque tour** de `loop()` : c'est là que le serveur regarde si une requête est arrivée et y répond."
%}

```cpp
#include <WebServer.h>

WebServer server(80);

const char PAGE[] = R"rawliteral(
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Console XIAO</title>
</head>
<body>
  <h1>Console XIAO</h1>
  <p>La page est servie par la carte.</p>
</body>
</html>
)rawliteral";

void handleRoot() {
    server.send(200, "text/html", PAGE);  // 200 = « OK » en HTTP
}
```

Dans `setup()`, après le point d'accès :

```cpp
    server.on("/", handleRoot);
    server.begin();
```

Et dans `loop()` :

```cpp
void loop() {
    server.handleClient();
}
```

{% include message.html title="Checkpoint" message="Connecté au réseau de la console, ouvre `http://192.168.4.1/` dans le navigateur du téléphone : la page « Console XIAO » s'affiche. Tape bien `http://` : certains navigateurs essaient sinon `https://`, que la carte ne sait pas servir." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 4 : Ouvrir le WebSocket"
content="Le serveur WebSocket écoute sur un autre port, le **81**. Comme le serveur web, il doit être servi à chaque tour de `loop()` avec `webSocket.loop()`.

Les événements (un navigateur se connecte, se déconnecte, envoie un message) arrivent par une **fonction de rappel** : `onWebSocketEvent()`, que la bibliothèque appelle elle-même. Chaque navigateur connecté reçoit un numéro de client (0, 1, 2...).

Côté page, quelques lignes de JavaScript ouvrent la connexion vers `ws://192.168.4.1:81/` et affichent son état. Si la connexion tombe, la page retente toute seule une seconde plus tard."
%}

```cpp
#include <WebSocketsServer.h>

WebSocketsServer webSocket(81);

void onWebSocketEvent(uint8_t client, WStype_t type, uint8_t* payload, size_t length) {
    switch (type) {
        case WStype_CONNECTED:
            Serial.printf("Client %u connecté\n", client);
            break;
        case WStype_DISCONNECTED:
            Serial.printf("Client %u déconnecté\n", client);
            break;
        case WStype_TEXT:
            Serial.printf("Client %u : %.*s\n", client, (int)length, (const char*)payload);
            break;
        default:
            break;
    }
}
```

Dans `setup()` :

```cpp
    webSocket.begin();
    webSocket.onEvent(onWebSocketEvent);
```

Dans `loop()`, à côté de `server.handleClient()` :

```cpp
    webSocket.loop();
```

Remplace le `<body>` de la page par celui-ci :

```html
<body>
  <h1>Console XIAO</h1>
  <p>Liaison : <strong id="etat">connexion...</strong></p>

  <script>
    let ws;

    function connecter() {
      ws = new WebSocket("ws://" + location.hostname + ":81/");
      ws.onopen = () => {
        document.getElementById("etat").textContent = "connectée";
      };
      ws.onclose = () => {
        document.getElementById("etat").textContent = "perdue, nouvel essai...";
        setTimeout(connecter, 1000);  // reconnexion automatique
      };
    }

    connecter();
  </script>
</body>
```

`location.hostname` reprend l'adresse depuis laquelle la page a été chargée (`192.168.4.1`) : la page n'a pas besoin de la connaître à l'avance.

{% include message.html title="Checkpoint" message="Recharge la page : « Liaison : connectée » s'affiche, et le moniteur série écrit `Client 0 connecté`. Ferme l'onglet : `Client 0 déconnecté` apparaît. Débranche puis rebranche la carte, page ouverte : la liaison passe à « perdue », puis redevient « connectée » toute seule." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 5 : Du navigateur vers la carte"
content="Ajoutons deux boutons qui allument et éteignent la LED de la XIAO. Il faut d'abord fixer le **protocole** : le navigateur envoie le texte `LED:1` pour allumer et `LED:0` pour éteindre. Tout autre message est ignoré.

Dans la fonction de rappel, on fait le **minimum** : on vérifie le message et on mémorise la commande. C'est `loop()` qui l'applique ensuite, comme pour une interruption. Ainsi, toute la logique reste au même endroit, dans la boucle principale."
%}

```cpp
int ledCommand = -1;  // -1 : aucune commande en attente

// dans onWebSocketEvent(), remplace le case WStype_TEXT :
        case WStype_TEXT:
            // Message attendu : "LED:0" ou "LED:1", rien d'autre
            if (length == 5 && memcmp(payload, "LED:", 4) == 0) {
                if (payload[4] == '1') ledCommand = 1;
                if (payload[4] == '0') ledCommand = 0;
            }
            break;
```

Dans `setup()`, `pinMode(LED_BUILTIN, OUTPUT);`, puis dans `loop()` :

```cpp
    if (ledCommand != -1) {
        digitalWrite(LED_BUILTIN, ledCommand == 1 ? LOW : HIGH);  // LED de la XIAO : LOW l'allume
        ledCommand = -1;
    }
```

Côté page, deux boutons et une fonction qui n'envoie que si la liaison est ouverte :

```html
  <button onclick="envoyer('LED:1')">Allumer</button>
  <button onclick="envoyer('LED:0')">Éteindre</button>
```

```javascript
    function envoyer(message) {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(message);
      }
    }
```

(La fonction `envoyer()` se place dans le `<script>`, à côté de `connecter()`.)

{% include message.html title="Checkpoint" message="Les boutons allument et éteignent la LED orange de la XIAO, sans délai perceptible. Essaie d'envoyer un message invalide depuis la console du navigateur d'un PC (`ws.send('LED:7')`, `ws.send('n importe quoi')`) : la carte l'ignore et continue de fonctionner." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 6 : De la carte vers le navigateur"
content="Dans l'autre sens, la carte envoie la position du joystick sous la forme `JOY:2048`. Deux précautions évitent de saturer la liaison :

- on ne lit et n'envoie qu'**au plus 10 fois par seconde**, cadencé par `millis()` (jamais par `delay()`) ;
- on n'envoie que si la valeur a **réellement changé** (de plus de 40 sur 4095), pour ne pas répéter le bruit de l'ADC.

`broadcastTXT()` envoie le message à **tous** les navigateurs connectés."
%}

```cpp
constexpr int      PIN_JOYSTICK_X = D0;
constexpr uint32_t SEND_PERIOD_MS = 100;  // 10 messages par seconde au plus

void sendJoystick() {
    static uint32_t lastSendMs = 0;
    static int lastSentValue = -1000;

    uint32_t nowMs = millis();
    if (nowMs - lastSendMs < SEND_PERIOD_MS) {
        return;
    }
    lastSendMs = nowMs;

    int x = analogRead(PIN_JOYSTICK_X);
    if (abs(x - lastSentValue) <= 40) {
        return;  // pas de vrai changement
    }
    lastSentValue = x;

    char message[16];
    snprintf(message, sizeof(message), "JOY:%d", x);
    webSocket.broadcastTXT(message);
}
```

Appelle `sendJoystick()` dans `loop()`. Côté page, un paragraphe pour la valeur, et le traitement des messages reçus dans `connecter()` :

```html
  <p>Joystick : <strong id="joy">?</strong></p>
```

```javascript
      ws.onmessage = (event) => {
        const [type, valeur] = event.data.split(":");
        if (type === "JOY") {
          document.getElementById("joy").textContent = valeur;
        }
      };
```

{% include message.html title="Checkpoint" message="Incline le joystick : la valeur affichée sur le téléphone suit en direct, de 0 à 4095. Ouvre la page sur deux appareils à la fois : les deux reçoivent les valeurs, et chacun peut piloter la LED." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Étape 7 : Intégrer le réseau à une game loop"
content="Dans un jeu, le réseau s'ajoute à la game loop sans la modifier :

- `server.handleClient()` et `webSocket.loop()` s'appellent **à chaque tour** de `loop()`, avant le test de cadence des images ;
- les messages reçus deviennent des **entrées** du jeu, au même titre que les boutons : la fonction de rappel les mémorise, et la fonction de lecture des entrées les intègre à la photo des commandes de l'image ;
- la console reste l'**arbitre** : elle valide chaque demande avant de l'appliquer, puis informe le navigateur du résultat ;
- la connexion et la déconnexion du navigateur sont des **événements** de la machine à états du jeu."
%}

```cpp
void loop() {
    // Réseau : à chaque tour, sans attendre
    server.handleClient();
    webSocket.loop();

    // Game loop : une image toutes les FRAME_TIME_MS
    static uint32_t lastFrameMs = 0;
    uint32_t nowMs = millis();
    if (nowMs - lastFrameMs < FRAME_TIME_MS) {
        return;
    }
    lastFrameMs = nowMs;

    InputState input = inputRead();     // boutons, joystick ET messages reçus
    gameUpdate(game, input, nowMs);     // règles, validation des demandes
    rendererDraw(game);                 // écran de la console
    networkSendUpdates(game);           // ce qui a changé, vers le navigateur
}
```

Le nombre de navigateurs connectés s'obtient avec `webSocket.connectedClients()` : de quoi attendre un deuxième joueur avant de lancer la partie, ou mettre le jeu en pause s'il disparaît.

{% include message.html title="Le réseau dans son propre module" message="Comme pour `input`, `game` et `renderer`, le plus lisible est de regrouper tout le réseau dans un module `network` (`networkBegin()`, `networkPoll()`, `networkSendUpdates()`), avec la page web dans son propre fichier d'en-tête. `main.cpp` reste alors aussi court qu'au Pong." status="is-info" icon="fas fa-puzzle-piece" %}

## Le programme complet

```cpp
#include <Arduino.h>
#include <WiFi.h>
#include <WebServer.h>
#include <WebSocketsServer.h>

constexpr char     WIFI_SSID[]     = "Console-Binome1";
constexpr char     WIFI_PASSWORD[] = "snake2026";
constexpr int      PIN_JOYSTICK_X  = D0;
constexpr uint32_t SEND_PERIOD_MS  = 100;

WebServer        server(80);
WebSocketsServer webSocket(81);

int ledCommand = -1;  // -1 : aucune commande en attente

const char PAGE[] = R"rawliteral(
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Console XIAO</title>
</head>
<body>
  <h1>Console XIAO</h1>
  <p>Liaison : <strong id="etat">connexion...</strong></p>
  <p>Joystick : <strong id="joy">?</strong></p>
  <button onclick="envoyer('LED:1')">Allumer</button>
  <button onclick="envoyer('LED:0')">Éteindre</button>

  <script>
    let ws;

    function connecter() {
      ws = new WebSocket("ws://" + location.hostname + ":81/");
      ws.onopen = () => {
        document.getElementById("etat").textContent = "connectée";
      };
      ws.onclose = () => {
        document.getElementById("etat").textContent = "perdue, nouvel essai...";
        setTimeout(connecter, 1000);
      };
      ws.onmessage = (event) => {
        const [type, valeur] = event.data.split(":");
        if (type === "JOY") {
          document.getElementById("joy").textContent = valeur;
        }
      };
    }

    function envoyer(message) {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(message);
      }
    }

    connecter();
  </script>
</body>
</html>
)rawliteral";

void handleRoot() {
    server.send(200, "text/html", PAGE);
}

void onWebSocketEvent(uint8_t client, WStype_t type, uint8_t* payload, size_t length) {
    switch (type) {
        case WStype_CONNECTED:
            Serial.printf("Client %u connecté\n", client);
            break;
        case WStype_DISCONNECTED:
            Serial.printf("Client %u déconnecté\n", client);
            break;
        case WStype_TEXT:
            if (length == 5 && memcmp(payload, "LED:", 4) == 0) {
                if (payload[4] == '1') ledCommand = 1;
                if (payload[4] == '0') ledCommand = 0;
            }
            break;
        default:
            break;
    }
}

void sendJoystick() {
    static uint32_t lastSendMs = 0;
    static int lastSentValue = -1000;

    uint32_t nowMs = millis();
    if (nowMs - lastSendMs < SEND_PERIOD_MS) {
        return;
    }
    lastSendMs = nowMs;

    int x = analogRead(PIN_JOYSTICK_X);
    if (abs(x - lastSentValue) <= 40) {
        return;
    }
    lastSentValue = x;

    char message[16];
    snprintf(message, sizeof(message), "JOY:%d", x);
    webSocket.broadcastTXT(message);
}

void setup() {
    Serial.begin(115200);
    delay(1500);

    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, HIGH);  // LED éteinte (logique inversée)
    analogReadResolution(12);

    WiFi.softAP(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Point d'accès prêt, adresse : ");
    Serial.println(WiFi.softAPIP());

    server.on("/", handleRoot);
    server.begin();

    webSocket.begin();
    webSocket.onEvent(onWebSocketEvent);
}

void loop() {
    server.handleClient();
    webSocket.loop();

    if (ledCommand != -1) {
        digitalWrite(LED_BUILTIN, ledCommand == 1 ? LOW : HIGH);
        ledCommand = -1;
    }

    sendJoystick();
}
```

## Résultat attendu

La console crée son réseau Wi-Fi et sert sa propre page. Le téléphone pilote la LED de la carte, la carte envoie au téléphone la position du joystick, en temps réel et dans les deux sens. La page se reconnecte seule si la carte redémarre, et la carte ignore les messages invalides.

## Pour aller plus loin

- Mettre la page dans un fichier `include/page.h` pour alléger `main.cpp`, ou dans le système de fichiers de la carte (LittleFS) quand elle grossit.
- Dessiner la grille du jeu dans la page avec un élément `<canvas>`, et la mettre à jour à partir des messages reçus.
- Passer au format JSON quand le protocole se complique (bibliothèque ArduinoJson côté carte, `JSON.parse()` côté page).
- Le concept [Wi-Fi, HTTP et WebSocket](/docs/concepts/reseau-wifi-websocket/) : protocole, rôle d'arbitre de la console, gestion de la déconnexion.
