$(document).ready(function () {
    $('#dataTableEventos').DataTable({
        language: {
            "decimal": "",
            "emptyTable": "Sin Información",
            "info": "Registros _START_ de _TOTAL_ Registros",
            "infoEmpty": "Registros 0 to 0 of 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total registros)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Cantidad _MENU_",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        },
    });
});


function alertProcess(accion, descripcion, type) {
    Swal.fire(
        accion,
        descripcion,
        type
    )
}

function validaVacio(valor) {
    valor = valor.replace("&nbsp;", "");
    valor = valor == undefined ? "" : valor;
    if (!valor || 0 === valor.trim().length) {
        return true;
    }
    else {
        return false;
    }
}

function isNumeric(val) {
    return isNaN(val);
}

function redireccionarPagina(url) {
    window.location = url;
}

function validarFechaMenorActual(date) {
    let fecha = date.split("-");
    let resultado = false;

    let Fecha = new Date(parseInt(fecha[0]), parseInt(fecha[1] - 1), parseInt(fecha[2]));
    let today = new Date();
    today.setHours(0, 0, 0, 0);


    if (Fecha < today) {
        resultado = true;
    }

    return resultado;
}

function validarFechas(fechaInicial, fechaFinal) {

    //let fechaInicial;
    let Fecha1;
    //let fechaFinal;
    let Fecha2;
    let resultado = false;

    fechaInicial = fechaInicial.split("-");
    Fecha1 = new Date(parseInt(fechaInicial[0]), parseInt(fechaInicial[1] - 1), parseInt(fechaInicial[2]));

    fechaFinal = fechaFinal.split("-");
    Fecha2 = new Date(parseInt(fechaFinal[0]), parseInt(fechaFinal[1] - 1), parseInt(fechaFinal[2]));


    if (Fecha1 <= Fecha2) {
        resultado = true;
    }

    //console.log(resultado);
    return resultado;

}

function postEvento() {

    // Evento //

    let objetivo = document.getElementById('objeto').value;
    let descripcion = document.getElementById('descripcion').value;
    let moneda = document.getElementById('moneda').value;
    let presupuesto = document.getElementById('presupuesto').value;
    let actividad = document.getElementById('actividad').value;

    if (validaVacio(objetivo)) {

        document.getElementById('objeto').focus();
        alertProcess('Notificación', "El campo objeto no puede estar vacio", 'error');
        return false;
    }

    if (validaVacio(descripcion)) {

        document.getElementById('descripcion').focus();
        alertProcess('Notificación', "El campo descripcion no puede estar vacio", 'error');
        return false;
    }

    if (validaVacio(moneda)) {

        document.getElementById('moneda').focus();
        alertProcess('Notificación', "El campo descripcion no puede estar vacio", 'error');
        return false;
    }

    if (validaVacio(presupuesto)) {

        document.getElementById('presupuesto').focus();
        alertProcess('Notificación', "El campo presupuesto no puede estar vacio", 'error');
        return false;
    }

    if (isNumeric(presupuesto)) {
        document.getElementById('presupuesto').focus();
        alertProcess('Notificación', "El campo presupuesto debe ser numerico", 'error');
        return false;
    }

    switch (moneda) {
        case 'USD':
            moneda = 'USD';
            break;
        case 'EUR':
            moneda = 'EUR';
            break;
        case 'COP':
            moneda = 'COP';
            break;
        default:
            moneda = 'COP';
    }

    if (validaVacio(actividad)) {

        document.getElementById('actividad').focus();
        alertProcess('Notificación', "El campo actividad no puede estar vacio", 'error');
        return false;
    }

    alertProcess('Notificación', "La moneda escogida para el campo presupuesto es: " + moneda);


    // Cronograma //

    let fechaInicial = document.getElementById('fechaIni').value;
    let horaInicial = document.getElementById('horaIni').value
    let fechaFinal = document.getElementById('fechaFin').value
    let horaFinal = document.getElementById('horaFin').value

    if (validaVacio(fechaInicial)) {

        document.getElementById('fechaIni').focus();
        alertProcess('Notificación', "El campo Fecha Inicio no puede estar vacio", 'error');
        return false;
    }

    if (validarFechaMenorActual(fechaInicial)) {

        document.getElementById('fechaIni').focus();
        alertProcess('Notificación', "El campo Fecha Inicio no puede ser menor a la fecha actual", 'error');
        return false;
    }


    if (validaVacio(horaInicial)) {

        document.getElementById('horaIni').focus();
        alertProcess('Notificación', "El campo Horal Inicio no puede estar vacio", 'error');
        return false;
    }

    if (validaVacio(fechaFinal)) {

        document.getElementById('fechaFin').focus();
        alertProcess('Notificación', "El campo Fecha Final no puede estar vacio", 'error');
        return false;
    }

    if (validarFechaMenorActual(fechaFinal)) {

        document.getElementById('fechaFin').focus();
        alertProcess('Notificación', "El campo Fecha Final no puede ser menor a la fecha actual", 'error');
        return false;
    }

    if (validaVacio(horaFinal)) {

        document.getElementById('horaFin').focus();
        alertProcess('Notificación', "El campo Horal Final no puede estar vacio", 'error');
        return false;
    }

    if (validarFechas(fechaInicial, fechaFinal) == false) {
        document.getElementById('fechaFin').focus();
        alertProcess('Notificación', "El campo Fecha Final no puede ser menor a la Fecha Inicial", 'error');
        return false;
    }


    data = {
        "objetivo": objetivo,
        "descripcion": descripcion,
        "moneda": moneda,
        "actividad": actividad,
        "presupuesto": presupuesto,
        "fechaInicial": fechaInicial,
        "horaInicial": horaInicial,
        "fechaFinal": fechaFinal,
        "horaFinal": horaFinal
    };


    $.ajax({
        type: "GET",
        url: "ajax.php?modulo=Evento&controlador=Evento&funcion=postRegistrarEvento",
        data: data,
        success: function (result) {
            console.log(result);

            if (result == "true") {
                alertProcess('Notificación', "Se realizo el registro correctamente", 'success');
                url = 'index.php?modulo=Evento&controlador=Evento&funcion=listarEvento';
                setTimeout("redireccionarPagina('" + url + "')", 2000);
            } else {
                alertProcess('Notificación', "No se pudo registrar el evento", 'error');
                setTimeout('document.location.reload()', 3000);
            }


        }, error: function (result) {

            alertProcess('Notificación', "No se pudo registrar el evento", 'error');
            setTimeout('document.location.reload()', 2000);

        }
    });
}


function agregarArchivos(id) {

    Swal.fire({
        title: ' Seguro quieres agregar archivos ?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, agregar archivos'
    }).then((result) => {
        if (result.isConfirmed) {
            let url = "index.php?modulo=Evento&controlador=Evento&funcion=agregarArchivos&idEvent=" + id;
            setTimeout("redireccionarPagina('" + url + "')", 500);
        }
    })
}

function postRegistrarArchivos() {

    let nombre = document.getElementById('nombre').value;
    let identificador = document.getElementById('ident').value;



    if (validaVacio(nombre)) {

        document.getElementById('nombre').focus();
        alertProcess('Notificación', "El campo nombre no puede estar vacio", 'error');
        return false;
    }

    if (validaVacio(identificador)) {

        document.getElementById('ident').focus();
        alertProcess('Notificación', "El campo identificador no puede estar vacio", 'error');
        setTimeout('document.location.reload()', 2000);
    }

    let archivos = document.querySelector("#archivos");
    let archivosSubir = archivos.files;
    const formData = new FormData();

    for (let archivo of archivosSubir) {
        formData.append("archivos[]", archivo);
        formData.append("ruta", "archivos");
        formData.append("nombre", nombre + identificador);
    }

    $.ajax({
        url: 'archivos/funciones/guardarArchivos.php',
        type: 'post',
        data: formData,
        contentType: false,
        processData: false,
        caches: false,
    }).done(function (response) {
        alertProcess(response);
        let url = "index.php?modulo=Evento&controlador=Evento&funcion=listarEvento";
        setTimeout("redireccionarPagina('" + url + "')", 500);

    }).fail(function (response) {
        alert("error");
    });
}

$(document).ready(function () {
    $('#dataTableEventosList').DataTable({
        language: {
            "decimal": "",
            "emptyTable": "Sin Información",
            "info": "Registros _START_ de _TOTAL_ Registros",
            "infoEmpty": "Registros 0 to 0 of 0 Registros",
            "infoFiltered": "(Filtrado de _MAX_ total registros)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Cantidad _MENU_",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        },
        dom: 'Bfrtip',
        buttons: [
            'csv',
        ]
    });
});

