(function (module) {
    TurnoFactory.$inject = [
        'BaseFactory'
    ];
    function TurnoFactory(BaseFactory) {
        var turno = [];
        var url = '/api/Turno/';
        turno.ObtenerTurno = function () {
            return BaseFactory.Obtener(url);
        };
        turno.GuardarTurno = function (modelo) {
            return BaseFactory.Guardar(url, modelo);
        };
        turno.EliminarTurno = function (modelo) {
            return BaseFactory.Eliminar(url, modelo);
        };
        return turno;
    }
    module.factory('TurnoFactory', TurnoFactory);
})(angular.module("app-buenaventura"));