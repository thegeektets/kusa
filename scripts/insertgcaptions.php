<?php
require ('../connection.php');

$sql="INSERT INTO user (gname, caption)

VALUES ('$_POST[gname]','$_POST[caption]')";

if (!mysql_query($sql))
  {
  die('Error: ' . mysql_error());
  }
   else
{
// Redirect

}
//mysqli_close($con);
?> 
</body>
</html>