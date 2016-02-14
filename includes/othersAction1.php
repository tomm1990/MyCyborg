<?php
    include('db.php');
    $query = "Select * from robotsTable_221 ORDER BY `r.id` ASC LIMIT 12,10 ";
    $result = mysqli_query($connection , $query);
    if( !$result ){
        die("DB query failed from action.php");
    }

    while( $row = mysqli_fetch_assoc($result) ){
        $query = "Select * from robotsTable_221 ORDER BY `r.id` ASC LIMIT 12,10 ";
    }
        mysqli_free_result($result);
		mysqli_close($connection);
?>
