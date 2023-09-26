const mensagemDeErro = "Sua resposta não é válida. Recarregue a página e tente novamente.";
const especializacao =
  "Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack";

const novasTecnologias = "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo."

const verificaRespostaSobreNovasTecnologias = () => {
    while (prompt(novasTecnologias) === "ok") {
      let novaTecnologia = prompt("Qual?")
        alert (`${novaTecnologia} é realmente muito legal!`);
        prompt(novasTecnologias);
    }
}


const area = prompt(
  "Você quer seguir para área de Front-End ou para a área de Back-End?"
);


if (area.toLowerCase() === "front-end") {
  const frontEnd = prompt("Você quer aprender React ou Vue?");
  if (frontEnd.toLowerCase() === "react" || frontEnd.toLowerCase() === "vue") {
    const opcoesDeEspecializacao = prompt(especializacao);
    if (opcoesDeEspecializacao.toLowerCase() === "1") {
      alert("Que bom que você já escolheu sua área de especialidade!");
    } else if (opcoesDeEspecializacao.toLowerCase() === "2") {
      alert("A área Fullstack está em alta! Parabéns pela escolha!");
    } else {
      prompt(mensagemDeErro);
    }
    prompt(novasTecnologias);
    verificaRespostaSobreNovasTecnologias();
  } else {
    prompt(mensagemDeErro);
  }
} else if (area.toLowerCase() === "back-end") {
  const backEnd = prompt("Você quer aprender C# ou Java?");
  if (backEnd.toLowerCase() === "c#" || backEnd.toLowerCase() === "java") {
    const opcoesDeEspecializacao = prompt(especializacao);
    if (opcoesDeEspecializacao.toLowerCase() === "1") {
      alert("Que bom que você já escolheu sua área de especialidade!");
    } else if (opcoesDeEspecializacao.toLowerCase() === "2") {
      alert("A área Fullstack está em alta! Parabéns pela escolha!");
    } else {
      prompt(mensagemDeErro);
    }
    prompt(novasTecnologias);
    verificaRespostaSobreNovasTecnologias();
  } else {
    prompt(mensagemDeErro);
  }
} else {
  prompt(mensagemDeErro);
}
