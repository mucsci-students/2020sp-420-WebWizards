// reference: https://web-engineering.info/tech/JsFrontendApp/book/ch03s02.html

//defines a UMLClass as containing var 'name' & arrays 'vars' and 'methods'
function UMLClass(name) {
    this.name = name;
    this.vars = [];
    this.methods = [];
};

//all active UMLClasses are stored in this map, referenced by their name
UMLClass.instances = {};

//creates a new UMLClass and adds it to UMLClass.instances by name
UMLClass.add = function (name) {
    UMLClass.instances[name] = new UMLClass(name);
    console.log("Class " + name + " created.");
};

//converts record [from local storage] to UMLClass object
UMLClass.convertRec2Obj = function (classRow) {
    return new UMLClass(classRow.name);
};


//parses JSON data from local storage; then iterates through the data and adds each UMLClass to UMLClass.instances
UMLClass.retrieveAll = function () {
    var key = "", keys = [], i = 0, classString = "", classes = {};

    try {
        if (localStorage["storage"]) {
            classString = localStorage["storage"];
        }
    } catch (e) {
        alert("Error when reading from Local Storage\n" + e);
    }

    if (classString) {
        classes = JSON.parse(classString);
        keys = Object.keys(classes);
        console.log(keys.length + " classes loaded.");
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            UMLClass.instances[key] = UMLClass.convertRec2Obj(classes[key]);
        }
    }
};

UMLClass.rename = function (oldName, newName) {
    //TODO
}

/*
UMLClass.update = function (slots) {
    var umlclass = UMLClass.instances[slots.name];
    if (umlclass.name !== slots.name) {

    }
    console.log("Class " + slots.name + " modified");

};
*/

//given UMLClass name, finds class in UMLClass.instances and deletes the instance
UMLClass.destroy = function (name) {
    if (UMLClass.instances[name]) {
        console.log("Class " + name + " deleted.");
        delete UMLClass.instances[name];
        UMLClass.saveAll();
    }
    else {
        console.log("There is no class with name " + name + " in the database.");
    }
};


//writes the current state of UMLClass.instances to localstorage["storage"]
UMLClass.saveAll = function () {
    var classString = "", error = false, numOfClasses = Object.keys(UMLClass.instances).length;
    try {
        classString = JSON.stringify(UMLClass.instances);
        localStorage["storage"] = classString;
    } catch (e) {
        alert("Error writing to Local Storage\n" + e);
        error = true;
    }
    if (!error) {
        console.log(numOfClasses + " classes saved.");
    }
};

//resets UMLClass.instances and localstorage["storage"]
UMLClass.clearData = function () {
        localStorage["storage"] = "{}";
        UMLClass.instances = {};
};


//downloads JSON file with a copy of local storage to local device
UMLClass.exportFile = function () {
    //reference :https://www.codevoila.com/post/30/export-json-data-to-downloadable-file-using-javascript

    UMLClass.saveAll();

    let exportString = localStorage["storage"];
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(exportString);
    let defaultFileName = 'umlClassData.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', defaultFileName);
    linkElement.click();

};

//given JSON file, writes the file into local storage
UMLClass.loadFile = function (f) {

    UMLClass.clearData();
    //https://humanwhocodes.com/blog/2012/05/15/working-with-files-in-javascript-part-2/
    var reader = new FileReader();
    reader.onload = function (event) {
        var contents = event.target.result;
        console.log(contents);
        localStorage["storage"] = contents;
        UMLClass.retrieveAll();
    }
    reader.onerror = function () {
        alert("File could not be read");
    }

    reader.readAsText(f);

};