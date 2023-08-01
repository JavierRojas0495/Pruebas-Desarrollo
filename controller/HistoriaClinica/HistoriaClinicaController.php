<?php
include_once 'GstHistoriaClinica.php';

class HistoriaClinicaController{

    private $gstHistoriaClinica;
 	
 	function __construct(){
 		$this->gstHistoriaClinica = new GstHistoriaClinica();
 	}
    
    public function registrarHistoriaClinica(){

        $mascotas = $this->gstHistoriaClinica->getMascotas();
        $veterinarios = $this->gstHistoriaClinica->getVeterinarios();
        include_once '../view/HistoriaClinica/HistoriaClinica/registrarHistoriaClinica.php';
    }

    public function consultarMascotaRegistrada(){
        $resultado = $this->gstHistoriaClinica->consultarMascotaRegistrada($_POST['id']);
        echo json_encode($resultado);

    }

    public function postRegistrarHistoriaClinica(){

        $resultado = $this->gstHistoriaClinica->postRegistrarHistoriaClinica($_GET);
        echo json_encode($resultado);
    }

    public function postRegistrarDetalleHistoriaClinica(){

        $resultado = $this->gstHistoriaClinica->postRegistrarDetalleHistoriaClinica($_GET);
        echo json_encode($resultado);
    }

    public function listarHistoriaClinica(){

        $historiasClinicas = $this->gstHistoriaClinica->listarHistoriaClinica();
        include_once '../view/HistoriaClinica/HistoriaClinica/listarHistoriaClinica.php';
    }

    public function listarDetalleHistoriaClinicaMascota() {

        $DetalleshistorialClinico = $this->gstHistoriaClinica->listarDetalleHistoriaClinicaMascota($_GET['id']);
        include_once '../view/HistoriaClinica/HistoriaClinica/listarHistoriaClinicaDetalleMascota.php';
    }

    public function detallesNovedadHistoriaClinica() {

        $detallehistoriaclinica = $this->gstHistoriaClinica->detallesNovedadHistoriaClinicaMascota($_GET['id']);
        include_once '../view/HistoriaClinica/HistoriaClinica/detalleHistoriaClinica.php';
    }

}