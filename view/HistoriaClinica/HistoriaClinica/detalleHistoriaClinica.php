<div class="form-group">
        <?php foreach ($detallehistoriaclinica as $key => $value) { ?>

            <div class="form-group">
                    <h1 class="page-header"> Historia Clinica # <?php echo $value['id_detalle'] ?> </h1>
                    <h4 class="page-header"> Fecha: <?php echo $value['fecha_historia_clinica'] ?></h4>
                    <h4 class="page-header"> Hora: <?php echo $value['hora_historia_clinica'] ?> </h4>
            </div>
            
            

            <div class="input-group">   

                <div class="form-group col-xl-5 col-md-5">
                    <label>Nombre Mascota</label><br>
                    <input class="form-control" name="" id="" placeholder="Mascota"  type="Text" value="<?php echo $value['mascota'] ?>" readonly='true'>
                    <p class="help-block">Nombre de la mascota.</p>
                </div>

                <div class="form-group col-xl-5 col-md-5">
                    <label> Veterinario o Asistente </label><br>
                    <input class="form-control" name="" id="" placeholder="Veterinario"  type="Text" value="<?php echo $value['veterinario'] ?>" readonly='true'>
                    <p class="help-block">Nombre del veterinario.</p>
                </div>
            </div>

            
            <div class="input-group">

                <div class="form-group col-xl-5 col-md-5">
                    <label>Peso</label>
                    <input class="form-control" name="peso" id="peso" placeholder="Peso" type="number" value="<?php echo $value['peso'] ?>" readonly='true'>
                    <p class="help-block">peso de la mascota.</p>
                </div>
                
                <div class="form-group col-xl-5 col-md-5">
                    <label>Temperatura</label>
                    <input class="form-control" name="temperatura" id="temperatura" placeholder="Temperatura" type="number" value="<?php echo $value['temperatura'] ?>" readonly='true'>
                    <p class="help-block">Temperatura de la mascota.</p>
                </div>
            </div>
            
            <div class="input-group">

                <div class="form-group col-xl-5 col-md-5">
                    <label>Frecuencia Cardiaca *</label>
                    <input class="form-control" name="frecuencia" id="frecuencia" placeholder="Frecuencia Cardiaca" type="number" value="<?php echo $value['frecuencia'] ?>" readonly='true'>
                    <p class="help-block">frecuencia cardiaca de la mascota.</p>
                </div>
            </div>

            <div class="input-group">   
                
            <div class="form-group col-xl-8 col-md-8">
                    <label>Observaciones cliente *</label>
                    <textArea class="form-control" name="observaciones_cliente" id="observaciones_cliente" placeholder="Observaciones" readonly='true' > <?php echo $value['observaciones_cliente'] ?> </textArea>
                    <p class="help-block">Observaciones cliente de la mascota.</p>
                </div>
                
                <div class="form-group col-xl-8 col-md-8">
                    <label>Observaciones *</label>
                    <textArea class="form-control" name="observaciones" id="observaciones" placeholder="Observaciones" readonly='true' > <?php echo $value['observaciones'] ?> </textArea>
                    <p class="help-block">Observaciones veterinario.</p>
                </div>
             
            </div>
        
            <div class="input-group">  
                <div class="form-group col-md-5">
                    <input type='button' class='btn btn-success btnCrearUsuario' value='Regresar' onclick="verDetalles('<?php echo $value['idMascota'] ?>')">
                </div>
            </div>
            <?php  } ?>
        </div>
 