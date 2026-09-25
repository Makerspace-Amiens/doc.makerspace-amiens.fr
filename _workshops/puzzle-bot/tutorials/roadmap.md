---
layout: documentation
hide_hero: false
hero_image: matches_0_1weight.png
hero_darken: true
image: matches_0_1weight.png
component_toc: true
doc_header: true
type: tuto

title: Roadmap technique
subtitle: Proposition de séquençage technique du projet
description: Cette page détaille les différentes étapes pour réaliser votre projet

time: 1
difficulty: 1

todo: 80
---

## Introduction – Vision et manipulation du puzzle

L’objectif de cette partie du projet est de concevoir un **système robotique** capable de **percevoir**, **localiser**, **orienter** et **manipuler** des pièces de puzzle, en s’appuyant sur une montée **progressive en complexité**.
Plutôt que de viser immédiatement un cas réaliste et complexe, le travail proposé repose sur une **démarche itérative**, où chaque étape valide une brique technique essentielle du système.

La progression est volontairement découpée afin d’introduire **une seule difficulté nouvelle à la fois**. Chaque étape doit faire l’objet d’une **validation expérimentale** avant de passer à la suivante. Cette approche permet de mieux identifier les sources d’erreurs, de consolider les acquis et de garantir un système fonctionnel à tout moment.

Il est tout à fait acceptable, et parfois recommandé, de s’arrêter à un niveau intermédiaire pleinement opérationnel, à condition que celui-ci soit **robuste**, **maîtrisé** et **correctement documenté**. La qualité de la démarche et la compréhension du système priment sur la complexité finale.

{% include message.html
title="Information"
message="N'oubliez pas de prendre des photos et de documenter chaque étape au fur et à mesure sur votre site de documentation."
status="is-info"
dismissable="false"
icon="fas fa-exclamation-triangle"
%}

---

{% include step-tuto.html image="etape-01.png" greyBackground = false
title = "Étape 1 : Puzzle simple – position et orientation connues"
content="Commencez par un **puzzle très simple** composé de **4 à 6 pièces carrées**, sans formes complexes ni encoches.

Hypothèses :

- La **position** de chaque pièce est connue à l’avance
- L’**orientation** de chaque pièce est connue

Objectifs :

- Valider la **chaîne robotique complète** (prise, déplacement, dépose)
- Définir un **repère commun** (table, robot, monde)
- Tester la **précision mécanique** et la répétabilité

Aucune fonction de vision complexe n’est nécessaire à ce stade. Cette étape permet de vérifier que le robot sait assembler un puzzle dans des conditions idéales."
%}

{% include step-tuto.html image="etape-02.png" greyBackground = false
title = "Étape 2 : Puzzle simple – orientation variable"
content="Les pièces sont toujours placées à des **positions connues**, mais leur **orientation est désormais variable**.

Hypothèses :

- La position est connue
- L’orientation doit être prise en compte

Objectifs :

- Introduire la **notion de rotation**
- Adapter la **prise et la pose** en fonction de l’orientation
- Tester les premières méthodes d’estimation d’angle (libres)

Cette étape ajoute une difficulté ciblée sans remettre en cause la structure globale du système."
%}

{% include step-tuto.html image="etape-03.png" greyBackground = false
title = "Étape 3 : Détection des pièces avec marqueurs ArUco"
content="Chaque pièce est équipée d’un **marqueur ArUco** permettant au robot de connaître sa **position** et son **orientation**.

Hypothèses :

- Les positions initiales des pièces ne sont plus connues
- La vision fournit les informations spatiales

Objectifs :

- Détecter les marqueurs ArUco
- Extraire la **position (x, y)** et l’**orientation (θ)**
- Mettre en place la transformation **repère caméra → repère robot**

À l’issue de cette étape, le robot sait **où sont les pièces**, **comment elles sont orientées** et peut planifier leur manipulation."
%}

{% include step-tuto.html image="etape-04.png" greyBackground = false
title = "Étape 4 : Assemblage du puzzle guidé par la vision"
content="Le puzzle possède une **solution connue** et le robot utilise la vision pour guider l’assemblage.

Objectifs :

- Enchaîner détection → prise → pose
- Gérer les **erreurs** de positionnement et l'emboitement correct des pièces
- Tester la **robustesse** et la répétabilité du système

Cette étape vise à fiabiliser l’ensemble de la chaîne vision–manipulation dans un scénario maîtrisé."
%}

{% include step-tuto.html image="etape-05.png" greyBackground = false
title = "Étape 5 : Extensions et montée en complexité"
content="Une fois le système fonctionnel, plusieurs évolutions sont possibles selon l’ambition du groupe :

- **Suppression des marqueurs ArUco** et détection basée sur la forme ou la couleur
- Utilisation de **pièces de puzzle plus complexes** (encoches, formes non convexes)
- Introduction d’**incertitudes partielles** (position ou orientation inconnue)

Ces extensions permettent de tester la **précision**, la **robustesse** et les limites du système développé."
%}

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Trouvez d'autres tutoriels en lien avec le projet"
  type="tuto"
%}
