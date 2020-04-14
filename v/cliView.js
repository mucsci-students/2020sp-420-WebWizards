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
        document.getElementById("cliOutput").innerHTML = (pl.c.parseCommand(formEl.cli.value, programID)) + document.getElementById("cliOutput").innerHTML;
        console.log("handle command line submit");
        formEl.reset();
        pl.v.retrieveAndListAllClasses.updateView();
    }
};

pl.v.cliLoad = function () {
    var loadSelector = document.createElement("input");
    loadSelector.type = "file";
    var loadFile = loadSelector.files[0];
    save.loadFile(loadFile);
}