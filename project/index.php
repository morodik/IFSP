<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IFS</title>
</head>
<body>

    <form action="register.php" method="post">
        <input type="text" placeholder="login" name="login">
        <input type="text" placeholder="email" name="email">
        <input type="text" placeholder="password" name="pass">
        <input type="text" placeholder="repeat password" name="repeatpass">
        <button type="submit">зарегать</button>
    </form>

    <form action="login.php" method="post">
        <input type="text" placeholder="login" name="login" >
        <input type="text" placeholder="password" name="pass">
        <button type="submit">логин</button>
    </form>

</body>
</html>