angular.module('turnosApp')
    .component('menuPanelpaciente', {
        templateUrl: './js/components/menu-panelpaciente/menu-panelpaciente.html',
        controller: function($scope, $timeout, $mdSidenav) {
            $scope.toggleLeft = buildToggler('left');
            $scope.toggleRight = buildToggler('right');

            function buildToggler(componentId) {
                return function() {
                    $mdSidenav(componentId).toggle();
                }
            }
        }
    });