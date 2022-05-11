function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  //  const metodoInterno = function(){
  //    ...
  //}

  this.metodo = function () {
    console.log(this.nome + ": sou um metodo.");
  };
}
const p1 = new Pessoa("Joao", "Picon");
p1.metodo();
