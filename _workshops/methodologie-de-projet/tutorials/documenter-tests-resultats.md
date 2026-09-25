---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Documenter les tests et résultats
subtitle: La preuve que le projet fonctionne, pas juste l'affirmation
description: Rédiger un protocole de test simple et présenter des résultats mesurés, pour prouver (pas seulement affirmer) que votre projet répond au besoin.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

prerequisites:
  - label: Avoir un prototype testable
    link: ""
softwares:
  - label: Aucun logiciel requis
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Le grand oublié de la documentation

Beaucoup de documentation de projet s'arrête à "voici comment ça marche",
sans jamais montrer "voici la preuve que ça marche vraiment, mesurée". Les
tests et leurs résultats sont pourtant ce qui distingue une affirmation
d'une preuve.

## Repartir des critères de réussite

Vos tests ne s'inventent pas au dernier moment : ils découlent directement
des critères de réussite du cahier des charges, voir
[Définir son besoin](/workshops/methodologie-de-projet/concepts/definir-son-besoin/)
et son tableau des fonctions. Si le critère est "taux de tri ≥ 80% sur 20
essais", le test consiste littéralement à faire les 20 essais et compter.

## Un protocole de test simple

{% capture snippet_protocole %}## Test : taux de tri correct

**Critère visé** : ≥ 80% sur 20 essais (voir cahier des charges)

**Méthode** : déposer 20 déchets connus (mélange plastique/verre/métal)
un par un sur le tapis, noter la catégorie détectée par le robot.

**Conditions** : éclairage du Forum des Sciences (simulé avec ...),
température ambiante.

## Résultats

| Essai | Déchet réel | Détection | Correct ? |
|---|---|---|---|
| 1 | Plastique | Plastique | ✅ |
| 2 | Verre | Métal | ❌ |
| ... | ... | ... | ... |

**Taux obtenu** : 17/20 = 85%, critère atteint.
{% endcapture %}
{% include code-snippet.html label="Copier le gabarit de protocole (Markdown)" content=snippet_protocole %}

## Présenter les résultats clairement

- **Un tableau** pour des mesures répétées (comme ci-dessus).
- **Une vidéo courte** pour un comportement dynamique (un mécanisme qui
  bouge, un robot qui se déplace), souvent plus parlant qu'une
  description écrite.
- **Un graphique** si vous avez des mesures continues (température dans le
  temps, vitesse selon la charge).

{% include message.html title="Montrez aussi les échecs" message="Un test qui échoue (12% des essais ratés dans l'exemple ci-dessus) n'est pas à cacher. Notez dans quelles conditions ça échoue : c'est une information aussi utile que le taux de succès, et ça rejoint la section « Limites connues » vue dans Rendre son projet transmissible." status="is-info" icon="fas fa-info-circle" %}

## Exercice

Choisissez un critère de réussite de votre cahier des charges, écrivez son
protocole de test avec le gabarit ci-dessus, exécutez-le réellement, et
notez les résultats, y compris les échecs.
