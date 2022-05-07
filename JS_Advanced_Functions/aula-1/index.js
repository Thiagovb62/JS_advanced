// Declaraçao de funçao (Function hoisting)
falaOi();
function falaOi(){
    console.log('Oie')
}
// Obejetos de primeira classe 
// Function expression
const souUmDado = function(){
    console.log('Sou um dado')
}
souUmDado();
// variaveis recebendo funçoes
function executaFunçao(funcao){
    console.log('Vou executar sua funçao abaixo')
    funcao();
}
executaFunçao(souUmDado);
// Arrow function 
const functionArrow = () => {
    console.log('Arrow function')
}
functionArrow();
//Dentro de um objeto
const obj = { 
    falar() {
        console.log('Dentro de um objeto')
    }
}
obj.falar();