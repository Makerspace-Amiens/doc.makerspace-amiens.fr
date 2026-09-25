---
layout: documentation
hide_hero: false
hero_image: /workshops/stepper-controller-board/hero.png
hero_darken: true
image: /workshops/stepper-controller-board/hero.png
component_toc: true
tag: stepper-controller-board

title: Conception du schéma électronique
subtitle: Dessiner le schéma complet dans KiCad
description: Définissez l'architecture de la carte puis dessinez le schéma électronique complet dans KiCad Eeschema.

time: 3
difficulty: 2

author: Alban Petit
---

{% include step-tuto.html
greyBackground = true
title = "Étape 2.1 : Schéma bloc et architecture"
content="Objectif : Définir l'architecture globale avant de dessiner le schéma.

**Tâches :**

- Dessiner un schéma bloc sur papier : ESP32 au centre, blocs I2C/SPI/GPIO autour
- Lister tous les signaux (STEP, DIR, EN, SDA, SCL, MISO, MOSI, SCK, CS, LIMIT_X_MIN, LIMIT_X_MAX, LIMIT_Y_MIN, LIMIT_Y_MAX)
- Définir les alimentations (3.3V, 5V, 12V/24V, GND communs)
- Identifier les découplages critiques (VDD, VMOT) " %}

{% include message.html
title="Librairie Makerspace Amiens, fortement recommandée"
message="Avant de commencer le schéma, importez la librairie KiCad du Makerspace Amiens. Elle référence les composants disponibles en stock (ESP32, A4988, SSD1306, connecteurs, passifs…) et vous évitera de chercher ou créer des symboles manuellement. Consultez le tutoriel [KiCAD - Importer des librairies](/docs/tutorials/software/kicad/kicad-import-librairies/) avant de démarrer l'étape 2.2."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2.2 : Schéma électronique dans KiCad"
content="Objectif : Dessiner le schéma complet dans KiCad Eeschema.

**Tâches :**

- Créer un nouveau projet KiCad
- Placer les symboles : ESP32, A4988 (×2), SSD1306, socket SD
- Ajouter l'alimentation 5V
- Connecter les alimentations (rails 3.3V, rails 5V et VMOT)
- Ajouter les condensateurs de découplage (100nF + 10µF)
- Ajouter les résistances de pull-up (I2C, SPI)
- Ajouter les connecteurs pour les 2 limit switches
- Annoter tous les composants (désignateurs R1, C1, etc.)

**Livrables :** Fichier KiCad schématique (.kicad_sch) + PDF du schéma dans votre projet machine that draws" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2.3 : Vérification ERC et revue de conception"
content="Objectif : Détecter les erreurs avant le routage.

**Tâches :**

- Lancer l'ERC (Electrical Rules Check) dans KiCad
- Corriger toutes les erreurs (connexions manquantes, conflits)
- Faire relire le schéma par un autre binôme " %}
