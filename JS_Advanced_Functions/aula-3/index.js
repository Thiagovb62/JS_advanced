/*function falaFrase (comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!')
console.log(resto);*/

// imagine que voce tem muitas funçoes para fazer uma mesma fucionalidade
// enclousure
/*function duplica(n){
    return n * 2;
}
function triplica(n){
    return n * 2;
}
function quadriplica(n){
    return n * 2;
}*/

// por isso se usa mais de uma funçao dentro de uma funçao ,junto com  varios returns
// funçoes clousures :associar dados (do ambiente) com uma função que trabalha estes dados.
function Multiplicadores(multiplicador) {
  return function mult(n) {
    return n * multiplicador;
  };
}
const duplica = Multiplicadores(2);
const triplica = Multiplicadores(3);
const quadriplica = Multiplicadores(4);

console.log(duplica(3));
console.log(triplica(4));
console.log(quadriplica(5));
