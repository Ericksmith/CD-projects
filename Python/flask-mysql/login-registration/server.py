from flask import Flask, session, redirect, render_template, request, flash
import md5
from mysqlconnection import MySQLConnector
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
app.secret_key = "blbfdfdsafah"
mysql = MySQLConnector(app, 'mydb')

@app.route('/')
def index():
    if(session.get('logged_in') == True):
        return redirect('/dashboard')
    return render_template('index.html')

@app.route('/process', methods=['post'])
def process():
    notvalid = False
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    password_confirm = request.form['password_confirm']
    if len(first_name) < 2 or len(last_name) < 2:
        flash('Your first and last name must be 2 or more letters long')
        notvalid = True
    if EMAIL_REGEX.match(email) == None:
        flash('Incorrect email address format.')
        notvalid = True
    if len(password) < 8:
        flash('Password must be longer than 8 characters.')
        notvalid = True
    if password != password_confirm:
        flash('Your password does not match the confirmation.')
        notvalid = True
    if notvalid:
        return redirect('/')
    password = md5.new(password).hexdigest()
    query = 'INSERT INTO users(first_name, last_name, email, password) VALUES(:first_name, :last_name, :email, :password)'
    data = {'first_name': first_name, 'last_name': last_name, 'email' : email, 'password': password}
    mysql.query_db(query, data)
    return redirect('/dashboard')

@app.route('/signIn', methods=['POST'])
def signIN():
    notvalid = False
    email = request.form['email']
    password = request.form['password']
    if EMAIL_REGEX.match(email) == None:
        flash('Incorrect email address format.')
        notvalid = True
    if notvalid:
        return redirect('/')
    query= 'SELECT password, id FROM users WHERE email = "' + email + '"'
    hashedpass = mysql.query_db(query)
    if hashedpass[0]['password'] != md5.new(password).hexdigest():
        flash('Password does not match password on file')
        return redirect('/')
    session.('logged_in') = True
    session['id'] = hashedpass[0]['id']
    return redirect('/dashboard')

@app.route('/dashboard')
def dashboard():
    if session.get('logged_in') != True:
        return redirect('/')
    userId = session.get('id')
    query = 'SELECT first_name FROM users WHERE id = '+ str(userId)
    response = mysql.query_db(query)
    first_name = response[0]['first_name']
    return render_template('dashboard.html', first_name = first_name)

@app.route('/logout')
def logout():
    session.get('logged_in') != True
    return redirect('/')

app.run(debug=True)