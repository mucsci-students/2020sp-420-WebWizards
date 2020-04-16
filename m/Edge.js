//defines an Edge relationship as the names of two classes and a defaulted type of composition
function Edge(classOne, classTwo, edgeType = "composition") {
    this.start = classOne;
    this.end = classTwo;
    this.type = edgeType;
    console.log("Edge " + classOne + " => " + classTwo + " created of type " + edgeType);
};

//array that stores Edges
Edge.instances = [];

//given two UMLClass's, creates new Edge and adds it to Edge.instances
Edge.add = function (classOne, classTwo, umlinstances) {
    if (Edge.exists(classOne, classTwo)) {
        alert("Edge already exists!");
        return null;
    }
    if (umlinstances[classOne] && umlinstances[classTwo]) {
        Edge.instances.push(new Edge(classOne, classTwo));
    }
    else {
        alert("Edge requires two valid class names!");
    }
};

Edge.exists = function (classOne, classTwo) {
    var returnVal = false;
    for (i of Edge.instances) {
        if ((i.start === classOne) && (i.end === classTwo)) {
            returnVal = true;
        }
    }
    return returnVal;
}

//Given two UMLClasses and a valid type, will change the defaulted type of relationship to
//passed type, if and only-if type is valid
Edge.modifyRelationshipType = function (classOne, classTwo, newType) {
    if (newType == 'inheritance' || newType == 'aggregation' || newType == 'composition' || newType == 'realization') {
        var edgeFound = false;
        for (i of Edge.instances) {
            if ((i.start === classOne) && (i.end === classTwo)) {
                edgeFound = true;
                i.type = newType;
                break;
            }
        }
        if (!edgeFound)
            alert("Edge to modify not found!");
    }
    else {
        alert("Non-valid type entered!")
    }
};

//given two UMLClass's, removes any Edges between them
Edge.destroy = function (classOne, classTwo) {
    var edgeIndex = -1;
    for (i of Edge.instances) {
        if ((i.start === classOne) && (i.end === classTwo)) {
            edgeIndex = Edge.instances.indexOf(i);
        }
    }

    if (edgeIndex !== -1) {
        Edge.instances.splice(edgeIndex, 1);
    }
    else {
        alert("Edge not found!");
    }
};

//given one UMLClass, deletes all relationships associated with that class
Edge.deleteClassRelationships = function (umlclass) {
    var edgeIndexes = [];

    for (i of Edge.instances) {
        if ((i.start === umlclass) || (i.end === umlclass)) {
            edgeIndexes.push(Edge.instances.indexOf(i));
        }
    }

    for (i of edgeIndexes) {
        Edge.instances.splice(i - edgeIndexes.indexOf(i), 1);
    }

};

Edge.convertRec2Obj = function (edgeRow) {
    return new Edge(edgeRow.start, edgeRow.end, edgeRow.type);
};

Edge.retrieveAll = function (edgeString) {
    edges = JSON.parse(edgeString);
    console.log(edges.length + " edges loaded.");
    for (i = 0; i < edges.length; i++) {
        Edge.instances[i] = Edge.convertRec2Obj(edges[i]);
    }

};

Edge.returnHumanReadableString = function () {
    var edgeString = "Edges:\n";
    for (i of Edge.instances) {
        if (i.type == 'composition') {
            edgeString += (i.start + " ---<+> " + i.end + " of type " + i.type);
        }
        if (i.type == 'inheritance') {
            edgeString += (i.start + " -----> " + i.end + " of type " + i.type);
        }
        if (i.type == 'aggregation') {
            edgeString += (i.start + " ----<> " + i.end + " of type " + i.type);
        }
        if (i.type == 'realization') {
            edgeString += (i.start + " - - -> " + i.end + " of type " + i.type);
        }

        edgeString += "\n";
    }
    return edgeString;
};

Edge.reset = function () {
    Edge.instances = [];
};