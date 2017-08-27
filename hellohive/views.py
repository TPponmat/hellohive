from django.http import HttpResponse
from django.shortcuts import render

def hello(request):
    # return HttpResponse("hello teerapong")
    return render(request,"home.html")

def translate(request):

    original = request.GET['name']
    translation = ''

    for word in original.split():
        if word[0] in ['a' ,'e','i','o','u']:
            translation += word
            translation += 'vowel'
        else:
            translation += word
            translation += 'constant'

    # return HttpResponse(translation)
    return render(request, "translate.html", {'original':original ,'translation':translation})