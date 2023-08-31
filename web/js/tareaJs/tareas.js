$(document).ready(function () {
    $('#dataTableTareas').DataTable({
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


  function postProcess($ejecutar) {

    let nom_tarea = document.getElementById('nombre').value;
    let time_tarea = document.getElementById('tiempo').value;
    let objetivos = document.getElementById('objetivos').value;
    let descripcion = document.getElementById('descripcion').value;
    
    if (validaCampoVacio(nom_tarea)) {
      
      document.getElementById('nombre').focus();
      alertProcess('Notificación', "El campo nombre no puede estar vacio", 'error');
      return false;
  
    }
    if ( time_tarea <= 0 ||validaCampoVacio(time_tarea) || isNumeric(time_tarea)) {
        
        document.getElementById('tiempo').focus();
        alertProcess('Notificación', "El tiempo no puede estar vacio y ser un numero", 'error');
        return false;
    
    }

    if (validaCampoVacio(objetivos)) {
  
        alertProcess('Notificación', "El campo objetivos no puede estar vacio", 'error');
        document.getElementById('objetivos').focus();
        return false;
    
    }

    if (validaCampoVacio(descripcion)) {
  
      alertProcess('Notificación', "El campo descripcion no puede estar vacio", 'error');
      document.getElementById('descripcion').focus();
      return false;
    }
    
    switch($ejecutar){

        case 1: postRegistrarTarea(nom_tarea,time_tarea,objetivos,descripcion);
        break;
        case 2: postEditarTarea(nom_tarea,time_tarea,objetivos,descripcion);
        break;

        default:
        alertProcess('Notificación', "No se debe eliminar el campo del producto", 'error');
        setTimeout('document.location.reload()',2000);
        return false;
    }
    
}

function postRegistrarTarea(nom_tarea,time_tarea,objetivos,descripcion){


    let data = { "nombre" : nom_tarea,
                 "tiempo" : time_tarea,
                 "objetivos" : objetivos,
                 "descripcion" : descripcion
            };
    
      $.ajax({
            type:"POST",
            url: "ajax.php?modulo=Tareas&controlador=Tareas&funcion=postRegistrarTarea",
            data: data,
            success:function(result){
                alertProcess('Notificación',"Se registro correctamente",'success');
                url = 'index.php?modulo=Tareas&controlador=Tareas&funcion=listarTareas';
                setTimeout("redireccionarPagina('"+url+"')", 1000);
                
                   
            }, error :function(result){
                alertProcess('Notificación',"Ocurrio un error al registrar",'error');
                setTimeout('document.location.reload()',2000);
            }
        });

}


function eliminarTarea(id){
    
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
              posteliminarTarea(id_dato);
            }
      })
  }


  function posteliminarTarea(id){

    
    $.ajax({
          type:"POST",
          url:"ajax.php?modulo=Tareas&controlador=Tareas&funcion=postEliminarTarea",
          data:"id="+id,
          success:function(respuesta){
            
            if(respuesta == "true"){
              alertProcess('Notificación',"Se elimino el registro",'success');
              url = 'index.php?modulo=Tareas&controlador=Tareas&funcion=listarTareas';
              setTimeout("redireccionarPagina('"+url+"')", 1000);
            }else{
              alertProcess('Notificación',"La tarea ya se encuentra Realizada",'error');
              setTimeout('document.location.reload()',2000);
            }
            
          },error:function(respuesta){
              alertProcess('Notificación',"No se pudo eliminar",'error');
          }
      });
  }

  function cambiarEstadoTarea(id){
    
    var id_dato = id;
      Swal.fire({
        title: 'seguro quieres cambiar el estado?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, cambiar estado!'
          }).then((result) => {
            if (result.isConfirmed) {
              postCambiarEstado(id_dato);
            }
      })
  }


  function postCambiarEstado(id){

    
    $.ajax({
          type:"POST",
          url:"ajax.php?modulo=Tareas&controlador=Tareas&funcion=postCambiarEstadoTarea",
          data:"id="+id,
          success:function(respuesta){
            
            if(respuesta == "true"){
              alertProcess('Notificación',"Se cambio el estado",'success');
              url = 'index.php?modulo=Tareas&controlador=Tareas&funcion=listarTareas';
              setTimeout("redireccionarPagina('"+url+"')", 1000);
            }else{
              alertProcess('Notificación',"La tarea ya se encuentra Realizada",'error');
              setTimeout('document.location.reload()',2000);
            }
            
          },error:function(respuesta){
              alertProcess('Notificación',"Ocurrio un error",'error');
          }
      });
  }

  
  function editarTarea(id){
    
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
            vistaEditarTarea(id);
            return false;
          }
    })
  }

  function vistaEditarTarea(id){  

    var url = "index.php?modulo=Tareas&controlador=Tareas&funcion=editarTarea&id="+id;
    setTimeout("redireccionarPagina('"+url+"')", 500);
  }

  function postEditarTarea(nom_tarea,time_tarea,objetivos,descripcion){
    
    let id = document.getElementById('id').value;
    
    if (id <= 0 ||validaCampoVacio(id) || isNumeric(id)) {
        alertProcess('Notificación', "El identificador no puede estar vacio", 'error');
        setTimeout('document.location.reload()',2000);
    }

    let data = { "id" : id, 
                 "nombre" : nom_tarea,
                 "tiempo" : time_tarea,
                 "objetivos" : objetivos,
                 "descripcion" : descripcion
                };
      
      $.ajax({
            type:"POST",
            url: "ajax.php?modulo=Tareas&controlador=Tareas&funcion=postEditarTarea",
            data: data,
            success:function(result){
                alertProcess('Notificación',"Se edito correctamente",'success');
                url = 'index.php?modulo=Tareas&controlador=Tareas&funcion=listarTareas';
                setTimeout("redireccionarPagina('"+url+"')", 1000);
                
                   
            }, error :function(result){
                alertProcess('Notificación',"Ocurrio un error al registrar",'error');
                setTimeout('document.location.reload()',2000);
            }
        });
  }

  function CancelarTarea(id){
    
    var id_dato = id;
      Swal.fire({
        title: 'seguro quieres cancelar el estado?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, cancelar estado!'
          }).then((result) => {
            if (result.isConfirmed) {
              postCancelarEstado(id_dato);
            }
      })
  }


  function postCancelarEstado(id){

    
    $.ajax({
          type:"POST",
          url:"ajax.php?modulo=Tareas&controlador=Tareas&funcion=postCancelarTarea",
          data:"id="+id,
          success:function(respuesta){
            
            if(respuesta == "true"){
              alertProcess('Notificación',"Se Cancelo la tarea",'success');
              url = 'index.php?modulo=Tareas&controlador=Tareas&funcion=listarTareas';
              setTimeout("redireccionarPagina('"+url+"')", 1000);
            }else{
              alertProcess('Notificación',"La tarea ya se encuentra Realizada o Cancelada",'error');
              setTimeout('document.location.reload()',2000);
            }
            
          },error:function(respuesta){
              alertProcess('Notificación',"Ocurrio un error",'error');
          }
      });
  }
  