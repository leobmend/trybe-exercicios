USE sakila;
SELECT * FROM staff;
SELECT COUNT(password) AS password_count FROM staff;
SELECT COUNT(DISTINCT staff_id) AS staff_count FROM staff;
SELECT COUNT(DISTINCT email) AS email_count FROM staff;