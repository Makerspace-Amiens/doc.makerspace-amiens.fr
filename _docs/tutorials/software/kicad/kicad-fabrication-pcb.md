---
layout: documentation
hide_hero: false
hero_image: "/docs/tutorial/kicad-fabrication-pcb/hero.png"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 5

title: Fabrication de PCB
subtitle: De KiCad à la carte physique
description: Apprenez à générer les fichiers Gerber, comprendre les paramètres de fabrication et commander vos circuits imprimés.
author: Alban Petit

time: 2
difficulty: 2
compatibilities-os: win, mac, lin

prerequisites:
  - label: PCB terminé et vérifié dans Pcbnew
    link: "/docs/tutorials/software/kicad/kicad-pcbnew-bases/"

softwares:
  - label: KiCAD (version 8.0 ou supérieure)
    link: "https://www.kicad.org/"

hardwares:
  - label: Ordinateur avec connexion internet
    link: ""

todo: 100
---

## Introduction

Une fois votre PCB conçu et vérifié dans Pcbnew, la prochaine étape est de le faire fabriquer. Ce tutoriel vous guide à travers :

- L'export des fichiers Gerber (format standard de fabrication)
- La compréhension des paramètres de fabrication
- L'utilisation du service Aisler pour commander vos PCB

{% include message.html
title="Prérequis important"
message="Avant d'exporter vos fichiers de fabrication, assurez-vous que votre PCB est complètement terminé : routage achevé, DRC passé sans erreur, plans de masse remplis, et sérigraphie finalisée."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Comprendre les fichiers Gerber

{% include step-tuto.html
greyBackground = true
title = "Qu'est-ce qu'un fichier Gerber ?"
content="Les fichiers Gerber (format RS-274X ou Gerber X2) sont le standard industriel pour la fabrication de PCB. Ils décrivent chaque couche de votre circuit imprimé :

- Couches de cuivre (F.Cu, B.Cu, couches internes)
- Masque de soudure (soldermask)
- Sérigraphie (silkscreen)
- Contours de découpe (Edge.Cuts)
- Fichiers de perçage (drill files)

Le fabricant utilise ces fichiers pour créer les photomasques et piloter les machines de production." %}

{% include step-tuto.html
greyBackground = true
title = "Fichiers de perçage (Drill files)"
content="En complément des Gerber, les fichiers de perçage décrivent tous les trous :

- Trous métallisés (vias, pastilles traversantes)
- Trous non métallisés (trous de fixation)

Format : généralement Excellon (.drl) ou Gerber

Ces fichiers indiquent la position, le diamètre et le type de chaque trou." %}

{% include message.html
title="Un ensemble complet"
message="Un jeu de fichiers Gerber complet contient typiquement 8-12 fichiers pour un PCB 2 couches : cuivre dessus/dessous, masque de soudure dessus/dessous, sérigraphie dessus/dessous, contour, perçage, et parfois fichier de paste pour l'assemblage CMS."
status="is-info"
icon="fas fa-file-archive" %}

---

## Visualiser et vérifier les fichiers Gerber

{% include step-tuto.html
greyBackground = true
title = "Utiliser le visualiseur Gerber de KiCAD"
content="KiCAD inclut un visualiseur Gerber intégré. Depuis le gestionnaire de projet, cliquez sur **Visualiseur Gerber** ou allez dans Fichier > Ouvrir le visualiseur Gerber depuis Pcbnew."
image="ouvrir-visualiseur.png" %}

{% include step-tuto.html
greyBackground = true
title = "Charger les fichiers Gerber"
content="Dans le visualiseur :

1. Allez dans **Fichier > Ouvrir les fichiers Gerber**
2. Sélectionnez TOUS vos fichiers .gbr du dossier gerber
3. Ouvrez aussi les fichiers de perçage .drl
4. Tous les fichiers s'affichent dans le panneau de gauche

Activez/désactivez les couches pour inspecter chaque élément." %}

{% include step-tuto.html
greyBackground = true
title = "Points de vérification"
content="Vérifiez visuellement dans le visualiseur Gerber :

✓ Le contour Edge.Cuts est complet et fermé
✓ Toutes les pistes et zones de cuivre sont présentes
✓ Le masque de soudure couvre bien le cuivre (sauf les pastilles)
✓ La sérigraphie est lisible et ne chevauche pas les pastilles
✓ Les trous de perçage sont bien positionnés sur les pastilles
✓ Aucune zone vide ou manquante

Comparez avec votre PCB dans Pcbnew pour confirmer."
image="verification-gerber.png" %}

{% include message.html
title="Erreurs courantes à vérifier"
message="Problèmes fréquents dans les Gerber : contour non fermé (la carte ne sera pas découpée correctement), sérigraphie sur pastilles (sera supprimée), trous mal alignés, zones de cuivre non remplies. Corrigez dans Pcbnew et réexportez si nécessaire."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

## Comprendre les paramètres de fabrication

{% include step-tuto.html
greyBackground = true
title = "Nombre de couches"
content="**2 couches** : Le plus courant et économique. Cuivre dessus + dessous.
**4 couches** : Ajoute 2 couches internes, utile pour les cartes complexes avec beaucoup de signaux ou pour des plans d'alimentation dédiés.
**6+ couches** : Pour circuits très complexes, haute vitesse, ou impédance contrôlée.

Pour débuter : 2 couches suffisent pour 90% des projets." %}

{% include step-tuto.html
greyBackground = true
title = "Épaisseur du PCB"
content="**Standard : 1.6mm** (le plus courant et économique)
**Autres : 0.8mm, 1.0mm, 2.0mm**

**Choix selon usage :**

- **1.6mm** : Usage général, bon compromis rigidité/coût
- **1.0mm** : Cartes plus compactes, électronique portable
- **2.0mm** : Applications mécaniques, fortes contraintes

Vérifiez les connecteurs : certains sont prévus pour une épaisseur spécifique." %}

{% include step-tuto.html
greyBackground = true
title = "Épaisseur du cuivre"
content="Exprimée en oz (once par pied carré) ou µm :

**1 oz (35µm)** : Standard, suffisant pour la plupart des applications
**2 oz (70µm)** : Pour courants plus élevés (>3A par piste)
**0.5 oz (18µm)** : Moins courant, pour circuits très fins

Plus de cuivre = meilleure conduction mais coût supérieur.
Pour débuter : **1 oz** est le choix standard." %}

{% include step-tuto.html
greyBackground = true
title = "Couleur du masque de soudure (Soldermask)"
content="Le masque de soudure protège le cuivre et donne sa couleur au PCB :

**Vert** : Standard, le moins cher
**Bleu** : Populaire, légèrement plus cher
**Rouge, Noir, Blanc, Jaune** : Autres couleurs disponibles
**Transparent/None** : Pas de masque (rare, applications spéciales)

La couleur n'affecte pas les performances, c'est purement esthétique.
**Vert = meilleur prix**, autres couleurs = supplément." %}

{% include step-tuto.html
greyBackground = true
title = "Couleur de la sérigraphie (Silkscreen)"
content="La sérigraphie imprime les marquages, références et textes :

**Blanc** : Standard sur masque vert/bleu/rouge/noir
**Noir** : Sur masque blanc/jaune clair
**Jaune, Rouge** : Disponible chez certains fabricants

Le contraste est important : blanc sur fond sombre, noir sur fond clair.
La sérigraphie est optionnelle mais fortement recommandée pour l'assemblage." %}

{% include step-tuto.html
greyBackground = true
title = "Finition de surface"
content="La finition protège le cuivre des pastilles et facilite la soudure :

**HASL (Hot Air Solder Leveling)** :

- Étamage à l'air chaud, le moins cher
- Surface légèrement irrégulière
- Bon pour soudure manuelle, limite pour CMS fins

**HASL Lead-Free (Sans plomb)** :

- Comme HASL mais RoHS compliant
- Recommandé pour produits commerciaux

**ENIG (Electroless Nickel Immersion Gold)** :

- Surface plane et dorée
- Excellent pour CMS fins, contacts, RF
- Plus cher mais meilleure qualité
- Longue durée de conservation

Pour débuter : **HASL Lead-Free** (bon compromis)" %}

{% include message.html
title="Configuration standard recommandée"
message="**Pour débuter, configuration économique :**

• 2 couches
• 1.6mm épaisseur
• 1 oz cuivre
• Vert + sérigraphie blanche
• HASL Lead-Free
• Vias tented

Cette configuration est la moins chère et parfaitement adaptée à 90% des projets."
status="is-success"
icon="fas fa-star" %}

---

## Commander avec Aisler

{% include step-tuto.html
greyBackground = true
title = "Qu'est-ce qu'Aisler ?"
content="**Aisler** est un fabricant de PCB européen (Allemagne) offrant :

- Prix compétitifs pour petites séries (3-20 PCB)
- Qualité européenne certifiée
- Livraison rapide en Europe (5-10 jours)
- Intégration directe avec GitHub
- Plugin KiCAD pour commande simplifiée
- Support en anglais/allemand

Site web : [aisler.net](https://aisler.net/)" %}

{% include step-tuto.html
greyBackground = true
title = "Créer un compte Aisler"
content="1. Allez sur [aisler.net](https://aisler.net/)
2. Cliquez sur **Sign up** en haut à droite
3. Inscrivez-vous avec votre email ou compte GitHub
4. Validez votre email
5. Complétez votre profil (adresse de livraison)

L'inscription est gratuite, vous ne payez que lors de la commande." %}

{% include step-tuto.html
greyBackground = true
title = "Méthode 1 : Upload manuel des Gerber"
content="La méthode classique pour commander :

1. Connectez-vous à votre compte Aisler
2. Cliquez sur **Upload Project** ou **New Project**
3. Compressez vos fichiers Gerber en .zip : sélectionnez tous les .gbr et .drl, clic droit > Compresser
4. Glissez-déposez le fichier .zip sur la zone d'upload Aisler
5. Aisler analyse automatiquement les fichiers
6. Vérifiez l'aperçu généré automatiquement"
image="upload-gerber-aisler.png" %}

{% include step-tuto.html
greyBackground = true
title = "Configurer les paramètres de fabrication"
content="Après l'upload, configurez votre commande :

**Quantité** : Nombre de PCB (minimum souvent 3)
**Layers** : 2 layers (détecté automatiquement)
**Thickness** : 1.6mm (standard)
**Color** : Choisissez la couleur du masque de soudure
**Surface finish** : HASL lead-free ou ENIG
**Copper weight** : 1 oz (35µm)

Aisler détecte automatiquement la plupart des paramètres depuis vos Gerber."
image="configurer-aisler.png" %}

{% include step-tuto.html
greyBackground = true
title = "Vérifier et valider"
content="Avant de commander :

1. **Vérifiez l'aperçu** : Aisler affiche une vue 3D de votre PCB
2. **Vérifiez les dimensions** : Contrôlez que la taille est correcte
3. **Consultez les warnings** : Aisler signale les problèmes potentiels (pistes trop fines, espacements limites, etc.)
4. **Vérifiez le prix** : Le prix s'affiche en fonction de la quantité et des options
5. Cliquez sur **Add to cart** puis procédez au paiement" %}

{% include message.html
title="Délais de fabrication"
message="Aisler propose généralement 2 options :

**Standard** : 10-15 jours (moins cher)
**Express** : 5-7 jours (supplément)

Les délais incluent fabrication + expédition en Europe. Ajoutez 3-5 jours pour assemblage si vous commandez l'assemblage CMS."
status="is-info"
icon="fas fa-shipping-fast" %}

---

## Plugin KiCAD pour Aisler

{% include step-tuto.html
greyBackground = true
title = "Installer le plugin Aisler"
content="Aisler propose un plugin KiCAD pour commander directement depuis Pcbnew :

**Installation via le gestionnaire de plugins :**

1. Dans KiCAD, ouvrez Pcbnew
2. Allez dans **Outils > Plugins externes > Ouvrir le gestionnaire de plugins**
3. Cherchez **Aisler** dans la liste
4. Cliquez sur **Installer**
5. Redémarrez KiCAD

Le plugin apparaît ensuite dans le menu Outils > External Plugins > Aisler."
image="installer-plugin-aisler.png" %}

{% include step-tuto.html
greyBackground = true
title = "Utiliser le plugin Aisler"
content="Une fois installé, pour commander directement :

1. Ouvrez votre PCB dans Pcbnew
2. Allez dans **Outils > Plugins externes > Aisler Push**
3. Le plugin génère automatiquement les Gerber
4. Connectez-vous à votre compte Aisler (si ce n'est pas déjà fait)
5. Les fichiers sont uploadés automatiquement
6. Votre navigateur s'ouvre sur la page de configuration Aisler
7. Configurez les paramètres et commandez

**Gain de temps énorme !** Plus besoin d'exporter manuellement les Gerber."
image="utiliser-plugin-aisler.png" %}

{% include message.html
title="Avantage du plugin"
message="Le plugin Aisler automatise tout le processus : export Gerber + upload + vérification en un clic. Il garantit aussi que les bons paramètres d'export sont utilisés pour la compatibilité avec Aisler."
status="is-success"
icon="fas fa-rocket" %}

---

## Autres fabricants de PCB populaires

{% include step-tuto.html
greyBackground = true
title = "JLCPCB (Chine)"
content="**JLCPCB** : [jlcpcb.com](https://jlcpcb.com/)

**Avantages :**

- Prix très compétitifs (5 PCB pour $2)
- Service d'assemblage CMS intégré
- Composants en stock pour assemblage
- Qualité correcte

**Inconvénients :**

- Délais de livraison longs (15-30 jours)
- Frais de douane possibles
- Support en anglais

Bon choix pour prototypes pas chers si le délai n'est pas critique." %}

{% include step-tuto.html
greyBackground = true
title = "PCBWay (Chine)"
content="**PCBWay** : [pcbway.com](https://www.pcbway.com/)

**Avantages :**

- Prix compétitifs
- Assemblage CMS disponible
- Large gamme de finitions et options
- Qualité bonne

**Inconvénients :**

- Similaire à JLCPCB : délais longs, douanes

Alternative intéressante à JLCPCB avec options similaires." %}

{% include step-tuto.html
greyBackground = true
title = "Eurocircuits (Europe)"
content="**Eurocircuits** : [eurocircuits.com](https://www.eurocircuits.com/)

**Avantages :**

- Fabrication européenne (Belgique)
- Qualité professionnelle excellente
- Livraison rapide en Europe
- Visualiseur en ligne puissant
- Certifications industrielles

**Inconvénients :**

- Prix plus élevés
- Minimum de commande parfois plus élevé

Pour projets professionnels nécessitant qualité certifiée." %}

{% include step-tuto.html
greyBackground = true
title = "OSH Park (USA)"
content="**OSH Park** : [oshpark.com](https://oshpark.com/)

**Avantages :**

- PCB violet distinctif (ENIG)
- Excellente qualité
- Support open-source
- Upload direct depuis GitHub

**Inconvénients :**

- Prix au pouce carré (peut être cher pour grandes cartes)
- Livraison en Europe coûteuse et lente

Populaire dans la communauté maker américaine." %}

---

## Fichiers de fabrication additionnels

{% include step-tuto.html
greyBackground = true
title = "BOM (Bill of Materials)"
content="La BOM liste tous les composants de votre PCB :

- Référence (R1, C1, U1...)
- Valeur (220R, 100nF, ATmega328...)
- Empreinte (0805, SOIC-8...)
- Quantité
- Référence fabricant / distributeur

**Générer la BOM depuis KiCAD :**

Dans Eeschema : **Outils > Générer la nomenclature**
Exportez en CSV ou utilisez un script personnalisé." %}

{% include step-tuto.html
greyBackground = true
title = "Fichier de pâte à braser (Stencil)"
content="Pour souder les composants CMS, un pochoir (stencil) applique la pâte à braser :

Les fichiers F.Paste et B.Paste dans vos Gerber définissent les ouvertures du pochoir.

Vous pouvez commander un pochoir métallique ou plastique avec votre PCB chez la plupart des fabricants.

**Épaisseurs courantes :**

- 0.1mm (100µm) : Composants fins (0402, QFN fin pitch)
- 0.12-0.15mm : Standard pour 0603, 0805, SOIC
- 0.2mm : Composants plus gros" %}

{% include message.html
title="Package complet de fabrication"
message="Pour une commande professionnelle, préparez un package complet :

• Fichiers Gerber (.gbr) + Drill (.drl)
• BOM (liste des composants)
• Schéma PDF
• Notes de fabrication (si exigences spéciales)
• Pick-and-Place (si assemblage)

Compressez le tout en .zip avec un nom clair : `ProjectName_v1.0_2026-02-09.zip`"
status="is-success"
icon="fas fa-archive" %}

---

## Ressources et aller plus loin

### Capabilities des fabricants

Consultez les capabilities (capacités de fabrication) de votre fabricant :

- **Aisler** : [Capabilities](https://aisler.net/help/capabilities)
- **JLCPCB** : [Capabilities](https://jlcpcb.com/capabilities/Capabilities)
- **PCBWay** : [Capabilities](https://www.pcbway.com/capabilities.html)

### Guides et standards

- [IPC Standards](https://www.ipc.org/) : Standards industriels PCB
- [KiCAD Documentation - Gerber](https://docs.kicad.org/master/fr/pcbnew/pcbnew.html#generate-fabrication-files)

{% include message.html
title="Continuez à apprendre"
message="La fabrication de PCB devient plus facile avec l'expérience. Commencez simple, observez les résultats, et ajustez pour les versions suivantes. N'ayez pas peur de faire des erreurs - c'est comme ça qu'on apprend !"
status="is-success"
icon="fas fa-graduation-cap" %}

---

## Pour aller plus loin

### Assemblage CMS (SMT Assembly)

Une fois vos PCB reçus, vous pouvez :

- **Souder manuellement** : Fer à souder + flux pour CMS (composants 0805 et plus)
- **Hot air rework station** : Pistolet à air chaud pour CMS fins
- **Réflow au four** : Pâte à braser + pochoir + four de refusion (précis, pour composants fins)
- **Service d'assemblage** : JLCPCB, PCBWay proposent assemblage automatique à prix abordable

### PCB avancés

Explorez des fonctionnalités avancées :

- **PCB multi-couches** : 4, 6, 8 couches pour circuits complexes
- **PCB flex/rigide-flex** : Circuits souples pour électronique portable
- **Contrôle d'impédance** : Pour signaux haute fréquence (RF, USB 3.0, HDMI)
- **HDI (High Density Interconnect)** : Micro-vias, blind/buried vias
- **Embedded components** : Composants noyés dans le PCB

### Certifications et normes

Pour produits commerciaux, considérez :

- **RoHS** : Sans substances dangereuses (plomb, etc.)
- **UL** : Certification sécurité (ignifugation, etc.)
- **IPC Class 2/3** : Qualité fabrication (Class 3 = aéronautique, médical)
- **CE marking** : Conformité européenne

{%
  include card_collections.html
  title="Tutoriels KiCAD"
  description="Explorez d'autres tutoriels pour maîtriser KiCAD"
  type="tutorial"
%}
