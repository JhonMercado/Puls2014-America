	var $form= $('#formulario'),
    $titulo= $('#titulo'),
    $url= $('#url'),
    $button= $('#mostrar-form'),
    $lista= $('#contenido'),
    $primerpost= $('.item').first();


function mostrarFormulario(){
   $form.slideToggle();
    return false;
}
function agregarPost(){
	    var titulo=$titulo.val(),
	    url=$url.val(),
	    clone=$primerpost.clone();
	    clone.find('.titulo_item a')
	    .text(titulo)
	    .attr('href', url)
	    .hide();
	    $lista.prepend(clone);
	    clone.slideDown();
	    //return false;
	    }
//Eventos
$button.click( mostrarFormulario );
$form.on('submit', agregarPost );
