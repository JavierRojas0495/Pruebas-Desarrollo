<?php

include_once '../model/Ventas/VentasModel.php';


Class GstVentas{

    private $modelVentas;
 	
 	function __construct(){
 		$this->modelVentas = new VentasModel();
 	}

    public function postVentaProducto($data){

        $id_prod = $data['id_prod'];
        $prod_ref = $data['ref_prod'];
        $prod_prec = $data['prec_prod'];
        $cant_prod = $data['cant_prod'];
        
        try {
            $sql ="insert into ventas values ('0',$id_prod,'$prod_ref',$prod_prec,$cant_prod,'A')";
            $resultado = $this->modelVentas->insertar($sql); 
            return $resultado;
        }catch(Exception $e){
            echo "Error al insertar venta";
            var_dump($e);
        }

    }


    public function consultarVentasProductos() {
        
        $sql = " SELECT VNT.id_prod, PR.prod_nombre, VNT.prod_ref, VNT.prod_prec, C.nombre as categoria , VNT.vnt_cant_prod, VNT.vnt_estado as estado, PR.ruta_img FROM producto PR INNER JOIN ventas VNT ON PR.id_prod = VNT.id_prod INNER JOIN categorias C ON PR.prod_categoria = C.id ORDER BY 6 desc ";
        $datos = $this->modelVentas->consultarArray($sql);
    
        return $datos;
    }
    
    public function productoMasStock() {

        $sql = " SELECT vnt.id_prod, pr.prod_nombre, sum(vnt.vnt_cant_prod) as vntTotal FROM producto pr INNER JOIN ventas vnt ON pr.id_prod = vnt.id_prod GROUP BY vnt.id_prod ORDER BY 3 desc limit 1 ";
            $datos = $this->modelVentas->consultarArray($sql);
            return $datos;
        
    }

    public function productoMasVendido(){

        $sql = " SELECT vnt.id_prod, pr.prod_nombre, sum(vnt.vnt_cant_prod) as vntTotal FROM producto pr INNER JOIN ventas vnt ON pr.id_prod = vnt.id_prod GROUP BY vnt.id_prod ORDER BY 3 asc limit 1 ";
            $datos = $this->modelVentas->consultarArray($sql);
            return $datos;
    }

        
    

}


