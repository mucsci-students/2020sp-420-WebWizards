pl.v.createClass = {
    setupUserInterface: function() {
        var saveButton = document.forms['UMLClass'].add;

        //load classes
        UMLClass.retrieveAll();

        //event handler for save button
        saveButton.addEventListener("click", pl.v.createClass.handleSaveButtonClickEvent);

        //event handler for when browser window closed
        window.addEventListener("beforeunload", function() {
            UMLClass.saveAll();
        })
    },

    handleSaveButtonClickEvent: function() {
        var formEl = document.forms['UMLClass'];
        var slots = { name : formEl.name.value };
        UMLClass.add(slots);
        formEl.reset();
    }
};