// Declaração de função (Function hoisting) // hoisting puxa a função para ser executada primeira, então não impoorta onde eu chame
falaOi();
function falaOi() {
    console.log('Oie');
}

// Firts-class objects (Objetos de primeira classe)
// Function expression
// const nome = 'Matheus'
const souUmDado = function() {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    console.log("Vou executar sua função abaixo:")
    funcao();
};
executaFuncao(souUmDado);

// Arrow function
const arrow = () => {
    console.log("Sou uma arrow function");
};
arrow();

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log("Estou falando...");
    }
};
obj.falar();