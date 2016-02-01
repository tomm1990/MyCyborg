<?php

//To create the connection to the data base
$dbhost="166.62.8.11";
$dbuser="auxstudDB5";
$dbpass="auxstud5DB1!";
$dbname="auxstudDB5";


if ( !$connection = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname) ){
    echo "<H2>Connection Problems accured</h2>";
}

if( mysqli_connect_errno() ){
    die("DB connection failed : ".mysqli_connect_error()."(".mysqli_connect_errno().")");

}
?>
