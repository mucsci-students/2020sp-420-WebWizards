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
        var newUMlClass = UMLClass.add(formEl.name.value, formEl.vars.value, formEl.methods.value);
        formEl.reset();
        //pl.v.retrieveAndListAllClasses.updateView();
        pl.v.classBox.addClassBox(newUMlClass);
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
        // pl.v.retrieveAndListAllClasses.updateView();
        pl.v.classBox.deleteClassBox(name);

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
            //pl.v.retrieveAndListAllClasses.updateView();
        }
    }
};

pl.v.classBox = {
    //returns Javascript node that is a visual representation of a classbox
    createClassBox: function (umlclass) {
        var classbox = document.createElement('div');
        //classbox.style.left = x_pos+'px';
        //classbox.style.top = y_pos+'px';
        classbox.innerHTML = umlclass.name + "</br>";
        classbox.innerHTML += umlclass.vars.map(e => e.type + " " + e.name + "</br>").join("");
        classbox.innerHTML += umlclass.methods.map(e => e.type + " " + e.name + "</br>").join("");

        classbox.setAttribute("draggable", "true");
        classbox.setAttribute("ondragstart", "dragstart_handler(event)");
        classbox.setAttribute("data-name", umlclass.name);
        classbox.style.transform = "translate(" + umlclass.xPos + "px, " + umlclass.yPos + "px)";
        classbox.className = "classBox";

        return classbox;
    },

    addClassBox: function (umlclass) {
        var classbox = pl.v.classBox.createClassBox(umlclass);
        var dropSpace = document.getElementById("dropArea");
        dropSpace.appendChild(classbox);
    },

    deleteClassBox: function (classname) {
        var classbox = $("div").find(`[data-name='${classname}']`);
        classbox.remove();
    },

    updateClassBox: function (classname) {
        var classbox = $("div").find(`[data-name='${classname}']`);
        var umlclass = UMLClass.instances[classname];

        classbox.remove();
        this.addClassBox(umlclass);
    }
};

pl.v.retrieveAndListAllClasses = {

    updateView: function () {
        var keys = [], key = "", row = {}, i = 0;
        UMLClass.retrieveAll(save.retrieveUMLClassString());
        keys = Object.keys(UMLClass.instances);

        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            pl.v.classBox.addClassBox(UMLClass.instances[key]);
        }
    },

    updateEdges: function () {
        /*        
        
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
                    ctx.stroke();
                    console.log("line drawn");
                }
          */
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
/*
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
*/