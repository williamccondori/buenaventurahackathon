(function (module) {
    DetalleActividadFactory.$inject = [
        'BaseFactory'
    ];
    function DetalleActividadFactory(BaseFactory) {
        var detalle_actividad = [];
        var url = '/api/Detalle_actividad/';
        detalle_actividad.ObtenerDetalleActividad = function () {
            return BaseFactory.Obtener(url);
        };
        detalle_actividad.GuardarDetalleActividad = function (modelo) {
            return BaseFactory.Guardar(url, modelo);
        };
        detalle_actividad.EliminarDetalleActividad = function (modelo) {
            return BaseFactory.Eliminar(url, modelo);
        };
        return detalle_actividad;
    }
    module.factory('DetalleActividadFactory', DetalleActividadFactory);
})(angular.module("app-buenaventura"));