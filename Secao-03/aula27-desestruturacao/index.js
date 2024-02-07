const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiro, segundo, terceiro, quarto, quinto, sexto, ...resto] = numeros;
const [um, , dois, , cinco] = numeros;

console.log(sexto, resto);

const numero2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(numero2[0][2]);
