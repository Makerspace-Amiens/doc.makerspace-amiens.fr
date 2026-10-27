---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true
type: how-to

title: Récupérer une carte ESP32-S3 qui n'apparaît plus
subtitle: Port série introuvable, téléversement impossible, mode BOOT
description: Retrouver le port d'une carte ESP32-S3 à USB natif (XIAO ESP32S3, DevKitC) et la reflasher quand le téléversement échoue.
author: Alban Petit

time: 1
difficulty: 2
todo: 90

prerequisites:
  - label: Un projet PlatformIO qui compile pour la carte
    link: /docs/tutorials/software/vscode-platformio/installation-platformio/
softwares:
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/
hardwares:
  - label: Carte Seeed Studio XIAO ESP32S3 (ou autre carte ESP32-S3)
    link: /docs/references/hardware/xiao-esp32s3/
---

## Contexte

Ce guide s'applique quand la carte ne se laisse plus programmer : le port série n'apparaît plus sur l'ordinateur, ou le téléversement échoue avec un message comme `Failed to connect to ESP32-S3: No serial data received`, `Could not open port` ou `No such file or directory`. Le plus souvent, la carte n'a rien : c'est le programme en cours, le câble ou le port qui est en cause.

{% include message.html title="Pourquoi le port disparaît" message="Sur la XIAO ESP32S3, il n'y a pas de puce USB-série : le port USB est géré par la puce elle-même, **pendant que ton programme tourne**. Un programme qui plante en boucle, qui met la carte en veille profonde ou qui utilise les broches USB (GPIO19/20) fait disparaître le port. Le mode BOOT contourne le programme : c'est la puce qui démarre seule et ouvre son propre port." status="is-info" icon="fas fa-info-circle" %}

## Procédure

Suis les étapes dans l'ordre : chacune règle les cas les plus fréquents avant de passer aux suivants.

### 1. Vérifier le câble et le port USB

- Utilise un câble USB-C qui transporte des **données** : beaucoup de câbles ne font que charger. En cas de doute, essaie un câble qui a déjà servi à programmer une carte.
- Branche la carte **directement** sur l'ordinateur, sans hub ni rallonge, et essaie un autre port USB.

### 2. Regarder si le port existe

| Système | Où regarder | Nom attendu |
|---|---|---|
| Windows | Gestionnaire de périphériques, rubrique **Ports (COM et LPT)** | `Périphérique série USB (COMx)` |
| macOS | Terminal : `ls /dev/cu.usbmodem*` | `/dev/cu.usbmodem...` |
| Linux | Terminal : `ls /dev/ttyACM*` | `/dev/ttyACM0` |

PlatformIO liste aussi les ports dans **Devices** (barre latérale PlatformIO), ou avec la commande `pio device list` dans son terminal. Débranche puis rebranche la carte en regardant la liste : le port qui apparaît est le sien.

### 3. Libérer le port

Un port ne s'ouvre qu'une fois. S'il existe mais que l'upload échoue avec `Access denied`, `port busy` ou `Resource busy`, ferme tout ce qui peut l'occuper : un moniteur série ouvert (même dans une autre fenêtre VSCode), l'Arduino IDE, un logiciel de traçage (TelePlot, Processing). Relance ensuite l'upload.

### 4. Forcer le mode BOOT

1. **Débranche** la carte.
2. **Maintiens** le bouton **BOOT** enfoncé (marqué `B` sur la XIAO, à côté du connecteur USB-C).
3. **Rebranche** le câble, bouton toujours enfoncé.
4. **Relâche** BOOT.

La carte démarre alors sur son chargeur interne, sans exécuter ton programme : un port réapparaît (parfois sous un autre nom ou numéro). Lance l'upload ; PlatformIO trouve le port seul. Une fois l'upload terminé, appuie sur **RESET** (marqué `R`) : ton nouveau programme démarre.

{% include message.html title="Reflasher un programme sain" message="En mode BOOT, téléverse un programme dont tu es sûr (le Blink de [Vérification de la toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/), par exemple). Si la carte refonctionne, le problème venait de ton programme : relis la dernière modification avant de le reflasher." status="is-success" icon="fas fa-check-circle" %}

### 5. Effacer toute la mémoire Flash

Si le mode BOOT fonctionne mais que le problème revient dès que ton programme démarre, efface entièrement la Flash, toujours en mode BOOT :

- dans la barre latérale PlatformIO : **Project Tasks**, ton environnement, **Platform**, **Erase Flash** ;
- ou dans le terminal PlatformIO : `pio run -t erase`.

Téléverse ensuite le Blink, puis ton programme.

### 6. Donner l'accès au port (Linux)

Si le port existe mais que l'upload échoue avec `Permission denied`, ton utilisateur n'a pas le droit d'ouvrir le port. Ajoute-le au groupe `dialout` (le nom peut varier selon la distribution), puis ferme ta session et reconnecte-toi :

```bash
sudo usermod -aG dialout $USER
```

PlatformIO fournit aussi des règles `udev` pour ses cartes : voir sa documentation, rubrique *FAQ > Troubleshooting > 99-platformio-udev.rules*.

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Aucun port, quel que soit le câble | Câble de charge seulement | Étape 1 : un autre câble, qui transporte les données |
| Le port apparaît puis disparaît en boucle | Programme qui plante et redémarre (*panic*, watchdog) | Étape 4, puis reflasher un programme sain ; lire l'erreur au moniteur série si elle s'affiche |
| Le port disparaît dès que le programme démarre | Veille profonde, broches USB (GPIO19/20) utilisées | Étape 4, puis retirer la mise en veille ou ces broches du programme |
| `Access denied`, `port busy` | Moniteur série ou autre logiciel ouvert | Étape 3 |
| `Permission denied` (Linux) | Utilisateur hors du groupe `dialout` | Étape 6 |
| L'upload réussit, mais rien ne se passe | La carte est restée en mode BOOT | Appuyer sur RESET |
| Les premiers messages de `setup()` n'apparaissent pas | Le moniteur série se rouvre après le reset, trop tard | Ajouter `delay(1500);` après `Serial.begin()` |
| La carte chauffe, ou l'ordinateur signale une surtension USB | Court-circuit sur la carte ou le montage | Débrancher immédiatement, inspecter le câblage ou les soudures |

## Voir aussi

- La fiche [XIAO ESP32S3](/docs/references/hardware/xiao-esp32s3/) : USB natif, boutons BOOT et RESET, broches réservées.
- Le concept [Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/) : la séquence de démarrage et le rôle du bouton BOOT.
