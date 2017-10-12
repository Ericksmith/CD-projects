
-- Problem 1 
SELECT countries.name, languages.language, languages.percentage FROM countries
INNER JOIN languages ON country_id = countries.id WHERE languages.language="Slovene"
ORDER BY languages.percentage DESC;

-- Problem 2
SELECT countries.name, COUNT(cities.id) AS cities FROM countries
JOIN cities ON country_id = countries.id
GROUP BY countries.name
ORDER BY COUNT(cities.id) DESC;

-- PROBLEM 3
SELECT cities.name, cities.population FROM cities
JOIN countries ON country_id = countries.id
WHERE countries.name = "Mexico" AND cities.population > 500000
ORDER BY cities.population DESC;

-- PROBLEM 4
SELECT countries.name AS Country, languages.language, languages.percentage FROM languages
JOIN countries ON country_id = countries.id
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;

-- PROBLEM 5
SELECT countries.name, countries.surface_area, countries.population FROM countries
WHERE countries.surface_area < 501 AND countries.population > 100000;

-- PROBLEM 6
SELECT countries.name, countries.government_form, countries.capital, countries.life_expectancy FROM countries
WHERE countries.government_form = "Constitutional Monarchy" AND countries.capital > 200 AND countries.life_expectancy > 75; 

-- problem 7
SELECT countries.name, cities.name, cities.district, cities.population FROM countries
JOIN cities ON country_id = countries.id
WHERE cities.district = "Buenos Aires" AND cities.population > 500000;

-- problem 8
SELECT countries.region, COUNT(countries.region) FROM countries
GROUP BY countries.region
ORDER BY COUNT(countries.region) DESC;

