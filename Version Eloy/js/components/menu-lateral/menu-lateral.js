angular.module("AbmApp")
.component("menuLateral", {
    templateUrl: "../js/components/menu-lateral/menu-lateral.html",
    controller: function($scope) {
       
        $scope.datos = [{
	            "nombre": "Turno",
	            "icono"	: "schedule",
	            "ruta"	: "/turno"
            },
            {
	            "nombre": "Mensajes",
	            "icono"	: "chat",
	            "ruta"	: "/mensaje"
        	},
        	{
	            "nombre": "Perfil",
	            "icono"	: "perm_identity",
	            "ruta"	: "/perfil"
        	},
        	{
	            "nombre": "Guardia",
	            "icono"	: "local_hospital",
	            "ruta"	: "/guardia"
        	}
     	]

    }
});