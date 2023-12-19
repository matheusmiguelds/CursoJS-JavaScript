// IIFE - Immediately invocked function expression
// Protege do escopo global

/*
function qualquerCoisa() {
    console.log(1111223245);
}

qualquerCoisa();
*/

// tem que estar dentro de um parenteses
(function(idade, peso) {
    const nome = 'Matheus'
    console.log(nome);
})(20, 64);

const nome = "Miguel";