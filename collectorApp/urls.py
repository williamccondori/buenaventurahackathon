from django.urls import path, include
from . import views
from collectorApp.controllers.login_controller import LoginController

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('registro_diario', views.registro_diario, name='registro_diario'),

    path('login', LoginController.as_view(), name='login'),
    path('gestion', views.gestion_inicio, name='gestion_inicio'),
    path('gestion/operador', views.gestion_operador, name='gestion_operador'),


    path('estadistica', views.estadistica_inicio, name='estadistica_inicio'),
    path('estadistica/reporteuno', views.estadistica_reporteuno, name='estadistica_reporteuno'),
    path('estadistica/reportedos', views.estadistica_reportedos, name='estadistica_reportedos'),
]