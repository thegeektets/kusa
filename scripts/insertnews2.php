<?php
require '../connection.php' ;
$sql="INSERT INTO news (description) VALUES ('$_POST[news]')";

mysql_query($sql) or die (mysql_error());

echo "1";
?> 
