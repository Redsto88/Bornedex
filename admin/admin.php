<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Administration - Bornedex</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../lib/leaflet/leaflet.css"/>
  <link rel="stylesheet" href="../css/admin.css">
</head>

<body>
  <?php
  session_start();
  if (!isset($_SESSION['isLogin']) || $_SESSION['isLogin'] == false) {
    header("Location: index.php");
    die();
  }

  ?>

  <h1>Admin</h1>

  <h2>Ajouter une borne</h2>

  <div class="table">
    <form action="upload.php" method="post" enctype="multipart/form-data">
      <label for="nom">Nom :</label>
      <input type="text" name="nom" id="nom">

      <div class="sep"></div>

      <label for="coordonees">Coordonnées :</label>
      <input type="text" name="coordonees" id="coordonees" placeholder="x, y">

      <div class="sep"></div>

      <label for="alt">Altitude :</label>
      <input type="text" name="alt" id="alt" placeholder="inconnue">

      <div class="sep"></div>

      <label for="ville">Ville :</label>
      <input type="text" name="ville" id="ville">

      <div class="sep"></div>

      <label for="wiki">Wikipédia :</label>
      <input type="text" name="wiki" id="wiki" placeholder="https://fr.wikipedia.org/wiki/...">

      <div class="sep"></div>

      <label for="file">Fichier :</label>
      <input type="file" name="file">

      <div class="sep"></div>

      <input type="submit" value="Upload">
    </form>
    <div class="div">
      <div id="map"></div>
      <a href="javascript:teleportToMarker()">Retourner à la borne</a>
    </div>
  </div>

  <h2>Modifier une borne</h2>

  <form action="edit.php" method="get">
    <label for="id">Id :</label>
    <input type="number" name="id" id="id">
    <div class="sep"></div>
    <input type="submit" value="Modifier">
  </form>

  <a href="logout.php">Logout</a>


  <script src="../lib/leaflet/leaflet.js"></script>
  <script src="../js/admin-map.js"></script>
</body>

</html>