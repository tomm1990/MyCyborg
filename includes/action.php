<?php
    include('db.php');

        //get data from DB with query
        //get data from DB
        //$query = "SELECT * FROM robotsTable_221";
        $query = "Select * from robotsTable_221";
        $result = mysqli_query($connection , $query);
    if( !$result ){
        die("DB query failed from action.php");
    }


        //use return daya
        while( $row = mysqli_fetch_assoc($result) ){
            echo "<h2>".$row["r.name"]."</h2>";
//            echo ("<section id="secwrap"><div id="d1"><h2>".$row["r.name"]."</h2></div></section>");
        }
//        while($row = mysqli_fetch_row($result)){
//            echo "<section>";
//            var_dump($row);
//            echo "</section>";
//}

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
