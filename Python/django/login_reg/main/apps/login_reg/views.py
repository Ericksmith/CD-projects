from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'login_reg/index.html')

def process(request):
    if request.method == 'POST':
        pass
    return redirect(index)

def success(request):
    return render(request, 'login_reg/success.html')