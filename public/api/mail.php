<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$contactno = $_POST['contactno'];
	$to = 'lizzie@breathe-yogameditation.com'; 
	$subject = 'Message from breathe';
	
	$headers = "From: breathe Website" . "\r\n";
	$headers .= "Reply-To: lizzie@breathe-yogameditation.com" . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	$body = 
	"<html>" .
	"<head></head>" .
	"<body>" .
	"<div style='width:600px;'>" .
	"<div>" .
		"<img src='http://www.breathe-yogameditation.com/content/images/breathe-info-white.png' style='height:60%; width:60%;' alt='yoga' />" .
	"</div>" .
	"<div style='display:inline-block;width:600px;margin-bottom:10px;'>" .
		"<div style='display:inline-block; width:100px; color:#099; text-align:right'>Name:</div>" .
		"<div style='display:inline-block; width:485px;padding-left:10px'>$name</div>" .
	"</div>" .
	"<div style='display:inline-block;width:600px;margin-bottom:10px;'>" .
		"<div style='display:inline-block; width:100px; color:#099; text-align:right'>Email:</div>" .
		"<div style='display:inline-block; width:485px;padding-left:10px'>$email</div>" .
	"</div>" .
	"<div style='display:inline-block;width:600px;margin-bottom:10px;'>" .
		"<div style='display:inline-block; width:100px; color:#099; text-align:right'>Contact No:</div>" .
		"<div style='display:inline-block; width:485px;padding-left:10px'>$contactno</div>" .
	"</div>" .
	"<div style='display:inline-block;width:600px;margin-bottom:10px;'>" .
		"<div style='display:inline-block; width:100px; color:#099; text-align:right'>Message:</div>" .
		"<div style='display:inline-block; width:485px; padding-left:10px; vertical-align:top; word-wrap: normal;'>$message</div>" .
	"</div>" .
	"</div>" .
	"</body>" .
	"</html>";

	// If there are no errors, send the email
	if (mail ($to, $subject, $body, $headers)) {
		echo true;
	} else {
		echo false;
	}
?>