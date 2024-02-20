function qualquerCoisa() {
    console.log(1222333444);
}
qualquerCoisa();

// IIFE - Imediately invoked function expression // foge do escopo global
(function(idade) {
    const nome = 'Matheus'
    console.log(nome, idade);
})(20);

const nome = 'Outro';