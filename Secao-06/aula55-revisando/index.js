// const pessoa = {
//     nome: 'Matheus',
//     sobrenome: 'Miguel'
// };

// const chave = 'nome'
// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// console.log(pessoa[chave]);

// const p1 = new Object();
// p1.nome = 'Matheus';
// p1.sobrenome = 'Miguel';
// console.log(p1);
// // delete p1.nome;
// // console.log(p1);
// p1.falarNome = function() {
//     console.log(`${this.nome} está falando seu nome`);
// };
// p1.falarNome();

// Factory functions / Constructor functions / Classes

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome, 
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }

//     };
// }

// const p1 =  criaPessoa('Matheus', 'Miguel');
// console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}

const p1 = new Pessoa('Matheus', 'Miguel');
// Object.freeze(p1); // Não permite mudanças no objeto
p1.nome = 'Outra coisa'
console.log(p1);