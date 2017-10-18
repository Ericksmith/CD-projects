# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import *
from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages

# Create your views here.
def index(request):
    return redirect('/users')

def showAll(request):
    result = User.objects.all().values()
    data = {
        'users' : result
    }
    print(data)
    return render(request, 'restful_users/index.html', data)

def new(request):
    return render(request, 'restful_users/new.html')

def edit(request, id):
    result = User.objects.get(id=id)
    
    data = {
        'users': result
    }
    return render(request, 'restful_users/edit.html', data)

def showOne(request, id):
    result = User.objects.get(id=id)
    data = {
        'user': result
    }
    return render(request, 'restful_users/show.html', data)

def delete(request, id):
    result = User.objects.get(id=id)
    result.delete()
    return redirect(showAll)

def update(request, id):
    result = User.objects.get(id=id)
    result.first_name = request.POST['first_name']
    result.last_name = request.POST['last_name']
    result.email = request.POST['email']
    result.save()
    return redirect(showAll)

def create(request):
    if request.method == 'POST':
        errors = User.objects.validator(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error)
            return redirect(new)
        createUser = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'])
        createUser.save()
        return redirect(showAll)
    return redirect(showAll)