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
        UMLClass.add(formEl.name.value);
        formEl.reset();
        pl.v.retrieveAndListAllClasses.updateView();
    }
};

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
        if (confirm("Are you sure you want to clear the database?")) {
            save.clearData();
            pl.v.retrieveAndListAllClasses.updateView();
        }
    }
};

pl.v.retrieveAndListAllClasses = {

    updateView: function () {
        var tableBodyEl = document.querySelector("table#classes>tbody");
        var new_tableBody = document.createElement('tbody');
        var keys = [], key = "", row = {}, i = 0;
        UMLClass.retrieveAll(save.retrieveUMLClassString());
        Edge.retrieveAll(save.retrieveEdgeString());
        keys = Object.keys(UMLClass.instances);

        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            row1 = new_tableBody.insertRow();
            row2 = new_tableBody.insertRow();
            row3 = new_tableBody.insertRow();
            row1.insertCell(-1).textContent = UMLClass.instances[key].name;
            row2.insertCell(-1).textContent = UMLClass.instances[key].vars.join(", ");
            row3.insertCell(-1).textContent = UMLClass.instances[key].methods.join(", ");
        }
        tableBodyEl.parentNode.replaceChild(new_tableBody, tableBodyEl);
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
