angular.module('turnosApp')
    .service('CMedicosService', [
        '$http',
        function($http) {

            this.getCentros = function() {
                return $http.get('http://turnos-app.com/testapi/v1/getCentros');
            };
            this.getCentro = function() {
                return $http.get('http://turnos-app.com/testapi/v1/getCentros');
            };

        }
    ]);