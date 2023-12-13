// let controle = 1;
// let controle2 = 1;

// while (controle <= 10) { 
//     console.log(controle);
//     controle ++;
// }  // Verifica antes de executar

// console.log("Mudança")

// do {
//     console.log(controle2);
//     controle2 ++;
// } while(controle2 <= 10);  // Do while vai executar uma vez e dpois verificar

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1, 50);
let contador = 0;

// while (rand != 10) {
//     rand = random(1, 50);
//     console.log(`${contador} número sorteado: ${rand}`);
//     contador ++;
// }

do {
    rand = random(1, 50);
    console.log(`${contador} número sorteado: ${rand}`);
    contador ++;
} while(rand != 10);