$(document).ready(function () {
    $("#addBtn").click(function () {
        $("#classModal").modal();
        $("#addBtn2").show();
        $("#deleteBtn2").hide();
        $("#editBtn").show();
        $("#deleteAllBtn2").hide();
        $("#exportBtn2").hide();
        $("#loadBtn2").hide();
        $("#addFieldBtn2").hide();
        $("#deleteFieldBtn2").hide();
        $("#loadfile").hide();
        $("#relationshipLabel").hide();
        $("#relationshipTypeLabel").hide();
        $("#exportPNGBtn").hide();
        $("#exportSVGBtn").hide();
        $("#edgeBtn").hide();
        $("#varLabel").show();
        $("#methLabel").show();
        $("#classLabel").show();

        document.getElementById("addBtn2").innerHTML = "Add New Class";
        document.getElementById("modalTitle").innerHTML = "Please fill out class name along with any variable and methods";
        



    });
});


$(document).ready(function () {
    $("#deleteBtn").click(function () {
        $("#classModal").modal();
        $("#addBtn2").hide();
        $("#editBtn2").hide();
        $("#deleteBtn2").show();
        $("#deleteAllBtn2").hide();
        $("#deleteFieldBtn2").hide();
        $("#exportBtn2").hide();
        $("#loadBtn2").hide();
        $("#addFieldBtn2").hide();
        $("#loadfile").hide();
        $("#varLabel").hide();
        $("#methLabel").hide();
        $("#exportSVGBtn").hide();
        $("#exportPNGBtn").hide();
        $("#edgeBtn").hide();
        $("#classLabel").show()
        $("#relationshipLabel").hide();
        $("#relationshipTypeLabel").hide();;
        document.getElementById("modalTitle").innerHTML = "Enter Class Name To Be Deleted";
        document.getElementById("deleteBtn2").innerHTML = "Delete Class";

    });
});


$(document).ready(function () {
    $("#editBtn").click(function () {
        $("#classModal").modal();
        $("#deleteBtn2").hide();
        $("#deleteFieldBtn2").show();
        $("#addBtn2").hide();
        $("#deleteAllBtn2").hide();
        $("#exportBtn2").hide();
        $("#loadBtn2").hide();
        $("#addFieldBtn2").show();
        $("#loadfile").hide();
        $("#relationshipLabel").hide();
        $("#relationshipTypeLabel").hide();
        $("#exportSVGBtn").hide();
        $("#exportPNGBtn").hide();
        $("#edgeBtn").hide();
        $("#varLabel").show();
        $("#methLabel").show();
        document.getElementById("modalTitle").innerHTML = "Enter Class Name To Edit Classes Vars and Methods";

    });
});


$(document).ready(function () {
    $("#exportBtn").click(function () {
        $("#classModal").modal();
        $("#deleteBtn2").hide();
        $("#editBtn2").hide();
        $("#deleteAllBtn2").hide();
        $("#addBtn2").hide();
        $("#loadBtn2").hide();
        $("#addFieldBtn2").hide();
        $("#deleteFieldBtn2").hide();
        $("#loadfile").hide();
        $("#exportBtn2").show();
        $("#exportPNGBtn").show();
        $("#exportSVGBtn").show();
        $("#edgeBtn").hide();
        $("#classLabel").hide();
        $("#relationshipLabel").hide();
        $("#relationshipTypeLabel").hide();
        $("#varLabel").hide();
        $("#methLabel").hide();
        document.getElementById("modalTitle").innerHTML = "Please Select Export Option";


    });
});

$(document).ready(function () {
    $("#loadBtn").click(function () {
        $("#classModal").modal();
        $("#deleteBtn2").hide();
        $("#editBtn2").hide();
        $("#deleteAllBtn2").hide();
        $("#exportBtn2").hide();
        $("#addBtn2").hide();
        $("#addFieldBtn2").hide();
        $("#deleteFieldBtn2").hide();
        $("#loadfile").show();
        $("#exportSVGBtn").hide();
        $("#exportPNGBtn").hide();
        document.getElementById("modalTitle").innerHTML = "Please Select Load Option";

    });
});

$(document).ready(function () {
    $("#deleteAllBtn").click(function () {
        $("#classModal").modal();
        $("#deleteBtn2").hide();
        $("#editBtn2").hide();
        $("#addBtn2").hide();
        $("#exportBtn2").hide();
        $("#loadBtn2").hide();
        $("#addFieldBtn2").hide();
        $("#deleteFieldBtn2").hide();
        $("#loadfile").hide();
        $("#deleteAllBtn2").show();
        $("#exportPNGBtn").hide();
        $("#exportSVGBtn").hide();
        $("#classLabel").hide();
        $("#varLabel").hide();
        $("#methLabel").hide();
        $("#edgeBtn").hide();
        $("#relationshipLabel").hide();
        $("#relationshipTypeLabel").hide();
        document.getElementById("modalTitle").innerHTML = "Are You Sure You Want To Clear All Classes?";



    });
});

$(document).ready(function () {
    $("#relBtn").click(function () {
        $("#classModal").modal();
        $("#deleteBtn2").hide();
        $("#editBtn2").hide();
        $("#addBtn2").hide();
        $("#exportBtn2").hide();
        $("#loadBtn2").hide();
        $("#addFieldBtn2").hide();
        $("#deleteFieldBtn2").hide();
        $("#loadfile").hide();
        $("#deleteAllBtn2").hide();
        $("#exportPNGBtn").hide();
        $("#exportSVGBtn").hide();
        $("#classLabel").show();
        $("#varLabel").hide();
        $("#methLabel").hide();
        $("#edgeBtn").show();
        $("#relationshipLabel").show();
        $("#relationshipTypeLabel").show();
        document.getElementById("modalTitle").innerHTML = "You Can Only Add Relationships For Created Classes!";



    });
});

//logic for view control
$(document).ready(function() {
    $("#cliView").hide();
    $("#guiView").hide();
    $("#cliViewBtn").click(function(){
        $("#cliView").show();
        $("#guiView").hide();

    });
    $("#guiViewBtn").click(function(){
        $("#guiView").show();
        $("#cliView").hide();

    });
});