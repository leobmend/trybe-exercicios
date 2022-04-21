USE sakila;

SELECT * FROM address;

SELECT COUNT(DISTINCT city_id) FROM address;

SELECT * FROM address
ORDER BY city_id, address DESC;