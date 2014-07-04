<?php
 
  require '../connection.php';

$picid= $_POST['delblog'];
	

$sql =("DELETE FROM  blogs WHERE bid = '$picid'");
if(mysql_query($sql) or die (mysql_error())){
  
  echo "1";
 
}
else{
	
	echo "0";
	
}
//mysqli_close($con);
?>
