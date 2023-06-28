const BotaoConclui = () => {
    //cria o elemento botao
    const botaoConclui = document.createElement("button");
    //adiciona uma class -check-button- ao -button-
    botaoConclui.classList.add("check-button");
    // determina qual o texto que será mostrado quando o botão for criado.
    botaoConclui.innerText = "concluir";
    //ao ser clicado ele executa a função -conluirTarefa-
    botaoConclui.addEventListener("click", concluirTarefa);
    // caso você esqueça de colocar o return o botão não será criado.
    return botaoConclui;
  };

  // essa função cria uma linha cortando o texto quando clicado em concluir.
  const concluirTarefa = (evento) => {
    //o evento é o click, o target serve pra dizer qual elemento foi clicado
    const botaoConclui = evento.target;
    //sobe um elemento, sai do -button- e vai pra -li-
    const tarefaCompleta = botaoConclui.parentElement;
    //o toggle devolve um boleano (funciona como liga e desliga) ele vai ficar variando entre com -done- e sem -done- na nossa -li-.
    tarefaCompleta.classList.toggle("done");
  };

  export default BotaoConclui