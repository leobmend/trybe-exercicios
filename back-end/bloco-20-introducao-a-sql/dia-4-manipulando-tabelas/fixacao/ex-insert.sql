USE sakila;

DESCRIBE staff;
SELECT * FROM staff;

-- Insira um novo funcionário na tabela sakila.staff. Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e 
-- selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados 
-- automaticamente não precisam ser inseridos manualmente. Boa explorada!
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username) 
VALUES ('Leonardo', 'Mendonça', 3, 2, 'leobmend');

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username) 
VALUES ('Amanda', 'Khouri', 3, 2, 'migsmands');

DESCRIBE actor;
SELECT * FROM actor;

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM customer
LIMIT 5;

DESCRIBE category;
SELECT * FROM category;

-- Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO sakila.category (name)
VALUES ('Popcorn'),
	   ('Cops');

DESCRIBE store;
SELECT * FROM store;

-- Cadastre uma nova loja na tabela sakila.store .
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUE (4, 3);
