angular.module("AbmApp")
.component("infoPrincipal", {
    templateUrl: "../js/components/info-principal/info-principal.html",
    controller: function($scope) {
       
        $scope.nombre = "Perez, Juan Carlos";

    }
});