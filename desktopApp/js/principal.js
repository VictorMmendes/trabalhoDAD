window.$ = window.jQuery = require(`${__dirname}/../node_modules/jquery/dist/jquery.js`);

$(document).ready(function(){
    loadContent();

    $("input[type=checkbox]").on('change', function ()
    {
        var check = $(this);
        var dados = check.attr('name').split('_');
        var label = "lb_" + dados[1];

        if(check.prop('checked') == true)
        {
            $('#'+label).css("text-decoration", "line-through");
            arrayTarefas[dados[1]].status = 0;
        } else {
            $('#'+label).css("text-decoration", "none");
            arrayTarefas[dados[1]].status = 1;
        }
    });

    $("input[type=checkbox]").each(function() {
        var check = $(this);
        var dados = check.attr('name').split('_');
        var label = "lb_" + dados[1];

        if($(this).val() == 0)
        {
            $(this).prop('checked', true);
            $('#'+label).css("text-decoration", "line-through");
        } else {
            $('#'+label).css("text-decoration", "none");
        }
    });

    $(".tarefasLista").on('click', function ()
    {
        var check = $(this);
        var dados = check.attr('name').split('_');
        id = dados[1];

        $('.pane-conteudo').load('formularioAlterar.html');
    });
});

function loadContent()
{
	for(var i = 0; i < arrayTarefas.length; i++)
	{
    	const table = document.querySelector('tbody');
    	const tr = document.createElement('tr');
    	const tdStatus = document.createElement('td');
    	var tdTitulo = document.createElement('td')
        tdTitulo.setAttribute("name", "tr_" + i);
        tdTitulo.setAttribute("class", "tarefasLista");

        var inputCk = document.createElement("INPUT");
        inputCk.setAttribute("type", "checkbox");
        inputCk.setAttribute("name", "ck_" + i);
        inputCk.setAttribute("value", arrayTarefas[i].status + "");
        tdStatus.appendChild(inputCk);

        var inputLb = document.createElement("p");
        inputLb.setAttribute("id", "lb_" + i);
        const text = document.createTextNode(arrayTarefas[i].titulo);
        inputLb.appendChild(text);
        tdTitulo.appendChild(inputLb);

        tr.appendChild(tdStatus);
        tr.appendChild(tdTitulo);
        table.appendChild(tr);
    }
}
