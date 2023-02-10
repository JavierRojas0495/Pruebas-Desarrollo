<?php

include_once '../model/Usuario/UsuarioModel.php';


Class GstUsuario{
	
    public function ConsultarUsuario($id){
        $ObjFuncion = new UsuarioModel();

        try{    
            $sql=" SELECT id, nombre, email, sexo, area_id, num_documento, num_telefono, direccion, ciudad, rol, semestre FROM usuario WHERE id =".$id;
            $datos = $ObjFuncion->consultarArray($sql);
        }catch(Exception $e){
            echo "Error al consultar empleado";
            
        }
        
        return $datos;
    }

    public function UpdateUsuario($datos){
        var_dump($datos);
        
        
        $ObjFuncion = new UsuarioModel();
        
        $id_usuario = $datos['id_usuario'];
        $nombre = $datos['nombre'];
        $email = $datos['correo'];
        $sexo = $datos['sexo'];
        $area_id = $datos['area'];
        $numero_documento = $datos['numero_documento'];
        $numero_telefono = $datos['numero_telefono'];
        $direccion = $datos['direccion'];
        $ciudad = $datos['ciudad'];
        $rol = $datos['rol'];
        $semestre = $datos['semestre'];
        
        $usuario = $this->ConsultarUsuario($id_usuario);

        if($usuario != null){

            try{
                $sql = "UPDATE usuario SET nombre = '$nombre', email = '$email', sexo = '$sexo', area_id = '$area_id', num_documento = '$numero_documento', num_telefono = '$numero_telefono', direccion = '$direccion', ciudad = '$ciudad', rol = '$rol', semestre = '$semestre'  where id = ".$id_usuario;
                $respuesta = $ObjFuncion->editar($sql);
                $resultado = true;
            }catch(Exception $e){
                echo "Error al editar";
            }
            
        }else{

            $resultado = false;
        }
        return $resultado;
    }

    public function ConsultarUsuarios(){
        $ObjFuncion = new UsuarioModel();
        $sql = " SELECT U.id, U.nombre as name, U.num_documento as documento, U.email as correo, R.nombre as rol, A.nombre as area, C.nombre as ciudad FROM usuario U INNER JOIN roles R ON R.id = U.rol INNER JOIN areas A ON A.id = U.area_id INNER JOIN ciudades C ON C.id = U.ciudad ";
        $datos = $ObjFuncion->consultarArray($sql);
        //$datos = $this->getNombreArea($datos);
        return $datos;
    }


    public function getNombreArea($datos){
        $ObjFuncion = new UsuarioModel();
        $i=0;
        foreach($datos as $dato){
            $sql = "select nombre from areas where id=".$dato['area_id'];
            $resultados = $ObjFuncion->ConsultarArray($sql);
            foreach($resultados as $resultado){
                $datos[$i]['area_descripcion'] = $resultado['nombre'];
            }
        $i++;
        }
        return $datos;
    }

    public function getAreas(){
        
        $ObjFuncion = new UsuarioModel();
        $sql = "select id,nombre from areas";
        $datos = $ObjFuncion->consultarArray($sql);
        return $datos;
    }

    public function postRegistrarUsuario($datos){
        $ObjFuncion = new UsuarioModel();
        
        $nombre = $datos['nombre'];
        $email = $datos['correo'];
        $sexo = $datos['sexo'];
        $area_id = $datos['area'];
        $numero_documento = $datos['numero_documento'];
        $numero_telefono = $datos['numero_telefono'];
        $direccion = $datos['direccion'];
        $ciudad = $datos['ciudad'];
        $rol = $datos['rol'];
        $semestre = $datos['semestre'];
        
        try{
            $sql ="INSERT INTO usuario VALUES ('','$nombre','$email','$sexo',$area_id,'$numero_documento','$numero_telefono','$direccion',$ciudad,$rol,$semestre)";
            $resultado = $ObjFuncion->insertar($sql); 
            return $resultado;
        }catch(Exception $e){
            echo "Error al insertar";
        }        
    }

    public function getRoles(){
        $ObjFuncion = new UsuarioModel();
        $sql = "select id,nombre from roles";
        $datos = $ObjFuncion->consultarArray($sql);
        return $datos;
    }

    public function eliminarUsuario($id){
        $ObjFuncion = new UsuarioModel();
        $sql ="delete from usuario where id=".$id;

        try{
            $resultado = $ObjFuncion->eliminar($sql);
        }catch(Exception $e){
            echo "Error al eliminar";
        }
        return $resultado;
        
    }

    public function getCiudad(){

        $ObjFuncion = new UsuarioModel();
        $sql = "select id,nombre from ciudades";
        $datos = $ObjFuncion->consultarArray($sql);
        return $datos;
    }

}