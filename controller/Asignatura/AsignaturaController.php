<?php
include_once '../model/Asignatura/AsignaturaModel.php';
include_once 'GstAsignatura.php';

class AsignaturaController{

    private $modelAsignatura;
 	
 	
 	function __construct(){
 		$this->gstAsignatura = new GstAsignatura();
 	}

    public function registrarAsignatura(){

        $datos = $this->gstAsignatura->getAreas();
        include_once '../view/Asignatura/Asignatura/registrarAsignatura.php';
    }

    public function postRegistrarAsignatura(){

        $datos = $this->gstAsignatura->postRegistrarAsignatura($_POST);
        return JSON_encode($datos);
    }

    Public function listarAsignaturas(){
        
        $datos = $this->gstAsignatura->getAsignaturas();
        include_once '../view/Asignatura/Asignatura/listarAsignaturas.php';
    }

    public function postEliminarAsignatura(){
        
        $datos = $this->gstAsignatura->inabilitarAsignatura($_POST['id']);
        return JSON_encode($datos);
    }
}