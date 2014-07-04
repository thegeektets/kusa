<?php
	
	require '../connection.php' ;

	$hblog = htmlspecialchars($_POST['adblog']);
	$bdesc = htmlspecialchars($_POST['blogdesc']);

	$query = "INSERT INTO blogs VALUES (NULL,'$hblog','$bdesc')";

	mysql_query($query) or die (mysql_error());

	echo "1"; 


?>