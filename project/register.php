
<?php
require_once('db.php');
$login = $_POST['login'];
$pass = $_POST['pass'];
$repeatpass = $_POST['repeatpass'];
$email = $_POST['email'];
if (empty($login) || empty($pass) || empty($repeatpass) || empty($email)) {
    echo "заполните все";
}
else {
    if($pass != $repeatpass){
        echo "не совпадают пароли";
    }
    else {
        $sql = "INSERT INTO `Users`(login, pass, email) VALUES ('$login','$pass','$email')";
        
        if($conn -> query($sql) === TRUE){
            echo "вы зарегестрировались";
            
        }
        else {
            echo "что-то пошло не так" . $conn->error;
        }
    }
}