//defines an Edge relationship as the names of two classes, given as parameters
function Edge(classOne, classTwo) {
    this.start = classOne;
    this.end = classTwo;
    console.log ("Edge " + this.start + " => " + this.end + " created");
};

//array that stores Edges
Edge.instances = [];

//given two UMLClass's, creates new Edge and adds it to Edge.instances
Edge.add = function (classOne, classTwo) {
    Edge.instances.push(new Edge(classOne, classTwo));
};

//given two UMLClass's, removes any Edges between them
Edge.destroy = function (classOne, classTwo) {
    for (c of Edge.instances) {
        if ((c.start === classOne)&&(c.end === classTwo)) {
            delete c;
        }
    }
};

//given one UMLClass, deletes all relationships associated with that class
Edge.deleteClassRelationships = function(umlclass) {
    for (c of Edge.instances) {
        if ((c.start === umlclass.name) || (c.end === umlclass.name)) {
            delete c;
        }
    }
};

Edge.returnHumanReadableString = function() {
    var edgeString = "Edges:\n";
    for (i of Edge.instances) {
        edgeString += (i.start + " => " + i.end + "\n");
    }
    return edgeString;
};