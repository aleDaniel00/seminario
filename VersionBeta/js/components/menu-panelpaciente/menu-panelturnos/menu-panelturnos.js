angular.module('turnosApp')
    .component('menuPanelturnos', {
        templateUrl: './js/components/menu-panelpaciente/menu-panelturnos/menu-panelturnos.html',
        controller: function($scope, $mdDialog) {
            $scope.items = [
                { name: 'Turno', img: 'img/clock.svg', newMessage: true },
                { name: 'Mensajes', img: 'img/message-text-outline.svg', newMessage: false },
                { name: 'Perfil', img: 'img/account-outline.svg', newMessage: false },
                { name: 'Guardia', img: 'img/stethoscope.svg', newMessage: false }
            ];
            $scope.showTabDialog3 = function(ev) {
                $mdDialog.show({
                        template: '<abm-user></abm-user>',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            };




        }
    });