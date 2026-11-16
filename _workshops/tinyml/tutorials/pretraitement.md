---
# RÉDACTION : un tutoriel fait réaliser quelque chose, pas à pas, du début à la fin.
# Chaque étape utilise l'include step-tuto.html (jamais de titres numérotés à la main).
layout: documentation
hide_hero: false          # passer à false et ajouter hero_image: hero.png quand une photo existe
image: "chats.png"     
component_toc: true
doc_header: true

title: Prétraitement des données
description: "Découper le jeu de données en trois ensembles, redimensionner les images en 96 × 96 pixels et normaliser les valeurs des pixels avant l'entraînement"
author: Lina Abousalama      # RÉDACTION : mettre son propre nom
---

## Objectif

Un modèle ne peut pas apprendre directement à partir des images brutes : elles ont des tailles différentes et leurs pixels prennent des valeurs entre 0 et 255. Dans ce tutoriel, nous préparons le jeu de données *Cats vs Dogs* pour l'entraînement : nous le découpons en trois ensembles, nous donnons à toutes les images la même taille, nous normalisons leurs pixels et nous les regroupons par lots. Cette étape garantit que le modèle reçoit des données homogènes et que son évaluation se fait sur des images qu'il n'a jamais vues.

À la fin de ce tutoriel, vous saurez :

- découper un jeu de données en ensembles d'entraînement, de validation et de test ;
- redimensionner des images à une taille unique ;
- normaliser les valeurs des pixels ;
- regrouper les données par lots.

## Étapes

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Découper en trois jeux"
content="Nous séparons le jeu de données en trois ensembles : entraînement (70 %), validation (15 %) et test (15 %). Le modèle apprend sur l'entraînement, est réglé grâce à la validation et n'est évalué qu'à la fin, sur le test."
%}
```cpp
train_data, validation_data, test_data = tfds.load(
    "cats_vs_dogs",
    split=["train[:70%]", "train[70%:85%]", "train[85%:]"],
    as_supervised=True
)
```
```cpp
nombre_train = sum(1 for image, etiquette in train_data)
nombre_validation = sum(1 for image, etiquette in validation_data)
nombre_test = sum(1 for image, etiquette in test_data)

print("Images d'entraînement :", nombre_train)
print("Images de validation :", nombre_validation)
print("Images de test :", nombre_test)
```
- Les 23 262 images sont réparties en trois ensembles : 16 283 pour l'entraînement (70 %), 3 490 pour la validation (15 %) et 3 489 pour le test (15 %).
- Ce découpage est fixe : à chaque exécution, les mêmes images se retrouvent dans chaque ensemble, ce qui rend les résultats reproductibles.



{% include step-tuto.html
greyBackground=true
title="Étape 2 : Redimensionner les images et normaliser les valeurs"
content="Nous donnons à toutes les images la même taille (96 × 96 pixels), nous ramenons les valeurs des pixels entre 0 et 1, puis nous regroupons les images par lots de 32."
%}

```cpp
def preparer_image(image, etiquette):
    image = tf.image.resize(image, (96, 96))
    image = image / 255.0
    return image, etiquette

train_data = train_data.map(preparer_image).shuffle(500).batch(32)
validation_data = validation_data.map(preparer_image).batch(32)
test_data = test_data.map(preparer_image).batch(32)

```
```cpp
images, etiquettes = next(iter(train_data))

print("Forme des images :", images.shape)
print("Forme des étiquettes :", etiquettes.shape)

```

On les a redimensionnées en 96 × 96 pixels pour leur donner la même taille et réduire les calculs. On a conservé les trois canaux couleur (RGB), puis normalisé les pixels entre 0 et 1 en divisant leurs valeurs par 255 afin de faciliter l’apprentissage. Enfin, on a regroupé les images par lots de 32 : chaque lot contient 32 images et leurs 32 étiquettes correspondantes.


## Conclusion

Le jeu de données est maintenant prêt pour l'entraînement : il est découpé en trois ensembles (16 283 images d'entraînement, 3 490 de validation et 3 489 de test), toutes les images ont la même taille de 96 × 96 × 3, leurs pixels sont compris entre 0 et 1, et elles sont regroupées par lots de 32.

Deux points demandent de l'attention pour la suite. D'abord, les images rectangulaires sont déformées en carrés, car le redimensionnement ne conserve pas les proportions. Ensuite, le **même prétraitement** (redimensionnement en 96 × 96 puis division par 255) devra être reproduit à l'identique lors du déploiement sur le microcontrôleur, sinon le modèle recevra des données différentes de celles de l'entraînement.

L'étape suivante est l'**entraînement du modèle**.
