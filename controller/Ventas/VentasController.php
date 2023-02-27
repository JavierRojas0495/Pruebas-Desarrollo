<?php
include_once '../controller/Producto/GstProducto.php';
include_once '../model/Ventas/VentasModel.php';
include_once 'GstVentas.php';

class VentasController{

    private $gstVentas;
    private $gstProducto;
 	
 	
 	function __construct(){
 		$this->gstVentas = new GstVentas();
        $this->gstProducto = new GstProducto();
 	}


    public function vistaVentaProducto(){

        $data = $this->gstProducto->consultarProducto($_REQUEST["idProd"]);
        $categorias = $this->gstProducto->getCategorias();        
        include_once '../view/Ventas/Ventas/ventaProducto.php';
    }

    Public function listarVentasProductos(){

        $datos = $this->gstVentas->consultarVentasProductos();
        $prodMasVnt = $this->gstVentas->productoMasVendido();
        $prodMasStock = $this->gstVentas->productoMasStock();
        
        include_once '../view/Ventas/Ventas/listarVentasProductos.php';
    }

    Public function tiendaVirtual(){

        $datos = $this->gstVentas->consultarVentasProductos();
        include_once '../view/Ventas/Ventas/tiendaVirtual.php';
    }


}