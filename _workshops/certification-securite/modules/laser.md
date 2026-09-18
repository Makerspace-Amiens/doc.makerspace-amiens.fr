---
layout: documentation
hide_hero: false
hero_image: laser.jpg
hero_darken: true
image: laser.jpg
component_toc: true
doc_header: true

title: Découpe laser
subtitle: "Niveau 3 : Accompagnée"
description: Incendie, fumées et rayonnement laser à maîtriser avant d'utiliser une découpeuse/graveuse laser du MakerSpace.
author: Adrien Bracq

hardwares:
  - label: Laserbox
    link: /docs/references/machines/laserbox/
  - label: xTool P3
    link: /docs/references/machines/xtool-p3/
  - label: xTool F2 Ultra
    link: /docs/references/machines/xtool_f2_ultra/
---

## À qui s'adresse ce module

À tout usager du Campus souhaitant utiliser une des machines laser du MakerSpace (Laserbox, xTool P3, xTool F2 Ultra), seul ou non. Ce module est obligatoire : personne n'utilise le laser sans être passé par ce module au préalable, quelle que soit son expérience par ailleurs.

Ce module peut être suivi à l'occasion du cours de 1ère année qui aborde la découpe laser, mais il s'applique aussi bien à vous si vous ne l'avez pas eu dans ce cadre, si vous avez changé de filière, ou si vous voulez simplement vous rafraîchir la mémoire, à tout moment de votre scolarité.

## Pourquoi ce niveau de vigilance

Une machine laser concentre trois risques sérieux en même temps : l'incendie (le laser peut enflammer la matière découpée), les fumées de découpe, et le rayonnement laser lui-même. Une découpe laissée sans surveillance ou un mauvais choix de matériau suffisent à créer un incident sérieux, pas juste un désagrément.

## Risques identifiés

{% include risk-item.html level="eleve" icon="fas fa-fire" title="Incendie pendant la découpe" content="Certains matériaux s'enflamment sous le faisceau, en particulier si la puissance est mal réglée ou si la découpe est laissée sans surveillance. C'est le risque numéro un sur ce type de machine, et la cause la plus fréquente d'incident sur ce type d'équipement en FabLab." %}

{% include risk-item.html level="modere" icon="fas fa-smog" title="Fumées et particules de découpe" content="Même avec une extraction en fonctionnement, la découpe génère des fumées qui peuvent être irritantes, voire toxiques selon le matériau découpé." %}

{% include risk-item.html level="eleve" icon="fas fa-radiation" title="Rayonnement laser" content="Le capot est fermé par sécurité en usage normal. Un capot ouvert en fonctionnement, ou un système de verrouillage (interlock) défaillant, expose les yeux et la peau au faisceau." %}

{% include risk-item.html level="modere" icon="fas fa-temperature-high" title="Brûlure au contact de la zone de découpe" content="La pièce et le plateau de découpe restent chauds juste après la fin d'un job : ne pas manipuler immédiatement." %}

## Matériaux autorisés et interdits

**Autorisés (sous réserve de vérification) :** bois (contreplaqué), papier, carton, acrylique.

Le MakerSpace met à disposition des matériaux adaptés aux machines laser : privilégiez le stock fourni.

**Strictement interdit : le PVC.** Sa découpe au laser dégage du chlore, un gaz toxique : sous aucun prétexte, même en petite quantité, même « juste pour tester ».

D'autres matériaux sont proscrits sur certaines machines spécifiques (ABS, polycarbonate, mousses, HDPE, fibres de carbone enduites…) : reportez-vous à la fiche technique de la machine que vous utilisez pour la liste complète.

**Matériau inconnu ou doute :** on ne découpe pas, on demande avant. Tout matériau extérieur au stock du MakerSpace doit systématiquement être validé par un référent avant d'être découpé.

## EPI et équipements requis

Aucun équipement de protection individuelle n'est nécessaire en usage normal, capot fermé et interlock fonctionnel. En revanche, avant de lancer une découpe, il faut savoir où se trouve l'extincteur adapté (CO2 ou poudre) le plus proche : ce n'est pas optionnel.

## Consignes avant utilisation

<div class="consigne-list">
{% include consigne-item.html type="do" content="Vérifier que le matériau figure bien dans la liste des matériaux autorisés." %}
{% include consigne-item.html type="do" content="Vérifier que la zone de découpe est dégagée de tout objet inutile." %}
{% include consigne-item.html type="do" content="Vérifier que l'extraction fonctionne." %}
{% include consigne-item.html type="do" content="Repérer l'extincteur le plus proche avant de lancer le job." %}
{% include consigne-item.html type="do" content="Vérifier que la machine n'est pas signalée en maintenance ou hors service avant de l'utiliser." %}
</div>

## Consignes pendant l'utilisation

<div class="consigne-list">
{% include consigne-item.html type="dont" content="Ne jamais laisser la découpe sans surveillance, même quelques minutes : c'est la règle la plus importante de ce module." %}
{% include consigne-item.html type="dont" content="Ne jamais ouvrir le capot en cours de découpe." %}
{% include consigne-item.html type="do" content="Rester juste à côté de la machine pendant toute la découpe, prêt à intervenir immédiatement si un départ de flamme apparaît : pas dans la pièce à côté, pas sur un autre poste." %}
{% include consigne-item.html type="do" content="Faites attention à la durée de découpe avant de lancer un job. Si elle est très longue, demandez l'avis d'un référent avant de lancer : la surveillance permanente doit rester possible sur toute la durée." %}
</div>

## Conduite à tenir en cas d'incident

{% include message.html title="La règle absolue" message="Quel que soit l'incident, prévenez immédiatement le référent MakerSpace présent : c'est lui qui prend la direction des opérations. Votre sécurité passe avant tout : en cas de doute sur un geste, ne le faites pas, alertez et évacuez plutôt que d'intervenir." status="is-danger" icon="fas fa-triangle-exclamation" %}

**Brûlure :** refroidir immédiatement à l'**eau tempérée** pendant plusieurs minutes, ne jamais percer une cloque. Laissez la victime ajuster elle-même la température de l'eau selon ce qui la soulage : ni glacée, ni chaude.

**Départ de feu maîtrisable :** couper l'alimentation de la machine si c'est possible sans danger, utiliser l'extincteur repéré en amont.

**Feu qui prend de l'ampleur :** évacuer, donner l'alerte, appeler les pompiers (18 ou 112). Ne jamais essayer de maîtriser un feu qui dépasse la taille de la pièce découpée : mieux vaut perdre une pièce que se blesser.

**Fumées importantes :** couper la machine, aérer, évacuer la zone si nécessaire.
