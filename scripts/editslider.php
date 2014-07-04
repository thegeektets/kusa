<?php
require ('../connection.php');
// Check connection
 	 
   $caption=$_POST['caption'];
	$photo = $_POST['photo'];
  $gid = $_POST['gid'];
 
	

$sql =("UPDATE slider SET photo = '$photo',caption = '$caption' WHERE gid= '$gid' ");
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

