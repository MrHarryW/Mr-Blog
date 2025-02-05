from django.shortcuts import render, HttpResponse


def index(request):
    return render(request, 'home.html')

# Create your views here.
