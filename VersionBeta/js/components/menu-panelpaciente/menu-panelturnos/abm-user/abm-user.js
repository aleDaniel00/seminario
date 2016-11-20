angular.module('turnosApp')
    .component('abmUser', {
        templateUrl: './js/components/menu-panelpaciente/menu-panelturnos/abm-user/abm-user.html',
        controller: function($scope, $mdDialog, PacientesService) {
            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
            $scope.user = {
                title: 'Developer',
                email: 'ipsum@lorem.com',
                firstName: '',
                lastName: '',
                company: 'Google',
                address: '1600 Amphitheatre Pkwy',
                city: 'Mountain View',
                state: 'CA',
                biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
                postalCode: '94043'
            };

            $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
                'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
                'WY').split(' ').map(function(state) {
                return { abbrev: state };
            });
            $scope.closeDialog = function() {
                    $mdDialog.hide();
                }
                /*
                 * controller para el formulario 
                 */
            $scope.user = {
                name: 'John Doe',
                email: '',
                phone: '',
                address: 'Mountain View, CA',
                donation: 19.99
            };

            PacientesService.verDatos().then(
                function(rta) {
                    console.log(rta.data);
                    $scope.user = {
                        Nombre: '',
                        email: rta.data.Nombre,
                        NumeroSocio: parseInt(rta.data.NumeroSocio)
                    };
                },
                function(rta) {
                    console.log(rta.data);

                }

            );

            $scope.updateUser = function() {
                console.log($scope.user);
                PacientesService.updateUser($scope.user).then(
                    function(rta) {
                        console.log(rta.data);

                    },
                    function(rta) {
                        console.log(rta.data);;
                    }
                );
            }
        }
    })
    .config(function($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow

        $mdThemingProvider.definePalette('amazingPaletteName', {
            '50': 'ffebee',
            '100': 'ffcdd2',
            '200': 'ef9a9a',
            '300': 'e57373',
            '400': 'ef5350',
            '500': 'f44336',
            '600': 'e53935',
            '700': 'd32f2f',
            '800': 'c62828',
            '900': 'b71c1c',
            'A100': 'ff8a80',
            'A200': 'ff5252',
            'A400': 'ff1744',
            'A700': 'd50000',
            'contrastDefaultColor': 'light', // whether, by default, text (contrast)
            // on this palette should be dark or light

            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'
            ],
            'contrastLightColors': undefined // could also specify this if default was 'dark'
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('amazingPaletteName')



    });