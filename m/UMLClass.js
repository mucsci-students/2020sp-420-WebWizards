//defines a UMLClass as containing var 'name' & arrays 'vars' and 'methods'
// reference: https://web-engineering.info/tech/JsFrontendApp/book/ch03s02.html

/* export function statements for jasmine testing */
//module.exports = UMLClass.add;
//module.exports = UMLClass.destroy;
//module.exports = UMLClass.clearData;

//defines a UMLClass as containing var 'name' & maps 'vars' and 'methods'
function UMLClass(name, vars = [], methods = []) {
    this.name = name;
    this.vars = vars;
    this.methods = methods;

};

//all active UMLClasses are stored in this map, referenced by their name
UMLClass.instances = {};

//creates a new UMLClass and adds it to UMLClass.instances by name
UMLClass.add = function (name, vars = "", methods = "") {

    if (!UMLClass.validateName(name)) {
        alert("Class name is invalid -- class names must begin with a letter or underscore and contain no special characters");
        return null;
    }

    if (name in UMLClass.instances) {
        alert("Class with name " + name + " already exists.");
        return null;
    }

    newVars = [];
    newMethods = [];

    if (vars !== "") {
        for (i of (vars.split(","))) {
            newVars.push({ name: i, type: "var" });
        }
    }

    if (methods !== "") {
        for (i of (methods.split(","))) {
            newMethods.push({ name: i, type: "method" });
        }
    }

    UMLClass.instances[name] = new UMLClass(name, newVars, newMethods);

    console.log("Class " + name + " created.");
    return name;
};

UMLClass.validateName = function (proposedName) {
    //defines a regex string starting with a letter or underscore, followed by an arbirtrary number of letters, numbers, and/or underscores
    let compare = /^[a-zA-Z_](\w)*$/;

    return compare.test(proposedName);

};

//takes in a classname and {one varName or multiple varName's separated by commas but no spaces} and adds the vars to the class if the class exists
//todo: check for duplicate vars
UMLClass.addVar = function (className, varNames) {
    if (UMLClass.instances[className]) {

        if (varNames !== "") {
            for (i of (varNames.split(","))) {
                UMLClass.instances[className].vars.push({ name: i, type: "var" });
            }
        }
    }
};

//takes in a classname and {one methodName or multiple methodName's separated by commas but no spaces} and adds the methods to the class if the class exists
//todo: check for duplicate methods
UMLClass.addMethod = function (className, methodNames) {
    if (UMLClass.instances[className]) {

        if (methodNames !== "") {
            for (i of methodNames.split(",")) {
                UMLClass.instances[className].methods.push({ name: i, type: "method" });
            }
        }
    }
};

//takes in a classname and {one varName or multiple varName's separated by commas but no spaces} and deletes the vars from the class if the class exists
UMLClass.deleteVar = function (className, varNames) {
    if (UMLClass.instances[className]) {

        if (varNames !== "") {
            for (i of varNames.split(",")) {
                var varIndex = -1;

                for (v of UMLClass.instances[className].vars) {
                    if (v.name === i) {
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
        }


    }
};

//takes in a classname and {one methodName or multiple methodName's separated by commas but no spaces} and deletes the methods from the class if the class exists
UMLClass.deleteMethod = function (className, methodNames) {
    if (UMLClass.instances[className]) {

        if (methodNames !== "") {
            for (i of methodNames.split(",")) {

                var methodIndex = -1;

                for (m of UMLClass.instances[className].methods) {
                    if (m.name === i) {
                        methodIndex = UMLClass.instances[className].methods.indexOf(m);
                    }
                }

                if (methodIndex !== -1) {
                    UMLClass.instances[className].methods.splice(methodIndex, 1);
                }
                else {
                    alert("method not found");
                }
            }
        }

    }
};

UMLClass.changeVarType = function (className, varName, newType) {
    if (UMLClass.instances[className]) {
        for (v of UMLClass.instances[className].vars) {
            if (v.name === varName) {
                v.type = newType;
            }
        }
    }
};

UMLClass.changeMethodType = function (className, methodName, newType) {
    if (UMLClass.instances[className]) {
        for (m of UMLClass.instances[className].methods) {
            if (m.name === methodName) {
                m.type = newType;
            }
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
        outputString += ("Name: " + i + "</br>");
        outputString += ("Variables: " + UMLClass.instances[i].vars.map(e => e.type + " " + e.name).join() + "</br>");
        outputString += ("Methods: " + UMLClass.instances[i].methods.map(e => e.type + " " + e.name).join() + "</br></br>");
    }
    return outputString;
};