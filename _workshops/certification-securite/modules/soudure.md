---
layout: documentation
hide_hero: false
hero_image: soudure.jpg
hero_darken: true
image: soudure.jpg
component_toc: true
doc_header: true

title: Soudure électronique
subtitle: "Niveau 2 : Accompagnée"
description: Brûlure et fumées à maîtriser avant d'utiliser le fer à souder, la station à air chaud ou la plaque chauffante de soudage.
author: Adrien Bracq

hardwares:
  - label: Weller WT 1010
    link: /docs/references/machines/weller-wt-1010/
  - label: Weller WTHA
    link: /docs/references/machines/weller-wtha/
  - label: Plaque chauffante de soudage
    link: /docs/references/machines/plaque-chauffante-soudure/
---

## À qui s'adresse ce module

À tout usager du Campus souhaitant utiliser un fer à souder, une station à air chaud ou une plaque chauffante de soudage du MakerSpace.

Ce sujet peut être abordé dans le cadre de certains cours, mais reste disponible ici pour vous informer et vous former à tout moment, directement avec le responsable MakerSpace.

## Pourquoi ce niveau de vigilance

Les risques classiques d'un poste de soudure (brûlure, fumées) sont modérés **mais réels**. Certains risques ne se manifestent pas tout de suite **mais s'accumulent** avec des **expositions répétées** : c'est le cas par exemple de l'exposition au plomb si des alliages plombés sont utilisés. Le fait de ne rien ressentir sur le moment **ne veut pas dire qu'il n'y a pas de conséquence à long terme** : les consignes s'appliquent même quand rien ne semble se passer.

## Risques identifiés

{% include risk-item.html level="modere" icon="fas fa-temperature-high" title="Brûlure : fer et station à air chaud" content="Le fer à souder chauffe entre 350 et 450 °C, la station à air chaud souffle de l'air chaud à des températures élevées. Ne jamais poser le fer ailleurs que sur son support isolé." %}

{% include risk-item.html level="modere" icon="fas fa-fire-burner" title="Brûlure : plaque chauffante de soudage" content="Sa surface monte jusqu'à 400 °C et ne change pas d'aspect visible en chauffant, contrairement à la panne d'un fer : rien n'indique à l'œil qu'elle est brûlante. Ne jamais poser la main dessus, manipuler les cartes uniquement avec une pince ou un outil, et vérifier qu'elle est éteinte et refroidie avant de la laisser sans surveillance." %}

{% include risk-item.html level="modere" icon="fas fa-smog" title="Fumées de flux et de soudure" content="L'inhalation de ces fumées est irritante, y compris pour une intervention courte. L'aspiration est obligatoire à chaque utilisation, quelle que soit la durée." %}

{% include risk-item.html level="modere" icon="fas fa-biohazard" title="Exposition au plomb, aux flux et aux résidus inconnus (risque cumulatif)" content="Le risque ne se limite pas au plomb : les flux de soudure, et les résidus déjà présents sur une carte (lors d'une réparation par exemple), peuvent aussi être irritants ou toxiques, même si les produits que vous utilisez vous-même sont réputés sans risque. Vous ne pouvez jamais être sûr de ce qui a été utilisé auparavant sur une carte à réparer. C'est un risque à long terme : les effets ne sont pas immédiats mais s'aggravent avec des expositions répétées dans le temps. Se laver les mains après usage, ne jamais manger ou boire au poste de soudure." %}

## EPI et équipements requis

<div class="epi-list">
{% include epi-item.html icon="fas fa-glasses" label="Lunettes de protection" %}
{% include epi-item.html icon="fas fa-fan" label="Aspiration / ventilation obligatoire" %}
</div>

Les lunettes protègent avant tout contre la coupe des pattes de composants après soudure : la pince coupante peut projeter le bout de fil sectionné avec une certaine vitesse. Elles limitent aussi le risque de projection de flux ou d'étain en fusion.

L'aspiration/ventilation des fumées n'est pas une EPI à proprement parler : c'est une protection collective, à activer systématiquement, y compris pour une intervention courte, et en particulier lors d'une réparation où la composition des soudures ou flux déjà en place peut être inconnue.

Une pince ou un outil dédié est nécessaire pour manipuler les cartes sur la plaque chauffante, jamais à mains nues.

## Consignes avant / pendant l'utilisation

<div class="consigne-list">
{% include consigne-item.html type="do" content="Toujours reposer le fer sur son support isolé, jamais ailleurs." %}
{% include consigne-item.html type="do" content="Travailler sous aspiration, systématiquement, y compris pour une intervention courte." %}
{% include consigne-item.html type="do" content="Toujours éteindre les équipements (fer, station à air chaud, plaque chauffante) une fois le travail terminé : ils montent rapidement en température à la mise sous tension, inutile de les laisser allumés pour l'utilisateur suivant." %}
{% include consigne-item.html type="dont" content="Ne pas manger ou boire au poste." %}
{% include consigne-item.html type="dont" content="Ne jamais toucher la surface de la plaque chauffante à mains nues." %}
{% include consigne-item.html type="dont" content="Ne pas garder de liquides (alcool isopropylique, nettoyant flux...) à proximité immédiate du fer, de la station à air chaud ou de la plaque chauffante." %}
</div>

## Conduite à tenir en cas d'incident

{% include message.html title="La règle absolue" message="Quel que soit l'incident, prévenez immédiatement le référent MakerSpace présent : c'est lui qui prend la direction des opérations. Votre sécurité passe avant tout : en cas de doute sur un geste, ne le faites pas, alertez et évacuez plutôt que d'intervenir." status="is-danger" icon="fas fa-triangle-exclamation" %}

**Brûlure :** refroidir immédiatement à l'**eau tempérée** pendant plusieurs minutes. Laissez la victime ajuster elle-même la température de l'eau selon ce qui la soulage : ni glacée, ni chaude.

**Projection oculaire (flux, étain) :** rincer abondamment à l'eau claire pendant au moins 15 minutes, avis médical systématique.
