SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE `crud`;

CREATE TABLE `Contato_telrfônico` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `Sobrenome` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;