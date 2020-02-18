var programID = 0; //value associated with 'program' to parse current submit


pl.v.commandLine = {
    //reference: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
    setupUserInterface: function () {
        var cli = document.getElementById("cli");
        console.log("user interface");
        
        //submits form if ENTER pressed
        cli.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                pl.v.commandLine.handleCommandLineSubmit();
            }
        });
    },

    handleCommandLineSubmit: function () {
        var formEl = document.forms["CLIForm"];
        pl.c.parseCommand(formEl.cli.value, programID);
        console.log("handle command line submit");
        formEl.reset();
        pl.v.retrieveAndListAllClasses.updateView();
    }
};