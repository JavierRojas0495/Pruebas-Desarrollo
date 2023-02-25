<?php

include_once '../model/Login/LoginModel.php';

Class GstLogin{

    private $gstLogin;
 	
 	function __construct(){
 		$this->modelLogin = new LoginModel();
 	}

    public function consultarCorreo($correo) {
        
        $sql = " SELECT ruta_img FROM usuario WHERE email = '$correo' ";
        $datos = $this->modelLogin->consultarArray($sql);
        return $datos[0];
    }

}