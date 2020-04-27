save = {

    saveLocal: function (umlinstances, edgeinstances) {

        var classString = "", edgeString = "",
            error = false,
            numOfClasses = Object.keys(umlinstances).length,
            numOfEdges = Object.keys(edgeinstances).length;

        try {
            classString = JSON.stringify(umlinstances);
            edgeString = JSON.stringify(edgeinstances);
            localStorage["storage"] = classString + "^^" + edgeString;
        } catch (e) {
            alert("Error writing to Local Storage\n" + e);
            error = true;
        }

        if (!error) {
            console.log(numOfClasses + " classes saved, " + numOfEdges + " edges saved.");
        }
    },

    retrieveAll: function () {
        try {
            if (localStorage["storage"]) {
                const dataArray = localStorage["storage"].split("^^");
                return dataArray;
            }
        } catch (e) {
            alert("Error when reading from Local Storage\n" + e);
        }

    },

    retrieveUMLClassString: function () {
        return this.retrieveAll()[0];
    },

    retrieveEdgeString: function () {
        return this.retrieveAll()[1];
    },

    rename: function (oldName, newName) {
        this.saveLocal();
        const dataString = localStorage["storage"];
        const regex = new RegExp(oldName, "&&");
        const newDataString = dataString.replace(regex, newName);
        localStorage["storage"] = newDataString;

        this.retrieveAll();
    },

    clearData: function () {
        localStorage["storage"] = "{}^^[]";
    },

    exportFile: function () {

        let exportString = localStorage["storage"];
        let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(exportString);
        let defaultFileName = 'umlData.json';

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', defaultFileName);
        linkElement.click();

    },

    loadFile: function (f) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var contents = event.target.result;
            localStorage["storage"] = contents;
            console.log(contents);
            this.saveLocal();
        }

        reader.onerror = function () {
            alert("File could not be read!");
        }

        reader.readAsText(f);

    },

    exportImage: function () {

        let exportString = document.getElementById("edgeDraw").outerHTML;
        let dataUri = 'data:application/svg;charset=utf-8,' + encodeURIComponent(exportString);
        console.log(dataUri);
        let defaultFileName = 'umlDiagram.svg';
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', defaultFileName);
        linkElement.click();

    }
};