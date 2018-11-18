<?php

require_once 'vendor/autoload.php';

$app = new  \Slim\Slim();

$db = new mysqli('localhost','root','','tiendabbdd');

//Configuracion de cabeceras
header("Content-Type: text/html;charset=utf-8");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}


$app ->get("/todosProductos", function() use($app, $db){
   $sql = 'SELECT nombre,descripcion,precio,valoracion,categoria,Imagenprincipal FROM productos ORDER BY idproductos DESC;';
   mysqli_set_charset($db,"utf8");
   $query = $db -> query($sql);
   $productos = array();

   while($producto = $query -> fetch_assoc()){
        $productos[] = $producto;
   }

   $result = array(
       'status' => 'success',
       'code' => 200,
       'data' => $productos
   );

   echo json_encode($result);
});

$app -> run();