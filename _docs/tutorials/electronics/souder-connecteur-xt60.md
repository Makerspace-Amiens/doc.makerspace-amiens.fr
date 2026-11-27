---
layout: documentation
hide_hero: false
hero_image: hero.jpg
hero_height: is-small
hero_darken: true
image: hero.jpg
component_toc: true
doc_header: true
type: tutorial

title: Souder un connecteur XT60, XT30 ou XT90
subtitle: Câbler un connecteur de puissance proprement, de la découpe du fil à la gaine thermorétractable
description: Dénuder, étamer, souder un fil dans le godet d'un connecteur XT60 (ou XT30, XT90) puis l'isoler avec une gaine thermorétractable.
author: Adrien Bracq

time: 1
difficulty: 2

todo: 90

prerequisites:
  - label: Certification sécurité soudure
    link: /workshops/certification-securite/modules/soudure/
softwares:
  - label: Aucun logiciel requis
    link: ""
hardwares:
  - label: Weller WT 1010
    link: /docs/references/machines/weller-wt-1010/
  - label: Station à air chaud
    link: ""
---

## Objectif

Les connecteurs XT (XT30, XT60, XT90) sont les connecteurs de puissance les plus courants pour relier une batterie LiPo, une alimentation de laboratoire ou un variateur de moteur. Ce tutoriel montre comment souder un fil dans un connecteur XT60, puis l'isoler avec une gaine thermorétractable. La méthode est la même pour un XT30 ou un XT90 : seules la section du fil et la longueur de dénudage changent.

À la fin, le connecteur tient mécaniquement, conduit sans échauffement et ne présente aucune partie métallique nue.

{% include message.html title="Sécurité" message="Le fer à souder et la station à air chaud dépassent 350 °C. Valider le [module soudure de la certification sécurité](/workshops/certification-securite/modules/soudure/) avant de commencer, porter des lunettes de protection et toujours reposer le fer sur son support." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Choisir son connecteur

![Connecteur XT60 femelle](connecteur-xt60.jpg)

Le nombre du nom correspond à peu près au courant de crête accepté. Le courant continu admissible est plus faible :

| Connecteur | Courant continu | Courant de crête | Section de fil conseillée | Dénudage (environ) |
|---|---|---|---|---|
| XT30 | 15 A | 30 A | 1 à 1,5 mm² (16 à 18 AWG) | 4 à 5 mm |
| XT60 | 30 A | 60 A | 2 à 3,3 mm² (12 à 14 AWG) | 6 mm |
| XT90 | 40 A | 90 A | 5 à 8 mm² (8 à 10 AWG) | 8 mm |

Valeurs indicatives : se reporter à la fiche du fabricant (Amass) pour un usage proche des limites.

Deux règles à connaître avant de souder :

- **Polarité** : les signes `+` et `−` sont moulés sur le boîtier. Le fil rouge va sur le `+`, le fil noir sur le `−`. Le boîtier est biseauté d'un côté, ce qui empêche de brancher à l'envers.
- **Mâle ou femelle** : la source d'énergie (batterie, alimentation) reçoit le connecteur **femelle**, dont les contacts sont protégés dans le boîtier. Le connecteur mâle, aux broches apparentes, va du côté de l'appareil alimenté.

## Matériel nécessaire

- un connecteur XT60 (ou XT30, XT90) ;
- du fil souple à isolant silicone, rouge et noir, de section adaptée (voir le tableau) ;
- deux morceaux de gaine thermorétractable, de diamètre un peu supérieur au godet du connecteur ;
- un fer à souder réglable avec une panne large (biseau) et du fil de soudure ;
- une station ou un pistolet à air chaud ;
- une pince coupante et une pince à dénuder ;
- un étau de maintien (ici un Stickvise) ;
- un extracteur de fumées.

{% include image-row.html image_1="pince-coupante-pince-a-denuder.jpg" image_2="cable-silicone-rouge.jpg" %}

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Préparer le poste de soudure"
content="Dégager le tapis de travail et y réunir fils, gaines et connecteur. Allumer l'extracteur de fumées et orienter sa bouche vers la zone de soudure : les fumées de flux sont irritantes."
image="plan-de-travail.jpg"
image_2="poste-soudure.jpg" %}

{% include step-tuto.html
greyBackground=false
title="Étape 2 : Régler le fer à souder"
content="Régler le fer vers **390 °C**. Le godet d'un connecteur XT est une pièce massive qui absorbe beaucoup de chaleur : à température trop basse, la soudure reste pâteuse et le temps de chauffe s'allonge, ce qui fait fondre le plastique du boîtier.

Utiliser une panne large (biseau ou tournevis) plutôt qu'une panne fine : elle transmet plus de chaleur au godet."
image="station-weller-390.jpg" %}

{% include step-tuto.html
greyBackground=true
title="Étape 3 : Couper et dénuder le fil"
content="Couper le fil à la longueur voulue avec la pince coupante.

Régler la butée de la pince à dénuder sur la longueur indiquée dans le tableau (6 mm pour un XT60), insérer le fil jusqu'à la butée et serrer : la pince coupe l'isolant et le retire d'un seul geste. Torsader ensuite légèrement les brins pour qu'aucun ne s'écarte."
image="denudage-pince.jpg"
image_2="denudage-reglage.jpg"
image_3="denudage-resultat.jpg"
image_4="fil-noir-denude.jpg" %}

{% include step-tuto.html
greyBackground=false
title="Étape 4 : Vérifier que le fil entre dans le godet"
content="Présenter le fil dans le godet du connecteur, à froid. La partie dénudée doit remplir le godet sur toute sa profondeur, et l'isolant arriver au bord du godet.

Si des cuivres dépassent, recouper le fil plus court. S'il manque du cuivre, dénuder un peu plus. Si le fil n'entre pas, la section est trop forte pour ce connecteur."
image="essai-fil-dans-godet.jpg" %}

{% include step-tuto.html
greyBackground=true
title="Étape 5 : Enfiler la gaine thermorétractable"
content="Couper un morceau de gaine assez long pour couvrir tout le godet plus quelques millimètres d'isolant (environ 2 cm pour un XT60), et **l'enfiler sur le fil maintenant**, loin de l'extrémité pour que la chaleur du fer ne la rétracte pas.

Une fois le fil soudé, il n'est plus possible de l'ajouter : c'est l'oubli le plus fréquent."
image="gaine-enfilee.jpg"
image_2="gaines-thermoretractables.jpg" %}

{% include step-tuto.html
greyBackground=false
title="Étape 6 : Étamer le fil"
content="Poser la panne sous l'extrémité dénudée et apporter le fil de soudure de l'autre côté, sur le cuivre et non sur la panne. La soudure doit fondre au contact du fil et s'infiltrer entre les brins.

Le fil est bien étamé quand il est brillant et uniformément argenté, sans goutte en bout. Il devient rigide et entrera plus facilement dans le godet."
image="etamage-fil.jpg"
image_2="fil-etame.jpg"
image_3="fil-etame-gros-plan.jpg" %}

{% include step-tuto.html
greyBackground=true
title="Étape 7 : Maintenir le connecteur"
content="Serrer le connecteur dans l'étau, godets vers le haut, pour avoir les deux mains libres.

Astuce : brancher un connecteur de l'autre genre sur celui à souder. Si le plastique ramollit sous la chaleur, les broches restent alignées et le connecteur s'emboîtera toujours."
image="connecteur-dans-etau.jpg" %}

{% include step-tuto.html
greyBackground=false
title="Étape 8 : Remplir le godet de soudure"
content="Chauffer le godet avec la panne posée contre sa paroi extérieure et y faire fondre du fil de soudure jusqu'à le remplir aux trois quarts environ. La soudure doit mouiller toute la paroi intérieure et former une surface lisse et brillante."
image="godet-rempli.jpg" %}

{% include step-tuto.html
greyBackground=true
title="Étape 9 : Souder le fil"
content="Garder la panne contre le godet pour refondre la soudure, puis enfoncer le fil étamé jusqu'au fond. Retirer le fer et **tenir le fil immobile** quelques secondes, jusqu'à ce que la soudure se fige : un fil qui bouge pendant le refroidissement donne une soudure terne et fragile.

Contrôler : soudure brillante qui remplit le godet, aucun brin qui dépasse, isolant ni fondu ni remonté. Recommencer les étapes 3 à 9 pour le second fil, en respectant la polarité."
image="fil-soude.jpg"
image_2="fil-soude-3.jpg" %}

{% include step-tuto.html
greyBackground=false
title="Étape 10 : Placer la gaine"
content="Une fois le godet refroidi, faire glisser la gaine jusqu'au boîtier du connecteur. Elle doit recouvrir tout le métal du godet et quelques millimètres de l'isolant du fil."
image="gaine-en-place.jpg" %}

{% include step-tuto.html
greyBackground=true
title="Étape 11 : Régler la station à air chaud"
content="Allumer la station à air chaud et régler une température modérée, autour de **200 °C**, avec un débit d'air moyen. La gaine se rétracte bien en dessous de cette température ; une consigne plus haute risque de faire fondre le boîtier en nylon du connecteur."
image="station-air-chaud-reglage.jpg"
image_2="station-air-chaud.jpg" %}

{% include step-tuto.html
greyBackground=false
title="Étape 12 : Rétracter la gaine"
content="Diriger l'air chaud sur la gaine à quelques centimètres de distance, en tournant autour du fil. La gaine se resserre et épouse la forme du godet en quelques secondes. Arrêter dès qu'elle est bien plaquée : insister ne la serre pas davantage et abîme le connecteur.

Reposer le crayon à air chaud sur son support et laisser refroidir avant de manipuler."
image="chauffe-gaine.jpg"
image_2="chauffe-gaine-3.jpg" %}

## Résultat attendu

![Connecteur XT60 soudé et isolé](hero.jpg)

Le fil sort droit du connecteur, la gaine couvre tout le métal et aucune trace de plastique fondu n'est visible. Avant de brancher une batterie, vérifier :

- **la tenue mécanique** : tirer fermement sur chaque fil, il ne doit pas bouger ;
- **l'absence de court-circuit** : au multimètre en mode continuité, les deux broches du connecteur ne doivent pas être reliées ;
- **la polarité** : le fil rouge arrive bien sur le `+`, le noir sur le `−`.

---

Photos : Adrien Bracq, MakerSpace UniLaSalle Amiens.
{: .is-size-7 .has-text-grey }
