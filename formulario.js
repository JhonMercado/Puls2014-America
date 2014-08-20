	var $form = $('#formulario'),
      $titulo = $('#titulo'),
         $url =  $('#url'),
      $button = $('#mostrar-form'),
       $lista = $('#contenido'),
  $primerPost = $('.item').first();
    var ls    = localStorage,
	    ss    = sessionStorage;
	if (ls.getItem('autosave')){
		$titulo.val(ss.getItem('titulo'));
		$url.val(ss.getItem('url'));
	}


function mostrarOcultarFormulario(){
	
   $form.slideToggle();
   $lista.slideToggle();
 }
function agregarPost(e){
	    e.preventDefault();
	    var titulo=$titulo.val(),
	    url=$url.val(),
	    clone=$primerPost.clone();
	   
	    
	    clone.find('.titulo_item a')
	    .text(titulo)
	    .attr('href', url)
	    
	    clone.hide()
	    
	    $lista.prepend(clone);// si usamos append se añade al final
	    mostrarOcultarFormulario();
	    $titulo.val("");
	    $url.val("");
	    //clone.slideDown()
	    clone.fadeIn()
	    
	    }
function grabarInformacion(e){
	e.preventDefault();
	var titulo = $titulo.val(),
	     url   = $url.val(),
	     ls    = localStorage,
	     ss    = sessionStorage;

	     ls.setItem('titulo',titulo);
	     ls.setItem('url',url);

         ss.setItem('titulo',titulo);
	     ss.setItem('url',url);
	     mostrarOcultarFormulario();
	     $titulo.val("");
	    $url.val("");
}	    

//Eventos
$button.click( mostrarOcultarFormulario );
$form.on('submit',  agregarPost );
