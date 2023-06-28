const BotaoDeleta = () => {
    const botaoDeleta = document.createElement("button");
    botaoDeleta.classList.add("check-deleta");
    botaoDeleta.innerText = "deletar";
    botaoDeleta.addEventListener("click", deletarTarefa);
    // caso você esqueça de colocar o return o botão não será criado.
    return botaoDeleta;
  };

  const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();

    return botaoDeleta;
  };

  export default BotaoDeleta