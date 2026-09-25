---
layout: documentation
hide_hero: false
hero_image: "hero.jpeg"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 20

title: Carte SD avec ESP32
subtitle: Intégration d'un socket SD sur PCB et lecture/écriture de fichiers
description: Ce tutoriel explique comment intégrer un socket SD sur un PCB avec un ESP32, câbler le bus SPI correctement et lire ou écrire des fichiers via la bibliothèque SD.h.
author: Alban Petit

time: 2
difficulty: 2
compatibilities-os: win, mac, lin

prerequisites:
  - label: Notions de base en C++ (framework Arduino pour ESP32)
    link: ""
  - label: VSCode et PlatformIO installés
    link: "/docs/tutorial/installation-vscode-platformio"
  - label: Notions de base en conception PCB (KiCad)
    link: "/docs/tutorial/kicad-eeschema-bases"

softwares:
  - label: Visual Studio Code (dernière version)
    link: "https://code.visualstudio.com/"
  - label: PlatformIO IDE (extension VSCode)
    link: "https://platformio.org/"
  - label: KiCad (version 8.0 ou supérieure)
    link: "https://www.kicad.org/"

hardwares:
  - label: ESP32 S3 UNO
    link: ""
  - label: Socket SD (push-push)
    link: ""
  - label: Carte SD (formatée en FAT32)
    link: ""

todo: 100
---

## Introduction

La **carte SD** est un moyen simple et économique d'ajouter du stockage persistant à un projet embarqué. Associée à l'ESP32, elle permet d'enregistrer des mesures de capteurs, des logs d'événements, des fichiers de configuration ou encore des données audio.

Dans ce tutoriel, vous apprendrez à :

- Comprendre le protocole SPI utilisé par la carte SD
- Intégrer un socket SD directement sur un PCB avec l'ESP32
- Lire et écrire des fichiers via la bibliothèque `SD.h`
- Enregistrer des données en continu (datalogger)

{% include message.html
title="Compatibilité des niveaux logiques"
message="L'ESP32 fonctionne en logique 3.3V. Les cartes SD opèrent également à 3.3V, donc aucun adaptateur de niveau (level shifter) n'est nécessaire. La connexion directe est possible sans composant intermédiaire."
status="is-info"
icon="fas fa-info-circle" %}

---

## Le protocole SPI

La carte SD communique via le protocole **SPI** (Serial Peripheral Interface), un bus série synchrone à 4 fils :

| Signal | Rôle |
| -------- | ------ |
| **SCK** (Clock) | Horloge générée par le maître (ESP32) |
| **MOSI** (Master Out Slave In) | Données envoyées par l'ESP32 vers la carte |
| **MISO** (Master In Slave Out) | Données envoyées par la carte vers l'ESP32 |
| **CS** (Chip Select) | Sélection de l'esclave (actif à l'état bas) |

L'ESP32-S3 dispose de deux bus SPI utilisables : **SPI2** (par défaut) et **SPI3**.

### Broches SPI par défaut (SPI2)

| Fonction | GPIO ESP32-S3 |
| ---------- | ----------- |
| SCK | GPIO 18 |
| MISO | GPIO 19 |
| MOSI | GPIO 11 |
| CS | GPIO 5 |

{% include message.html
title="Broches SPI personnalisables"
message="Sur ESP32-S3, le bus SPI peut être assigné à n'importe quelles broches via `SPI.begin(SCK, MISO, MOSI, CS)`. Les broches indiquées ici sont celles utilisées dans ce tutoriel. Pour un PCB, il est possible de choisir d'autres GPIOs selon le routage."
status="is-info"
icon="fas fa-microchip" %}

---

## Intégration sur PCB

### Choix du socket

Il existe deux types de mécanisme de maintien pour les sockets SD :

- **Push-push** : la carte se verrouille par pression, une seconde pression l'éjecte
- **Push-pull** : la carte s'insère librement et se retire en la tirant

Pour un usage embarqué (risque de vibrations), préférez un socket **push-push avec verrouillage**.

{% include message.html
title="Format FAT32 obligatoire"
message="La bibliothèque SD.h de l'ESP32 ne supporte que le système de fichiers FAT32. Formatez votre carte SD en FAT32 avant utilisation. Les cartes > 32 Go sont souvent formatées en exFAT par défaut : il faut les reformater manuellement en FAT32 (utilisez l'outil officiel [https://www.sdcard.org/downloads/formatter/](SD Card Formatter)."

status="is-warning"
icon="fas fa-exclamation-triangle" %}

### Schéma de connexion

```text
               ESP32
               GPIO18 ─────────── SCK  ─┐
               GPIO19 ─────────── MISO ─┤
               GPIO11 ─────────── MOSI ─┤  Socket SD
               GPIO5  ─────────── CS   ─┤
               3.3V   ── 10kΩ ─── MISO ─┤  (pull-up)
               3.3V   ── 10kΩ ─── CS   ─┤  (pull-up)
               3.3V   ─────────── VDD  ─┤
               GND    ─────────── GND  ─┘
```

### Résistances de pull-up

Les lignes SPI nécessitent des résistances de pull-up vers 3.3V :

{% include step-tuto.html
greyBackground = true
title = "Pull-up sur MISO et CS"
content="Ajoutez une résistance de **10kΩ** vers 3.3V sur les lignes suivantes :

- **MISO** : évite l'état flottant quand aucune carte n'est insérée (le bus SPI resterait indéfini)
- **CS** : maintient le Chip Select inactif (haut) au démarrage, avant que le GPIO soit configuré

SCK et MOSI sont pilotés activement par l'ESP32 dès le démarrage et ne nécessitent pas de pull-up." %}

### Condensateurs de découplage

{% include step-tuto.html
greyBackground = true
title = "Découplage de l'alimentation"
content="Placez les condensateurs suivants entre VDD et GND du socket, au plus près de la broche VDD :

- **100nF** en céramique : filtre les parasites haute fréquence générés par les transitions SPI
- **10µF** en céramique ou tantale : absorbe les pics de courant lors de l'initialisation de la carte (jusqu'à 200mA en pointe)

Ces deux condensateurs doivent être placés **au plus près du socket** sur le PCB, avec un chemin de retour GND court." %}

### Broche Card Detect (CD)

{% include step-tuto.html
greyBackground = true
title = "Détection d'insertion de carte"
content="La plupart des sockets SD exposent une broche **CD** (Card Detect) connectée à un interrupteur mécanique interne. Cet interrupteur se ferme à la masse quand une carte est insérée.

Connectez CD à un GPIO de l'ESP32 avec une résistance de pull-up **10kΩ** vers 3.3V.

Si la détection n'est pas nécessaire dans votre application, laissez la broche CD non connectée." %}

Dans le code, vous pouvez surveiller cet état pour détecter l'insertion ou le retrait :

```cpp
bool cardPresent = (digitalRead(CD_PIN) == LOW);
```

### Checklist avant la mise sous tension

{% include step-tuto.html
greyBackground = true
title = "Vérifications avant le premier test"
content="Avant d'alimenter votre PCB pour la première fois :

- Vérifiez visuellement les soudures du socket (pas de court-circuit entre les pads)
- Vérifiez la continuité entre GND du socket et GND de l'ESP32
- Vérifiez la continuité entre VDD du socket et 3.3V
- Vérifiez la présence des condensateurs de découplage (100nF + 10µF)
- Vérifiez les résistances de pull-up sur MISO et CS
- Insérez une carte SD formatée en FAT32
- Mesurez 3.3V sur VDD avant d'alimenter l'ESP32" %}

---

## Code

### Configuration du projet PlatformIO

La bibliothèque `SD.h` est incluse dans le framework Arduino pour ESP32 : **aucune dépendance supplémentaire** n'est nécessaire.

```ini
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
```

### Code 1 : Initialisation et informations sur la carte

```cpp
#include <Arduino.h>
#include <SD.h>
#include <SPI.h>

#define CS_PIN 5

void setup() {
  Serial.begin(115200);
  delay(500);

  Serial.println("Initialisation de la carte SD...");

  // Sur ESP32-S3, initialiser le bus SPI avec les broches explicites
  SPI.begin(18, 19, 11, CS_PIN);  // SCK, MISO, MOSI, CS

  if (!SD.begin(CS_PIN, SPI)) {
    Serial.println("Erreur : carte SD non détectée ou non initialisée.");
    Serial.println("Vérifiez le câblage et le formatage FAT32.");
    while (true) delay(1000);
  }

  Serial.println("Carte SD initialisée avec succès !");

  uint8_t cardType = SD.cardType();
  Serial.print("Type de carte : ");
  if      (cardType == CARD_MMC)  Serial.println("MMC");
  else if (cardType == CARD_SD)   Serial.println("SDSC");
  else if (cardType == CARD_SDHC) Serial.println("SDHC");
  else                            Serial.println("INCONNUE");

  uint64_t cardSize = SD.cardSize() / (1024 * 1024);
  Serial.printf("Taille        : %llu MB\n", cardSize);
  Serial.printf("Espace libre  : %llu MB\n", (SD.totalBytes() - SD.usedBytes()) / (1024 * 1024));
}

void loop() {}
```

### Code 2 : Lecture et écriture de fichiers

```cpp
#include <Arduino.h>
#include <SD.h>
#include <SPI.h>

#define CS_PIN 5

void writeFile(const char* path, const char* message) {
  File file = SD.open(path, FILE_WRITE);
  if (!file) {
    Serial.printf("Erreur : impossible d'ouvrir %s en écriture\n", path);
    return;
  }
  file.print(message);
  file.close();  // flush obligatoire
}

void appendFile(const char* path, const char* message) {
  File file = SD.open(path, FILE_APPEND);
  if (!file) return;
  file.print(message);
  file.close();
}

void readFile(const char* path) {
  File file = SD.open(path);
  if (!file) {
    Serial.printf("Erreur : fichier %s non trouvé\n", path);
    return;
  }
  while (file.available()) {
    Serial.write(file.read());
  }
  file.close();
}

void setup() {
  Serial.begin(115200);
  delay(500);

  SPI.begin(18, 19, 11, CS_PIN);  // SCK, MISO, MOSI, CS
  if (!SD.begin(CS_PIN, SPI)) {
    Serial.println("Erreur : carte SD non initialisée.");
    while (true) delay(1000);
  }

  writeFile("/log.txt", "Démarrage\n");
  appendFile("/log.txt", "Mesure 1 : 23.5°C\n");
  appendFile("/log.txt", "Mesure 2 : 24.1°C\n");
  readFile("/log.txt");
}

void loop() {}
```

{% include message.html
title="Toujours fermer les fichiers"
message="La bibliothèque SD.h utilise un cache interne. Si vous omettez `file.close()`, les données peuvent ne pas être physiquement écrites sur la carte en cas de coupure d'alimentation. Appelez **toujours** `file.close()` après chaque écriture."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

### Code 3 : Datalogger (enregistrement en continu)

```cpp
#include <Arduino.h>
#include <SD.h>
#include <SPI.h>

#define CS_PIN 5

const char* LOG_FILE    = "/data.csv";
const unsigned long LOG_INTERVAL = 1000;  // ms
unsigned long lastLog   = 0;

float readTemperature() {
  // Remplacez par la lecture de votre capteur
  return 20.0f + (millis() / 1000.0f) * 0.1f;
}

void setup() {
  Serial.begin(115200);
  delay(500);

  SPI.begin(18, 19, 11, CS_PIN);  // SCK, MISO, MOSI, CS
  if (!SD.begin(CS_PIN, SPI)) {
    Serial.println("Erreur : carte SD non initialisée.");
    while (true) delay(1000);
  }

  // Créer l'en-tête CSV si le fichier n'existe pas encore
  if (!SD.exists(LOG_FILE)) {
    File f = SD.open(LOG_FILE, FILE_WRITE);
    if (f) {
      f.println("timestamp_ms,temperature_C");
      f.close();
    }
  }

  Serial.println("Datalogger démarré.");
}

void loop() {
  unsigned long now = millis();
  if (now - lastLog >= LOG_INTERVAL) {
    lastLog = now;

    float temp  = readTemperature();
    String line = String(now) + "," + String(temp, 2);

    File f = SD.open(LOG_FILE, FILE_APPEND);
    if (f) {
      f.println(line);
      f.close();
      Serial.println("Log : " + line);
    } else {
      Serial.println("Erreur d'écriture.");
    }
  }
}
```

---

## Dépannage

### La carte SD n'est pas détectée

{% include step-tuto.html
greyBackground = true
title = "Vérifier le câblage SPI"
content="Les erreurs de câblage sont la cause la plus fréquente. Vérifiez :

- MISO et MOSI ne sont **pas inversés** (erreur très courante)
- CS est bien connecté au GPIO déclaré dans le code
- La masse est commune entre l'ESP32 et le socket SD" %}

{% include step-tuto.html
greyBackground = true
title = "Réduire la vitesse SPI"
content="Certaines cartes SD ne supportent pas les vitesses SPI élevées. Initialisez avec une fréquence réduite :

```cpp
SPI.begin(18, 19, 11, CS_PIN);
SD.begin(CS_PIN, SPI, 4000000);  // 4 MHz au lieu de 25 MHz
```

Si ça fonctionne à basse vitesse, la carte ou le routage PCB est en cause (pistes trop longues, pas de découplage)." %}

{% include step-tuto.html
greyBackground = true
title = "Vérifier le format FAT32"
content="La bibliothèque `SD.h` ne supporte que FAT32.

- **Windows** : clic droit → Formater → FAT32
- **macOS** : Utilitaire de disque → MS-DOS (FAT)
- **Linux** : `sudo mkfs.fat -F 32 /dev/sdX1`

Les cartes > 32 Go nécessitent l'outil [SD Card Formatter](https://www.sdcard.org/downloads/formatter/) pour forcer le FAT32." %}

### L'ESP32 redémarre pendant l'accès à la SD

{% include step-tuto.html
greyBackground = true
title = "Problème d'alimentation"
content="Les accès à la carte SD génèrent des pics de courant (jusqu'à 200mA). Si l'alimentation est insuffisante, l'ESP32 peut redémarrer ou se réinitialiser :

- Vérifiez la présence du condensateur 10µF sur VDD du socket
- Vérifiez que la source d'alimentation peut fournir au moins 500mA en continu" %}

---

## Ressources

- [Documentation SD.h (Espressif Arduino)](https://docs.espressif.com/projects/arduino-esp32/en/latest/libraries.html)
- [SD Card Formatter (formatage FAT32)](https://www.sdcard.org/downloads/formatter/)

---

## Conclusion

Vous savez maintenant comment intégrer un socket SD sur un PCB avec l'ESP32 et exploiter les données via la bibliothèque `SD.h`.

### Points clés à retenir

- **Bus SPI2** : SCK=18, MISO=19, MOSI=11, CS=5, initialiser avec `SPI.begin(18, 19, 11, 5)`
- **Format FAT32** obligatoire pour la bibliothèque `SD.h`
- **Pull-up 10kΩ** sur MISO et CS indispensables sur PCB
- **Découplage** : 100nF + 10µF au plus près de VDD du socket
- **Toujours appeler `file.close()`** après une écriture

### Pour approfondir

- Associez la carte SD avec un module **RTC (DS3231)** pour horodater vos mesures
- Utilisez la bibliothèque **ArduinoJson** pour stocker des fichiers de configuration en JSON
- Explorez **SD_MMC.h** pour des vitesses plus élevées via le bus SDMMC natif de l'ESP32

{% include message.html
title="Bien joué !"
message="Votre ESP32 peut maintenant lire et écrire des fichiers sur carte SD. C'est une brique essentielle pour tout projet de datalogging ou de stockage de configuration."
status="is-success"
icon="fas fa-check-circle" %}
