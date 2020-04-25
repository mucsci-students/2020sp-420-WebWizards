pl.v.createClass = {
    setupUserInterface: function () {
        var addButton = document.createElement("button");
        addButton.innerHTML = "Add";
        document.forms["UMLClass"].append(addButton);

        UMLClass.retrieveAll(save.retrieveUMLClassString());
        addButton.addEventListener("click",
            pl.v.createClass.handleAddButtonClickEvent);

        window.addEventListener("beforeunload", function () {
            save.saveLocal(UMLClass.instances, Edge.instances);
        });
    },
    handleAddButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        UMLClass.add(formEl.name.value, formEl.vars.value, formEl.methods.value);
        formEl.reset();
        pl.v.retrieveAndListAllClasses.updateView();
    }
};

pl.v.editClass = {
    setupUserInterface: function () {
        var addFieldButton = document.createElement("button");
        addFieldButton.innerHTML = "Add Fields";
        document.forms["UMLClass"].append(addFieldButton);
        addFieldButton.addEventListener("click", pl.v.editClass.handleAddFieldButtonClickEvent);

        var deleteFieldButton = document.createElement("button");
        deleteFieldButton.innerHTML = "Delete Fields";
        document.forms["UMLClass"].append(deleteFieldButton);
        deleteFieldButton.addEventListener("click", pl.v.editClass.handleDeleteButtonClickEvent);
    },

    handleAddFieldButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        UMLClass.addVar(formEl.name.value, formEl.vars.value);
        UMLClass.addMethod(formEl.name.value, formEl.methods.value);
    },

    handleDeleteButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        UMLClass.deleteVar(formEl.name.value, formEl.vars.value);
        UMLClass.deleteMethod(formEl.name.value, formEl.methods.value);
    }
}

pl.v.deleteClass = {
    setupUserInterface: function () {
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        document.forms["UMLClass"].append(deleteButton);

        deleteButton.addEventListener("click",
            pl.v.deleteClass.handleDeleteButtonClickEvent);
        window.addEventListener("beforeunload", function () {
            save.saveLocal(UMLClass.instances, Edge.instances);
        });

    },

    handleDeleteButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        var name = formEl.name.value;
        UMLClass.destroy(name);
        save.saveLocal(UMLClass.instances, Edge.instances);
        pl.v.retrieveAndListAllClasses.updateView();

    }
};

pl.v.clearAll = {
    setupUserInterface: function () {
        var clearAllButton = document.createElement("button");
        clearAllButton.innerHTML = "Delete All Classes";
        document.forms["UMLClass"].append(clearAllButton);

        clearAllButton.addEventListener("click",
            pl.v.clearAll.handleClearAllButtonClickEvent);
    },

    handleClearAllButtonClickEvent: function () {
        if (confirm("Are you SURE you want to clear the database?")) {
            save.clearData();
            UMLClass.reset();
            Edge.reset();
            pl.v.retrieveAndListAllClasses.updateView();
        }
    }
};


pl.v.retrieveAndListAllClasses = {

    //returns Javascript node that is a visual representation of a classbox
    createClassBox: function (umlclass) {
        var x_pos, y_pos;
        var classbox = document.createElement('div');
        classbox.style.left = x_pos+'px';
        classbox.style.top = y_pos+'px';
        classbox.innerHTML = umlclass.name + "</br>";
        classbox.innerHTML += umlclass.vars.map(e => e.type + " " + e.name + "</br>").join("");
        classbox.innerHTML += umlclass.methods.map(e => e.type + " " + e.name + "</br>").join("");
        classbox.setAttribute("draggable", "true");
        classbox.setAttribute("ondragstart", "dragstart_handler(event)");
        classbox.className = "classBox";

        return classbox;
    },

    updateView: function () {
        //var initialDropSpace = document.getElementsByTagName('body')[0];
        var initialDropSpace = document.getElementById("initialDropSpace");
        var dropSpace = document.getElementById("dropArea");

        var keys = [], key = "", row = {}, i = 0;
        UMLClass.retrieveAll(save.retrieveUMLClassString());
        Edge.retrieveAll(save.retrieveEdgeString());
        keys = Object.keys(UMLClass.instances);

        //temporary
        initialDropSpace.innerHTML = "";
        dropSpace.innerHTML = "<div class='classBoxName2'> </div>";

        for (i = 0; i < keys.length; i++) {
            key = keys[i];

            classbox = pl.v.retrieveAndListAllClasses.createClassBox(UMLClass.instances[key]);
            classbox.id = "classbox" + i;
<<<<<<< Updated upstream
            initialDropSpace.appendChild(classbox);
=======
            dropSpace.appendChild(classbox);
        }

    },

    updateEdges: function () {
        

        //https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas_lineto
        Edge.retrieveAll(save.retrieveEdgeString());
        var c = document.createElement("canvas");
        document.getElementById("dropArea").appendChild(c);
        
        var ctx = c.getContext("2d");
        ctx.beginPath();
        for (i of Edge.instances) {
            startClass = UMLClass.instances[i.start];
            endClass = UMLClass.instances[i.end];

            ctx.moveTo(startClass.xPos, startClass.yPos);
            ctx.lineTo(endClass.xPos, endClass.yPos);
            ctx.stroke(1);
            console.log("line drawn");
>>>>>>> Stashed changes
        }
    }
};

pl.v.load = {
    setupUserInterface: function () {
        var loadButton = document.createElement("button");
        loadButton.innerHTML = "Load Data from File";
        var loadSelector = document.createElement("input");
        loadSelector.type = "file";
        loadSelector.id = "loadfile";
        document.forms["UMLClass"].append(loadButton);
        document.forms["UMLClass"].append(loadSelector);

        loadButton.addEventListener("click", pl.v.load.handleLoadButton);
    },

    handleLoadButton: function () {
        var loadFile = document.getElementById("loadfile").files[0];
        save.loadFile(loadFile);
        UMLClass.retrieveAll(save.retrieveUMLClassString());
        Edge.retrieveAll(save.retrieveEdgeString());
        pl.v.retrieveAndListAllClasses.updateView();
    }
};

pl.v.export = {
    setupUserInterface: function () {
        var exportButton = document.createElement("button");
        exportButton.innerHTML = "Export Data to File";
        document.forms["UMLClass"].append(exportButton);

        exportButton.addEventListener("click", pl.v.export.handleExportButtonClickEvent);
    },

    handleExportButtonClickEvent: function () {
        save.exportFile();
    }
};

pl.v.refresh = {
    setupUserInterface: function () {
        var refreshButton = document.createElement("button");
        refreshButton.innerHTML = "Refresh";
        document.forms["UMLClass"].append(refreshButton);

        refreshButton.addEventListener("click", pl.v.refresh.handleRefreshButtonClickEvent);
    },

    handleRefreshButtonClickEvent: function () {
        pl.v.retrieveAndListAllClasses.updateView();
    }
}
