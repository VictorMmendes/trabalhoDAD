$(document).ready(function(){

    $("#tit").val(arrayTarefas[id].titulo);
    $("#desc").val(arrayTarefas[id].descricao);

    $("#cancel").click(function(){
    	$('.pane-conteudo').load('principal.html');
    });

    $("#confirm").click(function()
    {
        const tit = $('#tit').val();
        const desc = $('#desc').val();

        arrayTarefas[id].titulo = tit;
        arrayTarefas[id].descricao = desc;

        $('.pane-conteudo').load('principal.html');
    });

    $("#delete").click(function()
    {
        arrayTarefas.splice(id, 1);
        $('.pane-conteudo').load('principal.html');
    });

    $(".form-act").submit(function( event ) {
        event.preventDefault();
    });
});
