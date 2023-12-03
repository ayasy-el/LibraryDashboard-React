<?php
global $conn;
include './koneksi.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $data = json_decode(file_get_contents("php://input"), true);

        $sql = "INSERT INTO books (thumbnail, title, author, publisher, category, status) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);

        $thumbnail = $data['thumbnail'];
        $title = $data['title'];
        $author = $data['author'];
        $publisher = $data['publisher'];
        $category = $data['category'];
        $status = $data['status'];

        $stmt->bind_param("ssssss", $thumbnail, $title, $author, $publisher, $category, $status);

        if ($stmt->execute()) {
            header("HTTP/1.1 201 Created");
            echo "Data berhasil ditambahkan";
        } else {
            throw new Exception("Gagal menambahkan data");
        }
    } catch (Exception $e) {
        header("HTTP/1.1 500 Internal Server Error");
        echo "Error: " . $e->getMessage();
    }

    $stmt->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $url_parts = explode('/', $_SERVER['REQUEST_URI']);
        $sql = "SELECT * FROM books";

        if (count($url_parts) > 3) {
            $bookId = end($url_parts);
            $sql .= " WHERE bookId='$bookId'";
        } else if (isset($_GET['q'])) {
            $searchQuery = $_GET['q'];
            $searchQuery = mysqli_real_escape_string($conn, $searchQuery);

            $sql .= " WHERE 
                    bookId LIKE '%$searchQuery%' OR 
                    thumbnail LIKE '%$searchQuery%' OR 
                    title LIKE '%$searchQuery%' OR 
                    author LIKE '%$searchQuery%' OR 
                    publisher LIKE '%$searchQuery%' OR 
                    category LIKE '%$searchQuery%' OR 
                    isbn LIKE '%$searchQuery%' OR 
                    status LIKE '%$searchQuery%'";
        } else {
            $conditions = array();
            foreach ($_GET as $key => $value) {
                $key = mysqli_real_escape_string($conn, $key);
                $value = mysqli_real_escape_string($conn, $value);

                $conditions[] = "$key = '$value'";
            }

            $whereCondition = (!empty($conditions)) ? implode(" AND ", $conditions) : "1";
            $sql .= " WHERE $whereCondition";
        }

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            header("HTTP/1.1 200 OK");
            $data = array();
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            header('Content-Type: application/json');
            echo json_encode($data);
        } else {
            header("HTTP/1.1 404 Not Found");
            echo "Tidak ada data";
        }
    } catch (Exception $e) {
        header("HTTP/1.1 500 Internal Server Error");
        echo "Error: Query Tidak Valid";
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    try {
        $url_parts = explode('/', $_SERVER['REQUEST_URI']);
        $bookId = end($url_parts);

        $data = json_decode(file_get_contents("php://input"), true);

        $setValues = '';
        foreach ($data as $key => $value) {
            $key = mysqli_real_escape_string($conn, $key);
            $value = mysqli_real_escape_string($conn, $value);
            $setValues .= $key . "='$value', ";
        }
        $setValues = rtrim($setValues, ', ');

        $sql = "UPDATE books SET $setValues WHERE bookId=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $bookId);

        if ($stmt->execute()) {
            header("HTTP/1.1 200 OK");
            echo "Data berhasil diperbarui";
        } else {
            throw new Exception("Gagal memperbarui data");
        }
    } catch (Exception $e) {
        header("HTTP/1.1 500 Internal Server Error");
        echo "Error: " . $e->getMessage();
    }

    $stmt->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    try {
        parse_str(file_get_contents("php://input"), $data);
        $url_parts = explode('/', $_SERVER['REQUEST_URI']);
        $bookId = end($url_parts);

        $sql = "DELETE FROM books WHERE bookId=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $bookId);

        if ($stmt->execute()) {
            header("HTTP/1.1 200 OK");
            echo "Data berhasil dihapus";
        } else {
            throw new Exception("Gagal menghapus data");
        }
    } catch (Exception $e) {
        header("HTTP/1.1 500 Internal Server Error");
        echo "Error: " . $e->getMessage();
    }

    $stmt->close();
}

closeConnection();
