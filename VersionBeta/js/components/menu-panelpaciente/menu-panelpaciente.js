angular.module('turnosApp')
    .component('menuPanelpaciente', {
        templateUrl: './js/components/menu-panelpaciente/menu-panelpaciente.html',
        controller: function($scope, $timeout, $mdSidenav, $mdDialog, CMedicosService) {
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
            $scope.isNavCollapsed = true;
            $scope.isCollapsed = true;

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

            CMedicosService.getAllCMedicos().then(
                function(rta) {

                    console.log(rta.data.Centros);

                    $scope.cmedicos = rta.data.Centros;
                    console.log($scope.cmedicos);
                },
                function(rta) {
                    console.log(rta.data);
                }
            );
            /*$scope.people = [
                { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
                { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
                { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false },
                { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
                { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
                { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false },
                { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
                { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
                { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false },
                { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
                { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
                { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false }
            ];*/

            $scope.goToPerson = function(cmedico, event) {
                $mdDialog.show(
                    $mdDialog.alert()
                    .title('Navigating')
                    .textContent('Inspect ' + cmedico)
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

            /**
             * Controller del los select del filtro de busqueda de CM
             */
            $scope.sizes = [
                "small (12-inch)",
                "medium (14-inch)",
                "large (16-inch)",
                "insane (42-inch)"
            ];
            $scope.toppings = [
                { category: 'meat', name: 'Pepperoni' },
                { category: 'meat', name: 'Sausage' },
                { category: 'meat', name: 'Ground Beef' },
                { category: 'meat', name: 'Bacon' },
                { category: 'veg', name: 'Mushrooms' },
                { category: 'veg', name: 'Onion' },
                { category: 'veg', name: 'Green Pepper' },
                { category: 'veg', name: 'Green Olives' }
            ];
            $scope.selectedToppings = [];
            $scope.printSelectedToppings = function printSelectedToppings() {
                var numberOfToppings = this.selectedToppings.length;

                // If there is more than one topping, we add an 'and'
                // to be gramatically correct. If there are 3+ toppings
                // we also add an oxford comma.
                if (numberOfToppings > 1) {
                    var needsOxfordComma = numberOfToppings > 2;
                    var lastToppingConjunction = (needsOxfordComma ? ',' : '') + ' and ';
                    var lastTopping = lastToppingConjunction +
                        this.selectedToppings[this.selectedToppings.length - 1];
                    return this.selectedToppings.slice(0, -1).join(', ') + lastTopping;
                }

                return this.selectedToppings.join('');
            };
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