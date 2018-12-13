(function (module) {
    EquipoFactory.$inject = [
        'BaseFactory'
    ];
    function EquipoFactory(BaseFactory) {
        var equipo = [];
        var url = '/api/Equipo/';
        equipo.ObtenerEquipo = function () {
            return BaseFactory.Obtener(url);
        };
        equipo.GuardarEquipo = function (modelo) {
            return BaseFactory.Guardar(url, modelo);
        };
        equipo.EliminarEquipo = function (modelo) {
            return BaseFactory.Eliminar(url, modelo);
        };
        return equipo;
    }
    module.factory('EquipoFactory', EquipoFactory);
})(angular.module("app-buenaventura"));