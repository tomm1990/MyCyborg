<?php
    include('db.php');
    $query = "Select * from robotsTable_221 ORDER BY `r.id` ASC";
    $result = mysqli_query($connection , $query);
    if( !$result ){
        die("DB query failed from action.php");
    }

    while( $row = mysqli_fetch_assoc($result) ){
        echo "<tr data-toggle='collapse' data-target='#demo1' class='accordion-toggle'>";
        echo "<td>".$row["r.num"]."</td>";
        echo "<td>".$row["r.name"]."</td>";
        echo "<td>".$row["r.id"]."</td>";
        echo "<td>".$row["r.sales"]."%</td>";
        echo "<td>".$row["r.rate"]."/5</td>";
        echo "<td class='text-success'>".$row["r.price"].".00$</td>";
    }

    mysqli_free_result($result);
    mysqli_close($connection);
?>
