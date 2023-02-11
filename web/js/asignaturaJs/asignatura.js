$(document).ready(function () {
    $('#dataTableAsignatura').DataTable({
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


  function postAsignatura($ejecutar) {

    let nom_asig = document.getElementById('nombre').value;
    let area = document.getElementById('area').value;
    let descripcion = document.getElementById('descripcion').value;
    let creditos = document.getElementById('num_creditos').value;
    let nivel = document.getElementById('nivel').value;
    
  
    if (validaCampoVacio(nom_asig)) {
      
      document.getElementById('nombre').focus();
      alertProcess('Notificación', "El campo nombre no puede estar vacio", 'error');
      return false;
  
    }
    if (validaCampoVacio(area)) {
        
        document.getElementById('area').focus();
        alertProcess('Notificación', "El campo area no puede estar vacio", 'error');
        return false;
    
    }

    if (validaCampoVacio(descripcion)) {
  
        alertProcess('Notificación', "El campo descripcion no puede estar vacio", 'error');
        document.getElementById('descripcion').focus();
        return false;
    
    }
  
    if (creditos <= 0 || isNumeric(creditos) || validaCampoVacio(creditos)) {
      
      document.getElementById('num_creditos').focus();
      alertProcess('Notificación', "El campo creditos no puede estar vacio y debe ser un numero mayor a 0", 'error');
      return false;
    }

    if (validaCampoVacio(nivel)) {

        document.getElementById('nivel').focus();
        alertProcess('Notificación', "El campo descripcion no puede estar vacio", 'error');
        return false;
    
    }
  
  
    if ($ejecutar == '1') {
        
        postRegistrarAsignatura(nom_asig,area,descripcion,creditos,nivel);

    } else {

      id_asig = document.getElementById('id').value;
      estado = document.getElementById('estado').value;

      if (id_asig == "" || id_asig == null || id_asig == undefined || Number.isInteger(id_asig) || isNumeric(id_asig)) {
        alertProcess('Notificación', "No se debe eliminar el campo del producto", 'error');
        setTimeout('document.location.reload()',2000);
        return false;
      }
      
      if (validaCampoVacio(estado) ) {
  
        alertProcess('Notificación', "El campo estado no puede estar vacio", 'error');
        document.getElementById('estado').focus();
        return false;
    
    }

      postEditarAsignatura(id_asig,nom_asig,area,descripcion,creditos,nivel,estado);
      
    }

}

function postRegistrarAsignatura(nom_asig,area,descripcion,creditos,nivel){


    let data = { "nombre" : nom_asig,
                 "area" : area,
                 "descripcion" : descripcion,
                 "creditos" : creditos,
                 "nivel" : nivel
            };
    
      $.ajax({
            type:"POST",
            url: "index.php?modulo=Asignatura&controlador=Asignatura&funcion=postRegistrarAsignatura",
            data: data,
            success:function(result){
                alertProcess('Notificación',"Se registro correctamente",'success');
                
                url = 'index.php?modulo=Asignatura&controlador=Asignatura&funcion=listarAsignaturas';
                setTimeout("redireccionarPagina('"+url+"')", 1000);
                
                   
            }, error :function(result){
                alertProcess('Notificación',"Ocurrio un error al registrar",'error');
                setTimeout('document.location.reload()',2000);
            }
        });

}

function eliminarAsignatura(id){
    
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
              postEliminarAsignatura(id_dato);
            }
      })
  }


  function postEliminarAsignatura(id){

    
    $.ajax({
          type:"POST",
          url:"index.php?modulo=Asignatura&controlador=Asignatura&funcion=postEliminarAsignatura",
          data:"id="+id,
          success:function(respuesta){
            alertProcess('Notificación',"Se elimino el registro",'success');
            url = 'index.php?modulo=Asignatura&controlador=Asignatura&funcion=listarAsignaturas';
            setTimeout("redireccionarPagina('"+url+"')", 1000);

          },error:function(respuesta){
              alertProcess('Notificación',"No se pudo eliminar",'error');
          }
      });
  }

  function editarAsignatura(id){
    
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
            editarAsignaturaid(id);
            return false;
          }
    })
  }

  function editarAsignaturaid(id){  

    var url = "index.php?modulo=Asignatura&controlador=Asignatura&funcion=editarAsignatura&id="+id;
    setTimeout("redireccionarPagina('"+url+"')", 500);
  }

  function postEditarAsignatura(id_asig,nom_asig,area,descripcion,creditos,nivel,estado){
    
      let data = {"id": id_asig,
                  "nombre" : nom_asig,
                  "area" : area,
                  "descripcion" : descripcion,
                  "creditos" : creditos,
                  "nivel" : nivel,
                  "estado" : estado
            };
      console.log(data);
      $.ajax({
            type:"GET",
            url: "index.php?modulo=Asignatura&controlador=Asignatura&funcion=postEditarAsignatura",
            data: data,
            success:function(result){
                alertProcess('Notificación',"Se edito correctamente",'success');
                
                url = 'index.php?modulo=Asignatura&controlador=Asignatura&funcion=listarAsignaturas';
                setTimeout("redireccionarPagina('"+url+"')", 1000);
                
                   
            }, error :function(result){
                alertProcess('Notificación',"Ocurrio un error al registrar",'error');
                setTimeout('document.location.reload()',2000);
            }
        });
  }