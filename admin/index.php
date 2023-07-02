<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin - Bornedex</title>
</head>
<body>
  <form action="" method="post">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <input type="submit" value="Login">
  </form>

  <?php
    if(isset($_POST['username']) && isset($_POST['password'])) {
      $username = $_POST['username'];
      $password = $_POST['password'];

      if($username == "a" && $password == "a") {
        session_start();
        $_SESSION['isLogin'] = true;
        header("Location: admin.php");
      } else {
        echo "Mauvais identifiants";
      }
    }
  ?>

</body>
</html>