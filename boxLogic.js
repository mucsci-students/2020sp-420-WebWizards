//https://www.kirupa.com/html5/drag.htm

var
    //initialX, initialY,
    //    curX, curY,
    //    xOffset = 0, yOffset = 0,
    activeObject = null,
    active = false;


drag_handler = function (event) {
    if (active) {
        activeObject.currentX = event.clientX - activeObject.initialX;
        activeObject.currentY = event.clientY - activeObject.initialY;
        activeObject.xOffset = activeObject.currentX;
        activeObject.yOffset = activeObject.currentY;
        console.log(activeObject.currentX + ", " + activeObject.currentY);

        activeObject.style.transform = "translate(" + activeObject.currentX + "px, " + activeObject.currentY + "px)";
    }

};

dragstart_handler = function (event) {
    active = true;
    activeObject = event.target;
    if (activeObject !== null) {
        if (!activeObject.xOffset) {
            activeObject.xOffset = 0;
        }
        if (!activeObject.yOffset) {
            activeObject.yOffset = 0;
        }
        activeObject.initialX = event.clientX - activeObject.xOffset;
        activeObject.initialY = event.clientY - activeObject.yOffset;
    }
};

drop_handler = function (event) {
    if (activeObject !== null) {
        activeObject.initialX = activeObject.currentX;
        activeObject.initialY = activeObject.currentY;
    }
    active = false;
    activeObject = null;
};
