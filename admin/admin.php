<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
    session_start();
    if(!isset($_SESSION['isLogin']) || $_SESSION['isLogin'] == false) {
      header("Location: index.php");
      die();
    }

  ?>

  <h1>Admin</h1>

  <h2>Ajouter une borne</h2>

  <form action="upload.php" method="post" enctype="multipart/form-data">
    <label for="nom">Nom:</label>
    <input type="text" name="nom" id="nom">
    <br>
    <label for="coordonees">Coordonees:</label>
    <input type="text" name="coordonees" id="coordonees" placeholder="x, y">
    <br>
    <label for="alt">Altitute:</label>
    <input type="text" name="alt" id="alt" placeholder="inconnue">
    <br>
    <label for="ville">Ville:</label>
    <input type="text" name="ville" id="ville">
    <br>
    <label for="wiki">Wikipédia:</label>
    <input type="text" name="wiki" id="wiki" placeholder="https://fr.wikipedia.org/wiki/...">
    <br>
    <label for="file">Filename:</label>
    <input type="file" name="file">
    <input type="submit" value="Upload">
  </form>

  <h2>Modifier une borne</h2>

  <form action="edit.php" method="get">
    <label for="id">id:</label>
    <input type="number" name="id" id="id">
    <input type="submit" value="Modifier">
  </form>

  <a href="logout.php">Logout</a>

</body>
</html>