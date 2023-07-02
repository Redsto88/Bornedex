<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edition - Bornedex</title>
  <link rel="stylesheet" href="../css/admin.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
</head>

<body>
  <?php
  // verfie la session
  session_start();
  if (!isset($_SESSION['isLogin']) || $_SESSION['isLogin'] == false) {
    header("Location: index.php");
    die();
  }

  //récupère l'id
  if (!isset($_GET['id'])) {
    echo "<p>Erreur: l'id n'est pas rempli</p>";
    exit;
  }
  $id = $_GET['id'];

  echo "<h1>Edition de la borne $id</h1>";

  //récupère les infos de la borne d'id $id dans le fichier javascript ../js/bornes.js
  $bornes = file_get_contents("../js/bornes.js");
  //lit le fichier ligne par ligne et récupère la ligne qui contient l'id
  $borne = "";
  $bornes = explode("\n", $bornes);
  foreach ($bornes as $b) {
    if (strpos($b,  '"id": ' . $id . '') !== false) {
      $borne = $b;
      break;
    }
  }
  //si la borne n'existe pas, on affiche une erreur
  if ($borne == "") {
    echo "<p>Erreur: la borne n'existe pas</p>";
    exit;
  }

  //récupère les infos de la borne
  $nom = explode('"nom": "', $borne)[1];
  $nom = explode('",', $nom)[0];
  $x = explode('"x": ', $borne)[1];
  $x = explode(',', $x)[0];
  $y = explode('"y": ', $borne)[1];
  $y = explode(',', $y)[0];
  $coordonees = "$x, $y";
  //enlève les guillemets
  $coordonees = str_replace('"', '', $coordonees);
  $altitude = explode('"alt": "', $borne)[1];
  $altitude = explode('",', $altitude)[0];
  $ville = explode('"ville": "', $borne)[1];
  $ville = explode('",', $ville)[0];
  $ville = explode('" }', $ville)[0];
  try {
    $wiki = explode('"wiki": "', $borne)[1];
    $wiki = explode('" }', $wiki)[0];
  } catch (Exception $e) {
    $wiki = "";
  }




  //affiche le formulaire

  ?>

  <form action="subedit.php" method="post">
    <input type="hidden" name="id" id="id" value="<?php echo $id ?>">
    <label for="nom">Nom:</label>
    <input type="text" name="nom" id="nom" value="<?php echo $nom ?>">
    <br>
    <label for="coordonees">Coordonees:</label>
    <input type="text" name="coordonees" id="coordonees" value="<?php echo $coordonees ?>">
    <br>
    <label for="alt">Altitude:</label>
    <input type="text" name="altitude" id="altitude" value="<?php echo $altitude ?>">
    <br>
    <label for="ville">Ville:</label>
    <input type="text" name="ville" id="ville" value="<?php echo $ville ?>">
    <br>
    <label for="wiki">Wikipédia:</label>
    <input type="text" name="wiki" id="wiki" value="<?php echo $wiki ?>">
    <br>
    <input type="submit" value="Modifier">
  </form>

  <form action="delete.php" method="post">
    <input type="hidden" name="id" id="id" value="<?php echo $id ?>">
    <input class="btn-danger" type="submit" value="Supprimer">
  </form>

  <a href="admin.php">Retour</a>

</body>

</html>