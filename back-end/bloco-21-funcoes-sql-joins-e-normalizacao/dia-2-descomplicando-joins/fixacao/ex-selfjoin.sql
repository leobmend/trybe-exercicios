USE hr;

-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
SELECT * FROM employees;

SELECT CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS EMPLOYEE_NAME, 
	   CONCAT(M.FIRST_NAME, ' ', M.LAST_NAME) AS MANAGER_NAME
FROM employees AS E
INNER JOIN employees AS M
ON E.MANAGER_ID = M.EMPLOYEE_ID
WHERE E.DEPARTMENT_ID <> M.DEPARTMENT_ID;

-- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT * FROM employees;

SELECT M.EMPLOYEE_ID, CONCAT(M.FIRST_NAME, ' ', M.LAST_NAME) AS MANAGER_NAME,
	   COUNT(*) AS EMPLOYEES_MANAGED
FROM employees AS M
INNER JOIN employees AS E
ON E.MANAGER_ID = M.EMPLOYEE_ID
GROUP BY M.EMPLOYEE_ID;
