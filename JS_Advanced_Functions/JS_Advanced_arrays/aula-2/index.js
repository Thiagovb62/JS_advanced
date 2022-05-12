//              -5   -4   -3   -2    -1
//               0    1    2    3    4
const nomes  = ['a', 'b', 'c', 'd', 'e'];

// nomes.splice(indice ,delet ,elem1,elem2,... );
const removidos = nomes.splice(3,2,'luiz','junio');
const inserindo = nomes.splice(2,0,'J');

//pop
//const removidos = nomes.splice(-1,1);

//shift
//const removidos = nomes.splice(0,1,'l');

//shift
//const removidos = nomes.splice(0,0,'lu');

//push
//const removidos = nomes.splice(nomes.length,0,1);.
console.log(nomes, removidos);