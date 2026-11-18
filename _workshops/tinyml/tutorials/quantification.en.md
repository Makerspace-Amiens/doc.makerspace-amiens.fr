---
layout: documentation
lang: en
hide_hero: true
component_toc: true
doc_header: true

title: Quantisation
description: "Convert the trained model to TensorFlow Lite format, then quantise it to 8-bit integers to reduce its size before embedding it on a microcontroller"
author: Lina Abousalama
---

## Goal

The trained model stores its parameters as 32-bit floating-point numbers (float32). This is precise, but too heavy for a microcontroller with very limited memory. In this tutorial, we convert the model to TensorFlow Lite format, then **quantise** it: its values are stored as 8-bit integers (int8) instead of 32 bits. The model becomes smaller and faster to run, at the cost of a possible loss of accuracy, which we measure.

By the end of this tutorial, you will be able to:

- convert a Keras model to TensorFlow Lite format;
- quantise a model to 8-bit integers with calibration images;
- compare the size of the models before and after quantisation;

## Steps

{% include step-tuto.html
greyBackground=true
title="Step 1: Convert and quantise the model"
content="We first convert the model to TensorFlow Lite. Then we quantise it to int8 by providing images that are used to calibrate the values"
%}

### Converting the model to TensorFlow Lite (float32 reference)

```cpp
# Convert the Keras model to TensorFlow Lite format
converter = tf.lite.TFLiteConverter.from_keras_model(model_cnn3)
tflite_model_cnn3 = converter.convert()

tflite_path = "/content/drive/MyDrive/modele_chat_chien_CNN3.tflite"

# Save the converted model to a file
with open(tflite_path, "wb") as file:
    file.write(tflite_model_cnn3)

print("File created:", os.path.exists(tflite_path))
print("Size:", round(os.path.getsize(tflite_path) / 1024, 2), "KB")
```
The TensorFlow Lite format is a lighter version of the model, designed for embedded devices. At this stage, the parameters are still float32: this file is 109.47 KB.

### Quantising the model to int8

Quantisation replaces the floating-point numbers with integers between -128 and 127. To choose how to convert them, the converter needs to observe the real values the model takes: that is the role of the **calibration images** provided by `representative_data`.

```cpp
# Provide images to calibrate the int8 quantisation
def representative_data():
    for images, labels in train_data.take(100):
        image = images[:1].numpy().astype(np.float32)  # Take one image from the batch
        yield [image]

# Set up the conversion of the model to TensorFlow Lite
converter = tf.lite.TFLiteConverter.from_keras_model(model_cnn3)
converter.optimizations = [tf.lite.Optimize.DEFAULT]  # Enable optimisations
converter.representative_dataset = representative_data  # Provide the calibration images
converter.target_spec.supported_ops = [
    tf.lite.OpsSet.TFLITE_BUILTINS_INT8  # Use int8 operations
]
converter.inference_input_type = tf.int8   # Model input in int8
converter.inference_output_type = tf.int8  # Model output in int8

model_cnn3_int8 = converter.convert()  # Convert and quantise the model

# Set the save path
tflite_path = "/content/drive/MyDrive/modele_chat_chien_CNN3_int8.tflite"

# Save the quantised model
with open(tflite_path, "wb") as file:
    file.write(model_cnn3_int8)

# Check that the file was created and print its size
print("File created:", os.path.exists(tflite_path))
print("Size:", round(os.path.getsize(tflite_path) / 1024, 2), "KB")
```
The file goes from 109.47 KB to 36.1 KB, a reduction of about 67%.


## Conclusion


We converted the model to TensorFlow Lite format, then quantised it to 8-bit integers. Its size goes from 109.47 KB to 36.1 KB, about three times smaller. This model is small enough and accurate enough to be embedded.

It remains to note its quantisation parameters (scale and zero point of the input and output), which will be needed to prepare the images and read the score on the microcontroller.

The next step is **deploying the model on the ESP32**.
