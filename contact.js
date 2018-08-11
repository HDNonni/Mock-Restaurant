$(document).ready(function () {

    $("#colChng").mouseover(function () {
        $("#colChng").css("color", "purple")

    });

    // reg exp function from stack for email validation
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    //message to diplay if input invalid

    $("#submit").click(function () {
        var errorMessage = "";
        var fieldMissing = "";
        if ($("#email").val() == "") {
            fieldMissing += "<br> Email"
        }
        if ($("#phone").val() == "") {
            fieldMissing += "<br> Phone"
        }
        if ($("#password").val() == "") {
            fieldMissing += "<br> Password"
        }
        if ($("#passwordConfirm").val() == "") {
            fieldMissing += "<br> ConfirmPassword"
            if (fieldMissing != "") {
                errorMessage += "<p> The following field(s) are missing:" + fieldMissing + "</p>"
            }
        }
        if (isEmail($("#email").val()) == false) {
            errorMessage += "<p>Your email is not valid</p>"
        }
        if ($.isNumeric($("#phone").val()) == false) {
            errorMessage += "<p> Your phone # is not numeric</p>"

        }
        if ($("#password").val() != ($("#passwordConfirm").val())) {
            errorMessage += "<p>Please try again</p>"
        }
        if (errorMessage != "") {
            $("#errorMessage").html(errorMessage);
        } else if (errorMessage == "") {
            //also can use .show() instead of html... and put message in html
            $("#successMessage").html("<p>Thanks for submitting</p>")
        }


    });
});
