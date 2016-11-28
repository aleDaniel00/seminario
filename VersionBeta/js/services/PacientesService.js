angular.module('turnosApp')
    .service('PacientesService', [
        '$http',
        function($http) {
            this.createUser = function(proyecto) {
                return $http.post('http://turnos-app.com/testapi/v1/createUser', proyecto);
            };
            this.updateUser = function(proyecto) {
                var config = {
                    headers: {
                        "Authorization": "ZTE0Y2Y1ZjRiYjQzXWRbZGNlMzlbM2EzZmZfNDFkXzQ2MTIwXzY0XzFkZDBfXV9lXTkwNzQ5XzA0YWVfNGRdNDI5ZTY4MF9dXTE1XzgwNjRbNDZjMTQxMDdkNDdjNTY4MV9bWzQ3XzdjNVtlODkzOGVlNzUyODg="
                    }
                }
                return $http.put('http://turnos-app.com/testapi/v1/updateUser', proyecto, config);
            };
            this.login = function(proyecto) {
                return $http.post('http://turnos-app.com/testapi/v1/security/token', proyecto);
            };
            this.getDatesUser = function(Token) {
                var config = {
                    header: {
                        "Authorization": "ZTE0Y2Y1ZjRiYjQzXWRbZGNlMzlbM2EzZmZfNDFkXzQ2MTIwXzY0XzFkZDBfXV9lXTkwNzQ5XzA0YWVfNGRdNDI5ZTY4MF9dXTE1XzgwNjRbNDZjMTQxMDdkNDdjNTY4MV9bWzQ3XzdjNVtlODkzOGVlNzUyODg="
                    }
                }
                return $http.get('http://turnos-app.com/testapi/v1/getUser', config);
            };
        }
    ]);