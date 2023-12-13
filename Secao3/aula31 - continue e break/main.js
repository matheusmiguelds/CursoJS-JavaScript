// break - Parar a execução
// continue - Continuar

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero % 2 == 0) {
        continue; // Vai continuar, ignorando os códigos que viriam
    }
    console.log(numero);
}

console.log("#################");

for (let numero2 of numeros) {
    console.log(numero2)
    if (numero2 == 7) {
        break; // Parou a execução do código
    }
}