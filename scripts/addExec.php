<?php
	
	require '../connection.php' ;

		$t1 = $_POST['term1'];
		$t2 = str_replace('-', '/', $t1);
		$office = mysql_real_escape_string(htmlspecialchars($_POST['office-exec']));
		$name = mysql_real_escape_string(htmlspecialchars($_POST['exec-name']));
		$term = mysql_real_escape_string(htmlspecialchars($t2));
		$nar = mysql_real_escape_string(htmlspecialchars($_POST['enarration']));

	$q1 = "SELECT * FROM government WHERE year = '$term' AND oid = '$office'";
	$rs = mysql_query($q1);
	if (mysql_num_rows($rs) != 0){
		die("2");
	}
	else{
		// validate file

	if (($_FILES['exec-photo']['type'] = 'image/gif' || $_FILES['exec-photo']['type'] = 'image/jpg' || $_FILES['exec-photo']['type'] = 'image/jpeg' || $_FILES['exec-photo']['type'] = 'image/png')){
		if (file_exists('../img/uploads/'.$_FILES['exec-photo']['type'])){
			die("File Exists");
		}
		else{
			move_uploaded_file($_FILES['exec-photo']['tmp_name'], "../img/uploads/".$_FILES['exec-photo']['name']) or die ($_FILES['exec-photo']['error']);

			$url = "./img/uploads/".$_FILES['exec-photo']['name'];
			

			
			$query = "INSERT INTO government VALUES('$office','$term','$name','$nar','$url')";

			mysql_query($query) or die (mysql_error());

			echo "1";
		}
	}
	
	}
	
?>