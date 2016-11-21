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
        var neonRedMap = $mdThemingProvider.extendPalette('red', {
            '500': '#1a7887',
            'contrastDefaultColor': 'dark'
        });

        // Register the new color palette map with the name <code>neonRed</code>
        $mdThemingProvider.definePalette('neonRed', neonRedMap);

        // Use that theme for the primary intentions
        $mdThemingProvider.theme('default')
            .primaryPalette('neonRed');


        //$mdThemingProvider.disableTheming();
    });