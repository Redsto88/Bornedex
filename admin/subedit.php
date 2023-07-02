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

//récupère l'id
if (!isset($_POST['id'])) {
  echo "<p>Erreur: l'id n'a pas été transmit</p>";
  exit;
}
$idToUse = $_POST['id'];

// Ajoute une ligne à l'avant dernière ligne du fichier
if ($wiki != "") {
  $toAdd = '"id": ' . $idToUse . ', "nom": "' . $nom . '", "x": "' . $x . '", "y": "' . $y . '", "alt": "' . $altitude . '", "ville": "' . $ville . '", "wiki": "' . $wiki . '"';
  $js = file_get_contents('../js/bornes.js');
  $js = preg_replace('/"id": ' . $idToUse . ', "nom": ".*", "x": ".*", "y": ".*", "alt": ".*", "ville": ".*", "wiki": ".*"/', $toAdd, $js);
} else {
  $toAdd = '"id": ' . $idToUse . ', "nom": "' . $nom . '", "x": "' . $x . '", "y": "' . $y . '", "alt": "' . $altitude . '", "ville": "' . $ville . '"';
  $js = file_get_contents('../js/bornes.js');
  $js = preg_replace('/"id": ' . $idToUse . ', "nom": ".*", "x": ".*", "y": ".*", "alt": ".*", "ville": ".*"/', $toAdd, $js);
}

file_put_contents('../js/bornes.js', $js);


?>

<p>Upload réussi</p>
<a href="admin.php">Retour</a>