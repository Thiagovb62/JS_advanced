// Valor por referencia
const nomes = ["a", "b", "c", "d", "e", "f"];
//const nomes = new Array('a', 'b', 'c', 'd', 'e',)
const novo = [...nomes];
console.log(novo);
//const removido = nomes.pop() remove e mostra  o nome f
//const desloca = nomes.shift() todo mundo volta um indice e o antigo elemento do indice 0 some
//nomes.push('') add algo no array
nomes.unshift("Thiago");
nomes.slice(3, -1); // divide o array
nomes[2] = "k";
delete nomes[2];
console.log(nomes);

// tranformando string em array
const name = "Luiz Otavio Silva";
const names = name.split(' ');
// name.join() caso fosse um array para string
console.log(names);
