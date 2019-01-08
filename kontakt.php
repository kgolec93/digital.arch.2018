<?php
$name = $_POST['form-name'];
$email = $_POST['form-email'];
$message = $_POST['form-message'];
$sender = "digitalarch@digitalarch.pl";
$reciever = "digitalarch@digitalarch.pl";
$title = "Formularz kontaktowy digital.ARCH";

$messageValue = "";
$messageValue .= "Imię i nazwisko: " . $name . "\n";
$messageValue .= "Email nadawcy: " . $email . "\n";
$messageValue .= "Wiadomość: " . $message . "\n";

$header = "";
$header .= "Od: " . $email . "\n";
$header .= "Content-Type:text/plain;charset=utf-8";

$success = mail($reciever, $title, $messageValue, $header);

if ($success){
    print "<meta http-equiv=\"refresh\" content=\"0;URL=kontakt-sukces.html\">";
}
// else{
//     print "<meta http-equiv=\"refresh\" content=\"0;URL=kontakt-error.html\">";
// }
?>
