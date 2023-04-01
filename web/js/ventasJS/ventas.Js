function ventaProducto(id) {

    Swal.fire({
        title: 'seguro quieres vender este producto?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vender esto!'
    }).then((result) => {
        if (result.isConfirmed) {
            var url = "index.php?modulo=Ventas&controlador=Ventas&funcion=vistaVentaProducto&idProd=" + id;
            setTimeout("redireccionarPagina('" + url + "')", 500);
        }
    })
}

function NumberFormat(number) {

    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
    return formatterPeso.format(number);
}

$("#cant_producto").on("change", function () {

    let cant_prod = $("#cant_producto").val()
    let stock_Prod = $("#stock_producto").val()

    if (!isNaN(cant_prod) && !isNaN(stock_Prod)) {

        if (parseInt(stock_Prod) - parseInt(cant_prod) < 0) {
            alertProcess('Notificación', "Cantidad maxima de stock.", "error");
            $("#cant_producto").val(stock_Prod);
        }

    }

    if (cant_prod <= 0) {
        alertProcess('Advertencia', "La cantidad del producto debe ser mayor a 0", "error");
        $("#cant_producto").val(1);
    }

    $("#prec_venta").val($("#cant_producto").val() * $("#prec_producto").val());

});

function postVentaProducto() {

    let cant_prod = document.getElementById('cant_producto').value;
    let id_prod = document.getElementById('idproducto').value;
    let stock_Prod = document.getElementById('stock_producto').value;
    let ref_Prod = document.getElementById('ref_producto').value;
    let prec_venta = document.getElementById('prec_venta').value;
    let precio_prod = document.getElementById('prec_producto').value;


    if (parseInt(stock_Prod) - parseInt(cant_prod) < 0) {
        alertProcess('Notificación', "Sin unidades suficientes para esta compra.", "error");
        return;
    }
    if (parseInt(cant_prod) <= 0) {
        alertProcess('Notificación', "Sin unidades para esta compra.", "error");
        return;
    }

    data = {
        "cant_prod": cant_prod,
        "id_prod": id_prod,
        "ref_prod": ref_Prod,
        "prec_venta": prec_venta,
        "prec_prod": precio_prod
    };


    $.ajax({
        type: "GET",
        url: "index.php?modulo=Ventas&controlador=Ventas&funcion=postVentaProducto",
        data: data,
        success: function (result) {

            alertProcess('Notificación', "Se realizo la venta correctamente", 'success');
            url = 'index.php?modulo=Producto&controlador=Producto&funcion=listarProductos';
            setTimeout("redireccionarPagina('" + url + "')", 2000);


        }, error: function (result) {

            alertProcess('Notificación', "No se pudo registrar la venta", 'error');
            setTimeout('document.location.reload()', 2000);

        }
    });


}

function modalShop(id_product) {

    $('#cantProd').val(1);

    $.ajax({
        type: "GET",
        url: "ajax.php?modulo=Ventas&controlador=Ventas&funcion=getProductId",
        data: "id_product=" + id_product,
        success: function (result) {
            resultados = JSON.parse(result);
            //console.log(resultados);
            document.getElementById('productId').value = id_product;
            document.getElementById('product-name').innerHTML = '<strong>' + resultados[0]['prod_nombre'] + '</strong>';
            $imagenPrevisualizacion.src = resultados[0]['ruta_img'];
            document.getElementById('product-ref').innerHTML = '<strong> Referencia: </strong >' + resultados[0]['prod_referencia'];
            document.getElementById('UnidadesD').innerHTML = '</strong >' + resultados[0]['vnt_cant_prod'];
            document.getElementById('prec-prod').innerHTML = NumberFormat(resultados[0]['prod_precio']);

        }, error: function (result) {
            alertProcess('Notificación', "Ocurrio un error", 'error');
            console.log(result);
            setTimeout('document.location.reload()', 2000);
        }
    });
    $('#modalAddCart').modal({ show: true });

    add.onclick = () => {
        let numero = Number(cantProd.value.trim(" "));
        numero = !isNaN(numero) ? numero + 1 : 1;

        if (numero > resultados[0]['vnt_cant_prod']) {
            alertProcess('Notificación', "Unidades Disponibles: " + resultados[0]['vnt_cant_prod'], 'error');
            numero = resultados[0]['vnt_cant_prod'];
        }



        cantProd.value = numero;
        ValorTotal = resultados[0]['prod_precio'] * numero;

        document.getElementById('prec-prod').innerHTML = NumberFormat(ValorTotal);
    }

    del.onclick = () => {
        let numero = Number(cantProd.value.trim(" "));
        numero = !isNaN(numero) ? numero - 1 : 1;

        if (numero < 1) {
            numero = 1;
        }
        cantProd.value = numero;

        ValorTotal = resultados[0]['prod_precio'] * numero;

        document.getElementById('prec-prod').innerHTML = NumberFormat(ValorTotal);
    }
}


$(".add-product").on("click", function () {


    let cantProduct = cantProd.value;
    let Id = productId.value

    if (localStorage.length == 0) {
        localStorage.setItem(1, { "idProduct": Id, "cantProduct": cantProduct });
    } else {

        for (let x = 0; x < localStorage.length; x++) {
            data = localStorage.getItem(localStorage.key(x));
            console.log(data);
        }

        //i = localStorage.length
        //localStorage.setItem(i + 1, { "idProduct": Id, "cantProduct": cantProduct });
    }



});


