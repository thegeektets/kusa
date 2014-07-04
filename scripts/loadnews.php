<?php
	
	require '../connection.php' ;
	$query = 'SELECT * FROM news';
	$r = mysql_query($query);

	while($row = mysql_fetch_assoc($r))
	{
    	$data[] = ($row);
	}
	echo json_encode($data);
?>