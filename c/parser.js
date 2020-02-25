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
            pl.c.addParser(args.slice(1));
            break;

        case "delete":
            for (i = 1; i < args.length; i++) {
                UMLClass.destroy(args[i]);
            }
            break;

        case "export":
            UMLClass.exportFile();
            break;

        case "clear":
            if (confirm("Are you sure you want to clear the database?"))
                UMLClass.clearData();
            break;

        case "help":
            javascript: alert("commands:\n\
            >add class-name [class-name ...]\n\
            >delete class-name [class-name ...]\n\
            >export\n\
            >clear\
            ");
    }
};

pl.c.addParser = function (args) {
    for (i = 0; i < args.length; i++) {
        var slots = {
            name: args[i]
        };
        UMLClass.add(slots)
    }
}