function formSubmit(){
    let formAlert = document.getElementById("form-alert")
    let formName = document.getElementById("form-name")
    let formEmail = document.getElementById("form-email")
    let formMessage = document.getElementById("form-message")
    //no name
    if (formName.value === "" || formEmail.value === "" || formMessage.value === ""){
        formAlert.innerHTML = "Proszę wypełnić wszystkie pola";
    }        
    else {
        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        
        function validate() {
            var email = document.getElementById("form-email").value;
        
            if (validateEmail(email)) {
                document.getElementById('contact-form').submit();
                formAlert.innerHTML = "Wiadomość została wysłana!";
                formName.value = "";
                formEmail.value = "";
                formMessage.value = "";
            } 
            //invalid email adress
            else {
                formAlert.innerHTML = "Wpisany email jest nieprawidłowy!";
            }
            return false;
        }  
    validate(); 
    }
}    
//Contact submit click listener
document.getElementById("form-button").addEventListener("click", formSubmit);

// $(function() {
//     // Get the form.
//     var form = document.getElementById('contact-form');

//     // Get the messages div.
//     var formMessages = document.getElementById('form-alert');

//     // TODO: The rest of the code will go here...
//     $(form).submit(function(event) {
//         // Stop the browser from submitting the form.
//         event.preventDefault();
    
//         // TODO
//     });
//     // Serialize the form data.
//     var formData = $(form).serialize();

//     // Submit the form using AJAX.
//     $.ajax({
//         type: 'POST',
//         url: $(form).attr('action'),
//         data: formData
//     })
// });


