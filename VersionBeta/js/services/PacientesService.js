angular.module('turnosApp')
    .service('PacientesService', [
        '$http',
        function($http) {
            /* this.traerPorPut = function() {
                 return $http.put('http://a9501380.ngrok.io/v1/security/token');
             };*/

            this.createUser = function(proyecto) {
                /*var config = {
                    /*headers: {
                        "Authorization": "cualquier cosa"
                    }*
                }*/

                return $http.post('http://ff62d897.ngrok.io/v1/createUser', proyecto);
            };
            this.updateUser = function(proyecto) {
                var config = {
                    headers: {
                        "Authorization": "MDE3ZWMyMTZjNGU3YV9kNTI1MjVdNltbYWRbMl9fNmUxNzI1XzgwMV9fX2I5X2FfNmVdXTkxX10xMTk2MlsxNTQ3OGYwXWZhXzRiOGZjOFs3YmY5Y2RjMmYwNTlbMDYwNTEzMzU3M11mNWNkXzA3MGZlMzA2OWE="
                    }
                }

                return $http.put('http://ff62d897.ngrok.io/v1/updateUser', proyecto, config);
            };
            this.login = function(proyecto) {
                /*var config = {
                    /*headers: {
                        "Authorization": "cualquier cosa"
                    }*
                }*/

                return $http.post('http://ff62d897.ngrok.io/v1/security/token', proyecto);
            };
            this.verDatos = function(Token) {
                var config = {
                    headers: {
                        "Authorization": "MDE3ZWMyMTZjNGU3YV9kNTI1MjVdNltbYWRbMl9fNmUxNzI1XzgwMV9fX2I5X2FfNmVdXTkxX10xMTk2MlsxNTQ3OGYwXWZhXzRiOGZjOFs3YmY5Y2RjMmYwNTlbMDYwNTEzMzU3M11mNWNkXzA3MGZlMzA2OWE="
                    }
                }
                return $http.get('http://ff62d897.ngrok.io/v1/getUser', config);
            };
        }
    ]);