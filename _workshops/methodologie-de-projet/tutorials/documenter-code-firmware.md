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
  - label: Avoir du code à documenter (Arduino, Python, etc.)
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
// pour lisser le bruit de lecture (voir tests, doc/etudes.md)
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

## Documenter l'architecture

Une page (dans `docs/`, ou un `README.md` dans le dossier du code) qui
répond à : comment le code est organisé en fichiers/modules, quelles
librairies utilisées et pourquoi (lien avec
[Tracer ses choix techniques](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/)),
et comment flasher/lancer le tout.

{% capture snippet_archi %}## Architecture du firmware

- `main.ino` : boucle principale, lecture capteurs et pilotage moteur
- `capteur_couleur.h/.cpp` : lecture et calibration du capteur TCS3200
- `moteur.h/.cpp` : pilotage du moteur pas à pas via le driver A4988

## Librairies utilisées

- `AccelStepper` : gestion du moteur pas à pas, choisie pour son support natif de l'accélération

## Flasher le firmware

1. Ouvrir `main.ino` dans l'IDE Arduino
2. Sélectionner la carte : ...
3. Téléverser
{% endcapture %}
{% include code-snippet.html label="Copier le gabarit d'architecture (Markdown)" content=snippet_archi %}

## Exercice

Relisez votre code : supprimez les commentaires qui répètent l'évident,
ajoutez-en sur les parties qui vous ont demandé réflexion. Rédigez ensuite
une courte page d'architecture avec le gabarit ci-dessus.
