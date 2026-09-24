---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Documenter son code et son firmware
subtitle: Que le code se lise sans qu'on ait dû l'écrire soi-même
description: Commenter utilement, structurer un README de module, et documenter l'architecture logicielle de votre projet.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

prerequisites:
  - label: Avoir du code à documenter (Arduino, PlatformIO, Python, etc.)
    link: ""
softwares:
  - label: Un éditeur de code
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Deux niveaux de documentation de code

- **Le niveau fichier/fonction** : des commentaires directement dans le
  code, pour qui le lit ligne par ligne.
- **Le niveau projet** : un README ou une page qui explique l'architecture
  générale, avant même d'ouvrir un fichier.

Les deux sont nécessaires : l'un sans l'autre laisse toujours un trou.

## Commenter utilement, pas commenter beaucoup

{% capture tab1 %}

```cpp
// incrémente i
i++;

// boucle
for (int i = 0; i < 10; i++) {
  // fait le calcul
  x = x + i;
}
```

{% endcapture %}

{% capture tab2 %}

```cpp
// Moyenne glissante sur les 10 dernières mesures du capteur,
// pour lisser le bruit de lecture (voir la pré-étude, page Études du site)
for (int i = 0; i < 10; i++) {
  somme = somme + mesures[i];
}
```

{% endcapture %}

{% include content-tabs.html
  id="commentaires-code"
  tab_title1="❌ Commente l'évident"
  tab_title2="✅ Commente le pourquoi"
  tab1=tab1
  tab2=tab2
%}

{% include message.html title="La règle simple" message="Un commentaire ne doit jamais répéter ce que le code dit déjà ; il doit dire ce que le code ne peut pas dire : pourquoi ce choix, ce que fait cette valeur magique, ce qu'il ne faut surtout pas changer et pourquoi." status="is-info" icon="fas fa-info-circle" %}

## Où documenter le code dans le template

Le template prévoit trois emplacements, un par type d'information :

| Emplacement | Ce qu'on y met |
|---|---|
| `project/firmware/<nom-du-projet>/` | Le code du firmware lui-même, un dossier par projet PlatformIO |
| `project/firmware/README.md` | Carte cible, bibliothèques, organisation des fichiers, comment compiler et téléverser |
| `docs/conception/firmware.md` | Sur le site : l'architecture du code (boucle principale, machine à états), l'environnement |
| `docs/conception/software.md` et `project/software/` | Idem pour une application sur ordinateur, téléphone ou navigateur |

Supprimez la page et le dossier qui ne concernent pas votre projet (pas de
partie logicielle ? supprimez `software.md` et `project/software/`). Si le
code est conséquent, faites une sous-page par fonction (par exemple
« Asservissement moteur », « Communication Bluetooth »).

## Documenter l'architecture

Une page (`docs/conception/firmware.md`, ou un `README.md` dans le dossier du
code) qui répond à : comment le code est organisé en fichiers/modules,
quelles librairies utilisées et pourquoi (lien avec
[Tracer ses choix techniques](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/)),
et comment compiler et téléverser le tout.

Le firmware du template se développe avec **VSCode** et l'extension
**PlatformIO** (voir
[Installation de VSCode](/docs/tutorials/software/vscode-platformio/installation-vscode/)
et [Installation de PlatformIO](/docs/tutorials/software/vscode-platformio/installation-platformio/)).
Un projet PlatformIO s'organise toujours ainsi :

```text
firmware/
└── mon-robot/
    ├── platformio.ini    carte, framework, bibliothèques
    ├── src/
    │   └── main.cpp      programme principal
    ├── include/          fichiers .h
    └── lib/              bibliothèques écrites par l'équipe
```

{% capture snippet_archi %}## Architecture du firmware

- `src/main.cpp` : boucle principale, lecture capteurs et pilotage moteur
- `lib/capteur_couleur/` : lecture et calibration du capteur TCS3200
- `lib/moteur/` : pilotage du moteur pas à pas via le driver A4988

## Librairies utilisées

- `AccelStepper` : gestion du moteur pas à pas, choisie pour son support natif de l'accélération (déclarée dans `platformio.ini`)

## Compiler et téléverser

1. Dans VSCode, ouvrir le dossier `firmware/mon-robot/` (et non la racine du repo)
2. Brancher la carte en USB
3. Barre du bas : ✓ pour compiler, → pour téléverser
{% endcapture %}
{% include code-snippet.html label="Copier le gabarit d'architecture (Markdown)" content=snippet_archi %}

{% include message.html title="Ouvrez le bon dossier dans VSCode" message="PlatformIO ne détecte le projet que si vous ouvrez le dossier qui contient `platformio.ini` (par exemple `firmware/mon-robot/`), pas la racine du repo. Le dossier `.pio/` (fichiers de compilation) est ignoré par Git : ne le commitez pas. Le dossier `lib/` de votre projet, lui, est bien suivi." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Exercice

Relisez votre code : supprimez les commentaires qui répètent l'évident,
ajoutez-en sur les parties qui vous ont demandé réflexion. Complétez ensuite
`project/firmware/README.md` et rédigez la page `docs/conception/firmware.md`
avec le gabarit ci-dessus.
