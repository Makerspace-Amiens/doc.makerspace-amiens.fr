---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Créer le poster et la vidéo de présentation
subtitle: Résumer des semaines de travail en une image et 90 secondes
description: Préparer le poster et la courte vidéo de présentation attendus à la fin du projet, en réutilisant ce qui a déjà été documenté au fil de l'eau.
author: Adrien Bracq

time: 2
difficulty: 1
todo: 55

prerequisites:
  - label: Avoir un prototype fonctionnel et documenté
    link: ""
softwares:
  - label: Un logiciel de montage vidéo (même sur smartphone)
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Ce qui est déjà prêt

La page d'accueil de votre site (`docs/index.md`) prévoit deux emplacements,
avec un exemple à remplacer : `docs/assets/images/poster.jpg` et
`docs/assets/images/intro_amiens.mp4`. Si vous avez suivi
[Documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/),
vous avez déjà l'essentiel du contenu : photos prises pendant le montage,
résultats de tests, description du besoin. Le poster et la vidéo ne sont
pas une nouvelle rédaction, mais une synthèse de ce qui existe déjà.

## Le poster

Un poster de présentation répond, visuellement, en quelques secondes de
lecture : quel problème, quelle solution, quels résultats.

- **Contexte/problème** : une phrase, reprise de votre cahier des charges.
- **Solution** : un visuel du prototype, photo réelle, pas juste un rendu
  CAO.
- **Résultats** : un chiffre marquant (ex. "taux de tri : 85%"), repris de
  [Documenter les tests et résultats](/workshops/methodologie-de-projet/tutorials/documenter-tests-resultats/).
- **Équipe et contact** : qui a fait le projet, comment aller plus loin
  (lien vers le repo).

{% include message.html title="Moins de texte que vous ne le pensez" message="Un poster se lit debout, en quelques secondes, pas comme un rapport. Si un visiteur doit s'arrêter pour tout lire, le poster contient trop de texte." status="is-warning" icon="fas fa-exclamation-triangle" %}

## La vidéo (~90 secondes, format vertical)

Structure qui fonctionne pour ce format court :

1. **Présentation du projet** (10-15s) : qui, quoi, pourquoi.
2. **Explication du fonctionnement** (20-30s) : comment ça marche,
   avec des plans du mécanisme ou du montage.
3. **Vues du prototype / application** (30-40s) : le robot en action, les
   résultats de tests si filmables.
4. **Conclusion** (10-15s) : ce que ça a permis, ce qu'on ferait
   différemment.

{% include message.html title="Réutilisez vos rushs existants" message="Les photos et courtes vidéos prises pendant le montage (voir [Documenter l'assemblage et le montage](/workshops/methodologie-de-projet/tutorials/documenter-assemblage-montage/)) servent souvent directement de plans pour cette vidéo : pas besoin de tout refilmer à la fin." status="is-info" icon="fas fa-info-circle" %}

## Intégrer les deux dans le site

Le plus simple : **remplacer les deux fichiers d'exemple** du template par
les vôtres, en gardant les mêmes noms. La page d'accueil les affiche déjà.

| Fichier à remplacer | Contraintes |
|---|---|
| `docs/assets/images/poster.jpg` | Image de moins de **2 Mo** |
| `docs/assets/images/intro_amiens.mp4` | 1 min 30 au format vertical, moins de **25 Mo** |

Si vous préférez d'autres noms de fichiers (sans espace ni accent),
changez-les aussi dans `docs/index.md`, aux deux endroits où ils
apparaissent :

```markdown
![Poster du projet](assets/images/poster.jpg)

<video src="assets/images/intro_amiens.mp4" controls title="Présentation du projet" style="width: 100%;"></video>
```

{% include message.html title="Attention à la taille des fichiers" message="Au-delà de **25 Mo**, le workflow CI de votre repo échoue (onglet **Actions**), et une image de plus de **2 Mo** déclenche un avertissement. Pour la vidéo, exportez en **720p** (par exemple avec le logiciel gratuit HandBrake) : c'est largement suffisant pour un format vertical. Si elle reste trop lourde, hébergez-la ailleurs (voir juste en dessous)." status="is-warning" icon="fas fa-exclamation-triangle" %}

Pour une vidéo hébergée sur YouTube plutôt que stockée dans le repo,
utilisez une balise `<iframe>` classique à la place de la balise `<video>` ;
ça fonctionne sur n'importe quel site, y compris le vôtre basé sur
Just the Docs :

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/VOTRE_ID_VIDEO" title="Présentation du projet" frameborder="0" allowfullscreen></iframe>
```

Remplacez `VOTRE_ID_VIDEO` par l'identifiant présent dans l'URL de votre
vidéo YouTube (après `watch?v=`).

## Exercice

Listez, parmi les photos/vidéos déjà prises pendant le projet, celles
réutilisables pour le poster et la vidéo. Identifiez seulement ce qui
manque encore à filmer ou photographier, probablement moins que prévu si
la documentation a été faite au fil de l'eau.
