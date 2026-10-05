---
layout: slides
title: Fabrication additive
subtitle: "Partie 2 : technologies et matériaux"
description: Support de cours sur les technologies d'impression 3D (fil fondu, résine, poudre) et les filaments, avec les machines du MakerSpace.
author: Adrien Bracq
kicker: MakerSpace Amiens
back_link: /workshops/fab-additive/
---

## Au programme

1. Trois grandes familles
2. Le fil fondu (FDM)
3. La résine (SLA)
4. La poudre et les autres procédés
5. Les matériaux

<aside class="notes" markdown="1">
La version rédigée du cours est la page concept « Les technologies d'impression ».
</aside>

---

## Trois grandes familles

| | Fil fondu (FDM) | Résine (SLA) | Poudre (SLS) |
|---|---|---|---|
| **Matière** | Filament plastique | Résine liquide | Poudre fine |
| **Durcie par** | Refroidissement | Lumière UV | Laser (frittage) |
| **Pour** | Pièces fonctionnelles | Détails fins, bijoux | Pièces industrielles |
| **Atout** | Abordable, simple | Précision, surface lisse | Pas de supports |
| **Limite** | Couches visibles | Toxique, post-traitement | Coût élevé |
{: .table-dense}

[Trois grandes familles](/docs/concepts/3d-printing-technologies/#trois-grandes-familles){: .doc-link}

---

## Pas de technologie universelle

![Impression FDM ratée, un enchevêtrement de filament](/workshops/fab-additive/slides/technologies-materiaux/impression-ratee.jpg){: .img-md}

Chaque procédé a ses avantages et ses limites, et ses échecs : on choisit selon le besoin.
{: .caption}

---

<!-- .slide: class="slide-section" -->

## Le fil fondu (FDM)

La technologie la plus répandue, et celle de la plupart des imprimantes du MakerSpace

---

## Le principe

<div class="columns" markdown="1">
<div markdown="1">

![Dépôt de filament fondu couche par couche](/docs/concepts/3d-printing-technologies/slide_68_image_4.png){: .img-md}

</div>
<div markdown="1">

- Filament de **1,75 mm** fondu dans une buse
- Déposé en cordons, couche par couche
- Couches de **0,05 à 0,3 mm**
- Plus sûr que la résine

</div>
</div>

[Le dépôt de fil fondu](/docs/concepts/3d-printing-technologies/#le-dépôt-de-fil-fondu-fdm--fff){: .doc-link}

<aside class="notes" markdown="1">
FDM (Fused Deposition Modeling) est une marque de Stratasys ; le terme libre, issu de RepRap, est FFF (Fused Filament Fabrication). Couches de 0,05 à 0,3 mm avec une buse de 0,4 mm ; elles restent visibles à l'œil nu.
</aside>

---

## Quatre architectures de machine

| Architecture | Atout | Limite | Au MakerSpace |
|---|---|---|---|
| Bed slinger | Simple, économique | Inertie du plateau | Artillery |
| Cantilever | Compacte, légère | Flexion du bras | Bambu Lab A1 Mini |
| CoreXY | Rapide, précise | Courroies à régler | Bambu Lab P1P, X1C |
| Delta | Rapide, grande hauteur | Calibration délicate | |
{: .table-dense}

Les slides suivantes montrent chaque architecture en mouvement.
{: .caption}

[Les architectures de machine](/docs/concepts/3d-printing-technologies/#les-architectures-de-machine){: .doc-link} [Bambu Lab P1P](/docs/references/machines/bambulab_p1p/){: .doc-link} [Bambu Lab A1 Mini](/docs/references/machines/bambulab_a1_mini/){: .doc-link}

---

## Bed slinger : le plateau bouge

<div class="columns" markdown="1">
<div markdown="1">

![Schéma d'une imprimante bed slinger](/docs/concepts/3d-printing-technologies/slide_69_image_4.png){: .img-md}

</div>
<div markdown="1">

![Imprimante bed slinger](/docs/concepts/3d-printing-technologies/slide_69_image_5.png){: .img-md}

</div>
</div>

Trois axes orthogonaux X, Y, Z ; le plateau se déplace en Y. Simple, mais sa masse limite la vitesse.
{: .caption}

---

## Cantilever : la tête sur un seul bras

<div class="columns" markdown="1">
<div markdown="1">

![Imprimante cantilever](/docs/concepts/3d-printing-technologies/slide_70_image_4.jpg){: .img-md}

</div>
<div markdown="1">

![Imprimante cantilever](/docs/concepts/3d-printing-technologies/slide_70_image_5.jpg){: .img-md}

</div>
</div>

Structure minimaliste, légère et peu coûteuse ; le bras peut fléchir ou vibrer sur les grands formats.
{: .caption}

---

## CoreXY : deux moteurs pour X et Y

<div class="columns is-3" markdown="1">
<div markdown="1">

![Courroies d'une cinématique CoreXY](/docs/concepts/3d-printing-technologies/slide_71_image_7.png){: .img-md}

Deux courroies croisées
{: .caption}

</div>
<div markdown="1">

![Les deux moteurs dans le même sens](/docs/concepts/3d-printing-technologies/slide_72_image_3.gif){: .img-md}

Même sens : X
{: .caption}

</div>
<div markdown="1">

![Les deux moteurs en sens opposé](/docs/concepts/3d-printing-technologies/slide_72_image_4.gif){: .img-md}

Sens opposés : Y
{: .caption}

</div>
</div>

Seule la tête, légère, bouge en X et Y ; le plateau ne descend qu'en Z.
{: .caption}

[CoreXY theory](https://corexy.com/theory.html){: .doc-link}

---

## CoreXY : des exemples

<div class="columns" markdown="1">
<div markdown="1">

![Imprimante CoreXY fermée](/docs/concepts/3d-printing-technologies/slide_71_image_4.jpg){: .img-md}

Machine CoreXY fermée
{: .caption}

</div>
<div markdown="1">

![Bambu Lab P1P](/docs/concepts/3d-printing-technologies/slide_71_image_5.jpg){: .img-md}

Bambu Lab P1P, au MakerSpace
{: .caption}

</div>
</div>

Plus rapides et plus précises, mais plus chères et sensibles au réglage des courroies.
{: .caption}

[Bambu Lab P1P](/docs/references/machines/bambulab_p1p/){: .doc-link} [Bambu Lab X1C](/docs/references/machines/bambulab_x1c/){: .doc-link}

---

## Delta : trois bras

<div class="columns" markdown="1">
<div markdown="1">

![Schéma d'une imprimante delta](/docs/concepts/3d-printing-technologies/slide_73_image_4.png){: .img-md}

</div>
<div markdown="1">

![Imprimante delta](/docs/concepts/3d-printing-technologies/slide_73_image_5.png){: .img-md}

</div>
</div>

Trois bras sur trois colonnes déplacent la tête ensemble : rapide et haute, mais plateau rond et calibration délicate.
{: .caption}

---

## L'extrusion : direct drive ou Bowden

<div class="columns" markdown="1">
<div markdown="1">

![Direct drive et Bowden](/docs/concepts/3d-printing-technologies/slide_75_image_4.png){: .img-md}

</div>
<div markdown="1">

**Direct drive** : le moteur est sur la tête. Meilleur contrôle, idéal pour les filaments souples (TPU), mais tête plus lourde.

**Bowden** : le moteur est déporté et pousse le filament dans un tube. Tête légère et rapide, mais mal adapté aux filaments souples.

</div>
</div>

[Direct drive et Bowden](/docs/concepts/3d-printing-technologies/#direct-drive-ou-bowden){: .doc-link}

<aside class="notes" markdown="1">
L'ensemble d'extrusion : un moteur, des roues d'entraînement qui saisissent et poussent le filament, et la hotend qui le fond.
</aside>

---

## L'extrudeur

<div class="columns is-3" markdown="1">
<div markdown="1">

![Extrudeur monté sur un moteur pas à pas](/docs/concepts/3d-printing-technologies/slide_76_image_4.jpg){: .img-md}

Moteur et extrudeur
{: .caption}

</div>
<div markdown="1">

![Engrenages d'un extrudeur à double entraînement](/docs/concepts/3d-printing-technologies/slide_76_image_5.jpg){: .img-md}

Double entraînement
{: .caption}

</div>
<div markdown="1">

![Extrudeur dans une tête d'impression](/docs/concepts/3d-printing-technologies/slide_76_image_6.jpg){: .img-md}

Intégré à la tête
{: .caption}

</div>
</div>

Il pousse le filament et règle le débit, sans bourrage, même en TPU.
{: .caption}

[L'extrudeur](/docs/concepts/3d-printing-technologies/#lextrudeur){: .doc-link}

---

## La hotend

<div class="columns" markdown="1">
<div markdown="1">

![Vue en coupe d'une hotend](/docs/concepts/3d-printing-technologies/slide_77_image_4.png){: .img-md}

</div>
<div markdown="1">

1. Tube PTFE
2. Dissipateur thermique
3. Ventilateur
4. Barrière thermique
5. Bloc de chauffe
6. Buse

</div>
</div>

Le bloc chauffe à 180-260 °C ; au-dessus de la barrière, le filament reste froid.
{: .caption}

[La hotend](/docs/concepts/3d-printing-technologies/#la-hotend){: .doc-link}

---

## La buse

| Diamètre | Avantage | Limite |
|---|---|---|
| 0,2 mm | Détails fins | Impression lente |
| **0,4 mm** | **Le standard : bon compromis** | |
| 0,6 à 1 mm | Grandes pièces, rapide | Moins de finesse |
{: .table-dense}

- **Laiton** : le standard (PLA, PETG, ABS), mais s'use vite avec les filaments chargés
- **Acier trempé** : pour les filaments abrasifs (carbone, métal)

[La buse](/docs/concepts/3d-printing-technologies/#la-buse){: .doc-link}

---

## Des buses

<div class="columns" markdown="1">
<div markdown="1">

![Buses en laiton](/docs/concepts/3d-printing-technologies/slide_78_image_4.jpg){: .img-md}

Buses en laiton : le standard
{: .caption}

</div>
<div markdown="1">

![Buses de matériaux et de tailles différents](/docs/concepts/3d-printing-technologies/slide_79_image_4.jpg){: .img-md}

Laiton, acier trempé, revêtements
{: .caption}

</div>
</div>

[La buse](/docs/concepts/3d-printing-technologies/#la-buse){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## La résine (SLA)

Solidifier un liquide avec de la lumière

---

## Le principe

<div class="columns" markdown="1">
<div markdown="1">

![Pièce en résine sortant de l'imprimante](/docs/concepts/3d-printing-technologies/slide_81_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- Une résine **photosensible** durcit sous la lumière UV
- La plateforme remonte d'une couche à chaque passage
- Couches quasi invisibles, surface lisse
- Petit volume, impression plus lente

</div>
</div>

[La photopolymérisation en cuve](/docs/concepts/3d-printing-technologies/#la-photopolymérisation-en-cuve-sla-dlp-msla){: .doc-link}

---

## Dans une imprimante résine

<div class="columns" markdown="1">
<div markdown="1">

![Schéma d'une imprimante SLA](/workshops/fab-additive/slides/technologies-materiaux/schema-sla.png){: .img-md}

</div>
<div markdown="1">

1. Plateforme d'impression
2. Tige trapézoïdale
3. Axe Z
4. Réservoir de résine
5. Résine liquide
6. Moteur pas à pas
7. Objet imprimé

</div>
</div>

[Principe de la résine](/docs/concepts/3d-printing-technologies/#principe-1){: .doc-link}

<aside class="notes" markdown="1">
La plateforme descend dans la résine en laissant une fine couche contre le fond du réservoir ; la lumière UV la solidifie ; la plateforme remonte légèrement ; on recommence jusqu'à la fin de l'objet. L'objet est donc imprimé à l'envers.
</aside>

---

## Trois façons d'éclairer la résine

| Procédé | Source de lumière | Temps par couche | Résolution |
|---|---|---|---|
| SLA laser | Laser guidé par deux miroirs | Selon la surface | Finesse du laser |
| DLP | Projecteur numérique | Constant | Celle du projecteur |
| MSLA | LED UV et écran LCD masque | Constant | Celle de l'écran |
{: .table-dense}

Au MakerSpace : la Phrozen Sonic Mighty 4K, une imprimante MSLA. Le DLP et le MSLA éclairent toute la couche d'un coup.
{: .caption}

[Phrozen Sonic Mighty 4K](/docs/references/machines/phrozen_mighty_4k/){: .doc-link}

---

## SLA laser

![Principe de la SLA laser](/docs/concepts/3d-printing-technologies/slide_84_image_4.png){: .img-md}

Le laser « dessine » chaque couche : très précis, mais plus il y a de pièces, plus c'est long.
{: .caption}

---

## DLP

![Principe de la DLP](/docs/concepts/3d-printing-technologies/slide_85_image_5.png){: .img-md}

Un projecteur expose toute la couche d'un coup : temps constant, résolution limitée par le projecteur.
{: .caption}

---

## MSLA

![Principe de la MSLA](/docs/concepts/3d-printing-technologies/slide_86_image_5.png){: .img-md}

Un écran LCD masque la lumière d'une LED UV : rapide et abordable, mais l'écran s'use avec le temps.
{: .caption}

---

## Après l'impression : laver, durcir, se protéger

1. **Laver** la pièce à l'alcool isopropylique (IPA) pour retirer la résine liquide
2. **Durcir** la pièce sous UV pour finir la polymérisation

- **Gants nitrile** obligatoires : la résine liquide irrite et sensibilise la peau
- **Ventilation** : l'IPA est inflammable, ses vapeurs comme celles de la résine sont irritantes

Au MakerSpace, la résine est un module de sécurité de niveau 2 : sessions accompagnées.
{: .caption}

[Module sécurité Résine](/workshops/certification-securite/modules/resine/){: .doc-link} [Station de lavage et polymérisation UV](/docs/references/machines/station-lavage-polymerisation-uv/){: .doc-link}

---

## Laver, puis durcir

![Station de lavage à gauche, de polymérisation UV à droite](/workshops/fab-additive/slides/technologies-materiaux/lavage-polymerisation-uv.jpg){: .img-md}

Une station de lavage dans l'IPA, puis une station de polymérisation sous UV : des résultats réguliers.
{: .caption}

[Station de lavage et polymérisation UV](/docs/references/machines/station-lavage-polymerisation-uv/){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## La poudre et les autres procédés

Frittage, liant, jet de matière

---

## Le frittage laser (SLS)

<div class="columns" markdown="1">
<div markdown="1">

![Pièce frittée dans son lit de poudre](/docs/concepts/3d-printing-technologies/slide_88_image_0.jpg){: .img-md}

</div>
<div markdown="1">

1. Un rouleau étale une fine couche de poudre
2. Le laser fritte la forme de la couche
3. Le plateau descend, et on recommence

</div>
</div>

La poudre autour soutient la pièce : **pas de supports**, et la poudre non frittée se réutilise. Le DMLS applique le même principe aux métaux.
{: .caption}

[La fusion sur lit de poudre](/docs/concepts/3d-printing-technologies/#la-fusion-sur-lit-de-poudre-sls-dmls){: .doc-link}

---

## Dans une machine SLS

<div class="columns" markdown="1">
<div markdown="1">

![Schéma d'une machine SLS](/docs/concepts/3d-printing-technologies/slide_89_image_4.png){: .img-md}

</div>
<div markdown="1">

![Pièces SLS sorties de la poudre](/docs/concepts/3d-printing-technologies/slide_88_image_6.jpg){: .img-md}

</div>
</div>

Les machines coûtent au moins 5 500 € : un procédé surtout industriel (automobile, aéronautique, médical).
{: .caption}

---

## Dépoudrer les pièces

![Pièce SLS extraite et nettoyée de sa poudre](/docs/concepts/3d-printing-technologies/slide_88_image_5.jpg){: .img-md}

Chaque pièce est extraite du bac, puis débarrassée de la poudre non frittée, qui sera réutilisée.
{: .caption}

---

## Binder Jetting et PolyJet

<div class="columns" markdown="1">
<div markdown="1">

![Pièces en Binder Jetting](/docs/concepts/3d-printing-technologies/slide_91_image_5.jpg){: .img-md}

**Binder Jetting** : poudre et liant
{: .caption}

</div>
<div markdown="1">

![Pièces en PolyJet](/docs/concepts/3d-printing-technologies/slide_92_image_4.jpg){: .img-md}

**PolyJet** : résine multicolore
{: .caption}

</div>
</div>

[Les autres procédés](/docs/concepts/3d-printing-technologies/#les-autres-procédés){: .doc-link}

---

## Binder Jetting

<div class="columns" markdown="1">
<div markdown="1">

![Tête d'impression Binder Jetting déposant le liant](/docs/concepts/3d-printing-technologies/slide_91_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- Une couche de poudre : métal, sable, céramique
- Une tête dépose un **liant** là où il faut
- Rapide : toute la couche d'un coup
- Pièce ensuite frittée ou infiltrée

</div>
</div>

[Binder Jetting](/docs/concepts/3d-printing-technologies/#binder-jetting){: .doc-link}

---

## PolyJet

<div class="columns" markdown="1">
<div markdown="1">

![Imprimante PolyJet en cours d'impression](/docs/concepts/3d-printing-technologies/slide_92_image_5.jpg){: .img-md}

</div>
<div markdown="1">

- Des gouttes de **résine** projetées
- Durcies aussitôt par UV
- Couches de 16 microns
- Couleurs et matières mélangées

</div>
</div>

[PolyJet](/docs/concepts/3d-printing-technologies/#polyjet){: .doc-link}

---

## Activité : quelle technologie choisir ?

<p class="activity-meta"><span><i class="fas fa-user-friends"></i>Binôme</span><span><i class="far fa-clock"></i>3 min</span></p>

1. Une figurine de 3 cm, très détaillée <span class="fragment">: **résine (MSLA)**</span>
2. Un support de capteur à fixer sur un châssis <span class="fragment">: **fil fondu (PETG)**</span>
3. 50 engrenages en nylon pour une petite série <span class="fragment">: **frittage (SLS)**</span>
4. Une maquette multicolore réaliste pour un salon <span class="fragment">: **PolyJet**</span>

Pour chaque cas, une technologie et une raison.
{: .caption}

---

<!-- .slide: class="slide-section" -->

## Les matériaux

À chaque technologie sa matière

---

## Les familles de matériaux

| Technologie | Matière | Exemples |
|---|---|---|
| FDM | Filaments | PLA, PETG, TPU, ABS |
| SLA, DLP, MSLA | Résines | Standard, flexibles, haute résistance |
| SLS, Binder Jetting | Poudres | Nylon, métaux, céramiques |
| PolyJet | Photopolymères | Multimatériaux, couleurs |
{: .table-dense}

Pour la suite, on se concentre sur les **filaments** : ceux des imprimantes FDM.
{: .caption}

[Les matériaux](/docs/concepts/3d-printing-technologies/#les-matériaux){: .doc-link}

---

## Filament, résine, poudre

<div class="columns is-3" markdown="1">
<div markdown="1">

![Bobine de filament](/docs/concepts/3d-printing-technologies/slide_94_image_4.jpg){: .img-md}

Filament (FDM)
{: .caption}

</div>
<div markdown="1">

![Flacon de résine et pièces imprimées](/docs/concepts/3d-printing-technologies/slide_94_image_5.jpg){: .img-md}

Résine (SLA, MSLA)
{: .caption}

</div>
<div markdown="1">

![Flacon de poudre](/docs/concepts/3d-printing-technologies/slide_94_image_6.jpg){: .img-md}

Poudre (SLS)
{: .caption}

</div>
</div>

---

## Les filaments courants

| Filament | Buse | Atout | Limite |
|---|---|---|---|
| **PLA** | 190-220 °C | Facile, peu de déformation | Fragile, craint la chaleur |
| **PETG** | 220-250 °C | Résistant, tient l'humidité | Fils (stringing) |
| **TPU** | 200-250 °C | Souple et élastique | Extrudeur direct drive |
| **ABS** | 220-250 °C | Chocs et chaleur | Warping, vapeurs |
| **PVA** | 180-210 °C | Support soluble dans l'eau | Craint l'humidité |
{: .table-dense}

Le PLA pour débuter et pour les prototypes, le PETG dès que la pièce doit travailler.
{: .caption}

[Les filaments courants](/docs/concepts/3d-printing-technologies/#les-filaments-courants){: .doc-link}

---

## PLA : acide polylactique

<div class="columns" markdown="1">
<div markdown="1">

![Bobine de PLA et pièce imprimée](/docs/concepts/3d-printing-technologies/slide_96_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- **190-220 °C**
- Biosourcé, facile à imprimer
- Objets décoratifs, prototypes
- Fragile, craint la chaleur

</div>
</div>

[Les filaments courants](/docs/concepts/3d-printing-technologies/#les-filaments-courants){: .doc-link}

---

## PETG

<div class="columns" markdown="1">
<div markdown="1">

![Bobine de PETG et pièce imprimée](/docs/concepts/3d-printing-technologies/slide_97_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- **220-250 °C**
- Résistant, bonne adhésion des couches
- Pièces fonctionnelles
- Craint l'humidité, fait des fils

</div>
</div>

[Les filaments courants](/docs/concepts/3d-printing-technologies/#les-filaments-courants){: .doc-link}

---

## TPU : le filament souple

<div class="columns" markdown="1">
<div markdown="1">

![Bobine de TPU et pièce souple](/docs/concepts/3d-printing-technologies/slide_98_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- **200-250 °C**
- Flexible, élastique, très résistant
- Joints, semelles, amortisseurs
- Demande un extrudeur direct drive

</div>
</div>

[Les filaments courants](/docs/concepts/3d-printing-technologies/#les-filaments-courants){: .doc-link}

---

## ABS

<div class="columns" markdown="1">
<div markdown="1">

![Briques de construction en ABS](/docs/concepts/3d-printing-technologies/slide_99_image_4.jpg){: .img-md}

Les briques LEGO sont en ABS
{: .caption}

</div>
<div markdown="1">

![Bobine d'ABS et pièce imprimée](/docs/concepts/3d-printing-technologies/slide_99_image_5.jpg){: .img-md}

220-250 °C
{: .caption}

</div>
</div>

Résiste aux chocs et à la chaleur ; enceinte fermée et ventilation conseillées.
{: .caption}

[Les filaments courants](/docs/concepts/3d-printing-technologies/#les-filaments-courants){: .doc-link}

---

## PVA : le support soluble

<div class="columns" markdown="1">
<div markdown="1">

![Pièce dont le support en PVA se dissout dans l'eau](/docs/concepts/3d-printing-technologies/slide_100_image_4.jpg){: .img-md}

Le support se dissout dans l'eau
{: .caption}

</div>
<div markdown="1">

![Bobine de PVA et pièce complexe](/docs/concepts/3d-printing-technologies/slide_100_image_5.jpg){: .img-md}

180-210 °C, en double extrusion
{: .caption}

</div>
</div>

Libère des géométries impossibles à supporter autrement ; se stocke au sec.
{: .caption}

[Les filaments courants](/docs/concepts/3d-printing-technologies/#les-filaments-courants){: .doc-link}

---

## Les filaments techniques

| Filament | Usage |
|---|---|
| **HIPS** | Support soluble (limonène) pour l'ABS |
| **Nylon** | Engrenages, pièces mécaniques ; craint l'humidité |
| **PC** | Très résistant aux chocs et à la chaleur |
| **PP** | Souple, résiste aux produits chimiques |
| **ASA** | Un ABS qui résiste aux UV : pièces d'extérieur |
| **Composites** | PLA ou ABS chargé bois, métal, carbone |
| **PEEK, PEI** | Hautes performances, imprimantes industrielles |
{: .table-dense}

[Les filaments techniques](/docs/concepts/3d-printing-technologies/#les-filaments-techniques){: .doc-link}

---

## À retenir

- Pas de technologie universelle : **fil fondu, résine, poudre**
- En FDM, l'architecture, l'extrusion et la buse font la machine
- La résine donne des détails fins, au prix du post-traitement et de précautions
- **PLA** pour débuter, **PETG** pour une pièce fonctionnelle, **TPU** pour la souplesse

Schémas des technologies : « Les bases de l'impression 3D », Prusa Research.
{: .caption}

[Partie 3 : le workflow](/workshops/fab-additive/slides/workflow-impression-3d/){: .doc-link} [Les bases de l'impression (Prusa)](/docs/references/others/bases-de-limpression-prusa/){: .doc-link}
