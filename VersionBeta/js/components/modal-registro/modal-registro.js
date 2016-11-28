angular.module('turnosApp').component('modalRegistro', {
    templateUrl: './js/components/modal-registro/modal-registro.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function(PacientesService, $scope) {
        var $ctrl = this;


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

        $ctrl.createUser = function() {
            console.log($ctrl.nuevoUsuario);
            PacientesService.createUser($ctrl.nuevoUsuario).then(
                function(rta) {
                    console.log(rta.data);
                    console.log(rta.data.Info);
                    console.log(rta.data.Error);
                    if (rta.data.Error === 1 || rta.data.Error === 2) {
                        $scope.mensajeError = rta.data.Info;
                    } else if (rta.data.Error === 0) {

                        $scope.mensajeExito = 'Usuario Registrado correctamente';
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