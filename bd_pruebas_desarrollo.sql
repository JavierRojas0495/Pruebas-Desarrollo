-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-08-2023 a las 04:01:01
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_tecnica_dev`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos`
--

CREATE TABLE `archivos` (
  `id` int(11) NOT NULL,
  `nombre` text COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `ruta_archivo` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `archivos`
--

INSERT INTO `archivos` (`id`, `nombre`, `descripcion`, `ruta_archivo`) VALUES
(6, 'Cv Javier Rojas', 'Hoja de vida LinkedIn ', 'pdf/pdf_21101259.pdf');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas`
--

CREATE TABLE `areas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `areas`
--

INSERT INTO `areas` (`id`, `nombre`) VALUES
(1, 'Administrativa y Financiera'),
(2, 'Ingeniería'),
(5, 'Desarrollo de Negocio'),
(6, 'Proyectos'),
(7, 'Servicios'),
(8, 'Calidad'),
(9, 'Consumidor'),
(10, 'Ventas'),
(13, 'Veterinaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignaturas`
--

CREATE TABLE `asignaturas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `area_id` int(100) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `creditos` int(100) NOT NULL,
  `nivel` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `estado` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `asignaturas`
--

INSERT INTO `asignaturas` (`id`, `nombre`, `area_id`, `descripcion`, `creditos`, `nivel`, `estado`) VALUES
(1, 'Matematicas', 2, 'Matematicas', 40, 'Obligatoria', 'A'),
(6, 'Castellano', 8, 'Castellano', 15, 'Obligatoria', 'A'),
(7, 'Ingles', 8, 'Ingles', 10, 'Obligatoria', 'A'),
(8, 'Prueba', 1, 'a', 1, 'Lectiva', 'I'),
(9, 'asdasd', 2, '1', 1, 'Lectiva', 'I'),
(10, 'Administracion de empresas', 8, 'Pruebas', 6, 'Lectiva', 'A'),
(11, 'Administracion de empresas', 8, 'a', 6, 'Lectiva', 'I'),
(12, 'Proyectos', 6, 'Proyectos', 5, 'Lectiva', 'I');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Bebidas'),
(2, 'Frituras'),
(3, 'Gaseosas'),
(4, 'Carnes'),
(5, 'Granos'),
(6, 'Embutidos'),
(7, 'Lacteos'),
(8, 'Aseo'),
(9, 'Electrodomesticos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`id`, `nombre`) VALUES
(1, 'Cali'),
(2, 'Medellin'),
(3, 'Bogota'),
(4, 'Pasto'),
(5, 'Popayan'),
(6, 'Palmira');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallehistoriaclinicaveterinaria`
--

CREATE TABLE `detallehistoriaclinicaveterinaria` (
  `id_detalle` int(11) NOT NULL,
  `id_historia_clinica` int(11) NOT NULL,
  `id_veterinario` int(11) NOT NULL,
  `peso_mascota` text NOT NULL,
  `temperatura_mascota` text NOT NULL,
  `frecuencia_cardiaca` text NOT NULL,
  `observaciones_cliente` text NOT NULL,
  `observaciones` text NOT NULL,
  `fecha_historia_clinica` date NOT NULL,
  `hora_historia_clinica` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detallehistoriaclinicaveterinaria`
--

INSERT INTO `detallehistoriaclinicaveterinaria` (`id_detalle`, `id_historia_clinica`, `id_veterinario`, `peso_mascota`, `temperatura_mascota`, `frecuencia_cardiaca`, `observaciones_cliente`, `observaciones`, `fecha_historia_clinica`, `hora_historia_clinica`) VALUES
(13, 40, 24, '65', '36', '120', 'No se mueve mucho', 'Se requiere realizar seguimiento a la frecuencia cardiaca', '2023-08-01', '21:44:12'),
(14, 41, 21, '42', '38', '80', 'ninguna', 'Temperatura para tener en cuenta', '2023-08-01', '21:45:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_tarea`
--

CREATE TABLE `estados_tarea` (
  `id_estado` int(11) NOT NULL,
  `nombre_estado` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion_estado` text COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `estados_tarea`
--

INSERT INTO `estados_tarea` (`id_estado`, `nombre_estado`, `descripcion_estado`) VALUES
(1, 'Pendiente', 'Inicio del estado de la tarea'),
(2, 'Realizada', 'Se concluye una tarea'),
(3, 'Cancelada', 'Se da fin a una tarea por algun motivo en especifico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historiaclinicaveterinaria`
--

CREATE TABLE `historiaclinicaveterinaria` (
  `id_historia_clinica` int(11) NOT NULL,
  `id_mascota` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `fecha_actualizacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `historiaclinicaveterinaria`
--

INSERT INTO `historiaclinicaveterinaria` (`id_historia_clinica`, `id_mascota`, `fecha_creacion`, `fecha_actualizacion`) VALUES
(40, 14, '2023-08-01', '2023-08-01'),
(41, 13, '2023-08-01', '2023-08-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascota`
--

CREATE TABLE `mascota` (
  `id_mascota` int(11) NOT NULL,
  `mascota_nombre` varchar(255) NOT NULL,
  `mascota_sexo` varchar(10) NOT NULL,
  `raza_id` int(11) NOT NULL,
  `mascota_detalles` text NOT NULL,
  `mascota_estado` varchar(10) NOT NULL,
  `usuario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mascota`
--

INSERT INTO `mascota` (`id_mascota`, `mascota_nombre`, `mascota_sexo`, `raza_id`, `mascota_detalles`, `mascota_estado`, `usuario_id`) VALUES
(13, 'Peluza', 'M', 51, 'Ninguna Novedad', 'A', 22),
(14, 'Yogui', 'H', 48, 'Ninguna novedad', 'A', 23);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_prod` int(11) NOT NULL,
  `prod_nombre` varchar(200) NOT NULL,
  `prod_referencia` varchar(100) NOT NULL,
  `prod_precio` int(100) NOT NULL,
  `prod_peso` varchar(100) NOT NULL,
  `prod_categoria` int(100) NOT NULL,
  `prod_stock` int(100) NOT NULL,
  `ruta_img` text NOT NULL,
  `estado_producto` varchar(10) NOT NULL,
  `prod_fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_prod`, `prod_nombre`, `prod_referencia`, `prod_precio`, `prod_peso`, `prod_categoria`, `prod_stock`, `ruta_img`, `estado_producto`, `prod_fecha_creacion`) VALUES
(78, 'Gaseosa Cocacola', '56234112', 5000, '3', 1, 8, 'img/imgCargarProductos/img_18181833.jpg', 'A', '2023-02-18 23:18:33'),
(79, 'Suavizante Suavitel', '451125ADDA', 25000, '5', 8, 10, 'img/imgCargarProductos/img_18215929.png', 'A', '2023-02-19 02:59:29'),
(77, 'Papas Margarita Pollo', '45128445', 2000, '250', 2, 20, 'img/imgCargarProductos/img_18170009.jpg', 'A', '2023-02-18 22:00:09'),
(81, 'Detergente Fab Liquido', '4551123546', 15000, '1.9', 8, 10, 'img/imgCargarProductos/img_22193654.png', 'A', '2023-02-23 00:36:54'),
(82, 'Jabon Liquido Protex', '6554112554', 12000, '22', 8, 13, 'img/imgCargarProductos/img_22194008.png', 'A', '2023-02-23 00:40:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_carrito_tienda`
--

CREATE TABLE `productos_carrito_tienda` (
  `id` int(11) NOT NULL,
  `id_prod` int(11) NOT NULL,
  `prod_cantidad` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productos_carrito_tienda`
--

INSERT INTO `productos_carrito_tienda` (`id`, `id_prod`, `prod_cantidad`, `id_usuario`) VALUES
(1, 82, 6, 15),
(2, 77, 1, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `razamascotas`
--

CREATE TABLE `razamascotas` (
  `id_raza` int(11) NOT NULL,
  `raza_nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `razamascotas`
--

INSERT INTO `razamascotas` (`id_raza`, `raza_nombre`) VALUES
(1, 'Sabueso de transilvania'),
(2, 'Morkie'),
(3, 'Sabueso de Baviera'),
(4, 'Lurcher'),
(5, 'Perro esquimal canadiense o Canadian Eskimo Dog'),
(6, 'Jack russell terrier'),
(7, 'Bulldog frances'),
(8, 'Bulldog continental'),
(9, 'Affenpinscher'),
(10, 'Afgano'),
(11, 'Akita japonés'),
(12, 'Basenji'),
(13, 'Basset Azul de Gascuña'),
(14, 'Basset Grifón vandeano (grande)'),
(15, 'Basset Grifón vandeano (pequeño)'),
(16, 'Basset Hound'),
(17, 'Basset leonado de Bretaña'),
(18, 'Beagle'),
(19, 'Beauceron'),
(20, 'Bedlington Terrier'),
(21, 'Bergamasco'),
(22, 'Yorkshire Terrier'),
(23, 'Shih Tzu'),
(24, 'Chihuahua'),
(25, 'Beagle'),
(26, 'Border Collie'),
(27, 'Boston Terrier'),
(28, 'Labrador Retriever'),
(29, 'Pastor Alemán'),
(30, 'Cocker Spaniel'),
(31, 'Husky siberiano'),
(32, 'Basenji'),
(33, 'Basset Azul de Gascuña'),
(34, 'Basset Grifón vandeano (grande)'),
(35, 'Basset Grifón vandeano (pequeño)'),
(36, 'Basset Hound'),
(37, 'Basset leonado de Bretaña'),
(38, 'Beagle'),
(39, 'Beauceron'),
(40, 'Bedlington Terrier'),
(41, 'Bergamasco'),
(42, 'Yorkshire Terrier'),
(43, 'Shih Tzu'),
(44, 'Chihuahua'),
(45, 'Beagle'),
(46, 'Border Collie'),
(47, 'Boston Terrier'),
(48, 'Labrador Retriever'),
(49, 'Pastor Alemán'),
(50, 'Cocker Spaniel'),
(51, 'Husky siberiano'),
(52, 'Otra raza');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'Desarrollador'),
(2, 'Analista'),
(4, 'Diseñador'),
(6, 'Profesional de servicios'),
(7, 'Auxiliar administrativo'),
(8, 'Codirector'),
(9, 'Profesor'),
(10, 'Estudiante'),
(11, 'Consumidor'),
(12, 'Asesor De Ventas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarea`
--

CREATE TABLE `tarea` (
  `id_tarea` int(11) NOT NULL,
  `nombre_tarea` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `tiempo_tarea` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `objetivos_tarea` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion_tarea` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `fechacreacion_tarea` date NOT NULL,
  `fechamodificacion_tarea` date NOT NULL,
  `id_estado` int(100) NOT NULL,
  `id_usuario` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tarea`
--

INSERT INTO `tarea` (`id_tarea`, `nombre_tarea`, `tiempo_tarea`, `objetivos_tarea`, `descripcion_tarea`, `fechacreacion_tarea`, `fechamodificacion_tarea`, `id_estado`, `id_usuario`) VALUES
(19, 'Prueba', '1', 'Registro Exitoso     ', 'Registro     ', '2023-08-31', '2023-08-31', 2, 15),
(22, 'Registro tarea # 12', '4', 'Registro exitoso', 'Registro exitoso', '2023-08-31', '2023-08-31', 3, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `sexo` char(1) NOT NULL,
  `area_id` int(11) NOT NULL,
  `num_documento` varchar(100) NOT NULL,
  `num_telefono` varchar(100) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `ciudad` int(50) NOT NULL,
  `rol` int(50) NOT NULL,
  `ruta_img` varchar(255) NOT NULL,
  `semestre` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `email`, `sexo`, `area_id`, `num_documento`, `num_telefono`, `direccion`, `ciudad`, `rol`, `ruta_img`, `semestre`, `password`) VALUES
(15, 'Javier Andrés Rojas Erazo', 'jare_123@hotmail.es', 'M', 2, '123456789', '3173280247', 'Calle 46 # 10-51', 1, 1, 'img/imgCargarUsuarios/img_18215356.jpg', '', '12345'),
(19, 'usuario', 'usuarioprueba@gmail.com', 'M', 2, '123456789', '1', '1', 1, 12, 'img/imgCargarUsuarios/usuario_sin_foto.jpg', '', '12345');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_vent` int(11) NOT NULL,
  `id_prod` int(11) NOT NULL,
  `prod_ref` varchar(200) NOT NULL,
  `prod_prec` int(11) NOT NULL,
  `vnt_cant_prod` varchar(11) NOT NULL,
  `vnt_estado` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_vent`, `id_prod`, `prod_ref`, `prod_prec`, `vnt_cant_prod`, `vnt_estado`) VALUES
(46, 82, '6554112554', 12000, '6', 'A'),
(43, 78, '56234112', 5000, '1', 'A'),
(42, 77, '45128445', 2000, '2', 'A'),
(47, 83, '784236AHSA', 12000, '4', 'A'),
(49, 81, '4551123546', 15000, '6', 'A'),
(48, 79, '451125ADDA', 25000, '10', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas_asesor`
--

CREATE TABLE `ventas_asesor` (
  `id` int(11) NOT NULL,
  `id_prod` int(11) NOT NULL,
  `prod_referencia` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `prod_prec` int(11) NOT NULL,
  `cant_prod` int(11) NOT NULL,
  `total_venta` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `ventas_asesor`
--

INSERT INTO `ventas_asesor` (`id`, `id_prod`, `prod_referencia`, `prod_prec`, `cant_prod`, `total_venta`, `usuario_id`) VALUES
(6, 81, '4551123546', 15000, 2, 30000, 19),
(7, 78, '56234112', 5000, 4, 20000, 19),
(8, 78, '56234112', 5000, 3, 15000, 16),
(9, 77, '45128445', 2000, 1, 2000, 16);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `asignaturas`
--
ALTER TABLE `asignaturas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detallehistoriaclinicaveterinaria`
--
ALTER TABLE `detallehistoriaclinicaveterinaria`
  ADD PRIMARY KEY (`id_detalle`);

--
-- Indices de la tabla `estados_tarea`
--
ALTER TABLE `estados_tarea`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indices de la tabla `historiaclinicaveterinaria`
--
ALTER TABLE `historiaclinicaveterinaria`
  ADD PRIMARY KEY (`id_historia_clinica`);

--
-- Indices de la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD PRIMARY KEY (`id_mascota`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_prod`);

--
-- Indices de la tabla `productos_carrito_tienda`
--
ALTER TABLE `productos_carrito_tienda`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `razamascotas`
--
ALTER TABLE `razamascotas`
  ADD PRIMARY KEY (`id_raza`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tarea`
--
ALTER TABLE `tarea`
  ADD PRIMARY KEY (`id_tarea`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_ibfk_1` (`area_id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_vent`);

--
-- Indices de la tabla `ventas_asesor`
--
ALTER TABLE `ventas_asesor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `archivos`
--
ALTER TABLE `archivos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `areas`
--
ALTER TABLE `areas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `asignaturas`
--
ALTER TABLE `asignaturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `estados_tarea`
--
ALTER TABLE `estados_tarea`
  MODIFY `id_estado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT de la tabla `productos_carrito_tienda`
--
ALTER TABLE `productos_carrito_tienda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tarea`
--
ALTER TABLE `tarea`
  MODIFY `id_tarea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_vent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `ventas_asesor`
--
ALTER TABLE `ventas_asesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
