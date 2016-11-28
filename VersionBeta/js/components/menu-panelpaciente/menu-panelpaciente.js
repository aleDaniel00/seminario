angular.module('turnosApp')
    .component('menuPanelpaciente', {
        templateUrl: './js/components/menu-panelpaciente/menu-panelpaciente.html',
        controller: function($scope, $timeout, $mdSidenav, $mdDialog, CMedicosService, $location, $http, TurnosService) {
            if ($location.path() === '/panelCentroMedico') {

                $scope.panelCentroMedico = true;
                $scope.tiyulo = 'Guardia GuemesPonele';
                $scope.propertyName = 'age';
                $scope.reverse = true;

                $scope.sortBy = function(propertyName) {
                    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                    $scope.propertyName = propertyName;
                };

                TurnosService.getTurnos().then(
                    function(rta) {
                        console.log(rta.data);
                        $scope.turnos = rta.data.Turnos;
                    },
                    function(rta) {
                        console.log(rta.data);
                    }
                );
                TurnosService.getPrioridades().then(
                    function(rta) {
                        console.log(rta.data);
                        $scope.prioridades = rta.data;
                    },
                    function(rta) {
                        console.log(rta.data);
                    }
                );
                TurnosService.getEstados().then(
                    function(rta) {
                        console.log(rta.data);
                        $scope.estados = rta.data;
                    },
                    function(rta) {
                        console.log(rta.data);
                    }
                );

                CMedicosService.getCentros().then(
                    function(rta) {
                        console.log(rta.data[0]);
                        $scope.estados = rta.data[0];
                    },
                    function(rta) {
                        console.log(rta.data);
                    }
                );


                $scope.agregarTurno = function() {
                    /**
                     * algunos eventos y acciones sobre el turno confirmado
                     *  
                     */
                }
                $scope.eliminarTurno = function() {
                    /**
                     * algunos eventos y acciones sobre el turno confirmado
                     *  
                     */
                }
                $scope.editarEstado = function() {
                    /**
                     * algunos eventos y acciones sobre el turno confirmado
                     *  
                     */
                }
                $scope.cambiarEstadoAtendido = function() {
                    /**
                     * algunos eventos y acciones sobre el turno confirmado
                     *  
                     */
                }
                $scope.cambiarEstado = function() {
                    /**
                     * algunos eventos y acciones sobre el turno confirmado
                     *  
                     */
                }
                $scope.cambiarPrioridad = function() {
                    /**
                     * algunos eventos y acciones sobre el turno confirmado
                     *  
                     */
                }
                $scope.editarObservaciones = function() {
                        /**
                         * algunos eventos y acciones sobre el turno confirmado
                         *  
                         */
                    }
                    /**
                     * Configuraciones del pánel del centro medico
                     */

            } else if ($location.path() === '/panelTurno/turnoConfirmado') {

                $scope.opcionesTurnoConfirmado = true;
                $scope.titulo = 'Buenas Noticias';
                $scope.info = 'El tiempo para tu turno en la guardia';
                $scope.hora_preseleccionada = '03:02:05'
                $scope.consejo = 'Si este horario te conviene presiona el boton de confirmar asistencia, si no es asi, puedes volve atras para seleccionar otro centro medico';
                $scope.consejo2 = 'Si este horario te conviene presiona el boton de confirmar asistencia, si no es asi, puedes volve atras para seleccionar otro centro medico';
                $scope.consejo3 = 'Si este horario te conviene presiona el boton de confirmar asistencia, si no es asi, puedes volve atras para seleccionar otro centro medico';
                $scope.openOtionsTurno = function() {
                        /**
                         * algunos eventos y acciones sobre el turno confirmado
                         *  
                         */
                    }
                    /**
                     * 
                     */

                $scope.topDirections = ['left', 'up'];
                $scope.bottomDirections = ['down', 'right'];

                $scope.isOpen = false;

                $scope.availableModes = ['md-fling', 'md-scale'];
                $scope.selectedMode = 'md-fling';

                $scope.availableDirections = ['up', 'down', 'left', 'right'];
                $scope.selectedDirection = 'up';

            } else if ($location.path() === '/panelTurno/turno') {
                $scope.ocultarBuscadorDelCentroMedico = true;
                $scope.titulo = 'Solicitar Turno';
                $scope.info = 'El tiempo para tu turno en la guardia';
                $scope.hora_preseleccionada = '03:02:05'
                $scope.consejo = 'Si este horario te conviene presiona el boton de confirmar asistencia, si no es asi, puedes volve atras para seleccionar otro centro medico';
                $scope.confirmarTurno = function() {
                    /**
                     * Debo trarer una hora de turno disponible por la guardia
                     */
                }
                $scope.cmedic_seleccionado = true;

            } else {
                $scope.panelTurnosBusquedaCentro = true;
                $scope.titulo = 'Lista de centros medicos'
                $scope.info = 'Puedes filtrar por nombre o barrio, a continuacion selecciona un centro medico'

                /*
                 * el controller de el resultado de la busqueda (md-radio-button) ;) 
                 */

                CMedicosService.getCentros().then(
                    function(rta) {
                        $scope.cmedicos = rta.data.Centros;
                    },
                    function(rta) {
                        console.log(rta.data);
                    }
                );
                /**
                 * PopUps, se les puede poner un template mas piola! mas adelante!
                 */
                $scope.navigateToTel = function(to, event) {
                    $mdDialog.show(
                        $mdDialog.alert()
                        .title('Telefonos')
                        .textContent('Puedes llamar directamente: ' + to.Numero[0])
                        .ariaLabel('Navigation demo')
                        .ok('Cerrar')
                        .targetEvent(event)
                    );
                };
                $scope.navigateToUbi = function(to, event) {
                    $mdDialog.show(
                        $mdDialog.alert()
                        .title('Ubicacion')
                        .textContent('Puedes buscar en google maps: ' + to.Ubicacion)
                        .ariaLabel('Navigation demo')
                        .ok('Cerrar')
                        .targetEvent(event)
                    );
                };


                /**
                 * Funcion que muestral al usuario el CM escogido
                 */

                $scope.getSelectedItem = function(centroMedicoEscogidoTemporalmente) {
                    if (centroMedicoEscogidoTemporalmente != undefined) {
                        console.log("You have selected: Item " + centroMedicoEscogidoTemporalmente);
                        $scope.seleccionTemporal = centroMedicoEscogidoTemporalmente;
                    } else {
                        console.log("Please select an item");
                    }
                };
                /**
                 * funcion del envio del form para pedir un turno
                 */
                $scope.selectedItem;
                $scope.submitSelectCmedico = function(selectedItem) {
                    $scope.cmedic_seleccionado = true;
                    if ($scope.selectedItem !== undefined) {

                        console.log("You have selected: Item " + $scope.selectedItem);

                        /**
                         * Una vez el centro medico se selecciona y se presiona el boton solicitar turno 
                         * se debe hacer una consulta al centro medico donde se consultara la hora mas proxima para su turno
                         */

                    }
                };
            }


            /**
             * Menu lateral apertura
             */
            $scope.toggleLeft = buildToggler('left');
            $scope.toggleRight = buildToggler('right');

            function buildToggler(componentId) {
                return function() {
                    $mdSidenav(componentId).toggle();
                }
            }
        }

    })
    .config(function($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('blue');


    })
    .config(function($mdIconProvider) {
        $mdIconProvider
            .iconSet('social', 'img/icons/social-icons.svg', 24)
            .iconSet('device', 'img/icons/map-marker.svg', 24)
            .iconSet('communication', 'img/icons/map-marker.svg', 24)
            .defaultIconSet('img/icons/core-icons.svg', 24);
    });