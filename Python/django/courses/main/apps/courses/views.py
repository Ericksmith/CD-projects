from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *

# Create your views here.
def index(request):
    courses = Course.objects.all().values()
    context = {
        'courses': courses,
    }
    return render(request, 'courses/index.html', context)

def confirm(request, id):
    course = Course.objects.get(id=id)
    context = {
        'course' : course,
    }
    return render(request, 'courses/confirm.html', context)

def processCourse(request):
    print('made it')
    if request.method == 'POST':
        errors = Course.objects.validator(request.POST)
        if len(errors):
            print('error')
            for error in errors:
                messages.error(request, error)
            return redirect(index)
        Course.objects.create(name=request.POST['name'], desc=request.POST['desc'])
        print('added')
        return redirect(index)

def remove(request, id):
    deleteCourse = Course.objects.get(id=id)
    deleteCourse.delete()
    return redirect(index)
