<?php
    include('db.php');
    $query = "Select * from robotsTable_221";
    $result = mysqli_query($connection , $query);
    if( !$result ){
        die("DB query failed from action.php");
    }

    while( $row = mysqli_fetch_assoc($result) ){
        echo "<tr data-toggle='collapse' data-target='#demo1' class='accordion-toggle'>";
        echo "<td id='r_num'>".$row["r.num"]."</td>";
        echo "<td id='r_name'>".$row["r.name"]."</td>";
        echo "<td id='r_id'>".$row["r.id"]."</td>";
        echo "<td id='r_sales'>".$row["r.sales"]."%</td>";
        echo "<td id='r_rate'>".$row["r.rate"]."/5</td>";
        echo "<td class='text-success'>".$row["r.price"].".0$</td>";
    }

    mysqli_free_result($result);
    mysqli_close($connection);
?>


<!--
        <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
            <td>1</td>
            <td>Baby Sitter</td>
            <td>234</td>
            <td>8.5%</td>
            <td>5/5</td>
            <td class="text-success">$150.00</td>
        </tr>-->
