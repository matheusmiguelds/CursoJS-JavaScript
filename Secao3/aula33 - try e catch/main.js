// try {
//     console.log(naoExisto);
// } catch (e) {
//     console.log("Não existe...");
//     //console.log(e);
// }

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error("x e y precisam ser números.");
    }

    return x + y;
}

try {
    console.log(soma(1, 5));
    console.log(soma(1, '5'));
} catch (e) {
    //console.log(e);
    console.log("Alguma coisa mais amigável para o usuário.");
}