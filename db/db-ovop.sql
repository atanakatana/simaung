CREATE DATABASE order_system;

USE order_system;

CREATE TABLE orders (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    product VARCHAR(255) NOT NULL,
    quantity INT(11) NOT NULL,
    address TEXT NOT NULL,
    email VARCHAR(255) NOT NULL
);
