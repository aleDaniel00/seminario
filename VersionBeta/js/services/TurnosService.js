angular.module('turnosApp')
    .service('TurnosService', [
        '$http',
        function($http) {
            this.crearTurno = function(nuevoTurno) {
                return $http.post('http://turnos-app.com/testapi/v1/createUser', nuevoTurno);
            };
            this.actualizarTurno = function(actualizaciones) {
                return $http.put('http://turnos-app.com/testapi/v1/updateUser', actualizaciones);
            };
            this.getTurnos = function() {
                return $http.get('http://turnos-app.com/testapi/v1/getTurnos');
            };
            this.getTurno = function(id) {
                return $http.get('http://turnos-app.com/testapi/v1/getTurnos/id/:id', );
            };
            this.getEstados = function() {
                return $http.get('http://turnos-app.com/testapi/v1/getEstados');
            };
            this.getPrioridades = function() {
                return $http.get('http://turnos-app.com/testapi/v1/getPrioridades');
            };
        }
    ]);