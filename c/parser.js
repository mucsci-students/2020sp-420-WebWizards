pl.c.parseCommand = function (command, program) {
    args = command.split(" ");
    args[0] = args[0].toLowerCase();
    console.log(program);
    var outputString = "<br> >" + command + "<br>";
    switch (program) {
        default:
            outputString = pl.c.defaultParser(args) + outputString;
            break;
    }
    return outputString;
};

pl.c.defaultParser = function (args) {

    var outputString = ("");

    switch (args[0]) {
        case "add":
            for (i = 1; i < args.length; i++) {
                if (UMLClass.add(args[i]))
                    outputString = ("<br>Class " + args[i] + " created successfully!") + outputString;
                else
                    outputString = ("<br>Creation of class " + args[i] + " failed!") + outputString;

            }
            break;

        case "delete":
            for (i = 1; i < args.length; i++) {
                UMLClass.destroy(args[i]);
                Edge.deleteClassRelationships(args[i]);
            }
            break;

        case "export":
            save.exportFile();
            break;

        case "clear":
            if (confirm("Are you sure you want to clear the database?")) {
                save.clearData();
                UMLClass.reset();
                Edge.reset();
                pl.v.retrieveAndListAllClasses.updateView();

            }
            break;

        case "load":
            pl.v.cliLoad();
            break;

        case "rename":
            save.rename(args[1], args[2]);
            break;

        case "add-var":
            UMLClass.addVar(args[1], args[2]);
            break;

        case "add-method":
            UMLClass.addMethod(args[1], args[2]);
            break;

        case "delete-var":
            UMLClass.deleteVar(args[1], args[2]);
            break;

        case "delete-method":
            UMLClass.deleteMethod(args[1], args[2]);
            break;

        case "modify-var-type":
            UMLClass.changeVarType(args[1], args[2], args[3]);
            break;

        case "modify-method-type":
            UMLClass.changeMethodType(args[1], args[2], args[3]);
            break;

        case "add-edge":
            Edge.add(args[1], args[2], UMLClass.instances);
            break;

        case "modify-type":
            Edge.modifyRelationshipType(args[1], args[2], args[3]);
            console.log("--" + Edge.returnHumanReadableString());
            save.saveLocal(UMLClass.instances, Edge.instances);
            break;

        case "delete-edge":
            Edge.destroy(args[1], args[2]);
            break;

        case "list-edges":
            outputString = Edge.returnHumanReadableString() + outputString;
            break;

        case "clear-edges":
            Edge.reset();
            break;

        case "list-classes":
            outputString = UMLClass.returnHumanReadableString() + outputString;
            break;

        case "val":
            outputString = UMLClass.validateName(args[1]) + outputString;
            break;

        case "help":

            outputString = ("commands:<br>\
            >list-classes<br>\
            >add class-name [class-name ...]<br>\
            >delete class-name [class-name ...]<br>\
            >export<br>\
            >clear<br>\
            >load<br>\
            >rename current-class-name new-class-name<br>\
            >add-var class-name var-name[,var-name,var-name ...]<br>\
            >add-method class-name method-name[,method-name,method-name ...]<br>\
            >delete-var class-name var-name[,var-name,var-name ...]<br>\
            >delete-var class-name method-name[,method-name,method-name ...]<br>\
>modify-var-type class-name var-name new-var-type<br>\
            >modify-method-type class-name var-name new-method-type<br>\
            >add-edge start-class end-class<br>\
            >modify-type start-class end-class type <br>\
            >delete-edge start-class end-class<br>\
            >list-edges<br>\
            >clear-edges<br>\
            ") + outputString;

            break;
        default:
            outputString = ("Command not recognized") + outputString;
            break;
    }
    save.saveLocal(UMLClass.instances, Edge.instances);
    return outputString;

};