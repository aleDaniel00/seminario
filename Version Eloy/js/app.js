angular
	.module('AbmApp', ['ngRoute'])
	.config([
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/', {
					
					templateUrl: 'adminUsuario/index.html'
				})
				.when('/turno', {
					
					templateUrl: 'adminUsuario/turno.html'
					
				})
				.when('/mensaje', {
					
					templateUrl: 'adminUsuario/mensaje.html'
					
				})
				.when('/perfil', {
					
					templateUrl: 'adminUsuario/perfil.html'
					
				})
				.when('/guardia', {
					
					templateUrl: 'adminUsuario/guardia.html'
					
				})
				.otherwise('/');
		}
	]);