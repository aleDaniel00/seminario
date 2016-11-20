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
            /*
             * el controller de el filtro ;) 
             */
            $scope.isNavCollapsed = false;
            $scope.isCollapsed = false;

            /*
             * el controller de el resultado de la busqueda (cards) ;) 
             */
            $scope.toppings = [
                { name: 'Pepperoni', wanted: true },
                { name: 'Sausage', wanted: false },
                { name: 'Black Olives', wanted: true },
                { name: 'Green Peppers', wanted: false }
            ];

            $scope.settings = [
                { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'device:network-wifi', enabled: true },
                { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'device:bluetooth', enabled: false },
            ];

            $scope.messages = [
                { id: 1, title: "Message A", selected: false },
                { id: 2, title: "Message B", selected: true },
                { id: 3, title: "Message C", selected: true },
            ];

            $scope.people = [
                { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
                { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
                { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false }
            ];

            $scope.goToPerson = function(person, event) {
                $mdDialog.show(
                    $mdDialog.alert()
                    .title('Navigating')
                    .textContent('Inspect ' + person)
                    .ariaLabel('Person inspect demo')
                    .ok('Neat!')
                    .targetEvent(event)
                );
            };

            $scope.navigateTo = function(to, event) {
                $mdDialog.show(
                    $mdDialog.alert()
                    .title('Navigating')
                    .textContent('Imagine being taken to ' + to)
                    .ariaLabel('Navigation demo')
                    .ok('Neat!')
                    .targetEvent(event)
                );
            };

            $scope.doPrimaryAction = function(event) {
                $mdDialog.show(
                    $mdDialog.alert()
                    .title('Primary Action')
                    .textContent('Primary actions can be used for one click actions')
                    .ariaLabel('Primary click demo')
                    .ok('Awesome!')
                    .targetEvent(event)
                );
            };

            $scope.doSecondaryAction = function(event) {
                $mdDialog.show(
                    $mdDialog.alert()
                    .title('Secondary Action')
                    .textContent('Secondary actions can be used for one click actions')
                    .ariaLabel('Secondary click demo')
                    .ok('Neat!')
                    .targetEvent(event)
                );
            };

            /*
             * el controller del form ;) 
             */
            var self = this;

            // list of `state` value/display objects
            self.states = loadAll();
            self.selectedItem = null;
            self.searchText = null;
            self.querySearch = querySearch;

            // ******************************
            // Internal methods
            // ******************************

            /**
             * Search for states... use $timeout to simulate
             * remote dataservice call.
             */
            function querySearch(query) {
                var results = query ? self.states.filter(createFilterFor(query)) : self.states;
                var deferred = $q.defer();
                $timeout(function() { deferred.resolve(results); }, Math.random() * 1000, false);
                return deferred.promise;
            }

            /**
             * Build `states` list of key/value pairs
             */
            function loadAll() {
                var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

                return allStates.split(/, +/g).map(function(state) {
                    return {
                        value: state.toLowerCase(),
                        display: state
                    };
                });
            }

        }
    })
    .config(function($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow

        $mdThemingProvider.definePalette('amazingPaletteName', {
            '50': 'ffebee',
            '100': 'ffcdd2',
            '200': 'ef9a9a',
            '300': 'e57373',
            '400': 'ef5350',
            '500': 'f44336',
            '600': 'e53935',
            '700': 'd32f2f',
            '800': 'c62828',
            '900': 'b71c1c',
            'A100': 'ff8a80',
            'A200': 'ff5252',
            'A400': 'ff1744',
            'A700': 'd50000',
            'contrastDefaultColor': 'light', // whether, by default, text (contrast)
            // on this palette should be dark or light

            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'
            ],
            'contrastLightColors': undefined // could also specify this if default was 'dark'
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('amazingPaletteName')



    })
    .config(function($mdIconProvider) {
        $mdIconProvider
            .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
            .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
            .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
            .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    });