<?php
	require '../connection.php' ;

	$name = mysql_real_escape_string((htmlspecialchars($_POST['nexec-name'])));
	$term = mysql_real_escape_string((htmlspecialchars($_POST['term2'])));
	$office = mysql_real_escape_string((htmlspecialchars($_POST['office-non'])));

	$query = "INSERT INTO government VALUES ('$office','$term','$name','','')";

	mysql_query($query) or die(mysql_error());

	echo "1";

?>