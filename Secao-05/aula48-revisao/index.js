// const nomes = ['Eduardo', 'Maria', 'Joana'];
// //const nomes = new Array('Eduardo', 'Maria', 'Joana'); // Podemos fazer assim tmb
// // nomes[2] = 'Joao'; // Podemos alterar o valor do indice
// // delete nomes[2]; // Podemos apagar um elemento do array, mas sem mudar os indices
// const novo = nomes; // Pode passar valor por referência.
// novo.pop(); // Se alterar aqui, altera no nomes tmb
// console.log(nomes);

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = [...nomes]; // Assim vira um novo elemento, o que fizer no 'novo', não altera no nomes.

// const removido = novo.pop() // retorna o valor removido
// const removido = novo.shift() // Remove no inicio e desloca os indices
// console.log(nomes);
// console.log(novo, removido);

// nomes.push('Joao'); // Adiciona no final
// nomes.unshift('Wallace'); // Adiciona no indice 0
// console.log(nomes);

// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// const novo = nomes.slice(1, 3); // Eu escolho quais indices pegar, no caso indice 0 até 3
// const novo2 = nomes.slice(0, -1); 
// console.log(novo2);

const nome = 'Luiz Otávio Miranda'.split(' ');
console.log(nome);
const nomeJunto = nome.join(' ');
console.log(nomeJunto);