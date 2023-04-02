$(document).ready(function () {

  let img = document.getElementById('imagenPrevisualizacion').src;

  if (img === "" || img === undefined) {
    $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");
    $imagenPrevisualizacion.src = 'img/undraw_posting_photo.svg';
  }
});

$(document).ready(function () {
  $('#dataTableUsuarios').DataTable({
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

function uploadFile(ruta, form) {

  return new Promise((resolve, reject) => {
    let formData = new FormData(document.getElementById(form));
    formData.append("file", formData.get("image"));
    formData.append("ruta", ruta);

    $.ajax({
      url: 'img/funciones/guardarImagen.php',
      type: 'post',
      data: formData,
      contentType: false,
      processData: false,
      success: function (response) {

        let respuesta = JSON.parse(response);
        /*
        if (respuesta === false) {
          alertProcess('Notificación',"Ocurrio un error al subir la imagen a servidor",'error');
          setTimeout('document.location.reload()', 2000);
          return false;
        }
        */
        resolve(respuesta);
      }
    }
    )
  });


}

// esta funcion sera usada para continuar con eventos (Crear eliminar etc)
function alerta(accion, message) {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: 'ESeguro desea ' + accion + '?',
    text: "Notificación!",
    type: 'warning',
    width: '35%',
    showCancelButton: true,
    confirmButtonText: 'Si,' + accion + '!',
    cancelButtonText: 'No,' + accion + '!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Notificación!',
        'Proceso ' + accion + ' iniciado.',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Notificación',
        'Proceso ' + accion + ' cancelado:)',
        'error'
      )
    }
  })
}
// esta funcion sera usada para messages de error 
function alertProcess(accion, descripcion, type) {
  Swal.fire(
    accion,
    descripcion,
    type
  )
}

// Esta funcion es para el sweet alert en el listar usuarios
function editarUsuario(id) {
  var id_dato = id;
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
      editarUsuarioid(id_dato);
      return false;
    }
  })
}

function editarUsuarioid(id_dato) {

  var url = "index.php?modulo=Usuario&controlador=Usuario&funcion=editarUsuario&id=" + id_dato;
  setTimeout("redireccionarPagina('" + url + "')", 500);
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

function getSemestre() {

  let rol = document.getElementById('rol').value;

  if (rol === "10") {
    $("#semestre").show();
  } else {
    $("#semestre").hide();
  }

}


$(document).ready(function () {

  let rol = document.getElementById('rol').value;

  if (rol === '10') {
    $("#semestre").show();
  } else {
    $("#semestre").hide();
  }

});

function redireccionarPagina(url) {
  window.location = url;
}
/* 
    Este codigo se encarga del cambio de estado del usuario por medio del click en el boton
*/
function postUsuario($ejecutar) {

  let nombre = document.getElementById('nombre').value;
  let correo = document.getElementById('email').value;
  let sexo = $("input[name='sexo']:checked").val();
  //let sexo = document.getElementById('sexo').value;
  let area = document.getElementById('area').value;
  let numero_documento = document.getElementById('num_doc').value;
  let numero_telefono = document.getElementById('num_tel').value;
  let direccion = document.getElementById('usu_dir').value;
  let ciudad = document.getElementById('ciudad').value;
  let rol = document.getElementById('rol').value;
  let numero_semestre = document.getElementById('nu_semestre').value;

  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (validaVacio(nombre)) {

    document.getElementById('nombre').focus();
    alertProcess('Notificación', "El campo nombre no puede estar vacio", 'error');
    return false;

  } else if (validaVacio(correo)) {

    document.getElementById('email').focus();
    alertProcess('Notificación', "El campo correo no puede estar vacio", 'error');
    return false;

  } else if (!expr.test(correo)) {

    document.getElementById('email').focus();
    alertProcess('Notificación', "La dirección de correo  -" + correo + "-  es incorrecta.", 'error');
    return false;

  } else if (sexo === undefined || sexo === null) {

    document.getElementById('sexo').focus();
    alertProcess('Notificación', "El campo sexo no puede estar vacio", 'error');
    return false;

  } else if (validaVacio(area)) {

    document.getElementById('area').focus();
    alertProcess('Notificación', "El campo area no puede estar vacio", 'error');
    return false;

  } else if (validaVacio(numero_documento) || isNumeric(numero_documento)) {

    document.getElementById('num_doc').focus();
    alertProcess('Notificación', "El campo numero de documento no puede estar vacio y debe ser un numero ", 'error');
    return false;

  } else if (validaVacio(numero_telefono) || isNumeric(numero_telefono)) {

    document.getElementById('num_tel').focus();
    alertProcess('Notificación', "El campo numero de telefono no puede estar vacio y debe ser un numero ", 'error');
    return false;

  } else if (validaVacio(direccion)) {

    document.getElementById('usu_dir').focus();
    alertProcess('Notificación', "El campo dirección de telefono no puede estar vacio", 'error');
    return false;

  } else if (validaVacio(ciudad)) {

    document.getElementById('ciudad').focus();
    alertProcess('Notificación', "El campo ciudad de telefono no puede estar vacio", 'error');
    return false;

  } else if (validaVacio(rol)) {

    document.getElementById('rol').focus();
    alertProcess('Notificación', "El campo rol de telefono no puede estar vacio", 'error');
    return false;
  }

  if (rol === "10") {
    if (validaVacio(numero_semestre) || isNumeric(numero_semestre)) {
      document.getElementById('nu_semestre').focus();
      alertProcess('Notificación', "El campo numero de semestre no puede estar vacio y debe ser un numero", 'error');
      return false;
    }
  }

  if ($ejecutar == '1') {

    let imgVal = $('#image').val();

    if (imgVal === undefined || imgVal === '') {
      pathImg = 'img/imgCargarUsuarios/usuario_sin_foto.jpg';
      postCrearUsuario(nombre, correo, sexo, area, numero_documento, numero_telefono, direccion, ciudad, rol, numero_semestre, pathImg);
    } else {
      uploadFile("imgCargarUsuarios", "formCrearUsuario")
        .then((pathImg) => {
          console.log(pathImg);
          postCrearUsuario(nombre, correo, sexo, area, numero_documento, numero_telefono, direccion, ciudad, rol, numero_semestre, pathImg);
        });
    }
  }
  if ($ejecutar == '2') {

    let id_usuario = document.getElementById('id').value;

    if (validaVacio(id_usuario) || isNumeric(id_usuario)) {
      alertProcess('Notificación', "El campo id no puede estar vacio ", 'error');
      setTimeout('document.location.reload()', 2000);
      return false;

    }

    setTimeout(function () { posteditarUsuarioid(id_usuario, nombre, correo, sexo, area, numero_documento, numero_telefono, direccion, ciudad, rol, numero_semestre); }, 1000);
  }


}

function postCrearUsuario(nombre, correo, sexo, area, numero_documento, numero_telefono, direccion, ciudad, rol, semestre, ruta_img) {
  $(".btnCrearUsuario").attr("disabled", true);



  let data = {
    "nombre": nombre,
    "correo": correo,
    "sexo": sexo,
    "area": area,
    "numero_documento": numero_documento,
    "numero_telefono": numero_telefono,
    "direccion": direccion,
    "ciudad": ciudad,
    "rol": rol,
    "semestre": semestre,
    "ruta_img": ruta_img
  };

  $.ajax({
    type: "POST",
    url: "index.php?modulo=Usuario&controlador=Usuario&funcion=postCrearUsuario",
    data: data,
    success: function (result) {
      alertProcess('Notificación', "Se registro correctamente", 'success');

      url = 'index.php?modulo=Usuario&controlador=Usuario&funcion=listarUsuario';
      setTimeout("redireccionarPagina('" + url + "')", 2000);


    }, error: function (result) {
      alertProcess('Notificación', "No se pudo registrar", 'error');
      setTimeout('document.location.reload()', 2000);
    }
  });

}

// Funcion sweer alert para pregunta de eliminar usuario
function eliminarUsuarios(id) {

  var id_dato = id;
  Swal.fire({
    title: 'seguro quieres eliminar?',
    text: "No podras revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar esto!'
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarUsuario(id_dato);
    }
  })
}


function eliminarUsuario(id) {

  var url = "index.php?modulo=Usuario&controlador=Usuario&funcion=postEliminarUsuario";
  $.ajax({
    type: "POST",
    url: url,
    data: "id=" + id,
    success: function (respuesta) {
      alertProcess('Notificación', "Se elimino el registro", 'success');
      setTimeout('document.location.reload()', 1000);
    }, error: function (respuesta) {
      alertProcess('Notificación', "No se pudo eliminar", 'error');
    }
  });
}

function posteditarUsuarioid(id, nombre, correo, sexo, area, numero_documento, numero_telefono, direccion, ciudad, rol, semestre) {

  if (rol != "10") {
    semestre = "";
  }

  $(".btnEditarUsuario").attr("disabled", true);

  let data = {
    "id_usuario": id,
    "nombre": nombre,
    "correo": correo,
    "sexo": sexo,
    "area": area,
    "numero_documento": numero_documento,
    "numero_telefono": numero_telefono,
    "direccion": direccion,
    "ciudad": ciudad,
    "rol": rol,
    "semestre": semestre
  };
  console.log(data);
  $.ajax({
    type: "POST",
    url: "index.php?modulo=Usuario&controlador=Usuario&funcion=postEditarUsuario",
    data: data,
    success: function () {

      alertProcess('Notificación', "Se edito correctamente", 'success');
      url = 'index.php?modulo=Usuario&controlador=Usuario&funcion=listarUsuario';
      setTimeout("redireccionarPagina('" + url + "')", 2000);

    }, error: function () {

      alertProcess('Notificación', "No se pudo registrar", 'error');
      setTimeout('document.location.reload()', 2000);
    }
  });
}




