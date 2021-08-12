create database cveinte;
use cveinte;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT 'Clave primaria',
  `nombre` varchar(50) NOT NULL COMMENT 'nombre cliente',
  `email` varchar(50) NOT NULL COMMENT 'email cliente',
  `telefono` varchar(50) NOT NULL COMMENT 'telefono cliente',
  `comentario` varchar(2000) NOT NULL COMMENT 'comentario cliente',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='tabla de clientes';

insert into `clientes` (nombre,email,telefono,comentario) values ('Nicolas','nicocrespi@hotmail.com','1124079822','Hola Guys');


delete from clientes; /* OJO CON ESTO QUE BORRA TODO INDISCRIMINADAMENTE*/

use cveinte;
select * from clientes