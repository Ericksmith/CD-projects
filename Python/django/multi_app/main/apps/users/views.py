# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'users/index.html')

def login(request):
    return render(request, 'users/login.html')

def register(request):
    return render(request, 'users/register.html')

def new(request):
    return render(request, 'users/new.html')