const menorNumero = 0;
const maiorNumero = 10;

let numeroSecreto = parseInt(Math.random() * maiorNumero + 1);
console.log(numeroSecreto);

const acerteONumero = `Estou pensando em um número maior que ${menorNumero} e menor que ${maiorNumero}. Qual número você acha que estou pensando?`;

const numeroDeTentativas = () => {
  for (tentativas = 2; tentativas > 0; tentativas--) {
    alert(`${prompt(acerteONumero)} não é a resposta correta.`);
    alert(`Você tem mais ${tentativas} tentativa(s).`);
    prompt(acerteONumero);
  }
};

prompt(acerteONumero);

if (prompt(acerteONumero) == numeroSecreto) {
  alert(`Você acertou! Estava pensando no número ${numeroSecreto}!`);
} else if (
  prompt(acerteONumero) < menorNumero ||
  prompt(acerteONumero) > maiorNumero
) {
  alert(
    `${prompt(
      acerteONumero
    )} não é um número válido. Recarregue a página e tente novamente.`
  );
} else {
  numeroDeTentativas();
  alert(`Você perdeu. O número secreto era ${numeroSecreto}!`);
}
