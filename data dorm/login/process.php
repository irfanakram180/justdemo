<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["fani"];
    $password = $_POST["fani5576"];
    
    // You can perform any necessary validation or database operations here.
    
    // For example, to connect to a MySQL database:
    $servername = "localhost";
    $db_username = "fani";
    $db_password = "fani5576";
    $database = "login form";
    
    // Create a database connection
    $conn = new mysqli($servername, $db_username, $db_password, $database);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Insert the data into a table
    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Data saved successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
}
?>
