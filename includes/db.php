<?php
//To create the connection to the data base
$dbhost="localhost";
//$dbhost=160.153.129.217;
$dbuser="auxstudDB51";
$dbpass="auxstud5DB1!";
$dbname="auxstudDB5";


if ( !$connection = mysqli_connect("$dbhost","$dbuser","$dbpass","$dbname") ){
    die("Connection Problems accured : ".mysqli_connect_error().'<br>');
}

if( mysqli_connect_errno() ){
    die("DB connection failed : ".mysqli_connect_error()."(".mysqli_connect_errno().")");
}


//$query = 'CREATE TABLE IF NOT EXISTS `robotsTable_221` ( `r.id` INT(3) NOT NULL AUTO_INCREMENT , `r.name` VARCHAR(255) NULL , `r.num` INT(3) NULL , `r.price` INT(4) NULL , `r.pic` VARCHAR(100) NULL , `r.des` VARCHAR(255) NULL , `r.sales` INT(2) NULL , `r.rate` INT(1) NULL , PRIMARY KEY (`r.id`)) ENGINE = InnoDB AUTO_INCREMENT=301 COMMENT = "Robots Table";';
//
//$result = mysqli_query($connection , $query);
//
//if( !$result ){
//    die("Was not able to create table : ".mysqli_error($connection));
//    echo '<h2>Was not able to create table</h2>';
//} else {
//    mysqli_free_result($result);
//    echo '<br>success';
//}


//$query = "INSERT INTO `robotsTable_221` (`r.id`, `r.name`, `r.num`, `r.price`, `r.pic`, `r.des`, `r.sales`, `r.rate`) VALUES
//(NULL, 'HouseKeeper', '1', '300', 'cleaner.png', 'House Keeper Robot will make sure your house will be spotless and clean, and your laundry will be folded on your bed . this robot is made of steel and has a standart human eye ,and a taste sensors', '67', '3'),
//(NULL , 'Chef', '2', '800','cheff.png', 'Your Chef robot will cook for you in a private dinner or a crowded event. the robot has a standart human eye,a smell sensetivity of 80% , it has a taste sensors,teeth and can identify food ingredients', '45' , '4' ),
//(NULL , 'BabySitter', '3','1100','babysitter.png', 'your Babysitter robot will take care of your kid at any time .the robot made of lego ,has taste sensors and thermometer .it has flexible hands and standart hearing ability.', '33', '4'),
//(NULL, 'Singing Teacher', '4', '1800', 'singer.png', 'Your singing teacher robot will improve your vocal abilities . The robot is made of steel ,it  can hear within a distance of 100 meter ,it can talk and move is harm in 360 degrees.', '12', '3'),
//(NULL, 'HandyMan', '5', '2000', '111.png', 'Your Handyman robot will do any task around the house .the robot made of wood and has farsighteness up to 200 meter .can  lift weight up to 60kg and can rotate hands up to 360 degrees.', '40', '5' ),
//(NULL , 'Washing Car', '6', '1700','washer.png','Your Washing Car robot will  shine your car anside and outside .the robot made of steel   lift weight up to 60kg and can rotate hands up to 360 degrees and has flexible legs.','30','4'),
//(NULL, 'Nutritionist','7','1400', 'gray.png','Your Nutritionist robot will make sure you eat eat healthy and orderly .The robot made of wood , has a standart human eye,a smell sensetivity of 80% , it has a taste sensors,teeth and can identify foo.','67','2');";

//$result = mysqli_query($connection , $query);

//if( !$result ){
//    die("Was not able to create table : ".mysqli_error($connection));
//    echo '<h2>Was not able to create table</h2>';
//} else {
//    mysqli_free_result($result);
//    echo '<br>success';
//}
?>
