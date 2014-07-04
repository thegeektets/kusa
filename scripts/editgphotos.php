<?php
require ('../connection.php');
	
	$gurl = $_POST['gurl'];
  $gid=$_POST['gid'];
	

$sql =("UPDATE gcaptions SET gurl = '$gurl' WHERE gid= '$gid' ");
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

