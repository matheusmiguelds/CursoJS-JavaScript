// arguments que sustenta todos os argumentos enviados
// function funcao(a, b, c) {
//     let total = 0;
//     for (argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total, a, b, c);
// };

// function funcao(a, b, c, d, e, f){
//     console.log(a, b, c, d, e, f);
// };

// funcao(1, 2, 3);

// function funcao({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }

// funcao({nome: "Matheus", sobrenome: "Miguel", idade: 20});

const conta = function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador == '+') acumulador += numero;
        if (operador == '-') acumulador -= numero;
        if (operador == '/') acumulador /= numero;
        if (operador == '*') acumulador *= numero;

    }
    console.log(acumulador);
};

conta('+', 0, 20, 30, 40, 50);