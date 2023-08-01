<br>
<div class="form-group">
    <a class='btn btn-success' href="<?php echo getUrl("HistoriaClinica", "HistoriaClinica", "registrarHistoriaClinica"); ?>" >Registrar Nueva Historia  </a></button>
</div>
    
    <div class="col-lg-12">
        <h1 class="page-header"> Detalles Historial Clinico Mascota</h1>
    </div>
    
                        
    
        <div class="form-group">
            
            <table id="dataTableAsignatura" class="table table-bordered table-striped border-primary">
                <thead>
                    <tr>
                        <th><i class="fab fa-dropbox"></i> # </th>
                        <th><i class="fas fa-hands-helping"></i> Veterinario / Asistente </th>
                        <th><i class="fas fa-newspaper"></i> Fecha Novedad </th>
                        <th><i class="fas fa-hourglass-end"></i> Hora Novedad </th>
                        <th><i class="fas fa-database"></i> Ver Informe </th>
                    </tr>
                </thead>
                <tbody>
                <?php
                    foreach ($DetalleshistorialClinico as $key => $value) {
                        echo "<tr>";
                        echo "<td>".$value['id_detalle']."</td>";
                        echo "<td>".$value['nombre']."</td>";
                        echo "<td>".$value['fecha_historia_clinica']."</td>";
                        echo "<td>".$value['hora_historia_clinica']."</td>";
                        echo "<td> <input type='button' class='btn btn-primary' value='Informacion' onclick='verDetalleNovedadesHistoriaClinica(".$value['id_detalle'].");'>";
                        echo "</td>";
                        echo "</tr>";
                    }
                    ?>
                </tbody>
            </table>
        </div>
                
    