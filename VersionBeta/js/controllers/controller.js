angular.module('turnosApp').controller('ModalInstanceCtrl', function($uibModalInstance, items) {
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
        item: $ctrl.items[0]
    };

    $ctrl.ok = function() {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('turnosApp').component('modalComponent', {
    templateUrl: 'myModalContent.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function() {
        var $ctrl = this;

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
    }
});