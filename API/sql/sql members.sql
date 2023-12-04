CREATE TABLE members
(
    memberId INT(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT PRIMARY KEY,
    img      VARCHAR(255)             NOT NULL DEFAULT '/images/profile/profile-placeholder.jpg',
    name     VARCHAR(100)             NOT NULL,
    email    VARCHAR(100)             NOT NULL,
    phone    VARCHAR(20)              NOT NULL,
    status   VARCHAR(50)              NOT NULL DEFAULT 'not borrowing'
);

INSERT INTO members (img, name, email, phone, status)
VALUES ('https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg', 'John Doe',
        'johndoe@example.com', '+1234567890', 'borrowing'),
       ('https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-3.jpg', 'Jane Smith',
        'janesmith@example.com', '+1987654321', 'not borrowing'),
       ('https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg', 'Alice Johnson',
        'alicejohnson@example.com', '+1122334455', 'overdue'),
       ('https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg', 'Michael Brown',
        'michaelbrown@example.com', '+1654321890', 'not borrowing'),
       ('https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-2.jpg', 'Eliza Emily',
        'emilydavis@example.com', '+1789456231', 'borrowing'),
       ('https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-5.jpg', 'David Wilson',
        'davidwilson@example.com', '+1908765432', 'not borrowing'),
       ('https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-6.jpg', 'Sophia Martinez',
        'sophiamartinez@example.com', '+1543210987', 'overdue'),
       ('https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg', 'James Lee',
        'jameslee@example.com', '+1324354657', 'not borrowing'),
       ('https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-6.jpg', 'Olivia Garcia',
        'oliviagarcia@example.com', '+1876543210', 'overdue'),
       ('https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-4.jpg', 'William Rodriguez',
        'williamrodriguez@example.com', '+1987654321', 'not borrowing');
