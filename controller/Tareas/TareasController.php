<?php
include_once 'GstTareas.php';

class TareasController{

    private $gstTareas;
 	
 	function __construct(){
 		$this->gstTareas = new GstTareas();
 	}
    
    public function registrarTarea(){
        include_once '../view/Tareas/Tareas/registrarTarea.php';
    }

    public function postRegistrarTarea(){
        $resultado = $this->gstTareas->postRegistrarTarea($_POST);
        echo json_encode($resultado);
    }

    public function listarTareas(){

        $tareas = $this->gstTareas->listarTareas();
        include_once '../view/Tareas/Tareas/listarTareas.php';
    }

    public function postEliminarTarea(){
        $resultado = $this->gstTareas->postEliminarTarea($_POST['id']);
        echo json_encode($resultado);
    }

    public function postCambiarEstadoTarea(){
        $resultado = $this->gstTareas->postCambiarEstadoTarea($_POST['id']);
        echo json_encode($resultado);
    }

}