<?php
global $connection;

// Check if the request method is an OPTIONS request (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Respond to preflight requests
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");
    header("HTTP/1.1 200 OK");
    exit();
}

// Set the CORS headers for the actual request
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/lib/database.php';
require_once __DIR__ . '/lib/jwtHandler.php';

// Handle only POST requests
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'));

    // Validate input fields
    if (
        !isset($data->email) ||
        !isset($data->password) ||
        empty(trim($data->email)) ||
        empty(trim($data->password))
    ) {
        sendJson(
            422,
            'Please fill all the required fields & None of the fields should be empty.',
            ['required_fields' => ['email', 'password']]
        );
    }

    $email = mysqli_real_escape_string($connection, trim($data->email));
    $password = trim($data->password);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        sendJson(422, 'Invalid Email Address!');
    } elseif (strlen($password) < 8) {
        sendJson(422, 'Your password must be at least 8 characters long!');
    }

    $sql = "SELECT * FROM `admin` WHERE `email`='$email'";
    $query = mysqli_query($connection, $sql);
    $row = mysqli_fetch_array($query, MYSQLI_ASSOC);
    if ($row === null) {
        sendJson(404, 'User not found! (Email is not registered)');
    }
    if (!password_verify($password, $row['password'])) {
        sendJson(401, 'Incorrect Password!');
    }

    sendJson(200, '', [
        'token' => encodeToken($row['id'])
    ]);
} else {
    sendJson(405, 'Invalid Request Method. HTTP method should be POST');
}
?>
