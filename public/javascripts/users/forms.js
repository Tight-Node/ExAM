$(document).ready(function() {
    // var dialog = null;
    // dialog = $("#dialog-form").dialog({
    //     autoOpen: false,
    //     height: 400,
    //     width: 350,
    //     modal: true,
    //     buttons: {
    //         "Create an account": addUser,
    //         Cancel: function() {
    //             dialog.dialog("close");
    //         }
    //     },
    //     close: function() {
    //         form[0].reset();
    //         allFields.removeClass("ui-state-error");
    //     }
    // });
    $("#create-user").button().on("click", function() {
        console.log('Creating as soon as possible');
        // dialog.load('http://localhost:1234/users/modify-form/').dialog("open");
    });
})
