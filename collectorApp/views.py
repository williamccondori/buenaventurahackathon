from django.shortcuts import render
from django.http import HttpResponse
from django.utils.decorators import decorator_from_middleware

from collectorApp.middlewares.autenticacion_middleware import AutenticacionMiddleware


@decorator_from_middleware(AutenticacionMiddleware)
def dashboard(request):
    return render(request, 'dashboard.html', get_user(request))


@decorator_from_middleware(AutenticacionMiddleware)
def registro_diario(request):
    return render(request, 'registro_diario.html', get_user(request))


@decorator_from_middleware(AutenticacionMiddleware)
def gestion_inicio(request):
    return render(request, 'gestion/inicio.html', get_user(request))


@decorator_from_middleware(AutenticacionMiddleware)
def gestion_operador(request):
    return render(request, 'gestion/operador.html', get_user(request))


@decorator_from_middleware(AutenticacionMiddleware)
def estadistica_inicio(request):
    return render(request, 'estadistica/inicio.html', get_user(request))


@decorator_from_middleware(AutenticacionMiddleware)
def estadistica_reporteuno(request):
    return render(request, 'estadistica/reporteuno.html', get_user(request))


@decorator_from_middleware(AutenticacionMiddleware)
def estadistica_reportedos(request):
    return render(request, 'estadistica/reportedos.html', get_user(request))


def get_user(request):
    return {
        'id' : request.session.get('id', False),
        'nombre' : request.session.get('nombre', False)
    }
