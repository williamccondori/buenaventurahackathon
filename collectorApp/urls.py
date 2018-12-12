from django.urls import path, include
from . import views
from collectorApp.controllers.login_controller import LoginController

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('login', LoginController.as_view(), name='login')
]