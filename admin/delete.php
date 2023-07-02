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

//supprime la ligne
$bornes = str_replace($borne, "", $bornes);
//réécrit le fichier
$bornes = implode("\n", $bornes);
file_put_contents("../js/bornes.js", $bornes);

//supprime l'image
unlink("../bornes/$id.jpg");

?>

<h1>La borne a bien été supprimée</h1>
<a href="admin.php">Retour</a>