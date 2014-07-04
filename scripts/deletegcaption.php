<?php
require '../connection.php' ;

 	$gname= $_POST['gname'];
	

$sql =("DELETE FROM  gcaption WHERE gname= '$gname'");
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
?>

