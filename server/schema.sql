DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   ID INT NOT NULL AUTO_INCREMENT, user VARCHAR(20), chat TEXT, PRIMARY KEY(ID)
-- );

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY(id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(20),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  message_text TEXT,
  user_id INT,
  room_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
)


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

