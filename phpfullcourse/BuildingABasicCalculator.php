<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>php full course</title>
</head>
<body>
  <form action="BuildingABasicCalculator.php" method="get">
  First number : <input type="number" name="num1">
  <br>
  Second number : <input type="number" name="num2">
  <input type="submit">
  <br>
  Result: 
  <?php 
  echo $_GET["num1"] + $_GET["num2"];
  ?>
  </form>
</body>
</html>