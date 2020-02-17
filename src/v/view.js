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
        var slots = {
            name: formEl.name.value
        };
        UMLClass.add(slots);
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
        UMLClass.clearData();
        pl.v.retrieveAndListAllClasses.updateView();

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

pl.v.export = {
    setupUserInterface: function () {
        var exportButton = document.forms["UMLClass"].export;
        exportButton.addEventListener("click", pl.v.export.handleExportButtonClickEvent);
    },

    handleExportButtonClickEvent: function () {
        UMLClass.exportFile();
    }
};