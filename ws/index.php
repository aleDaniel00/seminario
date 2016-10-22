<?php
require 'vendor/autoload.php';
header('Content-Type: application/json');

//======= Funciones =============//
function getUser($id,$method){
	if($id=='1')
		$ar = array('Id'=> $id,'Nombre' => 'Esteban','Apellido'=>'Quito','Error' => '0','Method' => $method);
	elseif($id=='2')
		$ar = array('Id'=> $id,'Nombre' => 'Armando','Apellido'=>'Paredes','Error' => '0','Method' => $method);
	else
		$ar = array('Error' => '1');
	return json_encode($ar);
}
//======= Fin Funciones =============//


$app = new \Slim\Slim();
$app->get('/turnos/:id', function ($id) {	
	echo getUser($id,'GET');
});

$app->post('/turnos/:id', function ($id) {
	echo getUser($id,'POST');
});

$app->put('/turnos/:id', function ($id) {
	echo getUser($id,'PUT');
});

$app->delete('/turnos/:id', function ($id) {
	echo getUser($id,'DELETE');
});

$app->run();