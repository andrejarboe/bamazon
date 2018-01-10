DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT(11) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Xbox One X', 'Electronics', '499.99', '74');

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Playstation 4 Pro', 'Electronics', '394.00', '72');

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Apple 13" MacBook Pro', 'Electronics', '394.00', '56');

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Mountain Bike', 'Spots & Outdoors', '104.45', '20');

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Samsung Refrigerator', 'Appliances', '2999.99', '12');

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Mens Navy Blue Button Up', 'Apparel', '49.99', '35'); 

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Mens Timex Watch', 'Apparel', '118.00', '15'); 

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Space Alien Poster', 'Home & Kitchen', '15.99', '27');

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Bookshelf', 'Home & Kitchen', '179.99', '8');

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Nerf Gun', 'Toys & Games', '25.99', '16');