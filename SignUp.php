<?php
include("dbconn/dbconn.php");

if(isset($_POST["email"])){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmpassword = $_POST["confirm-password"];
    
    if($password==$confirmpassword){
      $sql="INSERT INTO `user`(`name`, `email`, `roll_id`, `password`) VALUES ('$name','$email','2','$password')";
      if($conn->query($sql))
      {
        echo "ok";
      }
      else{
        echo "not okk";
      }
    }
    else{
        echo"password not match";
    }
    

}


?>