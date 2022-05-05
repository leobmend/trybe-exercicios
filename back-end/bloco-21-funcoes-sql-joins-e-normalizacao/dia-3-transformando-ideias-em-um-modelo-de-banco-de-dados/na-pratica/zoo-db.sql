DROP SCHEMA IF EXISTS Zoo;

CREATE SCHEMA IF NOT EXISTS Zoo;

USE Zoo;

CREATE TABLE `species`(
    `id_specie` INT AUTO_INCREMENT PRIMARY KEY,
    `specie_name` VARCHAR(255) NOT NULL
);

CREATE TABLE `locations`(
    `id_location` INT  AUTO_INCREMENT PRIMARY KEY,
    `location` VARCHAR(255) NOT NULL
);

CREATE TABLE `managers`(
    `id_manager` INT AUTO_INCREMENT PRIMARY KEY,
    `manager_name` VARCHAR(255) NOT NULL
);

CREATE TABLE `caretakers`(
    `id_employee` INT AUTO_INCREMENT PRIMARY KEY,
    `employee_name` VARCHAR(255) NOT NULL,
    `id_manager` INT,
	FOREIGN KEY(`id_manager`) REFERENCES `managers`(`id_manager`)
);

CREATE TABLE `animals`(
    `id_animal` INT AUTO_INCREMENT PRIMARY KEY,
    `id_specie` INT,
    `animal_name` VARCHAR(255) NOT NULL,
    `age` INT NOT NULL,
    `sex` INT NOT NULL,
    `id_location` INT,
    FOREIGN KEY(`id_specie`) REFERENCES `species`(`id_specie`),
    FOREIGN KEY(`id_location`) REFERENCES `locations`(`id_location`)
);

CREATE TABLE `animal_caretaker`(
    `id` INT PRIMARY KEY,
    `id_animal` INT,
    `id_employee` INT,
    FOREIGN KEY(`id_animal`) REFERENCES `animals`(`id_animal`),
    FOREIGN KEY(`id_employee`) REFERENCES `caretakers`(`id_employee`)
);
