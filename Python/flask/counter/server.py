from flask import Flask, session, render_template, request, redirect

app = Flask(__name__)

app.secret_key = "Dojo"

@app.route('/')
def index():
    if session.get('counter') == None:
        session['counter'] = 0
    session['counter'] += 1
    return render_template('index.html', counter = session['counter'])

@app.route('/doubleCount')
def doubleCount():
    session['counter'] += 2
    return redirect('/')

@app.route('/countReset')
def countReset():
    session['counter'] = 0
    return redirect('/')

app.run(debug=True)
