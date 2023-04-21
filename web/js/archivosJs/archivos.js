function alertProcess(accion, descripcion, type) {
    Swal.fire(
        accion,
        descripcion,
        type
    )
}

function validaCampoVacio(valor) {
    valor = valor.replace("&nbsp;", "");
    valor = valor == undefined ? "" : valor;
    if (!valor || 0 === valor.trim().length) {
        return true;
    }
    else {
        return false;
    }
}

function inputFile(file) {
    ext = $('input[type="file"]').val().split('.').pop();

    var fileInput = document.getElementById('pdf');
    var filePath = fileInput.value;
    var allowedExtensions = /(.pdf)$/i;
    if (!allowedExtensions.exec(filePath) || ext != 'pdf') {
        alertProcess('Su archivo: "' + ext + '" no esta permitido.', ' Solo se aceptan archivos PDF', 'error');
        fileInput.value = '';
        return false;
    }


}

function uploadFiles(ruta, form) {

    return new Promise((resolve, reject) => {
        let pdfForm = new FormData(document.getElementById(form));
        pdfForm.append("file", pdfForm.get("pdf"));
        pdfForm.append("ruta", ruta);

        //console.log(pdfForm.get("file"));

        $.ajax({
            url: 'archivos/funciones/guardarArchivosPDF.php',
            type: 'post',
            data: pdfForm,
            contentType: false,
            processData: false,
            caches: false,
        }).done(function (response) {
            //alertProcess(response);
            //let respuesta = JSON.parse(response);
            resolve(response);
        }).fail(function (response) {
            alert("error");
        });
    })
}

function postRegistrarPDF() {

    let nombreArc = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let fileInput = document.getElementById('pdf').value;

    if (validaCampoVacio(nombreArc)) {
        document.getElementById('nombre').focus();
        alertProcess('Notificación', "El campo nombre no puede estar vacio", 'error');
        return false;
    }

    if (validaCampoVacio(descripcion)) {
        document.getElementById('descripcion').focus();
        alertProcess('Notificación', "El campo descripcion no puede estar vacio", 'error');
        return false;
    }

    if (validaCampoVacio(fileInput)) {
        document.getElementById('archivo').focus();
        alertProcess('Notificación', "El campo archivo no puede estar vacio", 'error');
        return false;
    }

    if (inputFile(fileInput)) {
        document.getElementById('archivo').focus();
        alertProcess('Notificación', "El campo archivo no puede modificarse", 'error');
        return false;
    }
    uploadFiles("pdf", "formRegistrarArchivo")
        .then((pathFile) => {
            postRegistroArchivo(nombreArc, descripcion, pathFile);
        });
}

function postRegistroArchivo(nombreArc, descripcion, pathFile) {

    $(".btnCrearArchivo").attr("disabled", true);

    data = {
        "nom_arc": nombreArc,
        "descripcion": descripcion,
        "ruta": pathFile,
    };

    $.ajax({
        type: "POST",
        url: "ajax.php?modulo=Archivos&controlador=Archivos&funcion=postRegistroArchivo",
        data: data,
        success: function (result) {
            console.log(result);
            alertProcess('Notificación', "Se registro correctamente el producto", 'success');

            url = 'index.php?modulo=Archivos&controlador=Archivos&funcion=listarArchivos';
            setTimeout("redireccionarPagina('" + url + "')", 2000);

        }, error: function (result) {
            alertProcess('Notificación', "No se pudo registrar el producto", 'error');
            setTimeout('document.location.reload()', 2000);
        }
    });

}

function editarArchivo(id) {

    Swal.fire({
        title: 'seguro quieres editar?',
        text: "Te llevara a la pagina de editar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, editar esto!'
    }).then((result) => {
        if (result.isConfirmed) {
            editarArchivoId(id);
            return false;
        }
    })
}

function editarArchivoId(id) {

    var url = "index.php?modulo=Archivos&controlador=Archivos&funcion=editarArchivo&id=" + id;
    setTimeout("redireccionarPagina('" + url + "')", 500);
}

function postEditarArchivo() {

    let nombreArc = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let fileInput = document.getElementById('pdf').value;
    let id = document.getElementById('id').value;

    if (validaCampoVacio(nombreArc)) {
        document.getElementById('nombre').focus();
        alertProcess('Notificación', "El campo nombre no puede estar vacio", 'error');
        return false;
    }

    if (validaCampoVacio(descripcion)) {
        document.getElementById('descripcion').focus();
        alertProcess('Notificación', "El campo descripcion no puede estar vacio", 'error');
        return false;
    }

    if (validaCampoVacio(id)) {

        alertProcess('Notificación', "El campo id no puede estar vacio ", 'error');
        setTimeout('document.location.reload()', 2000);
        return false;
    }

    if ($('#pdf').val().length > 0) {

        uploadFiles("pdf", "formEditarArchivo")
            .then((pathFile) => {
                postEditarArchivoId(id, nombreArc, descripcion, pathFile);
            });
    } else {
        postEditarArchivoId(id, nombreArc, descripcion, pathFile = "");
    }


}

function postEditarArchivoId(id, nombreArc, descripcion, pathFile) {

    $(".btnEditarArchivo").attr("disabled", true);

    data = {
        "id": id,
        "nom_arc": nombreArc,
        "descripcion": descripcion,
        "ruta": pathFile,
    };
    console.log(data);

    $.ajax({
        type: "GET",
        url: "ajax.php?modulo=Archivos&controlador=Archivos&funcion=postEditarArchivo",
        data: data,
        success: function (result) {
            console.log(result);
            alertProcess('Notificación', "Se edito correctamente el producto", 'success');

            url = 'index.php?modulo=Archivos&controlador=Archivos&funcion=listarArchivos';
            setTimeout("redireccionarPagina('" + url + "')", 2000);

        }, error: function (result) {
            alertProcess('Notificación', "No se pudo registrar el producto", 'error');
            setTimeout('document.location.reload()', 2000);
        }
    });

}

function eliminarArchivo(id) {

    Swal.fire({
        title: 'seguro quieres eliminar esto?',
        text: "eliminaras el archivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar esto!'
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarArchivoId(id);
            return false;
        }
    })
}

function eliminarArchivoId(id) {


    $.ajax({
        type: "POST",
        url: "ajax.php?modulo=Archivos&controlador=Archivos&funcion=postEliminarArchivo",
        data: "id=" + id,
        success: function (respuesta) {
            alertProcess('Notificación', "Se elimino el registro", 'success');
            url = 'index.php?modulo=Archivos&controlador=Archivos&funcion=listarArchivos';
            setTimeout("redireccionarPagina('" + url + "')", 1000);

        }, error: function (respuesta) {
            alertProcess('Notificación', "No se pudo eliminar", 'error');
        }
    });
}

function verDocumentoPDF(id) {

    Swal.fire({
        title: 'seguro quieres ver esto?',
        text: "cambiaras de pagina!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, visualizar esto!'
    }).then((result) => {
        if (result.isConfirmed) {
            verDocumentoPDFId(id);
            return false;
        }
    })
}

function verDocumentoPDFId(id) {


    var url = "index.php?modulo=Archivos&controlador=Archivos&funcion=verDocumentoPDF&id=" + id;
    setTimeout("redireccionarPagina('" + url + "')", 500);
}