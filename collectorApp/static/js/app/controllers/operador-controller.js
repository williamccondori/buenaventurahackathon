(function (module) {

    OperadorController.$inject = ["$scope", "toastr", "OperadorFactory"];

    function OperadorController($scope, toastr, OperadorFactory) {

        $scope.ListaOperador = [];

        $scope.ResetOperador = function () {
            $scope.Operador = {
                Id: 0,
                Estado: EstadoObjeto.SinCambios
            };
        }

        $scope.Iniciar = function () {
            $scope.ResetOperador();
            $scope.ObtenerOperador();
        };

        $scope.CrearOperador = function () {
            $scope.ResetOperador();
            $scope.Operador.Estado = EstadoObjeto.Nuevo;
            Bootstrap.AbrirModal('#app-modal-operador');
        };

        $scope.ModificarOperador = function (modelo) {
            $scope.ResetOperador();
            $scope.Operador = modelo;
            $scope.Operador.Estado = EstadoObjeto.Modificado;
            Bootstrap.AbrirModal('#app-modal-operador');
        };

        $scope.CancelarOperador = function () {
            Bootstrap.CerrarModal('#app-modal-operador');
        };

        $scope.GuardarOperador = function () {
            OperadorFactory.GuardarOperador($scope.Operador).then(function (response) {
                toastr.success(Mensaje.Correcto.Descripcion, Mensaje.Correcto.Titulo);
                $scope.ObtenerOperador();
            });
            Bootstrap.CerrarModal('#app-modal-operador');
        };

        $scope.EliminarOperador = function (modelo) {
            $scope.Operador = modelo;
            OperadorFactory.EliminarOperador($scope.Operador).then(function (response) {
                toastr.success(Mensaje.Correcto.Descripcion, Mensaje.Correcto.Titulo);
                $scope.ObtenerOperador();
            });
        }

        $scope.ObtenerOperador = function () {
            OperadorFactory.ObtenerOperador().then(function (response) {
                $scope.ListaOperador = response;
            }).catch(function (error) {
                toastr.error(MensajeRespuesta.Error, Mensaje.Error.Titulo);
            });
        };

    }

    module.controller('OperadorController', OperadorController);

})(angular.module('app-buenaventura'));