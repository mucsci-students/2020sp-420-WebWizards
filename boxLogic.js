//https://www.kirupa.com/html5/drag.htm

var activeObject = null, active = false;


drag_handler = function (event) {
    if (active) {
        activeObject.currentX = event.clientX - activeObject.initialX;
        activeObject.currentY = event.clientY - activeObject.initialY;
        activeObject.xOffset = activeObject.currentX;
        activeObject.yOffset = activeObject.currentY;
        console.log(activeObject.currentX + ", " + activeObject.currentY);

        activeObject.style.transform = "translate(" + activeObject.currentX + "px, " + activeObject.currentY + "px)";

        pl.v.retrieveAndListAllClasses.updateEdges();
    }

};

dragstart_handler = function (event) {
    active = true;
    activeObject = event.target;
    classname = activeObject.getAttribute("data-name");

    if (activeObject !== null) {
        if (!activeObject.xOffset) {
            activeObject.xOffset = UMLClass.instances[classname].xPos;
        }
        if (!activeObject.yOffset) {
            activeObject.yOffset = UMLClass.instances[classname].yPos;
        }
        activeObject.initialX = event.clientX - activeObject.xOffset;
        activeObject.initialY = event.clientY - activeObject.yOffset;
    }
};

drop_handler = function (event) {
    if (activeObject !== null) {
        activeObject.initialX = activeObject.currentX;
        activeObject.initialY = activeObject.currentY;

        classname = activeObject.getAttribute("data-name");
        UMLClass.instances[classname].xPos = activeObject.initialX;
        UMLClass.instances[classname].yPos = activeObject.initialY;     
    }
    active = false;
    activeObject = null;
};
