from django.shortcuts import render
from django.http import HttpResponse
from django.utils.decorators import decorator_from_middleware

from collectorApp.middlewares.autenticacion_middleware import AutenticacionMiddleware

@decorator_from_middleware(AutenticacionMiddleware)
def dashboard(request):
    return render(request, 'dashboard.html')

@decorator_from_middleware(AutenticacionMiddleware)
def gestion_personal(request):
    return render(request, 'gestion_personal.html')