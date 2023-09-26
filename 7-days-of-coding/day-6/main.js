const hortifruti = [];
const laticinios = [];
const congelados = [];
const doces = [];
const graos = [];

let addNovoProduto = "sim";

while (addNovoProduto != "não") {
  const listaDeCompras = `Lista de compras: Hortifruti: ${hortifruti} Laticínios: ${laticinios} Congelados: ${congelados} Doces: ${doces} Grãos: ${graos}`;
  if (
    hortifruti.length === 0 &&
    laticinios.length === 0 &&
    congelados.length === 0 &&
    doces.length === 0 &&
    graos.length === 0
  ) {
    addNovoProduto = prompt(
      "Você deseja adicionar uma comida na sua lista de compras? Responda 'sim' ou 'não'."
    );
  } else {
    addNovoProduto = prompt(
      "Você deseja adicionar uma comida na sua lista de compras? Responda 'sim', 'não' ou 'excluir'."
    );
  }

  if (addNovoProduto === "sim") {
    const tipoDeComida = prompt("Qual comida você deseja adicionar?");
    const categoriaDaComida = prompt(
      "Por favor, digite o número da categoria que esta comida se encaixa: 1- Hortifruti; 2- Laticinios; 3- Congelados; 4- Doces; 5- Grãos"
    );

    tipoDeComida;
    categoriaDaComida;

    if (categoriaDaComida === "1") {
      hortifruti.push(tipoDeComida);
    } else if (categoriaDaComida === "2") {
      laticinios.push(tipoDeComida);
    } else if (categoriaDaComida === "3") {
      congelados.push(tipoDeComida);
    } else if (categoriaDaComida === "4") {
      doces.push(tipoDeComida);
    } else if (categoriaDaComida === "5") {
      graos.push(tipoDeComida);
    }
  } else if (addNovoProduto === "excluir") {
    produtoParaExcluir = prompt(
      `Qual item deseja excluir da lista? ${listaDeCompras}`
    );

    if (hortifruti.includes(produtoParaExcluir)) {
      hortifruti.splice(hortifruti.indexOf(produtoParaExcluir), 1);
      alert(`${produtoParaExcluir} removido com sucesso!`);
    } else if (laticinios.includes(produtoParaExcluir)) {
      laticinios.splice(laticinios.indexOf(produtoParaExcluir), 1);
      alert(`${produtoParaExcluir} removido com sucesso!`);
    } else if (congelados.includes(produtoParaExcluir)) {
      congelados.splice(congelados.indexOf(produtoParaExcluir), 1);
      alert(`${produtoParaExcluir} removido com sucesso!`);
    } else if (doces.includes(produtoParaExcluir)) {
      doces.splice(doces.indexOf(produtoParaExcluir), 1);
      alert(`${produtoParaExcluir} removido com sucesso!`);
    } else if (graos.includes(produtoParaExcluir)) {
      graos.splice(graos.indexOf(produtoParaExcluir), 1);
      alert(`${produtoParaExcluir} removido com sucesso!`);
    } else {
      alert("Produto não encontrado!");
    }
  }

  if (addNovoProduto === "não") {
    alert(listaDeCompras);
  }

  while (
    addNovoProduto !== "sim" &&
    addNovoProduto !== "não" &&
    addNovoProduto !== "excluir"
  ) {
    alert(`Operação não reconhecida!`);
  }
}
