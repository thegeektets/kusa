<?php
require '../connection.php' ;
$email = mysql_real_escape_string((htmlspecialchars($_POST['uemail'])));
$password = md5(mysql_real_escape_string((htmlspecialchars($_POST['upass1']))));

$query = "SELECT * from users WHERE email = '$email'";
$r = mysql_query($query);
$rows = mysql_num_rows($r);
 	
if ($rows == 1)
{
  	die("0");
}
else{
	
	$sql="INSERT INTO users (email, password) VALUES ('$email','$password')";

	mysql_query($sql) or die(mysql_error());

	echo "1";

}
  
?> 
