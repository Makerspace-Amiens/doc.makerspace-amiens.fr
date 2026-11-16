---
layout: documentation
lang: en
hide_hero: false
hero_image: "hero.png"
hero_darken: true
image: "hero.png"
component_toc: true
doc_header: true
type: tutorial
order: 10


title: Development environment and tools
subtitle: Set up your development environment for your AI model.
description: In this tutorial, we look at different working environments, then present a few tools and libraries used to develop and train a machine learning model.
author: Lina Abousamama

softwares:
  - label: Google Colab
    link: "https://colab.research.google.com/"

todo: 100
---

## Introduction

-There are several environments for developing a model, such as Google Colab, Jupyter Notebook or Kaggle. 
For our project, we chose: 

**Google Colab**: which lets you write and run Python code in an online notebook. 

-We will also use the following tools:

**TensorFlow**: a library used to create and train artificial intelligence models

**Keras**: a tool that makes it easier to build and train neural networks, in particular with TensorFlow.

-We will now see how to access Google Colab, open a notebook, check which libraries are available and install any that are missing.

## Getting started with Google Colab

{% include step-tuto.html
greyBackground = true
title = "Step 1: Sign in"
content="Go to the official Google Colab website: https://colab.research.google.com/. Click « Sign in », then choose your Google account." %}

{% include step-tuto.html
greyBackground = true
title = "Step 2: Create a notebook"
content="Once signed in, click « New notebook » to begin." %}

{% include step-tuto.html
greyBackground = true
title = "Step 3: Check the libraries"
content= "Some libraries, such as TensorFlow, scikit-learn and Pandas, are generally already available in Colab. Check that they are available and only install those that are missing." %}

In a cell of the notebook, you can install the libraries used in the project:

```cpp
%pip install -q tensorflow-datasets importlib-resources keras-tuner openpyxl  # Installs the libraries that may be missing
```

Then, in another cell, import the libraries:

```cpp
import os                         # Handle files and check that they exist
from collections import Counter    # Count items, for example labels

import numpy as np                # Handle arrays and numerical values
import pandas as pd               # Read and process data as tables
import matplotlib.pyplot as plt   # Display images and charts
from PIL import Image             # Open and prepare an image

import tensorflow as tf            # Build, train and convert the CNN model
import tensorflow_datasets as tfds # Load the Cats vs Dogs image dataset
import keras_tuner as kt           # Search for the best parameters of the model

from sklearn.metrics import (      # Evaluate the model's predictions
    confusion_matrix,              # Compute the confusion matrix
    ConfusionMatrixDisplay,        # Display the confusion matrix
    accuracy_score                 # Compute the overall accuracy
)

from google.colab import drive, files  # Access Google Drive and upload or download files

```
