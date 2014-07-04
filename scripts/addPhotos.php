<?php
	

	// validate file

	if (($_FILES['surl']['type'] = 'image/gif' || $_FILES['surl']['type'] = 'image/jpg' || $_FILES['surl']['type'] = 'image/jpeg' || $_FILES['surl']['type'] = 'image/png')){
		if (file_exists('../img/uploads/slider/'.$_FILES['surl']['type'])){
			die("File Exists");
		}
		else{
			move_uploaded_file($_FILES['surl']['tmp_name'], "../img/uploads/slider/".$_FILES['surl']['name']) or die ($_FILES['surl']['error']);

			require '../connection.php' ;
			$url = "./img/uploads/slider/".$_FILES['surl']['name'];
			$caption = mysql_real_escape_string((htmlspecialchars($_POST['scaption'])));


			$query = "INSERT INTO slider VALUES(NULL,'$caption','$url')";

			mysql_query($query) or die (mysql_error());

			echo "1";
		}
	}

?>