<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connexion - Bornedex</title>
  <link rel="stylesheet" href="../css/admin.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
</head>

<body>
  <h1>Admin - Connexion</h1>
  <form action="" method="post">
    <label for="username">Username :</label>
    <input type="text" name="username" placeholder="Username">
    <div class="sep"></div>
    <label for="password">Password :</label>
    <input type="password" name="password" placeholder="Password">
    <div class="sep"></div>
    <input type="submit" value="Login">
  </form>

  <?php
  if (isset($_POST['username']) && isset($_POST['password'])) {
    $inputUsername = $_POST['username'];
    $inputPassword = $_POST['password'];

    include("password.php");


    if ($username == $inputUsername && $password == $inputPassword) {
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