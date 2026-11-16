---
# RÉDACTION : un tutoriel fait réaliser quelque chose, pas à pas, du début à la fin.
# Chaque étape utilise l'include step-tuto.html (jamais de titres numérotés à la main).
layout: documentation
hide_hero: false          # passer à false et ajouter hero_image: hero.png quand une photo existe
image: "entr.png"     
component_toc: true
doc_header: true

title: Modélisation
description: "Construire un petit réseau de neurones convolutif (CNN), l'entraîner sur les images de chats et de chiens, puis évaluer ses résultats avec la précision et la matrice de confusion"
author: Lina Abousalama      # RÉDACTION : mettre son propre nom
---

## Objectif

Une fois les données préparées, nous pouvons construire le modèle qui apprendra à distinguer un chat d'un chien. Dans ce tutoriel, nous définissons un petit réseau de neurones convolutif (CNN), assez léger pour être embarqué plus tard sur un microcontrôleur, nous l'entraînons sur les images d'entraînement, puis nous évaluons ses résultats sur le jeu de test avec la précision et la matrice de confusion.

À la fin de ce tutoriel, vous saurez :

- augmenter légèrement les images d'entraînement ;
- construire un réseau de neurones convolutif avec Keras ;
- entraîner un modèle avec arrêt anticipé et réduction automatique du taux d'apprentissage ;
- évaluer un modèle de classification avec la précision et la matrice de confusion.

## Étapes

{% include step-tuto.html
greyBackground=true
title="Étape 1 : Entraînement du modèle"
content="Nous augmentons légèrement les images d'entraînement, nous construisons le réseau, puis nous l'entraînons sur les données préparées à l'étape précédente (train_data, validation_data et test_data) et nous mesurons sa précision sur le jeu de test."
%}

### Augmenter les images d'entraînement

L'augmentation de données crée de légères variations des images (retournement, petite rotation) pour que le modèle ne mémorise pas les images exactes. Elle n'est appliquée qu'à l'entraînement : la validation et le test restent inchangés.

```cpp
# Augmentation légère des images d'entraînement
augmentation_bn = tf.keras.Sequential([
    tf.keras.layers.RandomFlip("horizontal"),
    tf.keras.layers.RandomRotation(0.05)
])

train_data_bn = (
    train_data
    .unbatch()
    .map(
        lambda image, etiquette:
            (augmentation_bn(image, training=True), etiquette),
        num_parallel_calls=tf.data.AUTOTUNE
    )
    .batch(32)
    .prefetch(tf.data.AUTOTUNE)
)
```
Chaque image d'entraînement est retournée au hasard et tournée d'au plus environ 0,05 tour. Le modèle voit ainsi des variantes différentes à chaque époque, ce qui limite le surapprentissage.

### Définir le modèle

Le réseau reçoit une image de 96 × 96 × 3 et renvoie un nombre entre 0 et 1 : la probabilité que l'image montre un chien (étiquette 1).

```cpp
modele_cnn3 = tf.keras.Sequential([

    #Définir l’image d’entrée
    tf.keras.layers.Input(shape=(96, 96, 3)),


    #Extraire les caractéristiques
    tf.keras.layers.Conv2D(8, 3, use_bias=False), #repère des caractéristiques dans l’image : d’abord des formes simples, puis des motifs plus complexes
    tf.keras.layers.BatchNormalization(),#stabilise les valeurs pendant l’apprentissage
    tf.keras.layers.ReLU(), #permet au réseau d’apprendre des relations non linéaires
    tf.keras.layers.MaxPooling2D(), #réduit la taille des cartes et conserve les caractéristiques importantes.

    tf.keras.layers.Conv2D(16, 3, use_bias=False),
    tf.keras.layers.BatchNormalization(),
    tf.keras.layers.ReLU(),
    tf.keras.layers.MaxPooling2D(),

    tf.keras.layers.Conv2D(32, 3, use_bias=False),
    tf.keras.layers.BatchNormalization(),
    tf.keras.layers.ReLU(),
    tf.keras.layers.MaxPooling2D(),

    tf.keras.layers.Conv2D(64, 3, use_bias=False),
    tf.keras.layers.BatchNormalization(),
    tf.keras.layers.ReLU(),

    #Produire la prédiction
    tf.keras.layers.GlobalAveragePooling2D(),     # résume chaque carte de caractéristiques par une seule valeur
    tf.keras.layers.Dense(32, activation="relu"), # combine les caractéristiques
    tf.keras.layers.Dropout(0.3),  # Réduire le risque de surapprentissage
    tf.keras.layers.Dense(1, activation="sigmoid") # Prédire chat ou chien
])
```
- **Quatre blocs de convolution** (8, 16, 32 puis 64 filtres de 3 × 3) : les premiers repèrent des motifs simples (contours, textures), les suivants des motifs plus complexes (formes d'oreilles, de museaux).
- **Normalisation, ReLU et pooling** : chaque bloc stabilise les valeurs, ajoute de la non-linéarité et réduit la taille des cartes. Les convolutions n'ont pas de biais (`use_bias=False`) car la normalisation qui suit joue ce rôle.
- **Sortie** : un pooling global, une couche de 32 neurones, un Dropout de 0,3 et un neurone final à activation sigmoïde.

### Entraîner le modèle

On choisit la méthode d'apprentissage et deux outils qui évitent de gaspiller de l'entraînement : l'arrêt anticipé et la réduction du taux d'apprentissage.

```cpp
# Définir la méthode d'apprentissage et les critères d'évaluation
modele_cnn3.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
    loss="binary_crossentropy", # Fonction de perte pour deux classes
    metrics=["accuracy"] # Mesurer la précision
)

# Arrêter si la perte de validation ne s'améliore plus
arret_cnn3 = tf.keras.callbacks.EarlyStopping(
    monitor="val_loss",
    patience=4,
    restore_best_weights=True
)

# Réduire le taux d'apprentissage si la validation stagne
baisse_taux_cnn3 = tf.keras.callbacks.ReduceLROnPlateau(
    monitor="val_loss",
    factor=0.5,
    patience=2,
    min_lr=0.000001
)

# Entraîner le modèle pendant 20 époques au maximum
historique_cnn3 = modele_cnn3.fit(
    train_data_bn,
    validation_data=validation_data,
    epochs=20,
    callbacks=[arret_cnn3, baisse_taux_cnn3]
)

```
Le modèle atteint environ 86 % de précision en validation, sans surapprentissage marqué (86,2 % en entraînement contre 86,0 % en validation), et le taux d’apprentissage a été réduit automatiquement de 0,001 à 0,000125 pendant les 20 époques.

### Évaluer sur le jeu de test

Le jeu de test n'a jamais servi à l'entraînement ni au réglage : il donne une mesure honnête de la qualité du modèle.

```cpp
perte_test, accuracy_test = modele_cnn3.evaluate(test_data)

print("Précision sur le jeu de test :", round(accuracy_test * 100, 2), "%")
print("Perte sur le jeu de test :", round(perte_test, 4))
```

Le modèle classe correctement 87,68 % des images de test, avec une perte de 0,2876. Ce résultat est cohérent avec celui de la validation (environ 86 %). Le modèle généralise donc bien aux images qu'il n'a jamais vues.


{% include step-tuto.html
greyBackground=true
title="Étape 2 : Matrice de confusion"
content="La précision ne dit pas quelles erreurs le modèle commet. La matrice de confusion compare les classes réelles aux classes prédites et montre si le modèle confond plus souvent les chats ou les chiens."
%}

### Calculer et afficher la matrice

```cpp
# Récupérer les vraies classes
classes_reelles = np.concatenate([
    etiquettes.numpy().ravel() for _, etiquettes in test_data
])

# Calculer les prédictions
scores = modele_cnn3.predict(test_data, verbose=0).ravel()
classes_predit = (scores >= 0.57).astype(int)

# Calculer et afficher la matrice de confusion
matrice = confusion_matrix(classes_reelles, classes_predit, labels=[0, 1])
affichage = ConfusionMatrixDisplay(
    confusion_matrix=matrice,
    display_labels=["Chat (0)", "Chien (1)"]
)

affichage.plot(cmap="Blues", values_format="d")
plt.title("Matrice de confusion du CNN3")
plt.show()

```
La matrice de confusion montre que le modèle a correctement classé 1538 chats et 1 521 chiens. Il a classé à tort 182 chats comme des chiens et 248 chiens comme des chats.



## Conclusion

Nous avons construit un petit CNN, l'avons entraîné avec une augmentation légère des images, puis évalué sur le jeu de test. Il atteint 87,68 % de précision et une perte de 0,2876. La matrice de confusion montre que les erreurs sont réparties dans les deux sens, avec un peu plus de chiens classés comme chats.

Ce résultat est correct pour un réseau aussi léger . Il sert de référence pour la suite : le modèle sera compressé par quantification en entiers de 8 bits, puis déployé sur le microcontrôleur, et nous vérifierons que ses résultats restent comparables.

L'étape suivante est la **quantification et la conversion du modèle**.
