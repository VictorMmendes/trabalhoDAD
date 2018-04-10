const electron = require('electron');
const { ipcRenderer } = electron;

window.$ = window.jQuery = require(`${__dirname}/../node_modules/jquery/dist/jquery.js`);

var id;

var arrayTarefas = [];
arrayTarefas[0] = {
	titulo:"Limpar a casa",
	descricao:"com detergente",
	status: 1
};
arrayTarefas[1] = {
	titulo:"Lavar a louça",
	descricao:"com sabão em pó",
	status: 0
};

$(document).ready(() => {

	$('.maximizar').click(() => ipcRenderer.send('janela:maximizar'));

	$('.minimizar').click(() => {
		ipcRenderer.send('janela:minimizar');
	});

	$('.fechar').click(() => {
		ipcRenderer.send('janela:fechar');
	});

	$('.pane-conteudo').load('principal.html');

	$('.btn-principal').click(() => {
		$('.pane-conteudo').load('principal.html');
		loadContent();
	});

	$('.btn-formulario').click(() => {
		$('.pane-conteudo').load('formulario.html');
	});

});
