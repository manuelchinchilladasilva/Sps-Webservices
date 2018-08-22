<?php 
/*
Imprime formulario de sitios
*/
function modal_sitios(){
	echo '
	<div class="buton_add_reg col s12">
		<a id="btn_agg_site" class="btn-floating btn-large waves-effect waves-light red modal-trigger" href="#reg_sites"><i class="material-icons">add</i></a>
		<div id="reg_sites" class="modal">
			<div class="modal-content">
				<div class="col s12">
					<h5>Datos de Sitio</h5>
				</div>
				<div class="input-field col s4">
					<input type="text" id="dominio-input" class="autocomplete" value="algo.com">
					<label for="dominio-input">Dominio</label>
				</div>
				<div class="input-field col s4">
					<select id="hosting_">
						<option value="" disabled selected>Seleccione el Hosting</option>
					</select>
					<label for="hosting_input">Hosting</label>
				</div>        
				<div class="input-field col s4">
					<input type="text" id="ip-input" class="autocomplete" value="125.2.2.2">
					<label for="ip-input">Ip site</label>
				</div>   
				<div class="input-field col s6">
					<input type="text" id="propietario-input" class="autocomplete" value="depto IT">
					<label for="propietario-input">Propietario</label>
				</div>
				<div class="input-field col s6">
					<select id="status-input">
						<option value="" disabled>Status</option>
						<option value="1" selected>ACTIVO</option>
						<option value="2">INACTIVO</option>
					</select>
					<label for="status-input">Status</label>
				</div>
			</div>
			<div class="modal-footer">
				<a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar<i class="material-icons right">close</i></a>					  	
				<a id="btn_add_sitio" href="#!" class="modal-close waves-effect waves-green btn-flat">Enviar<i class="material-icons right">send</i></a>
			</div>
		</div>
	</div>
	';
}
/*
Imprime formulario de proveedores
*/
function modal_proveedores(){
	echo '
	<div class="buton_add_reg col s12">
		<a class="btn-floating btn-large waves-effect waves-light red modal-trigger" href="#reg_proveed"><i class="material-icons">add</i></a>
		<div id="reg_proveed" class="modal">
			<div class="modal-content">
				<div class="col s12">
					<h5 class="title_formulario">Datos de Proveedor</h5>
				</div>
				<div class="input-field col s6">
					<input type="text" id="nombre_input" class="autocomplete">
					<label for="autocomplete-input">Nombre</label>
				</div>              
				<div class="input-field col s6">
					<input type="text" id="cta_input" class="autocomplete">
					<label for="autocomplete-input">Cuenta</label>
				</div>	
				<div class="input-field col s4">
					<input type="text" id="user_input" class="autocomplete">
					<label for="autocomplete-input">Usuario Cta Cliente</label>
				</div>	
				<div class="input-field col s4">
					<input type="text" id="pass_input" class="autocomplete">
					<label for="autocomplete-input">Contraseña Cta Cliente</label>
				</div>	
				<div class="input-field col s4">
					<input type="text" id="coment_input" class="autocomplete">
					<label for="autocomplete-input">Comentarios</label>
				</div>		
			</div>
			<div class="modal-footer">
				<a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar<i class="material-icons right">close</i></a>					  	
				<a id="btn_add_proveedor" href="#!" class="modal-close waves-effect waves-green btn-flat">Enviar<i class="material-icons right">send</i></a>
			</div>
		</div>
	</div>
	';
}
/*
Imprime formulario de credenciales
*/
function modal_credenciales(){
	echo '
	<div class="buton_add_reg col s12">
		<a class="btn-floating btn-large waves-effect waves-light red modal-trigger" href="#reg_cred"><i class="material-icons">add</i></a>
		<div id="reg_cred" class="modal">
			<div class="modal-content">
				<div class="col s12">
					<h5 class="title_formulario">Credenciales</h5>
				</div>
				<div class="input-field col s6">
					<select id="lista_dominio">
					  <option value="" disabled selected>Seleccione el Dominio</option>
					</select>
					<label for="lista_dominio">Dominio</label>
				</div>              
				<div class="input-field col s6">
					<input type="text" id="descript_input" class="autocomplete">
					<label for="descript_input">Descripcion</label>
				</div>	
				<div class="input-field col s4">
					<input type="text" id="user_input" class="autocomplete">
					<label for="user_input">Usuario</label>
				</div>	
				<div class="input-field col s4">
					<input type="text" id="password_input" class="autocomplete">
					<label for="password_input">Password</label>
				</div>
				<div class="input-field col s4">
					<input type="text" id="comment_input" class="autocomplete">
					<label for="comment_input">Comentarios</label>
				</div>
			</div>
			<div class="modal-footer">
				<a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar<i class="material-icons right">close</i></a>					  	
				<a id="btn_add_credencial" href="#!" class="modal-close waves-effect waves-green btn-flat">Enviar<i class="material-icons right">send</i></a>
			</div>
		</div>
	</div>
	';
}
/*
Imprime formulario de datos de facturacion
*/
function modal_facturacion(){
	echo '
	<div class="buton_add_reg col s12">
		<a class="btn-floating btn-large waves-effect waves-light red modal-trigger" href="#reg_factura"><i class="material-icons">add</i></a>
		<div id="reg_factura" class="modal">
			<div class="modal-content">
				<div class="col s12">
					<h5 class="title_formulario">Datos de Facturacion</h5>
				</div>
				<div class="input-field col s6">
					<select id="lista_proveedores">
					  <option value="" disabled selected>Seleccione el Proveedor</option>
					</select>
					<label for="lista_proveedores-input">Proveedor</label>
				</div>              
				<div class="input-field col s6">
					<input type="text" id="servicio_input" class="autocomplete">
					<label for="servicio_input">Servicio</label>
				</div>	
				<div class="input-field col s4">
					<input type="text" id="ciclo_input" class="autocomplete">
					<label for="ciclo_input">Ciclo de Facturacion</label>
				</div>	
				<div class="input-field col s4">
					<input type="text" id="fecha_input" class="autocomplete">
					<label for="fecha_input">Fecha de Corte</label>
				</div>	
				<div class="input-field col s4">
					<input type="text" id="costo_input" class="autocomplete">
					<label for="costo_input">Costo</label>
				</div>
			</div>
			<div class="modal-footer">
				<a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar<i class="material-icons right">close</i></a>					  	
				<a= id="btn_add_facturacion" href="#!" class="modal-close waves-effect waves-green btn-flat">Enviar<i class="material-icons right">send</i></a>
			</div>
		</div>
	</div>
	';
}
/*
imprime formulario de imnpresion de contactos+
*/
function modal_contactos(){
	echo '
	<div class="buton_add_reg col s12">
		<a class="btn-floating btn-large waves-effect waves-light red modal-trigger" href="#data_contact"><i class="material-icons">add</i></a>
		<div id="data_contact" class="modal">
			<div class="modal-content">
				<div class="col s12">
					<h5 class="title_formulario">Datos de Contacto</h5>
				</div>
				<div class="input-field col s6">
					<select id="lista_proveedores_cont">
					  <option value="" disabled selected>Seleccione el Proveedor</option>
					</select>
					<label for="lista_proveedores_cont">Proveedor</label>
				</div>              
				<div class="input-field col s6">
					<input type="text" id="contacto_input" class="autocomplete">
					<label for="contacto_input">Contacto</label>
				</div>	
				<div class="input-field col s6">
					<input type="text" id="telefono_input" class="autocomplete">
					<label for="telefono_input">Nro Telefonico</label>
				</div>	
				<div class="input-field col s6">
					<input type="text" id="coment_input" class="autocomplete">
					<label for="coment_input">Comentarios</label>
				</div>	
			</div>
			<div class="modal-footer">
				<a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar<i class="material-icons right">close</i></a>					  	
				<a id="btn_add_contacto" href="#!" class="modal-close waves-effect waves-green btn-flat">Enviar<i class="material-icons right">send</i></a>
			</div>
		</div>
	</div>
	';
}


function print_table($name_table,$query)
{
	$tr  = '<tr>';
	$tr_ = '</tr>';
	$th  = '<th>';
	$th_ = '</th>';
	$td  = '<td>';
	$td_ = '</td>';

	$list_proveedores  = array('Nombre','Cuenta','Usuario','Contraseña','Comentarios');
	$list_sitios       = array('Dominio','Hosting','IP del Sitio','Propietario','Status');
	$list_credenciales = array('Dominio','Descripcion','Usuario','Password','Comentarios');
	$list_facturacion  = array('Dominio','Servicio','Ciclo de Facturacion','Fecha de Corte','Costo');
	$list_contacto     = array('Proveedor','Contacto','Nro Telefono','Comentarios');

	switch ($name_table) 
	{
		case 'Proveedores':
			$_a='<table id="t_proveedores" class="data_table striped highlight">';
			$_a.='<thead>';
			foreach ($list_proveedores as $index => $val) {
				$_a.=$th.$val.$th_;
			}
			$_a.=$tr_;
			$_a.='</thead>';
			echo $_a;
			print_body($query,$name_table);
			break;

		case 'Sitios':
			$_a='<table id="t_sitios" class="data_table highlight">';
			$_a.='<thead>';
			foreach ($list_sitios as $index => $val) {
				$_a.=$th.$val.$th_;
			}
			$_a.=$tr_;
			echo $_a;
			print_body($query,$name_table);
			break;

		case 'Credenciales':
			$_a='<table id="t_credenciales" class="data_table highlight">';
			$_a.='<thead>';
			foreach ($list_credenciales as $index => $val) {
				$_a.=$th.$val.$th_;
			}
			$_a.=$tr_;
			echo $_a;
			print_body($query,$name_table);
			break;

		case 'Facturacion':
			$_a='<table id="t_facturacion" class="data_table highlight">';
			$_a.='<thead>';
			foreach ($list_facturacion as $index => $val) {
				$_a.=$th.$val.$th_;
			}
			$_a.=$tr_;
			echo $_a;
			print_body($query,$name_table);
			break;

		case 'Contactos':
			$_a='<table id="t_contactos" class="data_table highlight">';
			$_a.='<thead>';
			foreach ($list_contacto as $index => $val) {
				$_a.=$th.$val.$th_;
			}
			$_a.=$tr_;
			echo $_a;
			print_body($query,$name_table);
			break;

		default:
			# code...
			break;
	}

}

function print_body($query,$tabla)
{
	$_b='<tbody>';

	switch ($tabla) 
	{
		case 'Proveedores':
			while ( $row = $query->fetch_assoc() ) 
			{
				$_b.='<tr>';
				$_b.='<td class="l_hidden" id="id_proveedor"><span id="id_proveed">'.$row["id_proveed"].'</span></td>';
				$_b.='<td><span id="nombre">'.$row["nombre"].'</span></td>';
				$_b.='<td><span id="cuenta">'.$row["cuenta"].'</span></td>';
				$_b.='<td><span id="client_area_user">'.$row["client_area_user"].'</span></td>';
				$_b.='<td><span id="client_area_pass">'.$row["client_area_pass"].'</span></td>';
				$_b.='<td><span id="coments">'.$row["coments"].'</span></td>';
				$_b.='</tr>';

			}
			break;

		case 'Sitios':
			while ( $row = $query->fetch_assoc() ) 
			{
				$_b.='<tr>';
				$_b.='<td class="l_hidden" id="id_site"><span id="id_site">'.$row["id_site"].'</span></td>';
				$_b.='<td><span id="dominio">'.$row["dominio"].'</span></td>';
				$_b.='<td><span id="hosting">'.$row["nombre"].'</span></td>';
				$_b.='<td><span id="ip_site">'.$row["ip_site"].'</span></td>';
				$_b.='<td><span id="prop">'.$row["prop"].'</span></td>';
				$_b.='<td><span id="status">'.$row["status"].'</span></td>';
				$_b.='</tr>';

			}
			break;

		case 'Credenciales':
			while ( $row = $query->fetch_assoc() ) 
			{
				$_b.='<tr>';
				$_b.='<td class="l_hidden" id="id_credencial"><span id="id_cred">'.$row["id_cred"].'</span></td>';
				$_b.='<td><span id="dominio">'.$row["dominio"].'</span></td>';
				$_b.='<td><span id="descripcion">'.$row["descripcion"].'</span></td>';
				$_b.='<td><span id="user">'.$row["user"].'</span></td>';
				$_b.='<td><span id="passw">'.$row["passw"].'</span></td>';
				$_b.='<td><span id="comment">'.$row["comment"].'</span></td>';
				$_b.='</tr>';

			}
			break;

		case 'Facturacion':
			while ( $row = $query->fetch_assoc() ) 
			{
				$_b.='<tr>';
				$_b.='<td class="l_hidden" id="id_proveedor"><span id="id_data">'.$row["id_data"].'</span></td>';
				$_b.='<td><span id="id_proveedor">'.$row["nombre"].'</span></td>';
				$_b.='<td><span id="servicio">'.$row["servicio"].'</span></td>';
				$_b.='<td><span id="ciclo_facturacion">'.$row["ciclo_facturacion"].'</span></td>';
				$_b.='<td><span id="fecha_corte">'.$row["fecha_corte"].'</span></td>';
				$_b.='<td><span id="costo">'.$row["costo"].'</span></td>';
				$_b.='</tr>';

			}
			break;

		case 'Contactos':
			while ( $row = $query->fetch_assoc() ) 
			{
				$_b.='<tr>';
				$_b.='<td class="l_hidden" id="id_proveedor"><span id="id_tlf">'.$row["id_tlf"].'</span></td>';
				$_b.='<td><span id="id_prov">'.$row["nombre"].'</span></td>';
				$_b.='<td><span id="contacto">'.$row["contacto"].'</span></td>';
				$_b.='<td><span id="nro_tlf">'.$row["nro_tlf"].'</span></td>';
				$_b.='<td><span id="coment">'.$row["coment"].'</span></td>';
				$_b.='</tr>';

			}
			break;

		default:
			# code...
			break;
	}
	$_b.='</tbody>';
	$_b.='</table>';
	echo $_b;
}
 ?>


