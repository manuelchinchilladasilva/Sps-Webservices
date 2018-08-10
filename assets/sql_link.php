<?php 
$host="localhost";
$port=8889;
$socket="";
$user="root";
$password="root";
$dbname="it_webservices";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());
 ?>