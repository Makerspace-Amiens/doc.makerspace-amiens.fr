---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Documenter une carte électronique
subtitle: "Schéma, PCB, nomenclature : de quoi refaire le montage"
description: Documenter votre partie électronique pour qu'un autre puisse comprendre le schéma, retrouver les composants, et reproduire le câblage.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

prerequisites:
  - label: Un schéma ou circuit réalisé sous KiCad (ou équivalent)
    link: /docs/tutorials/software/kicad/installation-kicad/
softwares:
  - label: KiCad
    link: /docs/tutorials/software/kicad/installation-kicad/
hardwares:
  - label: Aucune machine requise
    link: ""
---

{% include message.html title="Le site de votre projet n'est pas ce site-ci" message="Votre repo de projet utilise le thème Just the Docs, pas le thème de ce site de documentation MakerSpace. Certaines fonctionnalités visibles ici (visionneuse 3D, schémas interactifs) ne sont pas disponibles chez vous par défaut. Ce tutoriel explique la méthode qui fonctionne toujours (des images), et une méthode plus avancée en option." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Ce qu'il faut documenter

Une carte électronique bien documentée répond à quatre questions : à quoi
sert chaque partie du circuit, quels composants exactement, comment c'est
câblé, et pourquoi ces choix, ce dernier point rejoint
[Tracer ses choix techniques](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/).

## Méthode simple : exporter une image du schéma

C'est la méthode qui marche toujours, sans rien installer de plus.

{% include step-tuto.html
  greyBackground=true
  title="Étape 1 : Ouvrir l'export dans KiCad"
  content="Dans l'éditeur de schéma d'KiCad (Eeschema), ouvrez le menu **Fichier** (ou **File**) puis **Tracer...** (ou **Plot...**)." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 2 : Choisir le format SVG"
  content="Dans la fenêtre qui s'ouvre, choisissez le format de sortie **SVG** (KiCad n'exporte pas directement en PNG depuis cette fenêtre ; le SVG a l'avantage d'être net à n'importe quelle taille d'affichage, contrairement à une image). Choisissez un dossier de sortie, par exemple le même dossier que votre page de documentation." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 3 : Lancer l'export"
  content="Cliquez sur **Tracer** (ou **Plot**). Un fichier `.svg` est généré. Faites la même opération dans l'éditeur de PCB (Pcbnew) si vous voulez aussi exporter une image de votre circuit imprimé." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 4 : Intégrer l'image dans votre page"
  content="Copiez le fichier `.svg` dans le dossier de votre page `docs/` (par exemple `docs/images/`), puis dans votre fichier Markdown :

```markdown
![Schéma du circuit](images/schema.svg)
```" %}

## Pour aller plus loin : schéma interactif (optionnel, plus avancé)

{% include message.html title="Réservé à ceux qui veulent creuser" message="Cette section demande de modifier un fichier de configuration de votre site (_includes/head_custom.html), pas obligatoire, une image SVG suffit largement pour la plupart des projets." status="is-info" icon="fas fa-info-circle" %}

Le site [kicanvas.org](https://kicanvas.org) propose un visualiseur KiCad
interactif (zoom, déplacement) intégrable sur n'importe quel site web :
c'est cette technologie qui est utilisée sur ce site de documentation
MakerSpace, mais elle n'est pas activée par défaut dans votre template.

{% include step-tuto.html
  greyBackground=true
  title="Étape 1 : Télécharger KiCanvas"
  content="Sur [kicanvas.org](https://kicanvas.org), téléchargez le fichier `kicanvas.js` (voir la [documentation d'intégration](https://kicanvas.org/embedding/)). Placez-le à la racine de votre dossier `docs/`." %}

{% capture step_kicanvas_2 %}Créez le fichier `docs/_includes/head_custom.html` (créez le dossier `_includes` s'il n'existe pas encore) avec ce contenu :

```html
<script type="module" src="/kicanvas.js"></script>
```

Just the Docs charge automatiquement ce fichier sur chaque page : c'est le point d'extension officiel du thème pour ajouter du script.{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 2 : Activer le script sur toutes les pages"
  content=step_kicanvas_2 %}

{% capture step_kicanvas_3 %}Copiez vos fichiers `.kicad_sch` dans le dossier de votre page, puis :

```html
<kicanvas-embed src="schema.kicad_sch" controls="basic"></kicanvas-embed>
```{% endcapture %}
{% include step-tuto.html
  greyBackground=true
  title="Étape 3 : Utiliser la balise dans vos pages"
  content=step_kicanvas_3 %}

## La nomenclature (BOM)

{% include message.html title="KiCanvas ne génère pas de nomenclature" message="KiCanvas est un outil strictement de visualisation (lecture seule) : il n'exporte ni ne calcule de BOM. La nomenclature se génère avec KiCad lui-même, pas avec KiCanvas." status="is-info" icon="fas fa-info-circle" %}

{% include step-tuto.html
  greyBackground=true
  title="Générer la nomenclature depuis KiCad"
  content="Dans l'éditeur de schéma (Eeschema), menu **Outils > Générer une nomenclature...** (*Tools > Generate Bill of Materials...*, le libellé exact varie légèrement selon la version de KiCad). Choisissez un format de sortie (CSV fonctionne partout), un dossier, puis lancez la génération. Vous obtenez un fichier listant automatiquement chaque référence, valeur et quantité de votre schéma, pas besoin de les retaper à la main." %}

Une fois le CSV généré, reformatez les colonnes utiles en tableau Markdown
pour l'intégrer proprement à votre page (référence exacte, pas juste "une
résistance") :

{% capture snippet_bom %}| Référence | Composant | Valeur / réf. exacte | Quantité | Source |
|---|---|---|---|---|
| U1 | Microcontrôleur | ESP32-S3-DevKitC-1 | 1 | ... |
| R1-R4 | Résistance | 10kΩ, 1/4W | 4 | ... |
| D1 | Driver moteur | A4988 | 1 | ... |{% endcapture %}
{% include code-snippet.html label="Copier le gabarit de BOM (Markdown)" content=snippet_bom %}

{% include message.html title="Le CSV brut fonctionne aussi" message="Si reformater à la main prend trop de temps, vous pouvez simplement déposer le fichier .csv généré dans votre dossier docs/ et y faire un lien direct, moins joli qu'un tableau, mais toujours exact et à jour à chaque nouvelle génération." status="is-success" icon="fas fa-check-circle" %}

### Pour aller plus loin : nomenclature interactive avec un plugin KiCad

{% include message.html title="Réservé à ceux qui veulent creuser" message="Ce plugin s'installe dans KiCad (pas dans votre site), et son résultat est un fichier HTML autonome : pas besoin de modifier _includes/head_custom.html comme pour KiCanvas ou model-viewer, il s'intègre par un simple lien." status="is-info" icon="fas fa-info-circle" %}

Le plugin **[InteractiveHtmlBom](https://github.com/openscopeproject/InteractiveHtmlBom)**
génère un fichier HTML autonome qui affiche le PCB **et** la nomenclature
côte à côte : cliquez une ligne de la BOM, le composant correspondant
s'illumine sur le circuit. Particulièrement utile pour le soudage manuel
et pour [Documenter l'assemblage et le montage](/workshops/methodologie-de-projet/tutorials/documenter-assemblage-montage/).

{% include step-tuto.html
  greyBackground=true
  title="Installer le plugin"
  content="Dans KiCad, ouvrez le **Plugin and Content Manager** (icône dédiée sur l'écran d'accueil de KiCad), recherchez **Interactive Html Bom**, cliquez sur **Install** puis **Apply**." %}

{% include step-tuto.html
  greyBackground=true
  title="Générer le fichier"
  content="Ouvrez votre PCB dans Pcbnew, enregistrez-le. Cliquez sur l'icône du plugin dans la barre d'outils (ou menu **Outils > Extensions externes > Generate Interactive HTML BOM**). Dans la fenêtre qui s'ouvre, cliquez sur **Generate BOM**. Un fichier `.html` est créé : il fonctionne hors ligne, sans connexion internet." %}

{% include step-tuto.html
  greyBackground=true
  title="Intégrer le fichier à votre documentation"
  content="Copiez le fichier `.html` généré dans votre dossier `docs/` (par exemple `docs/nomenclature-interactive.html`), puis faites un lien vers lui depuis votre page :

```markdown
[Voir la nomenclature interactive](nomenclature-interactive.html)
```" %}

## Photos du montage réel

Le schéma montre l'intention, une photo montre la réalité, souvent
différente (fils de couleur, position des composants sur une breadboard,
bricolage temporaire). Prenez ces photos **au moment du montage**, pas
après coup, voir [Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/).
Une simple photo prise avec un smartphone, ajoutée avec
`![Montage réel](images/montage.jpg)`, suffit.

## Exercice

Sur votre partie électronique : exportez votre schéma en SVG et intégrez-le
dans votre page, générez votre nomenclature depuis KiCad et intégrez-la
(en tableau ou en CSV), et ajoutez au moins une photo du montage réel.
