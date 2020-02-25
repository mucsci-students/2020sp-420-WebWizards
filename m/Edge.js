//defines an Edge relationship as the names of two classes, given as parameters
function Edge(classOne, classTwo) {
    Edge.start = classOne.name;
    Edge.end = classTwo.name;
}

//array that stores Edges
Edge.instances = [];

//given two UMLClass's, creates new Edge and adds it to Edge.instances
Edge.add = function (classOne, classTwo) {
    Edge.instances.push(new Edge(classOne, classTwo));
};

//given two UMLClass's, removes any Edges between them
Edge.destroy = function (classOne, classTwo) {
    for (c of Edge.instances) {
        if ((c.start === classOne.name)&&(c.end === classTwo.name)) {
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