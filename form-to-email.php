<?php
  $name = $_GET['name'];
  $visitor_email = $_GET['email'];
  $message = $_GET['message'];

  $email_from = 'edward.knueppel.jr@gmail.com';
 
  $email_subject = "New Form submission";
 
  $email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".

 
  $to = "edward.knueppel.jr@gmail.com";
 
  $headers = "From: $email_from \r\n";
 
  $headers .= "Reply-To: $visitor_email \r\n";
 
  mail($to,$email_subject,$email_body,$headers);
 
 ?>
