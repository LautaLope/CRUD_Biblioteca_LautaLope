<?php

require_once __DIR__ . "/../model/libroDAO.php";

$funcion = $_GET["function"];

switch ($funcion) {
    case 'agregar':
        agregar();
        break;
    case 'eliminar':
        eliminar();
        break;
    case 'obtener':
        obtenerTodos();
        break;
    case 'modificar':
        modificar();
        break;
    case 'librosOrdenFecha':
        librosOrdenFecha();
        break;
    case 'librosOrdenPrecio':
        librosOrdenPrecio();
        break;
}

function obtenerTodos(){
    $resultado = (new libro())->obtenerLibroModelo();
    echo json_encode($resultado);
}

function agregar(){
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];
    $precio = $_POST['precio'];
    $imagen = $_FILES['imagen'];
    $resultado = (new libro())->agregarLibroModelo($nombre, $fecha, $precio, $imagen);
    echo json_encode($resultado);
}

function eliminar(){
    $id = $_POST['id'];
    $resultado = (new libro())->eliminarLibroModelo($id);
    echo json_encode($resultado);
}

function modificar(){
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];
    $precio = $_POST['precio'];
    $resultado = (new libro())->modificarLibroModelo($id, $nombre, $fecha, $precio);
    echo json_encode($resultado);
}

function librosOrdenFecha(){
    $resultado = (new libro())->obtenerLibroFecha();
    echo json_encode($resultado);
}

function librosOrdenPrecio(){
    $resultado = (new libro())->obtenerLibroPrecio();
    echo json_encode($resultado);
}


?>