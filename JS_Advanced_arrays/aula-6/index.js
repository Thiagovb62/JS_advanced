//some todos os numeros (reduce)
// retorne um array com os pares (filter)
// Retorne um array com dobro dos valores(map)

const numeros = [5, 50, 80, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros.reduce((acc, val, indice, array) => {
  acc += val;
  return acc;
  // if(val % 2 == 0) acc.push(val) return acc
  // acc.push(val*2) return acc
});
console.log(soma);
/*const pares = numeros.filter((valor) => {
  try {
    if (valor % 2 === 0) return valor;
  } catch (e) {
    return e;
  }
});
console.log(pares);

const dobro = numeros.map((valor) => {
  try {
    return valor * 2;
  } catch (error) {}
});
console.log(dobro);*/

//retorne a pessoa mais velha
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 63 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];
const maisVelha = pessoas.reduce((acc, valor) => {
    if (acc.idade > valor.idade) return acc;
    return valor;
});
console.log(maisVelha)
