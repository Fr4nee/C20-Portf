<?php

$conexion = mysqli_connect('c20-portf.c0rxhojittix.us-east-2.rds.amazonaws.com','admin','adminroot','cveinte') or die (mysqli_error($mysqli));

Insertar($conexion);

function Insertar($conexion){
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $telefono = $_POST['tel'];
    $comentario = $_POST['coment'];

    $consulta = "insert into `clientes` (nombre, email, telefono, comentario) VALUES ('$nombre','$email','$telefono','$comentario')";
    mysqli_query($conexion,$consulta);
    mysqli_close($conexion);
}

?>