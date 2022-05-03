USE sakila;

-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT * FROM film_actor;
SELECT * FROM actor;

SELECT a.actor_id, first_name, film_id 
FROM actor AS a 
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT * FROM staff;
SELECT * FROM address;

SELECT first_name, last_name, address
FROM staff as s
INNER JOIN address as a
ON s.address_id = a.address_id; 

-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde 
-- o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT * FROM customer;
SELECT * FROM address;

SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS name, c.address_id, a.address
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY name DESC;

-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações 
-- podem ser encontradas nas tabelas address e customer.
SELECT * FROM customer;
SELECT * FROM address;

SELECT CONCAT(c.first_name, ' ', c.last_name) AS 'name'
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California'
AND CONCAT(c.first_name, ' ', c.last_name) LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. 
-- As informações podem ser encontradas na tabela address e customer.
SELECT * FROM customer;
SELECT * FROM address;

SELECT CONCAT(c.first_name, ' ', c.last_name) AS customer_name, COUNT(*)
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE c.active IS TRUE
GROUP BY c.customer_id
ORDER BY customer_name DESC;

-- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados 
-- devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM staff;
SELECT * FROM payment;

SELECT s.first_name, s.last_name, AVG(p.amount) AS avg_amount_paid
FROM staff AS s
INNER JOIN payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;

-- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um 
-- JOIN na mesma query.
SELECT * FROM actor;
SELECT * FROM film;
SELECT * FROM film_actor;

SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor_name,
	   f.film_id, f.title
FROM actor AS a
INNER JOIN film_actor AS a_f ON a.actor_id = a_f.actor_id
INNER JOIN film AS f ON a_f.film_id = f.film_id;
