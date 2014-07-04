<?php
	
	$term = $_GET['term'];
	$office = $_GET['office'];

	if ($term!= '' && $term != null && $office != '' && $office != null){
		require '../connection.php' ;
		$query = "SELECT * FROM government WHERE oid = '$office' AND year = '$term'";

		$r = mysql_query($query) or die(mysql_error());

		if (mysql_num_rows($r)==1){
			$rs = mysql_fetch_assoc($r);
			echo json_encode($rs);	
		}
		else{
			echo "0";
	  	}	
	}
	else{
		echo "0";
	}
	


?>