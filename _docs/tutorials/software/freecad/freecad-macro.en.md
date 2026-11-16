---
layout: documentation
lang: en
image: FreeCad(3).png
hide_hero: false
hero_image: FreeCad(3).png
hero_darken: true
component_toc: true
background_color: '#f7f4ed'

title: FreeCAD (3) - Macros
subtitle: Creating and programming macros
description: Documentation on creating macros in FreeCAD
tags: freecad
type: tutorial

time: 5
difficulty: 5
compatibilities-os: win,mac,lin

prerequisites:
  - label: None
    link: ""

softwares: 
  - label: FreeCAD
    link: "https://www.freecad.org"

todo: 5
---


{% include message.html
icon="fas fa-info-circle"
title="Notes"
message="This page only covers the configuration of the *link-branch* version by [RealThunder](https://github.com/realthunder/FreeCAD_assembly3). Mind the version used, given below. "
status="is-info" %}

{% include message.html
icon="fas fa-info-circle"
title="Work In Progress..."
message="This documentation is not finished! "
status="is-danger" %}

<div class="control">
   <div class="tags has-addons">
        <span class="tag is-dark is-medium">FreeCAD_assembly3</span>
        <span class="tag is-info is-medium has-text-black"><a href="https://github.com/realthunder/FreeCAD_assembly3/releases/tag/0.11" style="color:white">2021.10.15</a></span>
        <span class="tag is-dark is-medium">
            <p class="icon">
                <i class="fab fa-github"></i>
            </p>
        </span>
    </div>
</div>

## 1. XXXXXXXX

Basic header.

```python
__title__   = " "
__author__  = ""
__version__ = ""
__date__    = ""
__url__     = ""
__Comment__ = ""
__Communication__ = ""
__IconL__  = ""
__IconW__  = ""
```

Basic code to display a window docked on the right.

``` python
import sys
from PySide import QtGui ,QtCore 

FCmw = FreeCADGui.getMainWindow()
myNewFreeCADWidget = QtGui.QDockWidget() # create a new dckwidget

##########################
class myWidget_Ui(object):
  def setupUi(self, myWidget):
    # Setup the Widget
    myWidget.setObjectName("myWidget")
    myWidget.resize(QtCore.QSize(350,100).expandedTo(myWidget.minimumSizeHint())) # sets size of the widget
    myWidget.setWindowTitle("My Panel")

##########################
#  Load and Setup the UI
myNewFreeCADWidget.ui = myWidget_Ui() # load the Ui script
myNewFreeCADWidget.ui.setupUi(myNewFreeCADWidget) # setup the ui
FCmw.addDockWidget(QtCore.Qt.RightDockWidgetArea,myNewFreeCADWidget) # add the widget to the main window
```

## 2. With the Qt Creator interface

Download Qt Creator with the "open source" licence

Be careful not to forget to set a global layout so that the whole panel is visible, to avoid this:
![](2022-01-04-14-50-16.png)
To do so, check in Qt that there are no broken or undefined layouts among the objects. If there are (see picture), right-click the object > Lay out, and choose the layout
![](2022-01-04-15-00-32.png)
![](2022-01-04-15-01-25.png)
Result: ![](2022-01-04-15-13-09.png)

Minimum integration code:

``` python

import FreeCAD ,FreeCADGui ,Part

# CHANGE THE LINE BELOW
path_to_ui = "C:/...Path.../form.ui"
 
class BoxTaskPanel:
   def __init__(self):
       # this will create a Qt widget from our ui file
       self.form = FreeCADGui.PySideUic.loadUi(path_to_ui)

        
panel = BoxTaskPanel()
FreeCADGui.Control.showDialog(panel)

```

---

## X. Going further

**Interesting macros**

- [FCInfo](https://wiki.freecadweb.org/Macro_FCInfo)
-

**Tutorials**

- [Original FreeCAD tutorial](https://wiki.freecadweb.org/Manual:Creating_interface_tools)
- [Qt example in FreeCAD](https://wiki.freecadweb.org/Qt_Example)
-
