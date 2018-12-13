from collectorApp.dtos.usuario_dto import UsuarioDto
from collectorApp.models import operador


class LoginService(object):

    def validar(self, usuario, password):
        usuario = operador.objects.filter(usuario=usuario, password=password)
        if len(usuario) is 0:
            raise ValueError('Usuario incorrecto!')
        usuario = usuario[0]

        usuario_dto = UsuarioDto(
            id=usuario.id,
            nombre=usuario.nombre_operador,
            usuario=usuario.usuario
        )
        return usuario_dto
