<?php
require ('../connection.php');// Check connection

$nid= $_POST['news-list1'];
	

$sql =("DELETE FROM  news WHERE nid= '$nid'");
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

