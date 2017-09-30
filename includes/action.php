<?php
    include('db.php');

    $query = "Select * from robotsTable_221 ORDER BY `r.id` ASC";

    $result = mysqli_query($connection , $query);
    if( !$result ){
        die("DB query failed from action.php");
    }
    $myArray = array();
    while( $row = mysqli_fetch_assoc($result) ){
        $myArray[] = $row;
        //echo json_encode($row);
//            echo "<section class='secw' style='background:url(images/".$row["r.pic"].") no-repeat;' data-url='order.html?robotId=".$row["r.id"]."'>";
//            echo "<div id='d1'><h2>".$row["r.name"]."</h2></div>";
//            echo "</section>";
    }
    echo json_encode($myArray);

    mysqli_free_result($result);
    mysqli_close($connection);
?>
