---
layout: documentation
image: Benchy+Logo.png  
hide_hero: true  
hero_image: Benchy+Logo.png  
hero_darken: true  
component_toc: true  
doc_header: true
type: tutorial
tag: additive-manufacturing

title: Impression 3D avec OrcaSlicer  
subtitle: Comment imprimer sa pièce avec OrcaSlicer  
description: Dans ce tutoriel, vous apprendrez à imprimer votre première pièce avec le logiciel OrcaSlicer, sur une imprimante Bambu Lab ou Artillery du PrinterLab.  
author: Rémi Lacombe

time: 1  
difficulty: 2  
compatibilities-os: win, mac, lin

softwares: 
  - label: OrcaSlicer  
    link: ""
hardwares:
  - label: Bambu Lab A1 mini
    link: /docs/references/machines/bambulab_a1_mini/
  - label: Bambu Lab P1P
    link: /docs/references/machines/bambulab_p1p/
  - label: Bambu Lab X1 Carbon
    link: /docs/references/machines/bambulab_x1c/
  - label: Artillery Genius Pro
    link: /docs/references/machines/artillery_genius/

todo: 100  
---

## Impression 3D d'une pièce

### Introduction

Ce **tutoriel d'initiation** vous guidera de l'**importation** de votre modèle jusqu'a la **fin de l'impression**, en vous aidant à éviter les erreurs courantes.

Avant de débuter ce tutoriel, nous supposons que votre pièce **a déjà été conçue et exportée** au format **.STL** ou **.3MF** depuis votre logiciel de CAO (OnShape, Solidworks, FreeCAD, Fusion 360...).

Si votre modèle n'est pas encore créé, rendez-vous sur la page [**tutoriels CAO**](/pages/tutoriels-cao).

Sinon, munissez-vous d'une clé USB sur laquelle vous mettrez votre fichier.

Le PrinterLab compte deux familles d'imprimantes : les **Bambu Lab** (A1 mini, P1P, X1 Carbon) et les **Artillery Genius Pro**. Quand une étape diffère de l'une à l'autre, elle a deux onglets : cliquez sur celui de votre machine, il s'ouvre dans toute la page.

### 1 - Préparation et vérification

{% capture prep_bambu %}
{% include step-tuto.html  
greyBackground = true  
image = "printerlab-etagere-bambu.jpg"  
content="Vous vous trouvez maintenant au [**PrinterLab**](/pages/informations), un espace dédié à l'impression 3D au sein du MakerSpace. Vous y trouverez de nombreux modèles d'imprimantes, mais pas de panique, il suffit de suivre les étapes de ce tutoriel ;).

Les imprimantes **Bambu Lab** sont rangées sur les étagères noires : la **X1 Carbon** et les deux **P1P** à gauche, les douze **A1 mini** à droite. Chaque emplacement porte un **numéro** sur une étiquette rouge."  
%}

{% include step-tuto.html  
greyBackground = true  
image = "bambu-a1-mini-07.jpg"  
image_2 = "bambu-bobine.jpg"  
content="**Choisissez** la machine sur laquelle vous imprimerez votre pièce et **notez son numéro** : vous en aurez besoin pour lui envoyer l'impression. Elle doit être **disponible** (aucune impression en cours sur son écran) et **allumée**.

Vérifiez également que le **plateau d'impression** est **propre**, qu'il reste du **filament** et qu'il s'agit bien de **PLA** (bobines en bois).

En cas de bobine vide, suivez le tutoriel de remplacement de bobine de l'[**A1 mini**](/docs/tutorials/production/remplacer-bobine-a1-mini/) ou de la [**P1P**](/docs/tutorials/production/remplacer-bobine-P1P/)."  
%}

{% include step-tuto.html  
greyBackground = true  
image = "bambu-interrupteurs.jpg"  
content="Si l'imprimante est éteinte, allumez-la avec son **interrupteur rouge**, sur la barrette fixée sous l'étagère. Chaque interrupteur porte le nom de sa machine : **A1-01** à **A1-12** pour les A1 mini.

Attention à ne pas confondre ces noms avec ceux des Artillery, numérotées **A1** à **A6**."  
%}
{% endcapture %}

{% capture prep_artillery %}
{% include step-tuto.html  
greyBackground = true  
image = "Etagere_Artillery.png"  
content="Vous vous trouvez maintenant au [**PrinterLab**](/pages/informations), un espace dédié à l'impression 3D au sein du MakerSpace. Vous y trouverez de nombreux modèles d'imprimantes, mais pas de panique, il suffit de suivre les étapes de ce tutoriel ;).

Les Artillery sont sur l'étagère de droite en entrant, c'est ici que votre pièce prendra forme !"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Dashboard_Repetier.png"  
content="Vérifiez le **moniteur du PC** à gauche de l'étagère, il devrait afficher le **tableau de bord** du serveur.

Si ce n'est pas le cas et que l'écran semble éteint, faites appel à un **fab manager**."  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Powered_Artillery.png"  
image_2 = "Spool.png"  
content="**Sélectionnez** la machine sur laquelle vous imprimerez votre pièce. Elle doit être **disponible** et **allumée**.

Vérifiez également que le **plateau d'impression** est **propre**, qu'il reste du **filament** et qu'il s'agit bien de **PLA** (bobines en bois).

En cas de bobine vide, suivez ce [**tutoriel**](/docs/tutorials/production/remplacer-bobine-artillery/) pour la recharger."  
%}

{% include message.html title="Conseil" message="Pour débuter, nous vous conseillons d'utiliser les [Artillery Genius Pro](/pages/machines/), numérotées de **A1** à **A6**" status="is-info" dismissable="true" icon="fas fa-duotone fa-cube" %}

{% include step-tuto.html  
greyBackground = true  
image = "Power_Button_Artillery.png"  
content="Si l'imprimante est éteinte, le bouton d'allumage se trouve à l'**arrière droite de la machine**."  
%}
{% endcapture %}

{% include content-tabs.html id="tabs-preparation" tab_title1="Bambu Lab" tab1=prep_bambu tab_title2="Artillery" tab2=prep_artillery %}

{% include step-tuto.html  
greyBackground = true  
image = "USB_Port.png"
image_2 = "Landing_Page_Orca.png"
title="2 - Importation de votre pièce"  
content="Sur l'un des postes du PrinterLab, branchez votre clé dans l'embase USB devant l'écran.

Ouvrez le logiciel **OrcaSlicer** ![OrcaSlicer icon](Orca_Icon.png). OrcaSlicer est un logiciel de **tranchage** qui transforme les modèles 3D en instructions détaillées pour les imprimantes 3D.

Sur la page d'accueil, cliquez sur **New Project**.

![Nouveau Projet Orca](New_Project.png)"  
%}

{% capture printer_bambu %}

En haut du volet de gauche, dans le **menu déroulant Imprimante**, rubrique **Préréglages système**, sélectionnez le **modèle** de votre machine : **Bambu Lab A1 mini**, **Bambu Lab P1P** ou **Bambu Lab X1 Carbon**.

Vous choisirez la machine précise (son numéro) au moment d'envoyer l'impression.

![Choix imprimante Bambu Lab](bambu-choix-imprimante.png)
{% endcapture %}

{% capture printer_artillery %}

En haut du volet de gauche, dans le **menu déroulant Printer**, rubrique **Préréglages utilisateur**, **sélectionnez la machine choisie plus tôt** (Artillery Genius Pro 0.4 nozzle, **A1** à **A6**).

![Choix imprimante](Printer_Choice_Menu.png)
{% endcapture %}

{% capture printer_tabs %}{% include content-tabs.html id="tabs-imprimante" tab_title1="Bambu Lab" tab1=printer_bambu tab_title2="Artillery" tab2=printer_artillery %}{% endcapture %}

{% include step-tuto.html  
greyBackground = true  
image = "Empty_File.png"  
content=printer_tabs  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Benchy_On_Plate.png"  
content="Dans le **ruban supérieur**, cliquez sur le bouton **Ajouter** ![Ajouter](Add_Part.png) et sélectionnez votre **pièce** dans l'**explorateur de fichiers**.

Après validation, votre modèle devrait **apparaître au centre du plateau.**"  
%}

{% capture filament_bambu %}

Dans le menu déroulant **Filament** sur le panneau de gauche, sélectionnez **ROSA**, puis **ROSA PLA**.

![Menu filament Bambu Lab](bambu-choix-filament.png)
{% endcapture %}

{% capture filament_artillery %}

Dans le menu déroulant **Filament** sur le panneau de gauche, sélectionnez **PLA - Rosa**.

![Menu filament](Filament_Choice_Menu.png)
{% endcapture %}

{% capture filament_tabs %}{% include content-tabs.html id="tabs-filament" tab_title1="Bambu Lab" tab1=filament_bambu tab_title2="Artillery" tab2=filament_artillery %}{% endcapture %}

{% include step-tuto.html  
greyBackground = true  
image = "Benchy_On_Plate_Close_Up.png"  
title="3 - Paramètres d'impression"  
content=filament_tabs  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Brim.png"  
content="Pour garantir l'adhérence de la pièce sur le plateau d'impression, rendez-vous sur le panneau **Others** dans le volet gauche.  
Dans le menu déroulant **Brim type**, sélectionnez **Inner brim only**.

![Menu bordure](Brim_Choice_Menu.png)

Augmentez ensuite la **largeur de la bordure** en passant le paramètre **Brim width** à **5 mm**.

Pour de très petites pièces, préférez une valeur proche de **10 mm**.

![Paramètre bordure](Brim_Param.png)"  
%}

{% include message.html title="Attention" message="Une imprimante ne peut imprimer dans le vide. Si votre pièce présente des surplombs importants, vous devrez cocher la case **Enable support** dans l'onglet **Support**. Si vous avez un doute, référez-vous à ce [**guide sur les supports en impression 3D**](https://all3dp.com/1/3d-printing-support-structures/) ou demandez conseil à un **fab manager**." status="is-warning" dismissable="true" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html  
greyBackground = true  
image = "Sliced_Benchy.png"  
content="Cliquez ensuite sur ![Slice plate](Slice_Plate.png) en haut à droite de la fenêtre.

Vous devriez maintenant voir votre **pièce tranchée** en couches. Le **temps d'impression** et la **matière consommée** s'affichent également sur le volet de droite.

![Temps et matière](Time_And_Material.png)

Vous pouvez visualiser le processus d'impression en utilisant le slider à droite.

![Simulation d'impression](Print_Slider.gif)"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Window.png"  
content="Avant de lancer l'impression, vérifiez que :  

- L'impression finira bien **avant l'heure de fermeture du MakerSpace** (consultez un **fab manager**).  
- La machine que vous avez choisie est **toujours disponible**.  
- Le plateau d'impression est **vide et propre**. Si ce n'est pas le cas, des **lingettes** et du produit de nettoyage sont à votre disposition sur le coté de la servante rouge.

![Nettoyage](Cleaning_Gear.png)

"

%}

{% capture launch_bambu %}

Cliquez sur le bouton ![Imprimer](Print.png) en haut à droite de la fenêtre. La fenêtre **Envoyer le travail d'impression** s'ouvre.

Dans le menu déroulant **Imprimante**, sélectionnez **la machine choisie plus tôt**, d'après son numéro : par exemple **Bambu-A1-07(LAN)** pour l'A1 mini n° 07. Vérifiez que le filament indiqué est bien du **PLA** sur la bobine externe (**Ext**), puis cliquez sur **Envoyer**.

![Envoyer le travail d'impression](bambu-envoi-impression.png)

Le **programme machine** est envoyé à l'imprimante par le réseau, et l'impression devrait **commencer**.
{% endcapture %}

{% capture launch_artillery %}

Vous pouvez maintenant cliquer sur le bouton ![Imprimer](Print.png) en haut à droite de la fenêtre.

Le **programme machine** est envoyé à l'imprimante, et l'impression devrait **commencer**.
{% endcapture %}

{% capture launch_tabs %}{% include content-tabs.html id="tabs-lancement" tab_title1="Bambu Lab" tab1=launch_bambu tab_title2="Artillery" tab2=launch_artillery %}

Après une phase de préchauffage et de calibration, l'imprimante réalise la **première couche**.

Pour garantir le **succès** de l'impression, il est crucial de contrôler que la matière **adhère** bien au plateau.

![En impression](Printing.gif)
{% endcapture %}

{% include step-tuto.html  
greyBackground = true  
title="4 - Lancement de l'impression"  
image = "Window.png"  
content=launch_tabs
%}

{% capture stop_bambu %}

Si la **pièce se décolle** avant la fin ou qu'un **autre problème** survient, vous devrez **arrêter l'impression** depuis l'**écran de l'imprimante** : le bouton orange **carré** arrête l'impression, le bouton **pause** (deux barres) la suspend.

![Écran d'une Bambu Lab en impression](bambu-ecran-impression.jpg)
{% endcapture %}

{% capture stop_artillery %}

Si la **pièce se décolle** avant la fin ou qu'un **autre problème** survient, vous devrez **arrêter l'impression** depuis le **panneau de contrôle** du serveur :

![Stopper impression](Stop_Print.gif)
{% endcapture %}

{% capture stop_tabs %}

Il faut maintenant laisser **l'imprimante faire son travail** !

Pour les longues impressions, il est important de vérifier régulièrement que tout se passe bien.

{% include content-tabs.html id="tabs-arret" tab_title1="Bambu Lab" tab1=stop_bambu tab_title2="Artillery" tab2=stop_artillery %}
{% endcapture %}

{% include step-tuto.html  
greyBackground = true  
title="5 - Impression"  
image = "One_Eternity_Later.gif"  
content=stop_tabs
%}

{% capture remove_bambu %}

Pour **retirer la pièce du plateau**, pas besoin de forcer ! Il suffit d'attendre que le plateau refroidisse.

Le plateau des Bambu Lab est une **plaque magnétique** : soulevez-la par l'avant pour la retirer, puis courbez-la légèrement pour décoller la pièce.

Remettez ensuite la plaque **bien à plat** sur le plateau, calée contre les ergots à l'arrière.
{% endcapture %}

{% capture remove_artillery %}

Pour **retirer la pièce du plateau**, pas besoin de forcer ! Il suffit d'attendre que le plateau refroidisse.

Après quelques minutes, soulevez et courbez légèrement le plateau, **sans le retirer**.
{% endcapture %}

{% capture remove_tabs %}

Après un peu de patience, voici votre **impression terminée** !

{% include content-tabs.html id="tabs-retrait" tab_title1="Bambu Lab" tab1=remove_bambu tab_title2="Artillery" tab2=remove_artillery %}

Si la pièce ne se décroche pas, **attendez quelques minutes** que le plateau refroidisse davantage.
{% endcapture %}

{% include step-tuto.html  
greyBackground = true  
title="6 - Post-traitement"  
image = "Remove_Part.gif"  
content=remove_tabs
%}

{% include step-tuto.html  
greyBackground = true  
image = "Remove_Brim_And_Trash.gif"  
content="Retirez les **bordures** et **dépôts** de filament sur le plateau. Si vous avez activé l'option, **retirez également les supports**.

Jetez vos déchets dans la poubelle située à l'entrée du **PrinterLab**.

Assurez-vous de laisser votre espace de travail **propre** et **prêt** pour les prochains !"
%}

{% include step-tuto.html  
greyBackground = false  
image = "Benchy.png"  
content="Bravo ! Vous savez maintenant imprimer une pièce au **PrinterLab**.

Pour que ce lieu reste **ouvert à toutes et tous**, c'est maintenant à vous de **partager ce que vous avez** appris dans ce tuto !
"
%}
