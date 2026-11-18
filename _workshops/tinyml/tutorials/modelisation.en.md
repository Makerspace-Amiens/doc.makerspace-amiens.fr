---
layout: documentation
lang: en
hide_hero: false
image: "entr.png"     
component_toc: true
doc_header: true

title: Modelling
description: "Build a small convolutional neural network (CNN), train it on the images of cats and dogs, then evaluate its results with accuracy and the confusion matrix"
author: Lina Abousalama
---

## Goal

Once the data is prepared, we can build the model that will learn to tell a cat from a dog. In this tutorial, we define a small convolutional neural network (CNN), light enough to be embedded later on a microcontroller, train it on the training images, then evaluate its results on the test set with accuracy and the confusion matrix.

By the end of this tutorial, you will be able to:

- lightly augment the training images;
- build a convolutional neural network with Keras;
- train a model with early stopping and automatic reduction of the learning rate;
- evaluate a classification model with accuracy and the confusion matrix.

## Steps

{% include step-tuto.html
greyBackground=true
title="Step 1: Training the model"
content="We lightly augment the training images, build the network, then train it on the data prepared in the previous step (train_data, validation_data and test_data) and measure its accuracy on the test set."
%}

### Augmenting the training images

Data augmentation creates slight variations of the images (flip, small rotation) so that the model does not memorise the exact images. It is only applied to training: validation and test remain unchanged.

```cpp
# Light augmentation of the training images
augmentation_bn = tf.keras.Sequential([
    tf.keras.layers.RandomFlip("horizontal"),
    tf.keras.layers.RandomRotation(0.05)
])

train_data_bn = (
    train_data
    .unbatch()
    .map(
        lambda image, label:
            (augmentation_bn(image, training=True), label),
        num_parallel_calls=tf.data.AUTOTUNE
    )
    .batch(32)
    .prefetch(tf.data.AUTOTUNE)
)
```
Each training image is flipped at random and rotated by at most about 0.05 of a turn. The model thus sees different variants at each epoch, which limits overfitting.

### Defining the model

The network receives a 96 × 96 × 3 image and returns a number between 0 and 1: the probability that the image shows a dog (label 1).

```cpp
model_cnn3 = tf.keras.Sequential([

    # Define the input image
    tf.keras.layers.Input(shape=(96, 96, 3)),


    # Extract the features
    tf.keras.layers.Conv2D(8, 3, use_bias=False), # finds features in the image: simple shapes first, then more complex patterns
    tf.keras.layers.BatchNormalization(), # stabilises the values during learning
    tf.keras.layers.ReLU(), # lets the network learn non-linear relationships
    tf.keras.layers.MaxPooling2D(), # reduces the size of the maps and keeps the important features

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

    # Produce the prediction
    tf.keras.layers.GlobalAveragePooling2D(),     # summarises each feature map with a single value
    tf.keras.layers.Dense(32, activation="relu"), # combines the features
    tf.keras.layers.Dropout(0.3),  # Reduce the risk of overfitting
    tf.keras.layers.Dense(1, activation="sigmoid") # Predict cat or dog
])
```
- **Four convolution blocks** (8, 16, 32 then 64 filters of 3 × 3): the first ones pick out simple patterns (edges, textures), the following ones more complex patterns (shapes of ears, of muzzles).
- **Normalisation, ReLU and pooling**: each block stabilises the values, adds non-linearity and reduces the size of the maps. The convolutions have no bias (`use_bias=False`) because the normalisation that follows plays that role.
- **Output**: a global pooling, a layer of 32 neurons, a Dropout of 0.3 and a final neuron with a sigmoid activation.

### Training the model

We choose the learning method and two tools that avoid wasting training: early stopping and learning rate reduction.

```cpp
# Define the learning method and the evaluation criteria
model_cnn3.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
    loss="binary_crossentropy", # Loss function for two classes
    metrics=["accuracy"] # Measure accuracy
)

# Stop if the validation loss no longer improves
early_stop_cnn3 = tf.keras.callbacks.EarlyStopping(
    monitor="val_loss",
    patience=4,
    restore_best_weights=True
)

# Reduce the learning rate if validation stalls
reduce_lr_cnn3 = tf.keras.callbacks.ReduceLROnPlateau(
    monitor="val_loss",
    factor=0.5,
    patience=2,
    min_lr=0.000001
)

# Train the model for 20 epochs at most
history_cnn3 = model_cnn3.fit(
    train_data_bn,
    validation_data=validation_data,
    epochs=20,
    callbacks=[early_stop_cnn3, reduce_lr_cnn3]
)

```
The model reaches about 86% validation accuracy, with no marked overfitting (86.2% in training against 86.0% in validation), and the learning rate was reduced automatically from 0.001 to 0.000125 over the 20 epochs.

### Evaluating on the test set

The test set was never used for training or tuning: it gives an honest measure of the quality of the model.

```cpp
test_loss, test_accuracy = model_cnn3.evaluate(test_data)

print("Accuracy on the test set:", round(test_accuracy * 100, 2), "%")
print("Loss on the test set:", round(test_loss, 4))
```

The model correctly classifies 87.68% of the test images, with a loss of 0.2876. This result is consistent with the validation result (about 86%). The model therefore generalises well to images it has never seen.


{% include step-tuto.html
greyBackground=true
title="Step 2: Confusion matrix"
content="Accuracy does not say which errors the model makes. The confusion matrix compares the real classes with the predicted classes and shows whether the model more often confuses cats or dogs."
%}

### Computing and displaying the matrix

```cpp
# Get the true classes
true_classes = np.concatenate([
    labels.numpy().ravel() for _, labels in test_data
])

# Compute the predictions
scores = model_cnn3.predict(test_data, verbose=0).ravel()
predicted_classes = (scores >= 0.57).astype(int)

# Compute and display the confusion matrix
matrix = confusion_matrix(true_classes, predicted_classes, labels=[0, 1])
display = ConfusionMatrixDisplay(
    confusion_matrix=matrix,
    display_labels=["Cat (0)", "Dog (1)"]
)

display.plot(cmap="Blues", values_format="d")
plt.title("Confusion matrix of CNN3")
plt.show()

```
The confusion matrix shows that the model correctly classified 1,538 cats and 1,521 dogs. It wrongly classified 182 cats as dogs and 248 dogs as cats.



## Conclusion

We built a small CNN, trained it with light image augmentation, then evaluated it on the test set. It reaches 87.68% accuracy and a loss of 0.2876. The confusion matrix shows that the errors go both ways, with slightly more dogs classified as cats.

This is a decent result for such a light network. It serves as a reference for what follows: the model will be compressed by quantisation to 8-bit integers, then deployed on the microcontroller, and we will check that its results remain comparable.

The next step is **quantising and converting the model**.
