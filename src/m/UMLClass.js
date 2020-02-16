//reference: https://web-engineering.info/tech/JsFrontendApp/book/ch03s02.html
function UMLClass(slots) {
    this.name = slots.name;
}

UMLClass.instances = {};

UMLClass.add = function (slots) {
    UMLClass.instances[slots.name] = new UMLClass(slots);
    console.log("Class '" + slots.name + "' created");
};

/*
UMLClass.edit = function (slots) {
    var umlclass = UMLClass.instances[slots.name];
    if (umlclass.name !== slots.name) {
        umlclass.name = slots.name;
    }
};
*/

UMLClass.destroy = function (name) {
    if (UMLClass.instances[name]) {
        console.log("Class " + name + " deleted!");
        delete UMLClass.instances[name];
    }
    else {
        console.log("There is no class with name " + name + " in database");
    }
};

UMLClass.convertRecordToObject = function (classRow) {
    return new UMLClass(classRow);
};

UMLClass.saveAll = function () {
    localStorage["classes"] = JSON.stringify(UMLClass.instances);
}

UMLClass.clearData = function () {
    console.log(localStorage["classes"]);
    if (confirm("Delete all class data?")) {
        try {
            if (localStorage["classes"]) {
                localStorage["classes"] = "{}";
            }
        } catch (e) {
            alert("Error when reading from Local Storage\n" + e);
        }

    } 
    console.log(localStorage["classes"]);

}
UMLClass.retrieveAll = function () {
    var key = "", keys = [], i = 0, classesString = "", classes = {};
    try {
        if (localStorage["classes"]) {
            classesString = localStorage["classes"];

        }
    } catch (e) {
        alert("Error when reading from Local Storage\n" + e);
    }

    if (classesString) {
        classes = JSON.parse(classesString);
        keys = Object.keys(classes);
        console.log(keys.length + " classes loaded.");
        for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            UMLClass.instances[key] = UMLClass.convertRecordToObject(classes[key]);
        }
    }
};

