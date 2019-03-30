<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>php full course</title>
</head>
<body>
  <form action="BuildingAMadLibsGame.php" method="get">
  Color: <input type="text" name="color"> <br>
  Plurial noun: <input type="text" name="plurialNoun"> <br>
  Celebrity: <input type="text" name="celebrity"> <br>
  <input type="submit">
  </form>
  <?php 
  $color = $_GET["color"];
  $plurialNoun = $_GET["plurialNoun"];
  $celebrity = $_GET["celebrity"]; 
  echo "Roses are $color<br>";
  echo "$plurialNoun are blue <br>";
  echo "I love $celebrity <br>"
  ?>
</body>
</html>