-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-11-2021 a las 18:13:50
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `libreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `descripcion`, `img_id`) VALUES
(5, 'Slam Dunk #4', 'Slam Dunk sigue a Hanamichi Sakuragi, un estudiante de secundaria que decide practicar baloncesto para conquistar a la chica de que está enamorado.', 'oytenoyykdgu8cu73obr'),
(10, 'Captain Tsubasa #6', 'La historia tiene como tema central el fútbol, narrando las intrépidas aventuras de Tsubasa Ōzora y sus amigos.', 'f9yyecnjeuqcj5aaa7xd'),
(11, 'Haikyu!! #5', 'Es la historia de Shōyō Hinata, que ve un partido de voleibol por la televisión, y desde entonces, desea convertirse en profesional.', 'itj7a8fvwtcjucqrvhfb'),
(12, 'Dragon Ball Saga Piccolo #4', 'Su trama describe las aventuras de Gokū, un guerrero saiyajin, cuyo fin es proteger a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad.', 'qupllusxzxrcndyn5s76'),
(13, 'One Piece #24', 'One Piece es una aventura de piratas. Es la historia de un chico llamado Monkey D. Luffy, que sale al mar para convertirse en el Rey de los Piratas.', 'zfvmm5sqxitq3bwgowas'),
(14, 'Saint Seiya #3 Edicion Kanzenban', 'Es la historia de un grupo de jóvenes guerreros denominados «caballeros», quienes luchan por proteger a la diosa griega Atenea de las fuerzas del mal que quieren dominar la Tierra.', 'mskihrg91oafapqirktu'),
(15, 'Blackest Night (DC Comics)', 'La noche más oscura es un crossover de cómics estadounidenses publicado en las series mensuales de Green Lantern, editadas por DC Comics.', 'qec68velrtgknlna1zmj');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'admin', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'mario', '81dc9bdb52d04dc20036dbd8313ed055'),
(6, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
