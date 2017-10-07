from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/users', methods=['POST'])
def create_user():
    print("got form!")
    name = request.form['name']
    email = request.form['email']
    print(name + email)
    return redirect('/')

app.run(debug=True)
