<?php
require ('../connection.php');
// Check connection

 	$name= $_POST['name'];
	

$sql =("DELETE FROM  currentgovernment WHERE name= '$name'");
if (!mysql_query($sql))
  {
  die('Error: ' . mysql_error());
  }
   else
{
// Redirect
//Header("Location: index.html#tologin");
}
//mysqli_close($con); 
?>

