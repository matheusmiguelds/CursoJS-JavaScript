const nome = ["Luiz", "Matheus", "Kimie"];

// for (let letras in nome) {
//     console.log(nome[letras]);
// }

for (let letras of nome) {
    console.log(letras);
}

nome.forEach(function (el){
    console.log(el);
});