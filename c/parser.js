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

                UMLClass.add(args[i])
            } break;

        case "delete":
            for (i = 1; i < args.length; i++) {
                UMLClass.destroy(args[i]);
                Edge.deleteClassRelationships(args[i]);
            }
            break;

        case "export":
            UMLClass.exportFile();
            break;

        case "clear":
            if (confirm("Are you sure you want to clear the database?")) {
                UMLClass.clearData();
                Edge.reset();
            }
            break;

        case "load":
            pl.v.cliLoad();
            break;

        case "rename":
            UMLClass.rename(args[1], args[2]);
            break;

        case "add-edge":
            Edge.add(args[1], args[2]);
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
            >rename-class current-class-name new-class-name\n\
            >add-edge start-class end-class\n\
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
};