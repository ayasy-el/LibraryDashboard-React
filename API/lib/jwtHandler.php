<?php
require_once __DIR__ . "/../vendor/autoload.php";
require_once __DIR__ . "/sendjson.php";

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\SignatureInvalidException;

$tokenSecret = 'my_strong_token_secret';

function encodeToken($data)
{
    global $tokenSecret;
    $token = array(
        'iss' => 'http://127.0.0.1:3000/api/',
        'iat' => time(),
        'exp' => time() + 3600, // 1hr
        'data' => $data
    );
    return JWT::encode($token, $tokenSecret, 'HS256');
}

function decodeToken($token)
{
    global $tokenSecret;
    try {
        $decode = JWT::decode($token, new Key($tokenSecret, 'HS256'));
        return $decode->data;
    } catch (ExpiredException|SignatureInvalidException $e) {
        sendJson(401, $e->getMessage());
    } catch (UnexpectedValueException|Exception $e) {
        sendJson(400, $e->getMessage());
    }
}