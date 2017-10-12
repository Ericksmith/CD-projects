from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

@app.route('/') 
def index():
    query = "SELECT * FROM friends" 
    friends = mysql.query_db(query)  
    print(query)
    return(render_template('index.html'))
app.run(debug=True)