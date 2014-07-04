<?php
require ('../connection.php');

$sql="INSERT INTO gphoto (gurl)
VALUES ('$_POST[gurl]')";

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