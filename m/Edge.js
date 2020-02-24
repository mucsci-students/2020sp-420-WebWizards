function Edge(classOne, classTwo) {
    Edge.start = classOne.name;
    Edge.end = classTwo.name;
}

Edge.instances = [];

Edge.add = function (classOne, classTwo) {
    Edge.instances.push(new Edge(classOne, classTwo));
}