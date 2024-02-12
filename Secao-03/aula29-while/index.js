// let controle = 0;
// while (controle < 10 ) {
//     console.log(controle);
//     controle++;
// }

function random(min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}

let rand = random(min = 1, max = 50);

// while (rand !== 20) {
//     rand = random(min, max);
//     console.log(`Numero: ${rand}`);
// }

do {
    rand = random(min, max);
    console.log(`Numero: ${rand}`);
} while (rand !== 20);