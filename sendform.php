<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim(strip_tags($_POST["name"]));
    $number = trim(strip_tags($_POST["number"]));
    $time = trim(strip_tags($_POST["time"]));

    $to = "art.kotov1@gmail.com";
    $subject = "АРЕНДА";
    $message = "Имя: $name\r\nТелефон: $number\r\nЗвонить: $time";
    $headers = "Content-type: text/html; charset = utf-8";

    mail($to, $subject, $message, $headers);
    echo "Спасибо! Вы успешно зарегистрировались.";
}
