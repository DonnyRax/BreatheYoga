<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$contactno = $_POST['contactno'];
	$from = 'breathe Contact Form'; 
	$to = 'rakesh.chotalia@gmail.com'; 
	$subject = 'Message from breathe';
	
	$body = "From: $name\nEmail: $email\nContact No: $contactno\n\n\nMessage:\n\n$message";

	// If there are no errors, send the email
	if (mail ($to, $subject, $body, $from)) {
		echo true;
	} else {
		echo false;
	}
?>