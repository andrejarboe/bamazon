DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT(1000) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Xbox One X', 'Electronics', '499.99', '20');

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Playstation 4 Pro', 'Electronics', '394.00', '20');

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Apple 13" MacBook Pro', 'Electronics', '394.00', '20');

