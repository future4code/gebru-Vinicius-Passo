import { BaseDatabase } from "./data/BaseDatabese"

export class Migrations extends BaseDatabase { 
   createTable = () => {
      BaseDatabase.connection.raw(
         `
         CREATE TABLE IF NOT EXISTS labook_users(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
         );
         
         CREATE TABLE IF NOT EXISTS labook_posts(
            id VARCHAR(255) PRIMARY KEY,
            photo VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            type ENUM("normal","event") DEFAULT "normal",
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            author_id VARCHAR(255),
            FOREIGN KEY (author_id) REFERENCES labook_users (id)
         );

         CREATE TABLE To_do_friends(
            id VARCHAR(255) PRIMARY KEY,
            author_id VARCHAR(255)  NOT NULL,
             friend_id VARCHAR(255)  NOT NULL,
            FOREIGN KEY (author_id) REFERENCES labook_users(id)
         );

         CREATE TABLE post_likes(
            id VARCHAR(255) PRIMARY KEY,
            post_id VARCHAR(255) NOT NULL,
            author_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (author_id) REFERENCES labook_users(id)
            );
         `
      )
   }  
}