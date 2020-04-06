module.exports = Edge.add;
module.exports = Edge.destroy;


//defines an Edge relationship as the names of two classes, given as parameters
function Edge(classOne, classTwo) {
    this.start = classOne;
    this.end = classTwo;
    console.log("Edge " + this.start + " => " + this.end + " created");     
};

//array that stores Edges
Edge.instances = [];

//given two UMLClass's, creates new Edge and adds it to Edge.instances
Edge.add = function (classOne, classTwo) {
    if (UMLClass.instances[classOne] && UMLClass.instances[classTwo]){
        Edge.instances.push(new Edge(classOne, classTwo));
        console.log("Edge " + this.start + " => " + this.end + " created");
    }  //return Edge(classOne,classTwo);
    else{
        alert("Edge requires two valid class names!");
    }
};

//given two UMLClass's, removes any Edges between them
Edge.destroy = function (classOne, classTwo) {
    var edgeIndex = -1;
    for (i of Edge.instances) {
        if ((i.start === classOne) && (i.end === classTwo)) {
            edgeIndex = Edge.instances.indexOf(i);
            return null;
        }
    }

    if (edgeIndex !== -1) {
        Edge.instances.splice(edgeIndex, 1);
    }
    else {
        alert("Edge not found");
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
        edgeString += (i.start + " => " + i.end + "\n");
    }
    return edgeString;
};

Edge.reset = function () {
    Edge.instances = [];
}