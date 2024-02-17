// function funcao() {
//     console.log('Oie', arguments);
// };
// funcao('valor', 1, 2, 3, 4, 5, 6, 7 ,8, 9, 10); // Apenas com function, temos uma variável arguments que PEGA TD, não precisa declarar

// function somar() {
//     let total = 0;
//     for(argumento of arguments) {
//         total += argumento;
//     };
//     return total;
// }
// console.log(somar(2, 4, 5, 6, 7, 8, 9, 11, 54));

// function funcao3(a = 0, b = 0) {
//     console.log(a + b); //Vai retornar NaN, para não retornar devemos por um valor padrão em a e b
// };
// funcao3(2);

// function funcao4({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// };
// funcao4({nome: 'Matheus', sobrenome: 'Miguel', idade: 20});

// function funcao5([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// };
// funcao5(['matheus', 'Miguel', 20]);

const conta =  function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    return acumulador
};
console.log(conta('*', 1, 20, 30, 40, 50));