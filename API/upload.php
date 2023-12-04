<?php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Handle preflight OPTIONS request
    header('HTTP/1.1 200 OK');
    exit;
}
// Set header CORS untuk memperbolehkan akses dari semua asal (secara ideal, sesuaikan dengan asal yang diizinkan)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$targetDirectory = "../public/images/"; // Direktori tempat menyimpan file

if ($_FILES["file"]["error"] == UPLOAD_ERR_OK) {
    $tempFile = $_FILES["file"]["tmp_name"];
    $targetFile = $targetDirectory . basename($_FILES["file"]["name"]);

    // Pindahkan file dari temp ke direktori tujuan
    if (move_uploaded_file($tempFile, $targetFile)) {
        // Mengatur header respons sukses dan pesan respons
        http_response_code(200);
        header('Content-Type: application/json');
        echo json_encode(array("message" => "File berhasil diunggah."));
    } else {
        // Mengatur header respons gagal dan pesan respons
        http_response_code(500);
        header('Content-Type: application/json');
        echo json_encode(array("message" => "Terjadi kesalahan saat mengunggah file."));
    }
} else {
    // Mengatur header respons error dan pesan respons
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode(array("error" => "Error: " . $_FILES["file"]["error"]));
}
?>
