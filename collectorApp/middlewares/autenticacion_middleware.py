from django.shortcuts import redirect

class AutenticacionMiddleware(object):
    def process_request(self, request):
        if not (request.session.get('usuario', False)):
            return redirect('/login?message=No tiene los accesos correspondientes!')
        return None