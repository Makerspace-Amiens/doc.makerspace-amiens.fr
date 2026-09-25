---
layout: documentation
hide_hero: false
hero_image: impression-3d-fdm.jpg
hero_darken: true
image: impression-3d-fdm.jpg
component_toc: true
doc_header: true

title: Impression 3D FDM
subtitle: "Niveau 1 : Autonome"
description: Chaleur, matériaux et supervision minimale à connaître avant d'utiliser une imprimante FDM en autonomie.
author: Adrien Bracq

hardwares:
  - label: Artillery Genius Pro
    link: /docs/references/machines/artillery_genius/
  - label: Artillery Sidewinder X2
    link: /docs/references/machines/artillery_sidewinder_x2/
  - label: Bambulab A1 Mini
    link: /docs/references/machines/bambulab_a1_mini/
  - label: Bambulab P1P
    link: /docs/references/machines/bambulab_p1p/
  - label: Bambulab X1C
    link: /docs/references/machines/bambulab_x1c/
---

## À qui s'adresse ce module

À tout usager du Campus souhaitant utiliser une des imprimantes 3D FDM du MakerSpace en autonomie.

Ce module peut être suivi à l'occasion du cours de 1ère année qui aborde l'impression 3D, mais il s'applique aussi bien à vous si vous ne l'avez pas eu dans ce cadre.

## Pourquoi ce niveau de vigilance

Le risque est globalement faible sur ces machines, mais un accès libre et peu supervisé impose un minimum de rigueur, en particulier sur la chaleur et les matériaux utilisés.

## Risques identifiés

{% include risk-item.html level="modere" icon="fas fa-temperature-high" title="Brûlure" content="La buse chauffe entre 200 et 260 °C selon le matériau, et le plateau peut aussi être chauffant. Ne jamais toucher l'un ou l'autre en cours d'impression." %}

{% include risk-item.html level="modere" icon="fas fa-smog" title="Émissions de particules et composés volatils" content="L'ABS émet davantage de particules ultrafines et de composés volatils que le PLA ou le PETG. C'est la raison pour laquelle l'ABS est réservé aux créneaux encadrés (voir Matériaux autorisés ci-dessous)." %}

{% include risk-item.html level="modere" icon="fas fa-gears" title="Pièces mobiles" content="Axes, courroies, ventilateurs : ne jamais intervenir manuellement sur une machine sous tension." %}

{% include risk-item.html level="eleve" icon="fas fa-fire" title="Incendie" content="Un défaut électrique ou une impression laissée sans aucune possibilité de supervision peut dégénérer. Ne jamais lancer une impression longue sans qu'elle reste supervisable (vous ou une autre personne présente dans l'espace)." %}

## Matériaux autorisés

**En autonomie complète :** PLA, PETG, TPU.

**Tout autre matériau (ABS et autres) :** non utilisable en autonomie. Leur usage est encadré par les référents : demandez avant toute utilisation, afin qu'elle se fasse dans les meilleures conditions (ventilation, réglages adaptés).

## EPI et équipements requis

Aucun EPI spécifique en usage normal. Des gants de protection thermique sont recommandés pour le retrait de pièces chaudes ou le nettoyage de la buse.

## Consignes avant / pendant l'utilisation

<div class="consigne-list">
{% include consigne-item.html type="do" content="Vérifier que le matériau utilisé correspond à ce qui est autorisé en autonomie." %}
{% include consigne-item.html type="dont" content="Ne pas laisser une impression totalement sans possibilité de supervision." %}
{% include consigne-item.html type="dont" content="Ne pas toucher la buse ou le plateau en cours d'impression." %}
{% include consigne-item.html type="dont" content="Ne jamais lancer une impression dans la précipitation, sans prendre le temps de vérifier. Si vous êtes pressé (ex. entre deux cours), mieux vaut ne pas lancer l'impression : la sécurité des personnes et des machines prime." %}
{% include consigne-item.html type="do" content="Vérifier toujours qu'aucune pièce ne se trouve déjà sur le plateau avant de lancer une impression." %}
{% include consigne-item.html type="do" content="Rester à proximité de l'imprimante durant les premières couches, pour vérifier l'absence de souci avant de vous éloigner." %}
{% include consigne-item.html type="do" content="Pour une impression longue, renseignez-vous en fin de journée : sauf cas particulier vu et validé par un référent, les imprimantes ne sont pas laissées en fonctionnement la nuit. Toute impression encore en cours au départ du dernier référent sera coupée." %}
</div>

## Conduite à tenir en cas d'incident

{% include message.html title="La règle absolue" message="Quel que soit l'incident, prévenez immédiatement le référent MakerSpace présent : c'est lui qui prend la direction des opérations. Votre sécurité passe avant tout : en cas de doute sur un geste, ne le faites pas, alertez et évacuez plutôt que d'intervenir." status="is-danger" icon="fas fa-triangle-exclamation" %}

**Brûlure légère :** refroidir immédiatement à l'**eau tempérée** pendant plusieurs minutes, ne jamais percer une cloque. Laissez la victime ajuster elle-même la température de l'eau selon ce qui la soulage : ni glacée, ni chaude.

**Départ de feu :** ne vous approchez jamais d'un foyer d'origine électrique pour couper l'alimentation à la source. Ne coupez l'alimentation que si un interrupteur ou un arrêt d'urgence est accessible sans vous approcher du feu. Sinon, donnez l'alerte (au référent présent et, si besoin, au 18/112) et évacuez calmement. Un extincteur ne s'utilise qu'à distance de sécurité, sur un départ de feu maîtrisable, et seulement si vous savez vous en servir.
