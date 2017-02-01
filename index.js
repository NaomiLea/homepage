$(document).ready(function() {
    $("#pullMe").click(function() {
        $("#blindsString").addClass("pulled");
        $("#pullMe").hide();

        if (!$("#blindsDown").hasClass("down")) {

            $("#blindsDown").addClass("down");
            $("#blindsDown").removeClass("up");
            $(".blindsCollection").hide();
            setTimeout(function() {
                $("#blindsDown").css("height", "40vh");
            }, 2000);
        } else {
            $("#blindsDown").removeClass("down");
            $("#blindsDown").addClass("up");

            setTimeout(function() {
                $(".blindsCollection").show();
                $("#blindsDown").css("height", "0vh");
            }, 2000);
        }

        setTimeout(function() {
            $("#blindsString").removeClass("pulled");
            $("#pullMe").show();
        }, 2000);


    });


});
