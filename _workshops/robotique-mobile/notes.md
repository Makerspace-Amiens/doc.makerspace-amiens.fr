# Notes de travail : Atelier « Robotique mobile »

> Fichier de suivi interne, **pas une page du site** (exclu du build via
> `_config.yml`). Sert à reprendre le travail d'une session à l'autre.

Dernière mise à jour : 2026-11-19.

## Objectif

Parcours thématique (`kind: course`) qui rassemble les connaissances de la
robotique mobile, des éléments de base jusqu'aux notions avancées.

**Périmètre (décision du 2026-11-19)** : d'abord les robots mobiles
**traditionnels à roues**. Les robots à pattes ne sont pas traités pour
l'instant.

## Public

Probablement les I2 (à confirmer). Durée non fixée.

## Plateforme envisagée (pas encore arrêtée)

Pas de plateforme commune pour le moment. Piste : un robot du type de ceux de
la Coupe de France de robotique :

- base différentielle, deux roues motrices entraînées par des **moteurs pas à
  pas** ;
- **ESP32-S3** ;
- **lidar** ;
- **odométrie par roues codeuses libres**, placées sur les côtés des roues
  motrices (indépendantes de la motorisation : elles ne patinent pas avec
  elles et mesurent le déplacement réel).

Les exemples des pages peuvent s'appuyer sur cette architecture sans dépendre
d'un modèle précis.

## Conventions de l'atelier

- Ton **neutre** : ni « tu » ni « vous », consignes à l'infinitif
  (« Dans le simulateur : régler... puis observer... ») (2026-11-20).
- Rester générique sur l'électronique dans les schémas et le texte : « carte de
  commande » ou « microcontrôleur », pas « ESP32-S3 » (demande du 2026-11-19).
- Illustrer le mouvement par des simulateurs interactifs
  (`{% include simulateur-robot.html type="..." %}`, voir CLAUDE.md). Le script
  `assets/js/robot-sim.js` peut s'enrichir pour les pages suivantes
  (cinématique, odométrie...).
- Schémas SVG générés par script (palette du site : rouge = motrice, gris =
  libre) ; le générateur n'est pas versionné, retoucher les SVG à la main.

## Calculateur de motorisation (refondu le 2026-11-20)

`_includes/calculator-motor.html` + page `_ressources/tools/general/calculateur-moteur-robot.md`.
Sortie = point de fonctionnement (couple avec marge à telle vitesse). Pente
**réelle** + roulement (Crr) + **coefficient de sécurité** (défaut 2), plus de
« pente fictive de 20° ». Volontairement **sans** tension/batterie (brouillait
les pistes). Adhérence en option (μ mesuré au plan incliné, part du poids à la
balance). Valeurs par défaut = exemple de la page 2 (3 kg, Ø60, 0,5 m/s,
1 m/s², 10°) : garder les deux alignés.

## À décider

- Public et durée définitifs, plateforme matérielle.
- Image de couverture : provisoirement celle d'Otto (robot bipède, hors
  périmètre), à remplacer par une vraie photo libre d'un robot à roues, avec crédit.

## Plan (validé le 2026-11-19, une page à la fois)

1. Qu'est-ce qu'un robot mobile à roues (types de roues ; architectures :
   différentiel, tricycle, voiture/Ackermann, omnidirectionnel/mecanum)
   **← publiée (`_docs/concepts/robot-mobile-a-roues.md`)**
2. Motoriser un robot mobile (révisée le 2026-11-20) : tour d'horizon, pas
   seulement le pas à pas. v = ωr, C = Fr, chaîne de motorisation, familles
   (CC + réducteur/codeur, pas à pas, brushless/moteur-roue, servomoteur
   intelligent ; **pas de servo à rotation continue**, mauvais exemple),
   réducteur, courbes couple/vitesse, choix. Drivers seulement cités, pas
   approfondis. **← rédigée (`_docs/concepts/motoriser-robot-mobile.md`), en relecture**
3. Capteurs du robot mobile (ultrason, IR, suivi de ligne, encodeurs, IMU, lidar)
4. Cinématique d'un robot différentiel
5. Odométrie : pourquoi des roues codeuses libres plutôt que compter les pas
   (glissement, pas perdus), puis calcul de la position
6. Profils de vitesse et asservissement en position : rampes (profil
   trapézoïdal) pour ne pas perdre de pas, puis PID sur la trajectoire à
   partir de l'odométrie (pas de PID vitesse : le pas à pas suit en boucle
   ouverte)
7. Machine à états et comportements (suivi de ligne, évitement d'obstacles)
8. Navigation autonome au lidar : détection d'obstacles, puis recalage sur
   les bordures du terrain
