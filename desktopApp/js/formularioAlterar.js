window.$ = window.jQuery = require(`${__dirname}/../node_modules/jquery/dist/jquery.js`);

$(document).ready(function(){

    $("#tit").val(arrayTarefas[id].titulo);
    $("#desc").val(arrayTarefas[id].descricao);

    $("#cancel").click(function(){
    	$('.pane-conteudo').load('principal.html');
    });

    $("#confirm").click(function()
    {
        var tit = $('#tit').val();
        var desc = $('#desc').val();

        arrayTarefas[id].titulo = tit;
        arrayTarefas[id].descricao = desc;

        $('.pane-conteudo').load('principal.html');
    });

    $(".form-act").submit(function( event ) {
        event.preventDefault();
    });
});

function load(id) {
  alert();
}
