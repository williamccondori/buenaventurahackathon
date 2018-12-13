(function (module) {

    RegistroDiarioController.$inject = ["$scope", "toastr", "ActividadFactory", "EquipoFactory",
     "TurnoFactory", "OperadorFactory", "DetalleActividadFactory"];

    function RegistroDiarioController($scope, toastr, ActividadFactory, EquipoFactory, TurnoFactory
        , OperadorFactory, DetalleActividadFactory) {

        $scope.ListaActividad = [];
        $scope.ListaActividadHistorica = [];
        $scope.ListaEquipo = [];
        $scope.ListaTurno = [];
        $scope.ListaAyudante = [];
        

        $scope.ResetActividad = function () {
            $scope.Actividad = {
                Id: 0,
                Estado: EstadoObjeto.SinCambios
            };
        }

        $scope.ResetDetalleActividad = function (id_actividad) {
            $scope.DetalleActividad = {
                Id: 0,
                id_actividad: id_actividad,
                Estado: EstadoObjeto.SinCambios
            };
        }

        $scope.Iniciar = function () {
            $scope.ResetActividad();
            $scope.ObtenerEquipo();
            $scope.ObtenerTurno();
            $scope.ObtenerActividad();
            $scope.ObtenerAyudante();
        };

        $scope.CrearActividad = function () {
            $scope.ResetActividad();
            $scope.Actividad.Estado = EstadoObjeto.Nuevo;
            Bootstrap.AbrirModal('#app-modal-actividad');
        };

        $scope.CancelarActividad = function () {
            Bootstrap.CerrarModal('#app-modal-actividad');
        };

        $scope.CrearDetalleActividad = function (id_actividad) {
            $scope.ResetDetalleActividad(id_actividad);
            $scope.DetalleActividad.Estado = EstadoObjeto.Nuevo;
            Bootstrap.AbrirModal('#app-modal-detalle-actividad');
        };

        $scope.CancelarDetalleActividad = function () {
            Bootstrap.CerrarModal('#app-modal-detalle-actividad');
        };

        $scope.GuardarActividad = function () {
            $scope.Actividad.id_operador = session_id_operador;
            $scope.Actividad.fecha_actividad = $scope.format($scope.Actividad.fecha);
            ActividadFactory.GuardarActividad($scope.Actividad).then(function (response) {
                toastr.success(Mensaje.Correcto.Descripcion, Mensaje.Correcto.Titulo);
                $scope.ObtenerActividad();
            });
            Bootstrap.CerrarModal('#app-modal-actividad');
        };

        $scope.ObtenerActividad = function () {
            $scope.ListaActividad = [];
            $scope.ListaActividadHistorica = [];
            ActividadFactory.ObtenerActividad().then(function (response) {
                angular.forEach(response, function (item) {
                    if (item.id_operador == session_id_operador) {
                        item.DetallesActividad = $scope.ObtenerDetalleActividad(item.id);
                        console.log(item);
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

        $scope.ObtenerDetalleActividad = function (id_actividad) {
            var ListaDetalleActividad = [];
            DetalleActividadFactory.ObtenerDetalleActividad().then(function (response) {
                angular.forEach(response, function (item) {
                    if (item.id_actividad == id_actividad) {
                        ListaDetalleActividad.push(item);
                    }
                });
            }).catch(function (error) {
                toastr.error(MensajeRespuesta.Error, Mensaje.Error.Titulo);
            });
            return ListaDetalleActividad;
        };

        $scope.ObtenerEquipo = function () {
            EquipoFactory.ObtenerEquipo().then(function (response) {
                $scope.ListaEquipo = response;
            }).catch(function (error) {
                toastr.error(MensajeRespuesta.Error, Mensaje.Error.Titulo);
            });
        };

        $scope.ObtenerTurno = function () {
            TurnoFactory.ObtenerTurno().then(function (response) {
                $scope.ListaTurno = response;
            }).catch(function (error) {
                toastr.error(MensajeRespuesta.Error, Mensaje.Error.Titulo);
            });
        };

        $scope.ObtenerAyudante = function () {
            $scope.ListaAyudante = [];
            OperadorFactory.ObtenerOperador().then(function (response) {
                angular.forEach(response, function (item) {
                    if (item.tipo_operador == 1) {
                        $scope.ListaAyudante.push(item);
                    }
                });
            }).catch(function (error) {
                toastr.error(MensajeRespuesta.Error, Mensaje.Error.Titulo);
            });
        };

        $scope.format = function (date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
        
            return [year, month, day].join('-');
        }
    }

    module.controller('RegistroDiarioController', RegistroDiarioController);

})(angular.module('app-buenaventura'));