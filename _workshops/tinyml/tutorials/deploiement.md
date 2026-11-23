---
# RÉDACTION : un tutoriel fait réaliser quelque chose, pas à pas, du début à la fin.
# Chaque étape utilise l'include step-tuto.html (jamais de titres numérotés à la main).
layout: documentation
hide_hero: false
image: "depl.png"   
component_toc: true
doc_header: true

title: Déploiement du modèle sur l’ESP32
description: "Exécuter le modèle quantifié sur l'ESP32 : capturer une image avec la caméra, la préparer comme à l'entraînement, prédire chat ou chien et afficher la vidéo et le résultat sur une page web"
author: Lina Abousalama     
---

## Objectif

Le modèle quantifié est prêt : il pèse environ 36 Ko et ses entrées et sorties sont des entiers 8 bits. Il faut maintenant l'intégrer à un programme Arduino qui, sur demande, capture une image avec la caméra, la prépare exactement comme à l'entraînement, exécute le modèle et affiche la classe prédite. Dans ce tutoriel, nous expliquons ce programme bloc par bloc.

À la fin de ce tutoriel, vous saurez :

- charger un modèle TensorFlow Lite quantifié sur un microcontrôleur ;
- capturer une image et la convertir au format attendu par le modèle ;
- exécuter le modèle (l'inférence) et interpréter sa sortie ;
- afficher la vidéo et la prédiction sur une page web ;
- vérifier l'occupation de la mémoire.

### Conversion du fichier .tflite en .h  

Le microcontrôleur n'a pas de système de fichiers : le modèle doit être intégré au programme sous forme d'un tableau d'octets, dans un fichier .h. La bibliothèque TFLiteMicro_ArduinoESP32S3 fournit un outil Python qui fait cette conversion.

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Récupérer le modèle quantifié"
content="Allez dans Google Drive et téléchargez le modèle quantifié modele_chat_chien_CNN3_int8.tflite. Placez-le dans le dossier de la bibliothèque TFLiteMicro_ArduinoESP32S3, par exemple C:\Users\VotreNom\Documents\Arduino\libraries\TFLiteMicro_ArduinoESP32S3."
%}


{% include step-tuto.html
greyBackground=true
title="Étape 2 : Installer les dépendances"
content="Ouvrez PowerShell dans ce même dossier (dans l'Explorateur de fichiers, tapez powershell dans la barre d'adresse du dossier, puis appuyez sur Entrée). Installez les dépendances nécessaires avec la commande suivante. L'installation de TensorFlow est volumineuse et peut prendre quelques minutes."
%}
```cpp
py -m pip install "tensorflow>=2.18" "mako>=1.3.8"
```


{% include step-tuto.html
greyBackground=true
title="Étape 3 : Lancer la conversion"
content="Lancez la fonction Python convert_tflite_to_tflm(), située dans le dossier tools de la bibliothèque, avec la commande suivante."
%}
```cpp
py -c "from tools.tflm_converter import convert_tflite_to_tflm; print(convert_tflite_to_tflm('modele_chat_chien_int8.tflite'))""
```


L'outil génère le fichier modele_chat_chien_CNN3_int8_model.h, compatible avec TensorFlow Lite Micro. Il contient le modèle sous forme de tableau d'octets, que le programme utilise sous le nom `TFLM_modele_chat_chien_CNN3_int8_model`.


{% include step-tuto.html
greyBackground=true
title="Étape 4 : Créer le croquis Arduino"
content="Dans Arduino IDE, créez un nouveau croquis (File > New Sketch), puis enregistrez-le sous le nom chien_chat_camera (File > Save As) : Arduino crée le dossier chien_chat_camera dans votre dossier Arduino (par exemple C:\Users\VotreNom\Documents\Arduino). Copiez ensuite le fichier modele_chat_chien_CNN3_int8_model.h, situé dans C:\Users\VotreNom\Documents\Arduino\libraries\TFLiteMicro_ArduinoESP32S3, dans ce nouveau dossier."
%}

{% include step-tuto.html
greyBackground=true
title="Étape 5 : Copier le fichier des broches de la caméra"
content="Ouvrez le dossier SeeedStudio-XIAO-ESP32S3-Sense-camera-main (téléchargé dans le tutoriel sur la caméra), puis le dossier CameraWebServer_for_esp-arduino_3.0.x. Copiez le fichier camera_pins.h et collez-le dans le dossier chien_chat_camera. Ce fichier indique au programme les broches de la caméra de la carte XIAO ESP32-S3 Sense."
%}


### l’exécution du modèle sur l’ESP32 avec la caméra.

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Préparer le programme"
content="Nous déclarons les bibliothèques, les réglages du Wi-Fi, les constantes (tailles des images, seuil de décision) et les variables partagées par tout le programme."
%}

```cpp
#include <Arduino.h>
#include <WiFi.h>
#include <cmath>

#include "esp_camera.h"
#include "img_converters.h"
#include "esp_http_server.h"
#include "esp_heap_caps.h"

#include "tensorflow/lite/schema/schema_generated.h"
#include "tensorflow/lite/c/common.h"
#include "tensorflow/lite/micro/micro_interpreter.h"
#include "tensorflow/lite/micro/micro_mutable_op_resolver.h"

#define CAMERA_MODEL_XIAO_ESP32S3
#include "camera_pins.h"
#include "modele_chat_chien_CNN3_int8_model.h"


// Remplace par ton réseau Wi-Fi
const char* ssid = "---";
const char* password = "----";

constexpr int LARGEUR_IMAGE = 96;
constexpr int HAUTEUR_IMAGE = 96;
constexpr int CANAUX_IMAGE = 3;
constexpr int TAILLE_IMAGE = LARGEUR_IMAGE * HAUTEUR_IMAGE * CANAUX_IMAGE;
constexpr int LARGEUR_CAM = 240;
constexpr int HAUTEUR_CAM = 240;
constexpr int TAILLE_CAM = LARGEUR_CAM * HAUTEUR_CAM * 3;
constexpr int TAILLE_ARENE = 400000;
constexpr float SEUIL = 0.57f;

uint8_t* arene = nullptr;
uint8_t* image_rgb = nullptr;   // 96x96x3 pour le modèle
uint8_t* image_cam = nullptr;   // 240x240x3 avant réduction

tflite::MicroMutableOpResolver<5> resolveur;
tflite::MicroInterpreter* interpreteur = nullptr;
TfLiteTensor* entree = nullptr;
TfLiteTensor* sortie = nullptr;

httpd_handle_t serveur_page = nullptr;
httpd_handle_t serveur_flux = nullptr;

String derniere_classe = "En attente...";
float dernier_score = 0.0f;
volatile bool demande_prediction = false;
```
{% include step-tuto.html
greyBackground=true
title="Étape 2 : Créer la page web et le flux vidéo"
content="Nous démarrons deux petits serveurs web : 

-Page web : Affiche le flux de la caméra et un bouton « Prédire ». Quand on clique sur le bouton, une demande est envoyée à l’ESP32 et le résultat s’affiche sur la page.

-Flux vidéo : La caméra capture des images, qui sont converties en JPEG puis envoyées en continu au navigateur pour afficher la vidéo en direct.

- Démarrage des serveurs web : La fonction démarre deux serveurs : celui du port 80 pour la page et la prédiction, et celui du port 81 pour le flux vidéo. Ils ont chacun un ctrl_port différent pour leur gestion interne.
"
%}


```cpp
// --------------------------------------------------
// Page web
// --------------------------------------------------
static esp_err_t page_handler(httpd_req_t* req) {
  String adresse_flux =
      String("http://") + WiFi.localIP().toString() + ":81/stream";

  String page =
      String("<!doctype html><html><head><meta charset='utf-8'>"
             "<title>Camera ESP32</title></head><body>"
             "<h2>Flux de la camera</h2><img src='") +
      adresse_flux +
      "' style='max-width:100%;height:auto;'><br>"
      "<button id='btn' style='font-size:20px;padding:10px 20px;'>Predire</button>"
      "<h1 id='res'>Clique sur Predire</h1>"
      "<script>"
      "document.getElementById('btn').onclick=function(){"
      "document.getElementById('res').innerText='...';"
      "fetch('/predire').then(function(r){return r.text();})"
      ".then(function(t){document.getElementById('res').innerText=t;});"
      "};</script></body></html>";

  httpd_resp_set_type(req, "text/html");
  return httpd_resp_send(req, page.c_str(), HTTPD_RESP_USE_STRLEN);
}

// Demande une prédiction à loop() et attend le résultat (5 s max)
static esp_err_t predire_handler(httpd_req_t* req) {
  demande_prediction = true;

  unsigned long debut = millis();
  while (demande_prediction && millis() - debut < 5000) {
    vTaskDelay(pdMS_TO_TICKS(20));
  }

  char texte[64];
  snprintf(texte, sizeof(texte), "%s (score %.2f)",
           derniere_classe.c_str(), dernier_score);
  httpd_resp_set_type(req, "text/plain");
  return httpd_resp_send(req, texte, HTTPD_RESP_USE_STRLEN);
}

// --------------------------------------------------
// Flux vidéo
// --------------------------------------------------
static esp_err_t flux_handler(httpd_req_t* req) {
  esp_err_t resultat = httpd_resp_set_type(
      req, "multipart/x-mixed-replace;boundary=frame");
  if (resultat != ESP_OK) return resultat;

  while (true) {
    camera_fb_t* image = esp_camera_fb_get();
    if (image == nullptr) return ESP_FAIL;

    uint8_t* jpeg = nullptr;
    size_t taille_jpeg = 0;
    bool ok = frame2jpg(image, 80, &jpeg, &taille_jpeg);
    esp_camera_fb_return(image);
    if (!ok) return ESP_FAIL;

    char entete[96];
    int longueur = snprintf(entete, sizeof(entete),
        "\r\n--frame\r\nContent-Type: image/jpeg\r\n"
        "Content-Length: %u\r\n\r\n", (unsigned)taille_jpeg);

    resultat = httpd_resp_send_chunk(req, entete, longueur);
    if (resultat == ESP_OK) {
      resultat = httpd_resp_send_chunk(
          req, reinterpret_cast<const char*>(jpeg), taille_jpeg);
    }
    free(jpeg);
    if (resultat != ESP_OK) break;
  }
  httpd_resp_send_chunk(req, nullptr, 0);
  return resultat;
}

// --------------------------------------------------
// Démarrage des serveurs web
// --------------------------------------------------
bool demarrerServeursWeb() {
  httpd_config_t config_page = HTTPD_DEFAULT_CONFIG();
  config_page.server_port = 80;
  config_page.ctrl_port = 32768;

  httpd_uri_t uri_page = {};
  uri_page.uri = "/";
  uri_page.method = HTTP_GET;
  uri_page.handler = page_handler;

  httpd_uri_t uri_pred = {};
  uri_pred.uri = "/predire";
  uri_pred.method = HTTP_GET;
  uri_pred.handler = predire_handler;

  if (httpd_start(&serveur_page, &config_page) != ESP_OK) {
    Serial.println("Erreur serveur web.");
    return false;
  }
  httpd_register_uri_handler(serveur_page, &uri_page);
  httpd_register_uri_handler(serveur_page, &uri_pred);

  httpd_config_t config_flux = HTTPD_DEFAULT_CONFIG();
  config_flux.server_port = 81;
  config_flux.ctrl_port = 32769;

  httpd_uri_t uri_flux = {};
  uri_flux.uri = "/stream";
  uri_flux.method = HTTP_GET;
  uri_flux.handler = flux_handler;

  if (httpd_start(&serveur_flux, &config_flux) != ESP_OK) {
    Serial.println("Erreur serveur de flux.");
    return false;
  }
  httpd_register_uri_handler(serveur_flux, &uri_flux);
  return true;
}

```

{% include step-tuto.html
greyBackground=true
title="Étape 3 : Initialiser la caméra"
content="Nous configurons les broches de la caméra, le format des images et l'endroit où elles sont stockées, puis nous démarrons la caméra."
%}

```cpp

// --------------------------------------------------
// Caméra
// --------------------------------------------------
bool initialiserCamera() {
  camera_config_t config = {};
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_RGB565;
  config.frame_size = FRAMESIZE_240X240;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.fb_count = 2;
  config.grab_mode = CAMERA_GRAB_LATEST;

  esp_err_t erreur = esp_camera_init(&config);
  if (erreur != ESP_OK) {
    Serial.printf("Erreur camera : 0x%x\n", erreur);
    return false;
  }
  return true;
}

```
{% include step-tuto.html
greyBackground=true
title="Étape 4 : Initialiser le modèle"
content="Nous réservons la mémoire, déclarons les opérations utilisées par le réseau, chargeons le modèle quantifié et préparons ses tenseurs d'entrée et de sortie."
%}

```cpp

// --------------------------------------------------
// Modèle CNN
// --------------------------------------------------
bool initialiserModele() {
  arene = static_cast<uint8_t*>(heap_caps_aligned_alloc(
      16, TAILLE_ARENE, MALLOC_CAP_SPIRAM | MALLOC_CAP_8BIT));
  image_rgb = static_cast<uint8_t*>(heap_caps_malloc(
      TAILLE_IMAGE, MALLOC_CAP_SPIRAM | MALLOC_CAP_8BIT));
  image_cam = static_cast<uint8_t*>(heap_caps_malloc(
      TAILLE_CAM, MALLOC_CAP_SPIRAM | MALLOC_CAP_8BIT));

  if (!arene || !image_rgb || !image_cam) {
    Serial.println("Erreur memoire : verifie la PSRAM.");
    return false;
  }

  resolveur.AddConv2D();
  resolveur.AddMaxPool2D();
  resolveur.AddMean();
  resolveur.AddFullyConnected();
  resolveur.AddLogistic();

  const tflite::Model* modele =
      tflite::GetModel(TFLM_modele_chat_chien_CNN3_int8_model);
  if (modele->version() != TFLITE_SCHEMA_VERSION) {
    Serial.println("Version du modele incompatible.");
    return false;
  }

  static tflite::MicroInterpreter modele_local(
      modele, resolveur, arene, TAILLE_ARENE);
  interpreteur = &modele_local;

  if (interpreteur->AllocateTensors() != kTfLiteOk) {
    Serial.println("Erreur AllocateTensors.");
    return false;
  }

  entree = interpreteur->input(0);
  sortie = interpreteur->output(0);

  if (entree == nullptr || sortie == nullptr ||
      entree->type != kTfLiteInt8 || sortie->type != kTfLiteInt8 ||
      entree->bytes != TAILLE_IMAGE) {
    Serial.println("Entree/sortie du modele inattendue.");
    return false;
  }

  Serial.println("Modele CNN pret.");
  return true;
}

```

{% include step-tuto.html
greyBackground=true
title="Étape 5 : Capturer l'image et prédire"
content="Nous capturons une image, la convertissons en RGB, la réduisons à 96 par 96 pixels, la quantifions en int8, exécutons le modèle et transformons sa sortie en classe chat ou chien."
%}

```cpp



// Réduction 240x240 -> 96x96 (pixel le plus proche)
void redimensionner() {
  for (int y = 0; y < HAUTEUR_IMAGE; y++) {
    int sy = y * HAUTEUR_CAM / HAUTEUR_IMAGE;
    for (int x = 0; x < LARGEUR_IMAGE; x++) {
      int sx = x * LARGEUR_CAM / LARGEUR_IMAGE;
      const uint8_t* p = image_cam + (sy * LARGEUR_CAM + sx) * 3;
      uint8_t* q = image_rgb + (y * LARGEUR_IMAGE + x) * 3;
      q[0] = p[0]; q[1] = p[1]; q[2] = p[2];
    }
  }
}


// --------------------------------------------------
// Capture et prédiction
// --------------------------------------------------
void capturerEtPredire() {
  camera_fb_t* image = esp_camera_fb_get();
  if (image == nullptr) {
    Serial.println("Erreur de capture.");
    derniere_classe = "Erreur capture";
    return;
  }

  bool ok = fmt2rgb888(image->buf, image->len, image->format, image_cam);
  esp_camera_fb_return(image);
  if (!ok) {
    Serial.println("Erreur de conversion RGB.");
    derniere_classe = "Erreur conversion";
    return;
  }

  redimensionner();

  for (int i = 0; i < TAILLE_IMAGE; i++) {
    float pixel = image_rgb[i] / 255.0f;
    int v = static_cast<int>(
        roundf(pixel / entree->params.scale) + entree->params.zero_point);
    if (v < -128) v = -128;
    if (v > 127) v = 127;
    entree->data.int8[i] = static_cast<int8_t>(v);
  }

  if (interpreteur->Invoke() != kTfLiteOk) {
    Serial.println("Erreur pendant la prediction.");
    derniere_classe = "Erreur modele";
    return;
  }

  float score =
      (sortie->data.int8[0] - sortie->params.zero_point) * sortie->params.scale;

  dernier_score = score;
  derniere_classe = (score >= SEUIL) ? "chien" : "chat";
  Serial.printf("Score : %.4f -> %s\n", score, derniere_classe.c_str());
}

```

{% include step-tuto.html
greyBackground=true
title="Étape 6 : Assembler le programme (setup et loop)"
content="La fonction setup démarre la caméra, le modèle, le Wi-Fi et les serveurs. La fonction loop attend ensuite une demande de prédiction, venant du bouton de la page web ou du moniteur série."
%}

```cpp

// --------------------------------------------------
// Setup
// --------------------------------------------------
void setup() {
  Serial.begin(115200);
  delay(1000);
  Serial.println("\nDemarrage...");

  Serial.printf("Taille du modele : %u octets\n",
              (unsigned)sizeof(TFLM_modele_chat_chien_CNN3_int8_model));

  if (!psramFound()) {
    Serial.println("PSRAM non detectee.");
    return;
  }
  if (!initialiserCamera()) return;
  if (!initialiserModele()) return;

  WiFi.mode(WIFI_STA);
  WiFi.setSleep(false);
  WiFi.begin(ssid, password);

  Serial.print("Connexion au Wi-Fi");
  unsigned long debut = millis();
  while (WiFi.status() != WL_CONNECTED && millis() - debut < 20000) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("Wi-Fi echoue. Prediction serie (p) seulement.");
    return;
  }

  if (!demarrerServeursWeb()) return;

  Serial.print("Ouvre : http://");
  Serial.println(WiFi.localIP());
  Serial.println("Clique sur Predire, ou envoie p dans le Moniteur serie.");
}

// --------------------------------------------------
// Loop : prédiction uniquement sur demande
// --------------------------------------------------
void loop() {
  if (entree == nullptr || interpreteur == nullptr) {
    delay(1000);
    return;
  }

  // Bouton de la page web
  if (demande_prediction) {
    capturerEtPredire();
    demande_prediction = false;
  }

  // Moniteur série : envoyer p
  if (Serial.available()) {
    char c = Serial.read();
    if (c == 'p' || c == 'P') capturerEtPredire();
  }

  delay(10);
}

```

{% include step-tuto.html
greyBackground=true
title="Étape 7 : Téléverser et tester"
content="Dans Arduino IDE, cliquez sur Vérifier, puis sur Téléverser. Ouvrez le Moniteur série à 115200 bauds : le programme affiche la taille du modèle, puis l'adresse de la page. Ouvrez cette adresse dans le navigateur d'un appareil connecté au même Wi-Fi, placez un chat ou un chien devant la caméra (ou une photo affichée sur un écran) et cliquez sur Predire."
%}


### Occupation de la mémoire

Pour le programme qui intègre la caméra et le modèle, Arduino IDE indique :

| Mémoire | Utilisée | Maximum | Reste |
|---|---|---|---|
| Programme (partition) | 1 101 847 octets (environ 1 076 Ko, 84 %) | 1 310 720 octets (1 280 Ko) | environ 204 Ko |
| Variables globales (mémoire dynamique) | 68 148 octets (environ 66,6 Ko, 20 %) | 327 680 octets (320 Ko) | environ 253,4 Ko |

- Le modèle seul occupe 36 968 octets (environ 36,1 Ko). Il est déjà compris dans la taille du programme, puisqu'il est stocké dans la mémoire du programme.
- Les grandes zones de travail (arène du modèle, images, tampons de la caméra) sont placées dans la **PSRAM** de 8 Mo, et non dans les variables globales : elles n'apparaissent donc pas dans le tableau ci-dessus.

## Conclusion

Le modèle quantifié s'exécute maintenant sur l'ESP32. À la demande, la carte capture une image, la convertit en RGB, la réduit à 96 × 96 pixels, la quantifie en int8 et exécute le réseau. Elle compare ensuite le score au seuil de 0,57 pour afficher « chat » ou « chien ». Une page web montre la vidéo en direct et le résultat. L'ensemble tient dans 84 % de la partition du programme et utilise 20 % de la mémoire dynamique.

Il reste à mesurer la qualité des prédictions sur la carte : nous calculerons une matrice de confusion à partir des prédictions de l'ESP32 et nous la comparerons à celle de Colab.

L'étape suivante est le **test du modèle sur l'ESP32**.

