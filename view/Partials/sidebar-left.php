<!-- Sidebar -->
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-cogs"></i>
        </div>
        <div class="sidebar-brand-text mx-3"> Pruebas De Desarrollo </div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
        <a class="nav-link" href="index.php">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>INICIO</span>
        </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">Modulos</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <?php
    $modules = [
        [
            'id' => 'Usuario',
            'icon' => 'fas fa-user',
            'title' => 'Usuarios',
            'items' => [
                ['url' => 'crearUsuario', 'title' => 'Registrar Usuarios'],
                ['url' => 'listarUsuario', 'title' => 'Lista De Usuarios']
            ]
        ],
        [
            'id' => 'Asignatura',
            'icon' => 'fas fa-book',
            'title' => 'Asignaturas',
            'items' => [
                ['url' => 'registrarAsignatura', 'title' => 'Registrar Asignaturas'],
                ['url' => 'listarAsignaturas', 'title' => 'Lista De Asignaturas']
            ]
        ],
        [
            'id' => 'Producto',
            'icon' => 'fas fa-hamburger',
            'title' => 'Productos',
            'items' => [
                ['url' => 'crearProducto', 'title' => 'Registrar Productos'],
                ['url' => 'listarProductos', 'title' => 'Lista De Productos']
            ]
        ],
        [
            'id' => 'Ventas',
            'icon' => 'fas fa-cash-register',
            'title' => 'Ventas Productos',
            'items' => [
                ['url' => 'tiendaVirtual', 'title' => 'Entrar A La Tienda'],
                ['url' => 'listarVentasProductos', 'title' => 'Lista De Ventas'],
                ['url' => 'registrarVentas', 'title' => 'Registrar Ventas'],
                ['url' => 'vistaCalcularComisiones', 'title' => 'Calcular Comisiones']
            ]
        ],
        
        [
            'id' => 'Archivos',
            'icon' => 'fas fa-address-card',
            'title' => 'Guardar Archivos PDF',
            'items' => [
                ['url' => 'subirNuevoArchivo', 'title' => 'Subir Nuevo PDF'],
                ['url' => 'listarArchivos', 'title' => 'Listar PDF\'s']
            ]
        ],
        
        [
            'id' => 'Evento',
            'icon' => 'fas fa-address-card',
            'title' => 'Procesos Eventos',
            'items' => [
                ['url' => 'crearEvento', 'title' => 'Crear'],
                ['url' => 'listarEvento', 'title' => 'Listar'],
                ['url' => 'listarEventosInforme', 'title' => 'Buscar']
            ]
        ],
        
        [
            'id' => 'Mascota',
            'icon' => 'fas fa-dog',
            'title' => 'Mascotas',
            'items' => [
                ['url' => 'registrarMascota', 'title' => 'Registrar Mascota'],
                ['url' => 'listarMascotas', 'title' => 'Listar']
            ]
        ],
        [
            'id' => 'HistoriaClinica',
            'icon' => 'fas fa-clinic-medical',
            'title' => 'Historias Clinicas',
            'items' => [
                ['url' => 'registrarHistoriaClinica', 'title' => 'Crear Historia Clinica'],
                ['url' => 'listarHistoriaClinica', 'title' => 'Listar']
            ]
        ],
        [
            'id' => 'Tareas',
            'icon' => 'fas fa-clipboard-list',
            'title' => 'Tareas',
            'items' => [
                ['url' => 'registrarTarea', 'title' => 'Registrar Nueva Tarea'],
                ['url' => 'listarTareas', 'title' => 'Listar Tareas']
            ]
        ]
    ];

    foreach ($modules as $module) {
        $moduleId = ucfirst($module['id']);
        echo '<li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse' . $module['id'] . '"
                aria-expanded="true" aria-controls="collapse' . $module['id'] . '">
                <i class="' . $module['icon'] . '"></i>
                <span>' . $module['title'] . '</span>
            </a>
            <div id="collapse' . $module['id'] . '" class="collapse" aria-labelledby="heading' . $module['id'] . '" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Modulo De ' . $module['title'] . ':</h6>';
        foreach ($module['items'] as $item) {
            echo '<a class="collapse-item" href="' . getUrl($moduleId, $moduleId, $item['url']) . '">' . $item['title'] . '</a>';
        }
        echo '</div>
            </div>
        </li>';
    }
    ?>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

</ul>
<!-- End of Sidebar -->
