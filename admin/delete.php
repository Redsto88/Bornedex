<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Suppression - Bornedex</title>
  <link rel="stylesheet" href="../css/admin.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
</head>

<body>
  <?php
  // verifie la session 
  session_start();
  if (!isset($_SESSION['isLogin']) || $_SESSION['isLogin'] == false) {
    header("Location: index.php");
    die();
  }

  //réupère l'id
  if (!isset($_POST['id'])) {
    echo "<p>Erreur: l'id n'est pas rempli</p>";
    echo "<a href='admin.php'>Retour</a>";
    exit;
  }
  $id = $_POST['id'];

  //supprime la borne correspondante dans le fichier javascript ../js/bornes.js
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
    echo "<a href='admin.php'>Retour</a>";
    exit;
  }

  
  
  //cherche l'id de la borne dans le tableau
  $idborne = array_search($borne, $bornes);
  //supprime la ligne
  unset($bornes[$idborne]);

  //réécrit le fichier
  $bornes = implode("\n", $bornes);
  file_put_contents("../js/bornes.js", $bornes);

  //supprime l'image
  unlink("../bornes/$id.jpg");

  ?>


  <h1>La borne a bien été supprimée</h1>
  <a href="admin.php">Retour</a>
</body>

</html>