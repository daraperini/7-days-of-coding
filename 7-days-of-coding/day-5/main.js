const hortifruti = [];
const laticinios = [];
const congelados = [];
const doces = [];
const graos = [];

const addNovoProduto = "Você deseja adicionar uma comida na sua lista de compras? Responda sim ou não."

prompt(addNovoProduto);

while (prompt(addNovoProduto) === "sim") {
    const tipoDeComida = prompt("Qual comida você deseja adicionar?")
    const categoriaDaComida = prompt("Por favor, digite o número da categoria que esta comida se encaixa: 1- Hortifruti; 2- laticinios; 3- congelados; 4- doces; 5- graos")

    tipoDeComida;
    categoriaDaComida;

    if(categoriaDaComida === "1"){
        hortifruti.push(tipoDeComida)
    }

    if(categoriaDaComida === "2"){
        laticinios.push(tipoDeComida)
    }

    if(categoriaDaComida === "3"){
        congelados.push(tipoDeComida)
    }

    if(categoriaDaComida === "4"){
        doces.push(tipoDeComida)
    }

    if(categoriaDaComida === "5"){
        graos.push(tipoDeComida)
    }
}

if (prompt(addNovoProduto) === "não") {
    const listaDeCompras = `Lista de compras: Hortifruti: ${hortifruti} Laticínios: ${laticinios} Congelados: ${congelados} Doces: ${doces} Grãos: ${graos}`

    alert(listaDeCompras);
}

while (prompt(addNovoProduto) !== "sim" && prompt(addNovoProduto) !== "não") {
    alert(`Operação não reconhecida!`);
    prompt(addNovoProduto);
}