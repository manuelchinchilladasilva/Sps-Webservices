<?php 
$host="localhost";
$port=8889;
$socket="";
$user="root";
$password="root";
$dbname="it_webservices";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

/*Informacion para la carga de la lista de Proveedores*/
$prov = "SELECT * FROM proveedores";
$result_prov = $con->query($prov);

/*Informacion para la carga de listas de sitios*/
$sites = "SELECT sitios.id_site,sitios.status, sitios.dominio, proveedores.nombre, sitios.ip_site, sitios.prop FROM sitios INNER JOIN proveedores ON sitios.hosting = proveedores.id_proveed;"; 
$result_sites = $con->query($sites);

/*Informacion para la carga de listas de credenciales*/
$cred = "SELECT credenciales.id_cred ,
                      sitios.dominio ,
            credenciales.descripcion ,
                   credenciales.user ,
                  credenciales.passw ,
				credenciales.comment 
				FROM credenciales 
				INNER JOIN sitios 
				ON credenciales.id_site = sitios.id_site;"; 
$result_cred = $con->query($cred);

/*Informacion para la carga de listas de datos de facturacion*/

$dats_fact = "SELECT datos_facturacion.id_data, proveedores.nombre, datos_facturacion.servicio, datos_facturacion.ciclo_facturacion,datos_facturacion.fecha_corte,datos_facturacion.costo FROM datos_facturacion INNER JOIN proveedores ON datos_facturacion.id_proveedor=proveedores.id_proveed;"; 
$result_dats = $con->query($dats_fact);


$cont = "SELECT telefonos_contacto.id_tlf, proveedores.nombre, telefonos_contacto.contacto, telefonos_contacto.nro_tlf, telefonos_contacto.coment FROM telefonos_contacto INNER JOIN proveedores ON telefonos_contacto.id_prov = proveedores.id_proveed;"; 
$result_cont = $con->query($cont);
 ?>