
-- problem 1
SELECT customer.first_name, customer.last_name, customer.email, address.address FROM customer
JOIN address ON customer.address_id = address.address_id
WHERE address.city_id = 312;

-- problem 2
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre FROM film
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name = "Comedy"; 

-- problem 3
SELECT film_actor.actor_id, film.title, film.description, film.release_year FROM film
JOIN film_actor ON film_actor.film_id = film.film_id
WHERE film_actor.actor_id = 5;

-- problem 4 DOES NOT WORK
SELECT store.store_id, customer.first_name, customer.last_name, customer.email, address.address FROM customer
JOIN store ON store.store_id = customer.store_id
JOIN address ON address.address_id = store.address_id
JOIN city ON address.city_id = city.city_id
WHERE store.store_id = 1 and city.city_id = 1;

-- problem 5
SELECT film.title, film.description, film.release_year, film.rating, film.special_features FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE film.rating = "G" AND film.special_features LIKE '%behind the scenes' AND actor.actor_id = 15;

-- problem 6
SELECT film.film_id, film.title, actor.actor_id, actor.first_name, actor.last_name FROM film
JOIN film_actor ON film_actor.film_id = film.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE film.film_id = 369;

-- problem 7
SELECT film.rental_rate, film.title, film.description, film.release_year, film.rating, film.special_features, category.name FROM film
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE film.rental_rate = 2.99 AND category.name = 'Drama';

-- problem 8
SELECT actor.first_name, actor.last_name, film.title, film.description, film.release_year, 
film.rating, film.special_features, category.name FROM film
JOIN film_actor ON film_actor.film_id = film.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE actor.first_name = 'Sandra' AND actor.last_name = 'KILMER' AND category.name = 'Action';
