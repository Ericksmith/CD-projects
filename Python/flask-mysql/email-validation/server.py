from flask import Flask, redirect, render_template, flash, request, session
from mysqlconnection import MySQLConnection
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = 'Bananarama'
mysql = MySQLConnection(app, 'mydb')

@app.route('/')
def index():
    return(render_template('index.html'))

@app.route('/process', methods=['POST'])
def process():
    if(EMAIL_REGEX.match(request.form['email']) == None):
        flash('Email is not Valid')
        return(redirect('/'))
    query = "INSERT INTO emails(email, created_at, updated_at) VALUES(:email, NOW(), NOW())"
    newemail = request.form['email']
    data = {'email':newemail}
    mysql.query_db(query, data)
    flash(request.form['email'])
    return(redirect('/success'))
    

@app.route('/success')
def success():
    fetchemails = "SELECT email, created_at FROM emails"
    emails = mysql.query_db(fetchemails)
    return(render_template('success.html', emails=emails))

app.run(debug=True)
