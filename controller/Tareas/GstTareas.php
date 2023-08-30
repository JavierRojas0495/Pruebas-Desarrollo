<?php

include_once '../model/Tareas/TareasModel.php';


Class GstTareas{

    private $modelTareas;
 	
 	function __construct(){
 		$this->modelTareas = new TareasModel();
 	}

    public function postRegistrarTarea($data){

        $nombre = $data['nombre'];
        $time = $data['tiempo'];
        $obj = $data["objetivos"];
        $des = $data["descripcion"];
        $fecha_actual = date("Y-m-d");
        $estado = 1;
        $id = $_SESSION['id'];
        try {
            $sql = "INSERT INTO tarea VALUES (0,'$nombre',$time,'$obj','$des','$fecha_actual','$fecha_actual',$estado,$id)";
            $datos = $this->modelTareas->insertar($sql);
        }catch(Exception $e){
            echo "Error: " . $e->getMessage;
        }
    }

    public function listarTareas(){

        $sql = "SELECT T.id_tarea as id, T.nombre_tarea as nombre, T.fechacreacion_tarea as creacion, T.fechamodificacion_tarea as modificacion, ET.nombre_estado as estado FROM tarea T INNER JOIN estados_tarea ET ON T.id_estado = ET.id_estado";
        $datos = $this->modelTareas->consultarArray($sql);
        return $datos;
    }

    public function consultarTarea($id){

        $sql = " SELECT id_tarea as id, nombre_tarea as tarea, objetivos_tarea as objetivos, descripcion_tarea as descripcion, id_estado as estado, id_usuario FROM tarea WHERE id_tarea = $id";
        $datos = $this->modelTareas->consultarArray($sql);
        return $datos;
    }
    

    public function postEliminarTarea($id){

        $resultado = $this->consultarTarea($id);
        $resp = count($resultado);
        
        if($resp > 0){
            $estado = $resultado[0]['estado'];
        }else{
            $estado = 2;
        }
        
        if( $resp > 0 && $estado != 2 ){
            
            $sql = "DELETE FROM tarea WHERE id_tarea = $id";
            $datos = $this->modelTareas->eliminar($sql);
            $respuesta = true;
            
        }else{
            
            $respuesta = false;
        }
        
        return $respuesta;
    }

    public function postCambiarEstadoTarea($id){
        
        $resultado = $this->consultarTarea($id);
        $resp = count($resultado);
        
        if($resp > 0){
            $estado = $resultado[0]['estado'];
        }else{
            $estado = 2;
        }

        if( $resp > 0 && $estado != 2 ){
            
            $sql = "UPDATE tarea SET id_estado = 2 WHERE id_tarea = $id";
            $datos = $this->modelTareas->editar($sql);
            $respuesta = true;
            
        }else{
            
            $respuesta = false;
        }
        
        return $respuesta;
    }

    public function postCancelarTarea($id){
        
        $resultado = $this->consultarTarea($id);
        $resp = count($resultado);
        
        if($resp > 0){
            $estado = $resultado[0]['estado'];
        }else{
            $estado = 2;
        }

        if( $resp > 0 && $estado != 2 && $estado != 3 ){
            
            $sql = "UPDATE tarea SET id_estado = 3 WHERE id_tarea = $id";
            $datos = $this->modelTareas->editar($sql);
            $respuesta = true;
            
        }else{
            
            $respuesta = false;
        }
        
        return $respuesta;
    }
}