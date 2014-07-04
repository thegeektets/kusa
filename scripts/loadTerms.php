<?php
	
	require '../connection.php' ;
	$query = "SELECT DISTINCT year FROM government";
	$r = mysql_query($query);

	while($row = mysql_fetch_assoc($r))
	{
    	$data[] = ($row);
	}
	echo json_encode($data);

?>