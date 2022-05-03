USE Pixar;

-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT * FROM Movies;
SELECT * FROM BoxOffice;

SELECT M.title, B.domestic_sales, B.international_sales
FROM BoxOffice AS B
INNER JOIN Movies AS M
ON B.movie_id = M.id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais 
-- (international_sales) do que vendas nacionais (domestic_sales).
SELECT M.title, (B.domestic_sales + B.international_sales) AS total_sales
FROM BoxOffice AS B
INNER JOIN Movies AS M
ON B.movie_id = M.id
WHERE B.international_sales > B.domestic_sales;

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT M.title, B.rating
FROM BoxOffice AS B
INNER JOIN Movies AS M
ON B.movie_id = M.id
ORDER BY rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados 
-- dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM Theater;
SELECT * FROM Movies;

SELECT T.name AS theater_name, M.title,
	   M.director, M.year, M.length_minutes
FROM Theater AS T
LEFT JOIN Movies AS M
ON T.id = M.theater_id
ORDER BY theater_name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos 
-- cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT T.name AS theater_name, M.title,
	   M.director, M.year, M.length_minutes
FROM Theater AS T
RIGHT JOIN Movies AS M
ON T.id = M.theater_id
ORDER BY theater_name;

-- Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8. 
SELECT M.title, M.director, M.year, M.length_minutes, 
	   T.name AS theater_name, B.rating 
FROM Theater T
INNER JOIN Movies M ON T.id = M.theater_id
INNER JOIN BoxOffice B ON B.movie_id = M.id
WHERE B.rating > 8;

-- Usando o 'WHERE theater_id IS NOT NULL' explicitamente: 
SELECT m.id, m.title, m.director, m.year,
       m.length_minutes, m.theater_id
FROM Movies m
INNER JOIN BoxOffice b ON b.movie_id = m.id
WHERE b.rating > 8
AND m.theater_id IS NOT NULL;

