from flask import Flask, render_template, session, flash, request, redirect

app = Flask(__name__)

app.secret_key = "Thisisthekey"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['post'])
def process():
    bad_user_input = False
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    password_confirm = request.form['password_confirm']
    print(email + password + first_name)
    if len(email) == 0 or len(first_name) == 0 or len(last_name) == 0 or len(password) == 0 or len(password_confirm) == 0:
        flash('Please fill out all fields.')
        bad_user_input = True
    if len(password) > 8:
        flash('Password can be no longer than 8 characters')
        bad_user_input = True
    if password != password_confirm:
        flash('Your password does not match')
        bad_user_input = True
    if bad_user_input:
        return redirect('/')
    return redirect('/')

app.run(debug=True)