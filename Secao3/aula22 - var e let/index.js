const verdadeira = true;

// Let tem escopo de bloco {...bloco}
// Var tem escopo de função

let nome = "Luiz";
var nome2 = "Luiz";

if (verdadeira) {
    let nome = "Otávio";
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = "da"
        console.log(nome);
    }
}

