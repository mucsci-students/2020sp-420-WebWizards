pl.c.parseCommand = function (command) {
    console.log(command);
    args = command.split(" ");

    switch (args[0]) {
        case "add":    
        var slots = {
                name: args[1]
            };
            UMLClass.add(slots);
            break;
        case "delete":
            UMLClass.destroy(args[1]);
            break;
        case "export":
            UMLClass.exportFile();
            break;

    }
}