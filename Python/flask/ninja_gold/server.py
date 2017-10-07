from flask import Flask, session, redirect, render_template, request
import random
from datetime import datetime

app = Flask(__name__)

app.secret_key = 'Dojodfdsdofjo'

@app.route('/')
def index():
    if session.get('gold') == None:
        session['gold'] = 0 
        session['activity'] = []
    currentGold = session['gold']
    log = session['activity']
    return render_template('index.html', gold = currentGold, log = log)

@app.route('/process_money', methods=['POST'])
def process_money():
    location = request.form['building']
    print(location)
    if location == 'farm':
        gold = random.randint(10,20)
        session['gold'] += gold
        now = str(datetime.now())
        session['activity'].insert(0, 'Earned ' + str(gold) + ' gold from the farm!(' + now + ')' )
    elif location == 'cave':
        gold = random.randint(5,10)
        session['gold'] += gold
        now = str(datetime.now())
        session['activity'].insert(0, 'Earned ' + str(gold) + ' gold from the cave!(' + now + ')' )
    elif location == 'house':
        gold = random.randint(2,5)
        session['gold'] += gold
        now = str(datetime.now())
        session['activity'].insert(0, 'Earned ' + str(gold) + ' gold from the house!(' + now + ')' )
    elif location == 'casino':
        if random.randint(0,1) == 1:
            gold = random.randint(0,50)
            session['gold'] += gold
            now = str(datetime.now())
            session['activity'].insert(0, 'Earned ' + str(gold) + ' gold from the casino!(' + now + ')' )
        else:
            gold = random.randint(0,50)
            session['gold'] -= gold
            now = str(datetime.now())
            session['activity'].insert(0, 'Lost ' + str(gold) + ' gold from the casino!(' + now + ')' )
    return redirect('/')

app.run(debug=True)