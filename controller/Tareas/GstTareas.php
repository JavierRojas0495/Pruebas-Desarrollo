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

        $sql = " SELECT T.id_tarea as id, T.nombre_tarea as tarea, T.tiempo_tarea as tiempo, T.objetivos_tarea as objetivos, T.descripcion_tarea as descripcion, ET.nombre_estado as estado, T.id_estado as estado_id, U.nombre as usuario, fechacreacion_tarea FROM tarea  T INNER JOIN estados_tarea ET ON T.id_estado = ET.id_estado INNER JOIN usuario U ON U.id = T.id_usuario WHERE id_tarea = $id";
        $datos = $this->modelTareas->consultarArray($sql);
        return $datos;
    }
    

    public function postEliminarTarea($id){

        $resultado = $this->consultarTarea($id);
        $resp = count($resultado);
        
        if($resp > 0){
            $estado = $resultado[0]['estado_id'];
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
            $estado = $resultado[0]['estado_id'];
        }else{
            $estado = 2;
        }

        if( $resp > 0 && $estado != 2 ){
            $fecha_actual = date("Y-m-d");
            $sql = "UPDATE tarea SET id_estado = 2, fechamodificacion_tarea = '$fecha_actual' WHERE id_tarea = $id";
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
            $estado = $resultado[0]['estado_id'];
        }else{
            $estado = 2;
        }
        
        if( $resp > 0 && $estado != 2 && $estado != 3 ){
            $fecha_actual = date("Y-m-d");
            $sql = "UPDATE tarea SET id_estado = 3, fechamodificacion_tarea = '$fecha_actual'  WHERE id_tarea = $id";
            $datos = $this->modelTareas->editar($sql);
            $respuesta = true;
        }else{
            $respuesta = false;
        }
        
        return $respuesta;
    }

    public function postEditarTarea($data){
        $id = $data['id'];
        $nombre = $data['nombre'];
        $time = $data['tiempo'];
        $obj = $data["objetivos"];
        $des = $data["descripcion"];
        $fecha_actual = date("Y-m-d");
        
        try {
            $sql = "UPDATE tarea SET nombre_tarea = '$nombre', tiempo_tarea = $time, objetivos_tarea = '$obj', descripcion_tarea = '$des', fechamodificacion_tarea = '$fecha_actual'  WHERE id_tarea = $id";
            print $sql;
            $datos = $this->modelTareas->editar($sql);
            $respuesta = true;
        }catch(Exception $e){
            echo "Error: " . $e->getMessage;
        }
    }
}