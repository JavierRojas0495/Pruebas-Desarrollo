<?php
include_once '../model/Login/LoginModel.php';
include_once 'GstLogin.php';

class LoginController{

    private $modelLogin;
 	
    function __construct(){
        $this->gstLogin = new GstLogin();
    }

    
    public function consultarCorreo(){

        $resultado = $this->gstLogin->consultarCorreo($_GET['email']);
        //dd($resultado['ruta_img']);
        //echo JSON_encode($resultado['ruta_img']);
        //echo json_encode(array("Oso"=> true, "Gato"=>null));
        echo json_encode($resultado);
    }

}