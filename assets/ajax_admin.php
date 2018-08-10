<?php 
include "queries.php";


switch  ($_POST["serv"]) {
	case "proveedores":
		$insert_prov = $con->prepare("
			INSERT INTO `it_webservices`.`proveedores` (
			`nombre`, 
			`cuenta`, 
			`client_area_user`, 
			`client_area_pass`,
			`coments`
		) VALUES (?,?,?,?,?)");

		$nombre      = $_POST["nombre"];
		$cta         = $_POST["cta"];
		$user        = $_POST["user"];
		$pass        = $_POST["pass"];
		$coment      = $_POST["comment"];

		$insert_prov->bind_param("sssss", $nombre, $cta, $user,$pass,$coment);

		if ($insert_prov->execute()) {
			$sendData = array(
				'id' => $insert_prov->insert_id, 
				'nombre' => $nombre,
				'cta' => $cta,
				'user' => $user,
				'pass' => $pass,
				'coment' => $coment,
			);
			echo json_encode($sendData);
			$insert_prov->close();
		} else {
			echo($insert_prov->error);
			exit;
		}
	break;

	case "lista_proveedores":
		$list_proveeds = "SELECT id_proveed,nombre FROM it_webservices.proveedores;";
		$result_names  = $con->query($list_proveeds);
		$data_array    = array();
		if ($result_names->num_rows > 0) {
			while($row = $result_names->fetch_assoc()) {
				array_push($data_array,$row);

			}
		} else {

			echo "0 results";

		}
	echo json_encode($data_array);
	break;

	case "lista_sitios":
		$list_dominios   = "SELECT id_site,dominio FROM it_webservices.sitios;";
		$result_dominios = $con->query($list_dominios);
		$dominios_array  = array();

		if ($result_dominios->num_rows > 0) {
			while($row = $result_dominios->fetch_array()) {

				array_push($dominios_array,$row['dominio']);

			}
		} else {

			echo "0 results";

		}
	echo json_encode($dominios_array);
	break;

	case "sitios":
		$insert_prov = $con->prepare("INSERT INTO 'it_webservices'.'sitios'
			('dominio',
			'hosting',
			'ip_site',
			'prop',
			'status') VALUES (?,?,?,?,?)");
		$dominio     = $_POST["dominio"];
		$hosting     = $_POST["hosting"];
		$ip          = $_POST["ip"];
		$propietario = $_POST["propietario"];
		$status      = $_POST["status"];

		//$insert_prov->bind_param("sssss", $dominio, $hosting, $ip,$propietario,$status);
		//$insert_prov->execute();
		//$insert_prov->close();
		echo json_encode("Registro creado sitios");
	break;

	case "credenciales":
		$insert_prov = $con->prepare("INSERT INTO 'it_webservices'.'credenciales'
			('id_site',
			'descripcion',
			'user',
			'passw',
			'comment') VALUES (?,?,?,?,?)");
		$dominio     = $_POST["dominio"];
		$descripcion = $_POST["descripcion"];
		$user        = $_POST["user"];
		$passw       = $_POST["passw"];
		$comment     = $_POST["comment"];

		//$insert_prov->bind_param("sssss", $dominio, $descripcion, $user,$passw,$comment);
		//$insert_prov->execute();
		//$insert_prov->close();
		echo json_encode("Registro creado credenciales");
	break;

	case "updt-Credenciales":
		$query_text="UPDATE `it_webservices`.`credenciales`
		SET	`descripcion` = ?,
		`user`            = ?,
		`passw`           = ?,
		`comment`         = ?
		WHERE `id_cred`   = ?;";

		if (!$upd_credenciales = $con->prepare($query_text)) {
			echo($upd_credenciales->error);
			exit;
		}
		if (!$upd_credenciales->bind_param("sssss", $descripcion, $user, $passw,$comment,$id_cred)) {
			echo($upd_credenciales->error);
			exit;
		}

		$id_cred     = $_POST["id_cred"];
		$dominio     = $_POST["dominio"];
		$descripcion = $_POST["descripcion"];
		$user        = $_POST["user"];
		$passw       = $_POST["passw"];
		$comment     = $_POST["comment"];

		if ($upd_credenciales->execute()) {
			$sendData = array(
				'id_cred' => $id_cred, 
				'dominio' => $dominio,
				'descripcion' => $descripcion,
				'user' => $user,
				'passw' => $passw,
				'comment' => $comment,
			);
			echo json_encode($sendData);
			$upd_credenciales->close();
		} else {
			echo($upd_credenciales->error);
			exit;
		}
	break;

	case "dlt-Credenciales":
		$query_text="DELETE FROM `it_webservices`.`credenciales`
		WHERE `id_cred`  = ?;";

		if (!$dlr_credenciales = $con->prepare($query_text)) {
			echo($dlr_credenciales->error);
			exit;
		}
		if (!$dlr_credenciales->bind_param("i", $id_cred)) {
			echo($dlr_credenciales->error);
			exit;
		}

		$id_cred = $_POST["id_cred"];
		
		if ($dlr_credenciales->execute()) {
			$sendData = array(
				'id_cred' => $id_cred, 
			);
			echo json_encode($id_cred);
			$dlr_credenciales->close();
		} else {
			echo($dlr_credenciales->error);
			exit;
		}
	break;


	case "facturacion":
		$insert_prov = $con->prepare("INSERT INTO 'it_webservices'.'datos_facturacion'
			('id_proveedor',
			'servicio',
			'ciclo_facturacion',
			'fecha_corte',
			'costo')
			VALUES (?,?,?,?,?)");
		$proveedor = $_POST["proveedor"];
		$servicio  = $_POST["servicio"];
		$ciclo     = $_POST["ciclo"];
		$fecha     = $_POST["fecha"];
		$costo     = $_POST["costo"];

		//$insert_prov->bind_param("sssss", $proveedor, $servicio, $ciclo,$fecha,$costo);
		//$insert_prov->execute();
		//$insert_prov->close();
		echo json_encode("Registro creado facturacion");
	break;

	case "contactos":
		$insert_prov = $con->prepare("INSERT INTO `it_webservices`.`telefonos_contacto`
			(`id_prov`,
			`contacto`,
			`nro_tlf`,
			`coment`)
			VALUES (?,?,?,?,?)");

		$proveedor    = $_POST["proveedor"];
		$contacto     = $_POST["contacto"];
		$nro_telefono = $_POST["nro_telefono"];
		$comentario   = $_POST["comentario"];

		//$insert_prov->bind_param("ssss", $proveedor, $contacto, $nro_telefono,$comentario);
		//$insert_prov->execute();
		//$insert_prov->close();
		echo json_encode("Registro creado Contactos");
	break;
	default:
 		# code...
	break;
} 


	


?>