angular.module('turnosApp').component('modalLogin', {
    templateUrl: './js/components/modal-login/modal-login.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function(PacientesService) {
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
            console.log($ctrl.proyecto);

            PacientesService.login($ctrl.proyecto).then(
                function(rta) {
                    console.log(rta);
                    console.log(rta.data.Token);
                    localStorage.setItem("token", rta.data.Token);
                },
                function(rta) {
                    console.log(rta.data);;
                }
            );
        }


    }
});