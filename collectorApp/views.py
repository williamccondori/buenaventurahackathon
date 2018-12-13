from django.shortcuts import render
from django.http import HttpResponse
from django.utils.decorators import decorator_from_middleware

from collectorApp.middlewares.autenticacion_middleware import AutenticacionMiddleware

@decorator_from_middleware(AutenticacionMiddleware)
def dashboard(request):
    return render(request, 'dashboard.html')

@decorator_from_middleware(AutenticacionMiddleware)
def gestion_inicio(request):
    return render(request, 'gestion/inicio.html')

@decorator_from_middleware(AutenticacionMiddleware)
def gestion_operador(request):
    return render(request, 'gestion/operador.html')

@decorator_from_middleware(AutenticacionMiddleware)
def estadistica_inicio(request):
    return render(request, 'estadistica/inicio.html')

@decorator_from_middleware(AutenticacionMiddleware)
def estadistica_reporteuno(request):
    return render(request, 'estadistica/reporteuno.html')

@decorator_from_middleware(AutenticacionMiddleware)
def estadistica_reportedos(request):
    return render(request, 'estadistica/reportedos.html')
