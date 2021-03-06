var programID = 0;

pl.v.commandLine = {

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
      
    }
};

pl.v.cliLoad = function () {
    var loadSelector = document.createElement("input");
    loadSelector.type = "file";
    var loadFile = loadSelector.files[0];
    save.loadFile(loadFile);
}
