$(document).ready(function () {

  let img = document.getElementById('imagenPrevisualizacion').src;

  if (img === "" || img === undefined) {
    $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");
    $imagenPrevisualizacion.src = 'img/undraw_posting_photo.svg';
  }


});

$(document).ready(function () {
  $('#dataTableProductos').DataTable({
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

$(document).ready(function () {

  const $seleccionArchivos = document.querySelector("#image"),
    $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");

  $seleccionArchivos.addEventListener("change", () => {
    const archivos = $seleccionArchivos.files;

    if (!archivos || !archivos.length) {
      $imagenPrevisualizacion.src = "";
      return;
    }
    const primerArchivo = archivos[0];

    const objectURL = URL.createObjectURL(primerArchivo);
    $imagenPrevisualizacion.src = objectURL;
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

function redireccionarPagina(url) {
  window.location = url;
}

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

function isNumeric(val) {
  return isNaN(val);
}

function postProducto($ejecutar) {

  let nom_Prod = document.getElementById('nom_producto').value;
  let ref_Prod = document.getElementById('ref_producto').value;
  let prec_Prod = document.getElementById('prec_producto').value;
  let peso_Prod = document.getElementById('peso_producto').value;
  let cat_Prod = document.getElementById('cat_producto').value;
  let stock_Prod = document.getElementById('stock_producto').value;

  if (validaCampoVacio(nom_Prod)) {
    document.getElementById('nom_producto').focus();
    alertProcess('Notificación', "El campo nombre no puede estar vacio", 'error');
    return false;

  } else if (validaCampoVacio(ref_Prod)) {
    document.getElementById('ref_producto').focus();
    alertProcess('Notificación', "El campo referencia no puede estar vacio", 'error');
    return false;
  }

  else if (prec_Prod <= 0 || isNumeric(prec_Prod) || validaCampoVacio(prec_Prod)) {
    document.getElementById('prec_producto').focus();
    alertProcess('Notificación', "El campo precio no puede estar vacio y debe ser un numero mayor a 0", 'error');
    return false;
  }

  else if (isNumeric(peso_Prod) || validaCampoVacio(peso_Prod) || parseInt(peso_Prod) < 0) {
    document.getElementById('peso_producto').focus();
    alertProcess('Notificación', "El campo peso no puede estar vacio y debe ser un numero mayor a 0", 'error');
    return false;
  }


  else if (validaCampoVacio(cat_Prod)) {
    document.getElementById('cat_producto').focus();
    alertProcess('Notificación', "El campo referencia no puede estar vacio", 'error');
    return false;
  }
  else if (isNumeric(stock_Prod) || validaCampoVacio(stock_Prod) || parseInt(stock_Prod) < 0) {
    document.getElementById('stock_producto').focus();
    alertProcess('Notificación', "El campo stock no puede estar vacio y debe ser un numero mayor o igual a 0", 'error');
    return false;
  }


  if ($ejecutar == 'crear') {

    let imgVal = $('#image').val();

    if (imgVal === undefined || imgVal === '') {
      pathImg = 'img/imgCargarProductos/producto-sin-imagen.png';
      postCrearProducto(nom_Prod, ref_Prod, prec_Prod, peso_Prod, cat_Prod, stock_Prod, pathImg);
    } else {
      uploadFile("imgCargarProductos", "formCrearProducto")
        .then((pathImg) => {
          console.log(pathImg);
          postCrearProducto(nom_Prod, ref_Prod, prec_Prod, peso_Prod, cat_Prod, stock_Prod, pathImg);
        });
    }

  } else {

    $id_product = document.getElementById('idproducto').value;
    if ($id_product == "" || $id_product == null || $id_product == undefined || Number.isInteger($id_product)) {
      alertProcess('Notificación', "No se debe eliminar el campo del producto", 'error');
    } else {

      uploadFile("imgCargarProductos", "formEditarProducto")
        .then((pathImg) => {
          postEditarProducto($id_product, nom_Prod, ref_Prod, prec_Prod, peso_Prod, cat_Prod, stock_Prod, pathImg);
        });


    }

  }
}

function postCrearProducto(nom_Prod, ref_Prod, prec_Prod, peso_Prod, cat_Prod, stock_Prod, rutaImg) {

  $(".btnCrearProducto").attr("disabled", true);

  data = {
    "prod_nombre": nom_Prod,
    "prod_ref": ref_Prod,
    "prod_prec": prec_Prod,
    "prod_peso": peso_Prod,
    "prod_cat": cat_Prod,
    "prod_stock": stock_Prod,
    "url_img": rutaImg,
  };

  $.ajax({
    type: "POST",
    url: "index.php?modulo=Producto&controlador=Producto&funcion=postCrearProducto",
    data: data,
    success: function (result) {
      alertProcess('Notificación', "Se registro correctamente el producto", 'success');

      url = 'index.php?modulo=Producto&controlador=Producto&funcion=listarProductos';
      setTimeout("redireccionarPagina('" + url + "')", 2000);

    }, error: function (result) {
      alertProcess('Notificación', "No se pudo registrar el producto", 'error');
      setTimeout('document.location.reload()', 2000);
    }
  });

}

function postEditarProducto($id_product, nom_Prod, ref_Prod, prec_Prod, peso_Prod, cat_Prod, stock_Prod, rutaImg) {

  $(".btnEditarProducto").attr("disabled", true);

  data = {
    "prod_id": $id_product,
    "prod_nombre": nom_Prod,
    "prod_ref": ref_Prod,
    "prod_prec": prec_Prod,
    "prod_peso": peso_Prod,
    "prod_cat": cat_Prod,
    "prod_stock": stock_Prod,
    "url_img": rutaImg,
  };

  $.ajax({
    type: "POST",
    url: "index.php?modulo=Producto&controlador=Producto&funcion=postEditarProducto",
    data: data,
    success: function (result) {

      alertProcess('Notificación', "Se edito correctamente el producto", 'success');
      url = 'index.php?modulo=Producto&controlador=Producto&funcion=listarProductos';
      setTimeout("redireccionarPagina('" + url + "')", 2000);

    }, error: function (result) {
      alertProcess('Notificación', "No se pudo registrar el producto", 'error');
      setTimeout('document.location.reload()', 2000);
    }
  });
}

function eliminarProducto(id) {

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
      eliminarPostProducto(id);
    }
  })
}

function eliminarPostProducto(id) {

  let url = "index.php?modulo=Producto&controlador=Producto&funcion=postEliminarProducto";
  $.ajax({
    type: "POST",
    url: url,
    data: "id=" + id,
    success: function (respuesta) {
      alertProcess('Notificación', "Se elimino el producto correctamente", 'success');
      setTimeout('document.location.reload()', 2000);
    }, error: function (respuesta) {
      alertProcess('Notificación', "No se pudo eliminar", 'error');
    }
  });
}

function editarProducto(id) {

  Swal.fire({
    title: 'seguro quieres editar este producto?',
    text: "No podras revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, editar esto!'
  }).then((result) => {
    if (result.isConfirmed) {
      vistaEditarProducto(id);
    }
  })
}
function vistaEditarProducto(id) {

  var url = "index.php?modulo=Producto&controlador=Producto&funcion=vistaEditarProducto&idProd=" + id;
  setTimeout("redireccionarPagina('" + url + "')", 500);

}

