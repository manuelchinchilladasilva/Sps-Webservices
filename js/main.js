$(document).ready(function(){
	var btn_delete = $('<td>',{
		'style':'display:none',
		'class':'btn-controlData delete'
	}).append($('<a>',{
		'id':'btn-delete',
		'class':'btn-floating btn-small waves-effect waves-light tooltipped',
		'data-position':'top',
		'data-tooltip':'Eliminar'
	}).append($('<i>',{
		'class':'material-icons',
		'text':'delete'
	})));

	var btn_edit = 
	$('<td>',{
		'style':'display:none',
		'class':'btn-controlData edit'
	}).append($('<a>',{
		'id':'btn-edit',
		'class':'btn-floating btn-small waves-effect waves-light tooltipped',
		'data-position':'top',
		'data-tooltip':'Editar'
	}).append($('<i>',{
		'class':'material-icons',
		'text':'edit'
	})));

	var btn_edit_cancel=$('<td>',{
		'style':'display:none',
		'class':'btn-controlData clear'
	}).append($('<a>',{
		'style':'display:none',
		'id':'btn-cancel',
		'class':'btn-floating btn-small waves-effect waves-light tooltipped btn_0active',
		'data-position':'top',
		'data-tooltip':'Cancelar'
	}).append($('<i>',{
		'class':'material-icons',
		'text':'clear'
	})))

	var btn_edit_done=$('<td>',{
		'style':'display:none',
		'class':'btn-controlData done'
	}).append($('<a>',{
		'style':'display:none',
		'id':'btn-done',
		'class':'btn-floating btn-small waves-effect waves-light tooltipped btn_0active',
		'data-position':'top',
		'data-tooltip':'Hecho'
	}).append($('<i>',{
		'class':'material-icons',
		'text':'done'
	})))


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
				$('#lista_hosting').append($('<option>',{'value':val.id_proveed,'text':val.nombre}));
				$('#hosting_').append($('<option>',{'value':val.id_proveed,'text':val.nombre}));
				$('#lista_proveedores').append($('<option>',{'value':val.id_proveed,'text':val.nombre}));
				$('#lista_proveedores_cont').append($('<option>',{'value':val.id_proveed,'text':val.nombre}));
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
				$('#lista_dominio').append($('<option>',{'value':val,'text':val}));
			});
			//console.log(data);
			//console.log(textStatus);
			//console.log(jqXHR);
			$('select').formSelect();
		}
	})
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
				var row=$('<tr>').append(
					$('<td>',{
						'id':'id_proveedor',
						'class':'l_hidden'
					}).append($('<span>',{
						'text':data.id
					}))
					).append(
					$('<td>').append($('<span>',{
						'text':data.nombre
					}))).append(
					$('<td>').append($('<span>',{
						'text':data.cta
					}))).append(
					$('<td>').append($('<span>',{
						'text':data.user
					}))).append(
					$('<td>').append($('<span>',{
						'text':data.pass
					}))).append($('<td>').append($('<span>',{
						'text':data.coment
					})))
					$('div#tabla_proveedores table tbody').append(row);
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
				console.log('Ups, algo anda mal');
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);

			},
			success: function(data,textStatus,jqXHR){
				console.log('Exitos!');
				console.log(data);
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
				//console.log('Exitos!');
				console.log(data);
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
				//console.log('Exitos!');
				console.log(data);
				//console.log(textStatus);
				//console.log(jqXHR);
			}
		})
	})

	$('#btn_add_contacto').click(function(){
		let inputs = {
			'serv'      : 'contactos',
			'proveedor' : $('#lista_proveedores')[0].value,
			'contacto'  : $('#servicio_input')[0].value,
			'nro_telefono'     : $('#ciclo_input')[0].value,
			'comentario'     : $('#fecha_input')[0].value,
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

		//$('tr').unbind('mouseleave').mouseleave(ex_hoover);
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
						console.log(a);
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
