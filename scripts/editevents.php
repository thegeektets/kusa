<?php
  
  require '../connection.php' ;

  $eid = htmlspecialchars($_POST['event-list']);
  $edesc = mysql_real_escape_string((htmlspecialchars($_POST['event-update'])));
  $venue = mysql_real_escape_string((htmlspecialchars($_POST['event-venue'])));

  date_default_timezone_set('Africa/Nairobi');

  $d = strtotime($_POST['event-date2']);

  $ds = 'Y-m-d';
  $edate = date($ds,$d);

  $query = "UPDATE events SET edesc = '$edesc',venue = '$venue', date = '$edate'  WHERE eid= '$eid'";
  mysql_query($query) or die (mysql_error());
  echo "1";

?>