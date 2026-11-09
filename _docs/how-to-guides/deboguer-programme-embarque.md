---
layout: documentation
hide_hero: true
component_toc: true
doc_header: true
type: how-to

title: Déboguer un programme embarqué
subtitle: Trouver pourquoi la carte ne fait pas ce qu'on attend d'elle
description: "Une méthode pas à pas pour trouver un bug sur un microcontrôleur ESP32 : décrire, vérifier le matériel, tracer, isoler, lire un plantage."
author: Alban Petit

time: 1
difficulty: 2
todo: 90

prerequisites:
  - label: Savoir téléverser un programme et ouvrir le moniteur série
    link: /docs/tutorials/electronics/vscode-port-serie/
softwares:
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/
hardwares:
  - label: Carte ESP32 (XIAO ESP32S3 dans l'atelier)
    link: /docs/references/hardware/xiao-esp32s3/
---

## Contexte

Ce guide s'applique quand le programme compile et se téléverse, mais que la carte ne fait pas ce qu'on attend : rien ne se passe, le comportement est faux, ou la carte redémarre en boucle. Sur un microcontrôleur, il n'y a ni écran d'erreur ni débogueur sous la main : la méthode compte plus que l'outil. On procède du plus simple au plus fin, en changeant **une seule chose à la fois**.

## Procédure

### 1. Décrire le problème précisément

Avant de toucher au code, écris en une phrase **ce que tu attends** et **ce que tu observes** : « quand j'appuie sur le stick, la partie devrait commencer ; l'écran reste sur l'accueil ». Note aussi **quand** ça arrive : toujours, au démarrage, au bout de quelques minutes, après une action précise.

Un problème qu'on sait reproduire est déjà à moitié résolu. Un problème qui « arrive parfois » demande d'abord de trouver ce qui le déclenche.

### 2. Écarter le matériel

Un bug sur deux n'est pas dans le code. Vérifie dans l'ordre :

- l'alimentation : la carte est-elle bien sous tension, le 3,3 V est-il présent ?
- le câblage : chaque fil est-il sur la bonne broche, bien enfoncé dans la breadboard (ou chaque soudure saine sur la carte) ?
- la broche dans le code : correspond-elle à celle du câblage (`D5` et non `5`, qui désigne GPIO5) ?

Les programmes de test du TD2 ([Les modules de la mallette](/workshops/microcontroleur/tutorials/entrees-boutons-joystick/)) vérifient chaque module séparément : s'ils fonctionnent, le matériel est hors de cause. Pour une carte qui n'apparaît plus ou un écran qui reste noir, voir les guides [Récupérer une carte ESP32-S3 qui n'apparaît plus](/docs/how-to-guides/esp32-s3-carte-introuvable/) et [Dépanner un écran TFT SPI qui n'affiche rien](/docs/how-to-guides/ecran-tft-noir/).

### 3. Rendre le programme bavard

Le moniteur série est ton premier outil de débogage. Affiche ce que fait le programme, et surtout **les valeurs** qu'il manipule :

```cpp
void setup() {
    Serial.begin(115200);
    delay(1500);                         // laisse le moniteur série se rouvrir
    Serial.println("Démarrage");
}

void loop() {
    // ...
    Serial.printf("[%lu ms] etat=%d x=%.2f score=%d\n",
                  millis(), (int)game.state, joystickX, game.score);
}
```

Quelques règles pour des traces utiles :

- **horodater** avec `millis()` : on voit ce qui arrive quand, et à quelle fréquence ;
- afficher **les transitions** plutôt qu'un message à chaque tour de `loop()` (sinon le moniteur défile trop vite pour être lu) : par exemple seulement quand l'état change ;
- **jamais** de `Serial.print()` dans une fonction d'interruption : on y lève un drapeau, et `loop()` affiche ;
- une trace qui **n'apparaît pas** est aussi une information : le programme n'est jamais passé par là.

### 4. Isoler le défaut

Réduis le problème jusqu'à la plus petite partie qui le montre encore :

1. **Revenir à ce qui marchait** : quelle est la dernière modification avant l'apparition du bug ? Avec Git, `git diff` montre ce qui a changé depuis le dernier commit, et `git stash` met tes modifications de côté le temps de vérifier que l'ancienne version fonctionne.
2. **Couper en deux** : désactive la moitié du programme (en commentant ses appels dans `loop()`). Si le bug disparaît, il est dans cette moitié ; sinon, dans l'autre. Recommence sur la bonne moitié.
3. **Écrire un programme minimal** : un `main.cpp` de vingt lignes qui ne fait que la chose qui pose problème. S'il fonctionne, le défaut vient d'une interaction avec le reste du programme.

### 5. Vérifier une hypothèse à la fois

Formule une hypothèse (« le bouton est lu à l'envers »), imagine le test qui la confirmerait ou l'infirmerait (« afficher `digitalRead()` bouton relâché puis enfoncé »), fais ce test, puis seulement **un** changement. Changer trois choses d'un coup, c'est ne jamais savoir laquelle a résolu le problème, ou laquelle en a créé un autre.

Note tes hypothèses et tes résultats dans ton journal de bord : c'est le meilleur moyen de ne pas tourner en rond, et c'est exactement ce qu'on attend dans la documentation du projet.

### 6. Lire un plantage

Quand l'ESP32 plante, il écrit la cause au moniteur série avant de redémarrer. Ne referme pas le moniteur : lis la première ligne.

| Message | Ce qu'il signifie | Causes fréquentes |
|---|---|---|
| `Guru Meditation Error: Core 1 panic'ed (LoadProhibited)` ou `(StoreProhibited)` | Lecture ou écriture à une adresse interdite | Pointeur nul, case de tableau hors des limites |
| `Stack canary watchpoint triggered (loopTask)` | La **pile** de `loop()` a débordé | Grand tableau déclaré dans une fonction, récursion |
| `Task watchdog got triggered` | Une tâche n'a pas rendu la main à temps | Boucle `while` qui ne se termine jamais, attente active |
| Redémarrages en boucle sans message lisible | Plantage dès le démarrage | Erreur dans `setup()`, alimentation insuffisante |

Le plantage s'accompagne d'une ligne `Backtrace:` remplie d'adresses. PlatformIO sait la traduire en noms de fonctions et numéros de lignes : ajoute ce filtre dans `platformio.ini`, puis relance le moniteur.

```ini
monitor_filters = esp32_exception_decoder
```

### 7. Demander de l'aide efficacement

Quand tu bloques, une bonne question fait gagner du temps à tout le monde. Elle contient :

- ce que tu attends et ce que tu observes (étape 1) ;
- ce que tu as déjà vérifié et essayé, avec les résultats ;
- le **plus petit** morceau de code qui montre le problème, et le message exact du moniteur série.

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Rien ne s'affiche au moniteur série | Vitesse différente de `Serial.begin()`, messages envoyés avant l'ouverture du port | Même vitesse des deux côtés (115 200) ; `delay(1500)` après `Serial.begin()` |
| Des caractères illisibles au moniteur | Vitesse du moniteur différente de celle du programme | Régler `monitor_speed = 115200` dans `platformio.ini` |
| Le programme marche, puis se fige au bout d'un moment | Débordement d'un compteur, fragmentation du tas, attente sans fin | Tracer avec `millis()` pour dater le blocage, puis isoler (étape 4) |
| Un bouton compte plusieurs appuis | Rebonds du contact | Anti-rebond avec `millis()` |
| Une valeur change « toute seule » | Variable modifiée par une interruption sans `volatile`, ou écrasée par un tableau trop petit | `volatile` sur les variables partagées ; vérifier la taille des tableaux |
| Le comportement change quand on ajoute une trace | Problème de temps (une trace ralentit la boucle) | Suspecter un `delay()`, une attente ou un ordre d'opérations dépendant du temps |

## Voir aussi

- Le concept [Du matériel au logiciel](/workshops/microcontroleur/concepts/du-materiel-au-logiciel/) : compilation, édition de liens et lecture des erreurs.
- Le concept [Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/) : la pile, le tas et les interruptions.
- [Tenir un journal de bord](/workshops/methodologie-de-projet/tutorials/journal-de-bord/) : garder la trace de ses essais.
