CREATE TABLE user_information (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(128) NOT NULL,
    password VARCHAR(16) NOT NULL,
    PRIMARY KEY (id)
);
