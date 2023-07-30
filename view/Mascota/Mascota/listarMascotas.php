<br>
<div class="form-group">
    <a class='btn btn-success' href="<?php echo getUrl("Mascota", "Mascota", "registrarMascota"); ?>" >Registrar Mascota</a></button>
</div>
    
    <div class="col-lg-12">
        <h1 class="page-header">Listar Mascotas </h1>
    </div>
    
                        
    
        <div class="form-group">
            
            <table id="dataTableMascotas" class="table table-bordered table-striped border-primary">
                <thead>
                    <tr>
                        <th><i class="fas fa-dog"></i> Nombre </th>
                        <th><i class="fas fa-database"></i> Raza </th>
                        <th><i class="fas fa-user"></i> Dueño </th>
                        <th><i class="fas fa-cogs"></i> Opciones</th>
                    </tr>
                </thead>
                <tbody>
                <?php
                    foreach ($mascotas as $key => $value) {
                        echo "<tr>";
                        echo "<td>".$value['nombre']."</td>";
                        echo "<td>".$value['raza']."</td>";
                        echo "<td>".$value['dueño']."</td>";
                        echo "<td> <input type='button' class='btn btn-primary' value='Editar' onclick='editarMascota(".$value['id'].");'>";
                        echo " <input type='button' class='btn btn-danger' value='Eliminar' onclick='eliminarMascota(".$value['id'].");'></td>";
                        echo "</td>";
                        echo "</tr>";
                    }
                    ?>
                </tbody>
            </table>
        </div>
                
    