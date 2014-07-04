<?php
  
  require '../connection.php' ;

  $nid = htmlspecialchars($_POST['news-list2']);
  $ndesc = mysql_real_escape_string((htmlspecialchars($_POST['news-update'])));
  $nhdr = mysql_real_escape_string((htmlspecialchars($_POST['hdr-update'])));
  
  $query = "UPDATE news SET header = '$nhdr', description = '$ndesc' WHERE nid= '$nid'";
  mysql_query($query) or die (mysql_error());
  echo "1";

?>
