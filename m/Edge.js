
//defines an Edge relationship as the names of two classes, given as parameters
function Edge(classOne, classTwo, edgeType = "composition") {
    this.start = classOne;
    this.end = classTwo;
    this.type = edgeType;
    console.log("Edge " + this.start + " => " + this.end + " created of type " + edgeType);   
};

//array that stores Edges
Edge.instances = [];

//given two UMLClass's, creates new Edge and adds it to Edge.instances
Edge.add = function (classOne, classTwo) {
    if(Edge(classOne, classTwo) in Edge.instances) {
        alert("Edge already exist!");
        return null;
    }
    if (UMLClass.instances[classOne] && UMLClass.instances[classTwo]) {
        Edge.instances.push(new Edge(classOne, classTwo));
    }   
    else {
        alert("Edge requires two valid class names!");
    }
};

Edge.modifyRelationshipType = function (classOne, classTwo, newType) {
    if (newType == 'inheritance' || newType == 'aggregation' || newType == 'composition') {
        for (i of Edge.instances) {
            if ((i.start === classOne) && (i.end === classTwo)) {
                i.type = newType;
                break;
            }
        }
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

Edge.returnHumanReadableString = function () {
    var edgeString = "Edges:\n";
    for (i of Edge.instances) {
        if (i.type == 'composition'){
            edgeString += (i.start + " ---<+> " + i.end + " of type " + i.type);
        }
        if (i.type == 'inheritance'){
            edgeString += (i.start + " ===> " + i.end + " of type " + i.type);
        }
        if (i.type == 'aggregation'){
            edgeString += (i.start + " ---<> " + i.end + " of type " + i.type);
        }
    }
    return edgeString;
};

Edge.reset = function () {
    Edge.instances = [];
};