from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response


# Create your views here.
def index(request):
    print(request)
    return JsonResponse({
        'title' : 'Wir managen Bürgerbeteiligungen für Sie.',
        'subtitle': 'mitreden. mitgestalten. mitwirken.eu',
        'img': 'urls',
        'img_url': 'https://www.pbconsult.de/wp-content/themes/pbconsult/img/slides/pbconsult-nuernberg-urbane-mobilitaet.jpg',
        'test': 'lorem asdf',
    })
