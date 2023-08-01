$(document).ready(function () {
    $('#dataTableMascotas').DataTable({
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


  function postMascota($ejecutar) {

    let nombreMascota = document.getElementById('nombre').value;
    let raza = document.getElementById('raza').value;
    let sexo = $("input[name='sexo']:checked").val();
    let detalles = document.getElementById('detalles').value;
    let usuario = document.getElementById('usuario').value;
  
    if (validaCampoVacio(nombreMascota)) {
      
      document.getElementById('nombre').focus();
      alertProcess('Notificación', "El campo nombre no puede estar vacio", 'error');
      return false;
  
    }
    if (validaCampoVacio(raza) || isNumeric(raza) ) {
        
        document.getElementById('raza').focus();
        alertProcess('Notificación', "El raza no puede estar vacio", 'error');
        return false;
    
    }

    if (validaCampoVacio(detalles)) {
  
        alertProcess('Notificación', "El campo detalles no puede estar vacio", 'error');
        document.getElementById('detalles').focus();
        return false;
    
    }
  
    if (sexo === undefined || sexo === null) {

      document.getElementById('sexo').focus();
      alertProcess('Notificación', "El campo sexo no puede estar vacio", 'error');
      return false;
  
    }

    if (validaCampoVacio(usuario) || isNumeric(usuario) ) {
        
      document.getElementById('usuario').focus();
      alertProcess('Notificación', "El campo usuario no puede estar vacio", 'error');
      return false;
  
  }
   
    if ($ejecutar == '1') {
        
        postRegistrarMascota(nombreMascota,raza,sexo,detalles,usuario);

    }

    if ($ejecutar == '2'){
      let idMascota = document.getElementById('id').value;

      if (validaCampoVacio(idMascota) || isNumeric(idMascota) ) {
        console.log(idMascota);
        alertProcess('Notificación', "El campo id no puede estar vacio ", 'error');
       setTimeout('document.location.reload()', 2000);
      }
      
      postEditarMascota(nombreMascota,raza,sexo,detalles,usuario,idMascota);
      
    }

}

function postRegistrarMascota(nombreMascota,raza,sexo,detalles,usuario){


    let data = { "nombre" : nombreMascota,
                 "raza" : raza,
                 "sexo" : sexo,
                 "detalles" : detalles,
                 "usuario" : usuario
            };
    
      $.ajax({
            type:"POST",
            url: "ajax.php?modulo=Mascota&controlador=Mascota&funcion=postRegistrarMascota",
            data: data,
            success:function(result){

              console.log(result);
                  alertProcess('Notificación',"Se registro correctamente",'success');
                
                url = 'index.php?modulo=Mascota&controlador=Mascota&funcion=listarMascotas';
                setTimeout("redireccionarPagina('"+url+"')", 1000);
                
                   
            }, error :function(result){
                alertProcess('Notificación',"Ocurrio un error al registrar",'error');
                setTimeout('document.location.reload()',2000);
            }
        });

}

function editarMascota(id){
    
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
          editarMascotaid(id);
          return false;
        }
  })
}

function editarMascotaid(id){  

  var url = "index.php?modulo=Mascota&controlador=Mascota&funcion=editarMascota&id="+id;
  setTimeout("redireccionarPagina('"+url+"')", 500);
}
function postEditarMascota(nombreMascota,raza,sexo,detalles,usuario,idMascota) {


  let data = { "nombre" : nombreMascota,
               "raza" : raza,
               "sexo" : sexo,
               "detalles" : detalles,
               "usuario" : usuario,
               "idMascota" : idMascota
          };
  
    $.ajax({
          type:"POST",
          url: "ajax.php?modulo=Mascota&controlador=Mascota&funcion=postEditarMascota",
          data: data,
          success:function(result){

            console.log(result);

              alertProcess('Notificación',"Se edito correctamente",'success');
              
              url = 'index.php?modulo=Mascota&controlador=Mascota&funcion=listarMascotas';
              setTimeout("redireccionarPagina('"+url+"')", 1000);
              
              
                 
          }, error :function(result){
              alertProcess('Notificación',"Ocurrio un error al registrar",'error');
              setTimeout('document.location.reload()',2000);
          }
      });

}

function eliminarMascota(id){
    
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
              postEliminarMascota(id_dato);
            }
      })
  }


  function postEliminarMascota(id){

    
    $.ajax({
          type:"POST",
          url:"ajax.php?modulo=Mascota&controlador=Mascota&funcion=postEliminarMascota",
          data:"id="+id,
          success:function(respuesta){
          
            alertProcess('Notificación',"Se elimino el registro",'success');
            url = 'index.php?modulo=Mascota&controlador=Mascota&funcion=listarMascotas';
            setTimeout("redireccionarPagina('"+url+"')", 1000);
          

          },error:function(respuesta){
              alertProcess('Notificación',"No se pudo eliminar",'error');
          }
      });
  }

 

