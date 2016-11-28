angular.module('turnosApp').component('modalLogin', {
    templateUrl: './js/components/modal-login/modal-login.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function(PacientesService, $scope) {
        var $ctrl = this;
        $ctrl.items = ['item1', 'item2', 'item3'];

        $ctrl.animationsEnabled = true;


        $ctrl.$onInit = function() {
            $ctrl.items = $ctrl.resolve.items;
            $ctrl.selected = {
                item: $ctrl.items[0]
            };
        };

        $ctrl.ok = function() {
            $ctrl.close({ $value: $ctrl.selected.item });
        };

        $ctrl.cancel = function() {
            $ctrl.dismiss({ $value: 'cancel' });
        };
        /*
         *
         */

        /* PacientesService.traerPorPut().then(
             function(rta) {
                 console.log(rta.data);

             },
             function(rta) {
                 console.log(rta.data);

             }
         );*/

        $ctrl.login = function() {
            console.log($ctrl.usuarioLogueado);

            PacientesService.login($ctrl.usuarioLogueado).then(
                function(rta) {
                    console.log(rta.data);
                    console.log(rta.data.Token);
                    localStorage.setItem("Token", rta.data.Token);
                    if (rta.data.Error === 1 || rta.data.Error === 2) {
                        $scope.mensajeError = 'Email o contraseña incorrectos';
                    } else if (rta.data.Error === 0) {

                        $scope.mensajeExito = 'Usuario logueado correctamente';
                    }

                },
                function(rta) {
                    console.log(rta.data);
                    $scope.mensajeError = 'Hay un error externo a turnos-app';
                }
            );
        }


    }
});