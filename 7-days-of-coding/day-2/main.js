const botaoFormulario = document.querySelector("#botao-formulario");

botaoFormulario.addEventListener("click", () => {
  const valorNome = document.querySelector("#nome").value;
  const valorIdade = document.querySelector("#idade").value;
  const valorLinguagem = document.querySelector("#linguagem").value;

  const somenteLetras = /^[A-Za-z]+$/;


  if ((valorNome.match(somenteLetras), valorIdade, valorLinguagem.match(somenteLetras))) {
    alert(
      `Olá ${valorNome}, você tem ${valorIdade} anos e já está aprendendo ${valorLinguagem}!`
    );
  } else {
    alert(
      "Todas as informações são obrigatórias. Nome e linguagem devem conter apenas letras. Confira se suas respostas estão corretas e reenvie o formulário."
    );
  }
});
