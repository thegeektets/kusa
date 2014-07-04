<?php
	
	require '../connection.php' ;

	$office = mysql_real_escape_string(htmlspecialchars($_POST['office']));
	$type = mysql_real_escape_string((htmlspecialchars($_POST['o-type'])));

	$query = "INSERT INTO office VALUES (NULL,'$office','$type')";

	mysql_query($query) or die (mysql_error());

	echo "1"; 


?>