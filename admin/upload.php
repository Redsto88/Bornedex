<?php

// verifie la session 
session_start();
if(!isset($_SESSION['isLogin']) || $_SESSION['isLogin'] == false) {
  header("Location: index.php");
  die();
}


// var_dump($_POST);
// var_dump($_FILES);

// Vérifie le nom
if (!isset($_POST['nom'])) {
  echo "Erreur: le nom n'est pas rempli";
  echo "<a href='admin.php'>Retour</a>";
  exit;
}

// Vérifie les coordonnées
if (!isset($_POST['coordonees'])) {
  echo "Erreur: les coordonnées ne sont pas remplies";
  echo "<a href='admin.php'>Retour</a>";
  exit;
}

// Vérifie la ville
if (!isset($_POST['ville'])) {
  echo "Erreur: la ville n'est pas remplie";
  echo "<a href='admin.php'>Retour</a>";
  exit;
}

// Vérifie le fichier
if (!isset($_FILES['file'])) {
  echo "Erreur: le fichier n'est pas rempli";
  echo "<a href='admin.php'>Retour</a>";
  exit;
}



// Vérifie que le fichier est bien une image
$check = getimagesize($_FILES["file"]["tmp_name"]);
if ($check == false) {
  echo "Erreur: le fichier n'est pas une image";
  echo "<a href='admin.php'>Retour</a>";
  exit;
}

// Vérifie que l'image soit un jpg
$imageFileType = strtolower(pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION));
if ($imageFileType != "jpg") {
  echo "Erreur: le fichier n'est pas un jpg";
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
  echo "Erreur: les coordonnées ne sont pas au bon format (x, y). Exemple: 1.84, 2.4815";
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
$idToUse = $lastId + 1;

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

<p>Upload réussi</p>
<a href="admin.php">Retour</a>