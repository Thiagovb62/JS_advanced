const numeros = [5, 50, 80, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => {
  return `Luiz -> ${valor}`;
  // pode retornar e modificar o array ,os indices e os valores.
  // return valor *2;
});
console.log(numerosEmDobro);

// Para cada elemento:
// retorne apenas uma string com o nome da pessoas
// remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 63 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];
const soUmaString = pessoas.map((obj) => {
  return obj.nome;
});
console.log(soUmaString);

const idade = pessoas.map((obj) => {
  ({ idade: obj.idade });
});
console.log(idade);

const comIds = pessoas.map((obj, indice) => {
  const newObj = { ...obj }; // evita que o array original seja modificado
  newObj.id = indice;
  return newObj;
});
console.log(comIds);

console.log(pessoas);
