(function (module) {

    RegistroDiarioController.$inject = ["$scope", "toastr", "ActividadFactory"];

    function RegistroDiarioController($scope, toastr, ActividadFactory) {

        $scope.ListaActividad = [];
        $scope.ListaActividadHistorica = [];

        $scope.ResetActividad = function () {
            $scope.Actividad = {
                Id: 0,
                Estado: EstadoObjeto.SinCambios
            };
        }

        $scope.Iniciar = function () {
            $scope.ResetActividad();
            $scope.ObtenerActividad();
        };

        $scope.CrearActividad = function () {
            $scope.ResetActividad();
            $scope.Actividad.Estado = EstadoObjeto.Nuevo;
            Bootstrap.AbrirModal('#app-modal-actividad');
        };

        $scope.CancelarActividad = function () {
            Bootstrap.CerrarModal('#app-modal-actividad');
        };

        $scope.GuardarActividad = function () {
            ActividadFactory.GuardarActividad($scope.Actividad).then(function (response) {
                toastr.success(Mensaje.Correcto.Descripcion, Mensaje.Correcto.Titulo);
                $scope.ObtenerActividad();
            });
            Bootstrap.CerrarModal('#app-modal-operador');
        };

        $scope.ObtenerActividad = function () {
            ActividadFactory.ObtenerActividad().then(function (response) {
                angular.forEach(response, function (item) {
                    if (item.id_operador == session_id_operador) {
                        if (item.fecha_actividad == '2018-12-13') {
                            $scope.ListaActividad.push(item);
                        } else {
                            $scope.ListaActividadHistorica.push(item);
                        }
                    }
                });
            }).catch(function (error) {
                toastr.error(MensajeRespuesta.Error, Mensaje.Error.Titulo);
            });
        };

    }

    module.controller('RegistroDiarioController', RegistroDiarioController);

})(angular.module('app-buenaventura'));