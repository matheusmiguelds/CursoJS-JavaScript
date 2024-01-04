// Função construtora retona objetos
// Função fabrica faz objetos
// Na construtora precisamos iniciar o nome com letra MAIUSCULA
// factory - criaPessoa
// construtora - Pessoa (new)
// são um molde para gerar novos objetos

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){};

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log("Sou um método");
    };
}

const p1 = new Pessoa('Matheus', 'Miguel');
const p2 = new Pessoa('Julia', 'Kimie');

console.log(p1);
console.log(p2);