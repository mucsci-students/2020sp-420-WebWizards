// reference: https://web-engineering.info/tech/JsFrontendApp/book/ch03s02.html

function UMLClass(slots) {
    this.name = slots.name;
};

UMLClass.instances = {};

UMLClass.add = function (slots) {
    UMLClass.instances[slots.name] = new UMLClass(slots);
    console.log("Class " + slots.name + " created.");
};

UMLClass.convertRec2Obj = function (classRow) {
    return new UMLClass(classRow);
};

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
    const oldStr = localStorage["storage"];
    const newStr = oldStr.replace(oldName, newName);
    localStorage["storage"] = newStr;
    UMLClass.retrieveAll();
}

/*
UMLClass.update = function (slots) {
    var umlclass = UMLClass.instances[slots.name];
    if (umlclass.name !== slots.name) {

    }
    console.log("Class " + slots.name + " modified");

};
*/

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

UMLClass.clearData = function () {
        localStorage["storage"] = "{}";
        UMLClass.instances = {};
};


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