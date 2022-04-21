USE sakila;

SELECT * FROM film;

SELECT title, release_year, length, rating, replacement_cost FROM film
ORDER BY length DESC, replacement_cost ASC;