<?php

	require '../connection.php' ;

	$name = mysql_real_escape_string((htmlspecialchars($_POST['event'])));
	$edesc = mysql_real_escape_string((htmlspecialchars($_POST['event-desc'])));
	$venue = mysql_real_escape_string((htmlspecialchars($_POST['venue'])));
	$d = strtotime($_POST['event-date']);

	date_default_timezone_set('Africa/Nairobi');

	$ds = 'Y-m-d';
	$edate = date($ds,$d);

	$query = "INSERT INTO events VALUES (NULL,'$name','$edesc','$venue','$edate',NOW())";
	mysql_query($query) or die(mysql_error());
	echo "1";

?>