<?php
	
	require '../connection.php' ;
	$query = 'SELECT * FROM office';
	$r = mysql_query($query);

	while($row = mysql_fetch_array($r))
	{
    	$data[] = ($row);
	}
	echo json_encode($data);
?>