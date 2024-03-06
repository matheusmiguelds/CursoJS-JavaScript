// Filter, map, reduce

// Retorne os numeros maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const resultado = numeros.filter((numero) => numero > 10);
console.log(resultado);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retrone as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const resultadoCincoLetras = pessoas.filter((pessoa) => pessoa.nome.length >= 5);
const resultadoPessoaMais50 = pessoas.filter((pessoa) => pessoa.idade > 50);
const resultadoTerminaA = pessoas.filter((pessoa) => pessoa.nome.toLowerCase().endsWith('a'));
console.log(resultadoCincoLetras);
console.log(resultadoTerminaA);
console.log(resultadoPessoaMais50);