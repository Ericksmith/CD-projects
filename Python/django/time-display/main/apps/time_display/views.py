# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime, localtime

# Create your views here.
def index(request):
    time = {
        'time' : strftime("%Y-%B-%d %H:%M %p", localtime())
    }
    return render(request, 'time_display/index.html', time)