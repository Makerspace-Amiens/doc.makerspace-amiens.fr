---
layout: documentation
hide_hero: false
hero_image: thermoformage.jpg
hero_darken: true
image: thermoformage.jpg
component_toc: true
doc_header: true

title: Thermoformage
subtitle: "Niveau 2 : Accompagnée"
description: Brûlure et coincement à connaître avant d'utiliser une thermoformeuse ou une thermo-plieuse plastique.
author: Adrien Bracq

hardwares:
  - label: Thermoform 400
    link: /docs/references/machines/plastiform400/
  - label: Mayku
    link: /docs/references/machines/mayku/
  - label: Presse à insert
    link: /docs/references/machines/presse-a-insert/
---

## À qui s'adresse ce module

À tout usager du Campus souhaitant utiliser une thermoformeuse, une thermo-plieuse plastique ou une presse à insert thermique du MakerSpace, des machines à usage régulier au sein de l'espace.

## Pourquoi ce niveau de vigilance

Ces machines chauffent des plastiques à des températures élevées et impliquent une manipulation manuelle proche de surfaces chaudes : la Thermoform 400 chauffe une ligne sur la feuille, que l'on plie ensuite à la main juste après (la mise en forme précise se fait le cas échéant sur une autre machine) ; la Mayku forme la feuille sous vide sur un moule, après l'avoir chauffée sous un élément chauffant ; la presse à insert utilise un fer chauffant (jusqu'à 500 °C, plus chaud que les deux autres) pour sceller des inserts filetés dans une pièce imprimée en 3D.

## Risques identifiés

{% include risk-item.html level="modere" icon="fas fa-temperature-high" title="Brûlure" content="Le plastique chauffé, l'élément chauffant de la Thermoform 400 et, sur la Mayku, l'élément chauffant placé au-dessus de la feuille peuvent provoquer des brûlures au contact. Sur la Thermoform 400 en particulier, le pliage se fait à la main juste après la chauffe : les mains travaillent à proximité immédiate de l'élément chauffant. Le fer de la presse à insert monte jusqu'à 500 °C : la panne reste chauffante même à l'arrêt, le temps de refroidir." %}

{% include risk-item.html level="modere" icon="fas fa-hand-fist" title="Pincement / coincement (Mayku)" content="Le mouvement de l'élément chauffant et du cadre de la Mayku présente un risque de coincement des mains ou des doigts pendant le cycle de formage." %}

{% include risk-item.html level="modere" icon="fas fa-smog" title="Émanations" content="Certains plastiques dégagent des vapeurs en chauffant : se limiter aux plastiques compatibles indiqués pour la machine utilisée." %}

## EPI et équipements requis

<div class="epi-list">
{% include epi-item.html icon="fas fa-mitten" label="Gants anti-chaleur" %}
{% include epi-item.html icon="fas fa-glasses" label="Lunettes de protection" %}
</div>

Les gants anti-chaleur sont obligatoires pour toute manipulation de la feuille ou de la pièce juste après formage. Les lunettes sont recommandées, en particulier lors de la manipulation de l'élément chauffant.

## Consignes avant / pendant l'utilisation

<div class="consigne-list">
{% include consigne-item.html type="do" content="Vérifier que le plastique utilisé est compatible avec la machine utilisée." %}
{% include consigne-item.html type="do" content="Vérifier que la machine n'est pas signalée en maintenance ou hors service avant de l'utiliser." %}
{% include consigne-item.html type="do" content="Laisser refroidir la pièce dans une zone dédiée avant toute manipulation." %}
{% include consigne-item.html type="dont" content="Ne pas toucher l'élément chauffant, avant, pendant ou juste après son utilisation." %}
{% include consigne-item.html type="do" content="Débrancher systématiquement l'équipement dès la fin de votre utilisation personnelle, pas seulement en fin de session. Ne comptez pas sur l'utilisateur suivant, ou sur la fin du créneau, pour le faire." %}
</div>

## Conduite à tenir en cas d'incident

{% include message.html title="La règle absolue" message="Quel que soit l'incident, prévenez immédiatement le référent MakerSpace présent : c'est lui qui prend la direction des opérations. Votre sécurité passe avant tout : en cas de doute sur un geste, ne le faites pas, alertez et évacuez plutôt que d'intervenir." status="is-danger" icon="fas fa-triangle-exclamation" %}

**Brûlure :** refroidir immédiatement à l'**eau tempérée** pendant plusieurs minutes, ne jamais percer une cloque. Laissez la victime ajuster elle-même la température de l'eau selon ce qui la soulage : ni glacée, ni chaude.

**Coincement / pincement :** dégager la zone immédiatement en coupant la machine si nécessaire, évaluer la blessure, premiers secours si besoin.
