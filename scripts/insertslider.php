<?php
require ('../connection.php');

$sql="INSERT INTO slider (caption, photo)
VALUES ('$_POST[caption]','$_POST[photo]')";

if (!mysqli_query($sql))
  {
  die('Error: ' . mysqli_error());
  }
   else
{
// Redirect

}
//mysqli_close($con);
?> 
</body>
</html>