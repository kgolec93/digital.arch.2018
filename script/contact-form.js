$(function() {
    var form = document.getElementById('contact-form');
    var formMessages = document.getElementById('form-alert');

    $(form).submit(function(event) {
        event.preventDefault();
        var formData = $("#contact-form").serialize();
        $.ajax({
            type: 'POST',
            url: $("#contact-form").attr('action'),
            data: formData
        })
        .done(function(response) {
            $(formMessages).text(response);

            $('#form-name').val('');
            $('#form-email').val('');
            $('#form-message').val('');
        })
        .fail(function(data) {

            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Wystąpił błąd i wiadomość nie została wysłana');
            }
        });
    });
       
});


