
<form rule="formRegistroHistoriaClinica" name="formRegistroHistoriaClinica" id="formRegistroHistoriaClinica" action="postRegistroHistoriaClinica" method="post" enctype="multipart/form-data">
    
    
        <div class="form-group">

            <div class="form-group">
                    <h1 class="page-header"> Registrar Historia Clinica </h1>
            </div>
            
            <div class="form-group col-md-7 col-lg-8" style="background-color: #BFF3F7">
                <h3> Los campos con asteriscos (*) son obligatorios</h3>
            </div>
             
            <div class="input-group">   

                <div class="form-group col-xl-5 col-md-5">
                    <label>Nombre Mascota *</label><br>
                    <select class="form-control form-select" aria-label="Default select example" id="mascota" name="mascota" placeholder="Mascota" required="required">
                        <?php foreach ($mascotas as $key => $val) { ?>
                            <option value="<?php echo $val['id_mascota']; ?>"><?php echo $val['mascota_nombre']; ?></option>
                        <?php } ?>
                    </select>
                    <p class="help-block">Nombre de la mascota.</p>
                </div>

                <div class="form-group col-xl-5 col-md-5">
                    <label> Veterinario o Asistente *</label><br>
                    <select class="form-control form-select" aria-label="Default select example" id="veterinario" name="veterinario" placeholder="Veterinario" required="required">
                        <?php foreach ($veterinarios as $key => $val) { ?>
                            <option value="<?php echo $val['id']; ?>"><?php echo $val['nombre']; ?></option>
                        <?php } ?>
                    </select>
                    <p class="help-block">Nombre del veterinario.</p>
                </div>
            </div>

            
            <div class="input-group">

                <div class="form-group col-xl-5 col-md-5">
                    <label>Peso *</label>
                    <input class="form-control" name="peso" id="peso" placeholder="Peso" type="number" required="required">
                    <p class="help-block">peso de la mascota.</p>
                </div>
                
                <div class="form-group col-xl-5 col-md-5">
                    <label>Temperatura *</label>
                    <input class="form-control" name="temperatura" id="temperatura" placeholder="Temperatura" type="number" required="required">
                    <p class="help-block">Temperatura de la mascota.</p>
                </div>
            </div>
            
            <div class="input-group">

                <div class="form-group col-xl-5 col-md-5">
                    <label>Frecuencia Cardiaca *</label>
                    <input class="form-control" name="frecuencia" id="frecuencia" placeholder="Frecuencia Cardiaca" type="number" required="required">
                    <p class="help-block">frecuencia cardiaca de la mascota.</p>
                </div>

                <div class="form-group col-xl-5 col-md-5">
                    <label>Observaciones cliente *</label>
                    <textArea class="form-control" name="observaciones_cliente" id="observaciones_cliente" placeholder="Observaciones" required="required"></textArea>
                    <p class="help-block">Observaciones cliente de la mascota.</p>
                </div>
                
            </div>

            <div class="input-group">   
                
                
                <div class="form-group col-xl-8 col-md-8">
                    <label>Observaciones *</label>
                    <textArea class="form-control" name="observaciones" id="observaciones" placeholder="Observaciones" required="required"></textArea>
                    <p class="help-block">Observaciones veterinario.</p>
                </div>
             
            </div>
            
            <div class="input-group">  
                <div class="form-group col-md-5">
                    <input type='button' class='btn btn-success btnCrearUsuario' value='Guardar' onclick="postRegistroHistoriaClinica()">
                </div>
            </div>

        </div>
 </form>