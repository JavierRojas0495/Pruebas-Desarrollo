<br>
<div class="form-group">
    <a class='btn btn-success' href="<?php echo getUrl("Tareas", "Tareas", "registrarTarea"); ?>" >Registrar Nueva Tarea </a></button>
</div>
    
    <div class="col-lg-12">
        <h1 class="page-header">Listado De Tareas </h1>
    </div>
    
                        
    
        <div class="form-group">
            
            <table id="dataTableTareas" class="table table-bordered table-striped border-primary">
                <thead>
                    <tr>
                        <th><i class="fas fa-clipboard-list"></i> # </th>
                        <th><i class="fas fa-book"></i> Nombre </th>
                        <th><i class="fas fa-calendar-check"></i> Fecha Creacion </th>
                        <th><i class="far fa-calendar-check	"></i> Fecha Modificación </th>
                        <th><i class="fas fa-coins"></i> Estado Actual </th>
                        <th><i class="fas fa-coins"></i> Opciones </th>
                    </tr>
                </thead>
                <tbody>
                <?php
                    foreach ($tareas as $key => $value) {
                        echo "<tr>";
                        echo "<td>".$value['id']."</td>";
                        echo "<td>".$value['nombre']."</td>";
                        echo "<td>".$value['creacion']."</td>";
                        echo "<td>".$value['modificacion']."</td>";
                        echo "<td>".$value['estado']."</td>";
                        echo "<td> <input type='button' class='btn btn-success' value='Editar' onclick='editarTarea(".$value['id'].");'>";
                        echo " <input type='button' class='btn btn-danger' value='Eliminar' onclick='eliminarTarea(".$value['id'].");'>";
                        echo " <input type='button' class='btn btn-primary' value='Cambiar Estado' onclick='cambiarEstadoTarea(".$value['id'].");'>";
                        echo "</td>";
                        echo "</tr>";
                    }
                    ?>
                </tbody>
            </table>
        </div>
                
    