<?php
require ('../connection.php');
// Check connection

$picid= $_POST['delete-slide'];
	

$sql =("DELETE FROM  slider WHERE picid= '$picid'");
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

