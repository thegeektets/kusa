<?php
require '../connection.php' ;

$hdr = mysql_real_escape_string((htmlspecialchars($_POST['nhdr'])));
$new = mysql_real_escape_string((htmlspecialchars($_POST['news'])));
date_default_timezone_set('Africa/Nairobi');

$sql="INSERT INTO news VALUES (NULL,'$hdr','$new',NOW())";

mysql_query($sql) or die (mysql_error());

echo "1";
?> 
