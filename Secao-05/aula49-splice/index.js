const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];
// nomes.splice(indice, delete, elem1, elem2, elem3);

// const removidos = nomes.splice(4, 1); // Remover do indice 4, um elemento, obs: retorna valor em array
// const removidos = nomes.splice(3, 2);
// console.log(nomes, removidos);

const removidos = nomes.splice(/*3, 0, 'Luiz'*/3, 2, 'Luiz', 'Otavio'); // adiciono Luiz antes de gabriel, mas posso substituir tmb, removendo os elementos e adc no lugar
console.log(nomes, removidos);


// =-=-=-=-= Exercicio =-=-=-=-=
/* Dado o seguinte array:
javascript
Copy code
const numbers = [10, 20, 30, 40, 50];
Execute as seguintes operações utilizando o método splice() e exiba o resultado após cada operação:

a) Remova o elemento '30' do array.

b) Adicione os números '60' e '70' no lugar do número '40'.

c) Remova os dois últimos elementos do array. */

// const numbers = [10, 20, 30, 40, 50];
// numbers.splice(2, 1); // Deletando o elemento 30
// numbers.splice(3, 1, 60, 70); // Adicionando os numeros 60 e 70
// numbers.splice(-2, 2); // Removendo os ultimos dois numeros
// console.log(numbers);

/*Considere o seguinte array:
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
Realize as seguintes operações utilizando o método splice() e exiba o resultado após cada operação:

a) Remova os dois primeiros elementos do array.

b) Adicione 'peach' e 'pear' no lugar dos elementos removidos.

c) Remova o elemento 'grape' do array.

Espero que este exercício seja útil para você praticar o uso do método splice() em JavaScript. Se precisar de mais orientações ou explicações sobre alguma parte do exercício, sinta-se à vontade para perguntar!*/

// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// fruits.splice(0, 2, 'peach', 'pear');
// fruits.splice(3, 1);
// console.log(fruits);