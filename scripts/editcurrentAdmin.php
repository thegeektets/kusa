<?php
require ('../connection.php');
  	
 	
	$position = $_POST['position'];
	$photo = $_POST['photo'];
	$speech = $_POST['speech'];
    $name = $_POST['name'];

$sql =("UPDATE currentgovernment SET position = '$position',photo = '$photo',speech = '$speech',cname = '$name' WHERE position= '$position' ");
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

