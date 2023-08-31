
<form rule="formEditarTarea" name="formEditarTarea" id="formEditarTarea" action="postEditarTarea" method="POST" enctype="multipart/form-data">
    
        <?php foreach ($tarea as $key => $value) { ?>

            <div class="form-group">
                
                <div class="form-group">
                    <h1 class="page-header"> Editar Tarea </h1>
                </div>
                
                <div class="form-group col-md-7 col-lg-8" style="background-color: #BFF3F7">
                    <h3> Los campos con asteriscos (*) son obligatorios</h3>
                </div>
                
                <input type="hidden" name="id" id="id" value="<?php echo $value['id']; ?>">

                <div class="input-group">   

                    <div class="form-group col-xl-5 col-md-5">
                        <label>Nombre *</label>
                        <input class="form-control" name="nombre" id="nombre" placeholder="Tarea" type="text" value="<?php echo $value['tarea']; ?>" required="required">
                        <p class="help-block">Nombre de la tarea.</p>
                    </div>

                    <div class="form-group col-xl-4 col-md-4">
                        <label>Tiempo Requerido *</label>
                        <input class="form-control" name="tiempo" id="tiempo" placeholder="Tiempo" type="number" value="<?php echo $value['tiempo']; ?>" required="required">
                        <p class="help-block">Tiempo de duracion de la tarea en horas.</p>
                    </div>
                
                </div>

                <div class="input-group">

                    <div class="form-group col-xl-5 col-md-5">
                        <label>Objetivos *</label>
                        <textArea class="form-control" name="objetivos" id="objetivos" placeholder="Objetivos" required="required"><?php echo $value['objetivos']; ?></textArea>
                        <p class="help-block">Objetivos de la tarea.</p>
                    </div>

                    <div class="form-group col-xl-5 col-md-5">
                        <label>Descripcion *</label>
                        <textArea class="form-control" name="descripcion" id="descripcion" placeholder="Descripcion" required="required"><?php echo $value['descripcion']; ?></textArea>
                        <p class="help-block">Descripcion de la tarea.</p>
                    </div>
                
                </div>

                <div class="input-group">

                <div class="form-group col-xl-4 col-md-4">
                    <label>Creador Tarea *</label>
                    <input class="form-control" name="nombre" id="nombre" placeholder="Tarea" type="text" required="required" value="<?php echo $value['usuario']; ?>" readonly ="true">
                    <p class="help-block">Usuario creador de la tarea.</p>
                </div>

                <div class="form-group col-xl-4 col-md-4">
                    <label>Estado Tarea *</label>
                    <input class="form-control" name="nombre" id="nombre" placeholder="Tarea" type="text" value="<?php echo $value['estado']; ?>" required="required" readonly ="true">
                    <p class="help-block">Estado de la tarea.</p>
                </div>

                <div class="form-group col-xl-4 col-md-4">
                    <label>Fecha *</label>
                    <input class="form-control" name="nombre" id="nombre" placeholder="Tarea" type="date" value="<?php echo $value['fechacreacion_tarea']; ?>" required="required" readonly ="true">
                    <p class="help-block">fecha de creacion de la tarea.</p>
                </div>
                    
                
                </div>

                    <div class="input-group">

                    <div class="form-group col-md-5">
                        <input type='button' class='btn btn-success' value='Editar Tarea' onclick="postProcess(2)">
                        <input type='button' class='btn btn-danger' value='Cancelar Estado' onclick="CancelarTarea(<?php echo $value['id']; ?>)">
                    </div>

                </div>

            </div>

            <?php } ?>
 </form>