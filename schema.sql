CREATE DATABASE  `Meat2Meet`;
USE `Meat2Meet`;

CREATE TABLE `foodMeet` (
	`id` Int AUTO_INCREMENT NOT NULL,
	`first_name` VARCHAR( 40) NOT NULL,
	`last_name` VARCHAR( 40 ) NOT NULL,
	`age` Int() NOT NULL,
	`email` VARCHAR(60) NOT NULL,
`gender` VARCHAR(12) NOT NULL,
	`food` VARCHAR(60) NOT NULL,
	`location` Int NOT NULL,

	PRIMARY KEY ( `id` ) );