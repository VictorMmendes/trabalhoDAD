$(document).ready(function(){
    loadContent();

    $("input[type=checkbox]").on('change', function ()
    {
        const check = $(this);
        const dados = check.attr('name').split('_');
        const label = "lb_" + dados[1];

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
        const check = $(this);
        const dados = check.attr('name').split('_');
        const label = "lb_" + dados[1];

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
        const check = $(this);
        const dados = check.attr('name').split('_');
        id = dados[1];

        $('.pane-conteudo').load('formularioAlterar.html');
    });
});

function loadContent()
{
  let i = 0;
  for (tarefa of arrayTarefas) {
    	const table = document.querySelector('tbody');
    	const tr = document.createElement('tr');
    	const tdStatus = document.createElement('td');
    	let tdTitulo = document.createElement('td')
        tdTitulo.setAttribute("name", "tr_" + i);
        tdTitulo.setAttribute("class", "tarefasLista");

        let inputCk = document.createElement("INPUT");
        inputCk.setAttribute("type", "checkbox");
        inputCk.setAttribute("name", "ck_" + i);
        inputCk.setAttribute("value", tarefa.status + "");
        tdStatus.appendChild(inputCk);

        let inputLb = document.createElement("p");
        inputLb.setAttribute("id", "lb_" + i);
        const text = document.createTextNode(tarefa.titulo);
        inputLb.appendChild(text);
        tdTitulo.appendChild(inputLb);

        tr.appendChild(tdStatus);
        tr.appendChild(tdTitulo);
        table.appendChild(tr);

        i++;
    }
}
