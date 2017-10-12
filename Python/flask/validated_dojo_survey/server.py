from flask import Flask, render_template, redirect, request, flash

app = Flask(__name__)

app.secret_key = 'Dadsofnjlkasnjf'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/results', methods=['POST'])
def userInput():
    not_valid = False
    if len(request.form['name']) == 0:
        flash('Please enter your name.')
        not_valid = True
    if len(request.form['comment']) > 120:
        flash('Please limit your comment to 120 characters or less.')
        not_valid = True
    if len(request.form['comment']) == 0:
        flash('Please enter a comment.')
        not_valid = True
    if not_valid:
        return redirect('/')
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    print(name + location+ language+ comment)
    return render_template('/results.html', language = language, location = location, name = name, comment = comment)

app.run(debug=True)