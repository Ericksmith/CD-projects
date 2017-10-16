from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'survey/index.html')

def resultsProcess(request):
    if request.method == 'POST':
        name = request.POST['name']
        location = request.POST['location']
        language = request.POST['language']
        comment = request.POST['comment']
        request.session['formData'] = {
            'name': name,
            'location' : location,
            "language": language,
            'comment' : comment
        }
        if request.session.get('count') == None:
            request.session['count'] = 1
        else:
            request.session['count'] += 1
        return redirect(results)

def results(request):
    return render(request, 'survey/results.html')