<?php
require ('../connection.php');

  	
 	 
  $email=$_POST['email'];
	$password = $_POST['password'];
  $uid = $_POST['uid'];
 
	

$sql =("UPDATE users SET password = '$password',email = '$email' WHERE uid= '$uid' ");
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
?>

