<?php
	session_start();
	require '../connection.php' ;
	$email	= $_SESSION['email'];
	$query = "SELECT email FROM users WHERE email != '$email'";
	$r = mysql_query($query);

	while($row = mysql_fetch_array($r))
	{
    	$data[] = ($row);
	}
	echo json_encode($data);
?>