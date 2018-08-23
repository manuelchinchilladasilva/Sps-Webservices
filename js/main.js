$(document).ready(function(){
	class Fila{
		constructor(a,table){
			var end_span='</span>'
			var td='<td>'
			var end_td='</td>'
			switch(table){
				case 'prv':
				this.id    ='<span id="id_proveed">'+a.id+end_span
				this.name  ='<span id="nombre">'+a.nombre+end_span
				this.cta   ='<span id="cuenta">'+a.cta+end_span
				this.user  ='<span id="client_area_user">'+a.user+end_span
				this.pass  ='<span id="client_area_pass">'+a.pass+end_span
				this.commnt='<span id="coments">'+a.coment+end_span
				break;
				case 'sts':
				this.id          ='<span id="id_site">'+a.id+end_span
				this.dominio     ='<span id="dominio">'+a.dominio+end_span
				this.hosting     ='<span id="hosting">'+a.hosting+end_span
				this.ip          ='<span id="ip_site">'+a.ip+end_span
				this.propietario ='<span id="prop">'+a.propietario+end_span
				this.status      ='<span id="status">'+a.status+end_span
				break;
				case 'crd':
				this.id          ='<span id="id_cred">'+a.id+end_span
				this.dominio     ='<span id="dominio">'+a.dominio+end_span
				this.descripcion ='<span id="descripcion">'+a.descripcion+end_span
				this.user        ='<span id="user">'+a.user+end_span
				this.passw       ='<span id="passw">'+a.passw+end_span
				this.comment     ='<span id="comment">'+a.comment+end_span
				break;
				case 'fct':
				this.id       ='<span id="id_cred">'+a.id+end_span
				this.proveedor='<span id="proveedor">'+a.proveedor+end_span
				this.servicio ='<span id="servicio">'+a.servicio+end_span
				this.ciclo    ='<span id="ciclo">'+a.ciclo+end_span
				this.fecha    ='<span id="fecha">'+a.fecha+end_span
				this.costo    ='<span id="costo">'+a.costo+end_span
				break;
				case 'cnt':
				this.id          ='<span id ="id_cred">'+a.id+end_span
				this.proveedor   ='<span id ="proveedor">'+a.proveedor+end_span
				this.contacto    ='<span id ="contacto">'+a.contacto+end_span
				this.nro_telefono='<span id ="nro_telefono">'+a.nro_telefono+end_span
				this.comentario  ='<span id ="comentario">'+a.comentario+end_span     
				break;
			}
		}
		get pro_fullRow(){
			let td='<td>'
			let end_td='</td>'

			let a='<tr>'
			a+='<td class="l_hidden" id="id_proveedor">'+this.id+end_td
			a+=td+this.name+end_td
			a+=td+this.cta+end_td
			a+=td+this.user+end_td
			a+=td+this.pass+end_td
			a+=td+this.commnt+end_td
			a+='</tr>'

			return a
		}
		get sts_fullRow(){
			let td='<td>'
			let end_td='</td>'

			let a='<tr>'
			a+='<td class="l_hidden" id="id_site">'+this.id+end_td
			a+=td+this.dominio+end_td
			a+=td+this.hosting+end_td
			a+=td+this.ip+end_td
			a+=td+this.propietario+end_td
			a+=td+this.status+end_td
			a+='</tr>'

			return a
		}
		get crd_fullRow(){
			let td='<td>'
			let end_td='</td>'

			let a='<tr>'
			a+='<td class="l_hidden" id="id_credencial">'+this.id+end_td
			a+=td+this.dominio+end_td
			a+=td+this.descripcion+end_td
			a+=td+this.user+end_td
			a+=td+this.passw+end_td
			a+=td+this.comment+end_td
			a+='</tr>'

			return a
		}
		get fct_fullRow(){
			let td='<td>'
			let end_td='</td>'

			let a='<tr>'
			a+='<td class="l_hidden" id="id_credencial">'+this.id+end_td
			a+=td+this.proveedor+end_td
			a+=td+this.servicio+end_td
			a+=td+this.ciclo+end_td
			a+=td+this.fecha+end_td
			a+=td+this.costo+end_td
			a+='</tr>'

			return a
		}
		get cnt_fullRow(){
			let td='<td>'
			let end_td='</td>'

			let a='<tr>'
			a+='<td class="l_hidden" id="id_credencial">'+this.id+end_td
			a+=td+this.proveedor+end_td
			a+=td+this.contacto+end_td
			a+=td+this.nro_telefono+end_td
			a+=td+this.comentario+end_td
			a+='</tr>'

			return a
		}
	}
	class Botones{
		constructor(){
			this.a='</td>'
			this.b='</a>'
			this.c='</i>'
		}

		get delete(){
			let a='<td class="btn-controlData delete" style="display:none;">'
			let b='<a id="btn-delete" class="btn-floating btn-small waves-effect waves-light tooltipped" data-position="top" data-tooltip="Eliminar">'
			let c='<i class="material-icons">delete'
			let z=a+b+c+this.c+this.b+this.a

			return z
		}

		get edit(){
			let a='<td class="btn-controlData edit" style="display:none;">'
			let b='<a id="btn-edit" class="btn-floating btn-small waves-effect waves-light tooltipped" data-position="top" data-tooltip="Editar">'
			let c='<i class="material-icons">edit'
			let z=a+b+c+this.c+this.b+this.a

			return z
		}

		get cancel(){
			let a='<td class="btn-controlData clear" style="display:none;">'
			let b='<a id="btn-cancel" class="btn-floating btn-small waves-effect waves-light tooltipped btn_0active" data-position="top" data-tooltip="Cancelar">'
			let c='<i class="material-icons">clear'
			let z=a+b+c+this.c+this.b+this.a

			return z
		}

		get done(){
			let a='<td class="btn-controlData done" style="display:none;">'
			let b='<a id="btn-done" class="btn-floating btn-small waves-effect waves-light tooltipped btn_0active" data-position="top" data-tooltip="Hecho">'
			let c='<i class="material-icons">done'
			let z=a+b+c+this.c+this.b+this.a

			return z
		}
	}
	class Frm{
		constructor(a,b){
			this.value=a
			this.text=b
		}

		get option(){
			let a='<option value="'+this.value+'">'+this.text+'</option>'
			return a
		}
	}

	$('.sidenav').sidenav();
	$('.tabs').tabs();
	$('select').formSelect();
	$('.collapsible').collapsible();
	$('.modal').modal();
	$('#new_site').click(function(){
		$('#input_site').fadeToggle('slow');
	})
	$('#new_cred').click(function(){
		$('#input_credenciales').fadeToggle('slow');
	})
	$('#new_fact').click(function(){
		$('#input_facturacion').fadeToggle('slow');
	})
	$('#new_contact').click(function(){
		$('#input_contacto').fadeToggle('slow');
	})

	let boton           = new Botones()
	var btn_delete      = $(boton.delete)
	var btn_edit        = $(boton.edit)
	var btn_edit_done   = $(boton.done)
	var btn_edit_cancel = $(boton.cancel)

	$.ajax({
		data     : {'serv'    : 'lista_proveedores'},
		url      : "assets/ajax_admin.php",
		type     : "POST",
		dataType : "JSON",
		beforeSend: function(xhr){
			//console.log(xhr);
		},
		error: function(jqXHR,textStatus,errorThrown){
			console.log('Ups, algo anda mal');
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);

		},
		success: function(data,textStatus,jqXHR){
			//console.log('Exitos!');
			//console.log(data);
			data.forEach(function(val,index,arr){
				let opt= new Frm(val.id_proveed,val.nombre)
				$('#lista_hosting').append($(opt.option))
				$('#hosting_').append($(opt.option));
				$('#lista_proveedores').append($(opt.option));
				$('#lista_proveedores_cont').append($(opt.option));
			});
			//console.log(data);
			//console.log(textStatus);
			//console.log(jqXHR);
			$('select').formSelect();
		}
	})
	$.ajax({
		data     : {'serv'    : 'lista_sitios'},
		url      : "assets/ajax_admin.php",
		type     : "POST",
		dataType : "JSON",
		beforeSend: function(xhr){
			//console.log(xhr);
		},
		error: function(jqXHR,textStatus,errorThrown){
			console.log('Ups, algo anda mal');
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);

		},
		success: function(data,textStatus,jqXHR){
			//console.log('Exitos!');
			data.forEach(function(val,index,arr){
				let opt= new Frm(val.id_dom,val.dominio)
				$('#lista_dominio').append($(opt.option))
			});
			//console.log(textStatus);
			//console.log(jqXHR);
			$('select').formSelect();
		}
	})

	$('#btn_add_proveedor').click(function(){
		let inputs = {
			'serv'    : 'proveedores',
			'nombre'  : $('#nombre_input')[0].value,
			'cta'     : $('#cta_input')[0].value,
			'user'    : $('#user_input')[0].value,
			'pass'    : $('#pass_input')[0].value,
			'comment' : $('#coment_input')[0].value
		};
		$.ajax({
			data     : inputs,
			url      : "assets/ajax_admin.php",
			type     : "POST",
			dataType : "JSON",
			beforeSend: function(xhr){
				console.log(xhr);
				console.log(inputs);
			},
			error: function(jqXHR,textStatus,errorThrown){
				console.log('Ups, algo anda mal');
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);

			},
			success: function(data,textStatus,jqXHR){
				console.log('Exitos!');
				console.log(data);

				let fila= new Fila(data,'prv');
				$('div#tabla_proveedores table tbody').append(fila.pro_fullRow);
				console.log(textStatus);
				console.log(jqXHR);

			}
		})
	})

	$('#btn_add_sitio').click(function(){
		let inputs = {
			'serv'        : 'sitios',
			'dominio'     : $('#dominio-input')[0].value,
			'hosting'     : $('#hosting_')[0].value,
			'ip'          : $('#ip-input')[0].value,
			'propietario' : $('#propietario-input')[0].value,
			'status'      : $('#status-input')[0].value
		};
		$.ajax({
			data     : inputs,
			url      : "assets/ajax_admin.php",
			type     : "POST",
			dataType : "JSON",
			beforeSend: function(xhr){
				console.log(xhr);
				console.log(inputs);
			},
			error: function(jqXHR,textStatus,errorThrown){
				alert('Ups, algo anda mal');
				console.log('Ups, algo anda mal');
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);

			},
			success: function(data,textStatus,jqXHR){
				console.log('Exitos!');
				console.log(data);
				let fila= new Fila(data,'sts');

				$('div#tabla_sitios table tbody').append(fila.sts_fullRow);

				console.log(textStatus);
				console.log(jqXHR);
			}
		})
	})

	$('#btn_add_credencial').click(function(){
		let inputs = {
			'serv'        : 'credenciales',
			'dominio'     : $('#lista_dominio')[0].value,
			'descripcion' : $('#descript_input')[0].value,
			'user'        : $('#user_input')[0].value,
			'passw'       : $('#password_input')[0].value,
			'comment'     : $('#comment_input')[0].value
		};
		$.ajax({
				data     : inputs,
				url      : "assets/ajax_admin.php",
				type     : "POST",
				dataType : "JSON",
				beforeSend: function(xhr){
					console.log(xhr);
					console.log(inputs);
				},
				error: function(jqXHR,textStatus,errorThrown){
					console.log('Ups, algo anda mal');
					console.log(jqXHR);
					console.log(textStatus);
					console.log(errorThrown);

				},
				success: function(data,textStatus,jqXHR){
					let fila= new Fila(data,'crd');
					$('div#tabla_credenciales table tbody').append(fila.crd_fullRow);
				// console.log(data);
				//console.log(textStatus);
				//console.log(jqXHR);
			}
		})
	})

	$('#btn_add_facturacion').click(function(){
		let inputs = {
			'serv'      : 'facturacion',
			'proveedor' : $('#lista_proveedores')[0].value,
			'servicio'  : $('#servicio_input')[0].value,
			'ciclo'     : $('#ciclo_input')[0].value,
			'fecha'     : $('#fecha_input')[0].value,
			'costo'     : $('#costo_input')[0].value
		};
		$.ajax({
				data     : inputs,
				url      : "assets/ajax_admin.php",
				type     : "POST",
				dataType : "JSON",
				beforeSend: function(xhr){
					console.log(xhr);
					console.log(inputs);
				},
				error: function(jqXHR,textStatus,errorThrown){
					console.log('Ups, algo anda mal');
					console.log(jqXHR);
					console.log(textStatus);
					console.log(errorThrown);

				},
				success: function(data,textStatus,jqXHR){
					let fila= new Fila(data,'fct');
					$('div#tabla_facturacion table tbody').append(fila.fct_fullRow);
				//console.log('Exitos!');
				console.log(data);
				//console.log(textStatus);
				//console.log(jqXHR);
			}
		})
	})

	$('#btn_add_contacto').click(function(){
		let inputs = {
			'serv'         : 'contactos',
			'proveedor'    : $('#lista_proveedores_cont')[0].value,
			'contacto'     : $('#contacto_input')[0].value,
			'nro_telefono' : $('#telefono_input')[0].value,
			'comentario'   : $('#coment_input')[0].value,
		};
		$.ajax({
				data     : inputs,
				url      : "assets/ajax_admin.php",
				type     : "POST",
				dataType : "JSON",
				beforeSend: function(xhr){
					console.log(xhr);
					console.log(inputs);
				},
				error: function(jqXHR,textStatus,errorThrown){
					console.log('Ups, algo anda mal');
					console.log(jqXHR);
					console.log(textStatus);
					console.log(errorThrown);

				},
				success: function(data,textStatus,jqXHR){
				//console.log('Exitos!');
				let fila= new Fila(data,'cnt');
				$('div#tabla_contacto table tbody').append(fila.cnt_fullRow);
				console.log(data);
				//console.log(textStatus);
				//console.log(jqXHR);
			}
		})
	})


	var ex_hoover=function(){
		var esto=$(this)
		esto.find('td .btn-controlData').remove()
	}

	var td_onHoover=function(e){
		e.preventDefault();
		var tr = $(this).parent('tr');
/*
Si la ultima fila
tiene la clase btn-controlData
agrega al final el boton delete
y edit
*/
if (!tr.hasClass('0active')) {
	add_botones(tr,btn_delete,btn_edit)
} else {
	add_botonesEdit(tr,btn_edit_cancel,btn_edit_done)
}
/*
Si alguna de las filas
contiene la clase
btn-controlGata
lo muestra en fadein
*/
	tr.find('td.btn-controlData').fadeIn('2000');
}
$('td').hover(td_onHoover,ex_hoover);

function add_botones(tr,del,edit)
{
/*
Agrega los botones
Editar y eliminar
*/
tr.append(del)
tr.append(edit)
btn_edit_click(tr)
btn_delete_click(tr,$(tr).parent().parent().parent().attr('id'))
$('.tooltipped').tooltip();
}
function add_botonesEdit(tr,leave,done)
{
	tr.append(leave)
	tr.append(done)
	btn_done_click(tr)
	btn_cancel_click(tr)
	$('.tooltipped').tooltip();
}
function btn_edit_click(tr)
{
	$('.btn-controlData a#btn-edit').off('click').on('click',(e)=>{
		tr.addClass('0active');
		tr.find('td.btn-controlData').remove();
		tr.append(btn_edit_cancel);
		tr.append(btn_edit_done);
		$('.btn_0active').fadeIn('3000')
		tr.find('td span').hide();

		tr.find('td').each((i,val,arr)=>{
			if (!($(val).hasClass('l_hidden')|| $(val).hasClass('btn-controlData'))) { 
				var text=$(val).text()
				console.log($(val).find('span').attr('id'))
				var json_text={
					'id':$(val).find('span').attr('id'),
					'type':'text',
					'class':'validate',
					'placeholder':text.toString()
				}
				var inp_text=$('<input>',json_text);
				$(val).append(inp_text);
			} 
		})
	})
}
function btn_delete_click(tr,tabla_name)
{
	$('.btn-controlData a#btn-delete').off().on('click',()=>{
		let a=$(this).parent('table');

		if (confirm('Esta seguro de que quiere eliminar este registro?')) {

			$.ajax({
				data : {
					'serv':'dlt-reg',
					'table':tabla_name,
					'id_reg':$(tr).find('td span')[0].innerText
				},
				url : "assets/ajax_admin.php",
				type : "POST",
				dataType : "JSON",
				beforeSend: function(xhr){
					console.log(xhr)
					console.log(this.data);
				},
				error: function(jqXHR,textStatus,errorThrown){
					console.log('Ups, algo anda mal');
					console.log(jqXHR);
					console.log(textStatus);
					console.log(errorThrown);

				},
				success: function(data,textStatus,jqXHR){
					console.log(data);
					tr.remove();
				}
			})
		}
	})
}
function btn_done_click(tr)
{
	$('.btn-controlData a#btn-done').off().one('click',()=>{
		var credenciales={
			'serv' : 'updt-Credenciales',
			'id_cred' : tr.find('td span#id_cred').text(),
			'dominio' : '',
			'descripcion' : '',
			'user' : '',
			'passw' : '',
			'comment' : ''
		}

		/*
		Se barren todas las etiquetas
		TD hijas del TR en hover
		*/
		tr.find('td').each((i,val,arr)=>{
			let in_td=$(val);
			/*
			Se barren los elementos que esten
			dentro del TD
			*/
			in_td.contents().each((x,valx,arrx)=>{
				switch($(valx).prop('tagName')){
					case 'INPUT':
					let _SPAN_=$(valx).siblings();// hermanos SPAN
					let _INPUT_=$(valx);// valor INPUT

					/*
					Se barren los valores de credenciales
					y se evalua cuando el index de la variable
					sea igual al id del objeto INPUT
					*/
					for(let i in credenciales){
						/*Se evalua que el objeto INPUT
						no se encuentre vacio.
						Si el objeto INPUT no esta vacio
						se guarda el valor en el objeto
						credenciales, de lo contrario se
						guarda el valor del SPAN hermano
						en el objeto credenciales
						*/
						if ($(_INPUT_).attr('id')==i) {
							if ($(_INPUT_).val()!='') {
								credenciales[i]=$(_INPUT_).val();	
							} else {
								credenciales[i]=$(_SPAN_).text();	
							}
						}
					}
					break;
				}
			})
		})
		if (confirm('Seguro de que quiere modificar este registro?')) 
		{
			$.ajax({
				data : credenciales,
				url : "assets/ajax_admin.php",
				type : "POST",
				dataType : "JSON",
				beforeSend: function(xhr){
				// console.log(xhr)
				// console.log(credenciales);
			},
			error: function(jqXHR,textStatus,errorThrown){
				console.log('Ups, algo anda mal');
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);

			},
			success: function(data,textStatus,jqXHR){
				console.log(data);
				for (let i in data){
					tr.find('td span').each((x,val,arr)=>{
						if ($(val).attr('id')==i) {
							$(val).text(data[i])
						}
					})
				}
				end_buttons(tr);
			}
		})
		}

	})
}

function btn_cancel_click(tr)
{
	$('.btn-controlData a#btn-cancel').on('click',function(){
		end_buttons(tr);
	})
}

function end_buttons(tr)
{
	tr.find('td.btn-controlData').remove();
	tr.find('td input').remove();
	tr.append(btn_delete);
	tr.append(btn_edit);
	tr.find('td span').show();
	tr.find('td.btn-controlData').show('2000');
	tr.removeClass('0active');
}




});
