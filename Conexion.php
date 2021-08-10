<?php

$conexion = mysqli_connect('localhost','root','','cveinte')or die(mysqli_error($mysqli));

Insertar($conexion);

function Insertar($conexion){

    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $telefono = $_POST['tel'];
    $comentario = $_POST['coment'];

    $consulta = "Insert Into clientes(nombre,email,telefono,comentario)
    VALUES ('$nombre','$email','$telefono','$comentario')";
    mysqli_query($conexion,$consulta);
    mysqli_close($conexion);

}

?>