import BotaoConclui from './componentes/concluirTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';
// cria a tarefa digitada ao clicar em novo item.
const criarTarefa = (evento) => {
  // previne o envio dado para algum local ao clicar
  evento.preventDefault();
  //pega o valor da ul
  const lista = document.querySelector("[data-list]");
  // pega o valor inserido no input
  const input = document.querySelector("[data-form-input]");
  // coloca o valor do input dentro da variavel valor.
  const valor = input.value;
  //cria uma li.
  const tarefa = document.createElement("li");
  // busca a classe dentro de tarefa ou adiciona uma classe. com .add voce adiciona uma class
  tarefa.classList.add("task");
  // estrutura do paragrafo com o valor inserido
  const conteudo = `<p class="content">${valor}<p>`;

  // coloca dentro da variavel -tarefa- o valor que atribuido na variavel -conteudo-
  tarefa.innerHTML = conteudo;
  // coloca o botaoConclui dentro da li ----- a variavel tarefa cria um li
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());
  // coloca um elemento (li )dentro de outro elemento (ul) que passa a ser o pai.
  lista.appendChild(tarefa);

  //zera a caixa de input, no caso coloca uma string vazia no local.
  input.value = " ";
};

//pega a informação do botão
const novaTarefa = document.querySelector("[data-form-button]");
//addEventListener que usa o -novaTarefa- para linkar o botao, click e o -criarTarefa-.
novaTarefa.addEventListener("click", criarTarefa);

// essa função cria o botao concluir, adiciona class:check-button, coloca o texto: concluir e executa 'concluirTarefa' ao ser clicado.
