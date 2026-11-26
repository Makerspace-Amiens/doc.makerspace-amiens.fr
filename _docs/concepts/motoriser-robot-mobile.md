---
layout: documentation
hide_hero: true
hero_image: chaine-de-motorisation.svg
hero_darken: false
image: chaine-de-motorisation.svg
component_toc: true
doc_header: true
type: concept

title: Motoriser un robot mobile
subtitle: Les principales familles de moteurs et comment choisir
description: Ce qu'on attend d'un moteur de robot mobile, la chaîne de motorisation, les principales familles de moteurs (courant continu, pas à pas, brushless, servomoteur intelligent), le rôle du réducteur et les critères de choix.
author: Adrien Bracq

difficulty: 1
todo: 80

prerequisites:
  - label: Qu'est-ce qu'un robot mobile à roues ?
    link: /docs/concepts/robot-mobile-a-roues/
---

## Ce qu'on attend d'un moteur de robot mobile

Les moteurs sont la partie **Agir** du robot : ils transforment l'énergie de la batterie en rotation des roues. Pour un robot mobile, un moteur doit fournir :

- assez de **couple** pour démarrer, accélérer, monter une pente ou pousser un objet ;
- assez de **vitesse** pour que le robot se déplace au rythme voulu ;
- une **précision** suffisante pour que le robot aille là où on le lui demande ;
- tout cela avec une **masse**, un **encombrement** et une **consommation** compatibles avec le robot et sa batterie.

**Objectifs de ce concept :**

- relier la vitesse et l'effort du robot à la vitesse et au couple de ses moteurs ;
- décrire la chaîne de motorisation, de la batterie à la roue ;
- connaître les principales familles de moteurs, avec leurs avantages et leurs limites ;
- comprendre le rôle d'un réducteur ;
- savoir quelles questions se poser pour choisir une motorisation.

## De la roue au moteur

Une roue de rayon $r$ qui tourne à la vitesse angulaire $\omega$ (en radians par seconde) fait avancer le robot à la vitesse :

$$v = \omega \cdot r$$

Pour pousser le robot avec une force $F$, le moteur doit fournir sur la roue un **couple** :

$$C = F \cdot r$$

Le couple s'exprime en newtons-mètres (N·m). Plus la roue est grande, plus le robot va vite pour une même vitesse de rotation, mais plus il faut de couple pour une même force : le diamètre des roues est déjà un compromis.

### Ce que la force doit vaincre

La force de traction $F$ que les roues doivent fournir additionne trois termes :

$$F = \underbrace{m\,a}_{\text{accélérer}} + \underbrace{m\,g\,\sin\theta}_{\text{monter la pente}} + \underbrace{C_{rr}\,m\,g\,\cos\theta}_{\text{rouler}}$$

- $m$ est la masse du robot, $a$ son accélération, $g = 9{,}81$ m/s² ;
- $\theta$ est l'angle de la pente la plus raide à gravir ;
- $C_{rr}$ est le **coefficient de résistance au roulement** : une roue qui roule se déforme un peu et freine le robot, même sur le plat (de 0,01 pour une roue dure sur sol dur à 0,05 pour une roue souple ou sur moquette).

On se place dans le **pire cas** : le robot accélère au maximum en montant la pente. Cette force se répartit ensuite sur les $n$ roues motrices.

### La marge : un coefficient de sécurité

Le calcul ne connaît ni les bosses, ni les chocs, ni l'objet à pousser, ni le robot adverse qui bloque le passage. Un moteur dimensionné au plus juste cale (courant continu) ou décroche (pas à pas) au moindre imprévu. On multiplie donc le couple par un **coefficient de sécurité**, souvent **2**.

La pente, elle, reste la pente **réelle** : 0° sur une table plate. Les imprévus sont l'affaire du coefficient de sécurité.

### Exemple

Un robot de 3 kg, avec deux roues motrices de 60 mm de diamètre ($r = 0{,}03$ m) montées directement sur les moteurs, qui doit rouler à 0,5 m/s, accélérer à 1 m/s² et gravir une rampe de 10° ($C_{rr} = 0{,}02$) :

- vitesse de rotation : $\omega = 0{,}5 / 0{,}03 \approx 16{,}7$ rad/s, soit environ **160 tr/min** ;
- force pour accélérer : $3 \times 1 = 3$ N ;
- force pour monter la rampe : $3 \times 9{,}81 \times \sin 10° \approx 5{,}1$ N ;
- résistance au roulement : $0{,}02 \times 3 \times 9{,}81 \times \cos 10° \approx 0{,}6$ N ;
- force totale : $F \approx 8{,}7$ N, soit 4,35 N par roue ;
- couple par moteur : $C = 4{,}35 \times 0{,}03 \approx 0{,}13$ N·m, et **0,26 N·m avec un coefficient de sécurité de 2**.

Chaque moteur doit donc fournir au moins **0,26 N·m à 160 tr/min**. La rampe compte pour plus de la moitié de la force : sur une table plate, le même robot n'aurait besoin que d'environ 0,11 N·m avec la marge.

{% include message.html title="Dimensionner les moteurs" message="Le [calculateur de motorisation](/ressources/tools/general/calculateur-moteur-robot/) du site fait ce calcul, affiche chaque étape et vérifie, si on le souhaite, que les roues ne patinent pas." status="is-info" icon="fas fa-calculator" %}

## La chaîne de motorisation

Un moteur ne se branche jamais directement sur la carte de commande : un microcontrôleur fournit quelques milliampères sur ses broches, alors qu'un moteur en demande de quelques centaines de milliampères à plusieurs ampères. Entre les deux, une **électronique de puissance** prélève l'énergie sur la batterie et la dose selon la consigne de la carte de commande.

![Chaîne de motorisation : la batterie alimente l'électronique de puissance, qui alimente le moteur, qui entraîne le réducteur puis la roue ; la carte de commande envoie une consigne à l'électronique de puissance et peut recevoir un retour du codeur du moteur](chaine-de-motorisation.svg)

Chaque famille de moteur a son électronique de puissance (on parle souvent de **driver** ou de **contrôleur**). Son fonctionnement fera l'objet d'une autre page ; ici, retenir seulement qu'elle existe et qu'elle dépend du type de moteur.

Le **retour** est facultatif : certains moteurs sont équipés d'un **codeur** qui renvoie de combien ils ont tourné, d'autres non.

## Les principales familles de moteurs

### Moteur à courant continu (avec réducteur)

C'est le moteur le plus répandu, celui des jouets, des perceuses et de beaucoup de robots. Alimenté en tension continue, il tourne ; on inverse la tension, il tourne dans l'autre sens.

- **Ce qu'on lui commande** : une tension (en pratique, une tension moyenne réglée par PWM). Sa vitesse suit la tension ; son couple suit le courant qu'il absorbe.
- **Électronique de commande** : un **pont en H**, qui permet de choisir le sens et la vitesse.
- **Sait-il où il en est ?** Non, sauf s'il est équipé d'un **codeur**. Les **motoréducteurs à codeur** sont très courants en robotique : le programme mesure la vitesse réelle et la corrige.
- **Avantages** : simple, bon marché, léger, large choix de puissances.
- **Limites** : tourne trop vite et avec trop peu de couple sans réducteur ; sans codeur, deux moteurs « identiques » ne tournent jamais exactement à la même vitesse, et le robot ne va pas droit.
- **Exemples** : motoréducteurs jaunes des kits de robotique, motoréducteurs métalliques à codeur (type Pololu).

### Moteur pas à pas

Son rotor avance par **pas** : à chaque impulsion envoyée au driver, il tourne d'un angle fixe, le plus souvent 1,8° (200 pas par tour). Le driver peut aussi découper chaque pas en **micropas** (1/2, 1/4... 1/16 de pas) pour un mouvement plus doux.

- **Ce qu'on lui commande** : un nombre de pas et un sens. La vitesse dépend de la fréquence des impulsions.
- **Électronique de commande** : un **driver pas à pas** (par exemple l'A4988).
- **Sait-il où il en est ?** Oui, **tant qu'il ne perd pas de pas** : il suffit de compter les impulsions envoyées. On parle de commande en **boucle ouverte**.
- **Avantages** : déplacement précis sans capteur, fort couple à basse vitesse, garde sa position à l'arrêt.
- **Limites** : le couple chute quand la vitesse augmente ; si on lui demande trop (accélération brutale, obstacle), il **décroche** et perd des pas sans que le programme le sache ; il consomme du courant même à l'arrêt ; lourd pour sa puissance.
- **Exemples** : moteurs NEMA 17 des imprimantes 3D, robots de la Coupe de France de robotique.

Le détail du fonctionnement et du câblage est dans la fiche [Moteur pas-à-pas](/docs/references/hardware/stepper/) et le tutoriel [Driver A4988](/docs/tutorials/electronics/a4988-stepper-driver/).

### Moteur brushless

Un moteur **sans balais** (*brushless*, ou BLDC) : au lieu d'un contact mécanique qui s'use, c'est l'électronique qui alimente les bobines tour à tour, en suivant la position du rotor.

- **Ce qu'on lui commande** : une vitesse, un couple ou une position, selon le contrôleur.
- **Électronique de commande** : un **contrôleur brushless** (un ESC, ou un contrôleur plus évolué dit FOC pour une commande fine à basse vitesse).
- **Sait-il où il en est ?** Souvent, grâce à des capteurs intégrés (capteurs à effet Hall ou codeur).
- **Avantages** : excellent rendement, très puissant pour sa masse, durable, silencieux.
- **Limites** : contrôleur plus complexe et plus cher ; les modèles courants tournent très vite et demandent un réducteur, ou un contrôleur capable d'un fort couple à basse vitesse.
- **Exemples** : drones, trottinettes et hoverboards (sous forme de **moteur-roue**, le moteur logé dans le moyeu de la roue), robots de compétition rapides.

### Servomoteur « intelligent »

Un bloc complet : un moteur, un réducteur, un codeur et un petit contrôleur, dans le même boîtier. On le commande par un **bus série**, plusieurs servomoteurs partageant les mêmes fils.

- **Ce qu'on lui commande** : une position ou une vitesse, par message sur le bus.
- **Électronique de commande** : intégrée ; il suffit d'un adaptateur de bus.
- **Sait-il où il en est ?** Oui : il renvoie sa position, sa vitesse, sa charge, sa température.
- **Avantages** : très simple à câbler, asservissement déjà réglé, nombreuses informations en retour.
- **Limites** : cher, puissance limitée, dépend du protocole du fabricant.
- **Exemples** : Dynamixel, Feetech ; robots éducatifs et petits robots mobiles.

## Le réducteur : échanger de la vitesse contre du couple

Un moteur électrique tourne souvent bien plus vite que la roue (plusieurs milliers de tours par minute) avec peu de couple. Un **réducteur** (un train d'engrenages, une courroie) ralentit la rotation et multiplie le couple dans le même rapport. Pour un réducteur de rapport $N$ :

$$\omega_{\text{roue}} = \frac{\omega_{\text{moteur}}}{N} \qquad C_{\text{roue}} = C_{\text{moteur}} \cdot N \cdot \eta$$

où $\eta$ est le **rendement** du réducteur (de 0,6 à 0,9 selon sa qualité) : une partie de l'énergie se perd en frottements.

**Exemple** : un moteur à courant continu qui tourne à 6000 tr/min avec 0,02 N·m, suivi d'un réducteur 1:30 de rendement 0,7, donne 200 tr/min et $0{,}02 \times 30 \times 0{,}7 = 0{,}42$ N·m sur la roue.

Le moteur pas à pas, lui, fournit déjà un fort couple à basse vitesse : il entraîne souvent la roue **directement**, ou avec une simple courroie.

## Couple et vitesse : deux comportements opposés

Le couple qu'un moteur peut fournir dépend de sa vitesse. Les deux courbes ci-dessous donnent des valeurs **typiques**, pour illustrer ; les vraies courbes sont dans la documentation de chaque moteur et dépendent de la tension d'alimentation et du driver.

Pour un **motoréducteur à courant continu**, le couple diminue régulièrement quand la vitesse augmente : il est maximal à l'arrêt (couple de démarrage) et nul à la vitesse à vide.

{% include graphique.html x_valeurs="0,50,100,150,200,250,300" y_valeurs="1.2,1,0.8,0.6,0.4,0.2,0" serie="Motoréducteur CC (typique)" x="Vitesse de la roue (tr/min)" y="Couple (N·m)" titre="Motoréducteur à courant continu" y_min="0" %}

Pour un **moteur pas à pas**, le couple est presque constant à basse vitesse, puis s'effondre. Au-dessus de la courbe, le moteur décroche. Avec le robot de l'exemple (0,26 N·m à 160 tr/min, marge comprise), le moteur pas à pas convient : il fournit environ 0,40 N·m à cette vitesse. Mais au-delà d'environ 500 tr/min (1,6 m/s avec ces roues), il ne fournit plus le couple demandé.

{% include graphique.html x_valeurs="0,50,100,150,200,300,400,600,800,1000" y_valeurs="0.42,0.42,0.41,0.4,0.38,0.34,0.3,0.22,0.16,0.12" serie="Moteur pas à pas NEMA 17 (typique)" y_valeurs2="0.26,0.26,0.26,0.26,0.26,0.26,0.26,0.26,0.26,0.26" serie2="Besoin du robot de l'exemple, marge comprise" x="Vitesse (tr/min)" y="Couple (N·m)" titre="Moteur pas à pas" y_min="0" %}

Une conséquence importante pour la suite : pour ne pas faire décrocher un moteur pas à pas, il faut augmenter et diminuer sa vitesse **progressivement**. Ce sera l'objet de la page sur les profils de vitesse.

## Comparaison

| Famille | Électronique de commande | Connaît sa position | Précision | Coût | Usage typique |
|---|---|---|---|---|---|
| Courant continu | Pont en H | Avec un codeur | Moyenne (bonne avec codeur) | Faible | Robots de tous gabarits |
| Pas à pas | Driver pas à pas | Oui, sauf perte de pas | Bonne | Faible | Robots lents et précis |
| Brushless | Contrôleur brushless | Souvent | Bonne | Moyen à élevé | Robots rapides et puissants |
| Servomoteur intelligent | Intégrée (bus série) | Oui | Bonne | Élevé | Petits robots, prototypes |

## Choisir une motorisation

Quelques questions guident le choix :

1. **Quelle vitesse et quelle accélération ?** Elles fixent la vitesse de rotation et le couple nécessaires (voir l'exemple et le calculateur).
2. **Quelle masse, quelle pente, quels obstacles ?** Ils augmentent le couple nécessaire.
3. **Quelle précision de déplacement ?** Un robot qui doit s'arrêter au centimètre près a besoin d'un pas à pas, d'un codeur ou d'un capteur externe.
4. **Quelle alimentation ?** La tension de la batterie doit convenir aux moteurs et à leur électronique ; leur consommation fixe l'autonomie.
5. **Quel budget et quel temps de mise au point ?** Un moteur simple et bien connu fait souvent gagner plus de temps qu'un moteur performant mais difficile à régler.

### Le choix du robot de ce parcours

Le robot qui sert de fil conducteur (voir [Qu'est-ce qu'un robot mobile à roues ?](/docs/concepts/robot-mobile-a-roues/)) utilise des **moteurs pas à pas** :

- il évolue sur une table plate, à vitesse modérée, là où le pas à pas a le plus de couple ;
- sa commande est simple et précise : un nombre de pas donne une distance ;
- les NEMA 17 et leurs drivers sont courants, bon marché et bien documentés.

Les contreparties sont connues, et la suite du parcours y répond : la perte de pas et le glissement des roues sont surveillés par les **roues codeuses** (page sur l'odométrie), et le décrochage est évité par des **rampes de vitesse** (page sur les profils de vitesse).

## À retenir

- La vitesse du robot et la vitesse de la roue sont liées par $v = \omega \cdot r$ ; la force et le couple par $C = F \cdot r$.
- La force à fournir additionne l'accélération, la pente réelle et la résistance au roulement ; un **coefficient de sécurité** (souvent 2) couvre les imprévus.
- Un moteur ne se branche pas directement sur la carte de commande : il lui faut une **électronique de puissance**, propre à chaque famille.
- Les grandes familles : **courant continu** (simple, avec un codeur pour être précis), **pas à pas** (précis sans capteur, mais peut décrocher), **brushless** (puissant, contrôleur complexe), **servomoteur intelligent** (tout intégré, cher).
- Un **réducteur** divise la vitesse et multiplie le couple.
- Le couple d'un moteur dépend de sa vitesse : celui d'un pas à pas s'effondre au-delà d'une certaine vitesse.

## Pour aller plus loin

- [Calculateur de motorisation d'un robot](/ressources/tools/general/calculateur-moteur-robot/)
- [Moteur pas-à-pas](/docs/references/hardware/stepper/) et [Driver de moteur](/docs/references/hardware/driver/)
- [Utilisation du driver A4988](/docs/tutorials/electronics/a4988-stepper-driver/)
