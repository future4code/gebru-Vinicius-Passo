-- Active: 1658935164372@@35.226.146.116@3306@gebru-4212061-vinicius-passo
CREATE TABLE User_Arq(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
)