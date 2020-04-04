pl.m.save = {

    DELIMITER: "^^",
    LOCALNAME: "storage",

    saveLocal: function (umlinstances, edgeinstances) {

        var classString = "", edgeString = "",
            error = false,
            numOfClasses = Object.keys(umlinstances).length,
            numOfEdges = Object.keys(edgeinstances).length;

        try {
            classString = JSON.stringify(umlinstances);
            edgeString = JSON.stringify(edgeinstances);
            localStorage[LOCALNAME] = classString + DELIMITER + edgeString;
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
            if (localStorage[LOCALNAME]) {
                const dataArray = localStorage[LOCALNAME].split("^^");
                const umlstring = localString[0];
                const edgestring = localString[1];
            }
        } catch (e) {
            alert("Error when reading from Local Storage\n" + e);
        }

        return dataArray;
    },

    retrieveUMLClassString : function () {
        return this.retrieveAll()[0];
    },

    retrieveEdgeString : function () {
        return this.retrieveAll()[1];
    },

    rename : function (oldName, newName) {
        this.saveLocal();
        const dataString = localStorage[LOCALNAME];
        const regex = new RegExp(oldName, "&&");
        const newDataString = dataString.replace(regex, newName);
        localStorage[LOCALNAME] = newDataString;

        this.retrieveAll();
    },

    clearData : function () {
        localStorage[LOCALNAME] = "{}" + DELIMITER + "{}";
    },

    exportFile : function () {
        //reference :https://www.codevoila.com/post/30/export-json-data-to-downloadable-file-using-javascript

        this.saveLocal();

        let exportString = localStorage[LOCALNAME];
        let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(exportString);
        let defaultFileName = 'umlData.json';

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', defaultFileName);
        linkElement.click();

    },

    loadFile : function () {
        this.clearData();
        //https://humanwhocodes.com/blog/2012/05/15/working-with-files-in-javascript-part-2/
        var reader = new FileReader();
        reader.onload = function(event) {
            var contents = event.target.result;
            localStorage[LOCALNAME] = contents;
            this.retrieveAll();
        }

        reader.onerror = function() {
            alert("File could not be read!");
        }

        reader.readAsText(f);
    }
};