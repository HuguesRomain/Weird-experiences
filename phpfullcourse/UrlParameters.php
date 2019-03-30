<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>php full course</title>
</head>
<body>
<form action="UrlParameters.php" method="post">
  Password: <input type="password" name="password" placeholder="Your name"> <br>
  <input type="submit"> <br>
  <?php
  echo $_POST["password"]
  ?>
</body>
</html>