// Retorne a soma do dobro de valores pares.


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 15, 27];
const numeroPares = numeros
.filter((numero) => numero % 2 === 0)
.map((numero) => numero * 2)
.reduce((ac, valor) => ac += valor);
console.log(numeroPares);