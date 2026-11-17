---
# RÉDACTION : un tutoriel fait réaliser quelque chose, pas à pas, du début à la fin.
# Chaque étape utilise l'include step-tuto.html (jamais de titres numérotés à la main).
layout: documentation
hide_hero: false
image: "came.png"   
component_toc: true
doc_header: true

title: Configuration de la caméra
description: "Vérifier le montage de la caméra du XIAO ESP32-S3 Sense, installer la bibliothèque d'autofocus, téléverser le code de streaming vidéo et afficher l'image de la caméra dans un navigateur"
author: Lina Abousalama     
---

## Objectif

Pour classer des images avec le modèle embarqué, la carte doit d'abord pouvoir les capturer. Dans ce tutoriel, nous vérifions le montage de la caméra, nous téléversons un programme de streaming vidéo et nous affichons l'image de la caméra dans un navigateur. Cela permet de s'assurer que la caméra fonctionne avant de lui associer le modèle.

À la fin de ce tutoriel, vous saurez :

- vérifier le montage d'une caméra sur une carte XIAO ESP32-S3 Sense ;
- télécharger et téléverser un code de streaming vidéo ;
- installer une bibliothèque Arduino manquante ;
- afficher le flux de la caméra dans un navigateur.

### Configuration de la caméra

Nous avons utilisé un XIAO ESP32-S3 Sense équipé d'une caméra. La caméra est connectée à la carte d'extension Sense.

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Vérifier le montage"
content="Vérifiez que la caméra est bien fixée sur la carte d'extension et que la nappe est bien insérée. Comme dans le tutoriel précédent, la carte est branchée à l'ordinateur avec un câble USB-C, le type de carte et le port sont sélectionnés dans Arduino IDE, et la mémoire PSRAM est activée."
%}


{% include step-tuto.html
greyBackground=true
title="Étape 2 : Télécharger le code de streaming vidéo "
content="Ouvrez le guide officiel de la caméra et allez à la section « Project II: Video Streaming ». Téléchargez le code prévu pour la version 3.x du support ESP32 : notre Arduino IDE utilise la version 3.3.12. Décompressez le dossier téléchargé, puis ouvrez le fichier .ino dans Arduino IDE : https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/?utm_source=chatgpt.com ."
%}

{% include step-tuto.html
greyBackground=true
title="Étape 3 : Installer la bibliothèque ESP32_OV5640_AF "
content="Le code utilise la bibliothèque ESP32_OV5640_AF, qui gère la mise au point automatique des caméras OV5640. Si elle manque, la compilation s'arrête avec une erreur indiquant que le fichier ESP32_OV5640_AF.h est introuvable. Pour l'ajouter : ouvrez le dépôt ESP32-OV5640-AF sur GitHub, cliquez sur Code puis sur Download ZIP. Dans Arduino IDE, choisissez Croquis > Inclure une bibliothèque > Ajouter la bibliothèque .ZIP, sélectionnez le fichier ZIP téléchargé et attendez le message confirmant l'installation. Compilez ensuite à nouveau le programme de la caméra."
%}

{% include step-tuto.html
greyBackground=true
title="Étape 4 : Configurer le Wi-Fi et téléverser le code "
content="Dans le code, remplacez le nom et le mot de passe du Wi-Fi par ceux de votre réseau 2,4 GHz (la carte ne se connecte pas à un réseau 5 GHz). Gardez la configuration CAMERA_MODEL_XIAO_ESP32S3. Cliquez sur Vérifier pour compiler, puis sur Téléverser pour envoyer le programme sur la carte."
%}


{% include step-tuto.html
greyBackground=true
title="Étape 5 : Afficher l'image de la caméra "
content="Ouvrez le Moniteur série à 115200 bauds. Quand une adresse commençant par http:// s'affiche, ouvrez-la dans le navigateur d'un appareil connecté au même Wi-Fi : vous devriez voir l'image de la caméra. Si le flux ne démarre pas tout seul, cliquez sur « Start Stream ». Si aucune adresse n'apparaît, vérifiez le nom du réseau, son mot de passe et sa fréquence de 2,4 GHz."
%}


## Conclusion

La caméra du XIAO ESP32-S3 Sense est maintenant opérationnelle : le programme de streaming vidéo est téléversé et l'image de la caméra s'affiche en direct dans un navigateur, sur le même réseau Wi-Fi que la carte.

Il reste à associer la caméra au modèle quantifié : la carte capturera une image, la préparera comme à l'entraînement, puis affichera la classe prédite.

L'étape suivante est l'**exécution du modèle sur l'ESP32 avec la caméra**.

