---
layout: documentation
hide_hero: false
doc_header: false
component_toc: true
hero_image: isocontours.png
hero_darken: true
image: isocontours.png
title: Informations sur le projet
subtitle: Tout ce que vous devez savoir
tags: medieval-challenge
---

{% include message.html title="Attention" message="Cette page peut évoluer, pensez à la consulter régulièrement
**V2.0 24/09/2026**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

## À propos du projet

Le **Medieval Challenge** est un projet à réaliser en **binôme**, dont l'objectif est de **concevoir** et **fabriquer** une **catapulte miniature** en utilisant les ressources du **MakerSpace**.

Ce projet vous permettra d'expérimenter la **CAO**, la **découpe laser** et l'**impression 3D**, tout en découvrant le fonctionnement du lieu et de ses équipements.

L'expérience se conclut par un **tournoi** où chaque catapulte devra démontrer ses capacités !

## Organisation du projet

Le projet se déroule sur 6 séances réparties en trois étapes :

- **Séances de projet (5 séances = 15h)**
  - Conception, prototypage et fabrication de la catapulte.
  - Ajustements et validation des prototypes.

- **Séance finale (1 séance = 3h)**
  - Tournoi et évaluation des catapultes lors de l'épreuve.

## Objectifs

- **Utiliser la CAO** pour concevoir des pièces simples.
- **Exporter et préparer des fichiers** pour la découpe laser et l'impression 3D.
- **Concevoir et assembler** un dispositif mécanique répondant à un cahier des charges.
- **Découvrir** le fonctionnement et les règles du **MakerSpace**.
- **Tester et comparer** les conceptions lors d'un tournoi.

## Équipe du projet

{% include step-tuto.html
greyBackground = false
title = "Binômes libres"
content="
Chaque binôme conçoit, prototype, fabrique et teste une catapulte. Même si le travail se fait en équipe, **chaque étudiant doit obligatoirement avoir manipulé et compris comment réaliser une impression 3D et une découpe laser** afin de valider sa progression individuelle. "
image="team.png" %}

## Cahier des charges

{% include step-tuto.html
greyBackground = false
title = "Dimensions"
content="La base de la catapulte doit suivre le **plan standard ci-dessous**.
Il s'agit d'une planche en bois que vous devrez découper au laser, de **5 mm d'épaisseur** et ayant pour **dimensions 170 × 170 mm**.
Une **marge de 1 cm tout autour** est **réservée et non modifiable**, afin d'assurer la compatibilité avec le **système de fixation au plateau de jeu**.
La machine devra, en position chargée, tenir intégralement dans un cube de **200 × 200 × 200 mm**."
image="dimensions.png"
image_2="base.png" %}

{% include message.html title="Attention" message="La base s'insère dans un **support fixé à la table** de robotique. Ce support est composé d'un **rail** : pensez à prendre en compte dans votre design le **recouvrement du rail** sur la marge.
Notez également qu'un espace de **10 mm** est disponible **sous la base** (par exemple pour loger des têtes de vis, écrous, ou autres éléments de fixation)." status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

![Support de base](Base%20Support.png)

{% include step-tuto.html
greyBackground = false
title = "Source d'énergie"
content="Un **élastique ou un ressort sera fourni** et peut être utilisé comme source d'énergie.
Seules les énergies mécaniques issues de la **déformation élastique des matériaux** et de la **gravité** sont autorisées.
Toute autre source d'énergie (électricité, air comprimé, combustion, etc.) est interdite.
Le tir doit être déclenché par une **corde de 50 cm** actionnée manuellement."
image="energy.png" %}

{% include step-tuto.html
greyBackground = false
title = "Fabrication"
content="Seuls les **procédés de fabrication numérique disponibles au MakerSpace** sont autorisés.
La **visserie** est autorisée.
Toute autre technique de fabrication est interdite."
image="make.png" %}

{% include step-tuto.html
greyBackground = false
title = "Exigences d'assemblage"
content="Toutes les pièces doivent être fixées de manière à éviter tout jeu excessif ou pièce instable.
L'ensemble des pièces doit être **conçu en CAO** (pas d'assemblage improvisé avec du scotch ou de la colle chaude... par exemple).
Les mécanismes doivent pivoter autour d'**axes définis et rigides**.
**Aucune pièce ni projectile ne doit pouvoir être éjecté de manière imprévue.**"
image="documentation.png" %}

{% include step-tuto.html
greyBackground = false
title = "Sécurité et projectiles"
content="Les tirs doivent être **pré-validés par un encadrant** et s'effectuer uniquement en direction de la **zone de lancement prévue**.
Les matériaux utilisés ne doivent pas présenter d'**arêtes vives** pouvant **blesser l'utilisateur**.
Seules les **balles en mousse Nerf Rival fournies** sont autorisées comme projectiles."
image="safety.png" %}

![Balles autorisées](image.png)

{% include message.html title="Attention" message="Tout **manquement à ces règles de sécurité** pourra faire l'objet d'un **renvoi du cours** et d'un **retrait de points**." status="is-warning" icon="fas fa-exclamation-triangle" %}

Ce règlement est conçu pour que chacun·e apprécie pleinement ce projet. Chaque règle existe parce que quelqu'un, un jour, a eu un comportement inapproprié, rendant sa création indispensable. **Ne soyez pas cette personne.**

Finalement, soyez sympas les uns envers les autres : **ce projet doit rester un jeu !**

## Attendus académiques

{% include step-tuto.html
greyBackground = false
title = "Livrables"
content="

- Une catapulte fonctionnelle conforme au présent cahier des charges.
- Une **documentation en ligne** du projet.
- L'ensemble des **prototypes intermédiaires** réalisés pendant le projet.
- Les fichiers de fabrication et la modélisation **CAO sous OnShape**."
image="render.png" %}
