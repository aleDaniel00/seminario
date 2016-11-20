angular.module('turnosApp').component('modalRegistro', {
    templateUrl: './js/components/modal-registro/modal-registro.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function(PacientesService) {
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
            console.log($ctrl.proyecto);
            PacientesService.createUser($ctrl.proyecto).then(
                function(rta) {
                    console.log(rta.data);

                },
                function(rta) {
                    console.log(rta.data);;
                }
            );
        }

    }
});