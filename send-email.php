<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Odbieranie danych z formularza
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Sprawdzanie poprawności e-maila
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }

    // Przygotowanie treści wiadomości
    $to = "marwozniak01@gmail.com"; // Twój adres e-mail
    $subject = "New message from $firstname $lastname";
    $body = "You have received a new message from $firstname $lastname.\n\n".
            "Email: $email\n\n".
            "Message:\n$message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Wysyłanie e-maila
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request method.";
}
?>
