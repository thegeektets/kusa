<?php
	
	require '../connection.php' ;

	$name = $_POST['edit-name2'];
	$term = mysql_real_escape_string(($_POST['sel-term2']));
	$office = mysql_real_escape_string(($_POST['sel-office2']));

	$query = "UPDATE government SET cname = '$name' WHERE year= '$term' AND oid = '$office'";
	mysql_query($query) or die(mysql_error());
	echo "1";
?>