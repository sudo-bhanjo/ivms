<?php
// Database connection
$servername = "localhost"; // Or the IP address of your MySQL server
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "ivms_userdata";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data
$name = $_POST['name'];
$email = $_POST['email'];
$contact_number = $_POST['contact_number'];
$whatsapp_number = $_POST['whatsapp_number'];
$city = $_POST['city'];
$state = $_POST['state'];
$country = $_POST['country'];
$language = $_POST['language'];
$fluency = $_POST['fluency'];
$writing = $_POST['writing'];
$other_language = $_POST['other_language'];
$intro = $_POST['intro'];
$source = $_POST['source'];
$motivation = $_POST['motivation'];
$meeting_date = $_POST['meeting_date'];
$meeting_time = $_POST['meeting_time'];
$platform = $_POST['platform'];

// SQL query to insert data
$sql = "INSERT INTO users (name, email, contact_number, whatsapp_number, city, state, country, language, fluency, writing, other_language, introduction, source, motivation, meeting_date, meeting_time, platform)
VALUES ('$name', '$email', '$contact_number', '$whatsapp_number', '$city', '$state', '$country', '$language', '$fluency', '$writing', '$other_language', '$intro', '$source', '$motivation', '$meeting_date', '$meeting_time', '$platform')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
