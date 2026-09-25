---
layout: documentation
hide_hero: false
hero_image: "2022-09-27-11-20-27.png"
hero_darken: true
image: "2022-09-27-11-20-27.png"
component_toc: true
doc_header: true
type: equipment

title: Weller WT 1010
subtitle: Fer à souder
description: Station de soudage numérique 95W avec fer WTP90, régulation de température automatique de 50 à 450°C.
author: Adrien Bracq

manufacturer:
  - name: Weller
    link: "https://www.weller-tools.com"

access_level: 1

todo: 40
---

{% include safety-banner.html machine="Weller WT 1010" link="/workshops/certification-securite/modules/soudure/" %}

## Présentation

La WT 1010 est une station de soudage numérique antistatique, livrée avec un fer WTP90 et son support de sécurité isolé. La température de la panne est régulée automatiquement en continu, avec un afficheur LCD rétroéclairé pour lire et ajuster la consigne.

Elle est utilisée au MakerSpace pour le soudage et le dessoudage manuel de composants électroniques (traversants et CMS).

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Marque / modèle | Weller WT 1010 (fer WTP90) |
| Alimentation station | 230V AC |
| Puissance station | 95 W |
| Alimentation fer | 24V, 90 W |
| Plage de température | 50 à 450 °C, régulation automatique continue |
| Stabilité de température | ± 2 °C |
| Précision affichée | ± 9 °C |
| Dimensions station | 149 x 138 x 101 mm |
| Poids | 1,9 kg |
| Contenu du kit | Fer WTP90, panne plate 1,6 mm, support isolé, éponge de nettoyage, nettoyeur de panne |
| Fonctions | Mise en veille / arrêt automatique programmable, mise à la masse via jack 3,5 mm |

## Possibilités et limitations

### a. Possibilités

- Soudage et dessoudage de composants traversants et CMS.
- Réglage fin de la température selon l'alliage et le composant (jusqu'à 450 °C).
- Mise en veille automatique pour limiter l'usure de la panne entre deux utilisations.

### b. Limitations

- Un seul canal / un seul fer : pas d'usage simultané à deux pannes différentes sur la même station.
- Pas d'extraction de fumées intégrée : une aspiration externe est obligatoire à chaque utilisation.
- Pannes non fournies au-delà du kit de base : une panne adaptée doit être choisie selon le composant.

## Matériaux utilisables

Alliages de soudure électronique standards (étain-plomb ou sans plomb) sur composants traversants et CMS. Ne pas utiliser pour du brasage fort ou des matériaux hors électronique.

## Notes

Voir les [consignes de sécurité du module Soudure électronique](/workshops/certification-securite/modules/soudure/) avant toute utilisation : toujours reposer le fer sur son support isolé et travailler sous aspiration.
