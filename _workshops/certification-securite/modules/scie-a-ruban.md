---
layout: documentation
hide_hero: false
hero_image: scie-a-ruban.jpg
hero_darken: true
image: scie-a-ruban.jpg
component_toc: true
doc_header: true

title: Scie à ruban
subtitle: Accès très restreint, référents uniquement
description: Coupure, coincement et bris de lame à connaître avant d'utiliser la scie à ruban.
author: Adrien Bracq

hardwares:
  - label: Scie à ruban portable
    link: /docs/references/machines/scie-a-ruban/
---

{% include message.html title="Accès très restreint, sur demande uniquement" message="Contrairement aux autres machines du MakerSpace, la scie à ruban n'est pas en libre accès. Elle est verrouillée par une clé conservée par les référents, et son usage se fait uniquement à leur demande, pour un besoin spécifique, pas en autonomie, même après ce module. Ce module documente les risques et les consignes applicables lorsqu'un référent vous fait utiliser la machine, il ne donne pas accès à la machine par lui-même." status="is-warning" icon="fas fa-key" %}

## À qui s'adresse ce module

À tout usager du Campus amené à utiliser la scie à ruban avec un référent, dans le cadre d'un besoin spécifique identifié par celui-ci.

## Pourquoi ce niveau de vigilance

La lame reste en mouvement en continu, y compris juste après la fin d'une coupe, et un coincement de la pièce ou de la main en fin de course est un accident classique sur ce type de machine. C'est pour cette raison que son usage est réservé aux référents, à la demande.

## Risques identifiés

{% include risk-item.html level="eleve" icon="fas fa-compact-disc" title="Contact avec la lame en mouvement" content="La lame continue de tourner même juste après la fin d'une coupe apparente. Ne jamais approcher les mains de la lame tant qu'elle n'est pas complètement à l'arrêt." %}

{% include risk-item.html level="eleve" icon="fas fa-hand-fist" title="Coincement de la pièce ou de la main" content="En fin de coupe, la pièce ou la chute peuvent basculer et entraîner la main vers la lame. Rester attentif jusqu'à la fin complète de la coupe." %}

{% include risk-item.html level="modere" icon="fas fa-burst" title="Bris de lame" content="Une lame mal tendue, usée ou inadaptée au matériau peut casser en cours de coupe et fouetter. Vérifier l'état et la tension de la lame avant utilisation." %}

{% include risk-item.html level="modere" icon="fas fa-wind" title="Projections" content="Copeaux métalliques projetés pendant la coupe." %}

## EPI et équipements requis

<div class="epi-list">
{% include epi-item.html icon="fas fa-glasses" label="Lunettes de protection" %}
</div>

Les lunettes de protection sont obligatoires. Aucun gant à proximité de la lame en mouvement : même logique que pour les autres machines à outil rotatif : un gant happé se dégage moins facilement qu'une main nue.

## Consignes avant / pendant l'utilisation

<div class="consigne-list">
{% include consigne-item.html type="dont" content="Ne jamais utiliser cette machine sans un référent formé présent." %}
{% include consigne-item.html type="do" content="Fixer solidement la pièce dans l'étau avant de couper." %}
{% include consigne-item.html type="do" content="Vérifier l'état et la tension de la lame avant de démarrer." %}
{% include consigne-item.html type="dont" content="Ne jamais retirer le carter de protection de la lame." %}
{% include consigne-item.html type="dont" content="Ne jamais toucher la lame avant son arrêt complet, même en fin de coupe apparente." %}
{% include consigne-item.html type="do" content="Vérifier que la machine n'est pas signalée en maintenance ou hors service avant de l'utiliser." %}
</div>

## Conduite à tenir en cas d'incident

{% include message.html title="La règle absolue" message="Quel que soit l'incident, prévenez immédiatement le référent MakerSpace présent : c'est lui qui prend la direction des opérations. Votre sécurité passe avant tout : en cas de doute sur un geste, ne le faites pas, alertez et évacuez plutôt que d'intervenir." status="is-danger" icon="fas fa-triangle-exclamation" %}

**Blessure mécanique (coupure, arrachement) :** couper immédiatement la machine, ne pas déplacer la victime si la blessure est grave, premiers secours, alerter le 15 (SAMU) ou le 112 si nécessaire.

**Projection oculaire :** rincer abondamment à l'eau claire pendant au moins 15 minutes, avis médical systématique.
