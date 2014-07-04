<?php
	
	require '../connection.php' ;

	$url;
	$name = mysql_real_escape_string((htmlspecialchars($_POST['edit-name'])));
	$nar = mysql_real_escape_string((htmlspecialchars($_POST['edit-desc'])));
	$term = mysql_real_escape_string((htmlspecialchars($_POST['sel-term'])));
	$office = mysql_real_escape_string((htmlspecialchars($_POST['sel-office'])));

	if ((empty($_FILES['edit-photo']['name']))){
		$query = "UPDATE government SET cname = '$name',narration = '$nar' WHERE year= '$term' AND oid = '$office'";
		mysql_query($query) or die (mysql_error());
		echo "1";
	}
	else{
		if (($_FILES['edit-photo']['type'] = 'image/gif' || $_FILES['edit-photo']['type'] = 'image/jpg' || $_FILES['exec-photo']['type'] = 'image/jpeg' || $_FILES['edit-photo']['type'] = 'image/png')){
		if (file_exists('../img/uploads/'.$_FILES['edit-photo']['type'])){
			die("File Exists");
		}
		else{
			move_uploaded_file($_FILES['edit-photo']['tmp_name'], "../img/uploads/".$_FILES['edit-photo']['name']) or die ($_FILES['edit-photo']['error']);

			$url = "./img/uploads/".$_FILES['edit-photo']['name'];
			
			$query = "UPDATE government SET cname = '$name',narration = '$nar',url = '$url' WHERE year= '$term' AND oid = '$office'";
			mysql_query($query) or die (mysql_error());
			echo "1";
		}
	}
}
	 


?>