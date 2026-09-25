---
layout: documentation
hide_hero: false
hero_image: "2022-09-27-11-23-00.png"
hero_darken: true
image: "2022-09-27-11-23-00.png"
component_toc: true
doc_header: true
type: equipment

title: Weller WTHA
subtitle: Station à air chaud
description: Station de reprise à air chaud 900W, régulation de température de 50 à 600°C, pour le dessoudage de composants CMS.
author: Adrien Bracq

manufacturer:
  - name: Weller
    link: "https://www.weller-tools.com"

access_level: 1

todo: 40
---

{% include safety-banner.html machine="Weller WTHA" link="/workshops/certification-securite/modules/soudure/" %}

## Présentation

La WTHA est une station de reprise à air chaud, utilisée pour dessouder et souder des composants CMS (dessouder un circuit intégré, réparer une carte) sans contact direct entre une panne et le composant. L'air soufflé par le crayon à air chaud est chauffé et régulé numériquement, avec plusieurs profils de température programmables.

Elle est utilisée au MakerSpace en complément du fer à souder [Weller WT 1010](/docs/references/machines/weller-wt-1010/), pour les opérations que la panne ne permet pas de réaliser proprement (dessoudage de composants multi-pattes, retrait de colle thermofusible, thermorétraction).

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Marque / modèle | Weller WTHA 1 |
| Alimentation | 230V AC (900 W) |
| Plage de température | 50 à 600 °C |
| Précision de température | ± 30 °C |
| Débit d'air | 5 à 110 L/min selon température |
| Dimensions | 210 x 160 x 125 mm |
| Fonctions | Écran LCD multifonction, 5 profils de température préréglés, conception antistatique (ESD-safe) |
| Buses compatibles | Série Weller TNR |

## Possibilités et limitations

### a. Possibilités

- Dessoudage de composants CMS multi-pattes (circuits intégrés, connecteurs) sans surchauffer la carte au fer.
- Réparation de cartes électroniques existantes.
- Thermorétraction de gaine et retrait de colle thermofusible en petite quantité.
- Profils de température préréglés pour reproduire un réglage rapidement.

### b. Limitations

- Pas adaptée au soudage fin traversant ou CMS pas-fin : utiliser plutôt le [fer Weller WT 1010](/docs/references/machines/weller-wt-1010/).
- Zone chauffée large et diffuse : risque d'endommager les composants voisins si mal maîtrisée.
- Pas d'extraction de fumées intégrée : une aspiration externe est obligatoire à chaque utilisation.

## Matériaux utilisables

Alliages de soudure électronique standards (étain-plomb ou sans plomb) sur composants CMS. Ne pas utiliser sur des matériaux ou colles dont la composition est inconnue sans validation d'un référent.

## Notes

Voir les [consignes de sécurité du module Soudure électronique](/workshops/certification-securite/modules/soudure/) avant toute utilisation : l'air soufflé atteint des températures élevées et l'aspiration des fumées est obligatoire.
