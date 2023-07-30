
<form rule="formEditarMascota" name="formEditarMascota" id="formEditarMascota" action="postEditarMascota" method="post" enctype="multipart/form-data">
    
    
        <div class="form-group">

            <div class="form-group">
                    <h1 class="page-header"> Editar Mascota </h1>
            </div>
            
            <?php foreach($datos as $key => $values) { ?>

            <div class="form-group col-md-8 col-lg-10" style="background-color: #BFF3F7">
                <h3> Los campos con asteriscos (*) son obligatorios</h3>
            </div>
            
            <input type="hidden" name="id" id="id" value="<?php echo $values['id']; ?>">
            <div class="input-group">   
                
            <div class="form-group col-xl-5 col-md-5">
                <label>Imagen De la Mascota </label>
                <div>
                    <img id="imagenPrevisualizacion" style=" width: 150px; height: auto "></img>
                </div>
                <input type="file" name="image" id="image" class="form-control-file" accept="image/png,image/jpeg">
                <p class="help-block">Cambiar imagen de la mascota.</p>
            </div>

            </div>

            <div class="input-group">

                <div class="form-group col-xl-5 col-md-5">
                    <label>Nombre *</label>
                    <input class="form-control" name="nombre" id="nombre" placeholder="Mascota" type="text" value="<?php echo $values['nombre'] ?>" required="required">
                    <p class="help-block">Nombre de la mascota.</p>
                </div>

                <div class="form-group col-xl-5 col-md-5 mx-2">
                    <label> Raza *</label><br>
                    <select class="form-control" aria-label="Default select example" id="raza" name="raza" placeholder="Raza" required="required">
                        <?php foreach ($razas as $key => $val) { ?>
                            <option value="<?php echo $val['id_raza']; ?>" <?php if($values['raza'] == $val['id_raza']){ echo 'selected="selected"'; } ?> > <?php echo $val['raza_nombre']; ?></option>
                        <?php } ?>
                    </select>
                    <p class="help-block">Raza mascota.</p>
                </div>

                
            </div>

            
            <div class="form-group col-xl-12 col-md-12 row">

                <div class="form-group col-xl-6 col-md-6">
            
                        <label>Sexo *</label>
                        
                            <div class="radio">
                                <label>
                                    <input type="radio" name="sexo" id="sexo" <?php if( $values['sexo'] === "H")  { echo 'checked="checked"'; } ?> value="H" > Hembra
                                </label>
                            </div>
                        
                            <div class="radio">
                                <label>
                                <input type="radio" name="sexo" id="sexo" <?php if( $values['sexo'] === "M")  { echo 'checked="checked"'; } ?> value="M" > Macho
                                </label>
                            </div>
                        <p class="help-block">Sexo de la mascota.</p>
                </div>

            </div>

           
            <div class="input-group">   

               <div class="form-group col-xl-5 col-md-5 ">
                    <label> Detalles *</label>
                    <textArea class="form-control" name="detalles" id="detalles" placeholder="Detalles mascota" required="required"><?php echo $values['detalles'] ?></textArea>
                    <p class="help-block"> Detalles de la mascota.</p>
                </div>

                <div class="form-group col-xl-5 col-md-5">
                    <label> Dueño  *</label><br>
                    <select class="form-control form-select" aria-label="Default select example" id="usuario" name="usuario" placeholder="Usuario" required="required">
                        <?php foreach ($clientes as $key => $val) { ?>
                            <option value="<?php echo $val['id']; ?>"  <?php if($values['usuario'] == $val['id']){ echo 'selected="selected"'; } ?> ><?php echo $val['nombre']; ?></option>
                        <?php } ?>
                    </select>
                    <p class="help-block">Dueño de la mascota.</p>
                </div>

             </div>
            

             <?php } ?>
            <div class="input-group">  
                <div class="form-group col-md-5">
                    <input type='button' class='btn btn-success btnEditarMascota' value='Guardar' onclick="postMascota(2)">
                </div>
            </div>

        </div>
 </form>