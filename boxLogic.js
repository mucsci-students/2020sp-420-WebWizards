allowDrop = function (event) {
    event.preventDefault();
    console.log("allowDrop fired");
};

dragstart_handler = function (event) {
    event.dataTransfer.setData("text", event.target.id);
    console.log("drag fired");
};

drop_handler = function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    console.log("dropped fired");
};

