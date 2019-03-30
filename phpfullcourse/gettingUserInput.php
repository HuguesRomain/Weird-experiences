<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>php full course</title>
</head>
<body>
  <form action="gettingUserInput.php" method="get">
  Name: <input type="text" name="username" placeholder="Your name">
  Age: <input type="text" name="age" placeholder="Your age">
  <input type="submit">
  </form>
  <br>
  So your name is
  <?php 
  echo $_GET["username"]
  ?>
  and you are 
  <?php 
  echo $_GET["age"]
  ?>
</body>
</html>