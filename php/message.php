<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
$headers = "From: $name\r\nReply-to: $name\r\nContent-type: text/html; charset=utf-8\r\n";
$message= " Пользователь $name просит перезвонить по номеру $phone";
$success = mail("psihologkharkiv@gmail.com", $subject, $message, $headers);
echo $success;
?>