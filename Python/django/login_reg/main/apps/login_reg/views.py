from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User
import bcrypt

# Create your views here.
def index(request):
    return render(request, 'login_reg/index.html')

def register(request):
    if request.method == 'POST': 
        errors = User.objects.validator(request.POST)
        if len(errors['error']) or errors.get('password') is not None:
            for error in errors['error']:
                messages.error(request, error)
            if errors.get('password') is not None:
                for error in errors['password']:
                    messages.error(request, error)
                return redirect(index)
        hashed_password = User.objects.password_hasher(request.POST['password'])
        User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=hashed_password)
        return redirect(index)

def signIn(request):
    if request.method == 'POST':
        user = User.objects.get(email=request.POST['email'])
        if User.objects.password_checker(request.POST['password'], user.password):
            request.session['name'] = user.first_name
            return redirect('/success')
        else:
            return redirect(index)

def success(request):
    return render(request, 'login_reg/success.html')