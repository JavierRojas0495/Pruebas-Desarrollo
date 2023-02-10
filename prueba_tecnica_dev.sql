-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-02-2023 a las 22:17:28
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
(8, 'Calidad');

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
(7, 'Ingles', 8, 'Ingles', 10, 'Obligatoria', 'A');

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
(4, 'Pasto');

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
  `prod_categoria` varchar(100) NOT NULL,
  `prod_stock` int(100) NOT NULL,
  `prod_fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_prod`, `prod_nombre`, `prod_referencia`, `prod_precio`, `prod_peso`, `prod_categoria`, `prod_stock`, `prod_fecha_creacion`) VALUES
(6, 'Carne En Salsa', '45SDFG9855', 12000, '500', 'Carnes', 17, '2022-10-08 07:15:37'),
(7, 'Michelada', '421565SJA', 7000, '10', 'Bebidas', 12, '2022-10-08 20:17:27'),
(8, 'Cafe ', '54122SAS', 3000, '6', 'Bebidas', 65, '2022-10-08 20:24:40'),
(9, 'Margarita', '784236AHSA', 35000, '6', 'Bebidas', 8, '2022-10-08 20:33:20'),
(11, 'Carne Asada', '45123SAS', 25000, '250', 'Carnes', 20, '2022-10-08 20:44:54');

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
(10, 'Estudiante');

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
  `semestre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `email`, `sexo`, `area_id`, `num_documento`, `num_telefono`, `direccion`, `ciudad`, `rol`, `semestre`) VALUES
(8, 'Javier Andrés Rojas Erazo', 'jare_123@hotmail.es', 'M', 2, '1144192322', '3173280247', 'Calle 46 # 10-51', 1, 10, '6'),
(9, 'Maria Eliza Erazo Tovar', 'eliza180970@gmail.com', 'F', 8, '27220274', '3122136027', 'Calle 46 # 10-51', 4, 4, '');

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
  `vnt_prec_total_prod` int(11) NOT NULL,
  `vnt_fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_vent`, `id_prod`, `prod_ref`, `prod_prec`, `vnt_cant_prod`, `vnt_prec_total_prod`, `vnt_fecha`) VALUES
(37, 11, '45123SAS', 25000, '5', 125000, '2022-10-08 21:28:22'),
(38, 6, '45SDFG9855', 12000, '5', 60000, '2022-10-08 21:37:58'),
(39, 7, '421565SJA', 7000, '3', 21000, '2022-10-08 21:38:12'),
(40, 9, '784236AHSA', 35000, '2', 70000, '2022-10-08 21:38:22'),
(41, 6, '45SDFG9855', 12000, '3', 36000, '2022-10-08 21:39:35');

--
-- Índices para tablas volcadas
--

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
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_prod`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_vent`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `areas`
--
ALTER TABLE `areas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `asignaturas`
--
ALTER TABLE `asignaturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_vent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

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
