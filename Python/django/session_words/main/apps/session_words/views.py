# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from time import gmtime, strftime

# Create your views here.
def index(request):
    return render(request, 'session_words/index.html')

def process(request):
    if request.method == "POST":
        word = request.POST.get('word')
        color = request.POST.get('color')
        size = request.POST.get('size')
        if word == '':
            word = '?'
        if request.session['wordData'] == None:
            request.session['wordData'] = [{
                'word': word,
                'color' : color,
                'size' : size,
                'time' : strftime('%H:%M:%S, %B-%d-%Y', gmtime())
            }]
        else:
            newData = request.session['wordData']
            addedWord = {
                'word': word,
                'color' : color,
                'size' : size,
                'time' : strftime('%H:%M:%S, %B-%d-%Y', gmtime())
            }
            newData.append(addedWord)
            request.session['wordData'] = newData
            print(newData)
        return redirect('/')

def clear(request):
    if request.method == 'POST':
        request.session['wordData'] = None
        return redirect('/')