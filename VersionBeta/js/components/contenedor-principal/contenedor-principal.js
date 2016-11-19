function contenedorPrincipalCtrl($uibModal, $log, $document) {
    var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];
    $ctrl.animationsEnabled = true;
    $ctrl.openComponentModalLogin = function() {
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            component: 'modalLogin',
            resolve: {
                items: function() {
                    return $ctrl.items;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            $ctrl.selected = selectedItem;
        }, function() {
            $log.info('modal-login dismissed at: ' + new Date());
        });
    };

    $ctrl.openComponentModalRegistro = function() {
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            component: 'modalRegistro',
            resolve: {
                items: function() {
                    return $ctrl.items;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            $ctrl.selected = selectedItem;
        }, function() {
            $log.info('modal-registro dismissed at: ' + new Date());
        });
    };

    $ctrl.toggleAnimation = function() {
        $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
    };
}

angular.module('turnosApp')
    .component('contenedorPrincipal', {
        templateUrl: './js/components/contenedor-principal/contenedor-principal.html',
        controller: contenedorPrincipalCtrl
    });