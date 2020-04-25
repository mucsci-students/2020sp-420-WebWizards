//https://www.kirupa.com/html5/drag.htm

var initialX, initialY,
    curX, curY,
    xOffset = 0, yOffset = 0,
    activeObject = null,
    active = false;


allowDrop = function (event) {
    event.preventDefault();

    curX = event.clientX - initialX;
    curY = event.clientY - initialY;
    xOffset = curX;
    yOffset = curY;
    console.log(curX + ", " + curY);

    console.log("allowDrop fired");
};

dragstart_handler = function (event) {
    //event.dataTransfer.setData("text", event.target.id);
    activeObject = event.target;

    //code assumes mouse usage
    initialX = event.clientX - xOffset;
    initialY = event.clientY - yOffset;
    active = true;

    console.log("drag fired");
};

drop_handler = function (event) {
    event.preventDefault();
//    var data = event.dataTransfer.getData("text");
   // event.target.appendChild(document.getElementById(data));
    activeObject.style.transform = "translate(" + curX + "px, " + curY + "px)";
    
    var umlclassName = (activeObject.getAttribute("data-name"));
    UMLClass.instances[umlclassName].xPos = curX;
    UMLClass.instances[umlclassName].yPos = curY;

    save.saveLocal(UMLClass.instances, Edge.instances);

//    pl.v.retrieveAndListAllClasses.updateEdges();

    activeObject = null;
    active = false;

    console.log("dropped fired");
};
