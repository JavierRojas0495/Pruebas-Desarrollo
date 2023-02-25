function alertProcess(accion, descripcion, type) {
    Swal.fire(
        accion,
        descripcion,
        type
    )
}

$("#exampleInputEmail").blur(function () {

    email = document.getElementById("exampleInputEmail").value;
    /*
    getConsultarCorreo(email).then((respuesta) => {
        console.log(respuesta);
        postCrearProducto(nom_Prod, ref_Prod, prec_Prod, peso_Prod, cat_Prod, stock_Prod, pathImg);
    });
    */

    $.ajax({
        type: "GET",
        url: "index.php?modulo=Login&controlador=Login&funcion=consultarCorreo",
        data: "email=" + email,
        dataType: "json",
        success: function (data) {
            console.log(data);
            //let resultado = JSON.parse(respuesta);
            //console.log(resultado);
            //$imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");
            //$imagenPrevisualizacion.src = 'img/undraw_posting_photo.svg';
            //alertProcess('Notificación',"Se edito correctamente",'success');
        }, error: function (data) {
            console.log("error============>  " + data);
            alertProcess('Notificación', "Ocurrio un error al consultar este correo", 'error');
            //setTimeout('document.location.reload()',2000);
        }
    });
});

/*
function getConsultarCorreo(email) {
    
    return new Promise((resolve, reject) => {
        //url: 'index.php?modulo=Login&controlador=Login&funcion=consultarCorreo',
        url: 'index.php?';
        $.ajax({
            url: '../controller/Login/LoginController.php?function=consultarCorreo',
            type: 'GET',
            data: "email=" + email,
            success: function (response) {
                console.log(response);
                let respuesta = JSON.parse(response);
                console.log(respuesta);
                
                if (respuesta === false) {
                  alertProcess('Notificación',"Ocurrio un error al subir la imagen a servidor",'error');
                  setTimeout('document.location.reload()', 2000);
                  return false;
                }
                
                resolve(respuesta);
            }
        }
        )
    });


}
*/