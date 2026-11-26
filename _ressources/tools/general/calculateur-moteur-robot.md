---
layout: documentation
image: hero-motor-calculator.jpg
hide_hero: false
hero_image: hero-motor-calculator.jpg
hero_darken: true
component_toc: true
doc_header: true

title: Outil de dimensionnement de la motorisation d'un robot
subtitle: Calculateur en ligne pour dimensionner ses moteurs
description: Calculer la vitesse de rotation et le couple que doit fournir chaque moteur d'un robot mobile à roues, avec le détail du calcul et une vérification de l'adhérence.
author: Adrien Bracq

---

## Ce que fait l'outil

Le calculateur donne, pour **chaque moteur** d'un robot mobile à roues, le **point de fonctionnement** à respecter : le couple que le moteur doit fournir, et à quelle vitesse de rotation. Il suffit ensuite de vérifier ce point sur la courbe couple/vitesse d'un moteur candidat.

Toutes les étapes sont affichées sous les résultats (« Détail du calcul »), pour pouvoir refaire le calcul à la main. La méthode est expliquée dans le concept [Motoriser un robot mobile](/docs/concepts/motoriser-robot-mobile/).

## Calculateur

{% include calculator-motor.html %}

## La méthode

Le calcul se place dans le **pire cas** : le robot accélère au maximum, en montant la pente la plus raide, à sa vitesse maximale.

1. La **vitesse de rotation** de la roue découle de la vitesse du robot : $\omega = v / r$.
2. La **force de traction** totale additionne trois termes :

   $$F = \underbrace{m\,a}_{\text{accélérer}} + \underbrace{m\,g\,\sin\theta}_{\text{monter la pente}} + \underbrace{C_{rr}\,m\,g\,\cos\theta}_{\text{rouler}}$$

3. Cette force se répartit sur les $n$ roues motrices, et la transmission en perd une partie (rendement $\eta$) : $C = \frac{F \cdot r}{n \cdot \eta}$.
4. On multiplie ce couple par un **coefficient de sécurité** $k$ pour couvrir tout ce que le calcul ignore.

### Pourquoi un coefficient de sécurité

Le calcul ne connaît ni les bosses, ni les chocs, ni un objet à pousser, ni un autre robot qui bloque le passage, et les frottements sont mal connus. Sans marge, le moindre imprévu fait caler un moteur à courant continu ou décrocher un moteur pas à pas. Un coefficient de **2** est un bon point de départ ; on peut le réduire si le robot est léger et le terrain bien connu.

### Pourquoi une pente réelle

La pente est celle que le robot doit **vraiment** gravir : 0° sur une table plate. Les imprévus relèvent du coefficient de sécurité, pas d'une pente fictive : les deux restent ainsi lisibles.

## Vérifier l'adhérence

Un moteur assez puissant ne sert à rien si les roues **patinent**. La force qu'une roue peut transmettre au sol est limitée par :

$$F_{max} = \mu \cdot N$$

où $\mu$ est le **coefficient d'adhérence** entre la roue et le sol, et $N$ la part du poids qui repose sur les roues motrices. Sur un robot différentiel, une partie du poids repose sur les billes ou les roues folles : elle ne sert pas à la traction.

Ces deux valeurs sont difficiles à estimer à l'avance : le mieux est de les **mesurer**, sur un prototype ou sur une seule roue.

### Mesurer le coefficient d'adhérence : le plan incliné

1. Poser la roue (lestée, bloquée en rotation) ou le robot, moteurs non alimentés et roues bloquées, sur une planche recouverte du même matériau que le sol réel.
2. Incliner lentement la planche jusqu'à ce que la roue commence à glisser.
3. Mesurer l'angle $\alpha$ de la planche (application d'inclinomètre d'un téléphone) : le coefficient vaut $\mu = \tan\alpha$.

Ordres de grandeur, à confirmer par la mesure :

| Roue / sol | $\mu$ |
|---|---|
| Plastique dur ou impression 3D sur sol lisse | 0,2 à 0,4 |
| Caoutchouc sur bois ou surface peinte | 0,6 à 0,9 |
| Silicone ou joint torique sur sol propre | 0,8 à 1 |

### Mesurer la part du poids sur les roues motrices

Poser **seulement les roues motrices** sur une balance de cuisine, le reste du robot sur une cale de même hauteur. La part vaut : masse lue / masse totale.

Si les roues patinent, trois leviers : réduire l'accélération, déplacer les masses (batterie) au-dessus des roues motrices, ou choisir des roues plus adhérentes.

## Origine

L'outil reprend la méthode publiée par [cbenson](https://www.robotshop.com/community/user/cbenson) sur le blog de [RobotShop](https://www.robotshop.com/community/blog/show/dimensionnement-dun-moteur-dentranement) en 2013 (couple, accélération, pente et rendement). Il y ajoute la résistance au roulement, le coefficient de sécurité, la vérification de l'adhérence et le détail du calcul ; le dimensionnement de la batterie n'en fait plus partie.
