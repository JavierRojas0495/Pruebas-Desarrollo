<?php
    include_once '../model/Mascota/MascotaModel.php';


Class GstMascota{

    private $gstMascota;
 	
 	function __construct(){
 		$this->modelMascota = new MascotaModel();
 	}


    public function getRazasMascota(){
        
        $sql ="SELECT id_raza,raza_nombre FROM  razamascotas order by id_raza desc";
        $datos = $this->modelMascota->consultarArray($sql);
        return $datos;
    }

    public function getClientesMascota(){
        
        $sql ="SELECT id,nombre FROM usuario where rol = 11 ";
        $datos = $this->modelMascota->consultarArray($sql);
        return $datos;
    }

    public function postRegistrarMascota($data){	
        
        $nombre = $data['nombre'];
        $raza = $data['raza'];
        $sexo = $data['sexo'];
        $detalles = $data['detalles'];
        $usuario = $data['usuario'];

        try {
            
            $sql ="INSERT INTO mascota VALUES ('0','$nombre','$sexo',$raza,'$detalles','A',$usuario)";
            $datos = $this->modelMascota->insertar($sql);
            return $datos;
        }catch(Exception $e){
            echo "Error: " . $e->getMessage;
        }
    }

    public function listarMascotas(){

        $sql ="SELECT M.id_mascota as id, M.mascota_nombre as nombre, U.nombre as dueño, R.raza_nombre as raza FROM mascota M INNER JOIN usuario U ON M.usuario_id = U.id INNER JOIN razamascotas R ON M.raza_id = R.id_raza";
        $datos = $this->modelMascota->consultarArray($sql);
        return $datos;
    }

    public function getDatosMascota($id){

        $sql ="SELECT id_mascota as id, mascota_nombre as nombre, mascota_sexo as sexo, raza_id as raza, mascota_detalles as detalles, usuario_id as usuario  FROM mascota  WHERE id_mascota = $id";
        $datos = $this->modelMascota->consultarArray($sql);
        return $datos;
    }

    public function postEditarMascota($data){
        
        $nombre = $data['nombre'];
        $raza = $data['raza'];
        $sexo = $data['sexo'];
        $detalles = $data['detalles'];
        $usuario = $data['usuario'];
        $id_mascota = $data['idMascota'];
        try {
            
            $sql ="UPDATE mascota SET mascota_nombre='$nombre',mascota_sexo='$sexo',raza_id=$raza,mascota_detalles='$detalles',mascota_estado='A',usuario_id=$usuario WHERE id_mascota = $id_mascota";
            $datos = $this->modelMascota->editar($sql);
            return $datos;
        }catch(Exception $e){
            echo "Error: " . $e->getMessage;
        }
    }

    public function postEliminarMascota($id_mascota){
        
        try {
            
            $sql ="DELETE FROM mascota WHERE id_mascota = $id_mascota";
            $datos = $this->modelMascota->eliminar($sql);
            return $datos;
        }catch(Exception $e){
            echo "Error: " . $e->getMessage;
        }
    }
}