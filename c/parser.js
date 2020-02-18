pl.c.parseCommand = function (command) {
    console.log(command);
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

    }
}