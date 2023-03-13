function alertProcess(accion, descripcion, type) {
    Swal.fire(
        accion,
        descripcion,
        type
    )
}

$("#exampleInputEmail").blur(function () {



    email = document.getElementById("exampleInputEmail").value;
    let url = "index.php?modulo=Login&controlador=Login&funcion=consultarCorreo";
    getConsultarCorreo(email, url);
    /*
    let params = "&email=" + email;

    $.getJSON(url, { "email": email })
        .done(function (data, textStatus, jqXHR) {
            if (console && console.log) {
                console.log("La solicitud se ha completado correctamente.");
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
                console.log("Algo ha fallado: " + textStatus + " --> " + errorThrown);
            }
    });
    */

});


function getConsultarCorreo(email, url) {

    return new Promise((resolve, reject) => {
        //url: 'index.php?modulo=Login&controlador=Login&funcion=consultarCorreo',
        url: 'index.php?';
        $.ajax({
            //url: '../controller/Login/LoginController.php?function=consultarCorreo',
            url: url,
            type: 'GET',
            data: "email=" + email,
            success: function (response) {
                console.log(response);
                let respuesta = JSON.parse(response);
                console.log(respuesta);

                if (respuesta === false) {
                    alertProcess('Notificación', "Ocurrio un error", 'error');
                    setTimeout('document.location.reload()', 2000);
                    return false;
                }

                resolve(respuesta);
            }
        }
        )
    });


}
