$(document).ready(function() {
    $("#pullMe").click(function() {
        $("#blindsString").addClass("pulled");
        $("#pullMe").hide();
        $("#blindsDown").addClass("down");
        $(".blindsCollection").hide();
        setTimeout(function() {
            $("#blindsString").removeClass("pulled");
            $("#pullMe").show();
            $("#blindsDown").css("height", "40vh");
        }, 2000);


    });


});
