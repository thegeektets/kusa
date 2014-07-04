<?php
	require ('../connection.php');
$eid= $_POST['event-delete'];
	

$sql =("DELETE FROM  events WHERE eid= '$eid'");
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

