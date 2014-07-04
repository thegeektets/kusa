<?php
require ('../connection.php');
// Check connection

$email= $_POST['del-user'];
	

$sql =("DELETE FROM  users WHERE email= '$email'");
if (!mysql_query($sql))
  {
  die('Error: ' . mysql_error());
  }
   else
{
	echo "1";
}
//mysqli_close($con);
?> 

