<?php
require ('../connection.php');// Check connection

 	$gurl= $_POST['gurl'];
	

$sql =("DELETE FROM  gphotos WHERE gurl= '$gurl'");
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

