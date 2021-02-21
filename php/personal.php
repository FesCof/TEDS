<?php
$id= implode("", $_GET);
$servername = "172.27.16.3";
$username = "guest";
$password = "lee01020304";
// 创建连接
$conn = mysqli_connect($servername, $username, $password);
$conn->set_charset("utf8");
ini_set("date.timezone", "PRC");

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
$sql= "select * from wiki.character where id= ".$id;
$res=$conn->query($sql);
$data=$res->fetch_all();
echo json_encode($data);
?>
