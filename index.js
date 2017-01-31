$(document).ready(function() {
    $("#pullMe").click(function() {
        $("#blindsString").addClass("pulled");
        $("#pullMe").hide();
        setTimeout(function() {
            $("#blindsString").removeClass("pulled");
            $("#pullMe").show();
        }, 2000);
    });

});
