<?php

include_once '../model/Ventas/VentasModel.php';


Class GstVentas{

    private $modelVentas;
 	
 	function __construct(){
 		$this->modelVentas = new VentasModel();
 	}

    public function consultarVentasProductos() {
        
        $sql = " SELECT VNT.id_prod, PR.prod_nombre, VNT.prod_ref, VNT.prod_prec, C.nombre as categoria , VNT.vnt_cant_prod, VNT.vnt_fecha, VNT.vnt_prec_total_prod, PR.ruta_img FROM producto PR INNER JOIN ventas VNT ON PR.id_prod = VNT.id_prod INNER JOIN categorias C ON PR.prod_categoria = C.id ORDER BY 6 desc ";
        $datos = $this->modelVentas->consultarArray($sql);
    
        return $datos;
    }

    public function productoMasVendido(){

        $sql = "SELECT vnt.id_prod,pr.prod_nombre, vnt.prod_ref, vnt.prod_prec, pr.prod_categoria, sum(vnt.vnt_cant_prod) as vntTotal FROM producto pr INNER JOIN ventas vnt ON pr.id_prod = vnt.id_prod GROUP BY vnt.id_prod ORDER BY 6 desc limit 1";
            $datos = $this->modelVentas->consultarArray($sql);
            return $datos;
    }

    public function productoMasStock() {
        $sql = "SELECT prod_nombre, prod_stock FROM producto ORDER BY 2 desc LIMIT 1";
            $datos = $this->modelVentas->consultarArray($sql);
            return $datos;
        
    }
        
    

}


