<?php 
include "assets/header.php";
include "assets/queries.php";
include "assets/_extras.php";

?>
<nav>
  <div class="nav-wrapper sps r032">
    <a href="#" class="brand-logo left"><img src="resources/corporative/sps_logo300.png" alt="#" class="top-logo-img"></a>
    <ul id="nav-mobile" class="right">
      <li><a href="collapsible.html">Servicios Web</a></li>
    </ul>
  </div>
</nav>
<!-- <div id="titulo_1" class="row center">
	<div class="col s12">
		<h5>Listado de Gestion de Servicios Web</h5>
	</div>
</div> -->
<div class="row">
	<div class="col s12">
		<ul class="tabs">
			<li class="tab col s3"><a class="active" href="#prov">Proveedores</a></li>
			<li class="tab col s2"><a href="#sitios">Sitios</a></li>
			<li class="tab col s2"><a href="#credenciales">Credenciales</a></li>
			<li class="tab col s2"><a href="#facturacion">Facturacion</a></li>
			<li class="tab col s3"><a href="#dir_contacto">Directorio de Contacto</a></li>
		</ul>
	</div>
	<?php 
	/*Seccion para la carga de Proveedores*/
	if ($result_prov->num_rows > 0) {
		?>
		<!-- Seccion de Tabla de Proveedores -->
		<div id="prov" class="tabla_datos col s12">
			<div class="col s12 tit_table">
				<h5>Proveedores de Servicios Web</h5>
			</div>
			<div id="tabla_proveedores" class="container">
				<!-- 
					Imprime Tabla de Proveedores 
				--><?php print_table("Proveedores",$result_prov) ?>
				<!-- 
					Contenido del modal de Proveedores 
				--><?php modal_proveedores(); ?>
				
			</div>
		</div>
		<?php 
	} else {
		echo "0 results";
	}

	/*Seccion para la carga de Sitios*/
	if ($result_sites->num_rows > 0) {
		?>
		<!-- Seccion de Tabla de Sitios -->
		<div id="sitios" class="tabla_datos col s12">	  
			<div class="col s12 tit_table">
				<h5>Sitios Web</h5>
			</div>
			<div id="tabla_sitios" class="container">
				<!-- 
					Imprime tabla de Sitios 
				--><?php print_table("Sitios",$result_sites) ?>
				<!-- 
					Contenido en modal de Sitios 
				--><?php modal_sitios(); ?>
			</div>
		</div>
		<?php 
	} else {
		echo "0 results";
	}

	/*Seccion para la carga de Credenciales*/
	if ($result_cred->num_rows > 0) {
		?>
		<!-- Seccion de Tabla de Credenciales -->
		<div id="credenciales" class="tabla_datos col s12">
			<div class="col s12 tit_table">
				<h5>Credenciales en Sitios Web</h5>
			</div>
			<div id="tabla_credenciales" class="container">
				<!-- 
					Imprime tabla de Credenciales 
				--><?php print_table("Credenciales",$result_cred) ?>
				<!-- 
					Contenido en pesta;a de credenciales 
				--><?php modal_credenciales(); ?>
			</div>
		</div>
		<?php 
	} else {
		echo "0 results";
	}

	/*Seccion para la carga de Datos de Facturacion*/
	if ($result_dats->num_rows > 0) {
		?>
		<!-- Seccion de Tabla de Datos de Facturacion -->
		<div id="facturacion" class="tabla_datos col s12">
			<div class="col s12 tit_table">
				<h5>Datos de Facturacion de Servicios Web</h5>
			</div>
			<div id="tabla_facturacion" class="container">
				<!-- 
					Imprime tabla de Facturacion 
				--><?php print_table("Facturacion",$result_dats) ?>
				<!-- Contenido en tabla de facturacion -->
				<?php modal_facturacion(); ?>
			</div>
		</div>	

		<?php 
	} else {
		echo "0 results";
	}

	/*Seccion para la carga de Datos de Telefonos de Contacto*/
	if ($result_cont->num_rows > 0) {
		?>
		<!-- Seccion de Tabla de Datos de Telefonos de Contacto -->
		<div id="dir_contacto" class="tabla_datos col s12">
			<div class="col s12 tit_table">
				<h5>Directorio Telefonico de Servicios</h5>
			</div>
			<div id="tabla_contacto" class="container">
				<!-- 
					Imprime tabla de Contactos 
				--><?php print_table("Contactos",$result_cont) ?>
				<!-- Seccion para la carga del formulario de contactos -->
				<?php modal_contactos(); ?>
			</div>
		</div>
		<?php 
	} else {
		echo "0 results";
	}

	?>
</div>

<?php 
$con->close();
include "assets/footer.php";
?>