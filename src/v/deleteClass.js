//reference: https://web-engineering.info/tech/JsFrontendApp/book/ch03s07.html
pl.v.deleteClass = {
    setupUserInterface: function () {
        var formEl = document.forms['UMLClass'],
            saveButton = formEl.update,
            selectClassEl = formEl.selectClass;
        var key = "", keys = [], umlclass = null, optionEl = null, i = 0;
        UMLClass.retrieveAll();
        keys = Object.keys(UMLClass.instances);
        for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            umlclass = UMLClass.instances[key];
            optionEl = document.createElement("option");
            optionEl.text = umlclass.name;
            optionEl.value = umlclass.name;
            selectClassEl.add(optionEl, null);
        }
    },
    handleDeleteButtonClickEvent: function () {
        var selectEl = document.forms['UMLClass'].delete;
        var name = selectEl.value;
        if (name) {
            UMLClass.destroy(name);
            selectEl.remove(selectEl.selectedIndex);
        }
    }
};