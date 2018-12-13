from django.db import models
from datetime import date,datetime
# Create your models here.
class operador(models.Model):
    nombre_operador = models.CharField(max_length=12,null=False)
    usuario = models.CharField(max_length=12,null=False)
    password = models.CharField(max_length=12,null=False)
    tipo_operador = models.IntegerField(null=False)
    def __str__(self):
        return(self.nombre_operador+" "+self.usuario+" "+self.password)

class turno(models.Model):
    descripcion_turno = models.CharField(max_length=12, null=False)
    def __str__(self):
        return(self.descripcion_turno)

class equipo(models.Model):
    nombre_equipo = models.CharField(max_length=12, null=False)
    modelo = models.CharField(max_length=12, null=False)
    estado = models.IntegerField( null=False)
    def __str__(self):
        return(self.nombre_equipo+" "+self.modelo+" ")

class actividad(models.Model):
    id_turno=models.ForeignKey(turno,on_delete=models.CASCADE,related_name="actividad_turno")
    id_operador = models.ForeignKey(operador,on_delete=models.CASCADE, related_name="actividad_operador")
    id_ayudante=models.ForeignKey(operador,on_delete=models.CASCADE, related_name="actividad_ayudante",null=True)
    id_equipo=models.ForeignKey(equipo,on_delete=models.CASCADE, related_name="actividad_equipo")
    fecha_actividad = models.DateField(blank=True, default=date.today)
    nivel = models.CharField(max_length=12, null=True)


class detalle_actividad(models.Model):
    id_actividad = models.ForeignKey(actividad,on_delete=models.CASCADE, related_name="actividad_detalle_actividad")
    actividad=models.CharField(max_length=50, null=False)
    hora_inicio=models.DateTimeField(blank=True, auto_now_add=True)
    hora_fin = models.DateTimeField(blank=True, auto_now_add=True)
    codigo_operacion=models.CharField(max_length=50, null=False)
    descripcion_operacion=models.CharField(max_length=50, null=False)
    labor_origen=models.CharField(max_length=50, null=False)
    labor_destino=models.CharField(max_length=50, null=False)
    observaciones=models.CharField(max_length=50, null=False)
    tipo_material= models.CharField(max_length=50, null=False)
    labor_s=models.CharField(max_length=50, null=False)
    proyecto_s=models.CharField(max_length=50, null=False)
    fila_s=models.CharField(max_length=50, null=False)
    num_taladro_s=models.CharField(max_length=50, null=False)
    num_barras_s=models.CharField(max_length=50, null=False)
    longitud_s=models.CharField(max_length=50, null=False)
    inclinacion_s=models.CharField(max_length=50, null=False)
    num_broca_s=models.CharField(max_length=50, null=False)
    hr_diesel_inicial=models.CharField(max_length=50, null=False)
    hr_diesel_final=models.CharField(max_length=50, null=False)
    hr_electricidad_inicial_s=models.CharField(max_length=50, null=False)
    hr_electricidad_final_s=models.CharField(max_length=50, null=False)
    
class simba(models.Model):
    id_detalle_actividad=models.ForeignKey(detalle_actividad,on_delete=models.CASCADE,related_name="simba_detalle_actividad")
    percusion=models.CharField(max_length=20, null=False)
    longitud=models.CharField(max_length=20, null=False)
    def __str__(self):
        return(self.id_detalle_actividad+" "+self.percusion+" "+self.longitud+" "+self.longitud)


class scoop(models.Model):
    id_detalle_actividad=models.ForeignKey(detalle_actividad,on_delete=models.CASCADE,related_name="scoop_detalle_actividad")
    horometro=models.CharField(max_length=20, null=False)
    numero_cucharas=models.CharField(max_length=20, null=False)
    material=models.CharField(max_length=20, null=False)
    toneladas=models.CharField(max_length=20, null=False)
    def __str__(self):
        return(self.id_detalle_actividad+" "+self.horometro+" "+self.numero_cucharas+" "+self.material+" "+self.toneladas)


















