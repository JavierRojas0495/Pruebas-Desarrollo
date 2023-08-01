$(document).ready(function () {
    $('#dataTableHistoriaClinica').DataTable({
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

  // ______________________________________________________________________________________________________________________________________________________ //


  function postRegistroHistoriaClinica() {

    let id_mascota = document.getElementById('mascota').value;
    let id_veterinario = document.getElementById('veterinario').value;
    let peso_mascota = document.getElementById('peso').value;
    let temperatura_mascota = document.getElementById('temperatura').value;
    let frecuencia_cardiaca_mascota = document.getElementById('frecuencia').value;
    let observacion_cliente = document.getElementById('observaciones_cliente').value;
    let observacion = document.getElementById('observaciones').value;
  
    if (validaCampoVacio(id_mascota) || isNumeric(id_mascota) ) {
        document.getElementById('mascota').focus();
        alertProcess('Notificación', "El campo mascota no puede estar vacio", 'error');
        return false;
    }
    if (validaCampoVacio(id_veterinario) || isNumeric(id_veterinario) ) {
        
        document.getElementById('veterinario').focus();
        alertProcess('Notificación', "El campo veterinario no puede estar vacio", 'error');
        return false;
    }

    if (validaCampoVacio(peso_mascota) || isNumeric(peso_mascota) ) {
        
      document.getElementById('peso').focus();
      alertProcess('Notificación', "El campo peso no puede estar vacio", 'error');
      return false;
    }

    if (validaCampoVacio(temperatura_mascota) || isNumeric(temperatura_mascota) ) {
        
      document.getElementById('temperatura').focus();
      alertProcess('Notificación', "El campo temperatura no puede estar vacio", 'error');
      return false;
    }

    if (validaCampoVacio(frecuencia_cardiaca_mascota) || isNumeric(frecuencia_cardiaca_mascota) ) {
        
      document.getElementById('frecuencia').focus();
      alertProcess('Notificación', "El campo frecuencia no puede estar vacio", 'error');
      return false;
    }

    if (validaCampoVacio(observacion_cliente)) {
        
      document.getElementById('observaciones_cliente').focus();
      alertProcess('Notificación', "El campo observacion cliente no puede estar vacio", 'error');
      return false;
    }

    if (validaCampoVacio(observacion)) {
        
      document.getElementById('observaciones').focus();
      alertProcess('Notificación', "El campo observaciones no puede estar vacio", 'error');
      return false;
    }

    consultarMascotaRegistrada(id_mascota,id_veterinario,peso_mascota,temperatura_mascota,frecuencia_cardiaca_mascota,observacion_cliente,observacion);
}

function consultarMascotaRegistrada(id_mascota,id_veterinario,peso_mascota,temperatura_mascota,frecuencia_cardiaca_mascota,observacion_cliente,observacion){

  $.ajax({
    type:"POST",
    url: "ajax.php?modulo=HistoriaClinica&controlador=HistoriaClinica&funcion=consultarMascotaRegistrada",
    data: 'id='+id_mascota,
    success:function(result){
      if(result.length > 2){
        postRegistrarDetalleHistoriaClinica(id_mascota,id_veterinario,peso_mascota,temperatura_mascota,frecuencia_cardiaca_mascota,observacion_cliente,observacion);
      }else{
        postRegistrarHistoriaClinica(id_mascota,id_veterinario,peso_mascota,temperatura_mascota,frecuencia_cardiaca_mascota,observacion_cliente,observacion);
        
      }
    
    }, error :function(result){
        alertProcess('Notificación',"Ocurrio un error al registrar",'error');
        setTimeout('document.location.reload()',2000);
    }
  }); 
}

function postRegistrarHistoriaClinica(id_mascota,id_veterinario,peso_mascota,temperatura_mascota,frecuencia_cardiaca_mascota,observacion_cliente,observacion){


    let data = { "id_mascota" : id_mascota,
                 "id_veterinario" : id_veterinario,
                 "peso_mascota" : peso_mascota,
                 "temperatura_mascota" : temperatura_mascota,
                 "frecuencia_cardiaca_mascota" : frecuencia_cardiaca_mascota,
                 "observacion_cliente" : observacion_cliente,
                 "observacion" : observacion,
            };
    
      $.ajax({
            type:"GET",
            url: "ajax.php?modulo=HistoriaClinica&controlador=HistoriaClinica&funcion=postRegistrarHistoriaClinica",
            data: data,
            success:function(result){
                
                alertProcess('Notificación',"Se registro correctamente",'success');
                url = 'index.php?modulo=Mascota&controlador=Mascota&funcion=listarMascotas';
                setTimeout("redireccionarPagina('"+url+"')", 1000);
            }, error :function(result){
                alertProcess('Notificación',"Ocurrio un error al registrar",'error');
                setTimeout('document.location.reload()',2000);
            }
        });

}

function postRegistrarDetalleHistoriaClinica(id_mascota,id_veterinario,peso_mascota,temperatura_mascota,frecuencia_cardiaca_mascota,observacion_cliente,observacion){


  let data = { "id_mascota" : id_mascota,
               "id_veterinario" : id_veterinario,
               "peso_mascota" : peso_mascota,
               "temperatura_mascota" : temperatura_mascota,
               "frecuencia_cardiaca_mascota" : frecuencia_cardiaca_mascota,
               "observacion_cliente" : observacion_cliente,
               "observacion" : observacion,
          };
  
    $.ajax({
          type:"GET",
          url: "ajax.php?modulo=HistoriaClinica&controlador=HistoriaClinica&funcion=postRegistrarDetalleHistoriaClinica",
          data: data,
          success:function(result){
              
              alertProcess('Notificación',"Se registro correctamente",'success');
              url = 'index.php?modulo=Mascota&controlador=Mascota&funcion=listarMascotas';
              setTimeout("redireccionarPagina('"+url+"')", 1000);
          }, error :function(result){
              alertProcess('Notificación',"Ocurrio un error al registrar",'error');
              setTimeout('document.location.reload()',2000);
          }
      });

}

function verDetalles(id){
    
  let id_dato = id;
    Swal.fire({
      title: 'seguro quieres ver detalles?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ver detalles!'
        }).then((result) => {
          if (result.isConfirmed) {
            listarDetallesHistoriaClinica(id_dato);
          }
    })
}


function listarDetallesHistoriaClinica(id){

  var url = "index.php?modulo=HistoriaClinica&controlador=HistoriaClinica&funcion=listarDetalleHistoriaClinicaMascota&id="+id;
  setTimeout("redireccionarPagina('"+url+"')", 500);
}

function verDetalleNovedadesHistoriaClinica(id){
    
  var id_dato = id;
    Swal.fire({
      title: 'seguro quieres ver detalles?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ver detalles!'
        }).then((result) => {
          if (result.isConfirmed) {
            detalleHistoriaClinica(id_dato);
          }
    })
}


function detalleHistoriaClinica(id){

  var url = "index.php?modulo=HistoriaClinica&controlador=HistoriaClinica&funcion=detallesNovedadHistoriaClinica&id="+id;
  setTimeout("redireccionarPagina('"+url+"')", 500);
}