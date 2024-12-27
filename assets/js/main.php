<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['contact-name'];
    $phone = $_POST['contact-phone'];
    $email = $_POST['contact-email'];
    $subject = $_POST['subject'];
    $message = $_POST['contact-message'];

    // Here you can add your email-sending functionality if needed
    // You can use PHP's mail() function, or something like PHPMailer

    // For now, simulate a successful response
    echo "Message sent successfully!";
} else {
    echo "Invalid request";
}
?>
