<?php
    include('db.php');

        //get data from DB with query
        //get data from DB
        //$query = "SELECT * FROM robotsTable_221";

        $query = "Select * from robotsTable_221";

//$query = "INSERT INTO  `auxstudDB5`.`robotsTable_221` (`r.id` ,`r.name` ,`r.num` ,`r.price` ,`r.pic` ,`r.sales` ,`r.rate` ,`r.des`)
//                                               VALUES ('313',  'Custom Robot', NULL,   '1999',  'gray.png',  '0',  '0',  'Your new custom robot...');";
        $result = mysqli_query($connection , $query);
    if( !$result ){
        die("DB query failed from action.php");
    }


        //use return daya
        while( $row = mysqli_fetch_assoc($result) ){
//          echo "<h2>".$row["r.price"]."</h2>";
//          echo ("<section id="secwrap"><div id="d1"><h2>".$row["r.name"]."</h2></div></section>");
            echo "<section id='secwrap' style='background:url(images/".$row["r.pic"].") no-repeat;'>";
            echo "<div id='d1'><h2>".$row["r.name"]."</h2></div>";
            //echo "<div id='img1' style='background:url(images/".$row["r.pic"].") no-repeat;'></div>";
            //echo "<div id='img1' style='background:url(images/robot2.png) no-repeat'></div>";
            //echo "<div id='d2'><h4>".$row["r.price"]."$</h4></div>";
            echo "</section>";
        }
//        while($row = mysqli_fetch_row($result)){
//            echo "<section>";
//            var_dump($row);
//            echo "</section>";
//}


//                <section id="secwrap">
//                	<div id="d1"><h2>Chef Robot</h2></div>
//                	<div id="img1"></div>
//                	<div id="d2"><h4>230$</h4></div>
//                </section>

        mysqli_free_result($result);
		mysqli_close($connection);
?>


<!--

            <section id="secwrap">
                <div id="d1"><h2>Chef Robot</h2></div>
                <div id="img1"></div>
                <div id="d2"><h4>230$</h4></div>
            </section>

-->
<!--
                <section id="secwrap" style='background:url(images/washer.png) no-repeat'>
                    <div id="d1"><h2>Chef Robot</h2></div>
                </section>
-->
