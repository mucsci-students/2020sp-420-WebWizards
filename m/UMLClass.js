// reference: https://web-engineering.info/tech/JsFrontendApp/book/ch03s02.html

/* export function statements for jasmine testing */
//module.exports = UMLClass.add;
//module.exports = UMLClass.destroy;
//module.exports = UMLClass.clearData;

//defines a UMLClass as containing var 'name' & arrays 'vars' and 'methods'
function UMLClass(name, vars = [], methods = []) {
    this.name = name;
    this.vars = vars;
    this.methods = methods;

};

//all active UMLClasses are stored in this map, referenced by their name
UMLClass.instances = {};

//creates a new UMLClass and adds it to UMLClass.instances by name
UMLClass.add = function (name, vars = "", methods = "") {
    if (name in UMLClass.instances) {
        alert("Class with name " + name + " already exists.");
        return null;
    }

    if ((vars === "") && (methods === "")) {
        UMLClass.instances[name] = new UMLClass(name);
    } else if (methods === "") {
        UMLClass.instances[name] = new UMLClass(name, vars.split(","));
    } else {
        UMLClass.instances[name] = new UMLClass(name, [], methods.split(","));
    }
    UMLClass.instances[name] = new UMLClass(name, vars.split(","), methods.split(","));
    console.log("Class " + name + " created.");
    return name;
};

UMLClass.addVar = function (className, varName) {
    if (UMLClass.instances[className]) {
        UMLClass.instances[className].vars.push(varName);
    }
};

UMLClass.addMethod = function (className, methodName) {
    if (UMLClass.instances[className]) {
        UMLClass.instances[className].methods.push(methodName);
    }
};

UMLClass.deleteVar = function (className, varName) {
    if (UMLClass.instances[className]) {
        var varIndex = -1;

        for (v of UMLClass.instances[className].vars) {
            if (v === varName) {
                varIndex = UMLClass.instances[className].vars.indexOf(v);
            }
        }

        if (varIndex !== -1) {
            UMLClass.instances[className].vars.splice(varIndex, 1);
        }
        else {
            alert("variable not found");
        }
    }
};

UMLClass.deleteMethod = function (className, methodName) {
    if (UMLClass.instances[className]) {
        var methodIndex = -1;

        for (m of UMLClass.instances[className].methods) {
            if (m === methodName) {
                methodIndex = UMLClass.instances[className].methods.indexOf(m);
            }
        }

        if (methodIndex !== -1) {
            UMLClass.instances[className].methods.splice(methodIndex, 1);
        }
        else {
            alert("variable not found");
        }
    }
};

UMLClass.convertRec2Obj = function (classRow) {
    return new UMLClass(classRow.name, classRow.vars, classRow.methods);
};

UMLClass.retrieveAll = function (classString) {
    classes = JSON.parse(classString);
    keys = Object.keys(classes);
    console.log(keys.length + " classes loaded.");
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        UMLClass.instances[key] = UMLClass.convertRec2Obj(classes[key]);
    }

};


//given UMLClass name, finds class in UMLClass.instances and deletes the instance
UMLClass.destroy = function (name) {
    if (UMLClass.instances[name]) {
        console.log("Class " + name + " deleted.");
        delete UMLClass.instances[name];
        return null;
    }
    else {
        console.log("There is no class with name " + name + " in the database.");
        return null;
    }
};

UMLClass.reset = function () {
    UMLClass.instances = {};
};

UMLClass.returnHumanReadableString = function () {
    outputString = "";
    for (i in UMLClass.instances) {
        outputString += ("Name: " + i + "; Variables: " + UMLClass.instances[i].vars.join() + "; Methods: " + UMLClass.instances[i].methods.join() + "</br>");
        console.log(outputString);
    }
    return outputString;
};