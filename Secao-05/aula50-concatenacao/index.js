const array01 = [1, 2, 3];
const array02 = [4, 5, 6];
// const array03 = array01 + array02;
// console.log(typeof(array03));

// const array03 = array01.concat(array02, [7, 8, 9], 'Matheus');

// ...rest -> ... spread

const array03 = [...array01, 'Matheus', ...array02, ...[7, 8, 9]]; // Botamos ...[] para não for o array literal

console.log(array03);