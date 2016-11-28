angular
    .module('turnosApp', [
        'ngSanitize',
        'ngRoute',
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap',
        'ngMaterial',
        'widget.scrollbar'
    ])
    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
            // Cada when define una ruta en nuestra aplicación.
                .when('/', {
                    'templateUrl': 'views/home.html'
                })
                .when('/panelTurno', {
                    'templateUrl': 'views/panelTurno.html'
                })
                .when('/panelTurno/turno', {
                    'templateUrl': 'views/turno.html'
                })
                .when('/panelTurno/turnoConfirmado', {
                    'templateUrl': 'views/turnoConfirmado.html'
                })
                .when('/panelCentroMedico', {
                    'templateUrl': 'views/panelCentroMedico.html'
                })
                .otherwise('/');
        }
    ])
    .config(function($mdIconProvider) {
        $mdIconProvider
            .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
            .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
            .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
            .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    })