<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>php full course</title>
</head>
<body>
<form action="usingCheckbox.php" method='post'>
 Apples: <input type="checkbox" name="fruits[]" value="apples"> <br>
 Oranges: <input type="checkbox" name="fruits[]" value="oranges"> <br>
 Pears: <input type="checkbox" name="fruits[]" value="pears"> <br>
<input type="submit">
</form>

  <?php
 $fruits = $_POST["fruits"];
 echo $fruits[1];
  ?>
</body>
</html>