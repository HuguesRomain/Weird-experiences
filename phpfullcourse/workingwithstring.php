<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>php full course</title>
</head>
<body>
  <?php
  $phrase = "this is a phrase";
  echo strtoupper($phrase);
  echo strtolower($phrase);
  echo $phrase[0]; 
  echo str_replace("this", "ceci", $phrase);
  echo substr($phrase, 8, 3);
  ?>
</body>
</html>