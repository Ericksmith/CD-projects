from flask import Flask, session, render_template, redirect, request, flash
import random

app = Flask(__name__)

app.secret_key = 'dontHackMeBro'


@app.route('/')
def index():
    if session.get('win') == None:
        session['win'] = True
    play_status = session['win']
    print(play_status)
    if session.get('rand_num') == None:
        session['rand_num'] = random.randrange(0, 101)
    print(session['rand_num'])
    return render_template('index.html', play_status = play_status)

@app.route('/guess', methods=["POST"])
def guess():
    guess = int(request.form['guess'])
    print(guess)
    if guess < session['rand_num']:
        flash('Too low!')
        return redirect('/')
    elif guess > session['rand_num']:
        flash('Too high!')
        return redirect('/')
    else:
        session['win'] = False
        flash(str(guess) + " was the number!")
        return redirect('/')

@app.route('/playAgain')
def playAgain():
    session['win'] = True
    session['rand_num'] = None
    return redirect('/')

app.run(debug=True)