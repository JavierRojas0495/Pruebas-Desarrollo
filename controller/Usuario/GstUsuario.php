<?php

include_once '../model/Usuario/UsuarioModel.php';


Class GstUsuario{

    function __construct(){
        $this->modelUsuario = new UsuarioModel();
    }


    public function ConsultarUsuario($id){
        

        try{    
            $sql=" SELECT id, nombre, email, sexo, area_id, num_documento, num_telefono, direccion, ciudad, rol, semestre FROM usuario WHERE id =".$id;
            $datos = $this->modelUsuario->consultarArray($sql);
        }catch(Exception $e){
            echo "Error: ".$e->getMessage();    
        }
        
        return $datos;
    }

    public function UpdateUsuario($datos){
        
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
                $respuesta = $this->modelUsuario->editar($sql);
                $resultado = true;
            }catch(Exception $e){
                echo "Error: ".$e->getMessage();    
            }
            
        }else{

            $resultado = false;
        }
        return $resultado;
    }

    public function ConsultarUsuarios(){
        
        $sql = " SELECT U.id, U.nombre as name, U.num_documento as documento, U.email as correo, R.nombre as rol, A.nombre as area, C.nombre as ciudad FROM usuario U INNER JOIN roles R ON R.id = U.rol INNER JOIN areas A ON A.id = U.area_id INNER JOIN ciudades C ON C.id = U.ciudad ";
        $datos = $this->modelUsuario->consultarArray($sql);
        return $datos;
    }

    public function getAreas(){
        
        
        $sql = "select id,nombre from areas";
        $datos = $this->modelUsuario->consultarArray($sql);
        return $datos;
    }

    public function postRegistrarUsuario($datos){
        
        
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
        $ruta_img = $datos['ruta_img'];
        $pass = "12345";
            
        try{
            $sql ="INSERT INTO usuario VALUES ('','$nombre','$email','$sexo',$area_id,'$numero_documento','$numero_telefono','$direccion',$ciudad,$rol,'$ruta_img','$semestre','$pass')";
            $resultado = $this->modelUsuario->insertar($sql); 
            return $resultado;
        }catch(Exception $e){
            echo "Error: ".$e->getMessage();
        }        
    }

    public function getRoles(){
        
        $sql = "select id,nombre from roles";
        $datos = $this->modelUsuario->consultarArray($sql);
        return $datos;
    }

    public function eliminarUsuario($id){
        
        $sql ="delete from usuario where id=".$id;

        try{
            $resultado = $this->modelUsuario->eliminar($sql);
        }catch(Exception $e){
            echo "Error: ".$e->getMessage();
        }
        return $resultado;
        
    }

    public function getCiudad(){

        
        $sql = "select id,nombre from ciudades";
        $datos = $this->modelUsuario->consultarArray($sql);
        return $datos;
    }

    public function ConsultarUsuariosAsesores(){
        
        try{   
            $sql=" SELECT id, nombre FROM usuario WHERE rol = 12 ";
            $datos = $this->modelUsuario->consultarArray($sql);
        }catch(Exception $e){
            echo "Error: ".$e->getMessage();
        }
        
        return $datos;
    }

}