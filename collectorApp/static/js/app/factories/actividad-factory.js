(function (module) {
    ActividadFactory.$inject = [
        'BaseFactory'
    ];
    function ActividadFactory(BaseFactory) {
        var actividad = [];
        var url = '/api/Actividad/';
        actividad.ObtenerActividad = function () {
            return BaseFactory.Obtener(url);
        };
        actividad.GuardarActividad = function (modelo) {
            return BaseFactory.Guardar(url, modelo);
        };
        actividad.EliminarActividad = function (modelo) {
            return BaseFactory.Eliminar(url, modelo);
        };
        return actividad;
    }
    module.factory('ActividadFactory', ActividadFactory);
})(angular.module("app-buenaventura"));