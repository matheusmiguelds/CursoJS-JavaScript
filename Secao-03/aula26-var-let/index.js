const verdadeira = true;
// let nome = 'Matheus'; // let tem escopo de bloco {... bloco}
// var nome2 = 'Matheus'; // var só tem escopo de função

if (verdadeira) {
    let nome = 'Miguel'; // criando novamente, não é a mesma variável
    var nome2 = 'Matheus'; // redeclarada
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa'
        console.log(nome, nome2);
    }
}

// console.log(nome); // Como está fora do escopo, o let não vai funcionar
console.log(nome2) // var funciona fora do escopo