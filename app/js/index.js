$(document).ready(function() {
    $(".toAnimation").hide();
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

    $(".toAbout").click(function() {
        $(".room").animate({
            "margin-top": "-=85vh"
        });
        $(".room").css("z-index", -1);
        $(".toAbout").hide();
        $(".toAnimation").show();

    });


    $(".toAnimation").click(function() {
        $(".room").animate({
            "margin-top": "+=85vh"
        });
        $(".room").css("z-index", 1);
        $(".toAbout").show();
        $(".toAnimation").hide();
    })

    $(".bookshelf").click(function() {
        window.open("https://www.goodreads.com/user/show/2133967-naomi");
    })
});
