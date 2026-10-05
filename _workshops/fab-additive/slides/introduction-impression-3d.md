---
layout: slides
title: Fabrication additive
subtitle: "Partie 1 : introduction à l'impression 3D"
description: Support de cours sur l'histoire de l'impression 3D, des premiers brevets au mouvement open source, aux makerspaces et aux usages d'aujourd'hui.
author: Adrien Bracq
kicker: MakerSpace Amiens
back_link: /workshops/fab-additive/
---

## Au programme

1. Qu'est-ce que l'impression 3D ?
2. Les premiers procédés (1974-2000)
3. Brevets et open source
4. Le projet RepRap
5. L'ère du grand public
6. Le Hype Cycle
7. Les tiers-lieux
8. Et aujourd'hui ?

<aside class="notes" markdown="1">
La version rédigée du cours est la page concept « Introduction à l'impression 3D ».
</aside>

---

<!-- .slide: class="slide-section" -->

## Qu'est-ce que l'impression 3D ?

Ajouter de la matière, couche après couche

---

## Fabriquer en ajoutant de la matière

<div class="columns" markdown="1">
<div markdown="1">

**Fabrication additive**

- Matière **ajoutée** par couches
- Formes complexes et creuses
- Très peu de déchets
- Prototype, petite série

</div>
<div markdown="1">

**Fabrication soustractive**

- Matière **retirée** d'un bloc
- Accès de l'outil limité
- Copeaux et chutes
- Grande série, précision

</div>
</div>

Au départ, deux procédés : le **FDM** (fil fondu) et la **SLA** (résine solidifiée par la lumière).
{: .caption}

[Qu'est-ce que l'impression 3D ?](/docs/concepts/3d-print-introduction/#quest-ce-que-limpression-3d-){: .doc-link}

<aside class="notes" markdown="1">
Exemple soustractif : le fraisage, qui retire de la matière d'un bloc.
</aside>

---

## Une idée plus ancienne qu'on ne le croit

![Construction en béton imprimée couche par couche par William E. Urschel](/workshops/fab-additive/slides/introduction-impression-3d/urschel-beton-1930.png){: .img-md}

Années 1930 : William E. Urschel élève un bâtiment en déposant du béton couche par couche.
{: .caption}

[Qu'est-ce que l'impression 3D ?](/docs/concepts/3d-print-introduction/#quest-ce-que-limpression-3d-){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Les premiers procédés

1974-2000 : de l'idée à l'industrie

---

## Une chronologie

| Année | Événement |
|---|---|
| 1974 | David E. H. Jones décrit le concept dans un article |
| 1981 | Hideo Kodama : prototypage rapide par résine |
| 1984 | Charles Hull dépose le brevet de la stéréolithographie |
| 1986 | Hull fonde 3D Systems : première imprimante SLA vendue |
| 1988 | Carl Deckard brevète le frittage laser (SLS) |
| 1989 | Scott Crump (Stratasys) brevète le fil fondu (FDM) |
| 1992 | DTM vend la première imprimante SLS industrielle |
{: .table-dense}

Jusqu'aux années 2000, l'impression 3D reste un outil industriel de prototypage rapide.
{: .caption}

[Historique](/docs/concepts/3d-print-introduction/#historique){: .doc-link}

---

## Les oubliés de l'impression 3D

<p class="big-number">1984</p>

Jean-Claude André, Alain Le Méhauté et Olivier de Witte mettent au point, en France, un procédé proche de la stéréolithographie.

- {: .fragment .fade-up} Leur employeur, CILAS Alcatel, le juge **sans potentiel commercial**
- {: .fragment .fade-up} Le brevet est **abandonné**, Charles Hull dépose le sien quelques semaines plus tard

[Les oubliés de l'impression 3D](/docs/concepts/3d-print-introduction/#les-oubliés-de-limpression-3d){: .doc-link}

---

## Charles Hull, « père de l'impression 3D »

![Buste de Charles Hull imprimé en 3D, à côté d'une machine de stéréolithographie](/docs/concepts/3d-print-introduction/slide_9_image_2.jpg)
{: .img-md}

Son buste, imprimé par 3D Systems, près d'une des premières machines SLA.
{: .caption}

[Commercialisation et progrès techniques](/docs/concepts/3d-print-introduction/#commercialisation-et-progrès-techniques-1986-1990){: .doc-link}

---

## Les machines industrielles des années 2000

<div class="columns" markdown="1">
<div markdown="1">

![3D Systems SLA 5000](/docs/concepts/3d-print-introduction/slide_11_image_1.jpg){: .img-md}

**3D Systems SLA 5000** (SLA)
{: .caption}

</div>
<div markdown="1">

![EOSINT P 700](/docs/concepts/3d-print-introduction/slide_11_image_3.jpg){: .img-md}

**EOSINT P 700** (SLS, 2004)
{: .caption}

</div>
</div>

[Exemples de machines au début des années 2000](/docs/concepts/3d-print-introduction/#exemples-de-machines-au-début-2000){: .doc-link}

<aside class="notes" markdown="1">
Des machines de la taille d'une armoire, réservées à l'industrie (automobile, aéronautique).
</aside>

---

<!-- .slide: class="slide-section" -->

## Brevets et open source

Protéger une invention, ou la partager

---

## Deux façons de faire avancer une technologie

| | Brevet | Open source |
|---|---|---|
| **Principe** | Monopole d'exploitation temporaire | Partage libre des plans et du code |
| **Durée** | 20 ans, puis domaine public | Sans limite |
| **Condition** | Nouveau, inventif, industrialisable | Une licence libre |
| **Effet** | Protège l'investissement | Accélère l'innovation collective |
{: .table-dense}

Les deux coexistent : Prusa Research publie ses plans tout en protégeant certains composants.
{: .caption}

[Brevets et open source](/docs/concepts/3d-print-introduction/#brevets--open-source){: .doc-link}

---

## La fin des brevets FDM

- {: .fragment .fade-up} **2000** : les premiers brevets FDM expirent
- {: .fragment .fade-up} **2005** : lancement du projet open source **RepRap**
- {: .fragment .fade-up} **2009** : les brevets FDM expirent complètement

Chacun peut alors fabriquer des imprimantes FDM : les prix s'effondrent.
{: .fragment .fade-up}

[Expiration des brevets](/docs/concepts/3d-print-introduction/#expiration-des-brevets-2000--2009){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Le projet RepRap

L'imprimante qui s'imprime elle-même

---

## RepRap : Replicating Rapid Prototyper

<div class="columns" markdown="1">
<div markdown="1">

- Lancé en **2005** par Adrian Bowyer, université de Bath
- Imprime **environ 50 %** de ses propres pièces
- Matériel et logiciels **open source**
- But : rendre l'impression 3D abordable pour tous

</div>
<div markdown="1">

![Darwin, la première RepRap](/docs/concepts/3d-print-introduction/slide_17_image_2.jpg){: .img-md}

Darwin (2007), la première RepRap
{: .caption}

</div>
</div>

[Le projet RepRap](/docs/concepts/3d-print-introduction/#projet-reprap){: .doc-link}

---

## L'impact de RepRap

<div class="columns" markdown="1">
<div markdown="1">

- Le **catalyseur** de l'impression 3D grand public
- À l'origine de **Prusa**, un acteur majeur du marché
- Des centaines de variantes partagées en ligne

</div>
<div markdown="1">

![Une imprimante RepRap](/docs/concepts/3d-print-introduction/image.jpg){: .img-md}

</div>
</div>

« RepRap est un moyen pour les humains d'apporter des machines à ceux qui en ont besoin. » Adrian Bowyer
{: .caption}

---

## Un projet politique

> « So the replicating rapid prototyping machine will allow the revolutionary ownership, by the proletariat, of the means of production. » Adrian Bowyer

- **Autonomie** : fabriquer sans dépendre des grandes industries
- **Décentralisation** : redistribuer les moyens de production
- **Partage** : des outils et des savoirs communs, une économie locale

[Un message politique](/docs/concepts/3d-print-introduction/#un-message-politique){: .doc-link}

<aside class="notes" markdown="1">
Traduction : « La machine de prototypage rapide réplicante va permettre l'appropriation révolutionnaire des moyens de production par le prolétariat. » Bowyer poursuit : « sans les aspects dangereux de la révolution, ni ceux de l'industrie », et appelle cela un « marxisme darwinien ». RepRap : « un moyen pour les humains d'apporter des machines à ceux qui en ont besoin ».
</aside>

---

## La famille RepRap

![Arbre généalogique des imprimantes RepRap](/docs/concepts/3d-print-introduction/slide_21_image_3.png)
{: .img-md}

Chaque modèle est un « fork » : on reprend les plans du précédent, on les améliore, on les republie.
{: .caption}

[RepRap Family Tree](https://reprap.org/wiki/RepRap_Family_Tree){: .doc-link} [Les imprimantes dérivées](/docs/concepts/3d-print-introduction/#quelques-imprimantes-dérivées-du-proejt-reprap){: .doc-link}

---

## L'arbre complet

![Arbre généalogique complet des imprimantes RepRap](/docs/concepts/3d-print-introduction/slide_21_image_1.jpg){: .img-md}

Plus de cent modèles, tous issus de Darwin. Zoomez sur le site de RepRap pour lire les noms.
{: .caption}

[RepRap Family Tree](https://reprap.org/wiki/RepRap_Family_Tree){: .doc-link}

---

## Darwin (2007)

![RepRap Darwin](/docs/concepts/3d-print-introduction/image-1.jpg)
{: .img-md}

La première imprimante open source auto-réplicable : elle ouvre la voie à des centaines de forks.
{: .caption}

---

## Mendel (2009)

![RepRap Mendel](/docs/concepts/3d-print-introduction/image-2.jpg)
{: .img-md}

Une structure plus compacte et plus stable, plus facile à assembler, de meilleures impressions.
{: .caption}

---

## Prusa Mendel (2011)

![Prusa Mendel](/docs/concepts/3d-print-introduction/image-3.jpg)
{: .img-md}

Josef Prusa simplifie la conception : moins de pièces, un coût de fabrication réduit.
{: .caption}

---

## Rostock (2012)

![RepRap Rostock](/docs/concepts/3d-print-introduction/image-4.jpg)
{: .img-md}

La première RepRap de type delta : trois bras déplacent la tête, vite et précisément.
{: .caption}

---

## Prusa i3

![Prusa i3](/docs/concepts/3d-print-introduction/image-5.jpg)
{: .img-md}

Un cadre d'une seule pièce, plus rigide : un modèle copié partout.
{: .caption}

---

## Les imprimantes oubliées

<div class="columns" markdown="1">
<div markdown="1">

![RepRap Morgan](/docs/concepts/3d-print-introduction/slide_27_image_1.jpg){: .img-md}

RepRap Morgan
{: .caption}

</div>
<div markdown="1">

![RepRap Simpson](/docs/concepts/3d-print-introduction/slide_27_image_2.jpg){: .img-md}

RepRap Simpson
{: .caption}

</div>
</div>

Des cinématiques originales qui n'ont pas trouvé leur public.
{: .caption}

---

<!-- .slide: class="slide-section" -->

## L'ère du grand public

2009-2020 : l'imprimante 3D arrive sur le bureau

---

## Le prix d'une imprimante

<p class="big-number">÷ 10</p>

- **Début des années 2010** : plus de 2 000 €, des machines rares, souvent en kit
- **En 2020** : 200 € pour une Creality Ender-3 fiable, prête à l'emploi

Concurrence, production de masse et innovation font chuter les prix. En 2022, le marché pèse 15,1 milliards de dollars.
{: .caption}

[Évolution des coûts](/docs/concepts/3d-print-introduction/#évolution-des-coûts){: .doc-link}

---

## Quatre marques, quatre trajectoires

![Logo MakerBot](/docs/concepts/3d-print-introduction/slide_30_image_2.png){: .logo} ![Logo Ultimaker](/docs/concepts/3d-print-introduction/slide_33_image_2.png){: .logo} ![Logo Prusa Research](/docs/concepts/3d-print-introduction/slide_39_image_2.png){: .logo} ![Logo Creality](/docs/concepts/3d-print-introduction/slide_37_image_2.png){: .logo}

| Marque | Création | Trajectoire |
|---|---|---|
| MakerBot | 2009, États-Unis | Issue de RepRap, propriétaire dès 2013 |
| Ultimaker | 2011, Pays-Bas | Kit open source, puis marché pro |
| Prusa Research | 2012, Tchéquie | Reste en grande partie open source |
| Creality | 2014, Chine | Bas coût, énorme communauté |
{: .table-dense}

En 2022, MakerBot et Ultimaker fusionnent pour former UltiMaker.
{: .caption}

[Popularisation : l'ère du grand public](/docs/concepts/3d-print-introduction/#popularisation--lère-du-grand-public){: .doc-link}

---

## MakerBot

<div class="columns is-3" markdown="1">
<div markdown="1">

![MakerBot Thing-O-Matic](/docs/concepts/3d-print-introduction/slide_31_image_2.jpg){: .img-md}

Thing-O-Matic (2010)
{: .caption}

</div>
<div markdown="1">

![MakerBot Replicator](/docs/concepts/3d-print-introduction/slide_31_image_3.jpg){: .img-md}

Replicator (2012)
{: .caption}

</div>
<div markdown="1">

![MakerBot Replicator 2X](/docs/concepts/3d-print-introduction/slide_31_image_4.jpg){: .img-md}

Replicator 2X
{: .caption}

</div>
</div>

Rachetée par Stratasys en 2013, MakerBot abandonne l'open source.
{: .caption}

---

## MakerBot : vendre la « révolution »

![Bre Pettis sur scène](/docs/concepts/3d-print-introduction/slide_32_image_2.jpg)
{: .img-md}

Bre Pettis, cofondateur de MakerBot, promet une imprimante 3D dans chaque foyer.
{: .caption}

<aside class="notes" markdown="1">
Faire le lien avec le Hype Cycle plus loin : c'est le pic des attentes exagérées. Les deux autres cofondateurs, Adam Mayer et Zach Smith, quittent l'entreprise en désaccord avec son orientation ; Bre Pettis est écarté peu après le rachat.
</aside>

---

## Print the Legend

<div class="columns" markdown="1">
<div markdown="1">

![Affiche du documentaire Print the Legend](/docs/concepts/3d-print-introduction/slide_36_image_2.jpg)
{: .img-md}

</div>
<div markdown="1">

Documentaire Netflix (2014)

- MakerBot et Formlabs face à Stratasys et 3D Systems
- Rivalités entre start-up
- Promesses et désillusions

</div>
</div>

[Print the Legend](/docs/concepts/3d-print-introduction/#print-the-legend){: .doc-link}

---

## Ultimaker

<div class="columns is-3" markdown="1">
<div markdown="1">

![Ultimaker Original](/docs/concepts/3d-print-introduction/slide_34_image_1.jpg){: .img-md}

Original (2011), en kit
{: .caption}

</div>
<div markdown="1">

![Ultimaker 2](/docs/concepts/3d-print-introduction/slide_34_image_2.png){: .img-md}

Ultimaker 2 (2013)
{: .caption}

</div>
<div markdown="1">

![Ultimaker S5](/docs/concepts/3d-print-introduction/slide_34_image_3.jpg){: .img-md}

S5 (2018), pour les pros
{: .caption}

</div>
</div>

Sa grande contribution reste **Cura**, un slicer gratuit et libre.
{: .caption}

---

## 2022 : MakerBot et Ultimaker fusionnent

![Logo UltiMaker](/docs/concepts/3d-print-introduction/slide_35_image_2.jpg){: .img-sm}

- Annoncée en mai, finalisée en septembre 2022 : naissance d'**UltiMaker**
- Stratasys garde une part minoritaire, NPM Capital devient l'actionnaire principal

[Rapprochements des marques](/docs/concepts/3d-print-introduction/#ultimaker){: .doc-link}

---

## Creality

<div class="columns is-3" markdown="1">
<div markdown="1">

![Creality CR-10](/docs/concepts/3d-print-introduction/slide_38_image_1.jpg){: .img-md}

CR-10 (2016) : grand format
{: .caption}

</div>
<div markdown="1">

![Creality Ender-3](/docs/concepts/3d-print-introduction/slide_38_image_2.jpg){: .img-md}

Ender-3 (2018) : best-seller
{: .caption}

</div>
<div markdown="1">

![Creality K1C](/docs/concepts/3d-print-introduction/slide_38_image_3.png){: .img-md}

K1C : CoreXY fermée
{: .caption}

</div>
</div>

Des machines bon marché et une immense communauté de bidouilleurs.
{: .caption}

[Creality](/docs/concepts/3d-print-introduction/#creality){: .doc-link}

---

## Prusa Research

<div class="columns is-3" markdown="1">
<div markdown="1">

![Prusa i3 MK4](/docs/concepts/3d-print-introduction/slide_40_image_1.jpg){: .img-md}

i3 : la référence
{: .caption}

</div>
<div markdown="1">

![Prusa SL1S](/docs/concepts/3d-print-introduction/slide_40_image_2.jpg){: .img-md}

SL1S : résine
{: .caption}

</div>
<div markdown="1">

![Prusa XL](/docs/concepts/3d-print-introduction/slide_40_image_3.jpg){: .img-md}

XL (2022) : CoreXY
{: .caption}

</div>
</div>

Fondée en 2012 par Josef Prusa ; la MK2 (2016) apporte l'étalonnage automatique.
{: .caption}

---

## Prusa : l'ADN de RepRap

![Ferme d'impression de Prusa Research](/docs/concepts/3d-print-introduction/slide_41_image_2.jpg)
{: .img-md}

Plus de 600 imprimantes fabriquent les pièces des imprimantes vendues : 114 000 machines expédiées en 2021.
{: .caption}

[Prusa](/docs/concepts/3d-print-introduction/#prusa){: .doc-link}

---

## Prusa : encore open source ?

<div class="columns" markdown="1">
<div markdown="1">

![Tatouage du logo Open Hardware](/docs/concepts/3d-print-introduction/slide_42_image_2.jpg){: .img-md}

2012 : Josef Prusa se fait tatouer le logo Open Hardware
{: .caption}

</div>
<div markdown="1">

- Plans, firmware et PrusaSlicer publiés
- Mais composants propriétaires sur les machines récentes (Prusa XL)
- Pour se protéger des copies

</div>
</div>

---

## Rétrospective Prusa 2024

![Josef Prusa, rétrospective 2024](/workshops/fab-additive/slides/introduction-impression-3d/prusa-retrospective-2024.jpg){: .img-md}

Chaque année, Josef Prusa présente en vidéo le bilan de l'entreprise.
{: .caption}

[Prusa](/docs/concepts/3d-print-introduction/#prusa){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Le Hype Cycle

Pourquoi l'impression 3D a déçu, puis convaincu

---

## La courbe de Gartner

![Hype Cycle de l'impression 3D, Gartner, 2018](/docs/concepts/3d-print-introduction/slide_48_image_3.png)
{: .img-md}

En 2018, le fil fondu (« Material Extrusion ») atteint presque le plateau ; l'impression grand public est encore dans le gouffre. © 2018 Gartner, Inc.
{: .caption}

[Courbe de désillusion](/docs/concepts/3d-print-introduction/#courbe-de-désillusion){: .doc-link}

---

## Cinq étapes, appliquées à l'impression 3D

| Étape | Impression 3D |
|---|---|
| 1. Déclencheur | Années 1980 : SLA et FDM |
| 2. Pic des attentes | Années 2010 : « tout imprimer chez soi » |
| 3. Gouffre de désillusion | Mi-2010 : coût, lenteur, matériaux limités |
| 4. Pente de l'illumination | 2020 : usages concrets et industriels |
| 5. Plateau de productivité | Aujourd'hui : prototypage, médecine, industrie |
{: .table-dense}

Un modèle utile pour toute technologie émergente : méfiez-vous des promesses en haut de la courbe.
{: .caption}

[Application à l'impression 3D](/docs/concepts/3d-print-introduction/#application-à-limpression-3d){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Les tiers-lieux

Hackerspaces, FabLabs, makerspaces

---

## L'apparition des tiers-lieux

<div class="columns" markdown="1">
<div markdown="1">

![Atelier collaboratif dans un tiers-lieu](/docs/concepts/3d-print-introduction/slide_51_image_2.jpg)

</div>
<div markdown="1">

Ni le domicile (1er lieu), ni le travail (2e lieu) : des espaces pour **créer, échanger, innover** ensemble.

Dès les années 1990 : hackerspaces, puis FabLabs, puis makerspaces.

</div>
</div>

[Apparition de nouveaux tiers-lieux](/docs/concepts/3d-print-introduction/#apparition-de-nouveaux-tiers-lieux){: .doc-link}

---

## Trois familles de lieux

| | Hackerspace | FabLab | Makerspace |
|---|---|---|---|
| **Origine** | Années 1990, hackers | 2001, MIT | Années 2010, makers |
| **Public** | Passionnés de technologie | Éducation, innovation | Amateurs, étudiants |
| **Esprit** | Exploration, liberté | Collaboration, pédagogie | DIY, créativité |
| **Cadre** | Indépendant, informel | Charte des FabLabs | Libre, selon le lieu |
{: .table-dense}

[HackerSpace, MakerSpace, FabLab et Internet](/docs/concepts/3d-print-introduction/#hackerspace-makerspace-fablab-et-internet){: .doc-link}

---

## FabLab : Learn, Make, Share

<div class="columns" markdown="1">
<div markdown="1">

![Logo des FabLabs](/docs/concepts/3d-print-introduction/slide_53_image_2.png){: .img-sm}

</div>
<div markdown="1">

- Créé en **2001** au MIT par Neil Gershenfeld
- Ouvert au public, lié par une **charte**
- Découpe laser, fraiseuse, électronique ; l'imprimante 3D arrive plus tard

</div>
</div>

[FabLab](/docs/concepts/3d-print-introduction/#fablab--learn-make-share){: .doc-link}

---

## Des FabLabs dans le monde

<div class="columns" markdown="1">

![Échange dans un FabLab](/workshops/fab-additive/slides/introduction-impression-3d/fablab-atelier.jpg){: .img-sm}

![Projets en cours dans un FabLab](/workshops/fab-additive/slides/introduction-impression-3d/fablab-projets.jpg){: .img-sm}

![Grand atelier d'un FabLab](/workshops/fab-additive/slides/introduction-impression-3d/fablab-grand-atelier.jpg){: .img-sm}

![FabLab Barcelone](/workshops/fab-additive/slides/introduction-impression-3d/fablab-barcelone.jpg){: .img-sm}

</div>

---

## Ce que ces lieux ont changé

- **Accès** : découvrir l'impression 3D sans acheter de machine
- **Prototypage** : tester une idée sans investissement lourd
- **Partage** : ateliers, documentation, fichiers en ligne (Thingiverse, GitHub)
- **Retours d'usage** : les utilisateurs font évoluer les machines

Vous êtes dans l'un d'eux : le MakerSpace d'UniLaSalle Amiens.
{: .caption}

[Impact sur l'impression 3D](/docs/concepts/3d-print-introduction/#impact-sur-limpression-3d){: .doc-link}

<aside class="notes" markdown="1">
Internet joue le même rôle à distance : ordinateur personnel dans les années 1980 (modélisation 3D), internet dans les années 1990 (partage), premiers hackerspaces en 1995 en Allemagne, FabLab au MIT en 2001 (Neil Gershenfeld), RepRap en 2005.
</aside>

---

<!-- .slide: class="slide-section" -->

## Et aujourd'hui ?

Entre usage personnel et industrie

---

## Deux mondes qui se rapprochent

<div class="columns" markdown="1">
<div markdown="1">

**Personnel**

- Machines à 200-500 €
- Réparer, personnaliser
- Surtout des plastiques
- Volume d'impression réduit

</div>
<div markdown="1">

**Professionnel**

- SLS, SLA, Binder Jetting
- Métaux, composites
- Implants, aéronautique
- Machines coûteuses

</div>
</div>

Entre les deux, des imprimantes semi-professionnelles abordables brouillent la frontière.
{: .caption}

[Aujourd'hui : entre personnel et professionnel](/docs/concepts/3d-print-introduction/#aujourdhui--entre-personnel-et-professionnel){: .doc-link}

<aside class="notes" markdown="1">
Perspectives : fabrication à la demande (moins de déchets), matériaux biodégradables et recyclés, bio-impression, spatial.
</aside>

---

## Activité : RepRap a-t-il atteint son objectif ?

<p class="activity-meta"><span><i class="fas fa-user-friends"></i>Binôme</span><span><i class="far fa-clock"></i>5 min</span></p>

1. **Autonomie** : peut-on fabriquer sans dépendre de fournisseurs ?
2. **Open source** : la commercialisation a-t-elle trahi l'esprit d'origine ?
3. **Production** : fabriquer chez soi a-t-il réduit notre dépendance à l'industrie ?

Une réponse par question, appuyée sur un exemple vu dans ce cours.
{: .caption}

[Le projet RepRap : objectif atteint ?](/docs/concepts/3d-print-introduction/#le-projet-reprap--objectif-atteint-){: .doc-link}

---

## À retenir

- L'impression 3D **ajoute** de la matière couche par couche
- Elle naît dans l'industrie dans les années 1980 (SLA, SLS, FDM)
- La fin des brevets et l'**open source** (RepRap) la démocratisent
- Les tiers-lieux et internet diffusent les machines et les savoirs

[Partie 2 : technologies et matériaux](/workshops/fab-additive/slides/technologies-materiaux/){: .doc-link}
