# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string


# Create your views here.
def index(request):
    if request.session.get('attempts') == None:
        request.session['attempts'] = 1
    
    return render(request, 'random_word/index.html')

def generate(request):
    if request.method == 'POST':
        request.session['attempts'] += 1
        request.session['random_word'] = get_random_string(length=14)
        return redirect('/')
    s = 'Problem'
    return HttpResponse(s)

def reset(request):
    request.session['attempts'] = 1
    return redirect('/')