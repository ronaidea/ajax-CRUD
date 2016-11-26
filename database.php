<?php 	
$host = 'localhost';
$user = 'root';
$password = 'root';
$database = 'komentar';
$db = mysqli_connect($host,$user,$password,$database);

if (!$db) {
	// echo "database tidak ada".$db->connect_errno();
}else {
	// echo "database sudah dibuat";
}


 ?>