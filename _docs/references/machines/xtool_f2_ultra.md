---
layout: documentation
hide_hero: false
hero_image: "xtool-f2-ultra.jpg"
hero_darken: true
image: "xtool-f2-ultra.jpg"
component_toc: true
doc_header: true
type: equipment
tag:

title: xTool F2 Ultra
subtitle: Graveuse laser double tête (MOPA 60W + diode 40W)
description: Graveuse laser galvo double tête, MOPA infrarouge 60W pour les métaux et diode bleue 40W pour le bois et la découpe.
author: Adrien Bracq

manufacturer:
  - name: xTool
    link: "https://www.xtool.com/products/xtool-f2-ultra-60w-mopa-40w-diode-dual-laser-engraver"

working_area: 220x220mm (extensible à 500x220mm avec le convoyeur)
materials:
  - name: Métaux (inox, alu, laiton, titane...)
    link: ""
  - name: Bois
    link: ""
  - name: Acrylique
    link: ""
  - name: Cuir
    link: ""
  - name: Verre / céramique
    link: ""
speed: 5
access_level: 1

todo: 50
---

{% include safety-banner.html machine="xTool F2 Ultra" link="/workshops/certification-securite/modules/laser/" %}

## Présentation

Graveuse laser galvo à double tête : laser MOPA infrarouge 60W (gravure
et marquage des métaux) et laser diode bleu 40W (bois, papier, cuir, et
découpe). Autofocus, double caméra pour le positionnement, très grande
vitesse de gravure grâce à la technologie galvo.

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Lasers | MOPA infrarouge 60W + diode bleue 40W |
| Taille du spot | 0,03 x 0,03 mm (MOPA) / 0,09 x 0,1 mm (diode) |
| Zone de travail | 220 x 220 mm (220 x 500 mm avec convoyeur) |
| Hauteur max | 150 mm |
| Vitesse max | 15 000 mm/s |
| Dimensions hors tout | 521 x 429 x 294 mm |
| Poids | 21,6 kg |
| Classe de sécurité laser | Classe 4 |
| Enceinte | Capot orange intégral, arrêt d'urgence |
| Positionnement | Autofocus, double caméra (2 x 48 MP) |
| Connectique | Wi-Fi, USB |
| Logiciel | xTool Creative Space (SVG, DXF, JPG, PNG, BMP) |
| Extraction | Tuyau d'évacuation fourni, extracteur ou purificateur d'air requis |

## Possibilités et limitations

### a. Possibilités

- Marquage et gravure de métaux (inox, alu, laiton, titane, or, argent, cuivre) avec le laser MOPA.
- Gravure et découpe de bois, cuir, carton, acrylique et papier avec le laser diode.
- Grande vitesse de gravure grâce à la technologie galvo (jusqu'à 15 000 mm/s).
- Positionnement assisté par double caméra et autofocus automatique.
- Zone de travail extensible à 220 x 500 mm avec le convoyeur.

### b. Limitations

- Zone de travail native limitée à 220 x 220 mm sans convoyeur.
- Hauteur de pièce limitée à 150 mm.
- Gravure profonde ou couleur sur métal lente (plusieurs dizaines de minutes selon la pièce).
- **PVC strictement interdit**, comme sur toute machine laser : sa découpe dégage du chlore, un gaz toxique.
- Nécessite un extracteur ou un purificateur d'air en fonctionnement : ne pas utiliser sans extraction active.

## Matériaux utilisables

**Laser MOPA (métaux) :** inox, or, argent, cuivre, aluminium, titane, laiton, plaques anodisées.

**Laser diode (non-métaux) :** bois (contreplaqué, tilleul), carton ondulé, cuir, acrylique non transparent, papier, verre/céramique (marquage de surface).

**Interdit :** PVC. Voir les [matériaux autorisés et interdits](/workshops/certification-securite/modules/laser/#matériaux-autorisés-et-interdits) du module Découpe laser pour la liste complète.

## Utilisation au MakerSpace

{% include message.html title="Attention" message="Machine à laser de classe 4 : ne jamais utiliser capot ouvert ou interlock désactivé. Voir les [consignes de sécurité du module Découpe laser](/workshops/certification-securite/modules/laser/) avant toute utilisation." status="is-warning" icon="fas fa-triangle-exclamation" %}

Toujours vérifier que l'extraction (extracteur ou purificateur d'air) fonctionne avant de lancer un job. Comme pour toute machine laser du MakerSpace, aucune découpe ne doit être laissée sans surveillance.

## Ressources

- [Page produit xTool F2 Ultra](https://www.xtool.com/products/xtool-f2-ultra-60w-mopa-40w-diode-dual-laser-engraver)
- [FAQ xTool F2](https://support.xtool.com/article/2818)
- [Module de certification Découpe laser](/workshops/certification-securite/modules/laser/)
