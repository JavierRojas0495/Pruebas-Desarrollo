<br>
<div class="form-group">
    <a class='btn btn-success' href="<?php echo getUrl("HistoriaClinica", "HistoriaClinica", "registrarHistoriaClinica"); ?>" >Registrar Nueva Historia  </a></button>
</div>
    
    <div class="col-lg-12">
        <h1 class="page-header">Listar Historias Clinicas </h1>
    </div>
    
                        
    
        <div class="form-group">
            
            <table id="dataTableAsignatura" class="table table-bordered table-striped border-primary">
                <thead>
                    <tr>
                        <th><i class="fas fa-clipboard-list"></i> # </th>
                        <th><i class="fas fa-book"></i> Mascota </th>
                        <th><i class="fas fa-calendar-check"></i> Fecha Creacion </th>
                        <th><i class="far fa-calendar-check	"></i> Fecha Novedad </th>
                        <th><i class="fas fa-coins"></i> Detalle Historia Clinica </th>
                    </tr>
                </thead>
                <tbody>
                <?php
                    foreach ($historiasClinicas as $key => $value) {
                        echo "<tr>";
                        echo "<td>".$value['id_historia_clinica']."</td>";
                        echo "<td>".$value['mascota_nombre']."</td>";
                        echo "<td>".$value['fecha_creacion']."</td>";
                        echo "<td>".$value['fecha_actualizacion']."</td>";
                        echo "<td> <input type='button' class='btn btn-primary' value='Ver Detalles' onclick='verDetalles(".$value['id_mascota'].");'>";
                        echo "</td>";
                        echo "</tr>";
                    }
                    ?>
                </tbody>
            </table>
        </div>
                
    