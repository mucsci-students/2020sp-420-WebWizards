//reference: https://web-engineering.info/tech/JsFrontendApp/book/ch03s04.html

pl.v.createClass = {
    setupUserInterface: function () {
        var addButton = document.forms["UMLClass"].add;
        UMLClass.retrieveAll();
        addButton.addEventListener("click",
            pl.v.createClass.handleAddButtonClickEvent);

        window.addEventListener("beforeunload", function () {
            UMLClass.saveAll();
        });
    },
    handleAddButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        UMLClass.add(formEl.name.value);
        formEl.reset();
        pl.v.retrieveAndListAllClasses.updateView();
    }
};

pl.v.deleteClass = {
    setupUserInterface: function () {
        var deleteButton = document.forms["UMLClass"].delete;
        deleteButton.addEventListener("click",
            pl.v.deleteClass.handleDeleteButtonClickEvent);
        window.addEventListener("beforeunload", function () {
            UMLClass.saveAll();
        });

    },

    handleDeleteButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        var name = formEl.name.value;
        UMLClass.destroy(name);
        pl.v.retrieveAndListAllClasses.updateView();

    }
};

pl.v.clearAll = {
    setupUserInterface: function () {
        var clearAllButton = document.forms["UMLClass"].clearAll;
        clearAllButton.addEventListener("click",
            pl.v.clearAll.handleClearAllButtonClickEvent);
    },

    handleClearAllButtonClickEvent: function () {
        if (confirm("Are you sure you want to clear the database?")) {
            UMLClass.clearData();
            pl.v.retrieveAndListAllClasses.updateView();
        }
    }
};

pl.v.retrieveAndListAllClasses = {

    updateView: function () {
        var tableBodyEl = document.querySelector("table#classes>tbody");
        var new_tableBody = document.createElement('tbody');
        var keys = [], key = "", row = {}, i = 0;
        UMLClass.retrieveAll();
        keys = Object.keys(UMLClass.instances);

        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            row = new_tableBody.insertRow();
            row.insertCell(-1).textContent = UMLClass.instances[key].name;
        }
        tableBodyEl.parentNode.replaceChild(new_tableBody, tableBodyEl);
    }
};

pl.v.load = {
    setupUserInterface: function () {
        var loadButton = document.forms["UMLClass"].load;
        loadButton.addEventListener("click", pl.v.load.handleLoadButton);
    },

    handleLoadButton: function () {
        var loadFile = document.getElementById("loadfile").files[0];
        UMLClass.loadFile(loadFile);
        pl.v.retrieveAndListAllClasses.updateView();
    }
};

pl.v.export = {
    setupUserInterface: function () {
        var exportButton = document.forms["UMLClass"].export;
        exportButton.addEventListener("click", pl.v.export.handleExportButtonClickEvent);
    },

    handleExportButtonClickEvent: function () {
        UMLClass.exportFile();
    }
};

pl.v.refresh = {
    setupUserInterface: function () {
        var refreshButton = document.forms["UMLClass"].refresh;
        refreshButton.addEventListener("click", pl.v.refresh.handleRefreshButtonClickEvent);
    },

    handleRefreshButtonClickEvent: function () {
        pl.v.retrieveAndListAllClasses.updateView();
    }
}

//ref link : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_draggable

dragElement(document.getElementById("classBox"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}