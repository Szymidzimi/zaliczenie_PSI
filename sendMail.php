<?php
    $mailAdmin="szymcio5130@gmail.com";
    $title="wiadomość od Pani/Pana ".$_POST["userNick"]."nr tel: ".$_POST["phoneNumber"];
    $headers="Od ".$_POST['emailAdressUser']."\nContent-Type:".' text/plain;charset="ISO-8859-2"'."\nContent-Transfer-Encoding: 8bit";
    if(mail($mailAdmin, $title,$_POST["messageContent"],$headers)){
        print "<span claas='ok'>Wiadomość wysłano poprawnie</span>";
    }
    else{
        print "<span claas='bad'>Wiadomości NIE wysłoano poprawnie</span>";
    }
?>