//factory function;
// constructor function;
function criaPessoa(nome, sobrenome, alt, pes) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto) {
      return `${this.nome} esta ${assunto}`;
    },
    altura: alt,
    peso: pes,
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return `${indice.toFixed(2)}`;
    },
  };
}

const p1 = criaPessoa("luiz", "Otavio", 1.8, 69);
const p2 = criaPessoa("luiz", "otavio", 1.9, 80);
console.log(p1.imc);
console.log(p2.imc);
