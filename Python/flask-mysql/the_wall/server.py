from flask import Flask, session, redirect, render_template, request, flash
import md5
from mysqlconnection import MySQLConnector
import crypt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


app = Flask(__name__)
app.secret_key = "blahbdsaflah"
mysql = MySQLConnector(app, 'mydb')
app.jinja_env.add_extension('jinja2.ext.loopcontrols')

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
    session['logged_in'] = True
    session['id'] = hashedpass[0]['id']
    return redirect('/dashboard')

@app.route('/dashboard')
def dashboard():
    if session.get('logged_in') != True:
        return redirect('/')
    userId = session.get('id')
    query = 'SELECT * FROM users'
    users = mysql.query_db(query)
    for i in users:
        if i['id'] == userId:
            first_name = i['first_name']
    query = 'SELECT * FROM posts ORDER BY posts.id DESC'
    posts = mysql.query_db(query)
    query = 'SELECT * FROM comments ORDER BY id ASC'
    comments = mysql.query_db(query)
    return render_template('dashboard.html', first_name = first_name, posts = posts, users = users, comments = comments)

@app.route('/comment', methods=['post'])
def comment():
    postId = request.form['postId']
    commentTxt = request.form['comment']
    query = 'INSERT INTO comments(users_id, posts_id, comment, created_at, updated_at) VALUES( :id, :posts_id, :comment, NOW(), NOW())'
    data = {
        'id' : session['id'],
        'posts_id': postId,
        'comment' : commentTxt
    }
    mysql.query_db(query, data)
    return redirect('/dashboard')

@app.route('/makePost',  methods=['post'])
def makePost():
    postText = request.form['postText']
    query = 'INSERT INTO posts(users_id, message, created_at, updated_at) VALUES( :user_id, :postText, NOW(), NOW())'
    data = {
        'user_id': session['id'],
        'postText': postText,
    }
    mysql.query_db(query, data)
    return redirect('/dashboard')


@app.route('/logout')
def logout():
    session['logged_in'] = False
    return redirect('/')

app.run(debug=True)