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

function modalShopCart() {

    $('#modalAddCart').modal({ show: true });

    add.onclick = () => {
        let numero = Number(cantProd.value.trim(" "));
        numero = !isNaN(numero) ? numero + 1 : 1;

        cantProd.value = numero;
    }

    del.onclick = () => {
        let numero = Number(cantProd.value.trim(" "));
        numero = !isNaN(numero) ? numero - 1 : 1;

        if (numero < 1) {
            numero = 1;
        }
        cantProd.value = numero;
    }
}


