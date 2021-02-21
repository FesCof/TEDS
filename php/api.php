<?php
$servername = "servername";
$username = "username";
$password = "password";
// ´´½¨Á¬½Ó
$conn = mysqli_connect($servername, $username, $password);
$conn->set_charset("utf8");
ini_set("date.timezone", "PRC");

// ¼ì²âÁ¬½Ó
if ($conn->connect_error) {
    die("error: " . $conn->connect_error);
} 
$sql="select * from wiki.character order by id";
$res=$conn->query($sql);
$data=$res->fetch_all();
echo json_encode($data);
?>
