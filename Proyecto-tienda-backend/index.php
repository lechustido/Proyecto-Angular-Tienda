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

//Permite obtener la lista completa de productos.
$app ->get("/todosProductos", function() use($app, $db){
   $sql = 'SELECT idproductos,nombre,descripcion,precio,valoracion,categoria,Imagenprincipal,marca FROM productos;';
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

$app ->get("/productoSeleccionado/:id", function($id) use($app, $db){
    $sql = 'SELECT idproductos,nombre,descripcion,precio,valoracion,categoria,Imagenprincipal,imagenes FROM productos WHERE idproductos = '.$id;
    mysqli_set_charset($db,"utf8");
    $query = $db -> query($sql);
    $producto = $query -> fetch_assoc();
 
    $result = array(
        'status' => 'success',
        'code' => 200,
        'data' => $producto
    );
 
    echo json_encode($result);
 });

//permite obtener una lista completa de las categorias de los productos.
$app ->get("/todasCategorias", function() use($app, $db){
    $sql = 'SELECT categoria FROM productos GROUP BY categoria;';
    mysqli_set_charset($db,"utf8");
    $query = $db -> query($sql);
    $categorias = array();
 
    while($categoria = $query -> fetch_assoc()){
         $categorias[] = $categoria;
    }
 
    $result = array(
        'status' => 'success',
        'code' => 200,
        'data' => $categorias
    );
 
    echo json_encode($result);
 });

 //permite obtener una lista completa de las marcas de los productos.
$app ->get("/marcasCategoria/:categoriaParam", function($categoriaParam) use($app, $db){
    $sql = "SELECT marca FROM productos WHERE categoria = '" .$categoriaParam ."' GROUP BY marca;";
    mysqli_set_charset($db,"utf8");
    $query = $db -> query($sql);
    $marcas = array();
 
    while($marca = $query -> fetch_assoc()){
         $marcas[] = $marca;
    }
 
    $result = array(
        'status' => 'success',
        'code' => 200,
        'data' => $marcas
    );
 
    echo json_encode($result);
 });

$app -> run();