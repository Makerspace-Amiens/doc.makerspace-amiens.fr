---
layout: slides
title: Fabrication additive
subtitle: "Partie 3 : le workflow, du modèle 3D à la pièce"
description: Support de cours sur la chaîne logicielle de l'impression 3D (modélisation, export, slicer, réglages, G-code) et les règles pour concevoir une pièce imprimable.
author: Adrien Bracq
kicker: MakerSpace Amiens
back_link: /workshops/fab-additive/
---

## Au programme

1. Du fichier à la pièce
2. Obtenir un modèle 3D
3. Exporter
4. Trancher : le slicer
5. Les réglages de base
6. Concevoir pour l'impression
7. Le G-code

<aside class="notes" markdown="1">
La version rédigée du cours est la page concept « Le workflow logiciel ».
</aside>

---

## Du fichier à la pièce

```mermaid!
graph LR
    A[Modèle 3D<br/>CAO, scan, bibliothèque] --> B[Export<br/>STL, 3MF]
    B --> C[Slicer<br/>couches et réglages]
    C --> D[G-code<br/>instructions]
    D --> E[Imprimante]
    style C fill:#ef2e31,stroke:#ef2e31,color:#ffffff
```

![Modèle 3D, G-code, impression](/docs/concepts/3d-printing-workflow/slide_105_image_8.png){: .img-sm}

Le slicer est le pivot : il traduit une forme en trajets que la machine sait suivre.
{: .caption}

[Du fichier à la pièce](/docs/concepts/3d-printing-workflow/#du-fichier-à-la-pièce){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Obtenir un modèle 3D

Télécharger, scanner, modéliser, concevoir

---

## Six façons d'obtenir un modèle

| Voie | Outil | Pour | Limite |
|---|---|---|---|
| Télécharger | Printables, Thingiverse | Objet déjà conçu | Rarement à votre cote |
| Scanner | Scanner 3D | Copier un objet existant | Retouches nécessaires |
| Modéliser | Blender | Formes organiques | Imprécis |
| CAO | Onshape, Fusion | Pièces techniques | Apprentissage |
| Coder | OpenSCAD | Pièces paramétriques | Programmation |
| Générer (IA) | Rodin | Concept rapide | Modèle à retravailler |
{: .table-dense}

Pour une pièce de projet, la CAO est presque toujours la bonne voie.
{: .caption}

[Obtenir un modèle 3D](/docs/concepts/3d-printing-workflow/#obtenir-un-modèle-3d){: .doc-link} [Atelier CAO](/workshops/cao/){: .doc-link}

---

## Les bibliothèques en ligne

<div class="columns" markdown="1">
<div markdown="1">

- **[Printables](https://www.printables.com/)** : Prusa
- **[Thingiverse](https://www.thingiverse.com/)** : la plus grande
- **[Cults](https://cults3d.com/)** : gratuit et payant
- **[GrabCAD](https://grabcad.com/)** : ingénierie
- **[YouMagine](https://www.youmagine.com/)** : open source

</div>
<div markdown="1">

![Page d'accueil de Printables](/docs/concepts/3d-printing-workflow/slide_107_image_4.jpg){: .img-md}

</div>
</div>

Vérifiez la licence avant de réutiliser ou de modifier un modèle, et citez son auteur.
{: .caption}

---

## Scanner un objet

<div class="columns" markdown="1">
<div markdown="1">

![Scanner 3D à plateau tournant](/docs/concepts/3d-printing-workflow/slide_108_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- Capture la forme d'un objet réel
- Utile en rétro-conception
- Échoue sur le transparent, le brillant, le sombre
- Le maillage obtenu se retouche toujours

</div>
</div>

[Scanner un objet](/docs/concepts/3d-printing-workflow/#scanner-un-objet){: .doc-link}

---

## Les limites du scan

<div class="columns" markdown="1">
<div markdown="1">

![Scanner 3D à main](/docs/concepts/3d-printing-workflow/slide_108_image_5.jpg){: .img-md}

</div>
<div markdown="1">

- Précision limitée en grand public
- Surfaces transparentes, brillantes ou sombres
- Trous et défauts à reprendre
- Scanners pros coûteux

</div>
</div>

[Scanner un objet](/docs/concepts/3d-printing-workflow/#scanner-un-objet){: .doc-link}

---

## Modéliser ou concevoir ?

<div class="columns" markdown="1">
<div markdown="1">

![Modélisation organique dans Blender](/docs/concepts/3d-printing-workflow/slide_110_image_5.jpg){: .img-md}

**Modélisation** (Blender) : on sculpte des formes libres, sans cotes
{: .caption}

</div>
<div markdown="1">

![Pièce mécanique dans Fusion](/docs/concepts/3d-printing-workflow/slide_112_image_5.jpg){: .img-md}

**CAO paramétrique** (Fusion, Onshape) : chaque forme est définie par des cotes et des contraintes modifiables
{: .caption}

</div>
</div>

[Modéliser ou concevoir](/docs/concepts/3d-printing-workflow/#modéliser-ou-concevoir--maillage-contre-solide){: .doc-link} [Installer Onshape](/docs/tutorials/software/onshape/onshape-installation/){: .doc-link}

---

## Modéliser : Blender

<div class="columns" markdown="1">
<div markdown="1">

![Interface de Blender](/docs/concepts/3d-printing-workflow/slide_110_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- Formes organiques : personnages, sculptures
- Export STL ou OBJ
- Gratuit et open source
- Interface exigeante, peu précis en mécanique

</div>
</div>

[Modéliser ou concevoir](/docs/concepts/3d-printing-workflow/#modéliser-ou-concevoir--maillage-contre-solide){: .doc-link}

---

## Concevoir : la CAO paramétrique

<div class="columns" markdown="1">
<div markdown="1">

![Pièce mécanique cotée dans un logiciel de CAO](/docs/concepts/3d-printing-workflow/slide_112_image_6.jpg){: .img-md}

</div>
<div markdown="1">

- Cotes et contraintes modifiables
- Une cote change, la pièce suit
- Le standard de l'industrie
- Long à maîtriser, parfois coûteux

</div>
</div>

[Modéliser ou concevoir](/docs/concepts/3d-printing-workflow/#modéliser-ou-concevoir--maillage-contre-solide){: .doc-link}

---

## Les logiciels de CAO

<div class="columns is-3" markdown="1">
<div markdown="1">

![Assemblage mécanique dans un logiciel de CAO](/docs/concepts/3d-printing-workflow/slide_111_image_4.jpg){: .img-md}

</div>
<div markdown="1">

![Assemblage dans Onshape](/docs/concepts/3d-printing-workflow/slide_111_image_5.jpg){: .img-md}

</div>
<div markdown="1">

![Machine conçue dans un logiciel de CAO](/docs/concepts/3d-printing-workflow/slide_112_image_4.jpg){: .img-md}

</div>
</div>

Onshape et Fusion (gratuits pour les étudiants), FreeCAD (libre), SolidWorks, Catia, Creo, Inventor, Siemens NX...
{: .caption}

[Atelier CAO](/workshops/cao/){: .doc-link} [Modéliser ou concevoir](/docs/concepts/3d-printing-workflow/#modéliser-ou-concevoir--maillage-contre-solide){: .doc-link}

---

## Modéliser par le code : OpenSCAD

<div class="columns" markdown="1">
<div markdown="1">

```text
largeur = 30;
difference() {
  cube([largeur, 20, 10]);
  translate([largeur/2, 10, -1])
    cylinder(d = 8, h = 12);
}
```

</div>
<div markdown="1">

![Engrenages modélisés dans OpenSCAD](/docs/concepts/3d-printing-workflow/slide_113_image_4.jpg){: .img-md}

</div>
</div>

Changer une variable regénère la pièce : idéal pour les pièces répétitives ou paramétriques, peu adapté aux formes organiques.
{: .caption}

[Modéliser par le code](/docs/concepts/3d-printing-workflow/#modéliser-par-le-code--openscad){: .doc-link}

---

## OpenSCAD : le code à gauche, la pièce à droite

![Interface d'OpenSCAD avec un engrenage](/docs/concepts/3d-printing-workflow/slide_113_image_5.png){: .img-md}

Logiciel libre et léger : chaque forme est une ligne de code, chaque cote une variable.
{: .caption}

---

## Générer par IA : Rodin

![Présentation de l'outil Rodin](/docs/concepts/3d-printing-workflow/slide_114_image_4.jpg){: .img-md}

Un modèle à partir d'un texte ou d'une image : rapide pour un concept, mais des détails imparfaits et un modèle à retravailler.
{: .caption}

[Générer par IA](/docs/concepts/3d-printing-workflow/#générer-par-ia){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Exporter

Le fichier qui passe du logiciel de conception au slicer

---

## Les formats d'export

| Format | Contient | Usage |
|---|---|---|
| **STL** | La géométrie seule, en triangles | Le plus universel |
| **OBJ** | Géométrie, couleurs, textures | Modèles multicolores |
| **3MF** | Géométrie, couleurs, matériaux, réglages | Projet complet |
{: .table-dense}

Préférez le **3MF** : un seul fichier compact, qui garde les réglages d'impression et passe d'un logiciel à l'autre sans perte.
{: .caption}

[Les formats d'export](/docs/concepts/3d-printing-workflow/#les-formats-dexport){: .doc-link} [Le 3MF](/docs/concepts/3d-printing-workflow/#le-3mf){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Trancher : le slicer

Du modèle 3D aux instructions machine

---

## Le rôle du slicer

<div class="columns" markdown="1">
<div markdown="1">

![Pièce tranchée dans le slicer](/docs/concepts/3d-printing-workflow/slide_119_image_4.jpg){: .img-md}

</div>
<div markdown="1">

1. Il **charge** le modèle (STL, 3MF)
2. Il le **découpe** en couches horizontales
3. Il **génère** les trajets et les réglages : le G-code

</div>
</div>

[Ce que fait le slicer](/docs/concepts/3d-printing-workflow/#ce-que-fait-le-slicer){: .doc-link}

---

## Quel slicer ?

| Slicer | Éditeur | Pour |
|---|---|---|
| **OrcaSlicer** | Communauté (fork de Bambu Studio) | Multimarque, open source |
| Bambu Studio | Bambu Lab | Imprimantes Bambu Lab |
| PrusaSlicer | Prusa Research | Multimarque, open source |
| Cura | UltiMaker | Multimarque, nombreux plugins |
| ChiTuBox, Lychee | | Imprimantes résine |
{: .table-dense}

Au MakerSpace, les tutoriels utilisent OrcaSlicer.
{: .caption}

[Imprimer une pièce avec OrcaSlicer](/docs/tutorials/production/imprimer-une-piece/){: .doc-link} [Quel slicer ?](/docs/concepts/3d-printing-workflow/#quel-slicer-){: .doc-link}

---

## OrcaSlicer

<div class="columns" markdown="1">
<div markdown="1">

![Interface de OrcaSlicer](/docs/concepts/3d-printing-workflow/slide_124_image_4.jpg){: .img-md}

</div>
<div markdown="1">

![Pièce tranchée dans OrcaSlicer](/docs/concepts/3d-printing-workflow/slide_124_image_5.jpg){: .img-md}

</div>
</div>

Fork libre de Bambu Studio : multimarque, communauté active, nouveautés fréquentes.
{: .caption}

[Quel slicer ?](/docs/concepts/3d-printing-workflow/#quel-slicer-){: .doc-link} [Imprimer une pièce avec OrcaSlicer](/docs/tutorials/production/imprimer-une-piece/){: .doc-link}

---

## Bambu Studio

<div class="columns" markdown="1">
<div markdown="1">

![Interface de Bambu Studio](/docs/concepts/3d-printing-workflow/slide_123_image_4.jpg){: .img-md}

</div>
<div markdown="1">

![Pièce tranchée dans Bambu Studio](/docs/concepts/3d-printing-workflow/slide_123_image_5.jpg){: .img-md}

</div>
</div>

Pensé pour les imprimantes Bambu Lab : gestion avancée des couleurs et des matériaux.
{: .caption}

[Quel slicer ?](/docs/concepts/3d-printing-workflow/#quel-slicer-){: .doc-link}

---

## PrusaSlicer

<div class="columns" markdown="1">
<div markdown="1">

![Interface de PrusaSlicer](/docs/concepts/3d-printing-workflow/slide_122_image_4.png){: .img-md}

</div>
<div markdown="1">

![Pièce tranchée dans PrusaSlicer](/docs/concepts/3d-printing-workflow/slide_122_image_5.jpg){: .img-md}

</div>
</div>

Libre, issu de Slic3r, optimisé pour Prusa mais compatible avec d'autres marques.
{: .caption}

[Quel slicer ?](/docs/concepts/3d-printing-workflow/#quel-slicer-){: .doc-link}

---

## Cura

<div class="columns" markdown="1">
<div markdown="1">

![Interface de Cura](/docs/concepts/3d-printing-workflow/slide_121_image_4.jpg){: .img-md}

</div>
<div markdown="1">

![Pièce tranchée dans Cura](/docs/concepts/3d-printing-workflow/slide_121_image_5.jpg){: .img-md}

</div>
</div>

Libre et gratuit, de nombreux plugins ; peut être gourmand en ressources.
{: .caption}

[Quel slicer ?](/docs/concepts/3d-printing-workflow/#quel-slicer-){: .doc-link}

---

## L'anomalie : FullControl

<div class="columns" markdown="1">
<div markdown="1">

![Interface de FullControl](/docs/concepts/3d-printing-workflow/slide_125_image_4.png){: .img-md}

</div>
<div markdown="1">

![Structure générée avec FullControl](/workshops/fab-additive/slides/workflow-impression-3d/fullcontrol-structure.png){: .img-md}

</div>
</div>

Pas de modèle 3D : on décrit directement les trajets de la buse, par programmation. Pour des treillis, des objets mathématiques, la recherche.
{: .caption}

[fullcontrol.xyz](https://fullcontrol.xyz){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Les réglages de base

Qualité, solidité, temps : tout se joue ici

---

## Pourquoi régler ?

<div class="columns" markdown="1">
<div markdown="1">

![Panneau de réglages d'un slicer](/docs/concepts/3d-printing-workflow/slide_128_image_4.jpg){: .img-md}

</div>
<div markdown="1">

- **Qualité** : précision, solidité, finition
- **Efficacité** : temps et matière
- **Adhérence** : la pièce tient au plateau

</div>
</div>

[Les réglages de base](/docs/concepts/3d-printing-workflow/#les-réglages-de-base){: .doc-link}

---

## Les températures

<div class="columns" markdown="1">
<div markdown="1">

![Température d'impression selon la vitesse et le filament](/docs/concepts/3d-printing-workflow/slide_129_image_4.jpg){: .img-md}

</div>
<div markdown="1">

![Tour de température](/docs/concepts/3d-printing-workflow/slide_129_image_5.jpg){: .img-md}

</div>
</div>

Partez de la plage du fabricant, affinez avec une tour de température.
{: .caption}

[Les températures](/docs/concepts/3d-printing-workflow/#les-températures){: .doc-link}

<aside class="notes" markdown="1">
Ordres de grandeur : buse entre 190 et 250 °C, plateau entre 60 et 100 °C selon le filament. Le graphique montre qu'il faut chauffer davantage quand on imprime plus vite. La tour imprime chaque étage à une température différente : on garde la plus belle.
</aside>

---

## La hauteur de couche

![Même pièce imprimée à 0,2, 0,1 et 0,05 mm](/docs/concepts/3d-printing-workflow/slide_130_image_4.png){: .img-md}

Couches deux fois plus fines : environ deux fois plus de temps. 0,2 mm convient à la plupart des pièces.
{: .caption}

[La hauteur de couche](/docs/concepts/3d-printing-workflow/#la-hauteur-de-couche){: .doc-link}

<aside class="notes" markdown="1">
Certains slicers adaptent la hauteur selon les zones : fine sur les courbes, épaisse sur les parois droites.
</aside>

---

## Parois et couches pleines

$$\text{épaisseur de paroi} = \text{nombre de périmètres} \times \text{largeur du cordon}$$

- Avec une buse de 0,4 mm, un cordon fait environ **0,45 mm**
- **3 à 5 couches pleines** dessus et dessous ; plus de couches, plus de résistance

Trois périmètres : quelle épaisseur de paroi ?
{: .caption}

Environ 3 × 0,45 = **1,35 mm**. Dessinez vos parois en multiples de la largeur du cordon.
{: .fragment .fade-up}

[Parois et couches pleines](/docs/concepts/3d-printing-workflow/#parois-et-couches-pleines){: .doc-link}

---

## Parois et couches pleines dans le slicer

<div class="columns" markdown="1">

![Paroi de trois périmètres](/workshops/fab-additive/slides/workflow-impression-3d/parois-trois-perimetres.png){: .img-sm}

![Paroi d'un seul périmètre](/workshops/fab-additive/slides/workflow-impression-3d/parois-un-perimetre.png){: .img-sm}

![Couches pleines du fond](/workshops/fab-additive/slides/workflow-impression-3d/couches-pleines-fond.png){: .img-sm}

![Couches pleines du dessus](/workshops/fab-additive/slides/workflow-impression-3d/couches-pleines-dessus.png){: .img-sm}

</div>

---

## Le remplissage

![Motifs de remplissage à 20, 40, 60 et 80 %](/docs/concepts/3d-printing-workflow/slide_132_image_5.png)
{: .img-md}

10 à 20 % suffisent le plus souvent. Pour une pièce plus solide, ajouter des parois aide souvent plus qu'augmenter le remplissage.
{: .caption}

[Le remplissage](/docs/concepts/3d-printing-workflow/#le-remplissage){: .doc-link}

---

## Les supports

<div class="columns" markdown="1">
<div markdown="1">

![Pièce avec un surplomb sans support](/docs/concepts/3d-printing-workflow/slide_133_image_4.png){: .img-md}

</div>
<div markdown="1">

![Même pièce avec ses supports](/docs/concepts/3d-printing-workflow/slide_133_image_5.png){: .img-md}

</div>
</div>

Des structures temporaires sous les surplombs, à retirer après impression : elles coûtent du temps, de la matière et laissent des traces.
{: .caption}

[Les supports](/docs/concepts/3d-printing-workflow/#les-supports){: .doc-link}

---

## L'adhérence au plateau

<div class="columns is-3" markdown="1">
<div markdown="1">

![Pièce avec une bordure](/docs/concepts/3d-printing-workflow/slide_134_image_5.png){: .img-md}

**Bordure** : pièces petites ou fines
{: .caption}

</div>
<div markdown="1">

![Pièce sur un radeau](/docs/concepts/3d-printing-workflow/slide_134_image_4.png){: .img-md}

**Radeau** : contre le warping
{: .caption}

</div>
<div markdown="1">

![Pièce avec des oreilles aux coins](/docs/concepts/3d-printing-workflow/slide_134_image_6.png){: .img-md}

**Oreilles** : aux coins
{: .caption}

</div>
</div>

[L'adhérence au plateau](/docs/concepts/3d-printing-workflow/#ladhérence-au-plateau){: .doc-link} [La pièce ne colle pas](/docs/how-to-guides/3d-printing-troubleshooting/#adhésion-au-plateau-la-pièce-ne-colle-pas){: .doc-link}

---

## Ponts et refroidissement

<div class="columns is-3" markdown="1">
<div markdown="1">

![Pièce de test complète](/docs/concepts/3d-printing-workflow/slide_135_image_4.png){: .img-md}

</div>
<div markdown="1">

![Pièce de test avec ponts et surplombs](/docs/concepts/3d-printing-workflow/slide_135_image_5.png){: .img-md}

</div>
<div markdown="1">

![Aperçu tranché de la pièce de test](/docs/concepts/3d-printing-workflow/slide_135_image_6.png){: .img-md}

</div>
</div>

Un pont est tiré dans le vide entre deux appuis : le ventilateur doit le figer aussitôt.
{: .caption}

[Ponts et refroidissement](/docs/concepts/3d-printing-workflow/#ponts-et-refroidissement){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Concevoir pour l'impression

Une pièce bien dessinée s'imprime sans réglage compliqué

---

## Éviter les supports

<div class="columns" markdown="1">
<div markdown="1">

![Surplomb qui demande des supports](/docs/concepts/3d-printing-workflow/slide_137_image_4.png){: .img-md}

</div>
<div markdown="1">

![Surplomb remplacé par un chanfrein](/docs/concepts/3d-printing-workflow/slide_137_image_5.png){: .img-md}

</div>
</div>

L'imprimante ne dépose rien dans le vide. Un chanfrein à 45° remplace un surplomb à angle droit et supprime le support.
{: .caption}

[Éviter les supports](/docs/concepts/3d-printing-workflow/#éviter-les-supports){: .doc-link} [Porte-à-faux](/docs/how-to-guides/3d-printing-design-rules/#porte-à-faux){: .doc-link}

---

## Choisir la face posée sur le plateau

<div class="columns" markdown="1">
<div markdown="1">

![Face imprimée contre le plateau](/docs/concepts/3d-printing-workflow/slide_138_image_4.png){: .img-md}

Contre le plateau : lisse et régulière
{: .caption}

</div>
<div markdown="1">

![Face imprimée sur des supports](/docs/concepts/3d-printing-workflow/slide_138_image_5.png){: .img-md}

Sur des supports : irrégulière
{: .caption}

</div>
</div>

Posez sur le plateau la face qui doit être belle ou plane.
{: .caption}

[Choisir la face posée sur le plateau](/docs/concepts/3d-printing-workflow/#choisir-la-face-posée-sur-le-plateau){: .doc-link}

---

## Orienter les couches selon l'effort

<div class="columns" markdown="1">
<div markdown="1">

![Équerre posée sur la tranche](/docs/concepts/3d-printing-workflow/slide_139_image_4.png){: .img-md}

</div>
<div markdown="1">

![Équerre posée à plat](/docs/concepts/3d-printing-workflow/slide_139_image_5.png){: .img-md}

</div>
</div>

Une pièce casse entre deux couches : l'effort ne doit pas chercher à les séparer.
{: .caption}

[Orienter les couches selon l'effort](/docs/concepts/3d-printing-workflow/#orienter-les-couches-selon-leffort){: .doc-link}

<aside class="notes" markdown="1">
Demander à la salle laquelle des deux équerres résiste le mieux si on appuie sur l'aile verticale. Celle posée sur la tranche (à gauche) : chaque couche contient tout le profil en L, l'angle ne peut pas se décoller. Posée à plat (à droite), l'aile verticale casse au ras de la base, entre deux couches.
</aside>

---

## Découper le modèle

<div class="columns" markdown="1">
<div markdown="1">

![Sphère imprimée d'une pièce](/docs/concepts/3d-printing-workflow/slide_140_image_4.jpg){: .img-md}

D'une pièce : supports et surface abîmée
{: .caption}

</div>
<div markdown="1">

![Sphère imprimée en deux moitiés](/docs/concepts/3d-printing-workflow/slide_140_image_5.png){: .img-md}

En deux moitiés posées à plat, puis assemblées
{: .caption}

</div>
</div>

[Découper le modèle](/docs/concepts/3d-printing-workflow/#découper-le-modèle){: .doc-link}

---

## Prévoir du jeu dans les assemblages

<div class="columns" markdown="1">
<div markdown="1">

![Couture de couche à l'intérieur d'un trou](/docs/concepts/3d-printing-workflow/slide_141_image_4.jpg){: .img-md}

</div>
<div markdown="1">

![Encoche qui cache la couture](/docs/concepts/3d-printing-workflow/slide_141_image_5.png){: .img-md}

</div>
</div>

Environ 0,15 mm de jeu pour une tige de 10 mm, à valider par un essai sur votre machine.
{: .caption}

[Prévoir du jeu dans les assemblages](/docs/concepts/3d-printing-workflow/#prévoir-du-jeu-dans-les-assemblages){: .doc-link} [Jeu](/docs/how-to-guides/3d-printing-design-rules/#jeu){: .doc-link} [Tolérances de fabrication](/docs/concepts/tolerances-fabrication/){: .doc-link}

<aside class="notes" markdown="1">
À gauche : la couture (le point où chaque couche commence et finit) forme une bosse dans le trou et gêne l'emboîtement. À droite : une petite encoche dessinée dans le trou accueille cette couture. Le jeu dépend de la machine et du filament : imprimer une pièce de test avant la pièce finale.
</aside>

---

## Orienter les trous

<div class="columns is-3" markdown="1">
<div markdown="1">

![Trou dans une paroi verticale](/docs/concepts/3d-printing-workflow/slide_142_image_4.png){: .img-md}

Paroi verticale : le haut s'affaisse
{: .caption}

</div>
<div markdown="1">

![Trou dans une plaque horizontale](/docs/concepts/3d-printing-workflow/slide_142_image_5.png){: .img-md}

Face horizontale : bien rond
{: .caption}

</div>
<div markdown="1">

![Logo RepRap en forme de goutte d'eau](/docs/concepts/3d-printing-workflow/slide_141_image_6.jpg){: .img-md}

Sinon : la goutte d'eau
{: .caption}

</div>
</div>

[Orienter les trous](/docs/concepts/3d-printing-workflow/#orienter-les-trous){: .doc-link} [Trous horizontaux](/docs/how-to-guides/3d-printing-design-rules/#trous-horizontaux){: .doc-link}

<aside class="notes" markdown="1">
Si le trou doit rester dans une paroi verticale, le dessiner en goutte d'eau : la pointe en haut s'imprime sans support.
</aside>

---

## Les détails plus fins que la buse

<div class="columns" markdown="1">
<div markdown="1">

![Lettres en relief vues dans le slicer](/docs/concepts/3d-printing-workflow/slide_143_image_4.png){: .img-md}

</div>
<div markdown="1">

![Mêmes lettres, tracées autrement par le slicer](/docs/concepts/3d-printing-workflow/slide_143_image_5.png){: .img-md}

</div>
</div>

Le slicer remplit chaque trait avec des cordons d'environ 0,45 mm (buse de 0,4 mm) : dessinez des traits au moins aussi larges, idéalement un multiple de cette largeur.
{: .caption}

[Les détails plus fins que la buse](/docs/concepts/3d-printing-workflow/#les-détails-plus-fins-que-la-buse){: .doc-link} [Taille des détails](/docs/how-to-guides/3d-printing-design-rules/#taille-des-détails){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Le G-code

Le langage de la machine

---

## Lire du G-code

```gcode
M140 S60          ; plateau à 60 °C
M104 S215         ; buse à 215 °C
G28               ; retour à l'origine
G1 Z0.2 F1500     ; descendre à 0,2 mm
G1 X10 Y20 E0.8   ; aller en X10 Y20 en extrudant
```

- Une commande par ligne : **G** pour les mouvements, **M** pour la machine (températures, ventilateur)
- Né dans les années 1950 pour les machines à commande numérique

[Le G-code](/docs/concepts/3d-printing-workflow/#le-g-code){: .doc-link}

---

## Le G-code à côté de l'aperçu

<div class="columns" markdown="1">
<div markdown="1">

![G-code affiché à côté de l'aperçu de la pièce](/docs/concepts/3d-printing-workflow/slide_145_image_4.jpg){: .img-md}

</div>
<div markdown="1">

![Liste de commandes G-code](/docs/concepts/3d-printing-workflow/slide_146_image_4.png){: .img-md}

</div>
</div>

Chaque ligne du fichier correspond à un trajet visible dans l'aperçu du slicer.
{: .caption}

---

## Pourquoi le comprendre ?

- **Dépanner** : retrouver dans le fichier la cause d'un défaut
- **Optimiser** : ajuster une commande pour gagner en qualité ou en vitesse
- **Personnaliser** : écrire une routine de démarrage (purge, calibration)
- **Aller plus loin** : générer ses trajets soi-même, comme avec FullControl

[Pourquoi comprendre le G-code ?](/docs/concepts/3d-printing-workflow/#pourquoi-le-comprendre-){: .doc-link}

---

## Un fichier G-code, couche par couche

![Aperçu d'une couche et du G-code correspondant](/docs/concepts/3d-printing-workflow/slide_147_image_4.jpg){: .img-md}

Lignes `G1` : des trajets en extrudant (`E`). Les commentaires (`;`) marquent le changement de couche : ici la 27e sur 54, à Z = 5,4 mm.
{: .caption}

---

## À retenir

- Modèle 3D, export **3MF**, slicer, **G-code**, imprimante
- Pour une pièce de projet : la **CAO**
- Températures, couches, parois, remplissage, supports, adhérence : six réglages de base
- Une pièce bien conçue (orientation, chanfreins, jeu) s'imprime sans support

[Imprimer une pièce avec OrcaSlicer](/docs/tutorials/production/imprimer-une-piece/){: .doc-link} [Règles de conception](/docs/how-to-guides/3d-printing-design-rules/){: .doc-link} [Résoudre les problèmes d'impression](/docs/how-to-guides/3d-printing-troubleshooting/){: .doc-link}
