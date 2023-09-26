const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

let realizarOperacao = "";

while (realizarOperacao == "") {
  const realizarOperacao = prompt("Escolha uma operação: +, -, *, /, sair.");

  if (
    realizarOperacao === "+" ||
    realizarOperacao === "-" ||
    realizarOperacao === "*" ||
    realizarOperacao === "/"
  ) {
    const num1 = prompt("Digite o primeiro número da operação.");
    const num2 = prompt("Digite o segundo número da operação.");

    switch (realizarOperacao) {
      case "+":
        alert(somar(parseInt(num1), parseInt(num2)));
      case "-":
        alert(subtrair(parseInt(num1), parseInt(num2)));
      case "*":
        alert(multiplicar(parseInt(num1), parseInt(num2)));
      case "/":
        alert(dividir(parseInt(num1), parseInt(num2)));
    }
  } else if (realizarOperacao === "sair") {
    break;
  }

  while (
    realizarOperacao !== "+" &&
    realizarOperacao !== "-" &&
    realizarOperacao !== "*" &&
    realizarOperacao !== "/" &&
    realizarOperacao !== "sair"
  ) {
    alert(`Operação não reconhecida!`);
    break;
  }
}

alert("Até a próxima!");
