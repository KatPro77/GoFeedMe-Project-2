DROP DATABASE IF EXISTS volunteer_db;
CREATE DATABASE volunteer_db;
USE volunteer_db;

CREATE TABLE volunteers (
    id INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(45) NOT NULL,
    Location VARCHAR(200) NOT NULL,
    Available VARCHAR(155) NOT NULL,
    Group_Size INTEGER NOT NULL,
    PRIMARY KEY(id)
);