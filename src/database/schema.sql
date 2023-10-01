CREATE DATABASE products_database;
USE products_database;


CREATE TABLE brands (
  id INT AUTO_INCREMENT, PRIMARY KEY (id),
  brandname varchar(255) NOT NULL,
  createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE 
  CURRENT_TIMESTAMP );


CREATE TABLE products (
  id INT AUTO_INCREMENT, PRIMARY KEY (id),
  product_name varchar(255) NOT NULL,
  product_description varchar(255) NOT NULL,
  price integer NOT NULL,
  stock integer NOT NULL,
  brand_id integer NOT NULL,
  createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE 
  CURRENT_TIMESTAMP );


ALTER TABLE products ADD FOREIGN KEY (brand_id) REFERENCES brands (id);