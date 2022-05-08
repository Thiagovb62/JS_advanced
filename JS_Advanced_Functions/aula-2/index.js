// arguments = sustenta todos os argumentos enviados
//podemos ou nao enviar parametros para a função
// so em function()
function funcao(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// rest operator
const func = (...args) => {
  console.log(args);
};
func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// caso queira que o valor de b assuma o valor que definiu.
function funcao(a, b = 2, c = 4) {
  console.log(a + b + c);
}
funcao(2, undefined, 20);

// por desistruturaçao
function conta({ operador, acumulador, numeros }) {
  for (let numero of obj.numeros) {
    try {
      if (obj.operador === "+") obj.acumulador += numero;
    } catch (error) {}
    try {
      if (obj.operador === "-") obj.acumulador += numero;
    } catch (error) {}
    try {
      if (obj.operador === "*") obj.acumulador += numero;
    } catch (error) {}
    try {
      if (obj.operador === "/") obj.acumulador += numero;
    } catch (error) {}
  }
  console.log(obj.acumulador);
}
let obj = { operador: "+", acumulador: 1, numeros: [20, 30, 40, 50] };
conta(obj);
