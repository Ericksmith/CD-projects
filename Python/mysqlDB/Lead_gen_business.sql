-- problem 1
SELECT SUM(amount) AS total_amount FROM billing
WHERE charged_datetime LIKE '%2012-03%';

-- problem 2
SELECT SUM(amount) AS total_amount FROM billing
WHERE billing.client_id = 2

-- problem 3
SELECT clients.first_name, clients.last_name, sites.domain_name FROM clients
JOIN sites ON sites.client_id = clients.client_id
WHERE clients.client_id = 10;

-- problem 4
SELECT clients.client_id, clients.first_name, clients.last_name, 
COUNT(sites.domain_name), MONTHNAME(created_datetime), YEAR(created_datetime) FROM clients
JOIN sites ON sites.client_id = clients.client_id
WHERE clients.client_id = 1
GROUP BY sites.domain_name;

-- problem 5
SELECT sites.domain_name, COUNT(leads.leads_id) FROM sites
JOIN leads ON leads.site_id = sites.site_id
WHERE leads.registered_datetime between '2011-01-01 00:00:00' AND '2011-02-15 00:00:00'
GROUP BY sites.domain_name;

-- problem 6
SELECT clients.first_name, clients.last_name, COUNT(leads.leads_id) FROM sites
JOIN leads on leads.site_id = sites.site_id
JOIN clients on clients.client_id = sites.client_id
WHERE leads.registered_datetime between '2011-01-01' AND '2011-12-31'
group by clients.client_id