<?php 
$conectar = mysqli_connect('localhost','root','', 'portfromc20');

if(!$conectar){
    echo "No conectado";
}

$name = $_POST['nombre'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$comentario = $_POST['comentario'];

$sql = "INSERT INTO formulario VALUES ('$nombre', '$correo', '$telefono', '$mensaje')";

$ejecutar = mysqli_query($conectar, $sql);

if(!$ejecutar){
    echo "Hay algun error";
}else{
    echo "Datos almacenados correctamente";
}

?>