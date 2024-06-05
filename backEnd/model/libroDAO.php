<?php
//Realiza las consultas a la BBDD, implementando por herencia la clase conexion
require_once __DIR__ . "/../controller/connection.php";

class libro {
    function obtenerLibroModelo(){

        $connection = connection();
        $sql = "SELECT * FROM libro";
        $respuesta = $connection->query($sql);
        $libro = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $libro;
    }

    public function agregarLibroModelo($nombre, $fecha, $precio, $imagenLibro){
        $extension = pathinfo($imagenLibro['name'], PATHINFO_EXTENSION);
        $rutaTemporal = $imagenLibro['tmp_name'];
        $sql = "INSERT INTO libro(nombre, fecha, precio, extension) VALUES ('$nombre', '$fecha', '$precio', '$extension')";
        $connection = connection();
        $respuesta = $connection->query($sql);
        $idLibro = $connection->insert_id;
        move_uploaded_file($rutaTemporal,"../imgs/$idLibro.$extension");
        return $respuesta;

    }

    public function eliminarLibroModelo($id){
        $sql = "DELETE FROM libro WHERE id = '$id'";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    public function modificarLibroModelo($id, $nombre, $fecha, $precio){
        $sql = "UPDATE libro SET nombre='$nombre',fecha='$fecha',precio='$precio' WHERE id='$id'";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    public function obtenerLibroFecha(){

        $connection = connection();
        $sql = "SELECT * FROM libro ORDER BY fecha";
        $respuesta = $connection->query($sql);
        $libro = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $libro;

    }

    public function obtenerLibroPrecio(){

        $connection = connection();
        $sql = "SELECT * FROM libro ORDER BY precio";
        $respuesta = $connection->query($sql);
        $libro = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $libro;

    }

}



?>