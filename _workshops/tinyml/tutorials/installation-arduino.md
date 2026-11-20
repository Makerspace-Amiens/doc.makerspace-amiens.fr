---
# RÉDACTION : un tutoriel fait réaliser quelque chose, pas à pas, du début à la fin.
# Chaque étape utilise l'include step-tuto.html (jamais de titres numérotés à la main).
layout: documentation
hide_hero: false
image: "imag.png"   
component_toc: true
doc_header: true

title: Installation et configuration de l’environnement Arduino
description: "Installer Arduino IDE sur Windows, puis ajouter le support des cartes ESP32 d'Espressif et la bibliothèque TensorFlow Lite Micro pour exécuter un modèle sur la carte"
author: Lina Abousalama      # RÉDACTION : mettre son propre nom
---

## Objectif

Pour exécuter un modèle d'apprentissage automatique sur un microcontrôleur ESP32, il faut un environnement qui permet d'écrire le programme, de le compiler et de le téléverser sur la carte. Dans ce tutoriel, nous installons Arduino IDE sur Windows, puis nous le configurons : nous ajoutons le support des cartes ESP32 d'Espressif et la bibliothèque TensorFlow Lite Micro pour ESP32-S3, qui permet d'exécuter notre modèle quantifié sur la carte.

À la fin de ce tutoriel, vous saurez :

- installer Arduino IDE sur Windows ;
- ajouter le support des cartes ESP32 ;
- installer une bibliothèque à partir d'un fichier ZIP ;
- sélectionner la carte et le port avant de téléverser un programme.

### Installation de l’environnement Arduino

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Télécharger Arduino IDE"
content="Rendez-vous sur le site officiel d'Arduino IDE : https://docs.arduino.cc/software/ide/ . Cliquez sur Download : une page s'affiche avec une liste déroulante pour choisir votre système d'exploitation. Choisissez celui qui vous convient (dans ce tutoriel : Windows 10 or newer, 64 bits), puis cliquez sur Download. "
%}

{% include step-tuto.html
greyBackground=true
title="Étape 2 : Exécution de l'installateur"
content="Double-cliquez sur le fichier téléchargé pour lancer l'installation et acceptez les conditions d'utilisation. Choisissez ensuite pour quels utilisateurs le logiciel doit être accessible (tous les utilisateurs de l'ordinateur ou vous seulement), puis le dossier d'installation. "
%}

{% include step-tuto.html
greyBackground=true
title="Étape 3 : Finaliser l'installation"
content="Une fois l'installation terminée, cliquez sur Terminer.  Lancez Arduino IDE pour la première fois.  "
%}

### Configuration de l’environnement Arduino

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Ajouter l'adresse des cartes ESP32 "
content="Dans Arduino IDE, ouvrez Fichier > Préférences (File > Preferences). Dans le champ « URL de gestionnaire de cartes supplémentaires » (Additional boards manager URLs), ajoutez l'adresse officielle d'Espressif, puis cliquez sur OK : https://espressif.github.io/arduino-esp32/package_esp32_index.json"
%}

{% include step-tuto.html
greyBackground=true
title="Étape 2 : Installer le support des cartes ESP32"
content="Ouvrez Outils > Carte > Gestionnaire de carte (Tools > Board > Boards Manager), recherchez « esp32 by Espressif Systems » et installez la version 3.3.12. Le téléchargement des outils de compilation peut prendre un peu de temps."
%}

{% include step-tuto.html
greyBackground=true
title="Étape 3 : Télécharger la bibliothèque TensorFlow Lite Micro "
content="Rendez-vous sur https://github.com/j-siderius/TFLiteMicro_ArduinoESP32S3 , cliquez sur Code, puis sur Download ZIP pour télécharger le fichier ZIP de la bibliothèque TFLiteMicro_ArduinoESP32S3."
%}

{% include step-tuto.html
greyBackground=true
title="Étape 4 : Installer la bibliothèque"
content="Dans Arduino IDE, ouvrez Croquis > Inclure une bibliothèque > Ajouter la bibliothèque .ZIP (Sketch > Include Library > Add .ZIP Library), sélectionnez le fichier ZIP téléchargé, puis validez."
%}


{% include step-tuto.html
greyBackground=true
title="Étape 5 : Sélectionner la carte et le port"
content="Branchez l'ESP32 à l'ordinateur avec un câble USB qui transmet les données (certains câbles servent seulement à charger). Dans le menu Outils, choisissez votre carte (ESP32S3 Dev Module dans notre cas) et le port COM de la carte dans Outils > Port. Activez aussi la mémoire PSRAM (PSRAM : OPI PSRAM), utilisée par le modèle, et USB CDC On Boot : Enabled, pour que les messages du moniteur série passent par le câble USB."
%}


## Conclusion

Arduino IDE est maintenant installé et configuré : il reconnaît les cartes ESP32 d'Espressif et dispose de la bibliothèque TensorFlow Lite Micro. La carte est sélectionnée et son port est choisi, ce qui permet de compiler un programme et de le téléverser.

Il reste à intégrer le modèle quantifié dans un programme Arduino et à l'exécuter sur la carte.

L'étape suivante est le **déploiement du modèle sur l'ESP32**.

