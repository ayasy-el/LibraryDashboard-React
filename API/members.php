<?php
global $connection;
include './database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $data = json_decode(file_get_contents("php://input"), true);

        $sql = "INSERT INTO members (img, name, email, phone, status) VALUES (?, ?, ?, ?, ?)";
        $stmt = $connection->prepare($sql);

        $img = $data['img'];
        $name = $data['name'];
        $email = $data['email'];
        $phone = $data['phone'];
        $status = $data['status'];

        $stmt->bind_param("sssss", $img, $name, $email, $phone, $status);

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
        $sql = "SELECT * FROM members";
        if (count($url_parts) > 3) {
            $memberId = end($url_parts);
            $sql .= " WHERE memberId='$memberId'";
        } else if (isset($_GET['q'])) {
            $searchQuery = $_GET['q'];
            $searchQuery = mysqli_real_escape_string($connection, $searchQuery);

            $sql .= " WHERE 
                    memberId LIKE '%$searchQuery%' OR 
                    img LIKE '%$searchQuery%' OR 
                    name LIKE '%$searchQuery%' OR 
                    email LIKE '%$searchQuery%' OR 
                    phone LIKE '%$searchQuery%' OR 
                    status LIKE '%$searchQuery%'";
        } else {
            $conditions = array();
            foreach ($_GET as $key => $value) {
                $key = mysqli_real_escape_string($connection, $key);
                $value = mysqli_real_escape_string($connection, $value);

                $conditions[] = "$key = '$value'";
            }

            $whereCondition = (!empty($conditions)) ? implode(" AND ", $conditions) : "1";
            $sql .= " WHERE $whereCondition";
        }

        $result = $connection->query($sql);

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
        $memberId = end($url_parts);

        $data = json_decode(file_get_contents("php://input"), true);

        $setValues = '';
        foreach ($data as $key => $value) {
            $key = mysqli_real_escape_string($connection, $key);
            $value = mysqli_real_escape_string($connection, $value);
            $setValues .= $key . "='$value', ";
        }
        $setValues = rtrim($setValues, ', ');

        $sql = "UPDATE members SET $setValues WHERE memberId=?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("s", $memberId);

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
        $memberId = end($url_parts);

        // Gunakan prepared statement untuk mencegah SQL injection
        $sql = "DELETE FROM members WHERE memberId=?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("s", $memberId);

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
