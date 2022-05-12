//errado
/*const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const result = array1 + array2;
console.log(result); typeof = string*/


//concat()
/*const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const result = array1.concat(array2,[7,8,9] , 'luiz');
console.log(result); */

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const result = [...array1, ...array2 , ...[7, 8, 9]];
console.log(result);