angular.module('turnosApp')
    .service('PacientesService', [
        '$http',
        function($http) {

            this.traerPorPut = function() {
                return $http.get('http://turnos-app.com/ws/index.php/turnos/2');
            };
        }
    ]);