<?php

$recepient = "rembtnsk@yandex.ru";
$sitename = "Ремонт бытовой техники";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
// $text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");