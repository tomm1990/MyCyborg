<?php
    include('db.php');
//    $query = "DELETE FROM robotsTable_221 where `r.id` between 307 and 347;";
//    $result = mysqli_query($connection , $query);
//    if( !$result ){
//        die("DB query failed from action.php the first");
//    }

    $query = "SELECT `r.num` FROM robotsTable_221 ORDER BY `r.num` DESC LIMIT 1;";
    $result = mysqli_query($connection , $query);
    if( !$result ){
        die("DB query failed from action.php, can't fetch max value : ".$connect_error);
    }
    $row = mysqli_fetch_assoc($result);
    $id =  intval($row['r.num']);
    $id = $id+1;

    mysqli_free_result($result);
    $robot_price = 0;

    //query to insert a new custome robot
    $query = "INSERT INTO `robotsTable_221` (`r.id` ,`r.name` ,`r.num` ,`r.price` ,`r.pic` ,`r.des` ,`r.sales` ,`r.rate`)
    VALUES (NULL,  'Custom Robot', '$id' , '$robot_price'  ,  'gray.png',  'Your new custom robot...',  '1',  '1');";

    $result = mysqli_query($connection , $query);
    if(!$result){
        die("DB query failed from action.php, can't insert :".$connect_error);
    }

    $query = "SELECT `r.id` FROM `robotsTable_221` WHERE `r.num`='".$id."';";
    $result = mysqli_query($connection , $query);
    if( !$result ){
        die("DB query failed from action.php, can't fetch max ID : ".$connect_error);
    }
    $row = mysqli_fetch_assoc($result);
    $id =  intval($row['r.id']);

    mysqli_free_result($result);
    mysqli_close($connection);
    header('Location: ../order.html?robotId='.$id.'');
?>