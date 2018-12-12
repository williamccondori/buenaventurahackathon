(function (module) {
    OperadorFactory.$inject = [
        'BaseFactory'
    ];
    function OperadorFactory(BaseFactory) {
        var operador = [];
        operador.ObtenerOperador = function () {
            return BaseFactory.Obtener('/api/Operador/');
        };
        operador.GuardarOperador = function (modelo) {
            return BaseFactory.Guardar('/api/Operador/', modelo);
        };
        operador.EliminarOperador = function (modelo) {
            return BaseFactory.Eliminar('/api/Operador/', modelo);
        };
        return operador;
    }
    module.factory('OperadorFactory', OperadorFactory);
})(angular.module("app-buenaventura"));