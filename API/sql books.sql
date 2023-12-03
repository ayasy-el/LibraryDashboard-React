CREATE TABLE books
(
    bookId    int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT PRIMARY KEY,
    thumbnail VARCHAR(255)             NOT NULL DEFAULT '',
    title     VARCHAR(100)             NOT NULL,
    author    VARCHAR(100)             NOT NULL DEFAULT '',
    publisher VARCHAR(100)             NOT NULL DEFAULT '',
    category  VARCHAR(50)              NOT NULL DEFAULT '',
    isbn      VARCHAR(20)              NOT NULL DEFAULT '',
    status    VARCHAR(50)              NOT NULL DEFAULT 'Available'
);

INSERT INTO books (thumbnail, title, author, publisher, category, isbn, status)
VALUES ('/images/products/s1.jpg', 'Book Title 1', 'Author 1', 'Publisher 1', 'Sains', 'ISBN001', 'Available'),
       ('/images/products/s4.jpg', 'Book Title 2', 'Author 2', 'Publisher 2', 'Lifestyle', 'ISBN002', 'Borrowed'),
       ('/images/products/s5.jpg', 'Book Title 3', 'Author 1', 'Publisher 1', 'Computer', 'ISBN001', 'Available'),
       ('/images/products/s7.jpg', 'Book Title 4', 'Author 2', 'Publisher 2', 'Social', 'ISBN002', 'Borrowed'),
       ('/images/products/s11.jpg', 'Book Title 5', 'Author 1', 'Publisher 1', 'Social', 'ISBN001', 'Available'),
       ('/images/products/s4.jpg', 'Book Title 6', 'Author 2', 'Publisher 2', 'Social', 'ISBN002', 'Borrowed');
