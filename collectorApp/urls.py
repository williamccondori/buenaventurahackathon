from django.urls import path, include
from . import views
from collectorApp.controllers.login_controller import LoginController

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('login', LoginController.as_view(), name='login'),
    path('gestion', views.gestion_inicio, name='gestion_inicio'),
    path('gestion/operador', views.gestion_operador, name='gestion_operador'),
]