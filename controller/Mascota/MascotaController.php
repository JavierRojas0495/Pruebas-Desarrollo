<?php
    include_once 'GstMascota.php';

class MascotaController{

    private $modelMascota;
 	
 	
 	function __construct(){
 		$this->gstMascota = new GstMascota();
 	}

    public function registrarMascota(){
        $razas =  $this->gstMascota->getRazasMascota();
        $clientes =  $this->gstMascota->getClientesMascota();
        include_once '../view/Mascota/Mascota/registrarMascota.php';
    }

    public function postRegistrarMascota(){

        $resultado = $this->gstMascota->postRegistrarMascota($_POST);
        echo json_encode($resultado);
    }

    public function listarMascotas(){

        $mascotas = $this->gstMascota->listarMascotas();
        include_once '../view/Mascota/Mascota/listarMascotas.php';
    }

    public function editarMascota(){

        $razas =  $this->gstMascota->getRazasMascota();
        $clientes =  $this->gstMascota->getClientesMascota();
        $datos = $this->gstMascota->getDatosMascota($_GET['id']);

        include_once '../view/Mascota/Mascota/editarMascota.php';
    }

    public function posteditarMascota(){

        $resultado = $this->gstMascota->postEditarMascota($_POST);
        echo json_encode($resultado);
    }

    public function postEliminarMascota(){
        
        $resultado = $this->gstMascota->postEliminarMascota($_POST['id']);
        echo json_encode($resultado);
    }

    
}