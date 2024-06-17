"""This is the views.py file for the todos app. It will contain the views for the app."""
from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def index(request):
    """This is the index view for the todos app. It will return a simple"""
    return HttpResponse("Hello, world. You're at the todos index.")
