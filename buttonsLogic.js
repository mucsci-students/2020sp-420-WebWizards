$(document).ready(function () {
    $("#addBtn").click(function () {
        $("#classModal").modal();
        $("#deleteButton").hide();
        $("#editButton").hide();
        $("#deleteAllButton").hide();
        $("#exportButton").hide();
        $("#loadButton").hide();

    });
});


$(document).ready(function () {
    $("#deleteBtn").click(function () {
        $("#classModal").modal();
        $("#addButton").hide();
        $("#editButton").hide();
        $("#deleteAllButton").hide();
        $("#exportButton").hide();
        $("#loadButton").hide();

    });
});


$(document).ready(function () {
    $("#editBtn").click(function () {
        $("#classModal").modal();
        $("#deleteButton").hide();
        $("#addButton").hide();
        $("#deleteAllButton").hide();
        $("#exportButton").hide();
        $("#loadButton").hide();

    });
});


$(document).ready(function () {
    $("#exportBtn").click(function () {
        $("#classModal").modal();
        $("#deleteButton").hide();
        $("#editButton").hide();
        $("#deleteAllButton").hide();
        $("#addButton").hide();
        $("#loadButton").hide();

    });
});

$(document).ready(function () {
    $("#loadBtn").click(function () {
        $("#classModal").modal();
        $("#deleteButton").hide();
        $("#editButton").hide();
        $("#deleteAllButton").hide();
        $("#exportButton").hide();
        $("#addButton").hide();

    });
});

$(document).ready(function () {
    $("#deleteAllBtn").click(function () {
        $("#classModal").modal();
        $("#deleteButton").hide();
        $("#editButton").hide();
        $("#addButton").hide();
        $("#exportButton").hide();
        $("#loadButton").hide();

    });
});

//logic for view control
$(document).ready(function() {
    $("#cliView").hide();
    $("#guiView").hide();
    $("#cliViewButton").click(function(){
        $("#cliView").show();
        $("#guiView").hide();

    });
    $("#guiViewButton").click(function(){
        $("#guiView").show();
        $("#cliView").hide();

    });
});