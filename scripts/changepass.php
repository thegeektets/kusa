<?php
	session_start();
require '../connection.php' ;

	$email = $_SESSION['email'];
	$pword = md5(mysql_real_escape_string((htmlspecialchars($_POST['cpass']))));

	$query = "SELECT * from users WHERE email = '$email' and password = '$pword'";
  	$r = mysql_query($query);
  	$rows = mysql_num_rows($r);
 	
  	if ($rows == 1)
  	{
  		$rs = mysql_fetch_array($r);
     	$id = $rs['uid'];

     	$pass = md5(mysql_real_escape_string((htmlspecialchars($_POST['pass1']))));

     	$q2 = ("UPDATE users SET password = '$pass' WHERE uid= '$id' "); 
     	mysql_query($q2) or die (mysql_error());
     	echo "1";
  	}
  	else{
  		echo "0";
  	}
  

?>