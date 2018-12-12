from rest_framework import routers
from django.conf.urls import url,include
from collectorApp.api import resources


router = routers.DefaultRouter()
router.register(r'Operador',resources.OperadorViewset,'OperadorList')
router.register(r'Turno',resources.TurnoViewset,'TurnoList')
router.register(r'Equipo',resources.EquipoViewset,'EquipoList')
router.register(r'Actividad',resources.ActividadViewset,'ActividadList')
router.register(r'Detalle_actividad',resources.Detalle_actividadViewset,'Detalle_actividadList')
router.register(r'Scoop',resources.SimbaViewset,'ScooplList')
router.register(r'Simba',resources.SimbaViewset,'SimbalList')



urlpatterns = [
    url(r'^', include(router.urls)),
]
