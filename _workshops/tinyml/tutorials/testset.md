---
# RÉDACTION : un tutoriel fait réaliser quelque chose, pas à pas, du début à la fin.
# Chaque étape utilise l'include step-tuto.html (jamais de titres numérotés à la main).
layout: documentation
hide_hero: false          # passer à false et ajouter hero_image: hero.png quand une photo existe
image: "test.png"
component_toc: true
doc_header: true

title: Préparer et exporter le jeu de test 
description: "Redimensionner les images du jeu de test Cats vs Dogs en 96 × 96 pixels, enregistrer leurs étiquettes et leurs pixels dans un fichier binaire, puis sauvegarder ce fichier dans Google Drive pour tester le modèle sur l’ESP32"
author: Lina Abousalama     
---

## Objectif

Le jeu de test permet d’évaluer le modèle sur des images qu’il n’a pas utilisées pendant son entraînement. Dans ce tutoriel, nous récupérons les 15 % derniers exemples du jeu de données Cats vs Dogs. Nous redimensionnons chaque image en 96 × 96 pixels, puis nous enregistrons son étiquette et ses pixels RGB dans un fichier binaire nommé test_data.bin, sauvegardé dans Google Drive.

Ce fichier pourra ensuite être envoyé à l’ESP32 pour obtenir les prédictions du modèle et les comparer aux vraies étiquettes.

À la fin de ce tutoriel, vous saurez :
- charger la partie test du jeu de données ;
- redimensionner les images au format attendu par le modèle ;
- enregistrer les étiquettes et les pixels dans un fichier binaire ;
- sauvegarder le fichier dans Google Drive.



{% include step-tuto.html
greyBackground=true
title="Étape 1 : Charger la partie test"
content="Ouvrez le notebook du projet dans Google Colab, puis exécutez le code ci-dessous. Il récupère les 15 % derniers exemples du jeu de données Cats vs Dogs, redimensionne les images en 96 × 96 pixels et enregistre chaque étiquette suivie des pixels RGB dans le fichier binaire test_data.bin, dans votre Google Drive."
%}


```cpp
# Monter Google Drive pour y enregistrer le fichier
drive.mount("/content/drive")

# Partie test : les 15 % derniers exemples de Cats vs Dogs
dataset = tfds.load(
    "cats_vs_dogs",
    split="train[85%:]",
    as_supervised=True,
    shuffle_files=False
)

chemin_sortie = "/content/drive/MyDrive/test_data.bin"
nombre_images = 0

with open(chemin_sortie, "wb") as fichier:
    for image, label in tfds.as_numpy(dataset):
        # Redimensionner en RGB 96 × 96
        image = tf.image.resize(
            image,
            [96, 96],
            method=tf.image.ResizeMethod.BILINEAR
        )

        # Convertir les pixels entre 0 et 255 en uint8
        pixels = np.clip(np.rint(image.numpy()), 0, 255).astype(np.uint8)

        # TFDS : 0 = chat, 1 = chien
        vraie_classe = int(label)

        # Écrire d'abord la classe, puis les 96×96×3 pixels RGB
        fichier.write(bytes([vraie_classe]))
        fichier.write(pixels.tobytes())

        nombre_images += 1
        if nombre_images % 500 == 0:
            print(nombre_images, "images enregistrées")

print("Fichier créé :", chemin_sortie)
print("Nombre d'images :", nombre_images)
print("Taille du fichier :", os.path.getsize(chemin_sortie), "octets")
```
Le fichier contient 3 489 images

## Conclusion

Le jeu de test est maintenant enregistré dans Google Drive sous le nom `test_data.bin`. Chaque image y figure redimensionnée en 96 × 96, précédée de son étiquette réelle.

Ce fichier est prêt à être utilisé pour envoyer les images une par une à l'ESP32 et comparer ses prédictions aux étiquettes réelles.

L'étape suivante est le **test du modèle sur l'ESP32**.
