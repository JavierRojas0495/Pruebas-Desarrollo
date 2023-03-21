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

    public function postVentaProducto(){
        
        $data = $this->gstVentas->postVentaProducto($_REQUEST);
        //$this->UpdateProducto();
    }
        
    Public function listarVentasProductos(){
            
        $datos = $this->gstVentas->consultarVentasProductos();
        $prodMasStock = $this->gstVentas->productoMasStock();
        $prodMasVnt = $this->gstVentas->productoMasVendido();
        
        include_once '../view/Ventas/Ventas/listarVentasProductos.php';
    }
    
    Public function tiendaVirtual(){
    
        $datos = $this->gstVentas->consultarVentasProductos();
        include_once '../view/Ventas/Ventas/tiendaVirtual.php';
    }

    public function getProductId(){

        $datos = $this->gstVentas->getProductId($_GET['id_product']);
        echo json_encode($datos);
    }
    
    
}