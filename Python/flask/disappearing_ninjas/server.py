from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ninja')
def ninja():
    return render_template('ninja.html')

@app.route('/ninja/<color>')
def ninja_color(color):
    if color == 'blue':
        return  render_template('leo.html')
    elif color == 'red':
        return render_template('raph.html')
    elif color == 'purple':
        return render_template('donny.html')
    elif color == 'orange':
        return render_template('mikey.html')
    return render_template('april.html')
    

app.run(debug=True)