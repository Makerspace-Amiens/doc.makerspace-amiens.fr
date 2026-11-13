---
layout: documentation
hide_hero: false
hero_image: "hero.png"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 10


title: Environnement et outils de développement
subtitle: Configurez votre environnement de développement pour votre modèle IA.
description: Dans ce tutoriel, nous allons découvrir différents environnements de travail, puis présenter quelques outils et bibliothèques utilisés pour développer et entraîner un modèle d’apprentissage automatique.
author: Lina Abousamama

softwares:
  - label: Google Colab
    link: "https://colab.research.google.com/"

todo: 100
---

## Introduction

-Il existe plusieurs environnements pour développer un modèle, comme Google Colab, Jupyter Notebook ou Kaggle. 
Pour notre projet, nous avons choisi : 

**Google Colab** : qui permet d’écrire et d’exécuter du code Python dans un notebook en ligne. 

-Nous utiliserons également les outils suivants :

**TensorFlow** : bibliothèque utilisée pour créer et entraîner des modèles d’intelligence artificielle

**Keras** : outil qui facilite la construction et l’entraînement de réseaux de neurones, notamment avec TensorFlow.

-Nous allons maintenant découvrir comment accéder à Google Colab, ouvrir un notebook, vérifier les bibliothèques disponibles et installer celles qui seraient manquantes.

## Démarrer avec Google Colab

{% include step-tuto.html
greyBackground = true
title = "Étape 1 : Se connecter"
content="Rendez-vous sur le site officiel de Google Colab : https://colab.research.google.com/. Cliquez sur « Se connecter », puis choisissez votre compte Google." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 2 : Créer un notebook"
content="Une fois connecté, cliquez sur « Nouveau notebook » pour commencer." %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3 : Vérifier les bibliothèques"
content= "Certaines bibliothèques, comme TensorFlow, scikit-learn et Pandas, sont généralement déjà disponibles dans Colab. Vérifiez leur disponibilité et installez uniquement celles qui manquent." %}

Dans une cellule du notebook, tu peux installer les bibliothèques utilisées dans le projet :

```cpp
%pip install -q tensorflow-datasets importlib-resources keras-tuner openpyxl  # Installe les bibliothèques qui peuvent manquer
```

Puis, dans une autre cellule, importer les bibliothèques :

```cpp
import os                         # Gérer les fichiers et vérifier leur existence
from collections import Counter    # Compter les éléments, par exemple les étiquettes

import numpy as np                # Manipuler les tableaux et les valeurs numériques
import pandas as pd               # Lire et traiter les données sous forme de tableaux
import matplotlib.pyplot as plt   # Afficher des images et des graphiques
from PIL import Image             # Ouvrir et préparer une image

import tensorflow as tf            # Construire, entraîner et convertir le modèle CNN
import tensorflow_datasets as tfds # Charger le jeu d’images Cats vs Dogs
import keras_tuner as kt           # Rechercher les meilleurs paramètres du modèle

from sklearn.metrics import (      # Évaluer les prédictions du modèle
    confusion_matrix,              # Calculer la matrice de confusion
    ConfusionMatrixDisplay,        # Afficher la matrice de confusion
    accuracy_score                 # Calculer la précision globale
)

from google.colab import drive, files  # Accéder à Google Drive et importer ou télécharger des fichiers

```


