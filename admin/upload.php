<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Upload - Bornedex</title>
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


  // var_dump($_POST);
  // var_dump($_FILES);

  // Vérifie le nom
  if (!isset($_POST['nom'])) {
    echo "<p>Erreur: le nom n'est pas rempli</p>";
    echo "<a href='admin.php'>Retour</a>";
    exit;
  }

  // Vérifie les coordonnées
  if (!isset($_POST['coordonees'])) {
    echo "<p>Erreur: les coordonnées ne sont pas remplies</p>";
    echo "<a href='admin.php'>Retour</a>";
    exit;
  }

  // Vérifie la ville
  if (!isset($_POST['ville'])) {
    echo "<p>Erreur: la ville n'est pas remplie</p>";
    echo "<a href='admin.php'>Retour</a>";
    exit;
  }

  // Vérifie le fichier
  if (!isset($_FILES['file'])) {
    echo "<p>Erreur: le fichier n'est pas rempli</p>";
    echo "<a href='admin.php'>Retour</a>";
    exit;
  }



  // Vérifie que le fichier est bien une image
  $check = getimagesize($_FILES["file"]["tmp_name"]);
  if ($check == false) {
    echo "<p>Erreur: le fichier n'est pas une image</p>";
    echo "<a href='admin.php'>Retour</a>";
    exit;
  }

  // Vérifie que l'image soit un jpg
  $imageFileType = strtolower(pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION));
  if ($imageFileType != "jpg") {
    echo "<p>Erreur: le fichier n'est pas un jpg</p>";
    echo "<a href='admin.php'>Retour</a>";
    exit;
  }

  // Si l'alitude n'est pas renseignée, on met "inconnue"
  if (!isset($_POST['altitude'])) {
    $altitude = "inconnue";
  } else {
    $altitude = $_POST['altitude'];
  }

  // Vérifie les coordonnées et les sépare en x et y
  $coordonees = explode(", ", $_POST['coordonees']);
  if (count($coordonees) != 2) {
    echo "<p>Erreur: les coordonnées ne sont pas au bon format (x, y).<br>Exemple: 1.84, 2.4815</p>";
    echo "<a href='admin.php'>Retour</a>";
    exit;
  }

  $x = $coordonees[0];
  $y = $coordonees[1];

  $nom = $_POST['nom'];
  $ville = $_POST['ville'];
  $wiki = $_POST['wiki'];

  // Lit le fichier bornes.js
  $js = file_get_contents('../js/bornes.js');

  // Récupère le dernier id
  preg_match_all('/"id": ([0-9]+),/', $js, $matches);
  $lastId = max($matches[1]);
  $matches = $matches[1];
  // recherche l'id le plus petit qui n'est pas utilisé
  $idToUse = 0;
  $found = false;
  for ($i = 0; $i < $lastId; $i++) {
    if($i != $matches[$i]){
      $idToUse = $i;
      $found = true;
      break;
    }
  }
  if(!$found){
    $idToUse = $lastId + 1;
  }

  // Ajoute une ligne à l'avant dernière ligne du fichier
  if ($wiki != "") {
    $toAdd = '  { "id": ' . $idToUse . ', "nom": "' . $nom . '", "x": "' . $x . '", "y": "' . $y . '", "alt": "' . $altitude . '", "ville": "' . $ville . '", "wiki": "' . $wiki . '"},';
  } else {
    $toAdd = '  { "id": ' . $idToUse . ', "nom": "' . $nom . '", "x": "' . $x . '", "y": "' . $y . '", "alt": "' . $altitude . '", "ville": "' . $ville . '"},';
  }


  $lines = explode("\n", $js);
  array_splice($lines, -1, 0, $toAdd);
  $js = implode("\n", $lines);
  file_put_contents('../js/bornes.js', $js);


  // save file to uploads folder
  $target_dir = "../bornes/";
  $target_file = $target_dir . $idToUse . ".jpg";
  move_uploaded_file($_FILES["file"]["tmp_name"], $target_file);

  ?>

  <p>Upload réussi avec l'id <?php echo $idToUse ?></p>
  <a href="admin.php">Retour</a>

</body>

</html>