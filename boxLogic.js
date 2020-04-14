 function allowDrop(event) {
        event.preventDefault();
        console.log("allowDrop fired");
    }

    function drag(event) {
        event.dataTransfer.setData("text", event.target.id);
        console.log("drag fired");
    }

    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
        console.log("dropped fired");
    }

