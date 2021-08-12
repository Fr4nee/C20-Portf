<?php

$usuario = "admin";
$password = "laconchadetumadre";
$servidor = "c20-portf.c0rxhojittix.us-east-2.rds.amazonaws.com";
$basededatos = "cveinte";

$conexion = mysqli_connect($servidor, $usuario, $password, $basededatos) or die ("Error");

Insertar($conexion);

function Insertar($conexion){

    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $telefono = $_POST['tel'];
    $comentario = $_POST['coment'];

    $consulta = "insert into `clientes` (nombre, email, telefono, comentario) VALUES ('$nombre','$email','$telefono','$comentario')";

    mysqli_query($conexion,$consulta);
    mysqli_close($conexion);
};

?>