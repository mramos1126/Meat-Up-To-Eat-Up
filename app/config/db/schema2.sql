create database meetupEatup;
use meetupEatup;

-- member table
CREATE TABLE `meetupEatup`.`members` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(64) NOT NULL,
  `lastName` VARCHAR(64) NOT NULL,
  `age` INT(3) NOT NULL,
  `sex` VARCHAR(45) NULL COMMENT 'M or F radio.',
	`photo` VARCHAR(256),
  `username` VARCHAR(32) NULL,
  `password` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`));

-- insert new member into members table
INSERT INTO `meetupEatup`.`members`
(`id`,
`firstName`,
`lastName`,
`age`,
`sex`,
`photo`,
`username`,
`password`)
VALUES
(<{id: }>,
<{firstName: }>,
<{lastName: }>,
<{age: }>,
<{sex: }>,
<{photo: }>,
<{username: }>,
<{password: }>);

-- 
