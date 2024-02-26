// Função construtora -> objetos (sem virgulas)
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
// Fabrica -> criaPessoa

function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    //Pessoa.nome = nome
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log('sou um método');
    };
}

const p1 = new Pessoa('Matheus', 'Miguel');
const p2 = new Pessoa('Julia', 'Kimie');

console.log(p1, p2);
p1.metodo();