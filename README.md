# WebWizards UML Editor - Developer Guide
![runTest.js CI](https://github.com/mucsci-students/2020sp-420-WebWizards/workflows/runTest.js%20CI/badge.svg)
## Running the application
This application is created with "plain vanilla" HTML, Javascript, and CSS -- so you should be able to [clone the repository](https://github.com/mucsci-students/2020sp-420-WebWizards.git) and open index.html in your favorite web browser.

## Directory structure
The root directory has three main subfolders, **c**, **m**, and **v** -- which stand for "control", "model", and "view" respectively. Model and View files should be stand-alone -- i.e., should not be making calls to classes outside their own!

### Model files
#### UMLClass.js
Defines the UMLClass class. Each UMLClass is defined as having a string `name`, and string arrays `vars` and `methods`.
UMLClass's for a session are stored in the map ( `{}` ) `UMLClass.instances`, and are referenced by name.

So if you created a UMLClass named `classOne`, you could reference it by calling `UMLClass.instances[classOne]`.

#### Edge.js
An Edge (relationship between two classes) is defined as having fields `start` (start class name), `end` (end class name), and `type` (type of relationship between the classes). They are stored in the array `Edge.instances`.

#### save.js
The functions in this file expect copies of UMLClass.instances and Edge.instances and save and load them to the location localStorage["storage"].

### Control files
#### setUpGUI.js
contains the function pl.c.setUpGUI(), which is called by index.html upon page load. setUpGUI() calls a number of functions in v/guiView.js
#### parser.js
is largely composed of a switch statement that defines the response to CLI input

#### View Files

#### cliView.js
contains logic for handling cli input

#### guiView.js
contains the logic, buttons, and modals for creating a GUI interface

#### instrustions.js
contains logic to display instructions to the user

#### validation.js

