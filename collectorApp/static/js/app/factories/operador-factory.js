(function (module) {
    OperadorFactory.$inject = [
        'BaseFactory'
    ];
    function OperadorFactory(BaseFactory) {
        var operador = [];
        var url = '/api/Operador/';
        operador.ObtenerOperador = function () {
            return BaseFactory.Obtener(url);
        };
        operador.GuardarOperador = function (modelo) {
            return BaseFactory.Guardar(url, modelo);
        };
        operador.EliminarOperador = function (modelo) {
            return BaseFactory.Eliminar(url, modelo);
        };
        return operador;
    }
    module.factory('OperadorFactory', OperadorFactory);
})(angular.module("app-buenaventura"));