from flask import Flask, request, render_template, session, flash, redirect
from mysqlconnection import MySQLConnector

app = Flask(__name__)
app.secret_key = 'snapeKilledDumbledore'
mysql = MySQLConnector(app, 'mydb')

@app.route('/')
def index():
    return redirect('/users')

@app.route('/users')
def users():
    query = 'SELECT * FROM r_users'
    users = mysql.query_db(query)
    return render_template('index.html', users = users)

@app.route('/users/new')
def newUser():
    return render_template('new.html')

@app.route('/users/<id>/edit')
def editUser(id):
    query = 'SELECT * FROM r_users WHERE id = :id'
    data = {
        'id' : id
    }
    user = mysql.query_db(query, data)
    print(user)
    return render_template('edit.html', user = user)

@app.route('/users/<id>')
def userInfo(id):
    query = 'SELECT * FROM r_users WHERE id = ' + str(id)
    user = mysql.query_db(query)
    print(user)
    return render_template('show.html', user = user)

@app.route('/users/create', methods=['POST'])
def createUser():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    query = 'INSERT INTO r_users(first_name, last_name, email, created_at, updated_at) \
    Values (:first_name, :last_name, :email, NOW(), NOW()); \
    SELECT id FROM r_users WHERE email = :email;'
    data = {
        'first_name' : first_name,
        'last_name' : last_name,
        'email' : email,
    }
    id = mysql.query_db(query, data)
    return redirect('/users/' + str(id) )
    

@app.route('/users/<id>/delete')
def deleteUser(id):
    query = 'DELETE FROM r_users Where id = :id'
    data = {
        'id' : int(id)
    }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/users/<id>/update', methods=['POST'])
def update(id):
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    query = 'UPDATE r_users SET first_name = :first_name, last_name = :last_name, email = :email, updated_at = NOW() \
    WHERE id = :id'
    data = {
        'id' : int(id),
        'first_name' : first_name,
        'last_name' : last_name,
        'email' : email,
    }
    mysql.query_db(query, data)
    return redirect('/users/' + str(id))

app.run(debug=True)
