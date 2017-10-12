from flask import Flask, request, render_template, flash, redirect
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app, 'mydb')

@app.route('/')
def index():
    query = "SELECT name, age, MONTHNAME(friend_since) AS month, DAY(friend_since) AS day, YEAR(friend_since) AS year FROM friends"
    friends = mysql.query_db(query)
    return(render_template('index.html', friends = friends))

@app.route('/process', methods=['POST'])
def process():
    query = "INSERT INTO friends(name, age, friend_since, created_at, updated_at) Values(:name, :age, :friend_since, now(), now())"
    data = {'name': request.form['name'], 'age':request.form['age'], 'friend_since':request.form['since']}
    mysql.query_db(query, data)
    return(redirect('/'))

app.run(debug=True)
