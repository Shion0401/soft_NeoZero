CREATE TABLE IF NOT EXISTS user_table (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(64) NOT NULL,
    comment VARCHAR(100),
    PRIMARY KEY (id)
);

-- CREATE TABLE IF NOT EXISTS post_table (
--     post_id INT NOT NULL AUTO_INCREMENT,
--     id INT,
--     title VARCHAR(17),
--     caption VARCHAR(50),
--     image VARCHAR(128) NOT NULL,
--     post_report INTEGER(10) NOT NULL,
--     PRIMARY KEY (post_id),
--     FOREIGN KEY (id) REFERENCES user_table(id)
-- );


-- CREATE TABLE IF NOT EXISTS follow_table (
--     follow_id INT NOT NULL AUTO_INCREMENT,
--     PRIMARY KEY (follow_id)
--     -- FOREIGN KEY (following) REFERENCES u_id,
--     -- FOREIGN KEY (followed) REFERENCES u_id
-- );

-- CREATE TABLE IF NOT EXISTS admin_table (
--     admin_id INT NOT NULL AUTO_INCREMENT,
--     admin_email VARCHAR(30) NOT NULL,
--     admin_password VARCHAR(64) NOT NULL,
--     PRIMARY KEY (admin_id)
-- );

-- CREATE TABLE IF NOT EXISTS corp__table (
--     corp_id INT NOT NULL AUTO_INCREMENT,
--     corp_name VARCHAR(30) NOT NULL,
--     corp_url VARCHAR(128),
--     corp_manager VARCHAR(30) NOT NULL,
--     corp_email VARCHAR(30) NOT NULL,
--     image VARCHAR(128) NOT NULL
--     PRIMARY KEY (corp_id)
-- );