$(document).ready(function() {
    var dialog = null;
    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            Cancel: function() {
                dialog.dialog("close");
            }
        },
        close: function() {
            form[0].reset();
            allFields.removeClass("ui-state-error");
        }
    });

    /**
     * Implements ajax request to get the user form content
     */
    function getUserFormContent() {
        $.ajax({
            url: 'http://localhost:1234/users/modify-form/5818c2e3804dc77d2a5602dd'
        }).done(function(res) {
            $("#dialog-form").html('what?');
            dialog.dialog("open");
        });
    }

    $("#edit-user").button().on("click", function() {
        getUserFormContent();
    });
});
