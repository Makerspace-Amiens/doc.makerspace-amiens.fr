---
layout: slides
title: Portfolio de l'ingénieur
subtitle: "Séance 2 : votre présentation et votre CV"
description: Support de la deuxième séance de l'atelier Portfolio de l'ingénieur (2 h, dont 30 minutes de présentation) sur Markdown, l'identité du site, la page Qui suis-je et le CV.
author: Adrien Bracq
kicker: MakerSpace Amiens
back_link: /workshops/portfolio-ingenieur/
---

## Au programme

1. Écrire en Markdown
2. Mettre votre nom sur le site
3. Vous présenter : Qui suis-je et CV
4. À vous de personnaliser votre site

<aside class="notes" markdown="1">
Déroulé : 30 min de présentation (parties 1 à 3, activité comprise), puis 1 h 30 sur PC avec les tutoriels Syntaxe Markdown et Personnaliser son portfolio. Objectif de sortie : un site à leur nom, avec photo (ou avatar par défaut), liens, page Qui suis-je et CV commencés.
</aside>

---

## Où en êtes-vous ?

- Votre site s'ouvre à l'adresse `https://pseudo.github.io`
- Son dépôt est cloné dans **VSCode**
- Vous avez envoyé un **premier commit**
- Le lien est déposé sur **Moodle**

Avant tout : ouvrez VSCode et **synchronisez**.
{: .highlight-red}

<aside class="notes" markdown="1">
Faire le point à main levée. Ceux qui n'ont pas fini la séance 1 reprennent les tutoriels de la séance 1 pendant la partie pratique, avant de personnaliser.
</aside>

---

<!-- .slide: class="slide-section" -->

## Écrire en Markdown

Du texte simple, mis en forme par quelques symboles

---

## Cinq gestes suffisent

| Vous écrivez | Vous obtenez |
|---|---|
| `## Mon parcours` | Un titre de section |
| `**important**` | **important** en gras |
| `- un élément` | Un élément de liste |
| `[mon GitHub](https://github.com/...)` | Un lien cliquable |
| `![Mon robot](/assets/images/robot.jpg)` | Une image |
{: .table-dense}

Pour voir le rendu pendant que vous écrivez : <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>V</kbd> dans VSCode.
{: .caption}

[Syntaxe Markdown](/workshops/methodologie-de-projet/tutorials/syntaxe-markdown/?project=portfolio-ingenieur){: .doc-link}

---

<!-- .slide: class="slide-section" -->

## Votre identité

Le site affiche encore « Prénom Nom » : il est temps qu'il devienne le vôtre

---

## Tout part de `_config.yml`

```yaml
title: "Camille Martin"
author:
  name: "Camille Martin"
  bio: "Élève ingénieure en I1, attirée par l'électronique embarquée."
  avatar: "/assets/images/photo-profil.jpg"
```

- L'**indentation** compte : 2 espaces, jamais de tabulation
- Les textes vont **entre guillemets**
- Le bas du fichier fait marcher le thème : **n'y touchez pas**

[Personnaliser son portfolio](/workshops/portfolio-ingenieur/tutorials/personnaliser-portfolio/){: .doc-link}

---

## Une photo qui vous présente

<div class="columns" markdown="1">
<div markdown="1">

### À faire

- Cadrée sur le visage
- Un fond simple
- Carrée, en JPG
- Nommée `photo-profil.jpg`

</div>
<div markdown="1">

### À éviter

- Un selfie de vacances
- Une photo de groupe recadrée
- Une photo de soirée
- Un nom comme `IMG 2034.JPG`

</div>
</div>

Pas encore de bonne photo ? Gardez l'avatar par défaut en attendant.
{: .caption}

---

<!-- .slide: class="slide-section" -->

## Vous présenter

La page Qui suis-je et votre CV

---

## Trois questions pour vous présenter

<p class="activity-meta"><span><i class="fas fa-user"></i>Individuel</span><span><i class="far fa-clock"></i>5 min</span><span><i class="fas fa-pen"></i>Sans PC</span></p>

Notez une ou deux phrases pour chaque question :

- **D'où venez-vous ?** Votre parcours, ce qui vous a mené ici
- **Qu'est-ce qui vous intéresse ?** Des domaines, des techniques, des projets
- **Que cherchez-vous ?** Un stage, une alternance, même si c'est encore flou

Ces notes deviennent le premier jet de votre page **Qui suis-je**.
{: .caption}

<aside class="notes" markdown="1">
Insister sur la première personne et le ton simple : comme on se présenterait à un ingénieur en entretien. Deux ou trois volontaires lisent leur réponse à la troisième question.
</aside>

---

## Le CV, dans `_data/cv.yml`

```yaml
sections:
  - titre: "Formation"
    icon: graduation-cap
    elements:
      - periode: "2026 à aujourd'hui"
        titre: "Cycle ingénieur, I1"
        organisme: "UniLaSalle Amiens"
```

- Une **section** par rubrique : formation, expériences, engagements
- Il s'affiche sous votre texte, sur la page **Qui suis-je**
- Un CV en PDF dans `assets/cv/` ajoute un bouton de téléchargement

<aside class="notes" markdown="1">
Le guide pas à pas du CV reste à écrire dans l'atelier. En attendant, renvoyer vers la partie 4 du guide étudiant du thème et vers les exemples du fichier `cv.yml` du modèle.
</aside>

---

## Un premier article

Le modèle contient un article d'exemple : réécrivez-le pour annoncer votre site.

- Il est dans `_posts/`, nommé `AAAA-MM-JJ-titre-court.md`
- La **date du nom** est obligatoire
- Un article daté dans le futur ne s'affiche pas encore

Le blog servira aussi à votre **journal de bord**, en séance 4.
{: .caption}

---

<!-- .slide: class="slide-section" -->

## À vous

Aujourd'hui, votre site prend votre nom

---

## Les tutoriels de la séance

<p class="activity-meta"><span><i class="fas fa-user"></i>Individuel</span><span><i class="fas fa-laptop"></i>Avec PC</span></p>

1. **Découvrez** Markdown : lisez le tutoriel et faites son exercice
2. **Personnalisez** votre site : nom, photo, liens, page Qui suis-je
3. **Commencez** votre CV dans `_data/cv.yml`
4. **Réécrivez** l'article d'exemple

[Syntaxe Markdown](/workshops/methodologie-de-projet/tutorials/syntaxe-markdown/?project=portfolio-ingenieur){: .doc-link} [Personnaliser son portfolio](/workshops/portfolio-ingenieur/tutorials/personnaliser-portfolio/){: .doc-link}

<aside class="notes" markdown="1">
Erreur la plus fréquente : une croix rouge dans Actions après une modification de `_config.yml` (indentation, guillemet oublié). Montrer comment lire la ligne en cause dans le run en échec.
</aside>

---

## Avant de partir

- Votre **nom**, votre **photo** et vos **liens** s'affichent sur l'accueil
- Votre page **Qui suis-je** contient votre présentation
- Votre **CV** a au moins votre formation
- Tout est **synchronisé** : votre site en ligne est à jour

Rien n'a changé ? Rechargez sans le cache : <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>R</kbd>.
{: .caption}

---

## La prochaine fois

**Séance 3** : vous présentez un projet sur votre site.

- Choisissez dès maintenant **un projet** : de cours, de club ou personnel
- Rassemblez ce que vous en avez : **photos**, schémas, mesures, fichiers de CAO
- Notez ce que **vous** y avez fait

Une photo prise aujourd'hui vaut mieux qu'une photo introuvable dans six mois.
{: .highlight-red}
