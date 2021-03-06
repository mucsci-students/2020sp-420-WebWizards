pl.v.createClass = {
    setupUserInterface: function () {
        var addButton = document.createElement("button");
        addButton.innerHTML = "Add";
        addButton.setAttribute("id","addBtn2");
        document.forms["UMLClass"].append(addButton);

        UMLClass.retrieveAll(save.retrieveUMLClassString());
        addButton.addEventListener("click",
            pl.v.createClass.handleAddButtonClickEvent);

        window.addEventListener("beforeunload", function () {
            save.saveLocal(UMLClass.instances, Edge.instances);
        });
    },
    handleAddButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        var newUMlClass = UMLClass.add(formEl.name.value, formEl.vars.value, formEl.methods.value);
        formEl.reset();
        pl.v.classBox.addClassBox(newUMlClass);
    },
    handleCreateEdgeButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        var startClass = formEl.name.value;
        var endClass = formEl.name2.value;
        var edgeType = formEl.edgetype.value;
        Edge.add(startClass, endClass, UMLClass.instances, edgeType);
        pl.v.retrieveAndListAllClasses.updateEdges();
    }
};

pl.v.editClass = {
    setupUserInterface: function () {
        var addFieldButton = document.createElement("button");
        addFieldButton.innerHTML = "Add Fields";
        addFieldButton.setAttribute("id","addFieldBtn2");
        document.forms["UMLClass"].append(addFieldButton);
        addFieldButton.addEventListener("click", pl.v.editClass.handleAddFieldButtonClickEvent);

        var deleteFieldButton = document.createElement("button");
        deleteFieldButton.innerHTML = "Delete Fields";
        deleteFieldButton.setAttribute("id","deleteFieldBtn2");
        document.forms["UMLClass"].append(deleteFieldButton);
        deleteFieldButton.addEventListener("click", pl.v.editClass.handleDeleteButtonClickEvent);
    },

    handleAddFieldButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        UMLClass.addVar(formEl.name.value, formEl.vars.value);
        UMLClass.addMethod(formEl.name.value, formEl.methods.value);
    },

    handleDeleteButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        UMLClass.deleteVar(formEl.name.value, formEl.vars.value);
        UMLClass.deleteMethod(formEl.name.value, formEl.methods.value);
    }
}

pl.v.deleteClass = {
    setupUserInterface: function () {
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.setAttribute("id","deleteBtn2");
        document.forms["UMLClass"].append(deleteButton);

        deleteButton.addEventListener("click",
            pl.v.deleteClass.handleDeleteButtonClickEvent);
        window.addEventListener("beforeunload", function () {
            // save.saveLocal(UMLClass.instances, Edge.instances);
        });

    },

    handleDeleteButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        var name = formEl.name.value;
        UMLClass.destroy(name);
        Edge.deleteClassRelationships(name);
        pl.v.classBox.deleteClassBox(name);

    }
};

pl.v.createEdge = {
    setupUserInterface: function () {
        var edgeButton = document.createElement("button");
        edgeButton.innerHTML = "Create Relationship Between Classes";
        edgeButton.setAttribute("id","edgeBtn");
        document.forms["UMLClass"].append(edgeButton);

        edgeButton.addEventListener("click", pl.v.createEdge.handleCreateEdgeButtonClickEvent);
    },
    handleCreateEdgeButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        var startClass = formEl.name.value;
        var endClass = formEl.name2.value;
        var edgeType = formEl.edgetype.value;
        Edge.add(startClass, endClass, UMLClass.instances, edgeType);
        pl.v.retrieveAndListAllClasses.updateEdges();
    }
};

pl.v.deleteEdge = {
    setupUserInterface: function () {
        var deleteEdgeButton = document.createElement("button");
        deleteEdgeButton.innerHTML = "Delete Relationship Between Classes";
        deleteEdgeButton.setAttribute("id","deleteEdgeBtn");
        document.forms["UMLClass"].append(deleteEdgeButton);

        deleteEdgeButton.addEventListener("click", pl.v.deleteEdge.handleDeleteEdgeButtonClickEvent);
    },
    handleDeleteEdgeButtonClickEvent: function () {
        var formEl = document.forms["UMLClass"];
        var classOne = formEl.name.value;
        var classTwo = formEl.name2.value;
        Edge.destroy(classOne, classTwo);
        pl.v.retrieveAndListAllClasses.updateEdges();
    }
};


pl.v.clearAll = {
    setupUserInterface: function () {
        var clearAllButton = document.createElement("button");
        clearAllButton.innerHTML = "Delete All Classes";
        clearAllButton.setAttribute("id","deleteAllBtn2");
        document.forms["UMLClass"].append(clearAllButton);

        clearAllButton.addEventListener("click",
            pl.v.clearAll.handleClearAllButtonClickEvent);
    },

    handleClearAllButtonClickEvent: function () {
        if (confirm("Are you SURE you want to clear the database?")) {
            save.clearData();
            UMLClass.reset();
            Edge.reset();

        }
    }
};

pl.v.exportSVG = {
    setupUserInterface: function () {
        var exportSVGButton = document.createElement("button");
        exportSVGButton.innerHTML = "Export Diagram as SVG";
        exportSVGButton.setAttribute("id", "exportSVGBtn");
        document.forms["UMLClass"].append(exportSVGButton);
        exportSVGButton.addEventListener('click', pl.v.exportSVG.handleExportSVGButtonClickEvent);
    },

    handleExportSVGButtonClickEvent: function () {
        pl.v.retrieveAndListAllClasses.drawClassesOnSVG();
        save.exportSVGImage();
    }
};
pl.v.exportPNG = {
    setupUserInterface: function () {
        var exportPNGButton = document.createElement("button");
        exportPNGButton.innerHTML = "Export Diagram as PNG";
        exportPNGButton.setAttribute("id","exportPNGBtn");
        document.forms["UMLClass"].append(exportPNGButton);
        exportPNGButton.addEventListener('click', pl.v.exportPNG.handleExportSVGButtonClickEvent);
    },

    handleExportSVGButtonClickEvent: function () {
        pl.v.retrieveAndListAllClasses.drawClassesOnSVG();
        saveSvgAsPng(document.getElementById("edgeDraw"), "umlDiagram.png");
    }
};

pl.v.classBox = {
    //returns Javascript node that is a visual representation of a classbox
    createClassBox: function (umlclass) {
        var classbox = document.createElement('div');
        classbox.innerHTML = umlclass.name + "</br>";
        classbox.innerHTML += umlclass.vars.map(e => "- " + e.type + ": " + e.name + "</br>").join("");
        classbox.innerHTML += umlclass.methods.map(e => "- " + e.type + ": " + e.name + "</br>").join("");


        classbox.setAttribute("data-name", umlclass.name);
        classbox.style.transform = "translate(" + umlclass.xPos + "px, " + umlclass.yPos + "px)";
        classbox.className = "classBox";

        return classbox;
    },

    addClassBox: function (umlclass) {
        var classbox = pl.v.classBox.createClassBox(umlclass);
        var dropSpace = document.getElementById("dropArea");
        dropSpace.appendChild(classbox);
    },

    deleteClassBox: function (classname) {
        this.getClassBox(classname).remove();
    },

    updateClassBox: function (classname) {
        this.deleteClassBox(classname);
        this.addClassBox(UMLClass.instances[classname]);
    },

    renameClassBox: function (oldname, newname) {
        this.deleteClassBox(oldname);
        this.addClassBox(UMLClass.instances[newname]);
    },

    resetPosition: function (classname) {
        UMLClass.instances[classname].xPos = 0;
        UMLClass.instances[classname].yPos = 0;
        this.updateClassBox(classname);
    },

    getClassBox: function (classname) {
        return $("div").find(`[data-name='${classname}']`);
    },

    clearAll: function () {
        document.getElementById("dropArea").innerHTML = "";
    }
};

pl.v.retrieveAndListAllClasses = {

    updateView: function () {

        var keys = [], key = "", row = {}, i = 0;
        UMLClass.reset();
        pl.v.classBox.clearAll();
        UMLClass.retrieveAll(save.retrieveUMLClassString());
        keys = Object.keys(UMLClass.instances);

        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            pl.v.classBox.addClassBox(UMLClass.instances[key]);
        }

        pl.v.retrieveAndListAllClasses.updateEdges();
    },

    drawClassesOnSVG: function () {
        var c = document.getElementById("edgeDraw");

        var keys = [], key = "", row = {}, i = 0;
        UMLClass.retrieveAll(save.retrieveUMLClassString());
        keys = Object.keys(UMLClass.instances);

        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            classname = UMLClass.instances[key].name;
            var classbox = pl.v.classBox.getClassBox(classname);
            var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            var xVal = (classbox.position().left - 10);
            text.setAttribute("x", xVal);
            text.setAttribute("y", classbox.position().top);


            var lines = [];
            lines[0] = "NAME: " + classname;
            for (v of UMLClass.instances[key].vars) {
                lines.push(v.type + " " + v.name);
            }
            for (m of UMLClass.instances[key].methods) {
                lines.push(m.type + " " + m.name);
            }

            for (l of lines) {
                var span = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                span.setAttribute('x', xVal);
                span.setAttribute('dy', '1em');
                span.setAttribute("fill", "blue");
                span.setAttribute("font-weight", "bold");
                span.innerHTML = l;
                text.appendChild(span);
            }

            c.appendChild(text);

        }
    },

    updateEdges: function () {

        //https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas_lineto
        //https://www.w3schools.com/graphics/svg_line.asp
        Edge.retrieveAll(save.retrieveEdgeString());
        var c = document.getElementById("edgeDraw");
        c.innerHTML = "";

        for (i of Edge.instances) {
            startClass = pl.v.classBox.getClassBox(i.start);
            endClass = pl.v.classBox.getClassBox(i.end);

            var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute('x1', startClass.position().left);
            line.setAttribute('y1', startClass.position().top);
            line.setAttribute('x2', endClass.position().left);
            line.setAttribute('y2', endClass.position().top);
            line.setAttribute("stroke", "black");
            line.setAttribute("stroke-width", "2");

            //if relationship type is realization, line should be dotted with filled
            if (i.type === "realization") {
                line.setAttribute("stroke-dasharray", "10");
            }

            var arrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            var arrowSize = 10;

            //if relationship type is composition or aggregation, line should have a diamond at start element
            //if relationship type is inheritance or realization, line should have an arrow pointing to end element
            //if relationship type is inheritance, the line should be solid and the arrow open. if relation, then dotted line and closed arrow
            //if relationship type is composition, diamond should be filled. if aggregation, then "open"
            if ((i.type === "composition") || (i.type === "aggregation")) {
                //sets arrow at start class location
                var arrowOrigin = { "x": startClass.position().left, "y": startClass.position().top - 5 };

                //sets arrow to be diamond shape
                arrow.setAttribute("points", `${arrowOrigin["x"]} ${arrowOrigin["y"]} ${arrowOrigin["x"] + arrowSize} ${arrowOrigin["y"] - arrowSize} ${arrowOrigin["x"] + 2.0 * arrowSize} ${arrowOrigin["y"]} ${arrowOrigin["x"] + arrowSize} ${arrowOrigin["y"] + arrowSize}`);

            }

            else if ((i.type === "inheritance") || (i.type === "realization")) {
                //sets arrow at end class location
                var arrowOrigin = { "x": endClass.position().left, "y": endClass.position().top - 5 };

                //sets arrow to be triangle shape
                arrow.setAttribute("points", `${arrowOrigin["x"]} ${arrowOrigin["y"]} ${arrowOrigin["x"] + arrowSize * 2.0} ${arrowOrigin["y"]} ${arrowOrigin["x"] + arrowSize} ${arrowOrigin["y"] + arrowSize}`);

            }


            if ((i.type === "aggregation") || (i.type === "inheritance")) {
                //code to set the arrow/diamond shape to be open
                arrow.setAttribute("fill", "none");
                arrow.setAttribute("stroke", "black");
                arrow.setAttribute("stroke-width", "2");
            }

            c.appendChild(arrow);
            c.appendChild(line);


            console.log("line drawn");
        }

    }
};

pl.v.load = {
    setupUserInterface: function () {
        var loadButton = document.createElement("button");
        loadButton.innerHTML = "Load Data from File";
        loadButton.setAttribute("id","loadBtn2");
        var loadSelector = document.createElement("input");
        loadSelector.type = "file";
        loadSelector.id = "loadfile";
        document.forms["UMLClass"].append(loadButton);
        document.forms["UMLClass"].append(loadSelector);

        loadButton.addEventListener("click", pl.v.load.handleLoadButton);
    },

    handleLoadButton: function () {
        var loadFile = document.getElementById("loadfile").files[0];
        save.loadFile(loadFile);
        UMLClass.retrieveAll(save.retrieveUMLClassString());
        Edge.retrieveAll(save.retrieveEdgeString());
        pl.v.retrieveAndListAllClasses.updateView();
    }
};

pl.v.export = {
    setupUserInterface: function () {
        var exportButton = document.createElement("button");
        exportButton.innerHTML = "Export Data to File";
        exportButton.setAttribute("id","exportBtn2");
        document.forms["UMLClass"].append(exportButton);

        exportButton.addEventListener("click", pl.v.export.handleExportButtonClickEvent);
    },

    handleExportButtonClickEvent: function () {
        save.exportFile();
    }
};