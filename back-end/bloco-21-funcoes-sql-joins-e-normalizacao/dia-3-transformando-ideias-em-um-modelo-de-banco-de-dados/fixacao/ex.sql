-- Exercício 1 e 2 na pasta

-- Solução 1 e 2
-- 			
-- Funcionario_id	Nome	Sobrenome	Contato	Contato	DataCadastro
-- 12	Joseph	Rodrigues	jo@gmail.com	(35)98552-1445	2020-05-05 08:50:25
-- 13	Pedro	Freeman	pedro1990@gmail.com	(47)99522-4996	2020-02-05 00:00:00
-- 14	Cíntia	Duval	cindy@outlook.com	(33)99855-4669	2020-05-05 10:55:35
-- 15	Fernanda	Mendes	fernandamendes@yahoo.com	(33)99200-1556	2020-05-05 11:45:40
-- 					
-- Lotacao_id	Funcionario_id	Setor_id			
-- 1	12	1			
-- 2	12	2			
-- 3	13	3			
-- 4	14	4			
-- 5	14	2			
-- 6	15	5			
-- 					
-- Setor_id	Setor				
-- 1	Administração				
-- 2	Vendas				
-- 3	Operacional				
-- 4	Estratégico				
-- 5	Marketing				

-- Exerício 3: Monte uma query que:
-- Crie um banco de dados chamado normalization;
-- Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
-- Popule todas as tabelas com os dados fornecidos nos exerícios.
CREATE SCHEMA IF NOT EXISTS normalization;
USE normalization;

-- EMPLOYEES
CREATE TABLE employees(
	id INT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(100),
    registry_date DATETIME NULL
) ENGINE = InnoDB;

INSERT INTO employees (id, first_name, last_name, email, phone, registry_date)
VALUES (12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
	   (13, 'Pedro', 'Freeman', 'pedro1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
	   (14,	'Cíntia', 'Duval', 'cindy@outlook.com',	'(33)99855-4669', '2020-05-05 10:55:35'),
	   (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

UPDATE employees
SET phone = '(35)98552-1445'
WHERE id = 12;
       
SELECT * FROM employees;
DESCRIBE employees;

-- DEPARTMENT
CREATE TABLE departments(
	id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
) ENGINE = InnoDB;

INSERT INTO departments (id, name)
VALUES (1, 'Administração'),
	   (2, 'Vendas'),
       (3, 'Operacional'),
       (4, 'Estratégico'),
       (5, 'Marketing');
       
SELECT * FROM departments;
DESCRIBE departments;

-- EMPLOYEE_DEPARTMENT
CREATE TABLE employee_department(
	id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (department_id) REFERENCES departments(id)
) ENGINE = InnoDB;

INSERT INTO employee_department (employee_id, department_id)
VALUES (12, 1),
	   (12,	2),
       (13,	3),
       (14,	4),
       (14,	2),
       (15,	5);	

SELECT * FROM employee_department;
DESCRIBE employee_department;
