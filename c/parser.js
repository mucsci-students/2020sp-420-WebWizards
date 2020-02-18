pl.c.parseCommand = function (command) {
    args = command.split(" ");

    switch (args[0]) {
        case "add":

            for (i = 1; i < args.length; i++) {
                var slots = {
                    name: args[i]
                };
                UMLClass.add(slots);
            }
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
            >export\
            >clear\
            ");
    }
}