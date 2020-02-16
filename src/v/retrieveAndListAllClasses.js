pl.v.retrieveAndListAllClasses = {
    setupUserInterface: function() {
        console.log(localStorage["classes"]);

        var tableBodyEl = document.querySelector("table#classes>tbody");
        var keys=[], key="", row={}, i=0;

        UMLClass.retrieveAll();
        keys=Object.keys(UMLClass.instances);

        for (i=0; i < keys.length; ++i) {
            key = keys[i];
            row = tableBodyEl.insertRow();
            row.insertCell(-1).textContent = UMLClass.instances[key].name;
        }
    }
};