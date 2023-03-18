<?php 
@session_start();
if($_SESSION["Usuario"] == "" || $_SESSION["Usuario"] == null  || $_SESSION["Usuario"] == "undefined"){
    header('Location: Web/login.php');
}else{
    header('Location: Web/index.php');
}
 
?>