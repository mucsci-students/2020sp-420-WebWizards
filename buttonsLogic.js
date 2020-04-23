$(document).ready(function () {
    $("#addBtn").click(function () {
        $("#classModal").modal();
        $("#deleteBtn2").hide();
        $("#editBtn").hide();
        $("#deleteAllBtn2").hide();
        $("#exportBtn2").hide();
        $("#loadBtn2").hide();
        $("#addFieldBtn2").hide();
        $("#deleteFieldBtn2").hide();
        $("#loadfile").hide();


    });
});


$(document).ready(function () {
    $("#deleteBtn").click(function () {
        $("#classModal").modal();
        $("#addBtn2").hide();
        $("#editBtn2").hide();
        $("#deleteBtn2").show();
        $("#deleteAllBtn2").hide();
        $("#exportBtn2").hide();
        $("#loadBtn2").hide();
        $("#addFieldBtn2").hide();
        $("#loadfile").hide();

    });
});

$(document).ready(function () {
    $("#deleteAllBtn").click(function () {
        $("#classModal").modal();
        $("#addBtn2").hide();
        $("#editBtn2").hide();
        $("#deleteBtn2").hide();
        $("#deleteAllBtn2").hide();
        $("#exportBtn2").hide();
        $("#loadBtn2").hide();
        $("#addFieldBtn2").hide();
        $("#loadfile").hide();

    });
});


$(document).ready(function () {
    $("#editBtn").click(function () {
        $("#classModal").modal();
        $("#deleteBtn2").hide();
        $("#addBtn2").hide();
        $("#deleteAllBtn2").hide();
        $("#exportBtn2").hide();
        $("#loadBtn2").hide();
        $("#addFieldBtn2").show();
        $("#loadfile").hide();

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

    });
});

$(document).ready(function () {
    $("#deleteAllBtn").click(function () {
        $("#classModal2").modal();
        $("#deleteBtn2").hide();
        $("#editBtn2").hide();
        $("#addBtn2").hide();
        $("#exportBtn2").hide();
        $("#loadBtn2").hide();
        $("#addFieldBtn2").hide();
        $("#deleteFieldBtn2").hide();
        $("#loadfile").hide();

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