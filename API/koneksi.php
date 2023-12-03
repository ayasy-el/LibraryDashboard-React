<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "library";

try {
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        throw new Exception("Koneksi ke database gagal: " . $conn->connect_error);
    }
} catch (Exception $e) {
    die("Error: " . $e->getMessage());
}

function closeConnection()
{
    global $conn;
    $conn->close();
}
