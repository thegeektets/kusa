<?php
require ('../connection.php');
 	
	$gname = $_POST['gname'];
  $caption=$_POST['caption'];
  $gid=$_POST['gid'];
	

$sql =("UPDATE gcaptions SET gname = '$gname',caption = '$caption' WHERE gid= '$gid' ");
if (!mysql_query($$sql))
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

