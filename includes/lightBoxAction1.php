<?php
    include('db.php');
    $query = "Select * from robotsTable_221 ORDER BY `r.id` ASC";
    $result = mysqli_query($connection , $query);
    if( !$result ){
        die("DB query failed from action.php the first");
    }
    $robot_price = $_POST['variable'];
    while( $row = mysqli_fetch_assoc($result) ){
        $id =  $row["r.num"];
    }
    $id = $id+1;
    mysqli_free_result($result);

    //query to insert a new custome robot
    $query = "INSERT INTO `robotsTable_221` (`r.id` ,`r.name` ,`r.num` ,`r.price` ,`r.pic` ,`r.des` ,`r.sales` ,`r.rate`)
    VALUES (NULL,  'Custom Robot', '$id' , '$robot_price'  ,  'gray.png',  'Your new custom robot...',  '1',  '1');";

    $result = mysqli_query($connection , $query);
    if(!$result){
        die("DB query failed from action.php the second");
    }
    mysqli_free_result($result);
    mysqli_close($connection);
    header('Location: ../order.html');
?>
