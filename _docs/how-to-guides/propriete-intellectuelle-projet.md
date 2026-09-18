---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true
type: how-to

title: Comprendre la propriété intellectuelle de son projet
subtitle: Droit d'auteur, brevets, open source et licences
description: "Un tour d'horizon des notions de propriété intellectuelle utiles à un projet d'ingénierie : droit d'auteur, propriété industrielle, brevets, open source, et comment choisir une licence adaptée."
author: Adrien Bracq

time: 1
difficulty: 2
todo: 60

prerequisites:
  - label: Avoir un projet (code, CAO, documentation) à publier ou partager
    link: ""
softwares:
  - label: Aucun logiciel requis
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Contexte

Ce guide sert de tour d'horizon des notions de propriété intellectuelle
utiles à un projet d'ingénierie : de quels droits parle-t-on, ce que ça
change en France, ce qui coince avec les brevets aujourd'hui, ce que
l'open source a changé, et, parmi tout ça, comment choisir une licence
et citer correctement ce que vous réutilisez.

{% include message.html title="Ceci n'est pas un avis juridique" message="Ce guide donne des repères pratiques pour un projet étudiant, pas une consultation d'avocat. Pour un usage commercial ou un doute réel, consultez un professionnel du droit ou le service compétent de votre établissement." status="is-info" icon="fas fa-info-circle" %}

## Prérequis

- Un projet, ou une brique de projet (code, fichiers CAO, documentation),
  dans lequel vous réutilisez le travail de quelqu'un d'autre, ou que vous
  voulez rendre réutilisable par d'autres.

## Deux grandes familles de droits

La **propriété intellectuelle** recouvre deux ensembles de droits assez
différents :

- **Le droit d'auteur** protège automatiquement toute création originale
  (code, schéma, texte, photo, modèle 3D) dès sa création, sans formalité
  ni dépôt.
- **La propriété industrielle** regroupe des droits qu'il faut déposer
  activement pour exister : brevets (inventions techniques), marques,
  dessins et modèles.

### Le cas français : le droit moral, une spécificité importante

Le droit d'auteur français accorde à l'auteur deux types de droits, une
distinction qui n'existe pas de la même façon dans le copyright américain :

- des **droits patrimoniaux** : l'exploitation économique de l'œuvre,
  cessibles, limités dans le temps (70 ans après la mort de l'auteur) ;
- un **droit moral** : le lien entre l'auteur et son œuvre (être cité,
  s'opposer à une modification dénaturante...), **inaliénable, imprescriptible,
  transmis aux héritiers**, qui ne peut pas être vendu ni cédé.

Le copyright américain, à l'inverse, traite le droit d'auteur d'abord comme
un droit économique cessible dans son ensemble. Le droit moral y est
beaucoup plus restreint. Concrètement pour vous : même si vous cédez tous
les droits d'exploitation d'un projet (à une entreprise, une école...), en
droit français vous gardez le droit d'être identifié comme auteur.

Sources : [droit d'auteur vs copyright](https://www.justifit.fr/b/guides/droit-propriete-intellectuelle/differences-droit-d-auteur-et-copyright/), [SGDL : droit d'auteur et copyright](https://www.sgdl.org/sgdl-accueil/presse/presse-acte-des-forums/auteurs-et-editeurs-de-nouvelles-relations/2518-droit-d-auteur-et-copyright-deux-environnements-differents-pour-les-relations-auteurs-editeurs).

{% include message.html title="Et votre projet d'école ?" message="Beaucoup d'établissements ont leurs propres règles sur la propriété des projets étudiants (l'école, le MakerSpace, ou vous). Avant de choisir une licence, renseignez-vous auprès de votre référent pédagogique : ce guide ne peut pas trancher ça à votre place." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Le cas des brevets : un regard critique

### Qu'est-ce qu'un brevet, concrètement

Un brevet protège une **invention technique** (une solution à un problème
technique, pas une simple idée) : un mécanisme, un procédé de fabrication,
un circuit, un algorithme dans certains cas. Pour l'obtenir, il faut le
**déposer** activement auprès d'un office national ou régional (l'INPI en
France, l'EPO au niveau européen) : contrairement au droit d'auteur, aucune
protection n'existe tant qu'il n'est pas déposé.

En échange de la **publication complète** de l'invention (n'importe qui
peut lire comment elle fonctionne), l'office accorde à son titulaire un
**droit exclusif temporaire** : lui seul peut fabriquer, utiliser, vendre
ou importer l'invention pendant la durée du brevet, soit 20 ans depuis le
dépôt, une durée fixée par l'accord international ADPIC/TRIPS. Au-delà,
l'invention tombe dans le domaine public et devient librement réutilisable
par tous. L'idée de départ : échanger un monopole temporaire contre la
divulgation publique du savoir-faire, plutôt que de laisser chacun garder
ses inventions secrètes indéfiniment.

Concrètement, la diffusion se fait tôt et automatiquement : une demande de
brevet est rendue publique environ 18 mois après son dépôt, **que le
brevet soit finalement accordé ou non**. Elle alimente des bases
consultables gratuitement (INPI, Espacenet, Google Patents), avec une
description technique souvent très détaillée. Une conséquence utile pour
vous : ces bases sont une source de documentation technique à part
entière pour la [recherche de l'existant](/workshops/methodologie-de-projet/concepts/rechercher-existant-faisabilite/),
même si vous n'avez aucune intention de déposer quoi que ce soit : un
brevet expiré ou abandonné décrit souvent une solution technique complète
et réutilisable librement.

### Les conditions pour qu'un brevet soit valable

Un brevet n'est accordé que si l'invention remplit trois conditions :

- **Nouveauté** : elle n'a jamais été rendue publique, nulle part dans le
  monde, avant le dépôt, y compris par vous-même. Une publication sur
  votre site, un post sur un forum, une démonstration publique suffisent à
  détruire la nouveauté.
- **Activité inventive** : la solution ne doit pas être évidente pour
  quelqu'un du métier : une simple combinaison de techniques connues ne
  suffit généralement pas.
- **Application industrielle** : l'invention doit pouvoir être fabriquée
  ou utilisée dans une industrie, pas rester une idée purement théorique.

{% include message.html title="Tension avec la documentation continue" message="Si une partie de votre projet vous semble potentiellement brevetable, ne la publiez nulle part (documentation, réseaux sociaux, démonstration publique) avant d'avoir déposé une demande : la nouveauté se perd dès la première divulgation publique, même la vôtre. C'est un arbitrage à faire consciemment, en équipe et avec votre référent, à l'opposé de la logique « documenter au fil de l'eau » du reste de cet atelier. Dans l'immense majorité des projets étudiants, cette question ne se pose pas : ouvrir et documenter reste le bon réflexe par défaut." status="is-warning" icon="fas fa-exclamation-triangle" %}

Dans la pratique actuelle, plusieurs limites sérieuses à ce principe sont
documentées :

- **Il n'existe pas de brevet mondial.** La protection est territoriale :
  il faut déposer (et payer) dans chaque pays ou zone où on veut être
  protégé, ce qui rend le brevet largement hors de portée d'un étudiant ou
  d'une petite structure, et réservé de fait aux grandes entreprises.
- **Les "patent trolls"** (entités qui n'exploitent aucun brevet mais les
  utilisent uniquement pour poursuivre en justice) génèrent des coûts de
  défense énormes pour les entreprises innovantes : des recherches
  estiment les pertes économiques associées à plusieurs centaines de
  milliards de dollars entre 1990 et 2010 aux États-Unis.
- **Les "patent thickets"** (enchevêtrements de brevets qui se chevauchent,
  fréquents dans le logiciel et l'électronique) rendent difficile de créer
  quoi que ce soit sans risquer de violer un brevet existant, un coût
  particulièrement lourd pour les petites structures qui n'ont pas les
  moyens d'un service juridique dédié.
- **Un rythme d'innovation technologique rapide** rend parfois un brevet de
  20 ans obsolète avant même son expiration, alors qu'il continue à bloquer
  légalement d'autres acteurs sur une idée dépassée.

Sources : [EFF : Fighting to Keep Bad Patents in Check](https://www.eff.org/deeplinks/2025/12/fighting-keep-bad-patents-check-2025-review), [Harvard Library : Criticism of the Patent System](https://guides.library.harvard.edu/patents/critics).

{% include message.html title="Pas un jugement universel" message="Cette critique vise surtout le logiciel et l'électronique grand public, où le coût de reproduction d'une idée est faible. Dans d'autres secteurs (pharmaceutique par exemple), où le coût de R&D est énorme et le coût de copie très faible, l'argument en faveur des brevets reste plus solide et débattu différemment." status="is-info" icon="fas fa-info-circle" %}

## Ce que l'open source a apporté à l'ingénierie moderne

À l'inverse du brevet, l'open source mise sur le partage plutôt que sur
l'exclusivité, et le résultat est difficile à ignorer. Une bonne partie
des outils que vous utilisez déjà au MakerSpace en sont issus :
**KiCad** et **FreeCAD** (CAO et électronique), **Arduino** et son
écosystème matériel ouvert, **Python**, **Jekyll** (le générateur de ce
site), et à plus grande échelle **Linux**, **GCC/LLVM**, ou **RISC-V** dans
le matériel. La recherche scientifique suit un mouvement comparable avec la
publication en accès libre (arXiv) et la reproductibilité des résultats.
Le principe commun : en rendant le travail réutilisable et vérifiable par
tous, on accélère l'innovation collective, au prix, pour l'auteur
individuel, de renoncer à l'exclusivité commerciale.

## Choisir une licence pour votre projet

Une fois ces bases posées, choisir une licence pour votre propre projet
devient une décision concrète, pas un mystère juridique. Un projet maker
mélange souvent plusieurs types de contenus, qui n'ont pas les mêmes
familles de licences.

### Pour le code : permissive ou copyleft

| Licence | Type | Ce qu'elle permet |
|---|---|---|
| MIT | Permissive | Réutilisation quasi libre, y compris commerciale, sans obligation de repartager les modifications |
| Apache 2.0 | Permissive | Comme MIT, avec en plus une protection explicite contre les brevets |
| GPL v3 | Copyleft | Réutilisation libre, mais toute version modifiée redistribuée doit rester sous la même licence |

La question à se poser : voulez-vous que les versions modifiées de votre
code restent forcément ouvertes (copyleft, type GPL), ou acceptez-vous
qu'elles deviennent fermées (permissif, type MIT) ?

### Pour le matériel

Le matériel a ses propres licences, pensées pour des schémas et des fichiers
CAO plutôt que du code : **CERN-OHL** (v2, avec des variantes permissive et
copyleft, développée au CERN) ou la plus ancienne **TAPR OHL**. Le principe
est le même que pour le code, appliqué aux fichiers matériels.

### Pour la documentation

Pour du texte, des images, de la documentation : les licences
**Creative Commons**.

| Licence | Ce qu'elle permet |
|---|---|
| CC0 | Domaine public, aucune restriction, même pas l'attribution |
| CC-BY | Réutilisation libre, à condition de citer l'auteur |
| CC-BY-SA | Réutilisation libre avec attribution, les dérivés doivent rester sous la même licence (c'est la licence de Wikipédia) |
| CC-BY-NC | Réutilisation libre non commerciale, avec attribution |

### Appliquer la licence

Ajoutez un fichier `LICENSE` (ou `LICENSE.md`) à la racine de votre repo
avec le texte complet de la licence choisie, et mentionnez-la dans votre
README. Un projet sans mention de licence est, par défaut, considéré comme
"tous droits réservés" : personne ne peut légalement le réutiliser, même
s'il est visible publiquement sur GitHub.

## Citer les sources que vous réutilisez

Pour chaque élément externe réutilisé (code, schéma, image, idée reprise
d'un projet existant) : nommez la source, indiquez un lien, et respectez sa
licence si elle en a une. Voir aussi
[Rechercher l'existant et étudier la faisabilité](/workshops/methodologie-de-projet/concepts/rechercher-existant-faisabilite/)
pour la pratique de recherche qui précède cette étape.

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| J'ai trouvé du code utile sur GitHub, sans fichier LICENSE | Par défaut = "tous droits réservés", même si le dépôt est public | Contacter l'auteur pour demander l'autorisation, ou chercher un projet équivalent avec une licence claire |
| Je ne sais pas si mon projet d'école m'appartient | Politique de propriété intellectuelle propre à chaque établissement | Se renseigner auprès de son référent pédagogique avant de choisir une licence |
| J'ai réutilisé un schéma sans noter la source sur le moment | Oubli fréquent en cours de projet | Ajoutez la source dès que vous vous en rendez compte, mieux vaut tard que jamais |
| Je veux protéger une idée avant qu'elle ne soit "volée" | Confusion fréquente entre idée et réalisation : une idée seule n'est pas protégeable, seule sa mise en œuvre concrète l'est | Documentez et datez votre réalisation (ça sert aussi de preuve d'antériorité) plutôt que de chercher à cacher l'idée |
