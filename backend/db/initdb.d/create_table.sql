CREATE TABLE IF NOT EXISTS user_table (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(10) NOT NULL,
    user_email VARCHAR(30) NOT NULL,
    user_password VARCHAR(64) NOT NULL,
    user_comment VARCHAR(100),
    user_report INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS post_table (
    post_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(17) NOT NULL,
    caption VARCHAR(50),
    image VARCHAR(128) NOT NULL,
    post_report INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (post_id),
    FOREIGN KEY (user_id) REFERENCES user_table
);


CREATE TABLE IF NOT EXISTS follow_table (
    follow_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (follow_id),
    FOREIGN KEY (following) REFERENCES user_id,
    FOREIGN KEY (followed) REFERENCES user_id
);

CREATE TABLE IF NOT EXISTS admin_table (
    admin_id INT NOT NULL AUTO_INCREMENT,
    admin_email VARCHAR(30) NOT NULL,
    admin_password VARCHAR(64) NOT NULL,
    PRIMARY KEY (admin_id)
);

CREATE TABLE IF NOT EXISTS ad_table (
    ad_id INT NOT NULL AUTO_INCREMENT,
    click INTEGER(10) NOT NULL,
    PRIMARY KEY (ad_id),
    FOREIGN KEY (corp_id) REFERENCES corp_id
);

CREATE TABLE IF NOT EXISTS corp__table (
    corp_id INT NOT NULL AUTO_INCREMENT,
    corp_name VARCHAR(30) NOT NULL,
    corp_product VARCHAR(30),
    corp_url VARCHAR(128),
    corp_manager VARCHAR(30) NOT NULL,
    corp_email VARCHAR(30) NOT NULL,
    PRIMARY KEY (corp_id)
);