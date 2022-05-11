console.log("------------Geradora1-------------");
function* geradora1() {
  //Código qualquer
  yield "valor1";
  //Código qualquer
  yield "valor2";
  //Código qualquer
  yield "valor3";
}
const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

console.log("------------Geradora2-------------");

function* geradora2() {
  let i = 0;
   // exemplo: return i; , desabilita oque vem dps dele.
  while (true) {
    yield i;
    i++;
  }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log("------------Geradora3 e 4-------------");

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}
function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}
const g4 = geradora4();
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);

console.log("------------Geradora5-------------");
function* geradora5() {
  yield function () {
    console.log("vim do yield1");
  };

  //...a

  yield function () {
    console.log("vim do yield2");
  };
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
