<?php

include_once '../model/HistoriaClinica/HistoriaClinicaModel.php';


Class GstHistoriaClinica{

    private $modelHistoriaClinica;
 	
 	function __construct(){
 		$this->modelHistoriaClinica = new HistoriaClinicaModel();
 	}


    public function getMascotas(){

        $sql = "SELECT id_mascota, mascota_nombre FROM mascota WHERE mascota_estado = 'A' ";
        $datos = $this->modelHistoriaClinica->consultarArray($sql);
        return $datos;
    }
    
    public function getVeterinarios(){

        $sql = "SELECT id, nombre FROM usuario WHERE rol = 15 ";
        $datos = $this->modelHistoriaClinica->consultarArray($sql);
        return $datos;
    }

    public function consultarMascotaRegistrada($id){
        
        $sql = "SELECT id_mascota FROM historiaclinicaveterinaria WHERE id_mascota = $id ";
        $datos = $this->modelHistoriaClinica->consultarArray($sql);
        return $datos;
    }

    public function postRegistrarHistoriaClinica($data){

        $fecha_actual = date("Y-m-d");
        $id_mascota = $data['id_mascota'];
        try {
            $sql = "INSERT INTO historiaclinicaveterinaria VALUES (0,$id_mascota,'$fecha_actual','$fecha_actual')";
            $datos = $this->modelHistoriaClinica->insertar($sql);
        }catch(Exception $e){
            echo "Error: " . $e->getMessage;
        }
        
        $this->postRegistrarDetalleHistoriaClinica($data);   
    }

    public function postRegistrarDetalleHistoriaClinica($data){

        $idMascota = $data['id_mascota'];
        $idVeterinario = $data['id_veterinario'];
        $peso = $data['peso_mascota'];
        $temperatura = $data['temperatura_mascota'];
        $frecuencia_cardiaca = $data['frecuencia_cardiaca_mascota'];
        $observacion_cliente = $data['observacion_cliente'];
        $observacion_veterinario = $data['observacion'];
        $fecha_actual = date("Y-m-d");
        
        $idHistoriaClinica = $this->consultarIdHistoriaClinica($idMascota);

        try {
            $sql = "INSERT INTO detallehistoriaclinicaveterinaria VALUES (0,$idHistoriaClinica,$idVeterinario,'$peso','$temperatura','$frecuencia_cardiaca','$observacion_cliente','$observacion_veterinario','$fecha_actual',CURTIME())";
            $datos = $this->modelHistoriaClinica->insertar($sql);
        }catch(Exception $e){
            echo "Error: " . $e->getMessage;
        }
        
        $this->ActualizaFechaHistoriaClinica($idHistoriaClinica);
        
    }

    public function consultarIdHistoriaClinica($idMascota){

        try {
            $sql = "SELECT id_historia_clinica FROM historiaclinicaveterinaria WHERE id_mascota = $idMascota";
            $datos = $this->modelHistoriaClinica->consultarArray($sql);
            return $datos[0]['id_historia_clinica'];
        }catch(Exception $e){
            echo "Error: " . $e->getMessage;
        }
    }

    public function ActualizaFechaHistoriaClinica($idHistoriaClinica){
        
        $fecha_actual = date("Y-m-d");
        try {
            $sql = "UPDATE historiaclinicaveterinaria SET fecha_actualizacion = '$fecha_actual' WHERE id_historia_clinica = $idHistoriaClinica";
            $datos = $this->modelHistoriaClinica->editar($sql);
        }catch(Exception $e){
            echo "Error: " . $e->getMessage;
        }
    }

    public function listarHistoriaClinica() {

        $sql = "SELECT HC.id_historia_clinica,M.mascota_nombre,HC.id_mascota,HC.fecha_creacion,Hc.fecha_actualizacion FROM historiaclinicaveterinaria HC INNER JOIN mascota M ON HC.id_mascota = M.id_mascota";
        $datos = $this->modelHistoriaClinica->consultarArray($sql);
        return $datos;
    }

    public function listarDetalleHistoriaClinicaMascota($id_Mascota){

        $sql = "SELECT HCD.id_detalle, U.nombre, HCD.fecha_historia_clinica, HCD.hora_historia_clinica FROM detallehistoriaclinicaveterinaria HCD INNER JOIN usuario U ON HCD.id_veterinario = U.id INNER JOIN historiaclinicaveterinaria HC ON HCD.id_historia_clinica = HC.id_historia_clinica WHERE HC.id_mascota = $id_Mascota";
        $datos = $this->modelHistoriaClinica->consultarArray($sql);
        return $datos;

    }

    public function detallesNovedadHistoriaClinicaMascota($id_detalle) {

        $sql = "SELECT DHC.id_detalle, HC.id_mascota as idMascota, M.mascota_nombre AS mascota, U.nombre AS veterinario, DHC.peso_mascota AS peso, DHC.temperatura_mascota as temperatura, DHC.frecuencia_cardiaca as frecuencia, DHC.observaciones_cliente, DHC.observaciones, DHC.fecha_historia_clinica, DHC.hora_historia_clinica FROM detallehistoriaclinicaveterinaria DHC INNER JOIN usuario U ON DHC.id_veterinario = U.id INNER JOIN historiaclinicaveterinaria HC ON DHC.id_historia_clinica = HC.id_historia_clinica INNER JOIN mascota M ON HC.id_mascota = m.id_mascota WHERE DHC.id_detalle = $id_detalle";
        $datos = $this->modelHistoriaClinica->consultarArray($sql);
        return $datos;
    }
}