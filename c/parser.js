pl.c.parseCommand = function (command, program) {
    args = command.split(" ");
    args[0] = args[0].toLowerCase();
    console.log(program);
    switch (program) {
        default:
            pl.c.defaultParser(args);
            break;
    }
};

pl.c.defaultParser = function (args) {
    switch (args[0]) {
        case "add":
            for (i = 1; i < args.length; i++) {
                UMLClass.add(args[i]);
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
            alert(Edge.returnHumanReadableString());
            break;

        case "clear-edges":
            Edge.reset();
            break;


        case "help":
            javascript: alert("commands:\n\
            >add class-name [class-name ...]\n\
            >delete class-name [class-name ...]\n\
            >export\n\
            >clear\n\
            >load\n\
            >rename current-class-name new-class-name\n\
            >add-var class-name var-name\n\
            >add-method class-name method-name\n\
            >delete-var class-name var-name\n\
            >delete-var class-name method-name\n\
            >add-edge start-class end-class\n\
            >modify-type start-class end-class type \n\
            >delete-edge start-class end-class\n\
            >list-edges\n\
            >clear-edges\n\
            >\n\
            ");
            break;
        default:
            alert("Command not recognized");
            break;
    }
    save.saveLocal(UMLClass.instances, Edge.instances);

};