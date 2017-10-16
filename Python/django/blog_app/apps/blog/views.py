# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, HttpResponse, redirect
# the index function is called when root is visited
def index(request):
    response = "Placeholder to later display all the list of blogs"
    return render(request, 'blog/index.html')

def new(request):
    response = 'placeholder to display a new form to create a new blog'
    return HttpResponse(response)

def create(request):
    if request.method == "POST":
        print("*"*50)
        print(request.POST)
        print(request.POST['name'])
        print(request.POST['desc'])
        request.session['name'] = "test"  # more on session below
        print("*"*50)
        return redirect("/")
    else:
        return redirect("/")

def show(request, num):
    response = 'Placeholder for blog #' +num
    return HttpResponse(response)

def edit(request, num):
    response = 'placeholder to edit blog ' + num
    return HttpResponse(response)

def delete(request, num):
    return redirect(index)