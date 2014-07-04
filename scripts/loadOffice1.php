<?php
	
	require '../connection.php' ;
	$query1 = 'SELECT max(year) FROM government';
	$r1 = mysql_query($query1);
	$yr = mysql_fetch_row($r1);

	$y = $yr[0];

	$query = "SELECT * FROM government WHERE  year = '$y'";
	
	$r = mysql_query($query);

	

	while($row = mysql_fetch_assoc($r))
	{
		$oid = $row["oid"];

		$q3 = "SELECT oname,exec FROM office WHERE oid = '$oid'";

		$r3 = mysql_query($q3);
		$name = mysql_fetch_assoc($r3);
		$oname= $name['oname'];

		$exec = $name['exec'];

		$row['oid'] = $oname;
		$row['exec'] = $exec;
    	$data[]= array_merge_recursive($row);
    	//var_dump ($row);*/
	}
	echo json_encode($data);
?>