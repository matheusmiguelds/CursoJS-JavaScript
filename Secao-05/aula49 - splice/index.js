const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];
// nomes.splice(indice, delete, elem1, elem2, elem3);

// const removidos = nomes.splice(4, 1); // Remover do indice 4, um elemento, obs: retorna valor em array
// const removidos = nomes.splice(3, 2);
// console.log(nomes, removidos);

const removidos = nomes.splice(/*3, 0, 'Luiz'*/3, 2, 'Luiz', 'Otavio'); // adiciono Luiz antes de gabriel, mas posso substituir tmb, removendo os elementos e adc no lugar
console.log(nomes, removidos);