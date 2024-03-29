<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registerUser";
$conn = mysqli_connect($server, $username, $password, $dbname);

if(!$conn){
    die( "Fail". mysqli_connect_error());
} else {
   "Ok"; //echo можно убрать нужно только для теста работоспособности
} ?>