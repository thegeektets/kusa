<?php
	
	require '../connection.php' ;
	$query = 'SELECT * FROM blogs ORDER BY bid DESC LIMIT 5';
	$r = mysql_query($query);

	while($row = mysql_fetch_assoc($r))
	{
    	$data[] = ($row);
	}
	echo json_encode($data);
?>