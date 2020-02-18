var instructions = "Welcome to our UML Editor prototype.</br></br>\
To <em>add</em> a class, type a new class name in the text box and click <strong>Add</strong>.\
</br></br>To <em>delete</em> a class, enter the name of the class you would like to delete in the text box and click<strong>Delete</strong>.\
</br></br>To <em>clear</em> the database, click <strong>Delete All Classes</strong>.\
</br></br>To <em>save</em> a JSON file representing the current classes, click <strong>Export Data to File</strong>.\
</br></br>To <em>load</em> a JSON file into the editor, select a file with <strong>Choose File</strong>, then click <strong>Load Data from File</strong>. \
You may need to click <strong>Refresh View</strong> to see the classes displayed."
var showing = false;

showInstructions = function () {
    if (showing) {
        document.getElementById("instructions").innerHTML = "";
    }
    else {
        document.getElementById("instructions").innerHTML = instructions;
    }

    showing = !showing;
}