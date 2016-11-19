angular
    .module('turnosApp', [
        'ngSanitize',
        'ngRoute',
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap',
        'ngMaterial'
    ])
    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
            // Cada when define una ruta en nuestra aplicación.
                .when('/', {
                    // Le indicamos el template que queremos usar.
                    templateUrl: 'views/home.html'
                })
                .when('/panelTurno', {
                    // Le indicamos el template que queremos usar.
                    'templateUrl': 'views/panelTurno.html'
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
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .dark();
    });