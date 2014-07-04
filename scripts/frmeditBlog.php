<?php
  
  require '../connection.php' ;

  $bid = mysql_real_escape_string((htmlspecialchars($_POST['edblog'])));
  $edesc = mysql_real_escape_string((htmlspecialchars($_POST['edesc'])));
  $bname =  mysql_real_escape_string((htmlspecialchars($_POST['nbname'])));

  $query = "UPDATE blogs SET blogname = '$bname',descrip = '$edesc' WHERE bid= '$bid'";
  mysql_query($query) or die (mysql_error());
  echo "1";

?>