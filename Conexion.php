<?php
$conexion = mysqli_connect('c20-portf.c0rxhojittix.us-east-2.rds.amazonaws.com','admin','','cveinte')or die(mysqli_error($mysqli));
$retornoEs = header('Location: index.html');


    Insertar($conexion,$retornoEs,$modalExito);
    $modalExito = '<script> AlertaExitoEs() </script>';
    function Insertar($conexion, $retornoEs,$modalExito){
       
 
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