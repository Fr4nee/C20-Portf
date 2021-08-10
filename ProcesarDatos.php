<?php
    $Ncontacto=$_POST['name'];
    $Econtacto=$_POST['email'];
    $Tcontacto=$_POST['tel'];
    $Ccontacto=$_POST['coment'];

    if(isset($_POST['name']) && !empty($_POST['name']) &&
        isset($_POST['email']) && !empty($_POST['email']) &&
        isset($_POST['tel']) && !empty($_POST['tel']) &&
        isset($_POST['coment']) && !empty($_POST['coment']))
        {
            $EnlaceBD=mysql_connect('localhost','root','') or die ("¡No es posible conectarse a la base de datos! Vuelve a intentarlo más tarde.");
            mysqli_select_db(cveinte,$EnlaceBD) or die ("¡No se puede seleccionar la base de datos! Vuelve a intentarlo más tarde.");
        
            mysql_query("insert into `clientes` values ($Ncontacto,$Econtacto,$Tcontacto,$Ccontacto)")
            echo "Datos Enviados Correctamente";
        } else{
            echo "Error al enviar los datos";
        }
?>