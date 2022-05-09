// IIFE -> Immediately Invoked function expression

// sao executadas assim que se fecha
(function () {
  console.log(123455);
})();

//nao geram conflito com variavies externas de
(function () {
  const nome = "Luiz";
  console.log(nome);
})();

//const nome = "Qualquer coisa"
// pdoe ser construida normalmente
(function (idade, peso, altura) {
  const sobrenome = "mirando";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }
  function falaNome() {
    console.log(criaNome("Luiz"));
  }
  falaNome();
  console.log(idade, peso, altura);
})(30, 60, 1.8);
