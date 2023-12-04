<?php
global $connection;
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Respond to preflight requests
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");
    header("HTTP/1.1 200 OK");
    exit();
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: GET');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

require_once __DIR__ . '/lib/database.php';
require_once __DIR__ . '/lib/jwtHandler.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') :
    $headers = getallheaders();
    if (array_key_exists('Authorization', $headers) && preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) :
        $data = decodeToken($matches[1]);
        $userId = (int)$data;
        if (!is_numeric($data)) sendJson(401, 'Invalid User!');
        $sql = "SELECT `id`,`name`,`email` FROM `admin` WHERE `id`='$userId'";
        $query = mysqli_query($connection, $sql);
        $row = mysqli_fetch_array($query, MYSQLI_ASSOC);
        if ($row === null) sendJson(404, 'User not found!');
        sendJson(200, '', $row);
    endif;
    sendJson(403, "Authorization Token is Missing!");

endif;

sendJson(405, 'Invalid Request Method. HTTP method should be GET');