// Filteer, map ,reuce

//retorne os numeros maiores que 10
const numeros = [5, 50, 80.1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);

// retorne as pessoa que tem o nome com 5 letras ou mais
//retorne pessoas com mais de 50 anos
//retorne as pessoas cuja o nome termina com a
const pessoa = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 63 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];
const nome5letras = pessoa.filter((obj) => obj.nome.length >= 5);
const pessoaComMaisDe50Anos = pessoa.filter((obj) => obj.idade > 50);
const nomeTerminaletraA = pessoa.filter((obj) => obj.nome.endsWith("a"));
console.log(nomeTerminaletraA);
console.log(pessoaComMaisDe50Anos);
console.log(nome5letras);
