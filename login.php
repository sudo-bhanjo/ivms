<?php
include("dbconn/dbconn.php");

if(isset($_POST["email"])){
    $email = $_POST["email"];
    $password = $_POST["password"];
    $sql = "SELECT * FROM `user` WHERE `email`='$email'";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        $row = $result->fetch_assoc();
        if($password == $row["password"]){
            echo $row["roll_id"];
        }else{
            echo "not ok";
        }
    }else{
        echo "no user";
    }
}


?>