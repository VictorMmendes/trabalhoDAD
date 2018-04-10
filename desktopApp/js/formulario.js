$(document).ready(function(){

    $("#cancel").click(function(){
    	$('.pane-conteudo').load('principal.html');
    });

    $("#confirm").click(function(){

        const tit = $('#tit').val();
        const desc = $('#desc_').val();

        const ind = arrayTarefas.length;
        arrayTarefas[ind] = {
        	titulo:tit,
        	descricao:desc,
        	status: 1
        };

        $('.pane-conteudo').load('principal.html');
    });

    $(".form-act").submit(function( event ) {
        event.preventDefault();
    });
});
