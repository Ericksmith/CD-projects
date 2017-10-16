# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    return render(request, 'amadon/index.html')

def process(request):
    productPrice = {
        '001': 15.99,
        '002': 35.99,
        '003': 13.99,
        '004': 99.99
    }
    if request.method == 'POST':
        product_id = request.POST['product_id']
        if product_id not in productPrice:
            return redirect('/')
        amount = request.POST['amount']
        price = productPrice[product_id]
        request.session['currentTotal'] = 'Your credit card wash charged ' + str(price * int(amount)) + ' for ' + str(amount) + ' items at ' + str(price) + ' each.'
        if request.session.get('runningTotal') is None:
            request.session['runningTotal'] = price * int(amount)
            request.session['count'] = int(amount)
        else:
            request.session['runningTotal'] += price * int(amount)
            request.session['count'] += int(amount)
        return redirect('/checkout')
    else:
        return redirect('/')

def checkout(request):
    return render(request, 'amadon/checkout.html')