<?php
function connection()
{
    try {
        $host = "localhost";
        $usuario = "root";
        $password = "";
        $bd = "biblioteca";
        $puerto = 3306; //puerto predeterminado
        $mysqli = new mysqli($host, $usuario, $password, $bd, $puerto); //generando la conexion en una variable
        mysqli_report(MYSQLI_REPORT_OFF);
        return $mysqli; // retorna la conexion a la clase que lo ha solicitado.

    } catch (Exception $e) {
        echo 'Excepcion capturada: ', $e->getMessage();
    }
}

?>