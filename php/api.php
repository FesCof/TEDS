<?php
$servername = "172.27.16.3";
$username = "guest";
$password = "lee01020304";
// ��������
$conn = mysqli_connect($servername, $username, $password);
$conn->set_charset("utf8");
ini_set("date.timezone", "PRC");

// �������
if ($conn->connect_error) {
    die("����ʧ��: " . $conn->connect_error);
} 
$sql="select * from wiki.character order by id";
$res=$conn->query($sql);
$data=$res->fetch_all();
echo json_encode($data);
?>
