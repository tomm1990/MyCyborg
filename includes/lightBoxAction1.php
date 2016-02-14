<?php
//    function DOMinnerHTML(DOMNode $element) {
//        $innerHTML = "";
//        $children  = $element->childNodes;
//
//        foreach ($children as $child) {
//            $innerHTML .= $element->ownerDocument->saveHTML($child);
//        }
//
//        return $innerHTML;
//    }
//    $dom = new DOMDocument();
//    $dom->preserveWhiteSpace = false;
//    $dom->formatOutput       = true;
//    $dom->load($html_string);
//    $robot_num = $dom->getElementsById("rnum");
//
//    foreach ($robot_num as $rnum) {
//        $robot_num =  DOMinnerHTML($rnum);
//    }
    include('db.php');
    $query = "Select * from robotsTable_221 ORDER BY `r.id` ASC";
    $result = mysqli_query($connection , $query);
    if( !$result ){
        die("DB query failed from action.php the first");
    }

    $robot_price = $_GET['rprice'];
    $robot_num = $_GET['rnum'];
    while( $row = mysqli_fetch_assoc($result) ){
        $id =  $row["r.id"];
    }
    $id = $id+1;
    if ($result) mysqli_free_result($result);

    include('db.php');

    $variable = $_GET['variable'];

    $query = "INSERT INTO  `auxstudDB5`.`robotsTable_221` (`r.id` ,`r.name` ,`r.num` ,`r.price` ,`r.pic` ,`r.sales` ,`r.rate` ,`r.des`)
    VALUES ('$id',  'Custom Robot', '$robot_num' , '$variable'  ,  'gray.png',  '0',  '0',  'Your new custom robot...');";

    $result2 = mysqli_query($connection , $query);
    if(!$result2){
        die("DB query failed from action.php the second");
    }



        //use return daya
//        while( $row = mysqli_fetch_assoc($result) ){
//          echo "<h2>".$row["r.price"]."</h2>";
//          echo ("<section id="secwrap"><div id="d1"><h2>".$row["r.name"]."</h2></div></section>");
//            echo "<section id='secwrap' style='background:url(images/".$row["r.pic"].") no-repeat;'>";
//            echo "<div id='d1'><h2>".$row["r.name"]."</h2></div>";
            //echo "<div id='img1' style='background:url(images/".$row["r.pic"].") no-repeat;'></div>";
            //echo "<div id='img1' style='background:url(images/robot2.png) no-repeat'></div>";
            //echo "<div id='d2'><h4>".$row["r.price"]."$</h4></div>";
//            echo "</section>";
//        }
//        while($row = mysqli_fetch_row($result)){
//            echo "<section>";
//            var_dump($row);
//            echo "</section>";
//}
        header('Location: ../order.html');

        //if ($result2) mysqli_free_result($result2);
		if ($connection) mysqli_close($connection);
?>
