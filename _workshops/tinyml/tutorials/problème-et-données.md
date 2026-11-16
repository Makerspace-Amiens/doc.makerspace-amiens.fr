---
# RÉDACTION : un tutoriel fait réaliser quelque chose, pas à pas, du début à la fin.
# Chaque étape utilise l'include step-tuto.html (jamais de titres numérotés à la main).
layout: documentation
hide_hero: false          # passer à false et ajouter hero_image: hero.png quand une photo existe
image: "hero.png"
component_toc: true
doc_header: true

title: Compréhension du problème et des données
description: "Découvrir le jeu de données, examiner les images et leurs étiquettes, puis explorer sa structure avant de préparer les données pour l’entraînement"
author: Lina Abousalama      # RÉDACTION : mettre son propre nom


## Objectif

Un modèle apprend à partir des exemples qu’on lui fournit. Dans ce tutoriel, nous allons explorer un jeu de données existant composé d’images de chats et de chiens, en examinant son contenu, ses étiquettes et son organisation. Cette étape nous aidera à comprendre la nature des données, à définir le problème et à choisir la stratégie de machine learning la plus adaptée avant d’entraîner le modèle.

À la fin de ce tutoriel, vous saurez :
- charger un jeu de données avec TensorFlow Datasets ;
- vérifier ses classes et leur répartition ;
- examiner la forme et les valeurs des images ;
- visualiser des exemples ;
- en déduire le prétraitement à appliquer.


## Étapes

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Charger le jeu de données"
content="Un jeu de données peut provenir de différentes sources :
- des fichiers (CSV, Excel, JSON ou dossiers d’images) ;
- une base de données relationnelle ou transactionnelle ;
- une bibliothèque en ligne.

Dans ce projet, nous avons choisi la troisième solution : nous utilisons le jeu de données public **Cats vs Dogs**, disponible dans la bibliothèque **TensorFlow Datasets**."
%}
```cpp
dataset, info = tfds.load(
    "cats_vs_dogs",       # Nom du jeu de données
    split="train",        # Partie d'entraînement
    as_supervised=True,  # Chaque élément contient une image et son étiquette
    with_info=True
)

print("Dataset téléchargé !")
print("Classes :", info.features["label"].names)
```

{% include step-tuto.html
greyBackground=true
title="Étape 2 : Parcourir le jeu de données"
content="Avant de préparer les données, nous devons connaître leur structure : combien d’images contient le jeu de données, quelles sont les classes, quelle est la taille des images et quel type de valeurs prennent les pixels."
%}

```cpp
classes = info.features["label"].names
nombre_images = info.splits["train"].num_examples

comptes_classes = Counter()
formes_images = Counter()
minimum_pixel = 255
maximum_pixel = 0
premiere_image = None
premiere_classe = None

for image, etiquette in tfds.as_numpy(dataset):
    nom_classe = classes[int(etiquette)]
    comptes_classes[nom_classe] += 1
    formes_images[image.shape] += 1

    minimum_pixel = min(minimum_pixel, int(image.min()))
    maximum_pixel = max(maximum_pixel, int(image.max()))

    if premiere_image is None:
        premiere_image = image
        premiere_classe = nom_classe

print("Nombre total d'images :", nombre_images)
print("Classes :", classes)
print("Nombre d'images par classe :", comptes_classes)
print("Nombre de formes d'image différentes :", len(formes_images))
print("Formes les plus fréquentes :", formes_images.most_common(5))
print("Type des pixels :", premiere_image.dtype)
print("Valeur minimale des pixels :", minimum_pixel)
print("Valeur maximale des pixels :", maximum_pixel)


```

Le jeu de données contient 23 262 images réparties en deux classes : chat (11 658 images) et chien (11 604 images). Les images ont des dimensions très variables (6 462 formes différentes) ; la forme la plus fréquente est 375 × 500 pixels (hauteur × largeur). Chaque image couleur possède trois canaux RGB, et ses pixels sont stockés au format uint8, avec des valeurs comprises entre 0 et 255.

{% include step-tuto.html
greyBackground=true
title="Étape 3 : Visualiser des exemples"%}

```cpp
classes = info.features["label"].names  # Noms des classes

plt.figure(figsize=(10, 6))  # Définir la taille de la figure

for i, (image, etiquette) in enumerate(tfds.as_numpy(dataset.take(6))):
    plt.subplot(2, 3, i + 1)  # Placer chaque image dans une grille de 2 × 3
    plt.imshow(image)  # Afficher l'image
    plt.title(classes[int(etiquette)])  # Afficher son étiquette
    plt.axis("off")  # Masquer les axes

plt.tight_layout()
plt.show()
```


## Conclusion

Le jeu de données est équilibré, étiqueté et très varié. Il nécessite deux traitements :
- Un modèle attend des entrées de taille fixe : il faudra redimensionner toutes les images à la même taille. 
- Les valeurs de 0 à 255 seront normalisées (divisées par 255) pour obtenir des nombres entre 0 et 1, plus faciles à traiter par un réseau de neurones.

Ces opérations sont l’objet de l’étape suivante, la préparation des données.


