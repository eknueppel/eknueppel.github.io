<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $email_from = 'edward.knueppel.jr@gmail.com';
 
  $email_subject = "New Form submission";
 
  $email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".

 
  $to = "edward.knueppel.jr@gmail.com";
 
  $headers = "From: $email_from \r\n";
 
  $headers .= "Reply-To: $visitor_email \r\n";
 
  mail($to,$email_subject,$email_body,$headers);
  error_page   405 =200 @405;
        location @405 {
            root  /htdocs;
            proxy_pass   http://localhost:8080;
        }
 
 ?>
