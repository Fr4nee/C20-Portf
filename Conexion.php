<?php
$conexion = mysqli_connect('c20-portf.c0rxhojittix.us-east-2.rds.amazonaws.com','admin','laconchadetumadre','cveinte')or die(mysqli_error($mysqli));
$idioma;



    if($idioma == ("#botonEs")){
        $idioma = ("#botonEs");
        $retorno = header('Location: index.html');

    }
    else{
        
        $retorno = header('Location: indexEn.html');
        $idioma = ("#botonEn");

    }
    
  
  
    Insertar($conexion,$retorno,$modalExito, $idioma);
    $modalExito = '<script> AlertaExito() </script>';
  

    function Insertar($conexion, $retorno,$modalExito, $idioma){
    
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