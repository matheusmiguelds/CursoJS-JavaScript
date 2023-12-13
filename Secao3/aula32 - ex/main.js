// function maiorNumero(numero1, numero2){
//     if(numero1 > numero2) {
//         return resultado = 'Numero 1 é maior que o número 2';
//     } 
//     else if (numero2 > numero1) {
//         return resultado = 'Numero 2 é maior que o número 1';
//     }
//     return resultado = 'Numeros iguais';
// }

// console.log(maiorNumero(12, 13));

// function ePaisagem(largura, altura) {
//     return largura > altura;
// }

// console.log(ePaisagem(1920, 1920));

function divisao(numero) {
    if(numero % 3 == 0 && numero % 5 ==0) {
        return 'FizzBuzz'
    }
    else if(numero % 3 == 0) {
        return 'Fizz'
    }
    else if(numero % 5 == 0) {
        return 'Buzz'
    }
    return numero;
}

for (let i = 0; i<20; i++) {
    console.log(i, divisao(i));
}