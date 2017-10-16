# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import random
from django.shortcuts import render, redirect
from datetime import datetime
# Create your views here.
def index(request):
    if request.session.get('gold') is None:
        request.session['gold'] = 0
    if request.session.get('activity') is None:
        request.session['activity'] = []
    print(request.session['activity'])
    return render(request, 'ninja_gold/index.html')

def process_money(request):
    if request.method == 'POST':
        location = request.POST['building']
        if location == 'farm':
            gold = random.randint(10,20)
            request.session['gold'] += gold
            now = str(datetime.now())
            request.session['activity'].insert(0, 'Earned ' + str(gold) + ' gold from the farm!(' + now + ')' )
        elif location == 'cave':
            gold = random.randint(5,10)
            request.session['gold'] += gold
            now = str(datetime.now())
            request.session['activity'].insert(0, 'Earned ' + str(gold) + ' gold from the cave!(' + now + ')' )
        elif location == 'house':
            gold = random.randint(2,5)
            request.session['gold'] += gold
            now = str(datetime.now())
            request.session['activity'].insert(0, 'Earned ' + str(gold) + ' gold from the house!(' + now + ')' )
        elif location == 'casino':
            if random.randint(0,1) == 1:
                gold = random.randint(0,50)
                request.session['gold'] += gold
                now = str(datetime.now())
                request.session['activity'].insert(0, 'Earned ' + str(gold) + ' gold from the casino!(' + now + ')' )
            else:
                gold = random.randint(0,50)
                request.session['gold'] -= gold
                now = str(datetime.now())
                request.session['activity'].insert(0, 'Lost ' + str(gold) + ' gold from the casino!(' + now + ')' )
        return redirect('/')