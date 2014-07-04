<?php
	
	session_start();
	require '../connection.php' ;

		$email = mysql_real_escape_string(htmlspecialchars($_POST["uname"]));
  		$pword = md5(mysql_real_escape_string(htmlspecialchars($_POST["pass"])));

		$query = "SELECT * from users WHERE email = '$email' and password = '$pword'";
  		$r = mysql_query($query);
  		$rows = mysql_num_rows($r);
  		if ($rows == 1)
  		{
  			$rs = mysql_fetch_array($r);
     		$_SESSION ['login'] = '1';
     		$_SESSION['email'] = $rs['email'];
    		echo "1";
  		}
   		else 
	
  			echo "Login Error";



	
?>