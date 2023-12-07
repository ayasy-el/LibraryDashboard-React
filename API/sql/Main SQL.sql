-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 07, 2023 at 03:09 PM
-- Server version: 8.0.30
-- PHP Version: 8.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(65) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`) VALUES
(4, 'admin', 'admin@mail.com', '$2y$10$gea8xvgl6q6qoldCNO5kqeXtt5.CFy66k75muH5VWqRS.EyGe8RGy');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `bookId` int(5) UNSIGNED ZEROFILL NOT NULL,
  `thumbnail` varchar(255) NOT NULL DEFAULT '',
  `title` varchar(100) NOT NULL DEFAULT '',
  `author` varchar(100) NOT NULL DEFAULT '',
  `publisher` varchar(100) NOT NULL DEFAULT '',
  `category` varchar(50) NOT NULL DEFAULT '',
  `isbn` varchar(20) NOT NULL DEFAULT '',
  `status` varchar(50) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`bookId`, `thumbnail`, `title`, `author`, `publisher`, `category`, `isbn`, `status`) VALUES
(00001, '/images/products/s1.jpg', 'Book Title 1', 'Author 1', 'Publisher 1', 'computer', 'ISBN001', 'Available'),
(00002, '/images/products/s4.jpg', 'Book Title 2', 'Author 2', 'Publisher 2', 'Lifestyle', 'ISBN002', 'Borrowed'),
(00003, '/images/products/s5.jpg', 'Book Title 3', 'Author 1', 'Publisher 1', 'Computer', 'ISBN001', 'Available'),
(00004, '/images/products/s7.jpg', 'Book Title 4', 'Author 2', 'Publisher 2', 'Social', 'ISBN002', 'Borrowed'),
(00005, '/images/products/s11.jpg', 'Book Title 5', 'Author 1', 'Publisher 1', 'Social', 'ISBN001', 'Available'),
(00010, '/images/products/s4.jpg', 'Book Title 6', 'author 1', 'Publisher 2', 'Social', '', 'Borrowed');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `memberId` int(5) UNSIGNED ZEROFILL NOT NULL,
  `img` varchar(255) NOT NULL DEFAULT '/images/profile/profile-placeholder.jpg',
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'not borrowing'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`memberId`, `img`, `name`, `email`, `phone`, `status`) VALUES
(00002, '/images/profile/profile-placeholder.png', 'Jane', 'janesmith@mail.com', '+1987654321', 'not borrowing'),
(00003, 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-3.jpg', 'Jane Smith', 'xyz@example.com', '1987654321', 'not borrowing'),
(00004, 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg', 'Michael Brown', 'michaelbrown@example.com', '+1654321890', 'not borrowing'),
(00005, 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-2.jpg', 'Eliza Emily', 'emilydavis@example.com', '+1789456231', 'borrowing'),
(00006, 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-5.jpg', 'David Wilson', 'davidwilson@example.com', '+1908765432', 'not borrowing'),
(00007, 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-6.jpg', 'Sophia Martinez', 'sophiamartinez@example.com', '+1543210987', 'overdue'),
(00008, 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg', 'James Lee', 'jameslee@example.com', '+1324354657', 'not borrowing'),
(00009, 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-6.jpg', 'Olivia Garcia', 'oliviagarcia@example.com', '+1876543210', 'overdue'),
(00010, 'https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg', 'William', 'williamrodriguez@example.com', '+1987654321', 'not borrowing');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`bookId`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`memberId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `bookId` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `memberId` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
