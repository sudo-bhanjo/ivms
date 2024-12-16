<?php
include 'dbconn/dbconn.php';

// SQL query to fetch all users
$sql = "SELECT * FROM `all users`";
$result = $conn->query($sql);

$data = [];

// Fetch all data into an array
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Return the data as a JSON object
echo json_encode($data);

// Close the connection
$conn->close();
?>
