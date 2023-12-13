const pessoa = {
    nome: "Matheus",
    sobrenome: "Miguel",
    idade: 20
};

// for (let i = 0; i < frutas.length;i++)  {
//     console.log(frutas[i]);
// }

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

for (let chaves in pessoa) {
    console.log(chaves, pessoa[chaves]);
}