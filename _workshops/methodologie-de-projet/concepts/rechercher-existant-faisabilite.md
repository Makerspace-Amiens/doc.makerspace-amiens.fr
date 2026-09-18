---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Rechercher l'existant et étudier la faisabilité
subtitle: Ne pas réinventer ce qui existe déjà, ni découvrir un mur à la semaine 6
description: Comment chercher ce qui a déjà été fait, trouver de la documentation fiable, et vérifier rapidement qu'une idée tient techniquement avant de s'y engager.
author: Adrien Bracq

todo: 70
---

## Rechercher l'existant, c'est le métier d'ingénieur

S'appuyer sur des travaux existants est une pratique normale et attendue en
ingénierie : aucun projet sérieux ne part d'une page blanche, et un bon
ingénieur commence toujours par regarder ce qui a déjà été fait avant de
concevoir sa propre solution. Ce n'est ni du copier-coller, ni du
plagiat, **à condition de toujours citer vos sources**.

{% include message.html title="Sourcer n'est pas optionnel" message="Reprendre une idée, un schéma, une portion de code ou une pièce CAO d'un projet existant est parfaitement légitime, à condition de dire clairement d'où ça vient et de respecter sa licence quand il y en a une. Présenter comme sien un travail réalisé par quelqu'un d'autre, sans le citer, est une question de propriété intellectuelle, pas seulement de bonnes manières." status="is-warning" icon="fas fa-balance-scale" %}

Toute source utilisée (projet, schéma, bout de code, datasheet) doit
être citée dans votre documentation, avec un lien et, si possible, la date
de consultation. Voir la section "Recherche documentaire" plus bas pour le
détail, et le guide
[Comprendre la propriété intellectuelle de son projet](/docs/how-to-guides/propriete-intellectuelle-projet/)
pour les bases de propriété intellectuelle et comment citer correctement.

## Pourquoi chercher avant de concevoir

Le cahier des charges dit *quoi* faire. Avant de décider *comment* le
faire, une étape courte mais souvent sautée : regarder ce qui existe déjà.
Sans ça, deux risques fréquents :

- **Réinventer une roue déjà inventée** : passer trois semaines à concevoir
  un mécanisme que quelqu'un a déjà documenté en détail, erreurs comprises.
- **Découvrir une contrainte bloquante trop tard** : apprendre en semaine 6
  qu'un composant clé n'existe pas au gabarit voulu, ou coûte trois fois le
  budget, alors qu'une recherche de 30 minutes l'aurait révélé dès le
  départ.

## Recherche de l'existant

Cherchez des projets qui ressemblent au vôtre, même partiellement :

- **Au MakerSpace** : des projets d'années précédentes ont peut-être déjà
  traité un problème proche.
- **En ligne** : Hackaday, Instructables, GitHub, forums spécialisés,
  vidéos de démonstration.
- **Le commerce** : des produits existants qui font quelque chose de
  similaire, même dans un contexte différent.

Pour chaque projet trouvé, notez surtout **comment ils ont résolu le
problème** et **quelles difficultés ils ont rencontrées** : c'est ça qui
vous fait gagner du temps, pas juste le résultat final.

### Chercher aussi ce qui ne fonctionne pas

Ne cherchez pas que des réussites. Les projets abandonnés, les échecs
documentés, ou simplement les approches que vous n'aimez pas pour votre
propre projet valent la peine d'être notés, avec la raison. Ça sert à
deux choses : éviter de tomber vous-même dans un piège déjà identifié par
quelqu'un d'autre, et pouvoir justifier plus tard *pourquoi* vous n'avez
pas suivi telle approche, plutôt que de répondre "on n'avait pas envie".
C'est exactement la matière première de la section "Options envisagées" du
format d'arbitrage vu dans
[Tracer ses choix techniques](/workshops/methodologie-de-projet/concepts/tracer-choix-techniques/).

{% include message.html title="Rester léger" message="Il ne s'agit pas de produire une étude bibliographique exhaustive. 3 à 5 projets similaires, regardés 15 minutes chacun, suffisent largement pour un projet de quelques semaines, y compris les échecs et approches écartées." status="is-info" icon="fas fa-info-circle" %}

## Recherche documentaire

Toutes les sources ne se valent pas. Pour les informations techniques qui
vont conditionner vos choix (dimensions, tolérances, caractéristiques
électriques), privilégiez les sources primaires :

{% capture tab1 %}

**Source** : un commentaire trouvé sur un forum, sans date ni référence au
composant exact utilisé.

**Problème** : impossible de vérifier si l'information s'applique à votre
version du composant, ni si elle est encore valable.

{% endcapture %}

{% capture tab2 %}

**Source** : la datasheet officielle du composant, section
caractéristiques électriques, avec le numéro de référence exact.

**Avantage** : donnée vérifiable, traçable, et qui ne change pas selon qui
l'a écrite.

{% endcapture %}

{% include content-tabs.html
  id="sources-fiables"
  tab_title1="❌ Source non fiable"
  tab_title2="✅ Source primaire"
  tab1=tab1
  tab2=tab2
%}

Dès que vous trouvez une source utile, **archivez-la tout de suite** dans
votre documentation (lien + date de consultation), c'est une application
directe de [documenter au fil de l'eau](/workshops/methodologie-de-projet/concepts/documenter-au-fil-de-leau/) :
un onglet de navigateur se ferme, un lien dans votre doc reste.

## Pré-étude de faisabilité

Avant de concevoir la version finale, testez rapidement les points qui vous
inquiètent le plus. Un test de 30 minutes sur une platine d'essai vaut
mieux qu'une semaine de conception basée sur une hypothèse fausse.

Exemple, sur le robot de tri utilisé en exemple dans cet atelier : avant de
concevoir le mécanisme de tri complet, l'équipe a testé en 20 minutes si un
capteur de couleur bon marché distinguait correctement plastique, verre et
métal sous l'éclairage réel du Forum des Sciences, un point de risque
identifié dès le cahier des charges.

{% include message.html title="Une pré-étude n'est pas un prototype fini" message="L'objectif est de répondre à une question précise (« est-ce que ça fonctionne assez bien ? ») avec le montage le plus rapide possible, pas de produire quelque chose de propre ou de présentable." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Comment présenter ça

Une courte synthèse suffit ; elle vit dans le fichier `docs/etudes.md` du
repo template. Un tableau comparatif est souvent le format le plus utile :

| Solution étudiée | Source | Avantages | Inconvénients | Ce qu'on retient |
|---|---|---|---|---|
| Capteur couleur TCS3200 | Projet Hackaday similaire | Peu cher, bien documenté | Sensible à la luminosité ambiante | À tester sous éclairage réel avant de valider |
| Tri par poids (balance) | Produit commercial existant | Fiable, peu de composants | Ne distingue pas verre/plastique de même poids | Écarté : ne répond pas au besoin |
| Vision par caméra | Forum robotique | Précis, flexible | Trop complexe pour le budget/délai | Écarté pour ce projet, piste pour une v2 |

{% capture snippet_comparatif %}| Solution étudiée | Source | Avantages | Inconvénients | Ce qu'on retient |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |
| ... | ... | ... | ... | Écarté : ... |{% endcapture %}
{% include code-snippet.html label="Copier le tableau (Markdown)" content=snippet_comparatif %}

## Exercice

En équipe, sur votre projet :

1. Trouvez 2 à 3 projets existants qui ressemblent au vôtre. Notez pour
   chacun comment ils ont résolu le problème principal.
2. Identifiez le point technique qui vous inquiète le plus. Faites un test
   rapide (30 minutes maximum) pour vérifier s'il tient, avant de concevoir
   la solution complète.
3. Remplissez un tableau comparatif comme celui ci-dessus dans votre
   documentation.
