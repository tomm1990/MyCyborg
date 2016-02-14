<?php
    include('db.php');
    $query = "Select * from robotsTable_221 ORDER BY `r.id` ASC";
    $result = mysqli_query($connection , $query);
    if( !$result ){
        die("DB query failed from action.php the first");
    }
    $robot_price = $_POST['variable'];
    //$robot_num = $_GET['rnum'];
    while( $row = mysqli_fetch_assoc($result) ){
        $id =  $row["r.id"];
    }
    $id = $id+1;
    if ($result) mysqli_free_result($result);
    include('db.php');
    //$variable = $_GET['variable'];
    //query to insert a new custome robot
    $query = "INSERT INTO  `auxstudDB5`.`robotsTable_221` (`r.id` ,`r.name` ,`r.num` ,`r.price` ,`r.pic` ,`r.sales` ,`r.rate` ,`r.des`)
    VALUES ('$id',  'Custom Robot', NULL , '$robot_price'  ,  'gray.png',  '0',  '0',  'Your new custom robot...');";

    $result2 = mysqli_query($connection , $query);
    if(!$result2){
        die("DB query failed from action.php the second");
    }
    header('Location: ../order.html');
    if ($connection) mysqli_close($connection);
?>
