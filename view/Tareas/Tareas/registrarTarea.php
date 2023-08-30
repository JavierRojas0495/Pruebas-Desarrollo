
<form rule="formRegistrarTarea" name="formRegistrarTarea" id="formRegistrarTarea" action="postRegistrarTarea" method="POST" enctype="multipart/form-data">
    
    
        <div class="form-group">
            
            <div class="form-group">
                <h1 class="page-header"> Registrar Tarea </h1>
            </div>
            
            <div class="form-group col-md-7 col-lg-8" style="background-color: #BFF3F7">
                <h3> Los campos con asteriscos (*) son obligatorios</h3>
            </div>
            
            <div class="input-group">   

                <div class="form-group col-xl-5 col-md-5">
                    <label>Nombre *</label>
                    <input class="form-control" name="nombre" id="nombre" placeholder="Tarea" type="text" required="required">
                    <p class="help-block">Nombre de la tarea.</p>
                </div>

                <div class="form-group col-xl-5 col-md-5">
                    <label>Tiempo Requerido *</label>
                    <input class="form-control" name="tiempo" id="tiempo" placeholder="Tiempo" type="number" required="required">
                    <p class="help-block">Tiempo de duracion de la tarea en horas.</p>
                </div>
            
            </div>

            <div class="input-group">

                <div class="form-group col-xl-5 col-md-5">
                    <label>Objetivos *</label>
                    <textArea class="form-control" name="objetivos" id="objetivos" placeholder="Objetivos" required="required"></textArea>
                    <p class="help-block">Objetivos de la tarea.</p>
                </div>

                <div class="form-group col-xl-5 col-md-5">
                    <label>Descripcion *</label>
                    <textArea class="form-control" name="descripcion" id="descripcion" placeholder="Descripcion" required="required"></textArea>
                    <p class="help-block">Descripcion de la tarea.</p>
                </div>
            
            </div>

             <div class="input-group">

                <div class="form-group col-md-5">
                    <input type='button' class='btn btn-success btnCrearArchivo' value='Registrar Tarea' onclick="postProcess(1)">
                </div>

            </div>

        </div>
 </form>