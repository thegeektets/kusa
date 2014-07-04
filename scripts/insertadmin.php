<?php
require ('../connection.php');

$sql="INSERT INTO user (position, photo, speech,name)
VALUES ('$_POST[position]','$_POST[photo]','$_POST[speech]','$_POST[name]')";

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
