<?php
include 'conn.php';
$result=$conn->query("SELECT * FROM youletic");
$arrdata=array();
for($i=0;$i<$result->num_rows;$i++){
    $arrdata[$i]=$result->fetch_assoc();
}
echo json_encode($arrdata);