// function maior(num01, num02) {
//     if (num01 === num02) {
//         return `${num01} e ${num02} são iguais!`;
//     } else if (num01 > num02) {
//         return `${num01} é maior!`;
//     }
//     return `${num02} é maior!`;
// }

const maior = (x, y) => x > y ? x : y;

console.log(maior(12, 14));