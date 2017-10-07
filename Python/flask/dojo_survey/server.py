from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def userInput():
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    print(name + location+ language+ comment)
    return render_template('/result.html', language = language, location = location, name = name, comment = comment)

app.run(debug=True)