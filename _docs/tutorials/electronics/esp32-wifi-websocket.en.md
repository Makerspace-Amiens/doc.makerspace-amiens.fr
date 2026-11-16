---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true
type: tutorial

title: ESP32, Wi-Fi and WebSocket
subtitle: Control an ESP32 from a browser, and have it answer in real time
description: Create a Wi-Fi access point on an ESP32, serve a web page, then exchange messages in both directions with the browser using a WebSocket.
author: Alban Petit

time: 2
difficulty: 3
compatibilities-os: win, mac, lin

prerequisites:
  - label: "Concept: Wi-Fi, HTTP and WebSocket"
    link: /docs/concepts/reseau-wifi-websocket/
  - label: "The kit modules"
    link: /workshops/microcontroleur/tutorials/entrees-boutons-joystick/

softwares:
  - label: PlatformIO IDE (VSCode extension)
    link: /docs/references/software/platformIO/

hardwares:
  - label: Seeed Studio XIAO ESP32S3 board (with its Wi-Fi antenna connected)
    link: /docs/references/hardware/xiao-esp32s3/
  - label: A phone or a PC with Wi-Fi
    link: ""

todo: 80
---

## Goal

By the end of this tutorial, the XIAO creates its own Wi-Fi network. A phone that connects to it opens a web page served by the board, with two buttons that turn the XIAO's LED on and off. In the other direction, the board continuously sends the joystick position, which the page displays live.

This is the network skeleton of the Snake project: a page served by the console, and a line open in both directions for the game messages. The notions (access point, HTTP, WebSocket, protocol) are explained in the concept [Wi-Fi, HTTP and WebSocket](/docs/concepts/reseau-wifi-websocket/).

![The phone connects to the console's access point, 192.168.4.1; it requests the page from the HTTP server on port 80, then opens a WebSocket on port 81 to exchange messages in both directions](/docs/concepts/reseau-wifi-websocket/architecture-reseau.svg)

This tutorial starts from a fresh PlatformIO project: the Pong code is not needed. The joystick stays wired as in the workshop (X axis on D0).

{% include message.html title="The antenna first" message="The XIAO ESP32S3 ships with a small Wi-Fi antenna to clip onto its connector. Without it, the range drops to a few centimetres and the network may not even appear." status="is-warning" icon="fas fa-broadcast-tower" %}

{% include step-tuto.html
greyBackground=true
title="Step 1: Add the WebSocket library"
content="Wi-Fi (`WiFi.h`) and the web server (`WebServer.h`) are part of the Arduino-ESP32 core: nothing to install. The WebSocket server comes from the **WebSockets** library by *Links2004*, to be declared in `platformio.ini`."
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
title="Step 2: Create the access point"
content="`WiFi.softAP()` turns the board into an access point: it creates a network with the given name (*SSID*) and password, and takes the address `192.168.4.1`. Choose a name that is unique in the room, otherwise the other teams' networks will be confused with yours. The password must be **at least 8 characters** long, otherwise the access point does not start."
%}

```cpp
#include <Arduino.h>
#include <WiFi.h>

constexpr char WIFI_SSID[]     = "Console-Team1";  // unique in the room
constexpr char WIFI_PASSWORD[] = "snake2026";      // 8 characters minimum

void setup() {
    Serial.begin(115200);
    delay(1500);  // gives the serial monitor time to reopen after the reset

    WiFi.softAP(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Access point ready, address: ");
    Serial.println(WiFi.softAPIP());
}

void loop() {}
```

{% include message.html title="Checkpoint" message="The serial monitor prints `Access point ready, address: 192.168.4.1`. On your phone, the `Console-Team1` network appears in the Wi-Fi list, and you can connect to it with the password." status="is-success" icon="fas fa-check-circle" %}

{% include message.html title="Does the phone disconnect by itself?" message="The console's network has no Internet access. Many phones point this out, then quietly switch back to mobile data or another Wi-Fi network. When the phone offers it, choose to **stay connected** to this network; if need be, turn off mobile data for the duration of the test." status="is-info" icon="fas fa-mobile-alt" %}

{% include step-tuto.html
greyBackground=true
title="Step 3: Serve a web page"
content="The web server listens on port 80. You tell it what to answer for each address requested: here, for the root `/`, the player's page.

The page is written directly in the code, in a **raw string literal**: everything between the two `rawliteral` markers is copied as is, quotation marks and line breaks included. For now, the page only has a title and a status text; the JavaScript comes in the next step.

`server.handleClient()` must be called **on every pass** of `loop()`: that is where the server checks whether a request has arrived and answers it."
%}

```cpp
#include <WebServer.h>

WebServer server(80);

const char PAGE[] = R"rawliteral(
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>XIAO console</title>
</head>
<body>
  <h1>XIAO console</h1>
  <p>This page is served by the board.</p>
</body>
</html>
)rawliteral";

void handleRoot() {
    server.send(200, "text/html", PAGE);  // 200 = "OK" in HTTP
}
```

In `setup()`, after the access point:

```cpp
    server.on("/", handleRoot);
    server.begin();
```

And in `loop()`:

```cpp
void loop() {
    server.handleClient();
}
```

{% include message.html title="Checkpoint" message="Connected to the console's network, open `http://192.168.4.1/` in the phone's browser: the « XIAO console » page is displayed. Do type `http://`: otherwise some browsers try `https://`, which the board cannot serve." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 4: Open the WebSocket"
content="The WebSocket server listens on another port, **81**. Like the web server, it must be serviced on every pass of `loop()` with `webSocket.loop()`.

Events (a browser connects, disconnects, sends a message) arrive through a **callback function**: `onWebSocketEvent()`, which the library calls by itself. Each connected browser gets a client number (0, 1, 2...).

On the page side, a few lines of JavaScript open the connection to `ws://192.168.4.1:81/` and show its state. If the connection drops, the page retries by itself one second later."
%}

```cpp
#include <WebSocketsServer.h>

WebSocketsServer webSocket(81);

void onWebSocketEvent(uint8_t client, WStype_t type, uint8_t* payload, size_t length) {
    switch (type) {
        case WStype_CONNECTED:
            Serial.printf("Client %u connected\n", client);
            break;
        case WStype_DISCONNECTED:
            Serial.printf("Client %u disconnected\n", client);
            break;
        case WStype_TEXT:
            Serial.printf("Client %u: %.*s\n", client, (int)length, (const char*)payload);
            break;
        default:
            break;
    }
}
```

In `setup()`:

```cpp
    webSocket.begin();
    webSocket.onEvent(onWebSocketEvent);
```

In `loop()`, next to `server.handleClient()`:

```cpp
    webSocket.loop();
```

Replace the `<body>` of the page with this one:

```html
<body>
  <h1>XIAO console</h1>
  <p>Link: <strong id="status">connecting...</strong></p>

  <script>
    let ws;

    function connect() {
      ws = new WebSocket("ws://" + location.hostname + ":81/");
      ws.onopen = () => {
        document.getElementById("status").textContent = "connected";
      };
      ws.onclose = () => {
        document.getElementById("status").textContent = "lost, retrying...";
        setTimeout(connect, 1000);  // automatic reconnection
      };
    }

    connect();
  </script>
</body>
```

`location.hostname` takes the address the page was loaded from (`192.168.4.1`): the page does not need to know it in advance.

{% include message.html title="Checkpoint" message="Reload the page: « Link: connected » is displayed, and the serial monitor prints `Client 0 connected`. Close the tab: `Client 0 disconnected` appears. Unplug the board and plug it back in with the page open: the link goes to « lost », then becomes « connected » again by itself." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 5: From the browser to the board"
content="Let us add two buttons that turn the XIAO's LED on and off. First the **protocol** must be fixed: the browser sends the text `LED:1` to turn it on and `LED:0` to turn it off. Any other message is ignored.

In the callback function, do the **minimum**: check the message and store the command. `loop()` then applies it, as for an interrupt. That way, all the logic stays in one place, in the main loop."
%}

```cpp
int ledCommand = -1;  // -1: no command pending

// in onWebSocketEvent(), replace the WStype_TEXT case:
        case WStype_TEXT:
            // Expected message: "LED:0" or "LED:1", nothing else
            if (length == 5 && memcmp(payload, "LED:", 4) == 0) {
                if (payload[4] == '1') ledCommand = 1;
                if (payload[4] == '0') ledCommand = 0;
            }
            break;
```

In `setup()`, `pinMode(LED_BUILTIN, OUTPUT);`, then in `loop()`:

```cpp
    if (ledCommand != -1) {
        digitalWrite(LED_BUILTIN, ledCommand == 1 ? LOW : HIGH);  // XIAO LED: LOW turns it on
        ledCommand = -1;
    }
```

On the page side, two buttons and a function that only sends if the link is open:

```html
  <button onclick="sendMessage('LED:1')">On</button>
  <button onclick="sendMessage('LED:0')">Off</button>
```

```javascript
    function sendMessage(message) {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(message);
      }
    }
```

(The `sendMessage()` function goes in the `<script>`, next to `connect()`.)

{% include message.html title="Checkpoint" message="The buttons turn the XIAO's orange LED on and off, with no noticeable delay. Try sending an invalid message from the browser console of a PC (`ws.send('LED:7')`, `ws.send('anything at all')`): the board ignores it and keeps working." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 6: From the board to the browser"
content="In the other direction, the board sends the joystick position in the form `JOY:2048`. Two precautions avoid saturating the link:

- read and send **at most 10 times a second**, paced by `millis()` (never by `delay()`);
- only send if the value has **really changed** (by more than 40 out of 4095), so as not to repeat the ADC noise.

`broadcastTXT()` sends the message to **all** connected browsers."
%}

```cpp
constexpr int      PIN_JOYSTICK_X = D0;
constexpr uint32_t SEND_PERIOD_MS = 100;  // 10 messages per second at most

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
        return;  // no real change
    }
    lastSentValue = x;

    char message[16];
    snprintf(message, sizeof(message), "JOY:%d", x);
    webSocket.broadcastTXT(message);
}
```

Call `sendJoystick()` in `loop()`. On the page side, a paragraph for the value, and the handling of received messages in `connect()`:

```html
  <p>Joystick: <strong id="joy">?</strong></p>
```

```javascript
      ws.onmessage = (event) => {
        const [type, value] = event.data.split(":");
        if (type === "JOY") {
          document.getElementById("joy").textContent = value;
        }
      };
```

{% include message.html title="Checkpoint" message="Tilt the joystick: the value shown on the phone follows live, from 0 to 4095. Open the page on two devices at once: both receive the values, and each can control the LED." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="Step 7: Integrate the network into a game loop"
content="In a game, the network is added to the game loop without modifying it:

- `server.handleClient()` and `webSocket.loop()` are called **on every pass** of `loop()`, before the frame pacing test;
- received messages become **inputs** of the game, just like the buttons: the callback function stores them, and the input reading function adds them to the snapshot of the controls for the frame;
- the console remains the **referee**: it validates each request before applying it, then informs the browser of the result;
- the browser connecting and disconnecting are **events** of the game's state machine."
%}

```cpp
void loop() {
    // Network: on every pass, without waiting
    server.handleClient();
    webSocket.loop();

    // Game loop: one frame every FRAME_TIME_MS
    static uint32_t lastFrameMs = 0;
    uint32_t nowMs = millis();
    if (nowMs - lastFrameMs < FRAME_TIME_MS) {
        return;
    }
    lastFrameMs = nowMs;

    float joystickX = readJoystick();   // controls from the console...
    readNetworkMessages(game);          // ...and requests received from the browser
    gameUpdate(game, joystickX, nowMs); // rules, validation of requests
    rendererDraw(game);                 // console display
    networkSendUpdates(game);           // what has changed, to the browser
}
```

The number of connected browsers is given by `webSocket.connectedClients()`: enough to wait for a second player before starting the game, or to pause the game if they disappear.

{% include message.html title="The network in its own module" message="As for `input`, `game` and `renderer`, the most readable option is to group all the networking in a `network` module (`networkBegin()`, `networkPoll()`, `networkSendUpdates()`), with the web page in its own header file. `main.cpp` then stays as short as in Pong." status="is-info" icon="fas fa-puzzle-piece" %}

## The complete program

```cpp
#include <Arduino.h>
#include <WiFi.h>
#include <WebServer.h>
#include <WebSocketsServer.h>

constexpr char     WIFI_SSID[]     = "Console-Team1";
constexpr char     WIFI_PASSWORD[] = "snake2026";
constexpr int      PIN_JOYSTICK_X  = D0;
constexpr uint32_t SEND_PERIOD_MS  = 100;

WebServer        server(80);
WebSocketsServer webSocket(81);

int ledCommand = -1;  // -1: no command pending

const char PAGE[] = R"rawliteral(
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>XIAO console</title>
</head>
<body>
  <h1>XIAO console</h1>
  <p>Link: <strong id="status">connecting...</strong></p>
  <p>Joystick: <strong id="joy">?</strong></p>
  <button onclick="sendMessage('LED:1')">On</button>
  <button onclick="sendMessage('LED:0')">Off</button>

  <script>
    let ws;

    function connect() {
      ws = new WebSocket("ws://" + location.hostname + ":81/");
      ws.onopen = () => {
        document.getElementById("status").textContent = "connected";
      };
      ws.onclose = () => {
        document.getElementById("status").textContent = "lost, retrying...";
        setTimeout(connect, 1000);
      };
      ws.onmessage = (event) => {
        const [type, value] = event.data.split(":");
        if (type === "JOY") {
          document.getElementById("joy").textContent = value;
        }
      };
    }

    function sendMessage(message) {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(message);
      }
    }

    connect();
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
            Serial.printf("Client %u connected\n", client);
            break;
        case WStype_DISCONNECTED:
            Serial.printf("Client %u disconnected\n", client);
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
    digitalWrite(LED_BUILTIN, HIGH);  // LED off (inverted logic)
    analogReadResolution(12);

    WiFi.softAP(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Access point ready, address: ");
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

## Expected result

The console creates its Wi-Fi network and serves its own page. The phone controls the board's LED, and the board sends the joystick position to the phone, in real time and in both directions. The page reconnects by itself if the board restarts, and the board ignores invalid messages.

## Going further

- Put the page in an `include/page.h` file to lighten `main.cpp`, or in the board's file system (LittleFS) when it grows.
- Draw the game grid in the page with a `<canvas>` element, and update it from the messages received.
- Move to JSON when the protocol gets more complicated (ArduinoJson library on the board side, `JSON.parse()` on the page side).
- The concept [Wi-Fi, HTTP and WebSocket](/docs/concepts/reseau-wifi-websocket/): protocol, the console's role as referee, handling disconnection.
